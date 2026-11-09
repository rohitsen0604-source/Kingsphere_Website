export interface CapabilityDomain {
  id: string;
  title: string;
  category: string;
  summary: string;
  operationalScope: string[];
  equipmentAndAssets: string[];
  opportunityVectors: string[];
  image: string;
}

export const CAPABILITY_DOMAINS: CapabilityDomain[] = [
  {
    id: 'manufacturing-industrial',
    title: 'Manufacturing & Industrial Development',
    category: 'Industrial Production',
    summary:
      'Facilitating contract production, component assembly lines, specialized tooling, and industrial supply integration across core manufacturing corridors.',
    operationalScope: [
      'Machining, metal fabrication, and assembly frameworks',
      'Vendor quality inspection and ISO standard compliance setup',
      'Local supplier identification and raw material buffers',
      'Workforce recruitment and technical skill alignment',
    ],
    equipmentAndAssets: [
      'CNC machining and sheet metal press collaborations',
      'Precision measurement and metrology instruments',
      'Industrial material handling cranes and forklifts',
    ],
    opportunityVectors: [
      'Automotive and machinery aftermarket component production',
      'Electrical equipment and distribution panel enclosures',
      'Import-substitution tooling and heavy fabrication',
    ],
    image: '/images/sectors/sector-01-manufacturing.jpg',
  },
  {
    id: 'infrastructure-construction',
    title: 'Infrastructure, Construction & Development',
    category: 'Civil Infrastructure',
    summary:
      'Execution frameworks for regional arterial roadways, industrial access corridors, drainage systems, and civil utility networks.',
    operationalScope: [
      'Turnkey civil earthworks and site preparation',
      'Arterial road connectivity and industrial access pavements',
      'Stormwater, drainage, and utility trenching execution',
      'Subcontractor coordination and statutory safety compliance',
    ],
    equipmentAndAssets: [
      'Earthmoving and compaction machinery alliances',
      'Surveying and digital terrain scanning capabilities',
      'Batching plant and concrete supply coordination',
    ],
    opportunityVectors: [
      'Regional industrial park connectivity initiatives',
      'Urban civil upgrade tenders and road works',
      'Utility corridor trenching and civil installations',
    ],
    image: '/images/sectors/sector-02-infrastructure.jpg',
  },
  {
    id: 'international-trade',
    title: 'International Trade & Import-Export',
    category: 'Global Trade & Logistics',
    summary:
      'Cross-border commodities handling, structured letters of credit, customs clearing, and multi-modal freight coordination.',
    operationalScope: [
      'Global vendor screening and commercial contract vetting',
      'Multi-modal bill of lading and port handling coordination',
      'Inland container depot (ICD) clearance operations',
      'Currency hedging advisory and structured trade settlements',
    ],
    equipmentAndAssets: [
      'Customs broker and freight forwarder network ties',
      'Port-adjacent bonded warehouse partner facilities',
      'Temperature-controlled container tracking solutions',
    ],
    opportunityVectors: [
      'Bulk agricultural commodities and spices trade corridors',
      'Specialized industrial raw materials and polymer import',
      'Export promotion of regional engineered goods',
    ],
    image: '/images/sectors/sector-03-international-trade.jpg',
  },
  {
    id: 'consumer-goods-commercial',
    title: 'Consumer Goods & Commercial Businesses',
    category: 'Commercial Distribution',
    summary:
      'Wholesale network orchestration, retail distribution channels, and inventory logistics for high-demand consumer goods and electronics.',
    operationalScope: [
      'Wholesale network management and institutional channel sales',
      'Consumer electronics supply and warranty logistics support',
      'Commercial procurement and high-volume retail distribution',
      'Inventory warehousing and point-of-sale supply orchestration',
    ],
    equipmentAndAssets: [
      'Regional distribution center hubs and logistics fleets',
      'Automated inventory and SKU management systems',
      'Multi-tier dealer and retailer dispatch networks',
    ],
    opportunityVectors: [
      'Authorized master distributorships for electronics and appliances',
      'Tier-2 and Tier-3 commercial market expansion ventures',
      'Direct-to-enterprise supply contracts and bulk merchandising',
    ],
    image: '/images/sectors/sector-04-consumer-goods.jpg',
  },
  {
    id: 'technology-digital',
    title: 'Technology & Digital Businesses',
    category: 'Digital Transformation',
    summary:
      'Business intelligence dashboards, custom ERP integrations, cloud computing frameworks, and supply chain telemetry.',
    operationalScope: [
      'Modern web and mobile application engineering',
      'ERP integration and inventory tracking software setup',
      'IoT sensor deployment for factory equipment telemetry',
      'Cybersecurity and data governance protocol setup',
    ],
    equipmentAndAssets: [
      'Cloud compute hosting and automated backup failovers',
      'Edge IoT gateway controllers and industrial transceivers',
      'Encrypted transaction API architectures',
    ],
    opportunityVectors: [
      'Enterprise workflow digitization for mid-tier corporations',
      'Real-time fleet tracking and fuel management platforms',
      'B2B marketplace platforms for industrial wholesale',
    ],
    image: '/images/sectors/sector-05-technology-digital.jpg',
  },
  {
    id: 'mining-natural-resources',
    title: 'Mining & Natural Resources',
    category: 'Extractive & Minerals',
    summary:
      'Quarrying, industrial mineral processing, limestone extraction, salt farming, and bulk material logistics.',
    operationalScope: [
      'Limestone and mineral deposit evaluation and surveying',
      'Bulk material crushing, screening, and grading facilities',
      'Industrial salt sourcing, refining, and bulk dispatch',
      'Mine safety protocol enforcement and reclamation planning',
    ],
    equipmentAndAssets: [
      'Heavy jaw crushers, cone crushers, and vibratory screens',
      'Bulk tipper fleets and multi-axle freight coordination',
      'Laboratory testing for mineral purity and moisture grading',
    ],
    opportunityVectors: [
      'Cement plant limestone supply agreements',
      'Chemical and industrial grade sodium chloride contracts',
      'Road construction aggregate production and supply',
    ],
    image: '/images/sectors/sector-06-mining-resources.jpg',
  },
  {
    id: 'energy-sustainable-solutions',
    title: 'Energy & Sustainable Solutions',
    category: 'Renewable Power',
    summary:
      'Commercial rooftop and ground-mount solar power systems, captive renewable installations, and industrial energy audits.',
    operationalScope: [
      'Solar resource profiling and shadow analysis',
      'Net metering approvals and grid interconnection support',
      'High-efficiency solar module and inverter procurement',
      'Periodic preventive maintenance and telemetry monitoring',
    ],
    equipmentAndAssets: [
      'Tier-1 photovoltaic modules and string/central inverters',
      'Galvanized mounting structures and lightning protection',
      'Remote SCADA performance monitoring and thermal scanners',
    ],
    opportunityVectors: [
      'Captive solar installation for manufacturing factories',
      'Agricultural feeder solarization initiatives',
      'Battery energy storage systems (BESS) for peak shaving',
    ],
    image: '/images/sectors/sector-07-renewable-energy.jpg',
  },
  {
    id: 'recycling-circular-economy',
    title: 'Recycling & Circular Economy',
    category: 'Circular Economy',
    summary:
      'Ferrous and non-ferrous scrap sorting, polymer reprocessing, construction debris crushing, and EPR compliance management.',
    operationalScope: [
      'Segregation and mechanical shredding protocols',
      'Heavy metal sorting and smelting feedstock preparation',
      'Polymer regranulation and compounding operations',
      'Statutory pollution control board (SPCB) compliance filing',
    ],
    equipmentAndAssets: [
      'Heavy scrap metal balers and hydraulic shears',
      'Magnetic separators and eddy-current sorters',
      'Secondary plastic shredders and pelletizers',
    ],
    opportunityVectors: [
      'Automotive scrap recycling and deregistration support',
      'Industrial foundry metal scrap supply agreements',
      'Post-consumer plastic recycling into industrial pellets',
    ],
    image: '/images/sectors/sector-08-recycling-circular.jpg',
  },
  {
    id: 'consultancy-business-recovery',
    title: 'Consultancy & Business Recovery',
    category: 'Advisory & Turnaround',
    summary:
      'Operational restructuring, corporate turnaround roadmaps, market feasibility reporting, and statutory governance alignment.',
    operationalScope: [
      'Operational restructuring and business turnaround management',
      'Market research, feasibility reporting, and entry strategy',
      'Corporate governance, compliance advisory, and risk assessment',
      'Capital restructuring and strategic asset monetization advisory',
    ],
    equipmentAndAssets: [
      'Financial modeling and liquidity forecasting frameworks',
      'Regulatory compliance mapping databases',
      'Senior executive turnaround steering committees',
    ],
    opportunityVectors: [
      'Distressed asset revitalization and operational rehabilitation',
      'Cross-border market entry consulting for foreign entities',
      'Specialized management advisory for high-growth industrial firms',
    ],
    image: '/images/sectors/sector-09-consultancy-recovery.jpg',
  },
  {
    id: 'projects-services',
    title: 'Projects & Comprehensive Services',
    category: 'Turnkey Project Delivery',
    summary:
      'Tender management, quality assurance audits, government contracting, and turnkey procurement services.',
    operationalScope: [
      'Comprehensive tender document preparation and evaluation',
      'Supplier capability auditing and factory vetting',
      'Financial restructuring and corporate turnaround roadmaps',
      'Contract legal drafting and milestone dispute mitigation',
    ],
    equipmentAndAssets: [
      'Digital tender tracking and RFP analysis suites',
      'Comprehensive vendor qualification database',
      'Chartered engineering inspection affiliations',
    ],
    opportunityVectors: [
      'Government and semi-government tender participation',
      'Corporate supply chain optimization and cost rationalization',
      'Turnkey PMC assignments for commercial developers',
    ],
    image: '/images/sectors/sector-10-projects-services.jpg',
  },
  {
    id: 'strategic-investment-jv',
    title: 'Strategic Investment & Joint Ventures',
    category: 'Capital Syndication & SPVs',
    summary:
      'Formulating equity partnerships, structured joint ventures, strategic co-investments, and consortium arrangements to scale high-potential ventures.',
    operationalScope: [
      'Joint venture structuring, stakeholder alignment, and governance',
      'Private equity and debt capital arrangement facilitation',
      'Syndicated investments in infrastructure and manufacturing assets',
      'Strategic alliance management and post-merger integration support',
    ],
    equipmentAndAssets: [
      'Ring-fenced Special Purpose Vehicle (SPV) architectures',
      'Syndicated institutional investor capital networks',
      'Fiduciary compliance and independent board frameworks',
    ],
    opportunityVectors: [
      'Co-investment in regional manufacturing and infrastructure assets',
      'Strategic international capital deployment into emerging Indian sectors',
      'Long-term equity partnerships for specialized commercial developments',
    ],
    image: '/images/sectors/sector-11-strategic-investment.jpg',
  },
];
