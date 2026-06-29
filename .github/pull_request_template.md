<!-- One publish gate: a named approver must review before merge. -->

## What & why

<!-- Plain-English summary of the change and the reason for it. -->

## Type of change

- [ ] Content only (markdown/front-matter under `src/content/**`)
- [ ] Foundation (anything in the FROZEN list — see `CLAUDE.md` §4; requires a foundation session)

## Checklist

- [ ] CI is green (`astro check` + build + lychee + gitleaks)
- [ ] No secrets committed (env/Actions secrets only)
- [ ] If foundation: blast radius stated, change is surgical, diff is small
- [ ] Human-reviewed for accuracy (no hallucinated facts) before approval

## Notes for the reviewer

<!-- Anything the approver should look at specifically. -->
