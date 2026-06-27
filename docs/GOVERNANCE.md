# Governance & Operations

How changes reach the live site, who approves them, and how to roll back. Companion to
`CLAUDE.md` (which defines the frozen foundation and the sanctioned-change loop).

## Pipeline

```
feature branch  →  PR (CI runs)  →  review at the publish gate  →  merge to main  →  auto-deploy to production
```

- **No direct commits to `main`.** Everything lands via PR.
- **CI** (`.github/workflows/ci.yml`) runs on every PR: `astro check` → build (Astro + Pagefind) → `lychee` link check → `gitleaks` secret scan. CI requires **no secrets**.
- **Deploy** (`.github/workflows/deploy.yml`) runs on merge to `main`: build → deploy `dist/` to **Cloudflare Pages**.

## Branch protection (configure on GitHub — TODO.md #9)

On `main`: require a pull request, require **1 approving review**, require the **CI** status check to pass, and disallow direct pushes. This enforces the single publish gate.

## The single publish gate

One named approver promotes to live (TODO.md #10). Their GitHub handle goes in
`.github/CODEOWNERS` so every PR requests their review automatically.
"Anyone who prompts can publish" is not allowed.

## Environments & previews

- **Production:** `main` → Cloudflare Pages → `https://thedronebrothers.com`.
- **Previews:** enable per-PR preview URLs by either (a) connecting the Cloudflare Pages
  project to the GitHub repo (automatic preview deploys), or (b) adding a `wrangler pages
deploy --branch=<pr>` step. Set up alongside the Cloudflare project (TODO.md #8).

## Accountability chain

- **Prompter / author** drafts the change and opens the PR.
- **Approver** (publish gate) reviews for correctness — including **no hallucinated facts** —
  and merges.
- **Tech owner** (Joey/Rob) owns infrastructure failures (build, deploy, hosting).

## Rollback — `known-good` tag

The foundation is tagged **`known-good-foundation`** after each sanctioned, reviewed
baseline (see `CLAUDE.md` §5). To roll the live site back to a known-good state:

```sh
# 1. Find the last good tag
git tag --list 'known-good*'

# 2. Branch from it and open a revert PR (preferred — keeps the gate)
git switch -c rollback/<date> known-good-foundation
#    ...or, for an emergency, redeploy that tag's build directly:
git checkout known-good-foundation && npm ci && npm run build
npx wrangler pages deploy dist --project-name=thedronebrothers --branch=main
```

Because the deployable output is static files in Git, **rollback is always available** and
cheap — no database state to restore.

## Incident runbook (bad page / broken build live)

1. **Assess:** is the live site broken, or just a single page? Static pages rarely take the
   whole site down.
2. **Roll back** to `known-good-foundation` (above) if the foundation is implicated.
3. **Revert the offending PR** on `main` (`git revert`) and let deploy re-run.
4. **Fix forward** on a branch with a normal PR once the cause is understood.
5. **Record** what happened and what guard would have caught it (add a CI check or schema
   rule if applicable).

## Cost / token discipline (summary — full rules in `CLAUDE.md` §7)

Foundation work is the expensive ~60% built once and frozen. Routine content runs on the
cheap tier. If a deterministic script or CI step can do it (sitemaps, RSS, image
optimization, link checks, schema validation), never spend tokens on it.
