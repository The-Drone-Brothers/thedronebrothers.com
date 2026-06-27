/* Content collections + Zod schemas (FROZEN / change-controlled).
   Build-time front-matter validation — bad data fails the build (free guardrail).

   IN USE NOW: `pages`, `posts` (blog) — routed and rendered.
   SCAFFOLDED ONLY: `pilots`, `cities`, `states` — schemas exist so the future
   programmatic city/state/pilot engine isn't blocked, but NO routes or
   generation logic are built here (out of scope; see CLAUDE.md / brief). */
import { defineCollection, reference } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

/** Generic marketing pages. */
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    draft: z.boolean().default(false),
    noindex: z.boolean().default(false),
    ogImage: z.string().optional(),
    updatedDate: z.coerce.date().optional(),
  }),
});

/** Blog / insights posts. */
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      author: z.string().default('Drone Brothers'),
      heroImage: image().optional(),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
    }),
});

/* -------------------------------------------------------------------------
   SCAFFOLDED — schema only. Do not build the generation engine here.
   ------------------------------------------------------------------------- */

/** US states (system-of-record for the future location engine). */
const states = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/states' }),
  schema: z.object({
    name: z.string(),
    abbreviation: z.string().length(2),
    slug: z.string(),
    seoDescription: z.string().optional(),
  }),
});

/** Cities — related to a state (demonstrates relational scaffolding). */
const cities = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cities' }),
  schema: z.object({
    name: z.string(),
    state: reference('states'),
    slug: z.string(),
    population: z.number().optional(),
    coordinates: z.object({ lat: z.number(), lng: z.number() }).optional(),
  }),
});

/** Pilots — optionally based in a city. */
const pilots = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pilots' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    bio: z.string().optional(),
    certifications: z.array(z.string()).default([]),
    baseCity: reference('cities').optional(),
  }),
});

/** Home-page sections — composable, content-authored building blocks.
   A non-technical author adds/edits one markdown file per section; the home page
   renders them in `order`. Each `type` validates its own required fields (Zod
   discriminated union) so bad/missing fields fail the build. */
const bg = z.enum(['white', 'surface', 'ink', 'red']).default('white');
const sections = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/sections' }),
  schema: z.discriminatedUnion('type', [
    z.object({
      type: z.literal('prose'),
      order: z.number(),
      background: bg,
      heading: z.string().optional(),
      // body = the markdown beneath the front-matter
    }),
    z.object({
      type: z.literal('cta'),
      order: z.number(),
      background: bg,
      heading: z.string(),
      body: z.string().optional(),
      buttonLabel: z.string(),
      buttonHref: z.string(),
    }),
    z.object({
      type: z.literal('testimonial'),
      order: z.number(),
      background: bg,
      quote: z.string(),
      author: z.string(),
      role: z.string().optional(),
    }),
  ]),
});

export const collections = { pages, posts, states, cities, pilots, sections };
