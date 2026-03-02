import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://bitcoinstrategi.no",
  output: "static",
  adapter: cloudflare()
});