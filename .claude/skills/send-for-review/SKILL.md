---
name: send-for-review
description: Commit the current change to a branch and open a pull request for team review. Use when someone says "looks good", "send it", "send it to the team", "submit for review", "ship it", "publish this", or "open a PR".
---

# Send the change for team review (the governance flow)

This turns "looks good, send it" into the reviewed publish pipeline from `docs/GOVERNANCE.md`.
**Never commit or push directly to `main`.**

## Steps

1. **Confirm scope.** Run `git status`. Expect only files under `src/content/**`.
   - If any **foundation** file changed (config, components, layouts, styles, `.github`, etc.),
     **STOP**: that requires a deliberate foundation session and lead-dev review. Explain, and
     do not open a content PR that smuggles in foundation edits.
2. **Branch.** If already on a `content/*` branch, stay. Otherwise create one:
   `content/<short-kebab-description>` (e.g. `content/testimonial-topgolf`).
3. **Commit.** Stage only the intended content files. Write a clear, plain message:
   `Content: <what changed>` (e.g. "Content: add TopGolf testimonial to the home page").
4. **Open the PR.** Push the branch and open a PR to `main` with `gh`. Title = the change;
   body = what/why + "Content-only — no foundation files touched." The repo PR template applies.
5. **Hand back links.** Give the user:
   - the **PR link** (where the team reviews/approves), and
   - the **preview link** to eyeball it — the per-PR Cloudflare preview URL on the PR, or
     `https://preview.thedronebrothers.com` once the change is on the preview branch.
     Remind them: a **named approver merges** to publish; nothing goes live automatically.

## Guardrails

- No direct commits/pushes to `main`. Ever.
- Content-only. Foundation changes are a different, reviewed process — hand off.
- One change = one branch = one PR; keep it small and readable.
