import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { PARTNERSHIP_CATEGORIES } from '@/config/partnerships';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { PageHero } from '@/components/layout/PageHero';
import { GsapReveal } from '@/components/animations/GsapReveal';
import { PartnershipForm } from '@/components/forms/PartnershipForm';
import { Button } from '@/components/ui/Button';
import {
  Handshake,
  TrendingUp,
  Factory,
  Globe,
  Ship,
  Building2,
  HardHat,
  Landmark,
  Layers,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Strategic Partnerships | Building Stronger Partnerships',
  description:
    'Explore partnership categories, joint venture frameworks, and submit formal partnership inquiries to KINGSPHERE.',
};

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  TrendingUp,
  Factory,
  Globe,
  Ship,
  Building2,
  HardHat,
  Landmark,
  Handshake,
  Layers,
};

export default function PartnershipsPage() {
  return (
    <div className="relative bg-[#080909] text-[#F3F0E9] min-h-screen">
      {/* 1. Partnerships Hero with /images/hero/06-partnerships-hero.png */}
      <PageHero
        badge="STRATEGIC ALLIANCES & CAPITAL SYNDICATION"
        badgeIcon={<Handshake className="w-3.5 h-3.5 text-[#C9A34F]" />}
        title="BUILDING STRONGER PARTNERSHIPS."
        highlightTitle="CREATING GREATER OPPORTUNITIES."
        description="We structure win-win collaborative vehicles, joint ventures, and consortiums uniting institutional capital, technology leaders, and regional market execution."
        imageSrc="/images/kingsphere/06-partnerships-hero.png"
        imageAlt="KINGSPHERE Strategic Alliances & Partnerships"
      />

      {/* 2. Our Partnership Philosophy */}
      <section className="py-14 sm:py-20 md:py-24 px-3.5 sm:px-6 lg:px-8 bg-[#101111]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          <div className="lg:col-span-6 space-y-4 sm:space-y-5 font-sans">
            <SectionHeading
              badge="COLLABORATIVE ETHOS"
              title="OUR PARTNERSHIP"
              highlight="PHILOSOPHY"
              align="left"
              className="mb-4"
            />
            <p className="text-xs sm:text-sm text-[#A5A39C] leading-relaxed">
              We believe the scale of India’s economic transformation cannot be achieved in isolation. Durable growth is born from aligned interests, clear contractual frameworks, and shared accountability.
            </p>
            <p className="text-xs sm:text-sm text-[#A5A39C] leading-relaxed">
              Whether establishing an equity-based Special Purpose Vehicle (SPV), an OEM contract manufacturing agreement, or an international import-export corridor, we prioritize transparent governance, mutual respect, and long-term asset value.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 font-sans">
            <div className="p-4 sm:p-5 rounded-[1px] bg-[#171816] border border-[rgba(201,163,79,0.18)] space-y-2">
              <ShieldCheck className="w-4 h-4 text-[#C9A34F]" />
              <h4 className="font-serif text-base font-normal text-[#F3F0E9]">
                Fiduciary Integrity
              </h4>
              <p className="text-xs text-[#A5A39C] leading-relaxed">
                Stringent statutory compliance, ethical reporting, and transparent capital accounting across all ventures.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-[1px] bg-[#171816] border border-[rgba(201,163,79,0.18)] space-y-2">
              <TrendingUp className="w-4 h-4 text-[#C9A34F]" />
              <h4 className="font-serif text-base font-normal text-[#F3F0E9]">
                Shared Value Creation
              </h4>
              <p className="text-xs text-[#A5A39C] leading-relaxed">
                Incentive structures designed to ensure that both KINGSPHERE and our partners harvest sustainable, compounding returns.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-[1px] bg-[#171816] border border-[rgba(201,163,79,0.18)] space-y-2">
              <Handshake className="w-4 h-4 text-[#C9A34F]" />
              <h4 className="font-serif text-base font-normal text-[#F3F0E9]">
                Long-Term Horizon
              </h4>
              <p className="text-xs text-[#A5A39C] leading-relaxed">
                We cultivate relationships intended to survive market cycles and create lasting multi-decade industrial footprints.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-[1px] bg-[#171816] border border-[rgba(201,163,79,0.18)] space-y-2">
              <Layers className="w-4 h-4 text-[#C9A34F]" />
              <h4 className="font-serif text-base font-normal text-[#F3F0E9]">
                Operational Agility
              </h4>
              <p className="text-xs text-[#A5A39C] leading-relaxed">
                Direct access to our senior leadership for agile decision-making, swift problem-solving, and timely execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Partnership Categories */}
      <section className="py-14 sm:py-20 md:py-28 px-3.5 sm:px-6 lg:px-8 border-y border-[rgba(201,163,79,0.2)]">
        <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12">
          <SectionHeading
            badge="PORTFOLIO ALLIANCES"
            title="STRATEGIC"
            highlight="PARTNER CATEGORIES"
            description="We welcome collaboration with enterprises across nine specialized institutional profiles."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 font-sans">
            {PARTNERSHIP_CATEGORIES.map((cat, idx) => {
              const Icon = CATEGORY_ICONS[cat.iconName] || Handshake;
              return (
                <GsapReveal key={cat.id} animation="fade-up" delay={(idx % 3) * 0.1} duration={0.8}>
                  <GlassCard cornerAccents className="p-5 sm:p-6 md:p-8 space-y-4 flex flex-col justify-between h-full">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="w-8 h-8 rounded-[1px] bg-[rgba(201,163,79,0.06)] border border-[rgba(201,163,79,0.2)] flex items-center justify-center text-[#E8D29A]">
                          <Icon className="w-4 h-4 text-[#C9A34F]" />
                        </div>
                        <span className="text-[10px] font-mono text-[#C9A34F] uppercase tracking-wider">
                          Active Profile
                        </span>
                      </div>

                      <h3 className="font-serif text-lg font-normal text-[#F3F0E9]">
                        {cat.title}
                      </h3>

                      <p className="text-xs text-[#A5A39C] leading-relaxed">
                        {cat.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[rgba(201,163,79,0.12)] space-y-1.5">
                      <div className="text-[10px] uppercase font-medium tracking-wider text-[#E8D29A]">
                        Collaboration Formats:
                      </div>
                      <ul className="space-y-1 text-xs text-[#A5A39C]">
                        {cat.collaborationModes.map((mode, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3 h-3 text-[#C9A34F] shrink-0" />
                            <span>{mode}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </GlassCard>
                </GsapReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Strategic Alliances, 5. Joint Ventures & 6. Business Collaboration */}
      <section className="py-14 sm:py-20 md:py-24 px-3.5 sm:px-6 lg:px-8 bg-[#101111]">
        <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12">
          <SectionHeading
            badge="ENGAGEMENT STRUCTURES"
            title="JOINT VENTURES &"
            highlight="STRATEGIC ALLIANCES"
            description="Proven engagement vehicles designed to align incentives and protect corporate stakeholders."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 font-sans">
            <div className="p-5 sm:p-7 rounded-[1px] bg-[#171816] border border-[rgba(201,163,79,0.2)] space-y-3">
              <span className="font-mono text-xs font-semibold text-[#C9A34F]">VEHICLE 01</span>
              <h3 className="font-serif text-xl font-normal text-[#F3F0E9]">
                Equity Joint Ventures (SPVs)
              </h3>
              <p className="text-xs text-[#A5A39C] leading-relaxed">
                Formation of dedicated Special Purpose Vehicles (SPV) under Indian corporate law for specific industrial parks, captive solar farms, or real estate developments with ring-fenced balance sheets and clear exit pathways.
              </p>
            </div>

            <div className="p-5 sm:p-7 rounded-[1px] bg-[#171816] border border-[rgba(201,163,79,0.2)] space-y-3">
              <span className="font-mono text-xs font-semibold text-[#C9A34F]">VEHICLE 02</span>
              <h3 className="font-serif text-xl font-normal text-[#F3F0E9]">
                Contract Manufacturing & Sourcing
              </h3>
              <p className="text-xs text-[#A5A39C] leading-relaxed">
                Master supply and contract assembly agreements where KINGSPHERE provides regional facility orchestration, supplier vetting, and quality compliance while partners provide technical blueprints and guaranteed off-take.
              </p>
            </div>

            <div className="p-5 sm:p-7 rounded-[1px] bg-[#171816] border border-[rgba(201,163,79,0.2)] space-y-3">
              <span className="font-mono text-xs font-semibold text-[#C9A34F]">VEHICLE 03</span>
              <h3 className="font-serif text-xl font-normal text-[#F3F0E9]">
                Public-Private Consortia (PPP)
              </h3>
              <p className="text-xs text-[#A5A39C] leading-relaxed">
                Consortium bidding frameworks for state and national infrastructure tenders, combining our grounded regional relationships and site mobilization with our partners’ technical pre-qualifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Partnership Enquiry Form */}
      <section id="enquiry" className="py-14 sm:py-20 md:py-28 px-3.5 sm:px-6 lg:px-8 border-t border-[rgba(201,163,79,0.2)]">
        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-10">
          <SectionHeading
            badge="INITIATE DIALOGUE"
            title="PROPOSE A"
            highlight="STRATEGIC ALLIANCE"
            description="Our corporate development team reviews partnership proposals with utmost confidentiality and commercial diligence."
            align="center"
          />

          <PartnershipForm />
        </div>
      </section>
    </div>
  );
}
