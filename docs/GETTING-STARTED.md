# Drone Brothers Website — Getting Started & Demo Guide

**Audience:** the whole team — CEO/leadership, marketing, and engineering (CTO).
**Purpose:** show how a non‑technical person changes the live website **safely**, and prove
that the roles and guardrails in `CLAUDE.md` and `docs/GOVERNANCE.md` actually work.

> **The one‑sentence version:** The website is plain files in GitHub. **Claude is the
> editor** — you describe the change in plain English, Claude writes it, you preview it,
> and one named approver publishes it. No page can break the design, and nothing goes
> live without review.

---

## 1. How this is different from WordPress (read this first)

- There is **no admin login, no plugins, no database.** The site is pre‑built files served
  from a global CDN — fast and very hard to crash.
- **Content is separate from the chassis.** The design system (header, footer, fonts,
  colors, layouts) is built once and **frozen**. Day‑to‑day content sits on top of it as
  simple text files. You can change content freely; you **cannot** accidentally break the
  design.
- **Claude is the content editor.** Instead of clicking around a CMS, you tell Claude what
  you want ("add a testimonial from TopGolf to the home page"), and it makes the change
  for you. You review a preview before anything is published.

---

## 2. The three roles (who can do what)

This is the governance model from `CLAUDE.md`. The demo below shows all three.

| Role                | Who            | What they can do                                                                                   | What they **cannot** do                                                                                    |
| ------------------- | -------------- | -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| **Content author**  | CEO, marketing | Add/edit/reorder **content** — home‑page sections, pages, blog posts. Preview and request publish. | Touch the frozen design/foundation.                                                                        |
| **The AI (Claude)** | —              | Write content from plain‑English prompts; open a pull request for review.                          | Edit foundation files during a content task. If a request needs a design change, it **stops and says so**. |
| **Lead developer**  | Joey / Rob     | Everything, including deliberate, reviewed changes to the frozen foundation. Approves & publishes. | (Owns it all — but still via review.)                                                                      |

---

## 3. The publishing pipeline (where changes go)

```
   You describe a change
            │
            ▼
   Claude makes it on a branch ──►  Preview on your machine (localhost)   ← "does it look right?"
            │
            ▼
   Open a Pull Request (PR)  ──►  Staging preview + team review            ← "team signs off"
            │
            ▼
   Approver merges  ──►  Production (thedronebrothers.com)                 ← "it's live"
```

- **Preview (local):** see the change on your own screen before anyone else.
- **Staging (the PR):** a shareable link + the exact change, for team review. _(Live staging
  URLs turn on once Cloudflare Pages is connected — see "Setup status" at the end. Until
  then, staging review = the PR plus a developer running the preview.)_
- **Production:** only after the **single named approver** merges. Per `GOVERNANCE.md`,
  "anyone who prompts can publish" is **not** allowed.

---

## 4. ⭐ The demo: the CEO adds a section to the home page

**Scenario:** Andy (CEO) wants a new **testimonial** (or a **call‑to‑action**) on the home
page. He never opens a code editor.

> **Which path for whom:**
>
> - **CEO / marketing, day‑to‑day → Path B (web browser).** No install, nothing to break,
>   and you preview at a link. This is the recommended everyday path.
> - **The live Zoom demo / developers → Path A (local).** Good for showing the mechanics on
>   one screen.
> - **Path C** is the "there's no lock‑in" proof for the CTO.
>
> **You don't memorize commands or file formats** — you talk. Say _"add a testimonial from
> Jordan Lee at TopGolf, after the first one"_ or _"looks good, send it to the team."_ Those
> map to built‑in **skills** (`.claude/skills/`) that do the correct, safe thing every time
> (right file, right fields, content‑only, then a reviewed pull request).

### Path A — On your computer, with Claude Code (for the live demo / developers)

One‑time setup (the developer does this once, or screen‑shares it):

```sh
git clone git@github.com:The-Drone-Brothers/thedronebrothers.com.git
cd thedronebrothers.com
npm install
```

Now the CEO drives, in plain English. Start Claude in the project folder:

```sh
claude
```

Then type a request like:

> **"Add a testimonial to the home page, right after the first one. Quote: 'Drone Brothers
> turned three weeks of site photos into one afternoon. Game changer.' — Jordan Lee, Senior
> Project Manager at TopGolf."**

Claude creates a single content file — for example `src/content/sections/25-testimonial-topgolf.md` —
that looks like this (this _is_ the "content," and it's all a section is):

```yaml
---
type: testimonial
order: 25
background: white
quote: Drone Brothers turned three weeks of site photos into one afternoon. Game changer.
author: Jordan Lee
role: Senior Project Manager, TopGolf
---
```

**Preview it on your machine** — ask Claude **"start the preview"** (or run `npm run dev`),
then open the link it prints:

```
http://localhost:4321
```

You'll see the new testimonial on the home page, in the brand's fonts and colors,
positioned exactly where you asked. Nothing else changed.

**Send it for review** — tell Claude:

> **"Looks good. Open a pull request for the team to review."**

Claude commits to a branch and opens a PR. Done — the CEO never wrote code.

### Path B — In a browser, no setup (the CEO's everyday path) ⭐

Nothing to install. One‑time: you need a GitHub account with access to the repo.

1. Go to **`claude.ai/code`** (Claude Code on the web) and connect it to the
   `The-Drone-Brothers/thedronebrothers.com` repository.
2. Type the same plain‑English request (_"add a testimonial from Jordan Lee at TopGolf,
   after the first one"_). Claude makes the change on a branch and **opens a pull request** —
   never `main`.
3. **Preview it** at the link on the PR: each PR gets its own Cloudflare preview URL, and the
   shared **`https://preview.thedronebrothers.com`** shows the latest review build _(both turn
   on once Cloudflare Pages is connected — see Setup status)_.
4. Say **"looks good, send it to the team for review"** — Claude marks the PR ready and
   requests the approver. Done.

No terminal, no Node, no local server — so the "blank/stale preview" problem from a laptop
**can't happen** here; every preview is a fresh cloud build.

### Path C — No AI at all (the "it's just files" proof)

To show the CTO there's no magic lock‑in: copy any existing file in
`src/content/sections/`, rename it, and edit the text fields. That's the entire content
model. Claude is a convenience, not a dependency — the site is portable plain text.

---

## 5. What just happened — mapped to the rules

| Step                           | Role (CLAUDE.md)        | Guardrail that fired                               |
| ------------------------------ | ----------------------- | -------------------------------------------------- |
| CEO asked for a testimonial    | Content author          | Only touched `src/content/**` (OPEN).              |
| Claude wrote one markdown file | AI, content session     | Did **not** touch any frozen foundation file.      |
| Preview on localhost           | —                       | Saw the real result before publishing.             |
| PR opened                      | —                       | No direct commits to `main` (GOVERNANCE pipeline). |
| Team review → approver merges  | Lead dev / publish gate | Single named approver; CI must be green first.     |

**Try to break it (great for the CTO):** ask Claude to add a CTA but "forget" the button.
The build **refuses** it with a clear error —

```
sections → … data does not match collection schema.
  buttonLabel: Required
  buttonHref: Required
```

— so a malformed section can never reach the site. Validation is automatic and free.

**Try to cross the line:** ask Claude during a content task to "also change the header logo
size" or "tweak the brand red." In a content session it will **stop** and tell you that's a
foundation change requiring the lead developer — exactly as `CLAUDE.md` §3 requires.

---

## 6. The safety rails (why the CTO can trust this)

- **Frozen foundation.** Design system, layouts, header/footer, SEO are change‑controlled —
  edited only deliberately, on a branch, with review (`CLAUDE.md` §3–§5).
- **Schema validation.** Every content file is checked at build time (Zod). Missing or wrong
  fields **fail the build**, not the live site.
- **CI on every PR.** Type‑check, build, broken‑link check, and a secret scan run
  automatically (`.github/workflows/ci.yml`). Verified green.
- **One publish gate.** A named approver merges to production; everything is a reviewed PR.
- **Instant rollback.** Every good state is tagged; reverting is one step (GOVERNANCE
  "Rollback").
- **No vendor lock‑in, no per‑seat fees.** Output is plain HTML/Markdown you own. If Claude
  were unavailable tomorrow, the live site keeps running and the files are hand‑editable.

---

## 7. "Should we use Storyblok (or another CMS)?"

**Short answer: not for this build, and nothing is missing because of it.**

Storyblok is a hosted, visual (drag‑and‑drop) CMS. This site deliberately uses a different
model — **Git + Markdown + Claude as the editor** — chosen in the project decision brief for
three reasons:

- **Portability / no lock‑in.** Content is plain text we own, not data inside a vendor's
  database.
- **Cost.** No per‑seat CMS subscription; no per‑editor licensing.
- **Security & simplicity.** No CMS login, server, or database to secure or keep updated.

**What you give up:** a point‑and‑click visual editor with live in‑page editing. Our
equivalent is "describe it to Claude + preview," which covers the same need for a brochure
site without the overhead.

**If a visual editor is ever wanted later,** a headless CMS (Storyblok, Sanity, etc.) _can_
be layered on as the editing front‑end while keeping this same static output. It's an
additive, separately‑scoped decision — not required to launch, and explicitly out of scope
for the current foundation. Flag it if/when in‑page WYSIWYG becomes a priority and we'll
cost it out.

---

## 8. Quick reference

**Section types you can add to the home page** (files in `src/content/sections/`, ordered by
the `order` number):

| `type`        | Required fields                                         | Use for                      |
| ------------- | ------------------------------------------------------- | ---------------------------- |
| `prose`       | (markdown body); optional `heading`                     | intro / explanatory copy     |
| `cta`         | `heading`, `buttonLabel`, `buttonHref`; optional `body` | "Get a quote" call‑to‑action |
| `testimonial` | `quote`, `author`; optional `role`                      | client quotes                |

Every section also takes `order` (position) and `background` (`white` / `surface` / `ink` /
`red`). To add a brand‑new _kind_ of section, that's a foundation change for the developer.

**Handy commands** (or just ask Claude to do these):

| Do this                   | Command                               |
| ------------------------- | ------------------------------------- |
| Preview locally           | `npm run dev` → http://localhost:4321 |
| Full production build     | `npm run build`                       |
| Check everything is valid | `npm run check`                       |

---

## Setup status (what's live vs. pending)

The foundation is **complete and verified**, and the authoring **skills** work today. To make
the web/preview experience fully turnkey, a few human setup items remain (tracked in `TODO.md`):

- **Cloudflare Pages** connected to the repo (Git integration) — this is what produces the
  **per‑PR preview links** and the stable **`https://preview.thedronebrothers.com`** review
  site. (Feasible and verified — `preview.*` is a proxied CNAME to a `preview` branch alias;
  the site already ships the `X‑Robots‑Tag: noindex` header that keeps it out of Google.)
- **Claude on the web:** install the Claude GitHub app / connect `claude.ai/code` to the repo,
  and give the CEO a GitHub account with repo access.
- **Formspree/Turnstile** keys (contact form), **name the publish‑gate approver**, **branch
  protection** on `main`, and the **DNS cutover** of the live apex at launch.

None of these block the local demo (Path A), which works now.
