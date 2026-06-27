# Brand logos — official SVG assets

Official Drone Brothers logo files (DSP+™ Brand Style Guide v2.0). These are the
**source assets from marketing** — do **not** recreate, redraw, or approximate them
(Style Guide §11). Wired into `Header`/`Footer` in Phase 3.

| File                           | Layout                 | Treatment                                                  | Use on background  |
| ------------------------------ | ---------------------- | ---------------------------------------------------------- | ------------------ |
| `logo-horizontal-color.svg`    | Horizontal single-line | DRONE black + BROTHERS red (full color) — **primary logo** | white / light      |
| `logo-stacked-black.svg`       | Stacked                | single-color black                                         | white / light      |
| `logo-horizontal-reversed.svg` | Horizontal single-line | reversed: white DRONE + red BROTHERS + white DSP+ box      | dark / brand black |
| `logo-stacked-reversed.svg`    | Stacked                | reversed: white + red                                      | dark / brand black |
| `logo-stacked-white.svg`       | Stacked                | single-color white                                         | dark / brand black |

## Rules (Style Guide §02–§03, §11)

- The **DSP+ badge must always sit inside its rectangular box** — no exceptions.
- Never modify, recolor, distort, or rebuild these marks. Resize the whole logo; never
  strip the DSP+ box to save space.
- Logo black is `#231f20` (asset registration black); UI/text ink is `#1a1a1a`.

## Db monogram

`drone-bros-monogram.png` — DB in red on black, **square 128×128** (§09). Used to
generate the favicon set in `public/` (`favicon-16/32`, `apple-touch-icon`,
`icon-192/512`) via `sips`. The 16/32/180 are crisp downscales; **`icon-192/512` are
upscaled from 128px and look slightly soft** — drop in a ≥512px square master and
regenerate for pixel-crisp PWA/app icons.

Regenerate after replacing this file:

```sh
SRC=src/assets/logos/drone-bros-monogram.png
for s in "16 favicon-16x16" "32 favicon-32x32" "180 apple-touch-icon" "192 icon-192" "512 icon-512"; do
  set -- $s; sips -z "$1" "$1" "$SRC" --out "public/$2.png"; done
```
