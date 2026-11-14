export interface SectorMetric {
  label: string;
  value: string;
}

export interface SectorExecutionStep {
  step: string;
  title: string;
  detail: string;
}

export interface SectorBrand {
  name: string;
  category: string;
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
  brands?: SectorBrand[];
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
      'Industrial manufacturing, machinery and equipment, engineering products, processing units, contract manufacturing, production facilities and industrial development.',
    fullDescription:
      'Driving value through modern manufacturing infrastructure, strategic industrial development, localized and regional production facilities, and resilient component supply chains. We partner with industrial leaders to enhance manufacturing capabilities and market footprint.',
    iconName: 'Factory',
    image: '/images/sectors/sector-01-manufacturing.jpg',
    capabilities: [
      'Industrial manufacturing and specialized processing units',
      'Machinery and equipment fabrication and supply',
      'Engineering products and precision components',
      'Contract manufacturing and modern production facilities',
      'Industrial infrastructure and cluster development',
    ],
    opportunities: [
      'Joint ventures in precision engineering and equipment fabrication',
      'Industrial park and cluster development partnerships',
      'Supply chain optimization for specialized industrial components',
      'Contract manufacturing alliances for domestic and export markets',
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
      'Roads, highways, bridges, dams, river projects, residential and commercial real estate, land development, industrial infrastructure and civil construction.',
    fullDescription:
      'Catalyzing regional and national growth through essential infrastructure, civil works, commercial and industrial real estate development, and end-to-end project execution with engineering rigor.',
    iconName: 'Building2',
    image: '/images/sectors/sector-02-infrastructure.jpg',
    capabilities: [
      'Roads, arterial highways, and precision bridge construction',
      'Dams, river projects, and major civil water infrastructure',
      'Residential and commercial real estate development',
      'Industrial infrastructure, land development, and civil construction',
    ],
    opportunities: [
      'Highway and urban transport corridor infrastructure',
      'Commercial hub and industrial warehousing facilities',
      'Public-private partnership (PPP) civic developments',
      'Turnkey civil engineering subcontracting and site delivery',
    ],
    strategicFocus: 'Durable civic connectivity, water management, industrial estates, and engineering excellence.',
    keyMetrics: [
      { label: 'Asset Life', value: 'Multi-Decade Durability' },
      { label: 'Standards', value: 'National Highway & EPC Code' },
      { label: 'Project Delivery', value: 'Turnkey EPC / BOT / HAM' },
    ],
    executionFramework: [
      {
        step: '01',
        title: 'Master Planning & Surveying',
        detail: 'Topographical analysis, statutory clearances, environmental audits, and engineering blue-printing.',
      },
      {
        step: '02',
        title: 'Mobilization & Civil Execution',
        detail: 'Deploying heavy civil fleet, certified structural materials, and milestone-based timeline management.',
      },
      {
        step: '03',
        title: 'Commissioning & Handover',
        detail: 'Independent quality checks, structural load testing, and systematic operational asset commissioning.',
      },
    ],
    targetPartners: ['EPC Contractors', 'Municipal Bodies', 'Commercial Real Estate Investors', 'Heavy Fleet Operators'],
  },
  {
    id: 'international-trade',
    number: '03',
    title: 'INTERNATIONAL TRADE & IMPORT-EXPORT',
    tagline: 'Reliable Global Sourcing & Cross-Border Supply Corridors',
    category: 'Global Trade & Logistics',
    shortDescription:
      'Import-export, international sourcing, global trading, logistics, transportation, freight management, warehousing, supply chain management and global distribution.',
    fullDescription:
      'Structuring seamless trade channels between international markets and Indian commercial hubs. We manage multi-modal logistics, trade compliance, customs facilitation, and end-to-end supply chain orchestration.',
    iconName: 'Ship',
    image: '/images/sectors/sector-03-international-trade.jpg',
    capabilities: [
      'Cross-border digital sourcing and supplier qualification',
      'Import-export compliance, trade finance, and customs facilitation',
      'Freight forwarding, multi-modal transport, and logistics management',
      'Warehousing, supply chain management, and global distribution',
    ],
    opportunities: [
      'Bilateral trade corridors between India and key international markets',
      'Bulk material and machinery import consignment partnerships',
      'Bonded warehousing and consolidated distribution hubs',
    ],
    strategicFocus: 'Compliance transparency, resilient freight corridors, and verified international supplier networks.',
    keyMetrics: [
      { label: 'Trade Routes', value: 'Multi-Modal Corridors' },
      { label: 'Compliance', value: '100% Statutory Customs Clear' },
      { label: 'Transit Hubs', value: 'Port-to-Inland Integration' },
    ],
    executionFramework: [
      {
        step: '01',
        title: 'Global Supplier Vetting',
        detail: 'Authenticating manufacturing credentials, production capacity, quality certificates, and trade terms.',
      },
      {
        step: '02',
        title: 'Trade Finance & Customs',
        detail: 'Structuring documentary letters of credit, customs clearance filings, and insurance coverage.',
      },
      {
        step: '03',
        title: 'Last-Mile Distribution',
        detail: 'Coordinating multi-modal freight from marine ports directly to regional industrial warehouses.',
      },
    ],
    targetPartners: ['International Exporters', 'Shipping Lines', 'Trade Finance Institutions', 'Domestic Distributors'],
  },
  {
    id: 'consumer-goods-commercial',
    number: '04',
    title: 'CONSUMER GOODS & COMMERCIAL BUSINESSES',
    tagline: 'High-Velocity Wholesale Networks & Leading Consumer Brands',
    category: 'Commerce & Distribution',
    shortDescription:
      'FMCG, packaged drinking water, perfumes, personal care, automobiles, cars, bikes, trucks, automotive products, wholesale, retail and distribution.',
    fullDescription:
      'Developing competitive consumer brands, FMCG products, personal care, and automotive distribution networks. Backed by proprietary brand portfolios and organized retail/wholesale channels across regional and national markets.',
    iconName: 'ShoppingBag',
    image: '/images/sectors/sector-04-consumer-goods.jpg',
    brands: [
      { name: 'ALBINE AQUA™', category: 'Water & Beverage Products' },
      { name: 'ELBRUS™', category: 'Perfumes & Personal Care Products' },
    ],
    capabilities: [
      'Proprietary FMCG brand development and packaged drinking water production',
      'Perfumes, personal care, and lifestyle consumer merchandise',
      'Automotive dealership, cars, bikes, trucks, and automotive products distribution',
      'High-volume wholesale, retail networks, and regional inventory logistics',
    ],
    opportunities: [
      'Distributorship and super-stockist networks for ALBINE AQUA™ and ELBRUS™',
      'Automotive commercial retail expansion and fleet supply contracts',
      'Institutional bulk supply contracts for FMCG and beverage products',
    ],
    strategicFocus: 'Brand equity, consumer trust, authentic sourcing, and extensive Tier-1 to Tier-3 penetration.',
    keyMetrics: [
      { label: 'Featured Brands', value: 'ALBINE AQUA™ & ELBRUS™' },
      { label: 'Channel Type', value: 'B2B Wholesale & Retail' },
      { label: 'Category Span', value: 'FMCG, Personal Care & Automotive' },
    ],
    executionFramework: [
      {
        step: '01',
        title: 'Brand & Product Formulation',
        detail: 'Precision manufacturing, certified packaging standards, and brand positioning for high market impact.',
      },
      {
        step: '02',
        title: 'Dealer Network Activation',
        detail: 'Deploying structured regional distributorships, super-stockists, and point-of-sale supply lines.',
      },
      {
        step: '03',
        title: 'Velocity & Channel Scaling',
        detail: 'Real-time sales tracking, consumer feedback integration, and continuous multi-city channel expansion.',
      },
    ],
    targetPartners: ['Regional Super Stockists', 'Retail Chains', 'Automotive Fleet Buyers', 'Institutional Hospitality'],
  },
  {
    id: 'technology-digital',
    number: '05',
    title: 'TECHNOLOGY & DIGITAL BUSINESSES',
    tagline: 'Mobile Applications, B2B Platforms & AI-Driven Digital Solutions',
    category: 'Technology & Innovation',
    shortDescription:
      'Mobile applications, websites, B2B and B2C marketplaces, SaaS platforms, artificial intelligence, automation, digital solutions, startup development and technology innovation.',
    fullDescription:
      'Pioneering modern digital solutions, enterprise platforms, and artificial intelligence integration. We build and invest in high-growth digital businesses, marketplaces, and automation frameworks that modernize industrial commerce.',
    iconName: 'Cpu',
    image: '/images/sectors/sector-05-technology-digital.jpg',
    capabilities: [
      'Custom mobile applications, web platforms, and responsive digital ecosystems',
      'B2B and B2C digital marketplaces and high-throughput SaaS platforms',
      'Artificial intelligence, operational automation, and predictive data systems',
      'Startup incubation, digital venture scaling, and technology commercialization',
    ],
    opportunities: [
      'SaaS partnerships for industrial and supply-chain digital tracking',
      'B2B marketplace joint ventures in regional agricultural and industrial trades',
      'AI and workflow automation deployments for enterprise productivity',
    ],
    strategicFocus: 'Scalable cloud architecture, intuitive UX, robust data security, and enterprise efficiency.',
    keyMetrics: [
      { label: 'Platform Scope', value: 'B2B & B2C Marketplaces' },
      { label: 'Tech Stack', value: 'Next-Gen Cloud & AI Automation' },
      { label: 'Deployment', value: 'Enterprise & Consumer Scale' },
    ],
    executionFramework: [
      {
        step: '01',
        title: 'Product Discovery & Architecture',
        detail: 'Analyzing user journeys, system throughput requirements, and cloud infrastructure architecture.',
      },
      {
        step: '02',
        title: 'Agile Build & AI Integration',
        detail: 'Iterative development, API-first integrations, automated testing, and secure data storage.',
      },
      {
        step: '03',
        title: 'Market Rollout & Growth',
        detail: 'Performance telemetry, user acquisition loops, continuous feature enhancements, and scaled hosting.',
      },
    ],
    targetPartners: ['Tech Startups', 'Enterprise Software Providers', 'Digital Transformation Leaders', 'Venture Capitalists'],
  },
  {
    id: 'mining-natural-resources',
    number: '06',
    title: 'MINING & NATURAL RESOURCES',
    tagline: 'Responsible Extraction, Mineral Processing & Industrial Supply',
    category: 'Natural Resources',
    shortDescription:
      'Mining, quarry operations, stone crusher plants, sand, soil, aggregates, minerals, limestone, mineral processing, natural resources and mining contracts.',
    fullDescription:
      'Managing responsible extraction, quarrying, stone crushing, and mineral processing operations. Supplying verified limestone, aggregates, sand, and essential natural resources to India’s infrastructure and construction sectors.',
    iconName: 'Gem',
    image: '/images/sectors/sector-06-mining.jpg',
    capabilities: [
      'Quarry operations and high-capacity stone crusher plants',
      'Sand, soil, crushed stone aggregates, and building material extraction',
      'Limestone, mineral processing, and industrial raw feedstocks',
      'Statutory compliant long-term mining contracts and site reclamation',
    ],
    opportunities: [
      'Bulk aggregate supply contracts for national highway and rail corridors',
      'Industrial limestone and mineral off-take joint ventures',
      'Automated aggregate crushing plant development partnerships',
    ],
    strategicFocus: 'Statutory compliance, environmental restoration, worker safety, and consistent bulk supply.',
    keyMetrics: [
      { label: 'Processing', value: 'Automated Crusher Plants' },
      { label: 'Compliance', value: '100% Mining & Forest Dept Cleared' },
      { label: 'Logistics', value: 'High-Volume Rail & Road Fleet' },
    ],
    executionFramework: [
      {
        step: '01',
        title: 'Geological & Grade Verification',
        detail: 'Conducting core drilling, laboratory mineral assay, reserve estimation, and statutory clearances.',
      },
      {
        step: '02',
        title: 'Crushing & Beneficiation',
        detail: 'Operating automated stone crushers and sorting plants to meet strict civil engineering grading standards.',
      },
      {
        step: '03',
        title: 'Contractual Bulk Dispatch',
        detail: 'Ensuring continuous fleet dispatch to highway projects, concrete batching plants, and industrial plants.',
      },
    ],
    targetPartners: ['Ready-Mix Concrete Producers', 'Highway EPC Builders', 'Industrial Cement Plants', 'Mining Equipment OEMs'],
  },
  {
    id: 'energy-sustainable-solutions',
    number: '07',
    title: 'ENERGY & SUSTAINABLE SOLUTIONS',
    tagline: 'Captive Solar, Renewable Infrastructure & Clean Power',
    category: 'Renewables & Power',
    shortDescription:
      'Solar power, renewable energy, energy infrastructure, power generation, energy conservation, sustainable energy projects and industrial energy solutions.',
    fullDescription:
      'Advancing India’s clean energy transition through solar installations, renewable energy infrastructure, energy conservation solutions, and dedicated industrial captive power projects.',
    iconName: 'Sun',
    image: '/images/sectors/sector-07-energy.jpg',
    capabilities: [
      'Commercial and industrial rooftop and ground-mount solar power systems',
      'Renewable energy infrastructure and power generation assets',
      'Industrial energy conservation, auditing, and efficiency upgrades',
      'Sustainable turnkey clean energy projects and power purchase agreements (PPAs)',
    ],
    opportunities: [
      'Captive solar power development for heavy industrial manufacturing units',
      'Independent power producer (IPP) joint ventures in high-insolation corridors',
      'Industrial energy efficiency and clean technology retrofit projects',
    ],
    strategicFocus: 'Levelized cost of energy reduction, grid stability, and verified carbon abatement.',
    keyMetrics: [
      { label: 'Energy Source', value: 'High-Efficiency Photovoltaic' },
      { label: 'Model', value: 'CAPEX & OPEX / PPA' },
      { label: 'Reliability', value: 'Tier-1 Inverters & Tier-1 Panels' },
    ],
    executionFramework: [
      {
        step: '01',
        title: 'Irradiance & Load Analysis',
        detail: 'Evaluating historical solar irradiance, factory load curves, and electrical substation connectivity.',
      },
      {
        step: '02',
        title: 'Engineering & Grid Sync',
        detail: 'Structural engineering, Tier-1 panel installation, net-metering approvals, and grid synchronization.',
      },
      {
        step: '03',
        title: 'Performance Monitoring & O&M',
        detail: 'Automated telemetry monitoring, regular robotic cleaning, and guaranteed generation performance.',
      },
    ],
    targetPartners: ['Solar EPC Specialists', 'Industrial Plant Operators', 'Green Energy Investors', 'DISCOM Authorities'],
  },
  {
    id: 'recycling-circular-economy',
    number: '08',
    title: 'RECYCLING & CIRCULAR ECONOMY',
    tagline: 'Plastic, Metal, E-Waste & Resource Recovery Facilities',
    category: 'Circular Economy',
    shortDescription:
      'Plastic recycling, metal scrap, e-waste, battery recycling, construction and demolition waste management, waste processing, resource recovery and waste-to-energy projects.',
    fullDescription:
      'Transforming waste into valuable industrial feedstocks through state-of-the-art recycling facilities, closed-loop processing, and circular economy resource recovery initiatives.',
    iconName: 'Recycle',
    image: '/images/sectors/sector-08-recycling.jpg',
    capabilities: [
      'Plastic recycling and polymer pelletizing facilities',
      'Ferrous and non-ferrous metal scrap processing and sorting',
      'E-waste and lithium-ion battery recycling and safe component recovery',
      'Construction and demolition waste management and waste-to-energy solutions',
    ],
    opportunities: [
      'Secondary raw material off-take partnerships with industrial manufacturers',
      'Municipal construction & demolition waste processing concessions',
      'E-waste compliance and Extended Producer Responsibility (EPR) programs',
    ],
    strategicFocus: 'Zero-landfill resource conversion, high-purity recycled output, and environmental compliance.',
    keyMetrics: [
      { label: 'Resource Streams', value: 'Plastic, Metal, E-Waste, C&D' },
      { label: 'Processing', value: 'Zero-Landfill Circular Tech' },
      { label: 'Certifications', value: 'Pollution Control Board Verified' },
    ],
    executionFramework: [
      {
        step: '01',
        title: 'Waste Stream Aggregation',
        detail: 'Establishing organized collection networks, industrial scrap agreements, and municipal sorting nodes.',
      },
      {
        step: '02',
        title: 'Automated Processing & Recovery',
        detail: 'Mechanical shredding, optical sorting, washing, smelting, and high-purity pelletizing/ingot production.',
      },
      {
        step: '03',
        title: 'Closed-Loop Industrial Off-Take',
        detail: 'Supplying recycled polymer granules and scrap metals directly into industrial production lines.',
      },
    ],
    targetPartners: ['Municipal Corporations', 'Automotive Recyclers', 'Industrial Packaging Fabricators', 'EPR Brand Partners'],
  },
  {
    id: 'consultancy-business-recovery',
    number: '09',
    title: 'CONSULTANCY & BUSINESS RECOVERY',
    tagline: 'Strategic Feasibility, Restructuring & Enterprise Turnarounds',
    category: 'Advisory & Strategy',
    shortDescription:
      'Business consultancy, project feasibility studies, market research, corporate strategy, business restructuring, operational improvement and business recovery solutions.',
    fullDescription:
      'Empowering enterprises through comprehensive business consultancy, forensic feasibility studies, corporate strategy, operational improvement, and structured business recovery solutions for distressed assets.',
    iconName: 'Compass',
    image: '/images/sectors/sector-09-consultancy.jpg',
    capabilities: [
      'Comprehensive project feasibility studies and detailed project reports (DPRs)',
      'Market research, competitive intelligence, and corporate strategy',
      'Business restructuring, operational turnaround, and debt realignment',
      'Operational excellence, lean management, and business recovery solutions',
    ],
    opportunities: [
      'Revival mandates for distressed manufacturing and industrial units',
      'Strategic advisory for international enterprises entering Indian markets',
      'Capital syndication and turnaround partnerships for stressed assets',
    ],
    strategicFocus: 'Analytical depth, actionable operational roadmaps, and stakeholder consensus building.',
    keyMetrics: [
      { label: 'Advisory Scope', value: 'Strategy & Turnaround' },
      { label: 'Core Expertise', value: 'Feasibility & Restructuring' },
      { label: 'Engagement', value: 'Milestone & Success-Driven' },
    ],
    executionFramework: [
      {
        step: '01',
        title: 'Diagnostic & Operational Audit',
        detail: 'Deep-dive review of financial health, operational bottlenecks, supply chains, and market positioning.',
      },
      {
        step: '02',
        title: 'Restructuring Blueprint',
        detail: 'Formulating pragmatic operational restructuring, capital infusion plans, and commercial growth strategies.',
      },
      {
        step: '03',
        title: 'Turnaround Execution',
        detail: 'Direct hands-on steering with management to restore profitability, solvency, and investor confidence.',
      },
    ],
    targetPartners: ['Financial Institutions', 'Promoter Groups', 'Insolvency Professionals', 'Corporate Enterprises'],
  },
  {
    id: 'projects-services',
    number: '10',
    title: 'PROJECTS & SERVICES',
    tagline: 'PROJECTS & CONTRACT EXECUTION: Turnkey EPC & Project Management',
    category: 'Project Execution',
    shortDescription:
      'Government tenders, private contracts, infrastructure projects, engineering services, machinery and equipment supply, equipment rental, procurement, logistics support, project management and turnkey execution.',
    fullDescription:
      'Executing high-stakes government tenders, private contracts, and complex engineering projects. Providing equipment rental, procurement, logistics support, project management consultancy (PMC), and turnkey contract delivery.',
    iconName: 'Briefcase',
    image: '/images/sectors/sector-10-projects.jpg',
    capabilities: [
      'Government tender participation and private contract execution',
      'Infrastructure projects and specialized engineering services',
      'Machinery and equipment supply and heavy equipment rental fleets',
      'Procurement, logistics support, project management, and turnkey execution',
    ],
    opportunities: [
      'Consortium bidding for large-scale municipal and central government tenders',
      'Equipment leasing and fleet deployment for major infrastructure corridors',
      'Comprehensive PMC and turnkey engineering delivery partnerships',
    ],
    strategicFocus: 'Disciplined project milestones, transparent billing, safety standards, and robust site execution.',
    keyMetrics: [
      { label: 'Execution Scope', value: 'Govt Tenders & Private Contracts' },
      { label: 'Fleet & Gear', value: 'Heavy Equipment Rental & PMC' },
      { label: 'Delivery Model', value: 'Turnkey Contract Execution' },
    ],
    executionFramework: [
      {
        step: '01',
        title: 'Tender & Technical Engineering',
        detail: 'Evaluating technical specifications, cost estimations, compliance filings, and bid consortium structures.',
      },
      {
        step: '02',
        title: 'Resource Mobilization',
        detail: 'Rapidly mobilizing heavy machinery fleets, certified site engineers, and raw material logistics.',
      },
      {
        step: '03',
        title: 'Turnkey PMC Delivery',
        detail: 'Active day-to-day project management, rigorous quality control, and timely milestone completion.',
      },
    ],
    targetPartners: ['Government Authorities', 'Lead EPC Contractors', 'Equipment Manufacturers', 'Specialized Subcontractors'],
  },
  {
    id: 'strategic-investment-jv',
    number: '11',
    title: 'STRATEGIC INVESTMENT & JOINT VENTURES',
    tagline: 'Equity Alliances, Project Funding & Collaborative Enterprise Growth',
    category: 'Investments & Alliances',
    shortDescription:
      'Strategic investments, equity partnerships, joint ventures, project funding, institutional alliances, manufacturing partnerships, technology collaborations and business development opportunities.',
    fullDescription:
      'Structuring transformative capital partnerships, joint ventures, and institutional alliances. We co-invest with ambitious entrepreneurs, manufacturing leaders, and international partners to unlock high-growth enterprise opportunities.',
    iconName: 'TrendingUp',
    image: '/images/sectors/sector-11-investment.jpg',
    capabilities: [
      'Strategic investments and equity partnership structuring',
      'Joint ventures, Special Purpose Vehicles (SPVs), and project funding',
      'Institutional alliances and manufacturing partnerships',
      'Technology collaborations and multi-sector business development opportunities',
    ],
    opportunities: [
      'Co-investment vehicles for high-growth Indian infrastructure and manufacturing assets',
      'Cross-border joint ventures bringing advanced technologies to Indian industries',
      'Growth capital deployment in sustainable energy and consumer brands',
    ],
    strategicFocus: 'Risk alignment, transparent governance, capital protection, and multi-generational upside.',
    keyMetrics: [
      { label: 'Vehicles', value: 'SPVs, JVs & Equity Co-Invest' },
      { label: 'Alliances', value: 'Institutional & Corporate' },
      { label: 'Growth Horizon', value: 'Long-Term Compounding' },
    ],
    executionFramework: [
      {
        step: '01',
        title: 'Origination & Due Diligence',
        detail: 'Scouting high-potential opportunities, statutory compliance audits, asset valuation, and risk assessment.',
      },
      {
        step: '02',
        title: 'Legal & SPV Structuring',
        detail: 'Drafting transparent shareholders agreements, risk-sharing mechanisms, and institutional governance terms.',
      },
      {
        step: '03',
        title: 'Capital Deployment & Value Creation',
        detail: 'Funding active operations, opening market corridors, providing strategic guidance, and scaling enterprise value.',
      },
    ],
    targetPartners: ['Private Equity Funds', 'Family Offices', 'Industrial Promoters', 'Global Joint Venture Allies'],
  },
];

export function getSectorBySlug(slug: string): SectorItem | undefined {
  return BUSINESS_SECTORS.find((s) => s.id === slug);
}

