'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { COMPANY_CONFIG } from '@/config/company';
import { BUSINESS_SECTORS, SectorItem } from '@/config/sectors';
import { CORE_VALUES } from '@/config/values';
import { PARTNERSHIP_CATEGORIES } from '@/config/partnerships';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { GsapReveal } from '@/components/animations/GsapReveal';
import { GoldParticles } from '@/components/animations/GoldParticles';
import { SectorCard } from '@/components/sectors/SectorCard';
import { SectorDetailModal } from '@/components/sectors/SectorDetailModal';
import { ApproachTimeline } from '@/components/sections/ApproachTimeline';
import {
  ShieldCheck,
  Award,
  Lightbulb,
  Handshake,
  Leaf,
  Target,
  ArrowUpRight,
  Globe,
  MapPin,
  TrendingUp,
  CheckCircle2,
  ChevronDown,
} from 'lucide-react';

const VALUE_ICONS: Record<string, React.ElementType> = {
  ShieldCheck,
  Award,
  Lightbulb,
  Handshake,
  Leaf,
  Target,
};

export default function HomePage() {
  const [selectedSector, setSelectedSector] = useState<SectorItem | null>(null);

  return (
    <div className="relative bg-[#080909] text-[#F3F0E9] overflow-hidden">
      {/* ========================================================
          SECTION 1: CINEMATIC FULL-WIDTH HERO (Clean Photography)
      ======================================================== */}
      <section className="relative min-h-[84vh] sm:min-h-[88vh] lg:min-h-[92vh] flex items-center justify-center pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 px-3.5 sm:px-6 lg:px-8 overflow-hidden border-b border-[rgba(201,163,79,0.2)]">
        {/* Layer 1: Lowest Layer - Clean Professional Photography (NO text, NO logos, NO watermarks) */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <Image
            src="/images/kingsphere/01-home-global-trade.jpg"
            alt="International Infrastructure and Global Trade Port"
            fill
            priority
            quality={95}
            className="object-cover object-center filter brightness-[0.75] contrast-[1.05] transition-transform duration-1000 ease-out hover:scale-105"
            sizes="100vw"
          />
          {/* Layer 2: Dark Gradient Overlay & Subtle Ambient Gold Particles */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#080909]/95 via-[#080909]/75 to-[#080909]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080909] via-transparent to-[#080909]/50" />
          <div className="absolute inset-0 bg-radial-gold opacity-15 pointer-events-none" />
          <GoldParticles count={22} />
        </div>

        {/* Layer 3: Top Layer - Actual HTML Hero Content */}
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          {/* Left Content (Approximately 60%) */}
          <div className="lg:col-span-8 space-y-5 sm:space-y-6 text-left">
            <GsapReveal animation="fade-up" duration={0.8}>
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-[1px] border border-[rgba(201,163,79,0.3)] bg-[#101111]/90 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A34F]" />
                <span className="text-[9px] sm:text-[11px] font-sans font-medium tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#E8D29A]">
                  INFRASTRUCTURE • TECHNOLOGY • TRADE • ALLIANCES
                </span>
              </div>
            </GsapReveal>

            <GsapReveal animation="fade-up" delay={0.15} duration={0.9}>
              {/* Controlled line breaks heading with white & subtle champagne gold */}
              <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-normal tracking-tight text-[#F3F0E9] leading-[1.15]">
                BUILDING STRATEGIC PARTNERSHIPS.<br />
                <span className="text-[#E8D29A] italic">CREATING GLOBAL OPPORTUNITIES.</span>
              </h1>
            </GsapReveal>

            <GsapReveal animation="fade-up" delay={0.3} duration={0.9}>
              <p className="text-xs sm:text-sm md:text-base text-[#D4D2CD] leading-relaxed max-w-xl font-sans font-light">
                A diversified business and development company connecting industries, investments, infrastructure, technology, and global trade opportunities.
              </p>
            </GsapReveal>

            {/* CTAs */}
            <GsapReveal animation="fade-up" delay={0.4} duration={0.9}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1 w-full sm:w-auto">
                <Button href="/business-sectors" variant="primary" size="lg" withArrow className="w-full sm:w-auto text-center justify-center">
                  EXPLORE OUR BUSINESS
                </Button>
                <Button href="/partnerships" variant="secondary" size="lg" className="w-full sm:w-auto text-center justify-center">
                  PARTNER WITH US
                </Button>
              </div>
            </GsapReveal>

            {/* Below CTAs: Three Core Credentials */}
            <GsapReveal animation="fade-in" delay={0.55}>
              <div className="pt-5 sm:pt-6 grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-6 border-t border-[rgba(201,163,79,0.22)] max-w-lg font-sans">
                <div className="p-2 sm:p-0">
                  <div className="font-serif text-xl sm:text-2xl font-normal text-[#E8D29A]">11</div>
                  <div className="text-[9px] sm:text-[10px] text-[#A5A39C] uppercase tracking-[0.14em] mt-0.5">
                    CORE BUSINESS SECTORS
                  </div>
                </div>
                <div className="p-2 sm:p-0">
                  <div className="font-serif text-xl sm:text-2xl font-normal text-[#E8D29A]">6-STEP</div>
                  <div className="text-[9px] sm:text-[10px] text-[#A5A39C] uppercase tracking-[0.14em] mt-0.5">
                    EXECUTION FRAMEWORK
                  </div>
                </div>
                <div className="col-span-2 sm:col-span-1 p-2 sm:p-0 border-t sm:border-t-0 border-[rgba(201,163,79,0.12)]">
                  <div className="font-serif text-lg sm:text-2xl font-normal text-[#E8D29A]">PARBHANI</div>
                  <div className="text-[9px] sm:text-[10px] text-[#A5A39C] uppercase tracking-[0.14em] mt-0.5">
                    MAHARASHTRA, INDIA
                  </div>
                </div>
              </div>
            </GsapReveal>
          </div>

          {/* Right Visual: Unobstructed cinematic view of the clean infrastructure photography */}
          <div className="lg:col-span-4 hidden lg:block" />
        </div>

        {/* Minimal Scroll Indicator */}
        <div className="hidden lg:flex absolute bottom-5 left-1/2 -translate-x-1/2 items-center gap-2 pointer-events-none opacity-60">
          <span className="text-[9px] uppercase font-sans font-medium tracking-[0.25em] text-[#C9A34F]">
            SCROLL TO EXPLORE
          </span>
          <ChevronDown className="w-3.5 h-3.5 text-[#E8D29A] animate-bounce" />
        </div>
      </section>

      {/* ========================================================
          SECTION 2: ABOUT KINGSPHERE (Asymmetric Editorial Layout)
      ======================================================== */}
      <section className="py-20 md:py-28 bg-[#101111] border-b border-[rgba(201,163,79,0.2)] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5">
              <GsapReveal animation="slide-left">
                <div className="relative rounded-[1px] overflow-hidden border border-[rgba(201,163,79,0.24)] shadow-card-dark">
                  <div className="relative h-88 sm:h-96 w-full">
                    <Image
                      src="/images/kingsphere/02-about-hero.png"
                      alt="Industrial Infrastructure Development"
                      fill
                      className="object-cover filter brightness-[0.75] contrast-[1.15]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101111] via-transparent to-transparent opacity-80" />
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-[1px] bg-[#080909]/90 border border-[rgba(201,163,79,0.2)] backdrop-blur-md">
                    <div className="text-[9.5px] font-sans font-medium tracking-[0.2em] text-[#C9A34F] uppercase">
                      CORPORATE HEADQUARTERS
                    </div>
                    <div className="text-sm font-serif font-normal text-[#F3F0E9] mt-0.5">
                      Parbhani, Maharashtra, India
                    </div>
                  </div>
                </div>
              </GsapReveal>
            </div>

            {/* Text Column */}
            <div className="lg:col-span-7 space-y-6">
              <GsapReveal animation="fade-up">
                <SectionHeading
                  badge="ABOUT KINGSPHERE"
                  title="A DIVERSIFIED BUSINESS."
                  highlight="A CONNECTED FUTURE."
                  align="left"
                  className="mb-5"
                />
              </GsapReveal>

              <GsapReveal animation="fade-up" delay={0.15}>
                <p className="text-base sm:text-lg text-[#F3F0E9] font-serif leading-relaxed italic border-l-2 border-[#C9A34F] pl-4">
                  &ldquo;{COMPANY_CONFIG.description}&rdquo;
                </p>
              </GsapReveal>

              <GsapReveal animation="fade-up" delay={0.25}>
                <p className="text-xs sm:text-sm text-[#A5A39C] leading-relaxed font-sans">
                  {COMPANY_CONFIG.positioning}
                </p>
              </GsapReveal>

              <GsapReveal animation="fade-up" delay={0.35}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  {COMPANY_CONFIG.brandPillars.map((pillar, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 p-2.5 rounded-[1px] bg-[#171816] border border-[rgba(201,163,79,0.14)] text-xs text-[#F3F0E9] font-sans"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A34F] shrink-0" />
                      <span>{pillar}</span>
                    </div>
                  ))}
                </div>
              </GsapReveal>

              <GsapReveal animation="fade-up" delay={0.45}>
                <div className="pt-2">
                  <Button href="/about" variant="primary" size="md" withArrow>
                    DISCOVER OUR COMPANY
                  </Button>
                </div>
              </GsapReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 3: OUR BUSINESS SECTORS (Editorial Showcase)
      ======================================================== */}
      <section className="py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="DIVERSIFIED OPERATIONS"
            title="OUR ELEVEN"
            highlight="BUSINESS SECTORS"
            description="Explore our multi-sector operations spanning manufacturing, civil infrastructure, global trade, clean energy, natural resources, and strategic alliances."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BUSINESS_SECTORS.map((sector, index) => (
              <GsapReveal
                key={sector.id}
                animation="fade-up"
                delay={(index % 3) * 0.08}
              >
                <SectorCard
                  sector={sector}
                  onOpenDetails={(s) => setSelectedSector(s)}
                />
              </GsapReveal>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Button href="/business-sectors" variant="secondary" size="lg" withArrow>
              EXPLORE ALL 11 SECTORS IN DETAIL
            </Button>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 4: OUR BUSINESS APPROACH (Cinematic Stepper)
      ======================================================== */}
      <section className="py-20 md:py-28 bg-[#101111] border-y border-[rgba(201,163,79,0.2)] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="METHODOLOGY"
            title="SYSTEMATIC"
            highlight="EXECUTION PROCESS"
            description="From opportunity identification to long-term asset value: our 6-step lifecycle ensures disciplined delivery."
            align="center"
          />

          <ApproachTimeline interactive={true} />

          <div className="mt-12 text-center">
            <Button href="/our-approach" variant="outline" size="md" withArrow>
              VIEW FULL METHODOLOGY
            </Button>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 5: GLOBAL CONNECTIVITY
      ======================================================== */}
      <section className="py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                badge="INTERNATIONAL REACH"
                title="LOCAL EXPERTISE."
                highlight="GLOBAL OPPORTUNITIES."
                align="left"
                className="mb-4"
              />

              <p className="text-xs sm:text-sm text-[#A5A39C] leading-relaxed font-sans">
                Operating from Maharashtra’s industrial corridor, KINGSPHERE connects regional infrastructure, manufacturing capabilities, and resource reserves with international markets, technology innovators, and cross-border trade corridors.
              </p>

              <div className="space-y-3 pt-1 font-sans">
                <div className="p-4 rounded-[1px] bg-[#101111] border border-[rgba(201,163,79,0.18)] flex items-start gap-3">
                  <Globe className="w-4 h-4 text-[#C9A34F] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#F3F0E9]">
                      Cross-Border Sourcing & Trade Corridors
                    </h4>
                    <p className="text-xs text-[#A5A39C] mt-0.5 leading-relaxed">
                      Digital sourcing networks and import-export coordination connecting Indian manufacturers with international suppliers.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-[1px] bg-[#101111] border border-[rgba(201,163,79,0.18)] flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C9A34F] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#F3F0E9]">
                      Regional Grounded Presence
                    </h4>
                    <p className="text-xs text-[#A5A39C] mt-0.5 leading-relaxed">
                      Established operational roots in Parbhani, Maharashtra, facilitating access to industrial corridors and resource nodes.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-[1px] bg-[#101111] border border-[rgba(201,163,79,0.18)] flex items-start gap-3">
                  <TrendingUp className="w-4 h-4 text-[#C9A34F] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#F3F0E9]">
                      Strategic Investment Gateways
                    </h4>
                    <p className="text-xs text-[#A5A39C] mt-0.5 leading-relaxed">
                      Structured Joint Venture vehicles that allow institutional capital to safely participate in Indian asset creation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Button href="/partnerships" variant="primary" size="md" withArrow>
                  EXPLORE PARTNERSHIP CORRIDORS
                </Button>
              </div>
            </div>

            {/* Architectural Visual Container */}
            <div className="lg:col-span-6">
              <div className="relative rounded-[1px] overflow-hidden border border-[rgba(201,163,79,0.24)] bg-[#101111] p-6 shadow-card-dark">
                <div className="relative h-72 sm:h-96 w-full flex items-center justify-center">
                  <Image
                    src="/images/kingsphere/global-connectivity-corridors.jpg"
                    alt="International Trade & Global Connectivity Corridors"
                    fill
                    className="object-cover filter brightness-[0.75] contrast-[1.1] transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101111] via-[#101111]/40 to-transparent" />

                  <div className="relative z-10 text-center space-y-2.5 p-4">
                    <span className="font-mono text-[10px] px-3 py-1 rounded-[1px] bg-[#080909]/90 border border-[#C9A34F] text-[#E8D29A] font-semibold uppercase tracking-widest">
                      STRATEGIC TRADE & ALLIANCES
                    </span>
                    <h3 className="font-serif text-2xl font-normal text-[#F3F0E9]">
                      Bridging Regional Potential with Global Corridors
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 6: VISION & MISSION PREVIEW
      ======================================================== */}
      <section className="py-20 md:py-28 bg-[#101111] border-y border-[rgba(201,163,79,0.2)] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="STRATEGIC DIRECTION"
            title="OUR VISION &"
            highlight="MISSION"
            description="Guided by purposeful long-term growth, ethical governance, and sustainable value creation."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <GlassCard cornerAccents className="p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-sans font-medium tracking-[0.25em] text-[#C9A34F]">
                    LONG-TERM DESTINATION
                  </span>
                  <div className="w-8 h-8 rounded-[1px] bg-[rgba(201,163,79,0.08)] border border-[#C9A34F] flex items-center justify-center text-[#E8D29A]">
                    <Target className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="font-serif text-2xl font-normal text-[#F3F0E9]">
                  Corporate Vision
                </h3>
                <p className="text-sm sm:text-base text-[#A5A39C] leading-relaxed italic border-l-2 border-[#C9A34F] pl-4 font-serif">
                  &ldquo;{COMPANY_CONFIG.vision}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[rgba(201,163,79,0.12)]">
                <Link
                  href="/vision-mission"
                  className="text-xs uppercase font-sans font-medium tracking-[0.14em] text-[#C9A34F] hover:text-[#E8D29A] inline-flex items-center gap-1 group"
                >
                  <span>Learn more about our vision</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </GlassCard>

            {/* Mission Card */}
            <GlassCard cornerAccents className="p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-sans font-medium tracking-[0.25em] text-[#C9A34F]">
                    OPERATING MANDATE
                  </span>
                  <div className="w-8 h-8 rounded-[1px] bg-[rgba(201,163,79,0.08)] border border-[#C9A34F] flex items-center justify-center text-[#E8D29A]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="font-serif text-2xl font-normal text-[#F3F0E9]">
                  Corporate Mission
                </h3>
                <p className="text-sm sm:text-base text-[#A5A39C] leading-relaxed italic border-l-2 border-[#C9A34F] pl-4 font-serif">
                  &ldquo;{COMPANY_CONFIG.mission}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[rgba(201,163,79,0.12)]">
                <Link
                  href="/vision-mission"
                  className="text-xs uppercase font-sans font-medium tracking-[0.14em] text-[#C9A34F] hover:text-[#E8D29A] inline-flex items-center gap-1 group"
                >
                  <span>Learn more about our mission</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 7: OUR CORE VALUES
      ======================================================== */}
      <section className="py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="FOUNDATIONAL ETHOS"
            title="OUR SIX CORE"
            highlight="VALUES"
            description="Six foundational principles defining our corporate character, partner relations, and project delivery."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_VALUES.map((val) => {
              const Icon = VALUE_ICONS[val.iconName] || ShieldCheck;
              return (
                <GlassCard key={val.id} cornerAccents className="p-6 md:p-8 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#C9A34F] font-semibold">
                      {val.number}
                    </span>
                    <div className="w-8 h-8 rounded-[1px] bg-[rgba(201,163,79,0.06)] border border-[rgba(201,163,79,0.2)] flex items-center justify-center text-[#E8D29A]">
                      <Icon className="w-4 h-4 text-[#C9A34F]" />
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-normal text-[#F3F0E9]">
                    {val.title}
                  </h3>
                  <div className="text-xs text-[#E8D29A] font-serif italic">
                    {val.tagline}
                  </div>
                  <p className="text-xs text-[#A5A39C] leading-relaxed font-sans">
                    {val.description}
                  </p>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 8: STRATEGIC PARTNERSHIPS
      ======================================================== */}
      <section className="py-20 md:py-28 bg-[#101111] border-y border-[rgba(201,163,79,0.2)] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="COLLABORATIVE ALLIANCES"
            title="STRATEGIC"
            highlight="PARTNERSHIP PROFILES"
            description="We welcome institutional investors, manufacturers, technology providers, and trade organizations to build long-term value together."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PARTNERSHIP_CATEGORIES.slice(0, 6).map((cat) => (
              <div
                key={cat.id}
                className="p-6 rounded-[1px] bg-[#171816] border border-[rgba(201,163,79,0.18)] hover:border-[#C9A34F] transition-all space-y-3 font-sans"
              >
                <div className="flex items-center gap-2">
                  <Handshake className="w-4 h-4 text-[#C9A34F]" />
                  <h4 className="font-serif text-base font-normal text-[#F3F0E9]">
                    {cat.title}
                  </h4>
                </div>
                <p className="text-xs text-[#A5A39C] leading-relaxed line-clamp-3">
                  {cat.description}
                </p>
                <div className="pt-2 text-[10.5px] text-[#E8D29A]">
                  <span className="font-medium text-[#C9A34F]">Modes:</span> {cat.collaborationModes.join(' • ')}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button href="/partnerships" variant="primary" size="md" withArrow>
              VIEW ALL PARTNERSHIP CATEGORIES & SUBMIT INQUIRY
            </Button>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 9: FINAL CTA
      ======================================================== */}
      <section className="py-24 relative overflow-hidden text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-5">
          <span className="text-[10px] font-sans font-medium uppercase tracking-[0.25em] text-[#C9A34F]">
            DIRECT EXECUTIVE DIALOGUE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#F3F0E9] leading-tight">
            FROM OPPORTUNITY TO ENTERPRISE.
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#A5A39C] max-w-xl mx-auto leading-relaxed font-sans">
            Let&apos;s explore strategic opportunities and build enduring corporate partnerships.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-3 w-full sm:w-auto max-w-md mx-auto">
            <Button href="/contact" variant="primary" size="lg" withArrow className="w-full sm:w-auto text-center justify-center">
              CONTACT OUR TEAM
            </Button>
            <Button href="/partnerships" variant="outline" size="lg" className="w-full sm:w-auto text-center justify-center">
              PARTNER WITH US
            </Button>
          </div>
        </div>
      </section>

      {/* Modal for Sector Detail */}
      <SectorDetailModal
        sector={selectedSector}
        onClose={() => setSelectedSector(null)}
      />
    </div>
  );
}
