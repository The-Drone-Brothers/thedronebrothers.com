# The Drone Brothers — Website

A static, AI-managed marketing site for **The Drone Brothers** (commercial drone
services), built on a **build-once-then-freeze** foundation.

> **Read [`CLAUDE.md`](./CLAUDE.md) before working in this repo.** It defines the locked
> stack, what is frozen vs. open, and how a sanctioned foundation change is made.

## Stack

- **[Astro](https://astro.build) 7** (`output: 'static'`) · **TypeScript** (strict)
- **Tailwind CSS v4** via `@tailwindcss/vite`, driven by CSS custom-property design tokens
- Astro **Content Collections + Zod** (build-time front-matter validation)
- **Pagefind** (search) · **Formspree + Cloudflare Turnstile** (forms)
- `@astrojs/sitemap` · `@astrojs/rss` · `astro:assets` (build-time)
- CI: GitHub Actions (`astro check`, `lychee`, `gitleaks`)
- **Production host: Cloudflare Pages** (repo + CI on GitHub)

## Requirements

- Node `>=22.12.0` (see `.nvmrc` → Node 24)

## Local development

```sh
npm install        # install pinned dependencies
npm run dev        # local dev server (http://localhost:4321)
npm run build      # production build → ./dist
npm run preview    # serve the built ./dist locally
npm run check      # astro check (types + content schema validation)
npm run format     # prettier --write
```

## Environment

Copy `.env.example` to `.env` for local dev. **Never commit `.env`.** Deploy secrets
(`CF_API_TOKEN`, `CF_ACCOUNT_ID`) are GitHub Actions repository secrets, not files.

## Branching & delivery

No direct commits to `main`. Work on a branch → open a PR → review at the single publish
gate → merge. Foundation changes follow the sanctioned-change loop in `CLAUDE.md` §5.
