import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

const staticPaths = [
  "/",
  "/about",
  "/contact",
  "/enterprise",
  "/artikler"
];

export const GET: APIRoute = async ({ site }) => {
  const baseUrl = site ?? new URL("http://localhost:4321");

  const artikler = await getCollection("artikler", ({ data }) => !data.draft);
  const urls = [
    ...staticPaths,
    ...artikler.map((artikkel) => `/artikler/${artikkel.id}`)
  ];

  const xmlBody = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((path) => {
      const loc = new URL(path, baseUrl).toString();
      return `  <url><loc>${loc}</loc></url>`;
    })
    .join("\n")}\n</urlset>`;

  return new Response(xmlBody, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
};
