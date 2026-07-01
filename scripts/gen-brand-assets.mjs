// One-off asset generation (run manually during a foundation session).
// Regenerates the favicon PNG set from the vector master and the default OG image.
// Deterministic + repeatable: safe to re-run. Requires `sharp` (already a dep via astro:assets).
import sharp from 'sharp';
import { readFile, copyFile } from 'node:fs/promises';

const LOGOS = 'src/assets/logos';
const PUBLIC = 'public';

// 1) Default OG share image: Share-2 (5000x2625) -> 1200x630 (identical 1.905 ratio, clean downscale).
await sharp(`${LOGOS}/drone-bros-social-share-2.png`)
  .resize(1200, 630, { fit: 'cover' })
  .png()
  .toFile(`${PUBLIC}/og-default.png`);

// 2) Ship the vector master as a modern SVG favicon.
await copyFile(`${LOGOS}/drone-bros-favicon-512x512px.svg`, `${PUBLIC}/favicon.svg`);

// 3) Re-render the PNG icon set from the crisp vector master.
//    Render the SVG large once (high density), then downscale each target for sharp edges.
const svg = await readFile(`${LOGOS}/drone-bros-favicon-512x512px.svg`);
const base = await sharp(svg, { density: 512 }).png().toBuffer(); // ~3641px master raster

const icons = [
  ['favicon-16x16.png', 16],
  ['favicon-32x32.png', 32],
  ['apple-touch-icon.png', 180],
  ['icon-192.png', 192],
  ['icon-512.png', 512],
];
for (const [name, size] of icons) {
  await sharp(base).resize(size, size).png().toFile(`${PUBLIC}/${name}`);
}

console.log('Brand assets regenerated:', ['og-default.png', 'favicon.svg', ...icons.map((i) => i[0])].join(', '));
