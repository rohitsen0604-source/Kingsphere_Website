export interface PartnerCategory {
  id: string;
  title: string;
  description: string;
  targetProfile: string;
  collaborationModes: string[];
  iconName: string;
}

export const PARTNERSHIP_CATEGORIES: PartnerCategory[] = [
  {
    id: 'strategic-investors',
    title: 'Strategic Investors & Financial Partners',
    description:
      'Private equity, institutional funds, family offices, and accredited investors seeking structured, long-term capital deployment into India’s infrastructure, natural resources, manufacturing, and industrial ventures.',
    targetProfile: 'Institutional funds, family offices, sovereign wealth, and private equity investors.',
    collaborationModes: ['Equity co-investment', 'Structured debt partnerships', 'Special Purpose Vehicle (SPV) participation'],
    iconName: 'TrendingUp',
  },
  {
    id: 'joint-ventures',
    title: 'Joint Venture & Equity Partners',
    description:
      'Forward-thinking corporate entities and entrepreneurs seeking complementary operational, capital, or market synergies to build high-scale co-owned business ventures.',
    targetProfile: 'Corporate promoters, enterprise owners, and established business houses.',
    collaborationModes: ['50/50 and majority/minority JVs', 'SPV project formation', 'Co-branded business ventures'],
    iconName: 'Handshake',
  },
  {
    id: 'manufacturers',
    title: 'Manufacturing & Industrial Partners',
    description:
      'Established industrial leaders aiming to set up regional manufacturing units, expand processing capacity, or secure reliable raw materials and supply chains across Maharashtra and India.',
    targetProfile: 'Original Equipment Manufacturers (OEMs), precision engineering fabricators, and processing units.',
    collaborationModes: ['Contract manufacturing', 'Industrial cluster development', 'Capacity-sharing consortia'],
    iconName: 'Factory',
  },
  {
    id: 'technology-partners',
    title: 'Technology & Innovation Partners',
    description:
      'Technology innovators, software enterprises, and automation leaders collaborating on digital platforms, AI systems, SaaS architectures, and industrial digital transformation.',
    targetProfile: 'Technology scaleups, SaaS providers, AI developers, and digital solution architects.',
    collaborationModes: ['Technology integration', 'Platform co-development', 'Digital venture incubation'],
    iconName: 'Cpu',
  },
  {
    id: 'project-developers',
    title: 'Project Development & Execution Partners',
    description:
      'EPC contractors, civil engineering enterprises, renewable energy developers, and turnkey project managers collaborating on infrastructure and tender execution.',
    targetProfile: 'Tier-1 and Tier-2 EPC contractors, PMC consultants, and civil developers.',
    collaborationModes: ['Turnkey PMC partnerships', 'Consortium tender bidding', 'Subcontracting execution'],
    iconName: 'Building2',
  },
  {
    id: 'trade-partners',
    title: 'Import-Export & International Trade Partners',
    description:
      'Global trading houses, commodity exporters, freight forwarders, and logistics operators seeking compliant Indian trade corridors and distribution networks.',
    targetProfile: 'Cross-border trading entities, international commodity brokers, and maritime logistics operators.',
    collaborationModes: ['Bilateral trade contracts', 'Consignment partnerships', 'Port-to-inland transit handling'],
    iconName: 'Ship',
  },
  {
    id: 'distributors-associates',
    title: 'Distributors, Dealers & Business Associates',
    description:
      'Regional super-stockists, master distributors, retail networks, and commercial channel partners scaling FMCG products, personal care, packaged water, and automotive distribution.',
    targetProfile: 'Regional master distributors, stockist networks, commercial wholesalers, and retail operators.',
    collaborationModes: ['Master distributorship', 'Authorized retail dealership', 'Exclusive territory rights'],
    iconName: 'ShoppingBag',
  },
  {
    id: 'government-institutions',
    title: 'Government & Institutional Organizations',
    description:
      'Regional development authorities, municipal corporations, public sector undertakings, and industry bodies exploring public-private partnerships (PPP) and civic projects.',
    targetProfile: 'State development agencies, municipal bodies, and trade promotion councils.',
    collaborationModes: ['Public-Private Partnerships (PPP)', 'Policy pilot implementations', 'Regional development projects'],
    iconName: 'Landmark',
  },
];
