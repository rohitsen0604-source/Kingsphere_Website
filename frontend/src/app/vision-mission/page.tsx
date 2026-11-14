import React from 'react';
import type { Metadata } from 'next';
import { COMPANY_CONFIG } from '@/config/company';
import { CORE_VALUES } from '@/config/values';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { PageHero } from '@/components/layout/PageHero';
import { GsapReveal } from '@/components/animations/GsapReveal';
import { Button } from '@/components/ui/Button';
import {
  Compass,
  Target,
  ShieldCheck,
  Award,
  Lightbulb,
  Handshake,
  Leaf,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Vision & Mission | KINGSPHERE Corporate Purpose & Core Values',
  description:
    'Read the official vision, mission, and five core foundational values of KINGSPHERE INFRA-TECH-TRADE (OPC) PRIVATE LIMITED.',
};

const VALUE_ICONS: Record<string, React.ElementType> = {
  ShieldCheck,
  Award,
  Lightbulb,
  Handshake,
  Leaf,
  Target,
};

export default function VisionMissionPage() {
  return (
    <div className="relative bg-[#070B0E] text-white min-h-screen">
      {/* Hero with /images/hero/07-vision-mission-hero.png */}
      <PageHero
        badge="STRATEGIC CHARTER & ETHICAL FOUNDATION"
        badgeIcon={<Compass className="w-3.5 h-3.5 text-[#DDB763]" />}
        title="11 BUSINESS VERTICALS. ONE VISION."
        highlightTitle="CREATING TRUST • DELIVERING VALUE."
        description="Building Businesses. Developing Opportunities. Creating Partnerships. Guided by purposeful long-term growth, ethical governance, and sustainable value creation."
        imageSrc="/images/kingsphere/07-vision-mission-hero.png"
        imageAlt="KINGSPHERE Corporate Purpose & Core Values"
      />

      {/* Editorial Vision & Mission Panels */}
      <section className="py-14 sm:py-20 md:py-28 px-3.5 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Vision Panel */}
          <GsapReveal animation="fade-up" delay={0} duration={0.85}>
            <div className="relative h-full rounded-2xl bg-[#0B1317] border border-[rgba(221,183,99,0.3)] p-6 sm:p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col justify-between space-y-6 sm:space-y-8 hover:border-[#DDB763] transition-colors duration-300">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-[#DDB763]">
                    CORPORATE VISION
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#DDB763]/10 border border-[#DDB763] flex items-center justify-center text-[#DDB763]">
                    <Target className="w-4 h-4" />
                  </div>
                </div>

                <h2 className="font-sans text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Our Corporate Vision
                </h2>

                <blockquote className="p-4 sm:p-6 rounded-xl bg-[#070B0E] border-l-2 border-[#DDB763] font-sans text-sm sm:text-base text-white leading-relaxed font-normal">
                  &ldquo;{COMPANY_CONFIG.vision}&rdquo;
                </blockquote>
              </div>

              <div className="pt-4 border-t border-[rgba(221,183,99,0.2)] text-xs text-white/90 font-sans leading-relaxed">
                We anchor our vision in building long-term trust, creating asset-backed value, and establishing bridges between Indian regional capability and international market demand.
              </div>
            </div>
          </GsapReveal>

          {/* Mission Panel */}
          <GsapReveal animation="fade-up" delay={0.15} duration={0.85}>
            <div className="relative h-full rounded-2xl bg-[#0B1317] border border-[rgba(221,183,99,0.3)] p-6 sm:p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col justify-between space-y-6 sm:space-y-8 hover:border-[#DDB763] transition-colors duration-300">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-[#DDB763]">
                    OPERATING MANDATE
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#DDB763]/10 border border-[#DDB763] flex items-center justify-center text-[#DDB763]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                </div>

                <h2 className="font-sans text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Our Corporate Mission
                </h2>

                <div className="space-y-2.5 pt-1">
                  {COMPANY_CONFIG.missionPoints.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white font-sans leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#DDB763] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[rgba(221,183,99,0.2)] text-xs text-white/90 font-sans leading-relaxed">
                Our mission turns vision into reality through disciplined execution, responsible resource development, and enduring strategic alliances.
              </div>
            </div>
          </GsapReveal>
        </div>
      </section>

      {/* Five Core Values Section */}
      <section className="py-14 sm:py-20 md:py-28 px-3.5 sm:px-6 lg:px-8 bg-[#0B1317] border-y border-[rgba(221,183,99,0.2)]">
        <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12">
          <SectionHeading
            badge="OUR CORE CREED"
            title="THE FIVE VALUES OF"
            highlight="KINGSPHERE"
            description="Our business philosophy is founded on strong principles of integrity, responsibility, excellence, innovation and collaboration. These values guide our decisions, shape our partnerships and define the way we conduct our business."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 font-sans">
            {CORE_VALUES.map((val, idx) => {
              const Icon = VALUE_ICONS[val.iconName] || ShieldCheck;
              return (
                <GsapReveal key={val.id} animation="fade-up" delay={(idx % 3) * 0.1} duration={0.8}>
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

                      <p className="text-xs text-white leading-relaxed font-normal">
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

      {/* Corporate Belief & Commitment Section */}
      <section className="py-14 sm:py-20 md:py-28 px-3.5 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 font-sans">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0B1317] border border-[rgba(221,183,99,0.25)] space-y-4">
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-[#DDB763]" />
              <h3 className="font-sans text-xl font-bold text-white uppercase tracking-tight">
                Our Corporate Belief
              </h3>
            </div>
            <div className="p-4 rounded-xl bg-[#070B0E] border-l-2 border-[#DDB763]">
              <div className="font-sans text-lg font-bold uppercase text-[#F8E9C6] space-y-1">
                <div>BUILDING TRUST.</div>
                <div>CREATING OPPORTUNITIES.</div>
                <div>DELIVERING VALUE.</div>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal">
              KINGSPHERE — Creating Trust • Delivering Value • Building Opportunities.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#0B1317] border border-[rgba(221,183,99,0.25)] space-y-4">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-[#DDB763]" />
              <h3 className="font-sans text-xl font-bold text-white uppercase tracking-tight">
                Our Stakeholder Commitment
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal">
              We are committed to building businesses on trust and ethical values, creating meaningful investor opportunities, developing sustainable business models, encouraging technological innovation, and contributing to infrastructure, industry and economic development across Maharashtra and India.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 px-3.5 sm:px-6 lg:px-8 bg-[#0B1317] border-t border-[rgba(221,183,99,0.2)] text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10 space-y-5">
          <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
            JOIN US IN SHAPING A RESPONSIBLE INDUSTRIAL FUTURE.
          </h2>
          <p className="text-xs sm:text-sm text-white leading-relaxed font-sans max-w-xl mx-auto font-normal">
            Discover how your enterprise can co-invest, partner, and expand with KINGSPHERE.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 pt-3">
            <Button href="/partnerships" variant="primary" size="lg" withArrow className="w-full sm:w-auto">
              INITIATE PARTNERSHIP
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="w-full sm:w-auto">
              CONTACT OUR EXECUTIVES
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
