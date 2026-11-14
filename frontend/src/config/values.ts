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
    id: 'integrity',
    number: '01',
    title: 'INTEGRITY',
    tagline: 'Honesty, transparency, fairness and ethical business practices.',
    description:
      'We believe in honesty, transparency, fairness and ethical business practices. We are committed to building trust through responsible decisions, clear commitments and actions that stand the test of time.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'responsibility',
    number: '02',
    title: 'RESPONSIBILITY',
    tagline: 'Conducting business with social, environmental and economic stewardship.',
    description:
      'We believe in conducting business with social, environmental and economic responsibility. We strive to create opportunities that benefit our customers, partners, communities and future generations.',
    iconName: 'Leaf',
  },
  {
    id: 'excellence',
    number: '03',
    title: 'EXCELLENCE',
    tagline: 'Uncompromising quality, professionalism and continuous improvement.',
    description:
      'We are committed to quality, professionalism and continuous improvement. We strive to achieve high standards in every project, product, service and business relationship we undertake.',
    iconName: 'Award',
  },
  {
    id: 'innovation',
    number: '04',
    title: 'INNOVATION',
    tagline: 'Embracing forward-thinking solutions and technological advancement.',
    description:
      'We embrace new ideas, emerging technologies and forward-thinking solutions. We encourage creativity, explore new opportunities and transform possibilities into sustainable business ventures.',
    iconName: 'Lightbulb',
  },
  {
    id: 'collaboration',
    number: '05',
    title: 'UNITY & COLLABORATION',
    tagline: 'Lasting success achieved together through mutual respect and collective growth.',
    description:
      'We believe that lasting success is achieved together. We build strong relationships with employees, investors, customers, suppliers and strategic partners through mutual respect, shared goals and collective growth.',
    iconName: 'Handshake',
  },
];
