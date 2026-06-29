---
name: add-testimonial
description: Add a customer testimonial / client quote to the home page. Use when someone wants to add, insert, or place a testimonial, quote, client praise, or review on the homepage.
---

# Add a testimonial to the home page

You are in a **CONTENT session**. Touch ONLY files under `src/content/sections/`.
Never edit foundation files (see `CLAUDE.md` §3–§4). If the request truly needs a design
or component change, **STOP and say so** — that's a lead-dev foundation task.

## Steps

1. **Check brand voice.** Skim `DESIGN.md` (brand law). Testimonials should read as
   credible and direct. Use the client's actual words — never fabricate a quote. If the
   supplied wording clashes with brand voice (hype, exclamation marks), gently suggest a
   tightened version but defer to the client's approved wording.
2. **Decide placement → `order`.** List `src/content/sections/` (files are prefixed by
   their order number: `10-`, `20-`, `30-`). To insert "after the first testimonial,"
   choose an order number that falls between it and the next section (e.g. between `20` and
   `30` → `25`). Leave gaps so future inserts don't require renumbering.
3. **Create one file** `src/content/sections/<order>-testimonial-<slug>.md`:
   ```
   ---
   type: testimonial
   order: <number>
   background: white        # white | surface | ink | red — alternate from the neighbor
   quote: <the quote, with NO surrounding quotation marks>
   author: <name>
   role: <title, company>   # optional
   ---
   ```
4. **Validate.** Run `npm run check` (or `npm run build`). A missing/mistyped field fails
   the build with a clear message — fix it. Never leave a failing build.
5. **Offer next step:** tell the user it's ready to preview (`preview` skill) and to send
   for review (`send-for-review` skill).

## Guardrails

- One file = one testimonial. Do not edit other sections, `index.astro`, components, or config.
- `background` is exactly one of: `white`, `surface`, `ink`, `red`.
- If asked to also change layout, colors, fonts, or the header/footer → STOP (foundation).
