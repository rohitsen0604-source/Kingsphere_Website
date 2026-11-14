import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BUSINESS_SECTORS, getSectorBySlug } from '@/config/sectors';
import { Button } from '@/components/ui/Button';
import { GlassCard } from '@/components/ui/GlassCard';
import { GsapReveal } from '@/components/animations/GsapReveal';
import {
  Factory,
  Building2,
  Ship,
  ShoppingBag,
  Cpu,
  Gem,
  Sun,
  Recycle,
  Compass,
  Briefcase,
  TrendingUp,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Target,
  Sparkles,
  Users,
  Layers,
  ChevronRight,
} from 'lucide-react';

const SECTOR_ICONS: Record<string, React.ElementType> = {
  Factory,
  Building2,
  Ship,
  ShoppingBag,
  Cpu,
  Gem,
  Sun,
  Recycle,
  Compass,
  Briefcase,
  TrendingUp,
};

export function generateStaticParams() {
  return BUSINESS_SECTORS.map((sector) => ({
    slug: sector.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const sector = getSectorBySlug(params.slug);
  if (!sector) {
    return {
      title: 'Sector Not Found | KINGSPHERE',
    };
  }
  return {
    title: `${sector.number}. ${sector.title} | KINGSPHERE Sectors`,
    description: sector.fullDescription,
  };
}

export default function SectorDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const sectorIndex = BUSINESS_SECTORS.findIndex((s) => s.id === params.slug);
  if (sectorIndex === -1) {
    notFound();
  }

  const sector = BUSINESS_SECTORS[sectorIndex];
  const prevSector =
    BUSINESS_SECTORS[(sectorIndex - 1 + BUSINESS_SECTORS.length) % BUSINESS_SECTORS.length];
  const nextSector = BUSINESS_SECTORS[(sectorIndex + 1) % BUSINESS_SECTORS.length];
  const Icon = SECTOR_ICONS[sector.iconName] || Factory;

  return (
    <div className="relative bg-[#070B0E] text-white min-h-screen overflow-hidden">
      {/* Ambient Royal Sapphire & Gold Background Glows */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-40 left-1/4 w-[650px] h-[650px] rounded-full bg-[#1C387A]/20 blur-[140px]" />
        <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full bg-[#DDB763]/12 blur-[130px]" />
      </div>

      {/* ========================================================
          1. CINEMATIC SECTOR HERO
      ======================================================== */}
      <section className="relative z-10 pt-28 pb-24 sm:pt-36 sm:pb-32 border-b border-[rgba(221,183,99,0.24)] overflow-hidden">
        {/* Background Sector Photography */}
        <div className="absolute inset-0 z-0">
          <Image
            src={sector.image}
            alt={sector.title}
            fill
            priority
            className="object-cover object-center filter brightness-[0.5] contrast-[1.1] scale-[1.02]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070B0E] via-[#070B0E]/75 to-[#070B0E]/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070B0E]/95 via-[#070B0E]/65 to-transparent" />
          <div className="absolute inset-0 ambient-grid-pattern opacity-40" />
        </div>

        {/* Watermark Sector Number */}
        <div className="pointer-events-none absolute right-6 md:right-16 top-28 md:top-24 font-serif text-[120px] sm:text-[180px] md:text-[240px] font-bold leading-none text-[#DDB763]/[0.08] select-none">
          {sector.number}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Trail */}
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-[11px] font-sans uppercase tracking-[0.18em] text-white mb-8"
          >
            <Link href="/" className="hover:text-[#F8E9C6] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-[#DDB763]/70" />
            <Link href="/business-sectors" className="hover:text-[#F8E9C6] transition-colors">
              Business Sectors
            </Link>
            <ChevronRight className="w-3 h-3 text-[#DDB763]/70" />
            <span className="text-[#F8E9C6] font-semibold">
              Sector {sector.number}
            </span>
          </nav>

          <div className="max-w-4xl space-y-6">
            {/* Category & Icon Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-[2px] royal-glass">
              <div className="w-6 h-6 rounded-[1px] bg-[#DDB763]/15 border border-[#DDB763]/40 flex items-center justify-center">
                <Icon className="w-3.5 h-3.5 text-[#F8E9C6]" />
              </div>
              <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.22em] uppercase text-[#F8E9C6]">
                SECTOR {sector.number} • {sector.category}
              </span>
            </div>

            {/* Main Editorial Title */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.1] text-white">
              <span className="gold-gradient-text font-semibold">{sector.title}</span>
            </h1>

            {/* Tagline */}
            <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-[#ECCB7E]/95">
              {sector.tagline}
            </p>

            {/* Short Executive Lead */}
            <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed max-w-3xl font-sans">
              {sector.fullDescription}
            </p>

            {/* Hero Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Button href={`/partnerships?sector=${sector.id}`} variant="primary" size="lg" withArrow>
                INITIATE SECTOR PARTNERSHIP
              </Button>
              <Button href="#execution-scope" variant="outline" size="lg">
                EXPLORE CAPABILITIES
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. FLOATING EXECUTIVE METRICS STRIP
      ======================================================== */}
      <section className="relative z-20 -mt-10 sm:-mt-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {sector.keyMetrics.map((metric, idx) => (
              <GsapReveal key={idx} animation="fade-up" delay={idx * 0.08}>
                <div className="royal-glass rounded-[2px] p-5 sm:p-6 flex items-center justify-between gap-4 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#F5E6B8] via-[#D4AF5A] to-transparent" />
                  <div className="pl-2">
                    <div className="text-[10px] font-sans uppercase tracking-[0.2em] text-white">
                      {metric.label}
                    </div>
                    <div className="font-serif text-lg sm:text-xl text-[#F5E6B8] font-medium mt-1">
                      {metric.value}
                    </div>
                  </div>
                  <Sparkles className="w-5 h-5 text-[#D4AF5A]/50 shrink-0" />
                </div>
              </GsapReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          3. STRATEGIC OVERVIEW & VISUAL SHOWCASE
      ======================================================== */}
      <section className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <GsapReveal animation="fade-up">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-[11px] font-sans font-semibold uppercase tracking-[0.22em] text-[#D4AF5A]">
                  <Layers className="w-3.5 h-3.5" />
                  <span>STRATEGIC MANDATE</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#F6F3EC] leading-tight">
                  Architecting Scalable Value in{' '}
                  <span className="italic gold-gradient-text">{sector.category}</span>
                </h2>
                <p className="text-sm sm:text-base text-white leading-relaxed font-sans">
                  {sector.fullDescription}
                </p>
              </div>
            </GsapReveal>

            {/* Strategic Focus Callout */}
            <GsapReveal animation="fade-up" delay={0.1}>
              <GlassCard cornerAccents className="p-6 sm:p-7">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-[2px] bg-[#D4AF5A]/15 border border-[#D4AF5A]/40 flex items-center justify-center shrink-0">
                    <Target className="w-5 h-5 text-[#F5E6B8]" />
                  </div>
                  <div className="space-y-1.5">
                    <div className="text-[11px] font-sans font-semibold uppercase tracking-[0.2em] text-[#D4AF5A]">
                      KINGSPHERE STRATEGIC FOCUS
                    </div>
                    <p className="font-serif text-lg sm:text-xl text-[#F6F3EC] leading-snug">
                      “{sector.strategicFocus}”
                    </p>
                  </div>
                </div>
              </GlassCard>
            </GsapReveal>

            {/* Proprietary Brands Callout (e.g., ALBINE AQUA & ELBRUS) */}
            {sector.brands && sector.brands.length > 0 && (
              <GsapReveal animation="fade-up" delay={0.12}>
                <div className="p-6 rounded-2xl bg-[#0B1317] border-2 border-[#DDB763] shadow-lg space-y-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#DDB763]" />
                    <span className="text-[11px] font-sans font-bold uppercase tracking-[0.25em] text-[#DDB763]">
                      OUR PROPRIETARY BRANDS & PRODUCTS
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {sector.brands.map((brand, bIdx) => (
                      <div
                        key={bIdx}
                        className="p-4 rounded-xl bg-[#070B0E] border border-[#DDB763]/40 flex items-center justify-between"
                      >
                        <div>
                          <div className="font-sans text-base font-bold text-white tracking-wide">
                            {brand.name}
                          </div>
                          <div className="text-xs text-[#F8E9C6] mt-0.5 font-medium">
                            {brand.category}
                          </div>
                        </div>
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#DDB763]/15 text-[#DDB763] border border-[#DDB763]/30">
                          Official Brand
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </GsapReveal>
            )}

            {/* Target Partners */}
            <GsapReveal animation="fade-up" delay={0.15}>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[11px] font-sans font-semibold uppercase tracking-[0.2em] text-white">
                  <Users className="w-3.5 h-3.5 text-[#D4AF5A]" />
                  <span>IDEAL COLLABORATION & PARTNER PROFILES</span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {sector.targetPartners.map((partner, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-2 rounded-[2px] bg-[#111622]/90 border border-[rgba(212,175,90,0.25)] text-xs font-sans text-[#F5E6B8] hover:border-[#D4AF5A] transition-colors"
                    >
                      {partner}
                    </span>
                  ))}
                </div>
              </div>
            </GsapReveal>
          </div>

          {/* Right Framed Visual Card */}
          <div className="lg:col-span-5">
            <GsapReveal animation="fade-up" delay={0.2}>
              <div className="relative rounded-[2px] royal-glass p-2.5 sm:p-3">
                <div className="relative h-72 sm:h-96 w-full overflow-hidden rounded-[1px]">
                  <Image
                    src={sector.image}
                    alt={sector.title}
                    fill
                    className="object-cover filter brightness-[0.88] contrast-[1.08]"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070B0E] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-[2px] bg-[#070B0E]/90 border border-[#DDB763]/40 text-[10px] font-sans uppercase tracking-[0.2em] text-[#F8E9C6]">
                      KINGSPHERE DIVISION {sector.number}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-[#070B0E]/90 border border-[#DDB763]/50 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-[#F8E9C6]" />
                    </div>
                  </div>
                </div>
              </div>
            </GsapReveal>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. CORE CAPABILITIES & HIGH-VALUE OPPORTUNITIES
      ======================================================== */}
      <section
        id="execution-scope"
        className="relative z-10 py-16 sm:py-24 bg-[#0B1317]/90 border-y border-[rgba(221,183,99,0.22)] px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[2px] border border-[rgba(212,175,90,0.28)] bg-[#111622]/85">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF5A]" />
              <span className="text-[10px] font-sans font-semibold tracking-[0.22em] uppercase text-[#F5E6B8]">
                OPERATIONAL ARCHITECTURE
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#F6F3EC]">
              Capabilities & <span className="italic gold-gradient-text">Growth Opportunities</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Core Capabilities */}
            <GsapReveal animation="fade-up">
              <GlassCard cornerAccents className="h-full space-y-6">
                <div className="flex items-center justify-between border-b border-[rgba(212,175,90,0.16)] pb-4">
                  <div>
                    <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#D4AF5A]">
                      01 / EXECUTION DEPTH
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#F6F3EC] mt-1">
                      Core Capabilities
                    </h3>
                  </div>
                  <CheckCircle2 className="w-6 h-6 text-[#D4AF5A]" />
                </div>
                <ul className="space-y-4">
                  {sector.capabilities.map((cap, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3.5 p-3.5 rounded-[2px] bg-[#070B0E]/80 border border-[rgba(221,183,99,0.18)] hover:border-[rgba(221,183,99,0.4)] transition-colors"
                    >
                      <span className="font-mono text-xs text-[#DDB763] font-semibold mt-0.5">
                        0{i + 1}
                      </span>
                      <span className="text-xs sm:text-sm text-[#E2E6EE] leading-relaxed font-sans">
                        {cap}
                      </span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </GsapReveal>

            {/* High-Value Opportunities */}
            <GsapReveal animation="fade-up" delay={0.1}>
              <GlassCard cornerAccents className="h-full space-y-6">
                <div className="flex items-center justify-between border-b border-[rgba(212,175,90,0.16)] pb-4">
                  <div>
                    <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#D4AF5A]">
                      02 / COLLABORATION VECTORS
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#F6F3EC] mt-1">
                      Strategic Opportunities
                    </h3>
                  </div>
                  <TrendingUp className="w-6 h-6 text-[#D4AF5A]" />
                </div>
                <ul className="space-y-4">
                  {sector.opportunities.map((opp, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3.5 p-3.5 rounded-[2px] bg-[#070B0E]/80 border border-[rgba(221,183,99,0.18)] hover:border-[rgba(221,183,99,0.4)] transition-colors"
                    >
                      <ArrowUpRight className="w-4 h-4 text-[#F8E9C6] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[#E2E6EE] leading-relaxed font-sans">
                        {opp}
                      </span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </GsapReveal>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. SECTOR EXECUTION FRAMEWORK (3-STAGE WORKFLOW)
      ======================================================== */}
      <section className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.22em] text-[#D4AF5A]">
                DELIVERY BLUEPRINT
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#F6F3EC]">
                Sector <span className="italic gold-gradient-text">Execution Framework</span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-white max-w-md font-sans">
              A disciplined three-stage governance lifecycle designed to de-risk execution and maximize partner ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sector.executionFramework.map((stage, idx) => (
              <GsapReveal key={idx} animation="fade-up" delay={idx * 0.1}>
                <GlassCard cornerAccents className="h-full flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-3xl font-light gold-gradient-text">
                        {stage.step}
                      </span>
                      <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#737885]">
                        PHASE {stage.step}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl text-[#F6F3EC] font-medium">
                      {stage.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white leading-relaxed font-sans">
                      {stage.detail}
                    </p>
                  </div>
                  <div className="h-[1px] w-full bg-gradient-to-r from-[#D4AF5A]/40 via-[#D4AF5A]/15 to-transparent" />
                </GlassCard>
              </GsapReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          6. TAILORED SECTOR INQUIRY CTA
      ======================================================== */}
      <section className="relative z-10 py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-[rgba(221,183,99,0.22)] bg-gradient-to-b from-[#0B1317] to-[#070B0E]">
        <div className="max-w-5xl mx-auto">
          <GlassCard cornerAccents className="p-8 sm:p-12 text-center space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-[2px] bg-[#DDB763]/10 border border-[#DDB763]/30 text-[10px] font-sans font-semibold uppercase tracking-[0.22em] text-[#F8E9C6]">
              DIRECT MANDATE & JOINT VENTURE DESK
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white">
              Explore <span className="italic gold-gradient-text">{sector.title}</span> with KINGSPHERE
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-white max-w-2xl mx-auto font-sans leading-relaxed">
              Connect with our executive desk to discuss joint ventures, supply mandates, project execution, or strategic investment in this sector.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Button href={`/partnerships?sector=${sector.id}`} variant="primary" size="lg" withArrow>
                PROPOSE A PARTNERSHIP
              </Button>
              <Button href="/contact" variant="secondary" size="lg" withArrow>
                CONTACT EXECUTIVE DESK
              </Button>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* ========================================================
          7. PREVIOUS / NEXT SECTOR NAVIGATION
      ======================================================== */}
      <section className="relative z-10 py-12 px-4 sm:px-6 lg:px-8 border-t border-[rgba(221,183,99,0.2)] bg-[#070B0E]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Previous Sector */}
          <Link
            href={`/business-sectors/${prevSector.id}`}
            className="group royal-glass rounded-[2px] p-5 flex items-center gap-4 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-10 h-10 rounded-full border border-[#DDB763]/30 flex items-center justify-center shrink-0 group-hover:bg-[#DDB763] group-hover:text-[#070B0E] transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#DDB763]">
                PREVIOUS SECTOR ({prevSector.number})
              </div>
              <div className="font-serif text-base sm:text-lg text-white group-hover:text-[#F8E9C6] truncate transition-colors">
                {prevSector.title}
              </div>
            </div>
          </Link>

          {/* Next Sector */}
          <Link
            href={`/business-sectors/${nextSector.id}`}
            className="group royal-glass rounded-[2px] p-5 flex items-center justify-between gap-4 text-right transition-all duration-300 hover:-translate-y-1"
          >
            <div className="min-w-0 flex-1">
              <div className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#DDB763]">
                NEXT SECTOR ({nextSector.number})
              </div>
              <div className="font-serif text-base sm:text-lg text-white group-hover:text-[#F8E9C6] truncate transition-colors">
                {nextSector.title}
              </div>
            </div>
            <div className="w-10 h-10 rounded-full border border-[#DDB763]/30 flex items-center justify-center shrink-0 group-hover:bg-[#DDB763] group-hover:text-[#070B0E] transition-colors">
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}

