export interface NavItem {
  title: string;
  href: string;
  hasMegaMenu?: boolean;
}

export const MAIN_NAV_ITEMS: NavItem[] = [
  { title: 'Home', href: '/' },
  { title: 'About Us', href: '/about' },
  { title: 'Business Sectors', href: '/business-sectors', hasMegaMenu: true },
  { title: 'Our Approach', href: '/our-approach' },
  { title: 'Projects & Capabilities', href: '/projects-capabilities' },
  { title: 'Partnerships', href: '/partnerships' },
  { title: 'Vision & Mission', href: '/vision-mission' },
  { title: 'Contact Us', href: '/contact' },
];

export const CTA_BUTTON = {
  title: 'PARTNER WITH US',
  href: '/partnerships',
};

