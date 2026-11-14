export interface CapabilityDomain {
  id: string;
  title: string;
  category: string;
  summary: string;
  brands?: { name: string; category: string }[];
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
      'Industrial manufacturing, machinery and equipment, engineering products, processing units, contract manufacturing, production facilities and industrial development.',
    operationalScope: [
      'Industrial manufacturing and specialized processing units',
      'Machinery and equipment fabrication and supply',
      'Engineering products and precision components',
      'Contract manufacturing and modern production facilities',
      'Industrial infrastructure and cluster development',
    ],
    equipmentAndAssets: [
      'Heavy machining, CNC tooling, and sheet metal presses',
      'Precision measurement and metrology instruments',
      'Industrial material handling cranes and plant logistics',
    ],
    opportunityVectors: [
      'Turnkey contract manufacturing for domestic and export markets',
      'Precision engineering and component fabrication joint ventures',
      'Industrial park and manufacturing cluster development',
    ],
    image: '/images/sectors/sector-01-manufacturing.jpg',
  },
  {
    id: 'infrastructure-construction',
    title: 'Infrastructure, Construction & Development',
    category: 'Civil Infrastructure',
    summary:
      'Roads, highways, bridges, dams, river projects, residential and commercial real estate, land development, industrial infrastructure and civil construction.',
    operationalScope: [
      'Roads, highways, bridges, and arterial civil transportation corridors',
      'Dams, river projects, water reservoirs, and civil canal works',
      'Residential and commercial real estate master planning and construction',
      'Industrial infrastructure, land development, and civil site engineering',
    ],
    equipmentAndAssets: [
      'Heavy earthmoving, grading, and hydraulic compaction fleets',
      'High-capacity automated concrete batching and mixing plants',
      'Advanced digital terrain surveying and laser profiling gear',
    ],
    opportunityVectors: [
      'National highway, expressway, and bridge EPC contracts',
      'Water resource management, dams, and river project developments',
      'Integrated commercial parks and industrial logistics estates',
    ],
    image: '/images/sectors/sector-02-infrastructure.jpg',
  },
  {
    id: 'international-trade',
    title: 'International Trade & Import-Export',
    category: 'Global Trade & Logistics',
    summary:
      'Import-export, international sourcing, global trading, logistics, transportation, freight management, warehousing, supply chain management and global distribution.',
    operationalScope: [
      'Cross-border digital sourcing and supplier qualification',
      'Import-export compliance, trade finance, and customs facilitation',
      'Freight forwarding, multi-modal transport, and logistics management',
      'Warehousing, supply chain management, and global distribution',
    ],
    equipmentAndAssets: [
      'Port-adjacent bonded warehousing and logistics depots',
      'Multi-modal freight tracking and maritime shipping coordination',
      'Statutory customs clearing and trade documentation infrastructure',
    ],
    opportunityVectors: [
      'Bilateral trade corridors between India and overseas markets',
      'Bulk material and machinery import consignment agreements',
      'Consolidated inland container depot (ICD) transit hubs',
    ],
    image: '/images/sectors/sector-03-international-trade.jpg',
  },
  {
    id: 'consumer-goods-commercial',
    title: 'Consumer Goods & Commercial Businesses',
    category: 'Commercial Distribution & Brands',
    summary:
      'FMCG, packaged drinking water, perfumes, personal care, automobiles, cars, bikes, trucks, automotive products, wholesale, retail and distribution.',
    brands: [
      { name: 'ALBINE AQUA™', category: 'Water & Beverage Products' },
      { name: 'ELBRUS™', category: 'Perfumes & Personal Care Products' },
    ],
    operationalScope: [
      'Proprietary FMCG brand development and packaged drinking water production',
      'Perfumes, personal care, and lifestyle consumer merchandise',
      'Automotive dealership, cars, bikes, trucks, and automotive products distribution',
      'High-volume wholesale, retail networks, and regional inventory logistics',
    ],
    equipmentAndAssets: [
      'Automated bottling, purification, and packaging lines',
      'Regional distribution center hubs and logistics delivery fleets',
      'Automated SKU inventory and multi-city point-of-sale tracking',
    ],
    opportunityVectors: [
      'Super-stockist and dealer network expansion for ALBINE AQUA™ & ELBRUS™',
      'Commercial automotive retail, dealership, and fleet supply contracts',
      'Institutional bulk supply contracts for FMCG and beverage products',
    ],
    image: '/images/sectors/sector-04-consumer-goods.jpg',
  },
  {
    id: 'technology-digital',
    title: 'Technology & Digital Businesses',
    category: 'Digital Innovation & AI',
    summary:
      'Mobile applications, websites, B2B and B2C marketplaces, SaaS platforms, artificial intelligence, automation, digital solutions, startup development and technology innovation.',
    operationalScope: [
      'Custom mobile applications, web platforms, and responsive digital ecosystems',
      'B2B and B2C digital marketplaces and high-throughput SaaS platforms',
      'Artificial intelligence, operational automation, and predictive data systems',
      'Startup incubation, digital venture scaling, and technology commercialization',
    ],
    equipmentAndAssets: [
      'Scalable cloud infrastructure hosting and automated CI/CD pipelines',
      'Secure transaction gateways and encrypted enterprise databases',
      'AI-driven operational workflows and data telemetry analytics',
    ],
    opportunityVectors: [
      'SaaS partnerships for industrial and supply-chain digital tracking',
      'B2B marketplace joint ventures in regional agricultural and industrial trades',
      'Enterprise workflow digitization and AI automation deployments',
    ],
    image: '/images/sectors/sector-05-technology-digital.jpg',
  },
  {
    id: 'mining-natural-resources',
    title: 'Mining & Natural Resources',
    category: 'Extractive & Minerals',
    summary:
      'Mining, quarry operations, stone crusher plants, sand, soil, aggregates, minerals, limestone, mineral processing, natural resources and mining contracts.',
    operationalScope: [
      'Quarry operations and high-capacity stone crusher plants',
      'Sand, soil, crushed stone aggregates, and building material extraction',
      'Limestone, mineral processing, and industrial raw feedstocks',
      'Statutory compliant long-term mining contracts and site reclamation',
    ],
    equipmentAndAssets: [
      'Heavy jaw crushers, cone crushers, and vibratory screening units',
      'Heavy-duty tipper fleets and multi-axle bulk transport networks',
      'Certified laboratory testing for mineral purity and aggregate grade',
    ],
    opportunityVectors: [
      'Bulk aggregate supply contracts for national highways and railways',
      'Industrial limestone and mineral off-take joint ventures',
      'Automated aggregate crushing plant development partnerships',
    ],
    image: '/images/sectors/sector-06-mining.jpg',
  },
  {
    id: 'energy-sustainable-solutions',
    title: 'Energy & Sustainable Solutions',
    category: 'Renewables & Power',
    summary:
      'Solar power, renewable energy, energy infrastructure, power generation, energy conservation, sustainable energy projects and industrial energy solutions.',
    operationalScope: [
      'Commercial and industrial rooftop and ground-mount solar power systems',
      'Renewable energy infrastructure and power generation assets',
      'Industrial energy conservation, auditing, and efficiency upgrades',
      'Sustainable turnkey clean energy projects and power purchase agreements (PPAs)',
    ],
    equipmentAndAssets: [
      'Tier-1 photovoltaic modules and high-efficiency string/central inverters',
      'Galvanized mounting structures, switchgear, and lightning protection',
      'Remote SCADA telemetry performance monitoring and automated diagnostics',
    ],
    opportunityVectors: [
      'Captive solar power development for heavy industrial manufacturing units',
      'Independent power producer (IPP) joint ventures in high-insolation zones',
      'Industrial energy conservation and clean technology retrofit projects',
    ],
    image: '/images/sectors/sector-07-energy.jpg',
  },
  {
    id: 'recycling-circular-economy',
    title: 'Recycling & Circular Economy',
    category: 'Circular Economy',
    summary:
      'Plastic recycling, metal scrap, e-waste, battery recycling, construction and demolition waste management, waste processing, resource recovery and waste-to-energy projects.',
    operationalScope: [
      'Plastic recycling and polymer pelletizing facilities',
      'Ferrous and non-ferrous metal scrap processing and sorting',
      'E-waste and lithium-ion battery recycling and safe component recovery',
      'Construction and demolition waste management and waste-to-energy solutions',
    ],
    equipmentAndAssets: [
      'Heavy scrap metal balers, hydraulic shears, and shredders',
      'Magnetic separators, eddy-current sorters, and optical wash lines',
      'Secondary polymer extrusion pelletizers and compounding lines',
    ],
    opportunityVectors: [
      'Secondary raw material off-take partnerships with industrial manufacturers',
      'Municipal construction & demolition waste processing concessions',
      'E-waste compliance and Extended Producer Responsibility (EPR) programs',
    ],
    image: '/images/sectors/sector-08-recycling.jpg',
  },
  {
    id: 'consultancy-business-recovery',
    title: 'Consultancy & Business Recovery',
    category: 'Advisory & Strategy',
    summary:
      'Business consultancy, project feasibility studies, market research, corporate strategy, business restructuring, operational improvement and business recovery solutions.',
    operationalScope: [
      'Comprehensive project feasibility studies and detailed project reports (DPRs)',
      'Market research, competitive intelligence, and corporate strategy',
      'Business restructuring, operational turnaround, and debt realignment',
      'Operational excellence, lean management, and business recovery solutions',
    ],
    equipmentAndAssets: [
      'Forensic financial modeling and liquidity forecasting frameworks',
      'Regulatory compliance mapping databases and statutory legal advisory',
      'Senior executive turnaround steering committees and PMC leadership',
    ],
    opportunityVectors: [
      'Revival mandates for distressed manufacturing and industrial units',
      'Strategic advisory for international enterprises entering Indian markets',
      'Capital syndication and turnaround partnerships for stressed assets',
    ],
    image: '/images/sectors/sector-09-consultancy.jpg',
  },
  {
    id: 'projects-services',
    title: 'Projects & Services (PROJECTS & CONTRACT EXECUTION)',
    category: 'Turnkey Contract Delivery',
    summary:
      'Government tenders, private contracts, infrastructure projects, engineering services, machinery and equipment supply, equipment rental, procurement, logistics support, project management and turnkey execution.',
    operationalScope: [
      'Government tender participation and private contract execution',
      'Infrastructure projects and specialized engineering services',
      'Machinery and equipment supply and heavy equipment rental fleets',
      'Procurement, logistics support, project management, and turnkey execution',
    ],
    equipmentAndAssets: [
      'Digital tender tracking and RFP engineering analysis suites',
      'Fleet of heavy civil machinery, cranes, and transport equipment for lease',
      'Chartered engineering inspection and turnkey PMC supervisory teams',
    ],
    opportunityVectors: [
      'Consortium bidding for large-scale municipal and central government tenders',
      'Heavy equipment leasing and fleet deployment for major infrastructure works',
      'Comprehensive PMC and turnkey engineering delivery partnerships',
    ],
    image: '/images/sectors/sector-10-projects.jpg',
  },
  {
    id: 'strategic-investment-jv',
    title: 'Strategic Investment & Joint Ventures',
    category: 'Capital Alliances & SPVs',
    summary:
      'Strategic investments, equity partnerships, joint ventures, project funding, institutional alliances, manufacturing partnerships, technology collaborations and business development opportunities.',
    operationalScope: [
      'Strategic investments and equity partnership structuring',
      'Joint ventures, Special Purpose Vehicles (SPVs), and project funding',
      'Institutional alliances and manufacturing partnerships',
      'Technology collaborations and multi-sector business development opportunities',
    ],
    equipmentAndAssets: [
      'Ring-fenced Special Purpose Vehicle (SPV) architectures',
      'Syndicated institutional investor and family office capital networks',
      'Fiduciary compliance and independent board governance frameworks',
    ],
    opportunityVectors: [
      'Co-investment vehicles for high-growth Indian infrastructure and manufacturing assets',
      'Cross-border joint ventures bringing advanced technologies to Indian industries',
      'Growth capital deployment in sustainable energy and consumer brands',
    ],
    image: '/images/sectors/sector-11-investment.jpg',
  },
];
