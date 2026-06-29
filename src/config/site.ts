/* Site-wide configuration (FROZEN / change-controlled).
   Single source of truth for SEO defaults, JSON-LD, and contact info.
   Values sourced from Brand Style Guide v2.0. */

export interface SiteConfig {
  /** Brand name (display). Trademarked as DRONE BROTHERS™. */
  name: string;
  /** Legal/organization name for JSON-LD. */
  legalName: string;
  /** Canonical production origin (no trailing slash). */
  url: string;
  /** Default <title> used when a page provides none. */
  defaultTitle: string;
  /** Title template; %s is replaced by the page title. */
  titleTemplate: string;
  /** Default meta description. */
  description: string;
  /** Brand tagline (DSP+™). */
  tagline: string;
  /** OpenGraph locale. */
  locale: string;
  /** Contact phone (E.164-ish). */
  telephone: string;
  /** Contact email. */
  email: string;
  /** Default OG/Twitter share image (absolute path under /). Optional. */
  ogImage?: string;
  /** Social profile URLs for JSON-LD sameAs. */
  sameAs: string[];
}

export const site: SiteConfig = {
  name: 'Drone Brothers',
  legalName: 'Drone Brothers',
  url: 'https://thedronebrothers.com',
  defaultTitle: 'Drone Brothers — Aerial Intelligence for Commercial Construction',
  titleTemplate: '%s — Drone Brothers',
  description:
    'The enterprise drone service provider built for general contractors operating at regional and national scale. One coordinated partner, one consistent standard, across every jobsite — DSP+.',
  tagline: 'One Call. One Capture. One Click.',
  locale: 'en_US',
  telephone: '+1-248-763-0870',
  email: 'info@dronebros.com',
  // TODO: add a 1200x630 default share image, then set e.g. '/og-default.png'.
  ogImage: undefined,
  sameAs: [
    'https://www.linkedin.com/company/drone-brothers/',
    'https://www.instagram.com/dronebros1/',
    'https://www.youtube.com/dronebros',
    'https://vimeo.com/dronebros',
    'https://facebook.com/dronebros/',
    'https://twitter.com/dronebros1',
  ],
};
