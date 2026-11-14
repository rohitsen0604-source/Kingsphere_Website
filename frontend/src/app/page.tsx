'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { COMPANY_CONFIG } from '@/config/company';
import { BUSINESS_SECTORS } from '@/config/sectors';
import { CORE_VALUES } from '@/config/values';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { GsapReveal } from '@/components/animations/GsapReveal';
import { GoldParticles } from '@/components/animations/GoldParticles';
import { SectorCard } from '@/components/sectors/SectorCard';
import { SectorsCoverFlow } from '@/components/home/SectorsCoverFlow';
import { CoreValuesInfographic } from '@/components/home/CoreValuesInfographic';
import { PartnershipsMarquee } from '@/components/home/PartnershipsMarquee';
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
  return (
    <div className="relative bg-[#070B0E] text-white overflow-hidden">
      {/* ========================================================
          SECTION 1: CINEMATIC FULL-WIDTH HERO (Clean Photography)
      ======================================================== */}
      <section className="relative min-h-[84vh] sm:min-h-[88vh] lg:min-h-[92vh] flex items-center justify-center pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 px-3.5 sm:px-6 lg:px-8 overflow-hidden border-b border-[rgba(221, 183, 99,0.2)]">
        {/* Layer 1: Lowest Layer - Clean Professional Photography */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <Image
            src="/images/kingsphere/01-home-global-trade.jpg"
            alt="International Infrastructure and Global Trade Port"
            fill
            priority
            quality={95}
            className="object-cover object-center filter brightness-[0.75] contrast-[1.08] transition-transform duration-1000 ease-out hover:scale-105"
            sizes="100vw"
          />
          {/* Layer 2: Modern Dark Teal Gradient Overlay & Subtle Ambient Gold Particles */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#070B0E]/95 via-[#070B0E]/75 to-[#070B0E]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070B0E] via-transparent to-[#070B0E]/50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#070B0E_90%)] opacity-35" />
          <GoldParticles count={22} />
        </div>

        {/* Layer 3: Top Layer - Actual HTML Hero Content */}
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          {/* Left Content (Approximately 60%) */}
          <div className="lg:col-span-8 space-y-5 sm:space-y-6 text-left">
            <GsapReveal animation="fade-up" duration={0.8}>
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(221,183,99,0.35)] bg-[#0B151A]/90 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DDB763] animate-pulse" />
                <span className="text-[9px] sm:text-[11px] font-sans font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#F8E9C6]">
                  CONNECTING EXPERTISE • BUILDING BUSINESSES • CREATING GROWTH
                </span>
              </div>
            </GsapReveal>

            <GsapReveal animation="fade-up" delay={0.15} duration={0.9}>
              {/* Controlled line breaks heading with white & brand logo metallic gold */}
              <h1 className="font-sans text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-bold tracking-tight text-white leading-[1.12]">
                BUILDING STRATEGIC PARTNERSHIPS.<br />
                <span className="bg-gradient-to-r from-[#FFFDF7] via-[#F8E9C6] to-[#DDB763] bg-clip-text text-transparent block mt-1">
                  CREATING GLOBAL OPPORTUNITIES.
                </span>
              </h1>
            </GsapReveal>

            <GsapReveal animation="fade-up" delay={0.25} duration={0.9}>
              <p className="text-xs sm:text-sm md:text-base text-white leading-relaxed max-w-xl font-sans font-medium">
                A diversified business and development company connecting industries, investments, infrastructure, technology, and global trade opportunities.
              </p>
            </GsapReveal>

            <GsapReveal animation="fade-up" delay={0.35} duration={0.9}>
              <p className="text-xs sm:text-[13px] text-white/90 leading-relaxed max-w-xl font-sans font-normal border-l-2 border-[#DDB763] pl-3 py-0.5">
                We bring together industry experts, entrepreneurs, investors, professionals, and strategic partners to develop businesses, expand opportunities, and build sustainable growth across multiple sectors.
              </p>
            </GsapReveal>

            {/* CTAs */}
            <GsapReveal animation="fade-up" delay={0.45} duration={0.9}>
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
              <div className="pt-5 sm:pt-6 grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-6 border-t border-[rgba(221,183,99,0.2)] max-w-lg font-sans">
                <div className="p-2 sm:p-0">
                  <div className="font-sans text-xl sm:text-2xl font-bold text-white">11</div>
                  <div className="text-[9px] sm:text-[10px] text-white/80 uppercase tracking-[0.14em] mt-0.5 font-medium">
                    BUSINESS VERTICALS
                  </div>
                </div>
                <div className="p-2 sm:p-0">
                  <div className="font-sans text-xl sm:text-2xl font-bold text-white">6-STEP</div>
                  <div className="text-[9px] sm:text-[10px] text-white/80 uppercase tracking-[0.14em] mt-0.5 font-medium">
                    EXECUTION FRAMEWORK
                  </div>
                </div>
                <div className="col-span-2 sm:col-span-1 p-2 sm:p-0 border-t sm:border-t-0 border-[rgba(221,183,99,0.15)]">
                  <div className="font-sans text-lg sm:text-2xl font-bold text-white">PARBHANI</div>
                  <div className="text-[9px] sm:text-[10px] text-white/80 uppercase tracking-[0.14em] mt-0.5 font-medium">
                    MAHARASHTRA, INDIA
                  </div>
                </div>
              </div>
            </GsapReveal>
          </div>

          {/* Right Visual */}
          <div className="lg:col-span-4 hidden lg:block" />
        </div>

        {/* Minimal Scroll Indicator */}
        <div className="hidden lg:flex absolute bottom-5 left-1/2 -translate-x-1/2 items-center gap-2 pointer-events-none opacity-70">
          <span className="text-[9px] uppercase font-sans font-bold tracking-[0.25em] text-[#DDB763]">
            SCROLL TO EXPLORE
          </span>
          <ChevronDown className="w-3.5 h-3.5 text-[#DDB763] animate-bounce" />
        </div>
      </section>

      {/* ========================================================
          SECTION 2: ABOUT KINGSPHERE (Asymmetric Editorial Layout)
      ======================================================== */}
      <section className="py-20 md:py-28 bg-[#0B1317] border-b border-[rgba(221, 183, 99,0.2)] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5">
              <GsapReveal animation="slide-left">
                <div className="relative rounded-2xl overflow-hidden border border-[rgba(221, 183, 99,0.25)] shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                  <div className="relative h-88 sm:h-96 w-full">
                    <Image
                      src="/images/kingsphere/02-about-hero.png"
                      alt="Industrial Infrastructure Development"
                      fill
                      className="object-cover filter brightness-[0.8] contrast-[1.1]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1317] via-transparent to-transparent opacity-85" />
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#070B0E]/95 border border-[rgba(221, 183, 99,0.25)] backdrop-blur-md">
                    <div className="text-[9.5px] font-sans font-bold tracking-[0.2em] text-[#DDB763] uppercase">
                      CORPORATE HEADQUARTERS
                    </div>
                    <div className="text-sm font-sans font-bold text-white mt-0.5">
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
                <p className="text-base sm:text-lg text-white font-sans leading-relaxed border-l-2 border-[#DDB763] pl-4 font-normal">
                  &ldquo;{COMPANY_CONFIG.description}&rdquo;
                </p>
              </GsapReveal>

              <GsapReveal animation="fade-up" delay={0.25}>
                <p className="text-xs sm:text-sm text-white leading-relaxed font-sans font-normal">
                  {COMPANY_CONFIG.positioning}
                </p>
              </GsapReveal>

              <GsapReveal animation="fade-up" delay={0.3}>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-sans font-normal">
                  Bringing industries, experts, entrepreneurs, investors, and strategic partners together to develop businesses, create opportunities, and drive diversified growth across Maharashtra and India.
                </p>
              </GsapReveal>

              <GsapReveal animation="fade-up" delay={0.35}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  {COMPANY_CONFIG.brandPillars.map((pillar, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-[#0F1A1F] border border-[rgba(221, 183, 99,0.2)] text-xs text-white font-sans"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#DDB763] shrink-0" />
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
          SECTION 3: OUR BUSINESS SECTORS (Award-Winning 3D Cover Flow)
      ======================================================== */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="DIVERSIFIED OPERATIONS"
            title="11 BUSINESS VERTICALS."
            highlight="ONE VISION."
            description="CREATING TRUST • DELIVERING VALUE • BUILDING OPPORTUNITIES. Explore our operations across manufacturing, infrastructure, international trade, consumer goods, technology, mining, energy, recycling, consultancy, projects, and strategic investments."
            align="center"
          />

          {/* 3D Curved Perspective Cover Flow Carousel */}
          <GsapReveal animation="fade-up" duration={0.9}>
            <SectorsCoverFlow />
          </GsapReveal>

          <div className="mt-10 text-center">
            <Button href="/business-sectors" variant="secondary" size="lg" withArrow>
              EXPLORE ALL 11 SECTORS IN DETAIL
            </Button>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 4: OUR BUSINESS APPROACH (Cinematic Stepper)
      ======================================================== */}
      <section className="py-20 md:py-28 bg-[#0B1317] border-y border-[rgba(221, 183, 99,0.2)] relative">
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

              <p className="text-xs sm:text-sm text-white leading-relaxed font-sans font-normal">
                Operating from Maharashtra’s industrial corridor, KINGSPHERE connects regional infrastructure, manufacturing capabilities, and resource reserves with international markets, technology innovators, and cross-border trade corridors.
              </p>

              <div className="space-y-3 pt-1 font-sans">
                <div className="p-4 rounded-xl bg-[#0B1317] border border-[rgba(221, 183, 99,0.22)] flex items-start gap-3">
                  <Globe className="w-4 h-4 text-[#DDB763] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                      Cross-Border Sourcing & Trade Corridors
                    </h4>
                    <p className="text-xs text-white mt-0.5 leading-relaxed font-normal">
                      Digital sourcing networks and import-export coordination connecting Indian manufacturers with international suppliers.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0B1317] border border-[rgba(221, 183, 99,0.22)] flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#DDB763] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                      Regional Grounded Presence
                    </h4>
                    <p className="text-xs text-white mt-0.5 leading-relaxed font-normal">
                      Established operational roots in Parbhani, Maharashtra, facilitating access to industrial corridors and resource nodes.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0B1317] border border-[rgba(221, 183, 99,0.22)] flex items-start gap-3">
                  <TrendingUp className="w-4 h-4 text-[#DDB763] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                      Strategic Investment Gateways
                    </h4>
                    <p className="text-xs text-white mt-0.5 leading-relaxed font-normal">
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
              <div className="relative rounded-2xl overflow-hidden border border-[rgba(221, 183, 99,0.25)] bg-[#0B1317] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                <div className="relative h-72 sm:h-96 w-full flex items-center justify-center rounded-xl overflow-hidden">
                  <Image
                    src="/images/kingsphere/global-connectivity-corridors.jpg"
                    alt="International Trade & Global Connectivity Corridors"
                    fill
                    className="object-cover filter brightness-[0.8] contrast-[1.08] transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1317] via-[#0B1317]/40 to-transparent" />

                  <div className="relative z-10 text-center space-y-2.5 p-4">
                    <span className="font-sans text-[10px] px-3 py-1 rounded-full bg-[#070B0E]/90 border border-[#DDB763] text-white font-bold uppercase tracking-widest">
                      STRATEGIC TRADE & ALLIANCES
                    </span>
                    <h3 className="font-sans text-2xl font-bold text-white tracking-tight">
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
      <section className="py-20 md:py-28 bg-[#0B1317] border-y border-[rgba(221, 183, 99,0.2)] relative">
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
            <GlassCard cornerAccents className="p-8 sm:p-10 flex flex-col justify-between space-y-6 rounded-2xl">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-sans font-bold tracking-[0.25em] text-[#DDB763]">
                    LONG-TERM DESTINATION
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[rgba(221, 183, 99,0.1)] border border-[#DDB763] flex items-center justify-center text-[#DDB763]">
                    <Target className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="font-sans text-2xl font-bold text-white tracking-tight">
                  Corporate Vision
                </h3>
                <p className="text-sm sm:text-base text-white leading-relaxed border-l-2 border-[#DDB763] pl-4 font-sans font-normal">
                  &ldquo;{COMPANY_CONFIG.vision}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[rgba(221, 183, 99,0.2)]">
                <Link
                  href="/vision-mission"
                  className="text-xs uppercase font-sans font-bold tracking-[0.14em] text-[#DDB763] hover:text-[#F8E9C6] inline-flex items-center gap-1 group"
                >
                  <span>Learn more about our vision</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </GlassCard>

            {/* Mission Card */}
            <GlassCard cornerAccents className="p-8 sm:p-10 flex flex-col justify-between space-y-6 rounded-2xl">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-sans font-bold tracking-[0.25em] text-[#DDB763]">
                    OPERATING MANDATE
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[rgba(221, 183, 99,0.1)] border border-[#DDB763] flex items-center justify-center text-[#DDB763]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="font-sans text-2xl font-bold text-white tracking-tight">
                  Corporate Mission
                </h3>
                <p className="text-sm sm:text-base text-white leading-relaxed border-l-2 border-[#DDB763] pl-4 font-sans font-normal">
                  &ldquo;{COMPANY_CONFIG.mission}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[rgba(221, 183, 99,0.2)]">
                <Link
                  href="/vision-mission"
                  className="text-xs uppercase font-sans font-bold tracking-[0.14em] text-[#DDB763] hover:text-[#F8E9C6] inline-flex items-center gap-1 group"
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
          SECTION 7: OUR CORE VALUES (Interactive Infographic Roadmap)
      ======================================================== */}
      <section className="py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="FOUNDATIONAL ETHOS"
            title="OUR FIVE CORE"
            highlight="VALUES"
            description="Our business philosophy is founded on strong principles of integrity, responsibility, excellence, innovation and collaboration. These values guide our decisions, shape our partnerships and define the way we conduct our business."
            align="center"
          />

          <CoreValuesInfographic />
        </div>
      </section>

      {/* ========================================================
          SECTION 8: STRATEGIC PARTNERSHIPS
      ======================================================== */}
      <section className="py-20 md:py-28 bg-[#0B1317] border-y border-[rgba(221, 183, 99,0.2)] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="OUR BUSINESS & PARTNERSHIP ECOSYSTEM"
            title="CONNECTING PARTNERS."
            highlight="BUILDING BUSINESSES."
            description="KINGSPHERE aims to develop opportunities through collaboration with strategic investors, joint venture partners, manufacturers, technology pioneers, and institutional organizations."
            align="center"
          />

          {/* Infinite Looping Partnership Cards */}
          <div className="mt-8">
            <PartnershipsMarquee />
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
          <span className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-[#DDB763]">
            DIRECT EXECUTIVE DIALOGUE
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
            FROM OPPORTUNITY TO ENTERPRISE.
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-white max-w-xl mx-auto leading-relaxed font-sans font-normal">
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
    </div>
  );
}
