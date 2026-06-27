/* Navigation — single source of truth for all menus (FROZEN / change-controlled).
   Targets are the intended information architecture; the pages themselves are
   built in the content phase, so some links 404 until then. Edit here, never
   hardcode menus in Header/Footer. */

export interface NavLink {
  label: string;
  href: string;
  /** External link (new tab + rel). */
  external?: boolean;
}

export interface FooterColumn {
  heading: string;
  links: NavLink[];
}

/** Primary header navigation. */
export const primaryNav: NavLink[] = [
  { label: 'DSP+™', href: '/dsp-plus' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

/** Prominent header call-to-action. */
export const headerCta: NavLink = { label: 'Get a Quote', href: '/contact' };

/** Footer link columns. */
export const footerColumns: FooterColumn[] = [
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'DSP+™', href: '/dsp-plus' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'Progress Documentation', href: '/services/progress-documentation' },
      { label: 'Mapping & Analytics', href: '/services/mapping-analytics' },
      { label: 'Inspections', href: '/services/inspections' },
      { label: 'Marketing & Video', href: '/services/marketing-video' },
    ],
  },
  {
    heading: 'Resources',
    links: [{ label: 'Insights', href: '/blog' }],
  },
];

/** Legal / utility links (footer bottom row). */
export const legalNav: NavLink[] = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
];

/** Social profiles. TODO: add LinkedIn (primary) + Instagram URLs (external: true).
    Rendered only when populated (see TODO.md item 3). */
export const socialNav: NavLink[] = [];
