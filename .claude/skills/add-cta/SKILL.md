---
name: add-cta
description: Add a call-to-action (CTA) band to the home page — a heading plus a button (e.g. "Get a quote"). Use when someone wants to add a call to action, a "contact us" / "get a quote" prompt, or a button-driven section to the homepage.
---

# Add a call-to-action (CTA) to the home page

You are in a **CONTENT session**. Touch ONLY `src/content/sections/`. Never edit foundation
files (`CLAUDE.md` §3–§4). If the request needs a new button style or layout, **STOP** — that's
a lead-dev foundation task.

## Steps

1. **Check brand voice/law.** Skim `DESIGN.md`. CTA copy is short, direct, active
   ("Get a quote", "Book a flight"). No exclamation marks. Button text should be a clear verb phrase.
2. **Decide placement → `order`** (see file prefixes in `src/content/sections/`; leave gaps).
   CTAs usually sit near the bottom of the page.
3. **Create one file** `src/content/sections/<order>-cta-<slug>.md`:
   ```
   ---
   type: cta
   order: <number>
   background: red          # white | surface | ink | red (red is the strong default)
   heading: <short, direct heading>
   body: <optional one-line supporting sentence>
   buttonLabel: <verb phrase, e.g. "Get a quote">
   buttonHref: <internal path, e.g. /contact>
   ---
   ```
   `heading`, `buttonLabel`, and `buttonHref` are **required** — a CTA missing any of them
   fails the build by design.
4. **Validate** with `npm run check` / `npm run build`; fix any schema error.
5. **Offer** to preview (`preview`) and send for review (`send-for-review`).

## Guardrails

- One file = one CTA. Don't touch other sections or any foundation file.
- `buttonHref` should point at a real route (e.g. `/contact`). Flag if it points somewhere
  that doesn't exist yet.
- `background` is exactly one of: `white`, `surface`, `ink`, `red`.
