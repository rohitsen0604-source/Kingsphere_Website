'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
  onOpenDetails?: (sector: SectorItem) => void;
  featured?: boolean;
}

export function SectorCard({ sector, featured = false }: SectorCardProps) {
  const Icon = SECTOR_ICONS[sector.iconName] || Factory;
  const sectorHref = `/business-sectors/${sector.id}`;

  return (
    <div
      id={sector.id}
      className={`group relative rounded-2xl royal-glass overflow-hidden transition-all duration-500 ease-out hover:-translate-y-1.5 focus-within:ring-2 focus-within:ring-[#DDB763] focus-within:ring-offset-2 focus-within:ring-offset-[#070B0E] flex flex-col justify-between ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      {/* Top Image Preview with Controlled Editorial Cropping */}
      <Link href={sectorHref} className="relative block h-48 sm:h-52 w-full overflow-hidden bg-[#070B0E]">
        <Image
          src={sector.image}
          alt={sector.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.82] contrast-[1.08]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1317] via-[#0B1317]/45 to-transparent" />

        {/* Large Architectural Sector Number & Icon */}
        <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between">
          <span className="font-sans text-xl sm:text-2xl font-bold text-white tracking-wider drop-shadow-md">
            {sector.number}
          </span>
          <div className="w-8 h-8 rounded-full bg-[#070B0E]/85 border border-[rgba(221, 183, 99,0.35)] flex items-center justify-center text-[#DDB763] backdrop-blur-md group-hover:border-[#DDB763] group-hover:bg-[#DDB763]/20 transition-all duration-300">
            <Icon className="w-4 h-4 text-[#DDB763] group-hover:scale-110 transition-transform duration-300" />
          </div>
        </div>
      </Link>

      {/* Content Container */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <Link href={sectorHref} className="block">
            <h3 className="font-sans text-lg md:text-xl font-bold text-white group-hover:text-[#F8E9C6] transition-colors duration-300 leading-snug tracking-tight">
              {sector.title}
            </h3>
          </Link>
          <p className="text-xs sm:text-[13px] text-white leading-relaxed mt-2 font-sans line-clamp-3 font-normal">
            {sector.shortDescription}
          </p>
        </div>

        {/* Brands Tag if applicable */}
        {sector.brands && sector.brands.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {sector.brands.map((b, i) => (
              <span
                key={i}
                className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#DDB763]/15 text-[#F8E9C6] border border-[#DDB763]/40 font-bold tracking-wide"
              >
                ★ {b.name}
              </span>
            ))}
          </div>
        )}

        {/* Key Capabilities Preview Tags */}
        <div className="pt-2 border-t border-[rgba(221, 183, 99,0.18)]">
          <div className="flex flex-wrap gap-1.5">
            {sector.capabilities.slice(0, 2).map((cap, idx) => (
              <span
                key={idx}
                className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#0F1A1F] text-white border border-[rgba(221, 183, 99,0.2)] truncate max-w-full font-sans group-hover:border-[rgba(221, 183, 99,0.4)] transition-colors"
              >
                {cap}
              </span>
            ))}
          </div>
        </div>

        {/* Explore Button -> Proper Internal Sector Page */}
        <div className="pt-2">
          <Link
            href={sectorHref}
            className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-full bg-[#0F1A1F] border border-[rgba(221, 183, 99,0.35)] text-[11px] font-sans font-bold uppercase tracking-[0.14em] text-white hover:bg-gradient-to-r hover:from-[#FFFDF7] hover:via-[#F8E9C6] hover:to-[#DDB763] hover:text-black hover:border-transparent hover:shadow-[0_0_20px_rgba(221, 183, 99,0.4)] transition-all duration-300 group/btn"
          >
            <span>Explore Sector Details</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 ease-out group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
