# Bitcoin Strategi (Astro + Cloudflare Pages)

This repository now contains an Astro website for `bitcoinstrategi.no`.

## Tech stack

- Astro
- Vanilla CSS (custom design system)
- Static output for Cloudflare Pages

## Local development

1. Install dependencies:

```bash
npm install
```

2. Start dev server:

```bash
npm run dev
```

3. Open `http://localhost:4321`.

## Build

```bash
npm run build
npm run preview
```

## Project structure

```txt
src/
  components/
  data/
  layouts/
  pages/
  styles/
public/
  _redirects
  robots.txt
  favicon.svg
```

## Deploy to Cloudflare Pages

Use these settings in Cloudflare Pages:

- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/` (default)
- Production branch: `main`

## Domain setup

1. Add custom domains in Pages:
- `bitcoinstrategi.no`
- `www.bitcoinstrategi.no`

2. Ensure DNS points to Cloudflare.

3. Keep WordPress live until this site is verified in production.

## Redirects from old WordPress URLs

Use `public/_redirects` and extend it with every important old URL:

```txt
/old-wordpress-url /new-url 301
```

## Content updates

- Edit page files in `src/pages`
- Edit article list in `src/data/articles.ts`
