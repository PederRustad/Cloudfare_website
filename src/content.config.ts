import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Hver artikkel er en .md-fil i src/content/artikler/.
// Filnavnet blir adressen: min-artikkel.md -> /artikler/min-artikkel
const artikler = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/artikler" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published: z.coerce.date(),
    draft: z.boolean().default(false)
  })
});

export const collections = { artikler };
