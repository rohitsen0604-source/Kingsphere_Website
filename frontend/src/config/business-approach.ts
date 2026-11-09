export interface ApproachStep {
  step: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  keyAction: string;
  deliverable: string;
}

export const BUSINESS_APPROACH_STEPS: ApproachStep[] = [
  {
    step: '01',
    number: '01',
    title: 'IDENTIFY OPPORTUNITIES',
    tagline: 'We identify opportunities and build strong partnerships.',
    description:
      'Rigorous market scouting, macro-economic assessment, and regional demand analysis to pinpoint high-potential business opportunities across core industries and infrastructure corridors.',
    keyAction: 'In-depth market research, regional demand mapping, and partner alignment.',
    deliverable: 'Strategic Opportunity Brief & Feasibility Validation',
  },
  {
    step: '02',
    number: '02',
    title: 'STRATEGY',
    tagline: 'We plan with clarity and market-focused strategies.',
    description:
      'Structuring disciplined, data-driven operational blueprints, risk mitigation frameworks, and long-range roadmap planning customized to current regulatory and industry dynamics.',
    keyAction: 'Financial modeling, regulatory compliance structuring, and risk mitigation.',
    deliverable: 'Comprehensive Strategic Execution Plan',
  },
  {
    step: '03',
    number: '03',
    title: 'PARTNERSHIP',
    tagline: 'We collaborate for mutual growth and long-term success.',
    description:
      'Engaging strategic co-investors, technical leaders, supply chain champions, and institutional stakeholders to formulate collaborative frameworks founded on mutual trust and shared objectives.',
    keyAction: 'Consortium assembly, joint venture agreements, and stakeholder governance.',
    deliverable: 'Bilateral Partnership Charters & Commercial Contracts',
  },
  {
    step: '04',
    number: '04',
    title: 'INVESTMENT',
    tagline: 'We create value through sustainable investments.',
    description:
      'Deploying structured capital, modern equipment, and dedicated operational resources with stringent fiduciary responsibility to build resilient commercial and industrial assets.',
    keyAction: 'Capital allocation, asset acquisition, and resource deployment.',
    deliverable: 'Secured Capital & Resource Infrastructure',
  },
  {
    step: '05',
    number: '05',
    title: 'EXECUTION',
    tagline: 'We deliver projects with quality and precision.',
    description:
      'Mobilizing on-ground teams, adhering to strict engineering timelines, managing quality assurance protocols, and delivering operational milestones with precision.',
    keyAction: 'Turnkey project management, procurement monitoring, and site execution.',
    deliverable: 'Operational Commercial Asset / Commissioned Project',
  },
  {
    step: '06',
    number: '06',
    title: 'GROWTH',
    tagline: 'We grow together for a better future.',
    description:
      'Continuously optimizing throughput, exploring scalable market expansions, reinvesting into technological upgrades, and fostering long-term sustainable returns for all partners.',
    keyAction: 'Performance analytics, market expansion, and ongoing technological modernization.',
    deliverable: 'Sustainable Scale & Multi-Year Value Creation',
  },
];

export const APPROACH_PILLARS = [
  {
    title: 'Our Business Philosophy',
    content:
      'We operate on the principle that enduring enterprises are constructed through patient capital, authentic stakeholder relationships, and unyielding execution standards. We do not chase speculative trends; we build foundational assets.',
  },
  {
    title: 'Strategic Planning Rigor',
    content:
      'Every venture begins with deep-dive technical and regulatory feasibility studies. We evaluate downstream supply chains, environmental compliance, and long-term market absorption before committing capital.',
  },
  {
    title: 'Partnership Methodology',
    content:
      'We treat partnerships as co-ownership journeys. By matching our localized knowledge and operational agility with our partners’ technical specialties or capital strength, we build enduring market leadership.',
  },
  {
    title: 'Investment Stewardship',
    content:
      'Capital allocation is guided by long-term asset value, environmental sustainability, and downside protection. Every rupee or foreign capital currency deployed is backed by disciplined governance.',
  },
  {
    title: 'Execution Capabilities',
    content:
      'From regulatory clearances and contractor coordination to procurement logistics and physical site delivery, our team combines hands-on engineering diligence with modern management methodologies.',
  },
  {
    title: 'Long-Term Growth',
    content:
      'Growth is measured not just in balance sheet expansion, but in durable community value, environmental stewardship, job creation, and sustainable trade corridors that withstand shifting global tides.',
  },
];

