'use client';

import React from 'react';
import Image from 'next/image';
import { SectorItem } from '@/config/sectors';
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
  ArrowUpRight,
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

interface SectorCardProps {
  sector: SectorItem;
  onOpenDetails: (sector: SectorItem) => void;
  featured?: boolean;
}

export function SectorCard({ sector, onOpenDetails, featured = false }: SectorCardProps) {
  const Icon = SECTOR_ICONS[sector.iconName] || Factory;

  return (
    <div
      id={sector.id}
      className={`group relative rounded-[1px] bg-[#101111] border border-[rgba(201,163,79,0.18)] overflow-hidden transition-all duration-500 ease-out hover:border-[#C9A34F] hover:bg-[#141615] hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(0,0,0,0.85),0_0_24px_rgba(201,163,79,0.18)] focus-within:ring-2 focus-within:ring-[#C9A34F] focus-within:ring-offset-2 focus-within:ring-offset-[#080909] flex flex-col justify-between ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      {/* Top Image Preview with Controlled Editorial Cropping */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#080909]">
        <Image
          src={sector.image}
          alt={sector.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-108 filter brightness-[0.7] contrast-[1.15]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101111] via-[#101111]/50 to-transparent" />

        {/* Large Architectural Sector Number & Icon */}
        <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between">
          <span className="font-serif text-xl sm:text-2xl font-light text-[#E8D29A] tracking-wider drop-shadow-md">
            {sector.number}
          </span>
          <div className="w-8 h-8 rounded-[1px] bg-[#080909]/80 border border-[rgba(201,163,79,0.25)] flex items-center justify-center text-[#E8D29A] backdrop-blur-sm group-hover:border-[#C9A34F] group-hover:bg-[#C9A34F]/15 transition-all duration-300">
            <Icon className="w-4 h-4 text-[#C9A34F] group-hover:text-[#E8D29A] group-hover:scale-110 transition-transform duration-300" />
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="font-serif text-lg md:text-xl font-normal text-[#F3F0E9] group-hover:text-[#E8D29A] transition-colors duration-300 leading-snug">
            {sector.title}
          </h3>
          <p className="text-xs sm:text-[13px] text-[#A5A39C] leading-relaxed mt-2 font-sans line-clamp-3">
            {sector.shortDescription}
          </p>
        </div>

        {/* Key Capabilities Preview Tags */}
        <div className="pt-2 border-t border-[rgba(201,163,79,0.12)]">
          <div className="flex flex-wrap gap-1.5">
            {sector.capabilities.slice(0, 2).map((cap, idx) => (
              <span
                key={idx}
                className="text-[10px] px-2 py-0.5 rounded-[1px] bg-[#171816] text-[#A5A39C] border border-[rgba(201,163,79,0.14)] truncate max-w-full font-sans group-hover:border-[rgba(201,163,79,0.25)] transition-colors"
              >
                {cap}
              </span>
            ))}
          </div>
        </div>

        {/* Explore Button */}
        <div className="pt-2">
          <button
            onClick={() => onOpenDetails(sector)}
            className="w-full inline-flex items-center justify-between px-3.5 py-2.5 rounded-[1px] bg-[#171816] border border-[rgba(201,163,79,0.22)] text-[11px] font-sans font-medium uppercase tracking-[0.14em] text-[#E8D29A] hover:bg-gradient-to-r hover:from-[#E8D29A] hover:via-[#C9A34F] hover:to-[#A77D32] hover:text-[#080909] hover:border-[#C9A34F] hover:shadow-[0_0_16px_rgba(201,163,79,0.35)] transition-all duration-300 group/btn"
          >
            <span>Explore Scope</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 ease-out group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
