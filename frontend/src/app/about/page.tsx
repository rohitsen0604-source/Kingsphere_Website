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
import { PhilosophyHoneycomb } from '@/components/about/PhilosophyHoneycomb';
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
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | KINGSPHERE – Our Values & Purpose',
  description:
    'Learn about KINGSPHERE INFRA-TECH-TRADE (OPC) PRIVATE LIMITED — Corporate Philosophy, Vision, Values, and Commitment.',
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
    <div className="relative bg-[#070B0E] text-white min-h-screen">
      {/* ========================================================
          1. FULL-WIDTH LUXURY ABOUT HERO
      ======================================================== */}
      <PageHero
        badge="KINGSPHERE – OUR VALUES & PURPOSE"
        title="CORPORATE PHILOSOPHY • VISION • VALUES"
        highlightTitle="CREATING TRUST • DELIVERING VALUE."
        description="KINGSPHERE INFRA-TECH-TRADE (OPC) PRIVATE LIMITED is a diversified business and development company connecting industries, investments, infrastructure, technology, and global trade opportunities."
        imageSrc="/images/kingsphere/02-about-hero.png"
        imageAlt="KINGSPHERE Corporate Values and Purpose"
      >
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-3 text-xs text-[#E8D29A] font-sans">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#070B0E]/80 border border-[#DDB763]/30 backdrop-blur-md">
            <MapPin className="w-3.5 h-3.5 text-[#DDB763]" />
            <span className="text-white">Headquartered in Parbhani, Maharashtra, India</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#070B0E]/80 border border-[#DDB763]/30 backdrop-blur-md">
            <Building2 className="w-3.5 h-3.5 text-[#DDB763]" />
            <span className="text-white">OPC Private Limited Structure</span>
          </div>
        </div>
      </PageHero>

      {/* ========================================================
          2. WHO WE ARE & COMPANY OVERVIEW
      ======================================================== */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#070B0E] border-b border-[rgba(221,183,99,0.2)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              badge="11 BUSINESS VERTICALS. ONE DIVERSIFIED BUSINESS GROUP."
              title="A DIVERSIFIED BUSINESS."
              highlight="A CONNECTED FUTURE."
              align="left"
              className="mb-4"
            />
            <h3 className="font-sans text-xl sm:text-2xl font-bold text-white tracking-tight">
              {COMPANY_CONFIG.name}
            </h3>
            <p className="text-xs sm:text-sm text-white leading-relaxed font-sans font-normal border-l-2 border-[#DDB763] pl-4">
              &ldquo;{COMPANY_CONFIG.fullOverview}&rdquo;
            </p>
            <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-sans font-normal">
              Bringing industries, experts, entrepreneurs, investors, and strategic partners together to develop businesses, create opportunities, and drive diversified growth across Maharashtra and India.
            </p>

            {/* Crest & Belief Card */}
            <div className="p-5 rounded-2xl bg-[#0B1317] border border-[rgba(221,183,99,0.25)] flex items-start gap-4 font-sans shadow-lg">
              <div className="relative w-14 h-14 shrink-0 rounded-full overflow-hidden shadow-[0_0_15px_rgba(221,183,99,0.3)]">
                <Image
                  src="/images/kingsphere/kingsphere-crest-mark.png"
                  alt="KINGSPHERE Official 3D Crest"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <div className="space-y-1.5 flex-1">
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#DDB763] block">
                  CORPORATE BELIEF • {COMPANY_CONFIG.tagline}
                </span>
                <p className="text-xs sm:text-sm text-white font-sans font-medium leading-relaxed">
                  BUILDING TRUST • CREATING OPPORTUNITIES • DELIVERING VALUE
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[rgba(221,183,99,0.25)] shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              <div className="relative h-88 sm:h-96 w-full">
                <Image
                  src="/images/kingsphere/05-projects-capabilities-hero.png"
                  alt="Industrial Infrastructure Development"
                  fill
                  className="object-cover filter brightness-[0.75]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070B0E] via-transparent to-transparent opacity-85" />
              </div>

              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#0B1317]/95 border border-[rgba(221,183,99,0.25)] backdrop-blur-md">
                <div className="text-xs font-bold text-[#F8E9C6] font-sans uppercase tracking-wider">
                  Regional Strength • International Standards
                </div>
                <div className="text-[11px] text-white mt-1 font-sans">
                  Integrating localized Indian execution agility with disciplined corporate governance and cross-sector capabilities.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. OUR BUSINESS PHILOSOPHY & HONEYCOMB (Screenshot 5 Honeycomb Grid)
      ======================================================== */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#0B1317] border-b border-[rgba(221,183,99,0.22)] relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-10">
          <SectionHeading
            badge="FOUNDATIONAL ETHOS & STRATEGIC STRENGTHS"
            title="OUR BUSINESS PHILOSOPHY &"
            highlight="CORE TENETS"
            description="At KINGSPHERE, we focus on building sustainable businesses, creating long-term value, and developing strategic partnerships that drive shared growth and lasting opportunities. Explore our core business principles below to learn more about our approach."
            align="center"
            className="mb-8"
          />

          {/* Featured Philosophy Quote Card */}
          <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl bg-[#070B0E] border-2 border-[#DDB763]/40 text-center shadow-[0_10px_35px_rgba(0,0,0,0.7)]">
            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-[#DDB763] block mb-2">
              OUR BUSINESS PHILOSOPHY
            </span>
            <p className="text-base sm:text-lg md:text-xl text-white font-sans font-medium leading-relaxed italic">
              &ldquo;At KINGSPHERE, we believe that building a successful business is not just about creating wealth; it is about creating trust, delivering value, embracing responsibility and building opportunities that contribute to a better future.&rdquo;
            </p>
          </div>

          <GsapReveal animation="fade-up" duration={0.85}>
            <PhilosophyHoneycomb />
          </GsapReveal>
        </div>
      </section>

      {/* ========================================================
          4. OUR FIVE CORE VALUES
      ======================================================== */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#070B0E] border-b border-[rgba(221,183,99,0.2)]">
        <div className="max-w-7xl mx-auto space-y-12">
          <SectionHeading
            badge="GUIDING PRINCIPLES"
            title="OUR FIVE"
            highlight="CORE VALUES"
            description="Our business philosophy is founded on strong principles of integrity, responsibility, excellence, innovation and collaboration. These values guide our decisions, shape our partnerships and define the way we conduct our business."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
            {CORE_VALUES.map((val, idx) => {
              const Icon = VALUE_ICONS[val.iconName] || ShieldCheck;
              return (
                <GsapReveal key={val.id} animation="fade-up" delay={idx * 0.1} duration={0.8}>
                  <GlassCard cornerAccents className="p-6 sm:p-8 space-y-3 flex flex-col justify-between h-full rounded-2xl">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-[#DDB763]">
                          VALUE {val.number}
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-[#DDB763]/10 border border-[#DDB763] flex items-center justify-center text-[#DDB763]">
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>

                      <h3 className="font-sans text-xl font-bold uppercase text-white tracking-tight">
                        {val.title}
                      </h3>

                      <div className="text-xs text-[#F8E9C6] font-sans font-medium">
                        • {val.tagline}
                      </div>

                      <p className="text-xs sm:text-sm text-white leading-relaxed font-normal">
                        {val.description}
                      </p>
                    </div>
                  </GlassCard>
                </GsapReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          5. OUR COMMITMENT & CORPORATE BELIEF
      ======================================================== */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#0B1317] border-b border-[rgba(221,183,99,0.2)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center font-sans">
          {/* Left: Our Commitment */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              badge="DEDICATION TO EXCELLENCE"
              title="OUR CORPORATE"
              highlight="COMMITMENT"
              align="left"
              className="mb-4"
            />
            <p className="text-xs sm:text-sm text-white leading-relaxed font-normal">
              At KINGSPHERE, our strategic actions are guided by clear, actionable responsibilities toward all stakeholders:
            </p>

            <div className="space-y-3 pt-2">
              {COMPANY_CONFIG.commitment.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-[#070B0E] border border-[rgba(221,183,99,0.2)]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#DDB763] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-white font-normal leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Our Corporate Belief */}
          <div className="lg:col-span-5">
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#0B1317] via-[#070B0E] to-[#0B1317] border-2 border-[#DDB763] shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(221,183,99,0.2)] text-center space-y-6">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-[#F8E9C6] via-[#DDB763] to-[#C9A34F] flex items-center justify-center text-black shadow-lg">
                <Sparkles className="w-7 h-7" />
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#DDB763] block">
                  OUR CORPORATE BELIEF
                </span>
                <h3 className="font-sans text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white leading-snug">
                  BUILDING TRUST.<br />
                  CREATING OPPORTUNITIES.<br />
                  DELIVERING VALUE.
                </h3>
              </div>

              <div className="py-4 border-y border-white/10">
                <div className="font-sans text-base font-bold text-[#F8E9C6]">
                  KINGSPHERE
                </div>
                <div className="text-xs text-white/80 uppercase tracking-widest mt-1">
                  Creating Trust • Delivering Value
                </div>
              </div>

              <Button href="/contact" variant="primary" size="md" withArrow className="w-full justify-center">
                INITIATE DIALOGUE
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. WHAT WE DO & 11 VERTICALS CALLOUT
      ======================================================== */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-b border-[rgba(221,183,99,0.2)]">
        <div className="max-w-7xl mx-auto space-y-12">
          <SectionHeading
            badge="11 BUSINESS VERTICALS. ONE VISION."
            title="DIVERSIFIED"
            highlight="BUSINESS OPERATIONS"
            description="KINGSPHERE is engaged in developing business opportunities across manufacturing, infrastructure, international trade, consumer products, technology, mining, energy, recycling, consultancy, projects, and strategic investments."
            align="center"
          />

          <div className="text-center">
            <Button href="/business-sectors" variant="secondary" size="lg" withArrow>
              EXPLORE ALL 11 BUSINESS VERTICALS & CAPABILITIES
            </Button>
          </div>
        </div>
      </section>

      {/* ========================================================
          7. FINAL CTA
      ======================================================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden bg-[#070B0E]">
        <div className="max-w-3xl mx-auto relative z-10 space-y-6">
          <span className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-[#DDB763]">
            PARTNER IN SCALE
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            DISCOVER HOW KINGSPHERE CAN ACCELERATE YOUR ENTERPRISE.
          </h2>
          <p className="text-xs sm:text-sm text-white leading-relaxed font-sans max-w-xl mx-auto font-normal">
            Whether you are an institutional investor seeking grounded Indian opportunities, an industrial leader, or a technology partner, we welcome direct dialogue.
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
