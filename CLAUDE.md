# CLAUDE.md — Drone Brothers Website (Foundation Freeze & Working Rules)

> Read this file first, every session. It defines what is frozen, what is open, and
> how a sanctioned change to the frozen parts is made. Keep this file short — bloated
> instruction files waste the context budget that should go to real work.

## 1) What this project is

A static, AI-managed website for **The Drone Brothers** (commercial drone services),
built on a **build-once-then-freeze** foundation. The expensive architecture is built
once, then change-controlled; routine content runs cheap on top of it.

## 2) Locked stack — do not substitute or upgrade-churn

Astro 7 (`output: 'static'`) · TypeScript strict · Tailwind v4 driven by CSS
custom-property design tokens (`@theme`) · Astro Content Collections + **Zod**
(build-time front-matter validation) · Pagefind (search) · [Formspree | Getform] +
Cloudflare Turnstile (forms) · `@astrojs/sitemap` + `@astrojs/rss` + `astro:assets`
(build-time) · GitHub + GitHub Actions CI (`astro check`, `lychee`, `gitleaks`) ·
**Production host: Cloudflare Pages** (NOT bare GitHub Pages). Pin versions; verify a
package exists before adding it; minimize dependencies.

## 3) "Frozen" ≠ read-only. Frozen = change-controlled.

The foundation is a **load-bearing wall, not wallpaper.** It can be changed — but
only on purpose, on a branch, with review. The freeze exists to stop _accidental_ and
_drift_ changes, not to forbid _deliberate_ ones. **"Frozen between deliberate
revisions," not "frozen forever."**

### Three actors, three permission levels

| Actor                                             | May change the foundation? | Rule                                                                                                                                                                                                                     |
| ------------------------------------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Non-technical prompter** (content creator)      | **Never**                  | Only sees content templates/entries. Never touches foundation files.                                                                                                                                                     |
| **You, the AI, during a CONTENT session**         | **No — guardrailed**       | Do NOT edit foundation files while doing content work, even if it seems helpful. This prevents drift and silent regressions. If a content task seems to _require_ a foundation change, STOP and say so — do not proceed. |
| **The lead dev (human), in a FOUNDATION session** | **Yes — anytime**          | Owns the foundation. May change it directly or direct you to, deliberately and reviewed. Nothing here is immutable to the lead dev.                                                                                      |

The operative phrase everywhere in this repo: **do not touch the frozen foundation
_without explicit instruction_.** Explicit instruction from the lead dev _is_ the
unlock. Uninstructed change is forbidden; instructed change is fine.

## 4) What is FROZEN (foundation) vs OPEN (content)

**FROZEN — foundation (change only in a sanctioned foundation session):**

- `astro.config.mjs`, `tsconfig.json`, `package.json` / `package-lock.json`
- `src/styles/tokens.css` (the `@theme` token source) + `src/styles/global.css`
- `src/components/primitives/*` (`Container`/`Section`/`Stack`/`Grid`),
  `src/components/Seo.astro`, `Header.astro`, `Footer.astro`, `Sidebar.astro`, `Form.astro`
- `src/components/sections/*` (section components + `SectionRenderer`) — the section
  _types_ are foundation; the section _entries_ are content (see OPEN)
- `src/layouts/*` (`BaseLayout`, `PageLayout`, `ArticleLayout`)
- `src/config/*` (`site.ts`, `navigation.ts`), `src/content.config.ts` (Zod schemas)
- routing files in `src/pages/*` (`[...slug].astro`, `blog/*`, `rss.xml.ts`, `search.astro`,
  `contact.astro`, `styleguide.astro`) and `src/assets/logos/*`
- `public/*` (favicons, `site.webmanifest`, `robots.txt`, `_redirects`)
- `.github/*` (CI/CD workflows, `CODEOWNERS`, PR template), `.lycheeignore`,
  `docs/GOVERNANCE.md`, and this `CLAUDE.md`

**OPEN — content (safe to add/edit in a normal content session):**
content-collection entries (markdown + front-matter) under `src/content/**`,
and the copy _inside_ them — including **home-page sections** in
`src/content/sections/**` (add/reorder/edit CTA, testimonial, prose blocks).
That's it. Content lives in data, never in the chassis. (The `__example` entries and
the sample `sections/*` are deletable once real content exists.)

## 5) How to make a SANCTIONED foundation change (unfreeze → change → refreeze)

Only when the lead dev explicitly opens a foundation session:

1. **Branch** off `main` (e.g., `foundation/<short-desc>`). You are now in foundation mode.
2. **State the blast radius first:** name which existing behavior/components must keep
   working after the change. (Anti-regression step — required.)
3. **Surgical change only.** Edit the minimum needed. Do not refactor or "tidy"
   adjacent code you weren't asked to touch.
4. **Use the high-reasoning tier** (this is 10%-reserve work, not cheap content work).
5. **Open a PR;** keep the diff small and readable. CI must pass
   (`astro check` + build + `lychee` + `gitleaks`).
6. **Merge through the single publish gate**, then **re-tag `known-good-foundation`**.
   The foundation is now refrozen at the new baseline.

If you are ever unsure whether you're in a content session or a foundation session:
**assume content session and do not touch the foundation.** Ask.

## 6) Surgical-edit directive (applies to ALL sessions)

- Change one file/section at a time. **Never regenerate a whole page or file** to alter
  a small part.
- Before editing anything, state what must keep working.
- Don't break working features to add new ones. Preserve existing functionality.
- Prefer find/replace-style edits over rewrites.

## 7) Token & model economy

- **Cheap/fast tier** → content drafting, copy edits, captions (most daily work).
- **Mid tier** → surgical code/content edits, reviews.
- **High-reasoning tier** → architecture, schema, debugging, **and any sanctioned
  foundation change** only.
- Budget shape: ~60% upfront foundation (done once) / ~30% ongoing content / ~10% reserve.
- Feed only the relevant file(s), not the whole repo. Fresh session per unrelated task.
- **If a deterministic script or CI step can do it, never spend tokens on it**
  (sitemaps, RSS, image optimization, link checks, schema validation are free build-time work).

## 8) Security (non-negotiable, every session)

No secrets in the repo — `.env.example` + Actions secrets only. `gitleaks` on every
push. Verify any new dependency exists and is maintained (no slop-squatted packages).
No direct commits to `main`; everything via PR.
