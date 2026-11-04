// Cloudflare Pages Function: POST /api/contact
// Tar imot kontaktskjemaet, sjekker Turnstile og sender e-post via Resend.
//
// Miljøvariabler (Cloudflare Pages → Settings → Variables and Secrets):
//   RESEND_API_KEY        – API-nøkkel fra resend.com (secret)
//   TURNSTILE_SECRET_KEY  – Secret key fra Cloudflare Turnstile (secret)
//   CONTACT_TO            – Adressen forespørslene sendes til
//   CONTACT_FROM          – Valgfri. Avsender, f.eks. "Bitcoin Strategi <skjema@bitcoinstrategi.no>".
//                           Krever verifisert domene i Resend. Standard er Resends testavsender.

interface Env {
  RESEND_API_KEY?: string;
  TURNSTILE_SECRET_KEY?: string;
  CONTACT_TO?: string;
  CONTACT_FROM?: string;
}

interface Context {
  request: Request;
  env: Env;
}

const DEFAULT_FROM = "Bitcoin Strategi <onboarding@resend.dev>";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const FIELDS = [
  { name: "name", label: "Navn", max: 200 },
  { name: "company", label: "Selskap", max: 200 },
  { name: "role", label: "Rolle", max: 200 },
  { name: "size", label: "Størrelse", max: 50 },
  { name: "objective", label: "Mål", max: 100 },
  { name: "timeline", label: "Tidshorisont", max: 50 },
  { name: "email", label: "E-post", max: 320 },
  { name: "message", label: "Melding", max: 5000 }
] as const;

type FieldName = (typeof FIELDS)[number]["name"];

function json(body: Record<string, unknown>, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8" }
  });
}

function singleLine(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}

async function verifyTurnstile(token: string, secret: string, ip: string | null): Promise<boolean> {
  const body = new FormData();
  body.append("secret", secret);
  body.append("response", token);
  if (ip) body.append("remoteip", ip);

  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body
  });
  if (!res.ok) return false;
  const data = (await res.json()) as { success?: boolean };
  return data.success === true;
}

export async function onRequestPost({ request, env }: Context): Promise<Response> {
  if (!env.RESEND_API_KEY || !env.TURNSTILE_SECRET_KEY || !env.CONTACT_TO) {
    console.error("Kontaktskjema: mangler miljøvariabler");
    return json({ ok: false, error: "Skjemaet er ikke satt opp ennå. Send oss en e-post i stedet." }, 500);
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return json({ ok: false, error: "Ugyldig forespørsel." }, 400);
  }

  // Honningkrukke: ekte brukere ser ikke dette feltet. Late som alt gikk bra.
  if (String(form.get("website") ?? "").trim() !== "") {
    return json({ ok: true });
  }

  const values = {} as Record<FieldName, string>;
  for (const field of FIELDS) {
    const value = String(form.get(field.name) ?? "").trim();
    if (value.length > field.max) {
      return json({ ok: false, error: `Feltet «${field.label}» er for langt.` }, 400);
    }
    values[field.name] = value;
  }

  if (!EMAIL_PATTERN.test(values.email)) {
    return json({ ok: false, error: "Skriv inn en gyldig e-postadresse." }, 400);
  }
  if (values.message === "") {
    return json({ ok: false, error: "Skriv en kort melding." }, 400);
  }

  const token = String(form.get("cf-turnstile-response") ?? "");
  const human =
    token !== "" &&
    (await verifyTurnstile(token, env.TURNSTILE_SECRET_KEY, request.headers.get("CF-Connecting-IP")));
  if (!human) {
    return json({ ok: false, error: "Vi klarte ikke å bekrefte at du er et menneske. Prøv igjen." }, 400);
  }

  const who = singleLine(values.company || values.name || values.email);
  const text = FIELDS.filter((field) => values[field.name] !== "")
    .map((field) =>
      field.name === "message"
        ? `\n${field.label}:\n${values[field.name]}`
        : `${field.label}: ${singleLine(values[field.name])}`
    )
    .join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: env.CONTACT_FROM || DEFAULT_FROM,
      to: [env.CONTACT_TO],
      reply_to: values.email,
      subject: `Ny forespørsel fra nettsiden: ${who}`.slice(0, 200),
      text
    })
  });

  if (!res.ok) {
    console.error("Kontaktskjema: Resend svarte", res.status, await res.text());
    return json({ ok: false, error: "Noe gikk galt da vi skulle sende. Prøv igjen, eller send oss en e-post." }, 502);
  }

  return json({ ok: true });
}
