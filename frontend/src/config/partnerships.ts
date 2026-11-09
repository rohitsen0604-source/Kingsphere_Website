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
    title: 'Strategic Investors',
    description:
      'Private equity, institutional funds, family offices, and accredited investors seeking structured, long-term capital deployment into India’s infrastructure, natural resources, and industrial development.',
    targetProfile: 'Institutional funds, family offices, sovereign and private equity investors.',
    collaborationModes: ['Equity co-investment', 'Structured debt partnerships', 'Special Purpose Vehicle (SPV) participation'],
    iconName: 'TrendingUp',
  },
  {
    id: 'manufacturers',
    title: 'Manufacturers & Industrial Companies',
    description:
      'Established manufacturing leaders aiming to set up regional manufacturing units, expand processing capacity, or secure reliable raw materials and supply chains across Maharashtra and greater India.',
    targetProfile: 'Original Equipment Manufacturers (OEMs), component fabricators, and industrial processors.',
    collaborationModes: ['Contract manufacturing', 'Cluster development', 'Capacity-sharing consortia'],
    iconName: 'Factory',
  },
  {
    id: 'international-suppliers',
    title: 'International Suppliers',
    description:
      'Global equipment fabricators, heavy machinery producers, and industrial input suppliers seeking trusted, compliant Indian partners for localized distribution and procurement.',
    targetProfile: 'International machinery makers, technology providers, and specialized bulk material producers.',
    collaborationModes: ['Authorized distributorship', 'Direct procurement framework', 'Warehousing logistics'],
    iconName: 'Globe',
  },
  {
    id: 'importers-exporters',
    title: 'Importers & Exporters',
    description:
      'Trading houses and logistics enterprises looking to facilitate efficient international cargo, commodity trading, and multi-modal supply corridors.',
    targetProfile: 'Cross-border trading entities, commodity brokers, and maritime logistics operators.',
    collaborationModes: ['Bilateral trade contracts', 'Consignment partnerships', 'Port-to-inland transit handling'],
    iconName: 'Ship',
  },
  {
    id: 'infrastructure-companies',
    title: 'Infrastructure & Construction Companies',
    description:
      'Tier-1 and Tier-2 contractors, civil engineering enterprises, and infrastructure developers collaborating on high-impact public and private developments.',
    targetProfile: 'EPC contractors, civil developers, and urban infrastructure developers.',
    collaborationModes: ['Consortium bidding', 'Subcontracting alliances', 'Equipment and material leasing'],
    iconName: 'Building2',
  },
  {
    id: 'project-developers',
    title: 'Project Developers & Contractors',
    description:
      'Renewable energy developers, commercial builders, and municipal project sponsors requiring on-ground execution, regulatory coordination, and site delivery.',
    targetProfile: 'Solar developers, commercial park builders, and industrial estate managers.',
    collaborationModes: ['Turnkey PMC partnerships', 'Site preparation & clearances', 'Local execution management'],
    iconName: 'HardHat',
  },
  {
    id: 'government-institutions',
    title: 'Government & Institutional Partners',
    description:
      'Regional development authorities, municipal corporations, public sector undertakings, and industry bodies exploring public-private partnerships (PPP).',
    targetProfile: 'State development agencies, municipal bodies, and trade promotion councils.',
    collaborationModes: ['Public-Private Partnerships (PPP)', 'Policy pilot implementations', 'Regional development projects'],
    iconName: 'Landmark',
  },
  {
    id: 'joint-ventures',
    title: 'Joint Venture Partners',
    description:
      'Entrepreneurs and corporate entities seeking complementary operational, capital, or technological synergies to build high-scale co-owned business ventures.',
    targetProfile: 'Forward-thinking businesses seeking synergistic expansion into emerging sectors.',
    collaborationModes: ['50/50 and majority/minority JVs', 'SPV formation', 'Technology-transfer ventures'],
    iconName: 'Handshake',
  },
  {
    id: 'international-orgs',
    title: 'International Business Organizations',
    description:
      'Bilateral trade councils, export promotion boards, and diplomatic trade delegations seeking verified corporate partners within Maharashtra and Indian economic corridors.',
    targetProfile: 'Trade missions, chambers of commerce, and multilateral economic agencies.',
    collaborationModes: ['Trade delegation liaison', 'Market entry advisory', 'Investment roadshows'],
    iconName: 'Layers',
  },
];

