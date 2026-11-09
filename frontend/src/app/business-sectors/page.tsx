'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { BUSINESS_SECTORS, SectorItem } from '@/config/sectors';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SectorCard } from '@/components/sectors/SectorCard';
import { SectorDetailModal } from '@/components/sectors/SectorDetailModal';
import { PageHero } from '@/components/layout/PageHero';
import { GsapReveal } from '@/components/animations/GsapReveal';
import { Button } from '@/components/ui/Button';
import { Layers, ArrowUpRight } from 'lucide-react';

export default function BusinessSectorsPage() {
  const [selectedSector, setSelectedSector] = useState<SectorItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<'all' | 'industrial' | 'trade' | 'resources' | 'services'>('all');

  const filteredSectors = BUSINESS_SECTORS.filter((sector) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'industrial') {
      return ['manufacturing-industrial', 'infrastructure-construction', 'energy-sustainable-solutions'].includes(sector.id);
    }
    if (activeCategory === 'trade') {
      return ['international-trade', 'consumer-goods-commercial', 'technology-digital'].includes(sector.id);
    }
    if (activeCategory === 'resources') {
      return ['mining-natural-resources', 'recycling-circular-economy'].includes(sector.id);
    }
    if (activeCategory === 'services') {
      return ['consultancy-business-recovery', 'projects-services', 'strategic-investment-jv'].includes(sector.id);
    }
    return true;
  });

  return (
    <div className="relative bg-[#080909] text-[#F3F0E9] min-h-screen">
      {/* Editorial Hero Header with /images/hero/03-business-sectors-hero.png */}
      <PageHero
        badge="11 DIVERSIFIED BUSINESS SECTORS"
        badgeIcon={<Layers className="w-3.5 h-3.5 text-[#C9A34F]" />}
        title="DIVERSIFIED SECTORS."
        highlightTitle="UNIFIED OPPORTUNITIES."
        description="Exploring opportunities across industries, infrastructure, trade, technology, resources, and sustainable business development."
        imageSrc="/images/kingsphere/03-business-sectors-hero.png"
        imageAlt="KINGSPHERE 11 Diversified Business Sectors"
      >
        {/* Minimalist Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 pt-4 font-sans">
          <button
            onClick={() => setActiveCategory('all')}
            className={`min-h-[38px] sm:min-h-[40px] px-3.5 sm:px-4 py-2 rounded-[1px] text-[11px] font-medium uppercase tracking-[0.12em] transition-all border ${
              activeCategory === 'all'
                ? 'bg-[#C9A34F] text-[#080909] border-[#C9A34F] font-semibold'
                : 'bg-[#101111]/85 text-[#A5A39C] border-[rgba(201,163,79,0.25)] hover:text-[#E8D29A]'
            }`}
          >
            All 11 Sectors
          </button>
          <button
            onClick={() => setActiveCategory('industrial')}
            className={`min-h-[38px] sm:min-h-[40px] px-3.5 sm:px-4 py-2 rounded-[1px] text-[11px] font-medium uppercase tracking-[0.12em] transition-all border ${
              activeCategory === 'industrial'
                ? 'bg-[#C9A34F] text-[#080909] border-[#C9A34F] font-semibold'
                : 'bg-[#101111]/85 text-[#A5A39C] border-[rgba(201,163,79,0.25)] hover:text-[#E8D29A]'
            }`}
          >
            Industrial & Infra
          </button>
          <button
            onClick={() => setActiveCategory('trade')}
            className={`min-h-[38px] sm:min-h-[40px] px-3.5 sm:px-4 py-2 rounded-[1px] text-[11px] font-medium uppercase tracking-[0.12em] transition-all border ${
              activeCategory === 'trade'
                ? 'bg-[#C9A34F] text-[#080909] border-[#C9A34F] font-semibold'
                : 'bg-[#101111]/85 text-[#A5A39C] border-[rgba(201,163,79,0.25)] hover:text-[#E8D29A]'
            }`}
          >
            Trade & Tech
          </button>
          <button
            onClick={() => setActiveCategory('resources')}
            className={`min-h-[38px] sm:min-h-[40px] px-3.5 sm:px-4 py-2 rounded-[1px] text-[11px] font-medium uppercase tracking-[0.12em] transition-all border ${
              activeCategory === 'resources'
                ? 'bg-[#C9A34F] text-[#080909] border-[#C9A34F] font-semibold'
                : 'bg-[#101111]/85 text-[#A5A39C] border-[rgba(201,163,79,0.25)] hover:text-[#E8D29A]'
            }`}
          >
            Mining & Circular
          </button>
          <button
            onClick={() => setActiveCategory('services')}
            className={`min-h-[38px] sm:min-h-[40px] px-3.5 sm:px-4 py-2 rounded-[1px] text-[11px] font-medium uppercase tracking-[0.12em] transition-all border ${
              activeCategory === 'services'
                ? 'bg-[#C9A34F] text-[#080909] border-[#C9A34F] font-semibold'
                : 'bg-[#101111]/85 text-[#A5A39C] border-[rgba(201,163,79,0.25)] hover:text-[#E8D29A]'
            }`}
          >
            Services & JVs
          </button>
        </div>
      </PageHero>

      {/* Editorial Sector Grid Showcase */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex items-center justify-between border-b border-[rgba(201,163,79,0.16)] pb-4 font-sans text-xs">
            <div className="text-[#A5A39C]">
              Showing <span className="font-semibold text-[#E8D29A]">{filteredSectors.length}</span> of 11 sectors
            </div>
            <div className="text-[#C9A34F]">
              Click any sector to examine capabilities and opportunities
            </div>
          </div>

          {/* Varied Editorial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSectors.map((sector, idx) => (
              <GsapReveal
                key={sector.id}
                animation="fade-up"
                delay={(idx % 3) * 0.1}
                duration={0.8}
                className={activeCategory === 'all' && (idx === 0 || idx === 1) ? 'md:col-span-2' : ''}
              >
                <SectorCard
                  sector={sector}
                  onOpenDetails={(s) => setSelectedSector(s)}
                  featured={activeCategory === 'all' && (idx === 0 || idx === 1)}
                />
              </GsapReveal>
            ))}
          </div>

          {/* Bottom Collaboration Banner */}
          <div className="p-8 sm:p-12 rounded-[1px] bg-[#101111] border border-[rgba(201,163,79,0.24)] shadow-card-dark text-center space-y-5">
            <span className="text-[10px] font-sans font-medium uppercase tracking-[0.25em] text-[#C9A34F]">
              CO-VENTURE & SOURCING
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#F3F0E9]">
              Have a Project or Requirement in One of These Sectors?
            </h2>
            <p className="text-xs sm:text-sm text-[#A5A39C] max-w-xl mx-auto leading-relaxed font-sans">
              We structure contract manufacturing alliances, joint venture equity participations, bulk supply agreements, and turnkey project development across all 11 sectors.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 w-full sm:w-auto max-w-md mx-auto">
              <Button href="/partnerships" variant="primary" size="lg" withArrow className="w-full sm:w-auto text-center justify-center">
                SUBMIT PARTNERSHIP INQUIRY
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="w-full sm:w-auto text-center justify-center">
                CONTACT SECTOR LEADS
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for detailed sector information */}
      <SectorDetailModal
        sector={selectedSector}
        onClose={() => setSelectedSector(null)}
      />
    </div>
  );
}
