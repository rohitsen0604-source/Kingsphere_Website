import React from 'react';
import type { Metadata } from 'next';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
import { ApproachTimeline } from '@/components/sections/ApproachTimeline';
import { PageHero } from '@/components/layout/PageHero';
import { GsapReveal } from '@/components/animations/GsapReveal';
import { APPROACH_PILLARS } from '@/config/business-approach';
import { Compass, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Business Approach | Disciplined 6-Step Framework',
  description:
    'Discover the systematic 6-step lifecycle that guides KINGSPHERE from opportunity identification to sustainable enterprise growth.',
};

export default function OurApproachPage() {
  return (
    <div className="relative bg-[#070B0E] text-white min-h-screen">
      {/* Approach Hero with /images/hero/04-our-approach-hero.png */}
      <PageHero
        badge="OUR BUSINESS DEVELOPMENT APPROACH"
        badgeIcon={<Compass className="w-3.5 h-3.5 text-[#DDB763]" />}
        title="CONNECTING EXPERTISE."
        highlightTitle="BUILDING BUSINESSES. CREATING GROWTH."
        description="A diversified business and development platform bringing together industry leaders, investors, and strategic partners to drive sustainable growth and lasting opportunities."
        imageSrc="/images/kingsphere/04-our-approach-hero.png"
        imageAlt="KINGSPHERE Systematic Execution Blueprint"
      />

      {/* Business Development Ecosystem Flowchart */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#0B1317] border-b border-[rgba(221,183,99,0.2)]">
        <div className="max-w-7xl mx-auto space-y-10 text-center font-sans">
          <SectionHeading
            badge="ECOSYSTEM ARCHITECTURE"
            title="OUR BUSINESS DEVELOPMENT"
            highlight="APPROACH"
            description="KINGSPHERE functions as a high-integrity corporate platform converting ideas, assets, and capital into compounding enterprises."
            align="center"
          />

          <div className="p-8 sm:p-10 rounded-3xl bg-[#070B0E] border-2 border-[#DDB763]/40 shadow-[0_20px_50px_rgba(0,0,0,0.8)] space-y-8">
            <div className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-[#FFFDF7] via-[#F8E9C6] to-[#DDB763] text-black font-bold text-xs uppercase tracking-[0.2em] shadow-md">
              Corporate Business & Development Platform
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 pt-2">
              {[
                { title: '11 Business Verticals', desc: 'Diversified Operations' },
                { title: 'Brands & Products', desc: 'Market Reach & FMCG' },
                { title: 'Projects & Opportunities', desc: 'Execution & Contracts' },
                { title: 'Investors & Joint Ventures', desc: 'Capital & Synergies' },
                { title: 'Strategic Partnerships', desc: 'Industrial Alliances' },
                { title: 'National & Global Trade', desc: 'Cross-Border Corridors' },
              ].map((tier, tIdx) => (
                <div
                  key={tIdx}
                  className="p-4 rounded-xl bg-[#0B1317] border border-[rgba(221,183,99,0.25)] hover:border-[#DDB763] transition-all flex flex-col justify-between text-center"
                >
                  <span className="text-[10px] font-mono font-bold text-[#DDB763]">
                    0{tIdx + 1}
                  </span>
                  <div className="font-sans text-xs sm:text-sm font-bold text-white mt-1">
                    {tier.title}
                  </div>
                  <div className="text-[10px] text-white/70 mt-1">
                    {tier.desc}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 text-xs sm:text-sm font-bold text-[#F8E9C6] uppercase tracking-[0.2em]">
              Sustainable Growth • Business Expansion • Value Creation
            </div>
          </div>
        </div>
      </section>

      {/* 6-Step Interactive Timeline Section */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <SectionHeading
            badge="THE 6-PHASE JOURNEY"
            title="METHODICAL"
            highlight="EXECUTION LIFECYCLE"
            description="Explore each phase of our collaborative development process."
            align="center"
          />

          <ApproachTimeline interactive={true} />
        </div>
      </section>

      {/* Additional Pillars Section */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#070B0E] border-y border-[rgba(201,163,79,0.2)]">
        <div className="max-w-7xl mx-auto space-y-12">
          <SectionHeading
            badge="ARCHITECTURAL FOUNDATION"
            title="HOW WE GOVERN"
            highlight="EVERY VENTURE"
            description="Our approach is anchored in proven institutional disciplines that protect capital and maximize execution certainty."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
            {APPROACH_PILLARS.map((pillar, idx) => (
              <GsapReveal key={idx} animation="fade-up" delay={idx * 0.1} duration={0.8}>
                <GlassCard cornerAccents className="p-8 space-y-4 h-full">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#C9A34F] font-semibold">
                      PILLAR 0{idx + 1}
                    </span>
                    <div className="w-8 h-8 rounded-[1px] bg-[rgba(201,163,79,0.06)] border border-[rgba(201,163,79,0.2)] flex items-center justify-center text-[#E8D29A]">
                      <Shield className="w-4 h-4 text-[#C9A34F]" />
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-normal text-[#F3F0E9]">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white leading-relaxed">
                    {pillar.content}
                  </p>
                </GlassCard>
              </GsapReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10 space-y-5">
          <span className="text-[10px] font-sans font-medium uppercase tracking-[0.25em] text-[#C9A34F]">
            TAKE THE FIRST STEP
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#F3F0E9]">
            HAVE AN OPPORTUNITY REQUIRING STRATEGY & EXECUTION?
          </h2>
          <p className="text-xs sm:text-sm text-white leading-relaxed font-sans max-w-xl mx-auto">
            Let us review your market opportunity or asset proposal through our Phase 01 discovery framework.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-3 w-full sm:w-auto max-w-md mx-auto">
            <Button href="/partnerships" variant="primary" size="lg" withArrow className="w-full sm:w-auto text-center justify-center">
              SUBMIT AN OPPORTUNITY
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="w-full sm:w-auto text-center justify-center">
              SCHEDULE A DISCUSSION
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
