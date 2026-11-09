import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { COMPANY_CONFIG } from '@/config/company';
import { CORE_VALUES } from '@/config/values';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
import { PageHero } from '@/components/layout/PageHero';
import { GsapReveal } from '@/components/animations/GsapReveal';
import {
  ShieldCheck,
  Award,
  Lightbulb,
  Handshake,
  Leaf,
  Target,
  Building2,
  Globe2,
  TrendingUp,
  MapPin,
  ArrowUpRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | KINGSPHERE Corporate Profile',
  description:
    'Learn about KINGSPHERE INFRA-TECH-TRADE (OPC) PRIVATE LIMITED, an international-standard diversified business group based in Parbhani, Maharashtra, India.',
};

const VALUE_ICONS: Record<string, React.ElementType> = {
  ShieldCheck,
  Award,
  Lightbulb,
  Handshake,
  Leaf,
  Target,
};

export default function AboutPage() {
  return (
    <div className="relative bg-[#080909] text-[#F3F0E9] min-h-screen">
      {/* ========================================================
          1. FULL-WIDTH LUXURY ABOUT HERO (with /images/hero/02-about-hero.png)
      ======================================================== */}
      <PageHero
        badge="CORPORATE PROFILE & ORIGINS"
        title="AN ENTERPRISE OF INTEGRITY,"
        highlightTitle="SCALE & STRATEGIC VISION."
        description="KINGSPHERE INFRA-TECH-TRADE (OPC) PRIVATE LIMITED is an international-standard diversified business group headquartered in Parbhani, Maharashtra, India — bridging infrastructure, technology, natural resources, and trade."
        imageSrc="/images/kingsphere/02-about-hero.png"
        imageAlt="KINGSPHERE Corporate Profile and Vision"
      >
        <div className="flex flex-wrap items-center justify-center gap-6 pt-3 text-xs text-[#E8D29A] font-sans">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-[1px] bg-[#101111]/80 border border-[rgba(201,163,79,0.25)]">
            <MapPin className="w-3.5 h-3.5 text-[#C9A34F]" />
            <span>Headquartered in Parbhani, Maharashtra, India</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-[1px] bg-[#101111]/80 border border-[rgba(201,163,79,0.25)]">
            <Building2 className="w-3.5 h-3.5 text-[#C9A34F]" />
            <span>OPC Private Limited Structure</span>
          </div>
        </div>
      </PageHero>

      {/* ========================================================
          2. WHO WE ARE & 3. COMPANY OVERVIEW
      ======================================================== */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#101111] border-b border-[rgba(201,163,79,0.2)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              badge="WHO WE ARE"
              title="A DIVERSIFIED"
              highlight="BUSINESS GROUP"
              align="left"
              className="mb-4"
            />
            <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#F3F0E9]">
              {COMPANY_CONFIG.name}
            </h3>
            <p className="text-xs sm:text-sm text-[#A5A39C] leading-relaxed font-sans">
              KINGSPHERE is an Indian corporation dedicated to unlocking enterprise potential. Situated in Maharashtra, we identify underserved industrial sectors, assemble capable operational consortia, and bridge domestic resources with international commerce.
            </p>
            <p className="text-xs sm:text-sm text-[#A5A39C] leading-relaxed font-sans">
              {COMPANY_CONFIG.positioning}
            </p>

            <div className="p-5 rounded-[1px] bg-[#171816] border border-[rgba(201,163,79,0.2)] flex items-start gap-4 font-sans">
              <div className="relative w-14 h-14 shrink-0 rounded-full overflow-hidden shadow-[0_0_12px_rgba(201,163,79,0.3)]">
                <Image
                  src="/images/kingsphere/kingsphere-crest-mark.png"
                  alt="KINGSPHERE Official 3D Crest"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <div className="space-y-1.5 flex-1">
                <span className="text-[10px] uppercase font-medium tracking-[0.2em] text-[#C9A34F] block">
                  Corporate Identity • {COMPANY_CONFIG.tagline}
                </span>
                <p className="text-xs text-[#F3F0E9] font-serif italic leading-relaxed">
                  &ldquo;To bridge infrastructure, technology, natural resources, and strategic investment into sustainable, multi-generational growth.&rdquo;
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-[1px] overflow-hidden border border-[rgba(201,163,79,0.24)] shadow-card-dark">
              <div className="relative h-88 sm:h-96 w-full">
                <Image
                  src="/images/kingsphere/05-projects-capabilities-hero.png"
                  alt="Industrial Infrastructure Development"
                  fill
                  className="object-cover filter brightness-[0.75]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101111] via-transparent to-transparent opacity-80" />
              </div>

              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-[1px] bg-[#080909]/90 border border-[rgba(201,163,79,0.2)] backdrop-blur-md">
                <div className="text-xs font-semibold text-[#E8D29A] font-sans">
                  Regional Strength • International Standards
                </div>
                <div className="text-[11px] text-[#A5A39C] mt-1 font-sans">
                  Integrating localized Indian execution agility with disciplined corporate governance.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. WHAT WE DO & 5. OUR BUSINESS FOCUS
      ======================================================== */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-b border-[rgba(201,163,79,0.2)]">
        <div className="max-w-7xl mx-auto space-y-12">
          <SectionHeading
            badge="WHAT WE DO"
            title="STRATEGIC SCOPE &"
            highlight="CORE ACTIVITIES"
            description="Our diversified operations span six principal domains of economic growth."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
            <GsapReveal animation="fade-up" delay={0} duration={0.8}>
              <GlassCard cornerAccents className="p-6 space-y-3 h-full">
                <div className="text-[10px] font-mono text-[#C9A34F] font-semibold">FOCUS 01</div>
                <h4 className="font-serif text-lg font-normal text-[#F3F0E9]">
                  Infrastructure & Civil Development
                </h4>
                <p className="text-xs text-[#A5A39C] leading-relaxed">
                  Coordinating civil infrastructure, arterial roadway connectivity, commercial development, and turnkey project execution across Maharashtra and neighbouring regions.
                </p>
              </GlassCard>
            </GsapReveal>

            <GsapReveal animation="fade-up" delay={0.1} duration={0.8}>
              <GlassCard cornerAccents className="p-6 space-y-3 h-full">
                <div className="text-[10px] font-mono text-[#C9A34F] font-semibold">FOCUS 02</div>
                <h4 className="font-serif text-lg font-normal text-[#F3F0E9]">
                  Manufacturing & Supply Chains
                </h4>
                <p className="text-xs text-[#A5A39C] leading-relaxed">
                  Facilitating industrial production partnerships, component fabrication, equipment tooling, and resilient supply chain integration for OEM manufacturers.
                </p>
              </GlassCard>
            </GsapReveal>

            <GsapReveal animation="fade-up" delay={0.2} duration={0.8}>
              <GlassCard cornerAccents className="p-6 space-y-3 h-full">
                <div className="text-[10px] font-mono text-[#C9A34F] font-semibold">FOCUS 03</div>
                <h4 className="font-serif text-lg font-normal text-[#F3F0E9]">
                  International Trade & Sourcing
                </h4>
                <p className="text-xs text-[#A5A39C] leading-relaxed">
                  Structuring cross-border sourcing, bilateral trade contracts, import-export compliance, multi-modal freight coordination, and global supplier qualification.
                </p>
              </GlassCard>
            </GsapReveal>

            <GsapReveal animation="fade-up" delay={0} duration={0.8}>
              <GlassCard cornerAccents className="p-6 space-y-3 h-full">
                <div className="text-[10px] font-mono text-[#C9A34F] font-semibold">FOCUS 04</div>
                <h4 className="font-serif text-lg font-normal text-[#F3F0E9]">
                  Mining & Natural Resources
                </h4>
                <p className="text-xs text-[#A5A39C] leading-relaxed">
                  Responsible extraction, crushing, sorting, and wholesale supply of essential minerals, industrial salt, limestone, and steel feedstocks.
                </p>
              </GlassCard>
            </GsapReveal>

            <GsapReveal animation="fade-up" delay={0.1} duration={0.8}>
              <GlassCard cornerAccents className="p-6 space-y-3 h-full">
                <div className="text-[10px] font-mono text-[#C9A34F] font-semibold">FOCUS 05</div>
                <h4 className="font-serif text-lg font-normal text-[#F3F0E9]">
                  Energy & Circular Economy
                </h4>
                <p className="text-xs text-[#A5A39C] leading-relaxed">
                  Developing captive commercial solar energy projects, industrial energy efficiency upgrades, secondary raw material recovery, and circular economy initiatives.
                </p>
              </GlassCard>
            </GsapReveal>

            <GsapReveal animation="fade-up" delay={0.2} duration={0.8}>
              <GlassCard cornerAccents className="p-6 space-y-3 h-full">
                <div className="text-[10px] font-mono text-[#C9A34F] font-semibold">FOCUS 06</div>
                <h4 className="font-serif text-lg font-normal text-[#F3F0E9]">
                  Consultancy & Strategic Alliances
                </h4>
                <p className="text-xs text-[#A5A39C] leading-relaxed">
                  Corporate governance advisory, distressed business recovery, market entry roadmaps, joint venture structuring, and public-private project facilitation.
                </p>
              </GlassCard>
            </GsapReveal>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. BUSINESS PHILOSOPHY & 7. OUR STRENGTHS
      ======================================================== */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#101111] border-b border-[rgba(201,163,79,0.2)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <SectionHeading
              badge="ETHOS & FOUNDATION"
              title="OUR BUSINESS"
              highlight="PHILOSOPHY"
              align="left"
              className="mb-4"
            />
            <p className="text-xs sm:text-sm text-[#A5A39C] leading-relaxed font-sans">
              At KINGSPHERE, we reject short-term speculation in favor of enduring asset creation. Our philosophy rests on three non-negotiables:
            </p>

            <div className="space-y-3 font-sans">
              <div className="p-4 rounded-[1px] bg-[#171816] border border-[rgba(201,163,79,0.18)]">
                <h4 className="text-xs font-semibold text-[#F3F0E9]">1. Substance Over Speculation</h4>
                <p className="text-xs text-[#A5A39C] mt-1 leading-relaxed">
                  We invest time, management focus, and capital strictly in tangible productive enterprises—manufacturing, infrastructure, real trade, and essential resources.
                </p>
              </div>

              <div className="p-4 rounded-[1px] bg-[#171816] border border-[rgba(201,163,79,0.18)]">
                <h4 className="text-xs font-semibold text-[#F3F0E9]">2. Symmetric Stakeholder Value</h4>
                <p className="text-xs text-[#A5A39C] mt-1 leading-relaxed">
                  Every strategic partnership must create fair, measurable upside for both sides. Enduring collaborations cannot exist without mutual prosperity.
                </p>
              </div>

              <div className="p-4 rounded-[1px] bg-[#171816] border border-[rgba(201,163,79,0.18)]">
                <h4 className="text-xs font-semibold text-[#F3F0E9]">3. Integrity of Word</h4>
                <p className="text-xs text-[#A5A39C] mt-1 leading-relaxed">
                  Trust is our primary asset. We fulfill our contractual commitments with precision, compliance, and transparent communication.
                </p>
              </div>
            </div>
          </div>

          {/* Strengths Grid */}
          <div className="lg:col-span-6 space-y-3 font-sans">
            <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#F3F0E9] mb-5">
              Our Core Strategic Strengths
            </h3>

            <div className="p-4 rounded-[1px] bg-[#171816] border border-[rgba(201,163,79,0.18)] flex items-start gap-3">
              <Award className="w-4 h-4 text-[#C9A34F] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#E8D29A]">
                  Regional Sourcing Depth
                </h4>
                <p className="text-xs text-[#A5A39C] mt-1 leading-relaxed">
                  Intimate familiarity with Maharashtra’s land parcels, industrial corridors, supply ecosystems, and administrative requirements.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-[1px] bg-[#171816] border border-[rgba(201,163,79,0.18)] flex items-start gap-3">
              <Globe2 className="w-4 h-4 text-[#C9A34F] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#E8D29A]">
                  Cross-Industry Versatility
                </h4>
                <p className="text-xs text-[#A5A39C] mt-1 leading-relaxed">
                  Ability to connect disparate industrial sectors—linking mining off-take with manufacturing, or energy efficiency with real estate development.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-[1px] bg-[#171816] border border-[rgba(201,163,79,0.18)] flex items-start gap-3">
              <TrendingUp className="w-4 h-4 text-[#C9A34F] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#E8D29A]">
                  Flexible Partnership Structures
                </h4>
                <p className="text-xs text-[#A5A39C] mt-1 leading-relaxed">
                  Agile joint ventures, project consortia, SPVs, or contract delivery models configured to match investor and corporate needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          8. CORE VALUES PREVIEW & 9. CTA
      ======================================================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10 space-y-6">
          <span className="text-[10px] font-sans font-medium uppercase tracking-[0.25em] text-[#C9A34F]">
            PARTNER IN SCALE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#F3F0E9]">
            DISCOVER HOW KINGSPHERE CAN ACCELERATE YOUR ENTERPRISE.
          </h2>
          <p className="text-xs sm:text-sm text-[#A5A39C] leading-relaxed font-sans max-w-xl mx-auto">
            Whether you are an international investor seeking grounded Indian opportunities or a manufacturer seeking supply resilience, we welcome direct dialogue.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-3 w-full sm:w-auto max-w-md mx-auto">
            <Button href="/partnerships" variant="primary" size="lg" withArrow className="w-full sm:w-auto text-center justify-center">
              EXPLORE PARTNERSHIPS
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="w-full sm:w-auto text-center justify-center">
              CONTACT OUR OFFICE
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
