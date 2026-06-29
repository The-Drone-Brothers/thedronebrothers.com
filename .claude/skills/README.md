# Authoring skills

These skills turn plain-English requests into **safe, repeatable, governed** actions, so a
non-technical author gets the same correct behavior every time — in the local CLI **and** in
Claude Code on the web (both read `.claude/skills/` and `CLAUDE.md`).

## Starter set

| Skill             | Triggered by (examples)                       | Does                                           |
| ----------------- | --------------------------------------------- | ---------------------------------------------- |
| `add-testimonial` | "add a testimonial / client quote"            | Creates one `testimonial` section file.        |
| `add-cta`         | "add a call-to-action / 'get a quote' button" | Creates one `cta` section file.                |
| `add-section`     | "add a section/block to the homepage"         | Routes to the right type; handles `prose`.     |
| `new-post`        | "write a blog post / insight"                 | Creates one `posts` entry.                     |
| `send-for-review` | "looks good, send it to the team"             | Branch → commit → PR (never `main`).           |
| `preview`         | "show me / preview / it looks blank"          | Deploy preview URL (web) or clean local start. |

Every authoring skill enforces the same guardrails: **content only** (`src/content/**`),
never the frozen foundation; consult `DESIGN.md` for brand voice/law; validate with
`npm run build` so bad data fails the build, not the live site (`CLAUDE.md` §3–§7).

## Adding the designed-section hierarchy (future skills)

As new **designed section types** are built, expose each as its own skill so authors can add
it by name. Each new designed section is a **two-step** rollout:

1. **Foundation (lead dev, reviewed):** add the section's component in
   `src/components/sections/` + its variant in the `sections` discriminated union in
   `src/content.config.ts`, and wire it into `SectionRenderer`. This is the frozen part.
2. **Skill (this folder):** add `.claude/skills/add-<section>/SKILL.md` that creates the
   matching content entry with correct front-matter, references `DESIGN.md`, leaves gaps in
   `order`, validates the build, and offers `preview` + `send-for-review`.

Use `add-testimonial` / `add-cta` as templates. Keep skill descriptions written the way a
non-technical person would actually ask ("add a stats band", "add a logo wall"), so Claude
auto-selects the right one. Until both steps exist for a type, a request for it is **not** a
content task — STOP and hand off to the lead dev.
