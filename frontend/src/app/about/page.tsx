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
  User,
  Quote,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | KINGSPHERE – Who We Are, Leadership & Values',
  description:
    'Learn about KINGSPHERE INFRA-TECH-TRADE PRIVATE LIMITED — Executive Leadership, Corporate Profile, Vision, Mission, and Core Philosophy.',
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
          2. WHO WE ARE (Exact Screenshot 2 Corporate Profile)
      ======================================================== */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#070B0E] border-b border-[rgba(221,183,99,0.2)]">
        <div className="max-w-6xl mx-auto">
          <GsapReveal animation="fade-up">
            <div className="rounded-3xl bg-[#0B1317] border-2 border-[#DDB763]/40 p-7 sm:p-10 md:p-12 shadow-[0_25px_70px_rgba(0,0,0,0.8)] relative overflow-hidden font-sans">
              {/* Subtle Ambient Radial Sheen */}
              <div className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#DDB763]/10 blur-[90px]" />

              {/* Eyebrow with Building Icon */}
              <div className="flex items-center gap-2.5 mb-3">
                <Building2 className="w-4 h-4 text-[#DDB763]" />
                <span className="text-[11px] font-sans font-bold tracking-[0.25em] uppercase text-[#DDB763]">
                  CORPORATE PROFILE
                </span>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-white tracking-tight mb-6">
                WHO WE ARE
              </h2>

              {/* Body Content from Screenshot 2 */}
              <div className="space-y-5 text-xs sm:text-sm md:text-[15px] text-white/95 leading-relaxed font-normal">
                <p>
                  <strong className="text-white font-bold">
                    KINGSPHERE INFRA-TECH-TRADE PRIVATE LIMITED
                  </strong>{' '}
                  is a diversified, multi-sector business and development company committed to establishing enterprises, developing projects and delivering innovative business solutions across a wide range of industries.
                </p>

                <p>
                  Our operations and business interests encompass manufacturing, infrastructure, township development, residential and commercial real estate, logistics, hospitality and hotel operations, national and international trade, consumer products, technology, mining, energy, recycling, healthcare, consultancy and strategic investments.
                </p>

                <p>
                  Driven by an entrepreneurial vision, we integrate business development, project planning, execution and strategic partnerships to transform opportunities into sustainable business ventures. Alongside establishing and expanding our own enterprises, we actively create business and investment opportunities for entrepreneurs, investors, industry partners and other stakeholders through promising projects, innovative business models and commercially viable initiatives.
                </p>

                <p className="border-l-2 border-[#DDB763] pl-4 py-1 text-white">
                  With Maharashtra as a key focus of our growth strategy, we aim to expand our business operations across India and explore opportunities in international markets. Our approach is guided by integrity, professional excellence, strategic collaboration, sustainable development and a commitment to long-term value creation.
                </p>
              </div>
            </div>
          </GsapReveal>
        </div>
      </section>

      {/* ========================================================
          3. EXECUTIVE LEADERSHIP (Exact Screenshot 1: Muntajib Khan)
      ======================================================== */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0B1317] border-b border-[rgba(221,183,99,0.2)]">
        <div className="max-w-6xl mx-auto space-y-10 font-sans">
          {/* Section Header */}
          <div className="text-center space-y-2">
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase text-[#DDB763] block">
              EXECUTIVE LEADERSHIP
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Muntajib Khan
            </h2>
            <p className="text-xs sm:text-sm font-medium text-[#F8E9C6] tracking-wide">
              Founder & Managing Director
            </p>
          </div>

          {/* Leadership Split Card (Matching Screenshot 1) */}
          <GsapReveal animation="fade-up" duration={0.85}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
              {/* Left Card: Dark Avatar Card */}
              <div className="lg:col-span-5 rounded-3xl bg-[#070B0E] border-2 border-[#DDB763]/40 p-8 sm:p-10 flex flex-col items-center justify-center text-center shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative group hover:border-[#DDB763] transition-colors">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#1C387A]/40 to-[#0B1317] border-2 border-[#DDB763] flex items-center justify-center text-[#DDB763] shadow-[0_0_30px_rgba(221,183,99,0.25)] mb-6 group-hover:scale-105 transition-transform">
                  <User className="w-12 h-12 text-[#DDB763]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-1">
                  Muntajib Khan
                </h3>
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] text-[#DDB763]">
                  FOUNDER & MANAGING DIRECTOR
                </span>
                <span className="text-xs text-white/60 mt-2">
                  KINGSPHERE INFRA-TECH-TRADE
                </span>
              </div>

              {/* Right Card: Bio Narrative & Quote */}
              <div className="lg:col-span-7 rounded-3xl bg-[#070B0E] border-2 border-[#DDB763]/40 p-7 sm:p-10 flex flex-col justify-center space-y-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                <p className="text-sm sm:text-base text-white/95 leading-relaxed font-normal">
                  <strong className="text-white font-bold">Muntajib Khan</strong> is the Founder & Managing Director of{' '}
                  <strong className="text-white font-bold">
                    KINGSPHERE INFRA-TECH-TRADE PRIVATE LIMITED
                  </strong>, guiding the group&apos;s multi-sector strategic expansion across infrastructure, international trade, consumer goods, healthcare, and technology.
                </p>

                {/* Highlight Quote with Left Accent Bar */}
                <div className="border-l-4 border-[#DDB763] pl-4 sm:pl-5 py-1">
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight italic">
                    &ldquo;Turning Opportunities into Lasting Value&rdquo;
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-3 text-xs text-white/70">
                  <span className="w-2 h-2 rounded-full bg-[#DDB763]" />
                  <span>Strategic Leadership • Multi-Sector Growth • India & Global Corridors</span>
                </div>
              </div>
            </div>
          </GsapReveal>
        </div>
      </section>

      {/* ========================================================
          4. CORPORATE VISION & MISSION (Integrated seamlessly)
      ======================================================== */}
      <section id="vision-mission" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#070B0E] border-b border-[rgba(221,183,99,0.2)]">
        <div className="max-w-6xl mx-auto space-y-12">
          <SectionHeading
            badge="STRATEGIC CHARTER & PURPOSE"
            title="OUR VISION &"
            highlight="MISSION MANDATE"
            description="11 BUSINESS VERTICALS. ONE VISION. CREATING TRUST • DELIVERING VALUE."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 font-sans">
            {/* Vision Panel */}
            <GsapReveal animation="fade-up" delay={0} duration={0.85}>
              <div className="relative h-full rounded-3xl bg-[#0B1317] border border-[rgba(221,183,99,0.3)] p-6 sm:p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col justify-between space-y-6 hover:border-[#DDB763] transition-colors">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#DDB763]">
                      CORPORATE VISION
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[#DDB763]/10 border border-[#DDB763] flex items-center justify-center text-[#DDB763]">
                      <Target className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Our Corporate Vision
                  </h3>

                  <blockquote className="p-4 sm:p-5 rounded-2xl bg-[#070B0E] border-l-2 border-[#DDB763] text-sm sm:text-base text-white leading-relaxed font-normal">
                    &ldquo;{COMPANY_CONFIG.vision}&rdquo;
                  </blockquote>
                </div>

                <div className="pt-4 border-t border-[rgba(221,183,99,0.2)] text-xs text-white/80 leading-relaxed">
                  Building long-term trust, creating asset-backed value, and connecting regional capability with national and international markets.
                </div>
              </div>
            </GsapReveal>

            {/* Mission Panel */}
            <GsapReveal animation="fade-up" delay={0.15} duration={0.85}>
              <div className="relative h-full rounded-3xl bg-[#0B1317] border border-[rgba(221,183,99,0.3)] p-6 sm:p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col justify-between space-y-6 hover:border-[#DDB763] transition-colors">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#DDB763]">
                      OPERATING MANDATE
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[#DDB763]/10 border border-[#DDB763] flex items-center justify-center text-[#DDB763]">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Our Corporate Mission
                  </h3>

                  <div className="space-y-2.5 pt-1">
                    {COMPANY_CONFIG.missionPoints.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white leading-relaxed font-normal">
                        <CheckCircle2 className="w-4 h-4 text-[#DDB763] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[rgba(221,183,99,0.2)] text-xs text-white/80 leading-relaxed">
                  Executing projects with precision, adhering to high standards, and creating enduring value for partners, customers, and society.
                </div>
              </div>
            </GsapReveal>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. OUR BUSINESS PHILOSOPHY & HONEYCOMB (Screenshot 5 Honeycomb Grid)
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
          6. OUR FIVE CORE VALUES
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

          {/* Desktop Grid View */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
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

          {/* Mobile View: Continuous Infinite Marquee Loop (Single Line) */}
          <div className="md:hidden relative z-10 w-full overflow-hidden py-2 -mx-4 px-4 font-sans">
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#070B0E] to-transparent z-20" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#070B0E] to-transparent z-20" />

            <div className="animate-marquee-track flex gap-4 items-stretch">
              {[...CORE_VALUES, ...CORE_VALUES].map((val, idx) => {
                const Icon = VALUE_ICONS[val.iconName] || ShieldCheck;
                return (
                  <div
                    key={`${val.id}-${idx}`}
                    className="w-[280px] shrink-0 p-5 rounded-2xl bg-[#0B1317] border border-[rgba(221,183,99,0.3)] shadow-[0_10px_30px_rgba(0,0,0,0.6)] space-y-3 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-[#DDB763]">
                          VALUE {val.number}
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-[#DDB763]/10 border border-[#DDB763] flex items-center justify-center text-[#DDB763]">
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>

                      <h3 className="font-sans text-lg font-bold uppercase text-white tracking-tight">
                        {val.title}
                      </h3>

                      <div className="text-xs text-[#DDB763] font-sans font-medium">
                        • {val.tagline}
                      </div>

                      <p className="text-xs text-white leading-relaxed font-normal">
                        {val.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          7. OUR COMMITMENT & CORPORATE BELIEF
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
          8. FINAL CTA
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
