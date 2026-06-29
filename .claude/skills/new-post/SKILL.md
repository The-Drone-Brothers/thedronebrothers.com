---
name: new-post
description: Add a blog/insights post. Use when someone wants to write or publish a blog post, article, news item, or insight.
---

# Add a blog post (Insights)

You are in a **CONTENT session** — only `src/content/posts/`, never foundation.

## Steps

1. Skim `DESIGN.md` for brand voice (direct, confident, proof not hype; no exclamation
   marks in headlines).
2. Create `src/content/posts/<slug>.md`:

   ```
   ---
   title: <post title>
   description: <one-sentence summary for SEO + the listing>
   pubDate: <YYYY-MM-DD>
   author: Drone Brothers          # or a named author
   tags: [<optional>, <tags>]
   draft: false                    # true to keep it out of the build/listing
   ---

   <the post body in markdown>
   ```

3. Validate with `npm run check` / `npm run build` and fix any schema error.
4. Offer to `preview` and `send-for-review`. It will appear at `/blog/<slug>` and in the
   `/blog` listing.

## Guardrails

- One file per post. Don't touch other posts or any foundation file.
- `draft: true` hides a post until ready (it won't build or list).
