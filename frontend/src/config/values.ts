export interface CoreValue {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
}

export const CORE_VALUES: CoreValue[] = [
  {
    id: 'trust',
    number: '01',
    title: 'TRUST',
    tagline: 'Developing reliable and meaningful relationships.',
    description:
      'We conduct our affairs with uncompromised integrity, creating enduring relationships with partners, clients, and institutions built upon transparent commitments and ethical corporate stewardship.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'capability',
    number: '02',
    title: 'CAPABILITY',
    tagline: 'Developing practical execution and delivery capabilities.',
    description:
      'We invest systematically in our people, industrial know-how, and technical infrastructure to tackle complex operational challenges and deliver robust, repeatable outcomes.',
    iconName: 'Award',
  },
  {
    id: 'innovation',
    number: '03',
    title: 'INNOVATION',
    tagline: 'Embracing technology and new business models.',
    description:
      'We challenge traditional constraints by implementing modern digital systems, agile operational frameworks, and progressive business models across our diversified sectors.',
    iconName: 'Lightbulb',
  },
  {
    id: 'partnership',
    number: '04',
    title: 'PARTNERSHIP',
    tagline: 'Creating mutually beneficial collaborations.',
    description:
      'We believe the most durable value arises from synergy. We align incentives, pool strategic strengths, and foster reciprocal growth with domestic and international allies.',
    iconName: 'Handshake',
  },
  {
    id: 'sustainability',
    number: '05',
    title: 'SUSTAINABILITY',
    tagline: 'Creating long-term economic and environmental value.',
    description:
      'We integrate resource stewardship, circular economy principles, and long-range environmental consciousness into every project and industrial initiative we undertake.',
    iconName: 'Leaf',
  },
  {
    id: 'execution',
    number: '06',
    title: 'EXECUTION',
    tagline: 'Turning opportunities into measurable results.',
    description:
      'Ideas achieve impact through disciplined delivery. We maintain relentless focus on milestones, rigorous quality metrics, and concrete commercial completion.',
    iconName: 'Target',
  },
];

