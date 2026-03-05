import type { APIRoute } from "astro";
import { articles } from "../data/articles";

const staticPaths = [
  "/",
  "/about",
  "/contact",
  "/smb",
  "/enterprise",
  "/compliance",
  "/bransjer",
  "/innsikt"
];

export const GET: APIRoute = ({ site }) => {
  const baseUrl = site ?? new URL("http://localhost:4321");

  const urls = [
    ...staticPaths,
    ...articles.map((article) => `/innsikt/${article.slug}`)
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
