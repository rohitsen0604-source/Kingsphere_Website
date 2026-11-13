export interface SectorMetric {
  label: string;
  value: string;
}

export interface SectorExecutionStep {
  step: string;
  title: string;
  detail: string;
}

export interface SectorItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  image: string;
  capabilities: string[];
  opportunities: string[];
  strategicFocus: string;
  keyMetrics: SectorMetric[];
  executionFramework: SectorExecutionStep[];
  targetPartners: string[];
}

export const BUSINESS_SECTORS: SectorItem[] = [
  {
    id: 'manufacturing-industrial',
    number: '01',
    title: 'MANUFACTURING & INDUSTRIAL DEVELOPMENT',
    tagline: 'Precision Production & Resilient Industrial Ecosystems',
    category: 'Industrial & Production',
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
    keyMetrics: [
      { label: 'Core Focus', value: 'Turnkey Plant & Tooling' },
      { label: 'Operational Scope', value: 'Regional & National Hubs' },
      { label: 'Engagement Model', value: 'JV / Contract Production' },
    ],
    executionFramework: [
      {
        step: '01',
        title: 'Site & Feasibility Assessment',
        detail: 'Evaluating industrial land corridors, utility readiness, and regulatory clearances for rapid setup.',
      },
      {
        step: '02',
        title: 'Equipment & Supply Alignment',
        detail: 'Integrating OEM machinery, precision tooling lines, and verified raw-material vendor networks.',
      },
      {
        step: '03',
        title: 'Scaled Production & Off-Take',
        detail: 'Establishing lean quality governance and structured domestic & export distribution channels.',
      },
    ],
    targetPartners: ['OEM Manufacturers', 'Industrial Park Developers', 'Precision Component Suppliers', 'Institutional Co-Investors'],
  },
  {
    id: 'infrastructure-construction',
    number: '02',
    title: 'INFRASTRUCTURE, CONSTRUCTION & DEVELOPMENT',
    tagline: 'High-Integrity Civil Works & Commercial Asset Creation',
    category: 'Infrastructure & Real Estate',
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
    keyMetrics: [
      { label: 'Delivery Standard', value: 'Turnkey Civil & EPC' },
      { label: 'Asset Classes', value: 'Corridors, Logistics & Hubs' },
      { label: 'Governance', value: 'Milestone & Quality Audited' },
    ],
    executionFramework: [
      {
        step: '01',
        title: 'Master Planning & Surveying',
        detail: 'Geotechnical validation, structural blueprints, and statutory approval synchronization.',
      },
      {
        step: '02',
        title: 'Mobilization & Civil Execution',
        detail: 'Deploying heavy earthmoving fleets, batching supply chains, and certified engineering teams.',
      },
      {
        step: '03',
        title: 'Commissioning & Handover',
        detail: 'Rigorous structural load testing, compliance certification, and long-term asset readiness.',
      },
    ],
    targetPartners: ['EPC Contractors', 'Real Estate Consortiums', 'Public Infrastructure Authorities', 'Structural Engineering Firms'],
  },
  {
    id: 'international-trade',
    number: '03',
    title: 'INTERNATIONAL TRADE & IMPORT-EXPORT',
    tagline: 'Seamless Cross-Border Sourcing & Global Supply Corridors',
    category: 'Global Trade & Logistics',
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
    keyMetrics: [
      { label: 'Trade Reach', value: 'Multi-Continental Corridors' },
      { label: 'Compliance', value: '100% Customs & LC Verified' },
      { label: 'Logistics Mode', value: 'Maritime, Air & Inland Rail' },
    ],
    executionFramework: [
      {
        step: '01',
        title: 'Global Supplier Vetting',
        detail: 'Auditing international manufacturers, factory capacity, and export certifications.',
      },
      {
        step: '02',
        title: 'Trade Finance & Customs',
        detail: 'Structuring secure letters of credit, tariff classification, and port clearance protocols.',
      },
      {
        step: '03',
        title: 'Last-Mile Distribution',
        detail: 'Coordinating bonded warehousing and inland freight delivery to enterprise buyers.',
      },
    ],
    targetPartners: ['International Exporters', 'Commodity Trading Houses', 'Port Logistics Operators', 'Domestic Industrial Importers'],
  },
  {
    id: 'consumer-goods-commercial',
    number: '04',
    title: 'CONSUMER GOODS & COMMERCIAL BUSINESSES',
    tagline: 'High-Velocity Wholesale Networks & Commercial Merchandising',
    category: 'Commerce & Distribution',
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
    keyMetrics: [
      { label: 'Market Reach', value: 'Tier-1 to Tier-3 Hubs' },
      { label: 'Channel Type', value: 'B2B Wholesale & Retail' },
      { label: 'Inventory Flow', value: 'Automated Fulfillment' },
    ],
    executionFramework: [
      {
        step: '01',
        title: 'Brand & Product Onboarding',
        detail: 'Securing authentic OEM allocations and regional master distribution mandates.',
      },
      {
        step: '02',
        title: 'Dealer Network Activation',
        detail: 'Deploying structured credit terms, regional warehousing, and partner onboarding.',
      },
      {
        step: '03',
        title: 'Velocity & After-Sales Support',
        detail: 'Tracking real-time sell-through metrics and streamlined warranty logistics.',
      },
    ],
    targetPartners: ['Consumer Electronics Brands', 'Regional Master Distributors', 'Retail Chains', 'Institutional Buyers'],
  },
  {
    id: 'technology-digital',
    number: '05',
    title: 'TECHNOLOGY & DIGITAL BUSINESSES',
    tagline: 'Enterprise Digital Architecture & Industrial Automation',
    category: 'Technology & Innovation',
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
    keyMetrics: [
      { label: 'Architecture', value: 'Cloud-Native & IoT Ready' },
      { label: 'Security', value: 'Enterprise-Grade Governance' },
      { label: 'Integration', value: 'ERP & Telemetry APIs' },
    ],
    executionFramework: [
      {
        step: '01',
        title: 'Operational Diagnostics',
        detail: 'Mapping legacy bottlenecks and designing high-ROI digital transformation blueprints.',
      },
      {
        step: '02',
        title: 'Platform & Telemetry Build',
        detail: 'Deploying scalable software modules, cloud infrastructure, and real-time sensor dashboards.',
      },
      {
        step: '03',
        title: 'Enterprise Rollout & Scaling',
        detail: 'Team enablement, continuous SLA monitoring, and iterative capability expansion.',
      },
    ],
    targetPartners: ['SaaS & Enterprise Tech Firms', 'Industrial IoT Providers', 'Fintech Platforms', 'Digital Transformation Teams'],
  },
  {
    id: 'mining-natural-resources',
    number: '06',
    title: 'MINING & NATURAL RESOURCES',
    tagline: 'Responsible Mineral Sourcing & Industrial Feedstock Supply',
    category: 'Resources & Materials',
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
    keyMetrics: [
      { label: 'Core Commodities', value: 'Steel, Salt, Lime & Aggregates' },
      { label: 'Supply Format', value: 'Bulk Rail & Fleet Logistics' },
      { label: 'Compliance', value: 'ISO & Environmental Certified' },
    ],
    executionFramework: [
      {
        step: '01',
        title: 'Geological & Grade Verification',
        detail: 'Assaying mineral purity, moisture specs, and quarry reserve sustainability.',
      },
      {
        step: '02',
        title: 'Processing & Beneficiation',
        detail: 'Crushing, screening, and chemical grading tailored to metallurgical tolerances.',
      },
      {
        step: '03',
        title: 'Contractual Bulk Dispatch',
        detail: 'Uninterrupted scheduled deliveries to steel plants, chemical units, and infra sites.',
      },
    ],
    targetPartners: ['Steel & Alloy Producers', 'Chemical Manufacturers', 'Quarry & Mine Operators', 'Bulk Infrastructure Contractors'],
  },
  {
    id: 'energy-sustainable-solutions',
    number: '07',
    title: 'ENERGY & SUSTAINABLE SOLUTIONS',
    tagline: 'Commercial Clean Power & Industrial Decarbonization',
    category: 'Clean Energy & Sustainability',
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
    keyMetrics: [
      { label: 'Primary Focus', value: 'Captive Solar & Microgrids' },
      { label: 'Contract Model', value: 'CAPEX / OPEX PPA Structures' },
      { label: 'Impact', value: 'Lower OpEx & Net-Zero Path' },
    ],
    executionFramework: [
      {
        step: '01',
        title: 'Load Profiling & Irradiance Study',
        detail: 'Auditing facility energy consumption patterns and designing optimal generation capacity.',
      },
      {
        step: '02',
        title: 'Engineering & Grid Synchronization',
        detail: 'Installing Tier-1 PV modules, inverters, battery storage, and net-metering compliance.',
      },
      {
        step: '03',
        title: 'Performance Monitoring & O&M',
        detail: '24/7 generation telemetry ensuring guaranteed uptime and predictable tariff savings.',
      },
    ],
    targetPartners: ['Renewable IPPs', 'Industrial Energy Consumers', 'Solar EPC Specialists', 'Green Finance Institutions'],
  },
  {
    id: 'recycling-circular-economy',
    number: '08',
    title: 'RECYCLING & CIRCULAR ECONOMY',
    tagline: 'Zero-Waste Resource Recovery & Secondary Raw Materials',
    category: 'Clean Energy & Sustainability',
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
    keyMetrics: [
      { label: 'Recovery Streams', value: 'Metal, Polymer & E-Waste' },
      { label: 'Compliance', value: 'EPR & Pollution Board Ready' },
      { label: 'Value Output', value: 'High-Purity Secondary Feedstock' },
    ],
    executionFramework: [
      {
        step: '01',
        title: 'Waste Stream Mapping',
        detail: 'Auditing industrial scrap generation and structuring reverse-logistics collection.',
      },
      {
        step: '02',
        title: 'Automated Sorting & Recovery',
        detail: 'Deploying shredding, separation, and refining lines for high material purity.',
      },
      {
        step: '03',
        title: 'Closed-Loop Re-Integration',
        detail: 'Supplying certified recycled pellets, metals, and EPR credits back to manufacturers.',
      },
    ],
    targetPartners: ['Metallurgical Foundries', 'FMCG EPR Obligated Brands', 'Municipal Corporations', 'Recycling Tech OEMs'],
  },
  {
    id: 'consultancy-business-recovery',
    number: '09',
    title: 'CONSULTANCY & BUSINESS RECOVERY',
    tagline: 'Corporate Turnaround, Governance & Market Entry Strategy',
    category: 'Advisory & Governance',
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
    keyMetrics: [
      { label: 'Advisory Scope', value: 'Turnaround & Market Entry' },
      { label: 'Deliverable', value: 'Board-Ready Execution Roadmaps' },
      { label: 'Focus', value: 'EBITDA & Governance Recovery' },
    ],
    executionFramework: [
      {
        step: '01',
        title: 'Forensic & Operational Audit',
        detail: 'Pinpointing cash-flow leaks, structural inefficiencies, and regulatory exposure.',
      },
      {
        step: '02',
        title: 'Restructuring Blueprint',
        detail: 'Negotiating stakeholder alignment, debt-equity optimization, and cost rationalization.',
      },
      {
        step: '03',
        title: 'Guided Turnaround Execution',
        detail: 'Embedding interim governance controls and KPI tracking until profitability stabilizes.',
      },
    ],
    targetPartners: ['Stressed Industrial Enterprises', 'Foreign Market Entrants', 'Board of Directors', 'Asset Reconstruction Partners'],
  },
  {
    id: 'projects-services',
    number: '10',
    title: 'PROJECTS & SERVICES',
    tagline: 'Institutional Contracting, PMC & Turnkey Public-Private Delivery',
    category: 'Advisory & Governance',
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
    keyMetrics: [
      { label: 'Clientele', value: 'Government & Enterprise' },
      { label: 'Discipline', value: 'Turnkey PMC & Procurement' },
      { label: 'Assurance', value: 'Zero-Deviation Audit Trail' },
    ],
    executionFramework: [
      {
        step: '01',
        title: 'Tender & Bid Engineering',
        detail: 'Technical qualification, consortium structuring, and precision cost-estimation modeling.',
      },
      {
        step: '02',
        title: 'Vendor & Resource Mobilization',
        detail: 'Pre-vetting tier-1 subcontractors and locking SLA-backed supply schedules.',
      },
      {
        step: '03',
        title: 'PMC Supervision & Billing',
        detail: 'End-to-end milestone certification, quality inspection, and statutory documentation.',
      },
    ],
    targetPartners: ['Government Departments', 'PSU Authorities', 'Large Private Enterprises', 'Technical Consortium Partners'],
  },
  {
    id: 'strategic-investment-jv',
    number: '11',
    title: 'STRATEGIC INVESTMENT & JOINT VENTURES',
    tagline: 'Syndicated Capital, Equity Alliances & Long-Term Asset Growth',
    category: 'Capital & Alliances',
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
    keyMetrics: [
      { label: 'Deal Structures', value: 'Equity JV, SPV & Syndication' },
      { label: 'Asset Horizon', value: 'Medium to Long-Term Growth' },
      { label: 'Protection', value: 'Ring-Fenced Governance' },
    ],
    executionFramework: [
      {
        step: '01',
        title: 'Origination & Due Diligence',
        detail: 'Screening high-conviction industrial & infra opportunities with validated unit economics.',
      },
      {
        step: '02',
        title: 'SPV & Legal Structuring',
        detail: 'Crafting balanced shareholder agreements, risk waterfalls, and exit horizons.',
      },
      {
        step: '03',
        title: 'Capital Deployment & Scaling',
        detail: 'Active board governance and operational synergy capture across the JV lifecycle.',
      },
    ],
    targetPartners: ['Family Offices', 'Private Equity Funds', 'Cross-Border Strategic Investors', 'Industrial Promoter Groups'],
  },
];

export function getSectorBySlug(slug: string): SectorItem | undefined {
  return BUSINESS_SECTORS.find((sector) => sector.id === slug);
}
