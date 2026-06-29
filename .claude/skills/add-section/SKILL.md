---
name: add-section
description: Add a new section to the home page when the kind isn't specified. Use for general "add a section / block to the homepage" requests. Routes to the right section type (intro/prose, testimonial, or call-to-action).
---

# Add a home-page section (umbrella)

You are in a **CONTENT session** — only `src/content/sections/`, never foundation
(`CLAUDE.md` §3–§4).

## Pick the type

The home page is composed of ordered section files. Today's available types:

| Want to add…                                              | Use type      | Skill             |
| --------------------------------------------------------- | ------------- | ----------------- |
| A paragraph / intro / explanatory copy (optional heading) | `prose`       | (handle here)     |
| A client quote                                            | `testimonial` | `add-testimonial` |
| A heading + button ("Get a quote")                        | `cta`         | `add-cta`         |

1. If the request clearly matches testimonial or CTA, defer to that skill.
2. If it's general copy, create a `prose` section here. If genuinely ambiguous, ask **one**
   short clarifying question, then proceed.

## Prose section

Create `src/content/sections/<order>-<slug>.md`:

```
---
type: prose
order: <number>          # leave gaps (10, 20, 30…) for easy future inserts
background: white        # white | surface | ink | red
heading: <optional heading>
---

<the paragraph(s) — plain markdown body>
```

Then `npm run check` / `npm run build` to validate, and offer `preview` + `send-for-review`.

## Important

- A brand-new _kind_ of section (not prose/testimonial/cta) is **not** a content task — it
  needs a new component + schema type built by the lead dev (foundation). The designed-section
  hierarchy will arrive as additional skills over time (see `.claude/skills/README.md`). If
  the user asks for one that doesn't exist yet, STOP and hand off.
- Never touch `index.astro`, components, config, or styles.
