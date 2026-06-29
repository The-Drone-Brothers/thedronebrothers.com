---
name: preview
description: Preview the site or a content change before publishing. Use when someone says "preview", "show me", "what does it look like", "can I see it", or the preview looks blank/stale.
---

# Preview the change

Pick the path that matches where the user is working.

## Web (claude.ai) or reviewing a PR — the default for non-technical authors

The visual preview comes from a **deploy URL**, not this chat. Point the user to:

- **Per-PR preview:** the Cloudflare preview link attached to their pull request (a
  `…pages.dev` URL). It rebuilds automatically on each push — always fresh.
- **Shared staging:** `https://preview.thedronebrothers.com` (once connected) shows the
  latest build of the `preview` branch.

If there's no PR yet, run `send-for-review` first so a preview URL exists.

## Local (developer machine)

Always do a **clean start** — a leftover background server is the usual cause of a blank or
stale preview:

1. Stop any running preview server: `npx astro dev stop`
   - If the port is still held: `lsof -ti :4321 | xargs kill`
2. Start fresh in the **foreground**: `npm run dev` → open http://localhost:4321
   (stop later with Ctrl+C). Do **not** use `--background`.

## Source of truth

`npm run build` always reflects exactly what will publish. If a local preview looks wrong
but `npm run build` output is correct, it's a stale dev server — clean-start (above).
