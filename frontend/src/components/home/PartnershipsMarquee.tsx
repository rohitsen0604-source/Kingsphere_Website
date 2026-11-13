'use client';

import React from 'react';
import Link from 'next/link';
import {
  TrendingUp,
  Factory,
  Globe,
  Ship,
  Building2,
  HardHat,
  ArrowUpRight,
  Handshake,
} from 'lucide-react';
import { PARTNERSHIP_CATEGORIES } from '@/config/partnerships';

const iconMap: Record<string, React.ElementType> = {
  TrendingUp,
  Factory,
  Globe,
  Ship,
  Building2,
  HardHat,
  default: Handshake,
};

export function PartnershipsMarquee() {
  const cards = PARTNERSHIP_CATEGORIES.slice(0, 6);
  // Duplicate for seamless 50% translation loop
  const marqueeCards = [...cards, ...cards];

  return (
    <div className="relative w-full overflow-hidden py-4">
      {/* Left and Right Fade Gradients */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#0B1317] via-[#0B1317]/80 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#0B1317] via-[#0B1317]/80 to-transparent z-10" />

      {/* Marquee Track */}
      <div className="animate-marquee-track flex gap-6 items-stretch">
        {marqueeCards.map((cat, idx) => {
          const IconComponent = iconMap[cat.iconName] || iconMap.default;

          return (
            <Link
              key={`${cat.id}-${idx}`}
              href={`/partnerships?category=${cat.id}`}
              className="group relative w-[320px] sm:w-[380px] shrink-0 p-6 rounded-2xl bg-gradient-to-b from-[#0F1A1F] to-[#0B1317] border border-[rgba(221, 183, 99,0.22)] hover:border-[#DDB763] shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_16px_40px_rgba(221, 183, 99,0.25)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between font-sans cursor-pointer"
            >
              <div className="space-y-3.5">
                {/* Header: Icon & External Link indicator */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#070B0E] border border-[rgba(221, 183, 99,0.28)] flex items-center justify-center text-[#DDB763] group-hover:scale-105 group-hover:border-[#DDB763] transition-all">
                    <IconComponent className="w-5 h-5 text-[#DDB763]" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/60 group-hover:text-[#DDB763] group-hover:bg-[#DDB763]/10 transition-colors">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Title */}
                <h4 className="font-sans text-lg font-bold text-white group-hover:text-[#F8E9C6] transition-colors line-clamp-1">
                  {cat.title}
                </h4>

                {/* Description - Plain White */}
                <p className="text-xs text-white leading-relaxed line-clamp-3 font-normal">
                  {cat.description}
                </p>
              </div>

              {/* Modes & Footer Link */}
              <div className="pt-4 mt-4 border-t border-white/10 space-y-2">
                <div className="text-[11px] text-[#F8E9C6] leading-snug">
                  <span className="font-bold text-[#DDB763]">Modes:</span>{' '}
                  {cat.collaborationModes.slice(0, 2).join(' • ')}
                  {cat.collaborationModes.length > 2 ? ` • +${cat.collaborationModes.length - 2} more` : ''}
                </div>
                <div className="flex items-center justify-between pt-1 text-[11px] font-bold text-[#DDB763] tracking-wide uppercase">
                  <span>Explore Partnership</span>
                  <span className="text-white/40 group-hover:text-[#DDB763] transition-colors">↗</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

