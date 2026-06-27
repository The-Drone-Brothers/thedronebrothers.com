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

/** Social profiles (LinkedIn = primary). Rendered as the footer "Follow" links. */
export const socialNav: NavLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/drone-brothers/', external: true },
  { label: 'Instagram', href: 'https://www.instagram.com/dronebros1/', external: true },
  { label: 'YouTube', href: 'https://www.youtube.com/dronebros', external: true },
  { label: 'Vimeo', href: 'https://vimeo.com/dronebros', external: true },
  { label: 'Facebook', href: 'https://facebook.com/dronebros/', external: true },
  { label: 'X', href: 'https://twitter.com/dronebros1', external: true },
];
