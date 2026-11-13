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
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Vision & Mission | KINGSPHERE Corporate Purpose & Core Values',
  description:
    'Read the official vision, mission, and six core foundational values of KINGSPHERE INFRA-TECH-TRADE (OPC) PRIVATE LIMITED.',
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
        badgeIcon={<Compass className="w-3.5 h-3.5 text-[#C9A34F]" />}
        title="GUIDED BY PURPOSE."
        highlightTitle="DRIVEN BY SUSTAINABLE VALUE."
        description="Our corporate vision and mission delineate our commitment to converting emerging opportunities into durable, multi-generational economic assets."
        imageSrc="/images/kingsphere/07-vision-mission-hero.png"
        imageAlt="KINGSPHERE Corporate Purpose & Core Values"
      />

      {/* Editorial Vision & Mission Panels */}
      <section className="py-14 sm:py-20 md:py-28 px-3.5 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Vision Panel */}
          <GsapReveal animation="fade-up" delay={0} duration={0.85}>
            <div className="relative h-full rounded-[1px] bg-[#070B0E] border border-[rgba(201,163,79,0.24)] p-5 sm:p-8 md:p-12 shadow-card-dark flex flex-col justify-between space-y-6 sm:space-y-8 hover:border-[rgba(201,163,79,0.4)] transition-colors duration-300">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-sans font-medium uppercase tracking-[0.25em] text-[#C9A34F]">
                    CORPORATE VISION
                  </span>
                  <div className="w-8 h-8 rounded-[1px] bg-[rgba(201,163,79,0.08)] border border-[#C9A34F] flex items-center justify-center text-[#E8D29A]">
                    <Target className="w-4 h-4" />
                  </div>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#F3F0E9]">
                  The Long-Term Destination
                </h2>

                <blockquote className="p-4 sm:p-6 rounded-[1px] bg-[#171816] border-l-2 border-[#C9A34F] font-serif text-sm sm:text-base md:text-lg text-[#F3F0E9] leading-relaxed italic">
                  &ldquo;{COMPANY_CONFIG.vision}&rdquo;
                </blockquote>
              </div>

              <div className="pt-4 border-t border-[rgba(201,163,79,0.14)] text-xs text-white font-sans leading-relaxed">
                We anchor our vision in building long-term trust, creating asset-backed value, and establishing bridges between Indian regional capability and international market demand.
              </div>
            </div>
          </GsapReveal>

          {/* Mission Panel */}
          <GsapReveal animation="fade-up" delay={0.15} duration={0.85}>
            <div className="relative h-full rounded-[1px] bg-[#070B0E] border border-[rgba(201,163,79,0.24)] p-5 sm:p-8 md:p-12 shadow-card-dark flex flex-col justify-between space-y-6 sm:space-y-8 hover:border-[rgba(201,163,79,0.4)] transition-colors duration-300">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-sans font-medium uppercase tracking-[0.25em] text-[#C9A34F]">
                    OPERATING MANDATE
                  </span>
                  <div className="w-8 h-8 rounded-[1px] bg-[rgba(201,163,79,0.08)] border border-[#C9A34F] flex items-center justify-center text-[#E8D29A]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#F3F0E9]">
                  The Execution Mission
                </h2>

                <blockquote className="p-4 sm:p-6 rounded-[1px] bg-[#171816] border-l-2 border-[#E8D29A] font-serif text-sm sm:text-base md:text-lg text-[#F3F0E9] leading-relaxed italic">
                  &ldquo;{COMPANY_CONFIG.mission}&rdquo;
                </blockquote>
              </div>

              <div className="pt-4 border-t border-[rgba(201,163,79,0.14)] text-xs text-white font-sans leading-relaxed">
                Our mission turns intention into reality through disciplined execution, responsible resource extraction, clean energy transition, and agile joint ventures.
              </div>
            </div>
          </GsapReveal>
        </div>
      </section>

      {/* Six Core Values Section */}
      <section className="py-14 sm:py-20 md:py-28 px-3.5 sm:px-6 lg:px-8 bg-[#070B0E] border-y border-[rgba(201,163,79,0.2)]">
        <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12">
          <SectionHeading
            badge="OUR CORE CREED"
            title="THE SIX VALUES OF"
            highlight="KINGSPHERE"
            description="The foundational compass steering every business agreement, project milestone, and strategic investment."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 font-sans">
            {CORE_VALUES.map((val, idx) => {
              const Icon = VALUE_ICONS[val.iconName] || ShieldCheck;
              return (
                <GsapReveal key={val.id} animation="fade-up" delay={(idx % 3) * 0.1} duration={0.8}>
                  <GlassCard cornerAccents className="p-6 sm:p-8 space-y-3 flex flex-col justify-between h-full">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-semibold text-[#C9A34F]">
                          VALUE {val.number}
                        </span>
                        <div className="w-8 h-8 rounded-[1px] bg-[rgba(201,163,79,0.06)] border border-[rgba(201,163,79,0.2)] flex items-center justify-center text-[#E8D29A]">
                          <Icon className="w-4 h-4 text-[#C9A34F]" />
                        </div>
                      </div>

                      <h3 className="font-serif text-xl font-normal text-[#F3F0E9]">
                        {val.title}
                      </h3>

                      <div className="text-xs text-[#E8D29A] font-serif italic">
                        &ldquo;{val.tagline}&rdquo;
                      </div>

                      <p className="text-xs text-white leading-relaxed">
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

      {/* Additional Pillars: Philosophy & Sustainable Growth */}
      <section className="py-14 sm:py-20 md:py-28 px-3.5 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12">
          <SectionHeading
            badge="LONG-TERM PERSPECTIVE"
            title="SUSTAINABILITY &"
            highlight="RESPONSIBLE SCALE"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 font-sans">
            <div className="p-6 sm:p-8 rounded-[1px] bg-[#070B0E] border border-[rgba(201,163,79,0.2)] space-y-3">
              <div className="flex items-center gap-2.5">
                <Leaf className="w-5 h-5 text-[#C9A34F]" />
                <h3 className="font-serif text-xl font-normal text-[#F3F0E9]">
                  Sustainable Development Framework
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-white leading-relaxed">
                Economic development cannot come at the expense of ecological balance. We embed circular economy recovery, renewable captive energy, and environmental impact audits into our industrial ventures from day zero.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-[1px] bg-[#070B0E] border border-[rgba(201,163,79,0.2)] space-y-3">
              <div className="flex items-center gap-2.5">
                <Lightbulb className="w-5 h-5 text-[#C9A34F]" />
                <h3 className="font-serif text-xl font-normal text-[#F3F0E9]">
                  Innovation & Digital Transformation
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-white leading-relaxed">
                By embracing telemetry, digital trade clearing, enterprise workflows, and modern production automation, we build agile operations capable of competing on the international stage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 px-3.5 sm:px-6 lg:px-8 bg-[#070B0E] border-t border-[rgba(201,163,79,0.2)] text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10 space-y-5">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-[#F3F0E9] leading-tight">
            JOIN US IN SHAPING A RESPONSIBLE INDUSTRIAL FUTURE.
          </h2>
          <p className="text-xs sm:text-sm text-white leading-relaxed font-sans max-w-xl mx-auto">
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
