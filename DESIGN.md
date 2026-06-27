# DESIGN.md — Drone Brothers Brand & Design Law (DSP+™ v2.0)

> **This document is binding.** It is the canonical translation of the *Drone Brothers
> Brand Style Guide — DSP+™ Edition, Version 2.0* (`DB_style_guide F.pdf`) into rules
> for this codebase. **Every** page, section, block of text, button, icon, image, or
> other element you create or edit MUST conform to it — in full, every time, with no
> exceptions and no "close enough." When a request would violate a rule here, STOP and
> say so rather than shipping off-brand work.
>
> Precedence: `CLAUDE.md` governs *what you may touch* (foundation vs content).
> `DESIGN.md` governs *how it must look and read*. The design tokens in
> `src/styles/tokens.css` are the machine-readable source of truth for values — this
> file explains the intent and the rules the tokens can't encode. If a value here and
> a token ever disagree, the token wins for the number and you fix this doc; the *rule*
> here always wins over an off-brand impulse.

---

## 0) The non-negotiables (read first, apply always)

These are the rules most often broken. They are absolute.

1. **Brand Red is `#FF391F`.** Not `#ed4d3f` (that is the dead v1 color), not any
   other red. Hover/active/depth red is `#cc2d17`.
2. **Never use pure black `#000000`.** "Brand Black" is `#1a1a1a` (`--color-ink`).
3. **Body text is never red.** Body copy is always ink-on-white or white-on-ink.
   Red on white is 3.3:1 — large display text and accents only.
4. **Body copy is Arial. Everything else is Josefin Sans.** Never set body in Josefin;
   never set a headline/label/UI element in Arial (except as the declared fallback).
5. **The DSP+ badge is ALWAYS inside its rectangular box.** No pill, no circle, no
   plain text, never removed to save space. No exceptions, ever, anywhere.
6. **Always write the brand as `Drone Brothers`, the model as `DSP+™`, the monogram as
   `Db™`.** Include the ™ on first use in any document/page.
7. **No exclamation points in headlines.** No hype, no "cutting-edge," no "synergies."
8. **Everything aligns to the 8px spacing grid and the 12-column layout grid.**
9. **Generous white space is a brand value — never crowd it.**
10. **Headlines and body are left-aligned.** Never center columns of body text.

---

## 1) Brand Foundation — who we are (drives every word & visual choice)

**What Drone Brothers is:** the nation's leading aerial drone services partner for
large-scale **commercial construction**. Enterprise drone service provider built for
**general contractors at regional and national scale** — Fortune 500 GCs, project
owners, GC executives. The **DSP+™** model replaces scattered vendors with one
coordinated partner and one consistent standard across every jobsite.

- **Mission:** standardize aerial intelligence across commercial construction —
  consistent, actionable data from preconstruction through closeout.
- **Vision:** every major construction project documented, analyzed, and accessible
  from a single aerial intelligence platform.
- **Position:** the enterprise drone service provider built specifically for GCs at
  regional and national scale.
- **Core brand promise (DSP+™):** *"One call. One capture. One click. Drone Brothers
  delivers complete aerial documentation for your construction site — on schedule,
  every time."*

**Brand keywords (use as signal, not decoration):** Precision · Reliability · Scale ·
Innovation · Trust · Expertise.

**We ARE:** bold, direct, expert. Technically sharp, dependable under pressure,
results-focused. Confident without arrogance; authoritative without being inaccessible.

**We are NOT:** casual, playful, or hobbyist-adjacent. This is an enterprise brand
serving Fortune 500 GCs. **Every touchpoint must carry that weight.** If a draft reads
like a consumer drone-photography hobby brand, it is wrong — rewrite it.

---

## 2) Logo System

**Primary logo:** horizontal single-line wordmark. **DRONE** in Brand Black, **BROTHERS**
in Brand Red (`#FF391F`), followed by the **DSP+** badge in its box. Font: Josefin Sans
Bold.

**Approved configurations**

- **Horizontal single-line** (primary): on white/light → black+red wordmark, box border
  black. Reversed on Brand Black → DRONE white, BROTHERS red, box border white.
- **Horizontal color variants:** standard on white; reversed on black; on Brand Red →
  BROTHERS in **black**, DRONE and DSP+ box in **white**.
- **Stacked** (signage, social avatars, embroidery, constrained layouts): DRONE over
  BROTHERS; **DSP+ box always left-aligned below the stack, matching the left edge of
  DRONE.** Variants: standard on white; reversed on black; single-color red (embossed/
  engraved/single-color production only).
- **Db monogram** (secondary mark): app icons, favicon, avatars, drone-body marking,
  embroidery center, small-scale embossing — contexts where the full wordmark is
  impractical. Josefin Sans Bold. Variants: black on red; red on black; split color
  (D black / b red) where full color + larger size allow.

**DSP+ box — always required (absolute):** the DSP+ badge must always be enclosed in
its **rectangular** box. The box color matches the wordmark color on its background.
**Never** render DSP+ as plain text, **never** a rounded pill or circle, **never** drop
the box to save space — resize the whole logo instead.

**Logo integrity:** never modify, recolor outside the approved variants, distort,
subordinate to a partner brand, or recreate/approximate the logo from a screenshot or
PDF extraction. Real assets ship in AI/EPS/SVG/PNG from the marketing team; in this repo
use the vetted assets in `src/assets/logos/*` only.

---

## 3) Color Palette

Use the tokens in `src/styles/tokens.css` — never hardcode raw hex in components.

| Role | Name | Hex | Token | Use |
|------|------|-----|-------|-----|
| Primary accent | **Brand Red** | `#FF391F` | `--color-brand-red` | BROTHERS, **CTA buttons**, rule lines, bullet points, badges, DSP+ box. The energy of the brand — use with intention. |
| Depth / hover | **Deep Red** | `#cc2d17` | `--color-brand-red-deep` | Depth accent; red hover/active states. |
| Structure | **Brand Black** | `#1a1a1a` | `--color-ink` | Headers, footers, dominant backgrounds, "DRONE" wordmark, body text. Weight & authority. **Never `#000000`.** |
| Breathing room | **Brand White** | `#ffffff` | `--color-white` | Primary backgrounds. White space is a brand value — white makes red land. |
| Light gray | — | `#f2f2f2` | `--color-surface` | Light section/card backgrounds. |
| Mid gray | — | `#555555` | `--color-gray-mid` | Muted/meta text. |
| Dark gray | — | `#333333` | `--color-gray-dark` | Secondary structure. |

**Accessibility (enforce):** Brand Red on white is **3.3:1 — large display text only**.
Body text is **always** Brand Black on white or white on Brand Black. **Never red body
text on white.** Never rely on red alone to convey meaning.

**Color discipline:** red is an *accent*, not a flood. Black and white carry the layout;
red punctuates it (one CTA, a rule line, a badge). Resist the urge to redden everything.

---

## 4) Typography

**Two typefaces only:**
- **Josefin Sans** — logo, ALL headlines, subheadings, labels/captions, and **all UI
  elements** (buttons, nav, tags). Weights: 700 Bold, 600 SemiBold.
- **Arial** — **body copy only.** Neutral, readable, never competes with the brand voice.

Tokens: `--font-heading` (Josefin → Arial fallback), `--font-body` / `--font-sans`
(Arial). **Never** set body in Josefin; **never** set a headline/label/button in Arial
unless Josefin is genuinely unavailable.

**Type hierarchy** (token → guide intent):

| Level | Font / weight | Case & treatment | Token |
|-------|---------------|------------------|-------|
| Display / logo | Josefin Sans Bold | ALL CAPS — logo & hero display headlines only | `--text-display` (40–64px) |
| Headline | Josefin Sans Bold | ALL CAPS or Title Case, 22–32px | `--text-h1` 32 / `--text-h2` 28 / `--text-h3` 22 |
| Subheading | Josefin Sans SemiBold | 15–18px | `--text-subheading` (18px) |
| Body | **Arial Regular** | sentence case, line-height 1.6–1.7 | `--text-base` / `--text-small` |
| Caption / label | Josefin Sans Bold | **ALL CAPS, tracked 0.1em**, 10–11px | `--text-caption` |

(Web baseline body is 16px; the guide's 12–14px is the print spec. Caption tracking and
all-caps for labels is mandatory, not optional.)

**Fallbacks:** where Josefin is unavailable, **Arial Bold** for headlines/labels, **Arial
Regular** for body. **Never** Times New Roman, Calibri, or Cambria.

---

## 5) Imagery & Photography

**DO use:** high-altitude wide aerial job-site shots; active construction environments;
ground crew + drone in frame (human scale + technology); dramatic low-light/architectural
contrast; sharp detail in dramatic natural light; authentic site imagery; orthomosaic
previews and aerial data visualizations.

**AVOID:** consumer/hobbyist-style shots; generic stock; heavily filtered photos;
low-resolution assets; anything that doesn't read as enterprise-grade operational
capability.

**Treatment:** dark-mode-preferred compositions; full-bleed aerial section dividers;
wide format. Optimize through `astro:assets` at build time — never ship unoptimized
images.

---

## 6) Iconography

- **Line-weight icons, 1.5px stroke, no fill.**
- **Color: Brand Black or Brand Red only.**
- **Hard, precise corners — square geometry.** Function over form.
- UI size **~16px**, decorative max **24px**.
- Red reserved for **key actions only**.
- **Never** organic, hand-drawn, illustrative, or emoji-style icons. Technical and
  precise, always — consistent with construction + aerial-intelligence positioning.

---

## 7) Layout & Composition

- **Grid:** 12-column, **24px gutters**. All layouts align to it.
- **Spacing:** base **8px**; every margin/padding/gap is a multiple of 8
  (8, 16, 24, 32, 40, 48, 64, 80). Token `--spacing: 8px` → `p-1`=8 … `p-10`=80.
  **Minimum 40px margins** on document-scale layouts.
- **Reading width:** body prose max **680px** (`--container-measure`). Page content max
  **1200px** (`--container-page`).
- **Alignment:** type is **left-aligned**. **Never center single columns of body text.**
  Headlines left-aligned in all professional collateral.
- **Hierarchy:** large → medium → small; elements never compete equally. Control reading
  order with **Brand Red rule lines**, Josefin Sans Bold headlines, and white space.
- **Composition:** **bold and asymmetric** — dynamic, grid-driven layouts over centered
  symmetrical ones.
- **Corners:** hard and precise. Radii stay small (`--radius-sm/md/lg` = 2/4/8px). Do not
  introduce pill shapes or large rounding (the DSP+ box is square — the whole brand is).
- Build layouts from the foundation primitives (`Container`/`Section`/`Stack`/`Grid`) and
  section components — do not hand-roll one-off spacing that breaks the grid.

---

## 8) Brand Voice & Tone (governs ALL copy: headings, body, buttons, alt text, meta)

**Our voice is:** direct, confident, expert. Short sentences. Active verbs. **Show proof,
not hype.** Speak to project owners and GC executives **as peers** — not as a vendor
asking for business.

**Not this:** jargon-heavy, passive, or overly casual. **No exclamation points in
headlines.** Never "we leverage synergies," never "cutting-edge solutions," never
breathless enthusiasm.

**On-brand examples:**
- *"One call. One capture. One click. Drone Brothers delivers complete aerial
  documentation for your construction site — on schedule, every time."*
- *"DSP+™ replaces scattered vendors and inconsistent data with a single coordinated
  partner — built around your schedule, your standards, and your reporting requirements."*
- Supporting rhythm: *"One partner. Every jobsite. Every phase."*

**Off-brand (never ship):**
- ✗ *"We are thrilled to offer our amazing drone solutions to help you with all your
  exciting aerial photography needs!"*

**Register by context (voice stays constant, only register shifts):** proposals →
precise/formal; LinkedIn → confident/informative; email → direct, respectful of the
reader's time; web → direct and proof-led.

**Buttons/CTAs specifically:** Josefin Sans, concise, action-led, Title Case or ALL CAPS,
no exclamation point. Primary CTA uses Brand Red background with white text; hover →
`#cc2d17`. Examples: "Request a Capture", "See How DSP+™ Works", "Talk to Our Team".

---

## 9) Digital & Web Application

- **Dark mode preferred** for hero/feature sections: Brand Black backgrounds, Brand Red
  accents, Josefin Sans Bold headlines, white body text.
- **Sections:** lead with weight — black or white grounds, red as punctuation, red rule
  lines to separate ideas, full-bleed aerial imagery for dividers.
- **Favicon / app icon / avatar:** Db monogram (already in `public/*` — do not swap for
  off-brand marks).
- **Social (reference for any social-card/OG work):** profile = Db monogram on black;
  cover = full-bleed aerial, logotype lower-left. Post templates = black bg, red accents,
  Josefin Bold headlines, white body.
- **Hashtag standard (if generating social copy):** `#DroneBrothers #DSPplus
  #ConstructionDrone #AerialIntelligence #NationwideCapture`.
- **Contact (canonical):** `info@dronebros.com` · `(248) 763-0870` ·
  `www.thedronebrothers.com`. (Repo/account email may differ; brand-facing contact is
  this.)

---

## 10) Usage & Legal (respect in all generated content)

- **Trademarks:** `DRONE BROTHERS™`, `DSP+™`, `Db™` are proprietary marks. Include the
  **™ on first use** in any page/document.
- **DSP+ box rule** applies to every medium — digital, print, signage, embroidery,
  vehicle — **no exceptions under any circumstances.**
- **Never modify the logo** or subordinate it to a partner's brand system.
- **Do not recreate brand assets** from screenshots or PDF extractions — use the official
  assets committed to the repo.
- This is **Version 2.0**; all previous versions are superseded. Confirm you are on v2.0
  rules (Josefin Sans Bold typography, Brand Red `#FF391F`, DSP+ box rules, Db monogram)
  before producing anything.

---

## 11) Pre-flight checklist — run this before finishing ANY visual/content work

- [ ] All reds are `#FF391F` (or `#cc2d17` for hover/depth) via tokens — no `#ed4d3f`, no raw hex.
- [ ] No pure `#000000` anywhere; Brand Black is `#1a1a1a`.
- [ ] Body copy is Arial, ink-on-white or white-on-ink — **no red body text**.
- [ ] Headlines / labels / buttons / UI are Josefin Sans; labels are ALL CAPS, tracked.
- [ ] Any DSP+ appears inside its square box; ™ present on first use of Drone Brothers / DSP+ / Db.
- [ ] Spacing is all multiples of 8; layout respects the 12-col grid; body prose ≤ 680px.
- [ ] Type and content are left-aligned; layout is bold/asymmetric, not centered.
- [ ] Icons are 1.5px stroke, no fill, square corners, black or red only.
- [ ] Imagery is enterprise aerial/construction — no hobbyist or generic stock.
- [ ] Copy is direct, proof-led, peer-to-peer; no exclamation marks in headlines, no hype words.
- [ ] White space is generous; red is an accent, not a flood.
- [ ] Values come from `src/styles/tokens.css`; nothing hardcoded that a token already defines.

---

*Source: Drone Brothers Brand Style Guide — DSP+™ Edition, Version 2.0 (Confidential,
© Drone Brothers). Machine values: `src/styles/tokens.css`. Governance: `CLAUDE.md`.*
