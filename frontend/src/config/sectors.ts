export interface SectorItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  image: string;
  capabilities: string[];
  opportunities: string[];
  strategicFocus: string;
}

export const BUSINESS_SECTORS: SectorItem[] = [
  {
    id: 'manufacturing-industrial',
    number: '01',
    title: 'MANUFACTURING & INDUSTRIAL DEVELOPMENT',
    shortDescription:
      'Manufacturing opportunities, industrial development, production partnerships, and supply chain businesses.',
    fullDescription:
      'Driving value through modern manufacturing infrastructure, strategic industrial development, localized and regional production facilities, and resilient component supply chains. We partner with industrial leaders to enhance manufacturing capabilities and market footprint.',
    iconName: 'Factory',
    image: '/images/sectors/sector-01-manufacturing.jpg',
    capabilities: [
      'Industrial infrastructure planning and site development',
      'Production partnerships and contract manufacturing enablement',
      'Supply chain integration and procurement logistics',
      'Advanced fabrication and industrial equipment facilities',
    ],
    opportunities: [
      'Joint ventures in precision engineering and equipment fabrication',
      'Industrial park and cluster development partnerships',
      'Supply chain optimization for specialized industrial components',
    ],
    strategicFocus: 'Domestic capability building, advanced tooling, and high-efficiency manufacturing clusters.',
  },
  {
    id: 'infrastructure-construction',
    number: '02',
    title: 'INFRASTRUCTURE, CONSTRUCTION & DEVELOPMENT',
    shortDescription:
      'Infrastructure development projects, construction, real estate development, and project execution.',
    fullDescription:
      'Catalyzing regional and national growth through essential infrastructure, civil works, commercial and industrial real estate development, and end-to-end project execution with engineering rigor.',
    iconName: 'Building2',
    image: '/images/sectors/sector-02-infrastructure.jpg',
    capabilities: [
      'Comprehensive project execution and turnkey civil construction',
      'Commercial, industrial, and logistics park real estate development',
      'Structural engineering and master planning advisory',
      'Public-private project collaboration and contract management',
    ],
    opportunities: [
      'Urban and regional transport corridor infrastructure',
      'Commercial hub and industrial warehousing facilities',
      'High-grade material procurement and engineering subcontracting',
    ],
    strategicFocus: 'Sustainable engineering, durable materials, and precision project delivery.',
  },
  {
    id: 'international-trade',
    number: '03',
    title: 'INTERNATIONAL TRADE & IMPORT-EXPORT',
    shortDescription:
      'Digital sourcing, import-export, international trading, supplier search, and distribution.',
    fullDescription:
      'Connecting global markets with domestic demand through structured cross-border trade, compliant import-export operations, multi-modal supply corridors, and strategic international partner networks.',
    iconName: 'Ship',
    image: '/images/sectors/sector-03-international-trade.jpg',
    capabilities: [
      'Cross-border digital sourcing and supplier qualification',
      'Trade finance structuring, compliance, and customs facilitation',
      'Multi-modal logistics and maritime freight coordination',
      'Bulk commodity and specialized equipment import-export',
    ],
    opportunities: [
      'Bilateral trade agreements and exclusive product distributorships',
      'Port-adjacent warehousing and distribution channels',
      'Global raw material sourcing corridors for Indian industry',
    ],
    strategicFocus: 'Reliability of supply, compliance integrity, and global market reach.',
  },
  {
    id: 'consumer-goods-commercial',
    number: '04',
    title: 'CONSUMER GOODS & COMMERCIAL BUSINESSES',
    shortDescription:
      'Consumer electronics, commercial, retail, wholesale, and trade activities.',
    fullDescription:
      'Enabling distribution and wholesale scaling of consumer goods, commercial merchandise, and consumer electronics through robust dealer networks and organized supply logistics.',
    iconName: 'ShoppingBag',
    image: '/images/sectors/sector-04-consumer-goods.jpg',
    capabilities: [
      'Wholesale network management and institutional channel sales',
      'Consumer electronics supply and warranty logistics support',
      'Commercial procurement and high-volume retail distribution',
      'Inventory warehousing and point-of-sale supply orchestration',
    ],
    opportunities: [
      'Authorized master distributorships for electronics and appliances',
      'Tier-2 and Tier-3 commercial market expansion ventures',
      'Direct-to-enterprise supply contracts and bulk merchandising',
    ],
    strategicFocus: 'Extensive retail penetration, authentic sourcing, and rapid inventory turns.',
  },
  {
    id: 'technology-digital',
    number: '05',
    title: 'TECHNOLOGY & DIGITAL BUSINESSES',
    shortDescription:
      'Digital platforms, business applications, technology solutions, and technology partnerships.',
    fullDescription:
      'Accelerating digital transformation through enterprise platforms, industrial IoT integration, modern business applications, and strategic alliances with leading technology innovators.',
    iconName: 'Cpu',
    image: '/images/sectors/sector-05-technology-digital.jpg',
    capabilities: [
      'Enterprise application architecture and workflow digitization',
      'Industrial automation and asset telemetry integration',
      'Cloud solutions and digital transaction management',
      'Strategic technology joint ventures and solution co-creation',
    ],
    opportunities: [
      'Supply chain digitization and ERP integration frameworks',
      'Smart utility and automated plant monitoring solutions',
      'Fintech and cross-border digital trade settlements',
    ],
    strategicFocus: 'Resilient digital architectures, data security, and scalable cloud ecosystems.',
  },
  {
    id: 'mining-natural-resources',
    number: '06',
    title: 'MINING & NATURAL RESOURCES',
    shortDescription:
      'Mining, minerals, steel, salt, lime, and related processing and supply opportunities.',
    fullDescription:
      'Responsible extraction, processing, and distribution of mineral resources, industrial salt, limestone, and steel feedstocks to fuel core industrial production and infrastructure development.',
    iconName: 'Gem',
    image: '/images/sectors/sector-06-mining-resources.jpg',
    capabilities: [
      'Mineral resource sourcing, grading, and bulk material handling',
      'Industrial limestone, salt, and aggregate distribution networks',
      'Steel procurement and metallurgical supply partnerships',
      'Environmental compliance and sustainable extraction advisory',
    ],
    opportunities: [
      'Long-term mineral supply agreements with smelting and processing plants',
      'Mineral beneficiation and processing infrastructure ventures',
      'Industrial-grade chemical salt and limestone off-take contracts',
    ],
    strategicFocus: 'Resource stewardship, supply security, and stringent environmental adherence.',
  },
  {
    id: 'energy-sustainable-solutions',
    number: '07',
    title: 'ENERGY & SUSTAINABLE SOLUTIONS',
    shortDescription:
      'Energy projects, renewable solutions, and sustainable business opportunities.',
    fullDescription:
      'Advancing sustainable energy transitions through commercial solar initiatives, decentralized power infrastructure, energy efficiency engineering, and clean energy partnerships.',
    iconName: 'Sun',
    image: '/images/sectors/sector-07-renewable-energy.jpg',
    capabilities: [
      'Commercial and industrial captive solar energy project coordination',
      'Energy audit, optimization, and conservation infrastructure',
      'Decentralized microgrid and storage integration advisory',
      'Clean energy project financing and public incentive navigation',
    ],
    opportunities: [
      'Rooftop and ground-mount solar power purchase agreements (PPA)',
      'Green hydrogen and alternative clean fuel exploration ventures',
      'Industrial boiler and thermal efficiency modernization projects',
    ],
    strategicFocus: 'Carbon reduction, high ROI clean energy assets, and energy autonomy.',
  },
  {
    id: 'recycling-circular-economy',
    number: '08',
    title: 'RECYCLING & CIRCULAR ECONOMY',
    shortDescription:
      'Recycling, waste management, resource recovery, and circular economy initiatives.',
    fullDescription:
      'Transforming industrial byproducts and urban waste streams into valuable secondary raw materials through circular economy frameworks, modern recycling technologies, and responsible waste recovery.',
    iconName: 'Recycle',
    image: '/images/sectors/sector-08-recycling-circular.jpg',
    capabilities: [
      'Industrial scrap, metal, and plastic waste recovery systems',
      'Circular supply chain design and closed-loop material re-entry',
      'Electronic waste (E-waste) aggregation and compliant processing',
      'Municipal and industrial solid waste processing advisory',
    ],
    opportunities: [
      'Secondary raw material supply contracts for metallurgical industries',
      'Recycling plant infrastructure development and equipment supply',
      'Extended Producer Responsibility (EPR) compliance partnerships',
    ],
    strategicFocus: 'Zero-landfill targets, resource preservation, and green industrial compliance.',
  },
  {
    id: 'consultancy-business-recovery',
    number: '09',
    title: 'CONSULTANCY & BUSINESS RECOVERY',
    shortDescription:
      'Corporate governance, business consultancy, market research, strategic planning, and business support.',
    fullDescription:
      'Empowering enterprises through strategic corporate turnaround advisory, market viability studies, regulatory alignment, performance optimization, and institutional governance frameworks.',
    iconName: 'Compass',
    image: '/images/sectors/sector-09-consultancy-recovery.jpg',
    capabilities: [
      'Operational restructuring and business turnaround management',
      'Market research, feasibility reporting, and entry strategy',
      'Corporate governance, compliance advisory, and risk assessment',
      'Capital restructuring and strategic asset monetization advisory',
    ],
    opportunities: [
      'Distressed asset revitalization and operational rehabilitation',
      'Cross-border market entry consulting for foreign entities',
      'Specialized management advisory for high-growth industrial firms',
    ],
    strategicFocus: 'Objective diagnostics, actionable roadmaps, and stakeholder alignment.',
  },
  {
    id: 'projects-services',
    number: '10',
    title: 'PROJECTS & SERVICES',
    shortDescription:
      'Government and private projects, contracts, supply, selection, and professional services.',
    fullDescription:
      'Delivering specialized contracting, institutional procurement, tender management, and turnkey professional services for government authorities and private sector corporations.',
    iconName: 'Briefcase',
    image: '/images/sectors/sector-10-projects-services.jpg',
    capabilities: [
      'Government and institutional tender bidding and execution',
      'Vendor selection, vetting, and performance tracking',
      'Turnkey project management consultancy (PMC)',
      'Contractual risk mitigation and quality assurance auditing',
    ],
    opportunities: [
      'Consortium partnerships for large-scale public work tenders',
      'Institutional procurement frameworks for equipment and materials',
      'Specialized engineering and project supervision service contracts',
    ],
    strategicFocus: 'Contractual fidelity, timeline compliance, and institutional trust.',
  },
  {
    id: 'strategic-investment-jv',
    number: '11',
    title: 'STRATEGIC INVESTMENT & JOINT VENTURES',
    shortDescription:
      'Investment opportunities, joint ventures, strategic alliances, and joint venture services.',
    fullDescription:
      'Formulating equity partnerships, structured joint ventures, strategic co-investments, and consortium arrangements to scale high-potential business ventures across core economic sectors.',
    iconName: 'TrendingUp',
    image: '/images/sectors/sector-11-strategic-investment.jpg',
    capabilities: [
      'Joint venture structuring, stakeholder alignment, and governance',
      'Private equity and debt capital arrangement facilitation',
      'Syndicated investments in infrastructure and manufacturing assets',
      'Strategic alliance management and post-merger integration support',
    ],
    opportunities: [
      'Co-investment in regional manufacturing and infrastructure assets',
      'Strategic international capital deployment into emerging Indian sectors',
      'Long-term equity partnerships for specialized commercial developments',
    ],
    strategicFocus: 'Shared capital, risk mitigation, and exponential collective value.',
  },
];
