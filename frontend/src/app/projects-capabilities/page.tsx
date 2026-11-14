import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { CAPABILITY_DOMAINS } from '@/config/capabilities';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PageHero } from '@/components/layout/PageHero';
import { GsapReveal } from '@/components/animations/GsapReveal';
import { Button } from '@/components/ui/Button';
import {
  Hammer,
  CheckCircle2,
  Boxes,
  Sparkles,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Projects & Capabilities | KINGSPHERE Corporate Execution Scope',
  description:
    'Explore KINGSPHERE’s operational execution scope across civil infrastructure, industrial real estate, manufacturing, energy, and supply procurement.',
};

export default function ProjectsCapabilitiesPage() {
  return (
    <div className="relative bg-[#070B0E] text-white min-h-screen">
      {/* 1. Capabilities Hero with /images/hero/05-projects-capabilities-hero.png */}
      <PageHero
        badge="11 BUSINESS VERTICALS • OPERATIONAL CAPACITY"
        badgeIcon={<Hammer className="w-3.5 h-3.5 text-[#DDB763]" />}
        title="TURNING STRATEGY INTO"
        highlightTitle="DISCIPLINED EXECUTION."
        description="A comprehensive overview of our physical capabilities, equipment alliances, technical management scope, and development opportunities across all 11 business verticals."
        imageSrc="/images/kingsphere/05-projects-capabilities-hero.png"
        imageAlt="KINGSPHERE Projects & Capabilities Scope"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#070B0E]/80 border border-[#DDB763]/30 text-xs text-[#F8E9C6] font-sans">
          <Sparkles className="w-3.5 h-3.5 text-[#DDB763]" />
          <span>CREATING TRUST • DELIVERING VALUE • BUILDING OPPORTUNITIES</span>
        </div>
      </PageHero>

      {/* Capabilities Domain Sections (Asymmetric Industrial Portfolio Layout) */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          <SectionHeading
            badge="PORTFOLIO CAPABILITIES"
            title="11 BUSINESS VERTICALS"
            highlight="EXECUTION SCOPE"
            description="Detailed breakdown of operational scope, equipment assets, proprietary brands, and active opportunity vectors."
            align="center"
          />

          <div className="space-y-12">
            {CAPABILITY_DOMAINS.map((domain, index) => {
              const isEven = index % 2 === 0;
              return (
                <GsapReveal key={domain.id} animation="fade-up" duration={0.85}>
                  <div
                    id={domain.id}
                    className="group rounded-2xl bg-[#0B1317] border border-[rgba(221,183,99,0.25)] shadow-[0_15px_40px_rgba(0,0,0,0.6)] overflow-hidden p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:border-[#DDB763]"
                  >
                    <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                      {/* Visual Container */}
                      <div className="lg:col-span-5 relative">
                        <div className="relative h-64 sm:h-80 w-full rounded-xl overflow-hidden border border-[rgba(221,183,99,0.25)]">
                          <Image
                            src={domain.image}
                            alt={domain.title}
                            fill
                            className="object-cover filter brightness-[0.8] contrast-[1.1] transition-transform duration-700 ease-out group-hover:scale-105"
                            sizes="(max-width: 1024px) 100vw, 40vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#070B0E] via-transparent to-transparent opacity-80" />
                          <div className="absolute top-4 left-4">
                            <span className="font-sans text-[11px] px-3 py-1 rounded-full bg-[#070B0E]/90 border border-[#DDB763] text-[#F8E9C6] font-bold uppercase tracking-wider">
                              {domain.category}
                            </span>
                          </div>
                        </div>
                      </div>

                    {/* Content Container */}
                    <div className="lg:col-span-7 space-y-5">
                      <div>
                        <div className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-[#DDB763]">
                          BUSINESS VERTICAL {index < 9 ? `0${index + 1}` : index + 1}
                        </div>
                        <h3 className="font-sans text-2xl sm:text-3xl font-bold text-white mt-1 tracking-tight">
                          {domain.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-white leading-relaxed mt-2 font-sans font-normal">
                          {domain.summary}
                        </p>
                      </div>

                      {/* Proprietary Brands Badge if available */}
                      {domain.brands && domain.brands.length > 0 && (
                        <div className="p-3.5 rounded-xl bg-[#070B0E] border border-[#DDB763]/40 flex flex-wrap items-center gap-3">
                          <span className="text-[10px] uppercase font-bold text-[#DDB763] tracking-widest">
                            PROPRIETARY BRANDS:
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {domain.brands.map((b, bIdx) => (
                              <span
                                key={bIdx}
                                className="text-xs px-3 py-1 rounded-full bg-[#DDB763]/15 text-white border border-[#DDB763]/50 font-bold"
                              >
                                ★ {b.name} <span className="text-[#F8E9C6] font-normal">({b.category})</span>
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1 font-sans">
                        {/* Operational Scope */}
                        <div className="p-4 rounded-xl bg-[#070B0E] border border-[rgba(221,183,99,0.2)] space-y-2">
                          <div className="text-[11px] font-bold uppercase tracking-wider text-[#F8E9C6]">
                            Operational Scope
                          </div>
                          <ul className="space-y-1.5 text-xs text-white">
                            {domain.operationalScope.map((scope, i) => (
                              <li key={i} className="flex items-start gap-1.5 leading-relaxed font-normal">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#DDB763] shrink-0 mt-0.5" />
                                <span>{scope}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Equipment & Alliances */}
                        <div className="p-4 rounded-xl bg-[#070B0E] border border-[rgba(221,183,99,0.2)] space-y-2">
                          <div className="text-[11px] font-bold uppercase tracking-wider text-[#F8E9C6]">
                            Assets & Alliances
                          </div>
                          <ul className="space-y-1.5 text-xs text-white">
                            {domain.equipmentAndAssets.map((asset, i) => (
                              <li key={i} className="flex items-start gap-1.5 leading-relaxed font-normal">
                                <Boxes className="w-3.5 h-3.5 text-[#DDB763] shrink-0 mt-0.5" />
                                <span>{asset}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Opportunities & Sector Detail Link */}
                      <div className="pt-2 font-sans space-y-4">
                        <div>
                          <div className="text-[10px] uppercase font-bold tracking-wider text-[#DDB763] mb-1.5">
                            Development Vectors:
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {domain.opportunityVectors.map((opp, i) => (
                              <span
                                key={i}
                                className="text-[11px] px-2.5 py-1 rounded-full bg-[#070B0E] border border-[rgba(221,183,99,0.25)] text-white font-normal"
                              >
                                {opp}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="pt-1">
                          <Button href={`/business-sectors/${domain.id}`} variant="secondary" size="sm" withArrow>
                            VIEW FULL VERTICAL PROFILE
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </GsapReveal>
            );
          })}
          </div>
        </div>
      </section>

      {/* Collaboration CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#070B0E] border-t border-[rgba(201,163,79,0.2)] text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10 space-y-5">
          <span className="text-[10px] font-sans font-medium uppercase tracking-[0.25em] text-[#C9A34F]">
            DEPLOY CAPABILITIES WITH US
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#F3F0E9]">
            SEEKING EXECUTION PARTNERS IN MAHARASHTRA OR PAN-INDIA?
          </h2>
          <p className="text-xs sm:text-sm text-white leading-relaxed font-sans max-w-xl mx-auto">
            We collaborate with project owners, general contractors, equipment suppliers, and institutional investors to execute projects with engineering discipline.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-3 w-full sm:w-auto max-w-md mx-auto">
            <Button href="/partnerships" variant="primary" size="lg" withArrow className="w-full sm:w-auto text-center justify-center">
              INITIATE CAPABILITY ALLIANCE
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="w-full sm:w-auto text-center justify-center">
              CONTACT OUR OPERATIONS TEAM
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
