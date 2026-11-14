'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BUSINESS_SECTORS, SectorItem } from '@/config/sectors';
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
  ChevronLeft,
  ChevronRight,
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

export function SectorsCoverFlow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const total = BUSINESS_SECTORS.length;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Autoplay functionality (pauses on hover)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext]);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
    touchStartX.current = null;
  };

  // Helper to compute circular distance (-5 to +5 for 11 items)
  const getOffset = (index: number) => {
    let diff = index - activeIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <div
      className="relative w-full py-6 sm:py-10 select-none overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* 3D Perspective Stage */}
      <div
        className="relative h-[530px] sm:h-[570px] md:h-[620px] w-full flex items-center justify-center"
        style={{ perspective: '1200px' }}
      >
        {BUSINESS_SECTORS.map((sector, idx) => {
          const offset = getOffset(idx);
          const isCenter = offset === 0;
          const isVisible = Math.abs(offset) <= 3;

          if (!isVisible) return null;

          const Icon = SECTOR_ICONS[sector.iconName] || Factory;

          const zIndex = 30 - Math.abs(offset) * 5;
          const opacity = isCenter
            ? 1
            : Math.abs(offset) === 1
            ? 0.7
            : Math.abs(offset) === 2
            ? 0.35
            : 0.15;

          const rotation = isCenter ? 0 : offset > 0 ? -28 : 28;
          const scale = isCenter ? (isMobile ? 1.04 : 1.1) : Math.max(0.65, 0.9 - Math.abs(offset) * 0.13);

          // Horizontal spacing adjusted for screen sizes
          const xOffsetMultiplier = isMobile ? 190 : 275;
          const translateX = offset * xOffsetMultiplier;

          return (
            <div
              key={sector.id}
              onClick={() => {
                if (!isCenter) setActiveIndex(idx);
              }}
              style={{
                zIndex,
                transform: `translate(-50%, -50%) translateX(${translateX}px) scale(${scale}) rotateY(${rotation}deg)`,
                opacity,
              }}
              className={`absolute top-1/2 left-1/2 w-[280px] sm:w-[325px] md:w-[360px] h-[430px] sm:h-[465px] md:h-[495px] rounded-[24px] transition-all duration-600 ease-out cursor-pointer flex flex-col justify-between overflow-hidden ${
                isCenter
                  ? 'border-2 border-[#DDB763] shadow-[0_0_55px_rgba(221, 183, 99,0.35),0_20px_50px_rgba(0,0,0,0.7)] bg-[#0B1317]'
                  : 'border border-white/15 bg-[#070B0E]/90 hover:border-[#DDB763]/50'
              }`}
            >
              {/* Card Background Photography with Luxury Dark Gradient */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={sector.image}
                  alt={sector.title}
                  fill
                  priority={isCenter}
                  className={`object-cover object-center filter transition-transform duration-700 ease-out ${
                    isCenter ? 'brightness-[0.78] contrast-[1.1] scale-105' : 'brightness-[0.45] contrast-[1.05]'
                  }`}
                  sizes="350px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070B0E] via-[#070B0E]/75 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#070B0E]/60 via-transparent to-[#070B0E]/90" />
                {isCenter && (
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(221, 183, 99,0.2)_0%,transparent_70%)]" />
                )}
              </div>

              {/* Top Card Badge: Sector Number & Icon */}
              <div className="relative z-10 p-5 sm:p-6 flex items-center justify-between">
                <span className="font-sans text-lg sm:text-xl font-bold text-white">
                  {sector.number}
                </span>
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 ${
                    isCenter
                      ? 'bg-[#070B0E]/85 border-[#DDB763]/60 shadow-[0_0_15px_rgba(221, 183, 99,0.35)]'
                      : 'bg-[#070B0E]/60 border-white/15'
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 ${
                      isCenter ? 'text-[#DDB763]' : 'text-white/60'
                    }`}
                  />
                </div>
              </div>

              {/* Bottom Card Content & Action */}
              <div className="relative z-10 p-5 sm:p-6 text-center space-y-3.5">
                {/* Category Pill / Tag */}
                <div className="text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-[0.2em] text-[#DDB763]">
                  {sector.category}
                </div>

                {/* Main Title - Modern Geometric Bold */}
                <h3 className="font-sans text-lg sm:text-xl md:text-[22px] font-bold leading-snug text-white tracking-tight">
                  {sector.title}
                </h3>

                {/* Short Description - Plain White */}
                <p className="text-xs text-white font-sans leading-relaxed line-clamp-2 px-1 font-normal">
                  {sector.shortDescription}
                </p>

                {/* Brands Tag if applicable */}
                {isCenter && sector.brands && sector.brands.length > 0 && (
                  <div className="flex flex-wrap items-center justify-center gap-1.5 pt-0.5">
                    {sector.brands.map((b, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#DDB763]/20 text-[#F8E9C6] border border-[#DDB763]/50 font-bold tracking-wide"
                      >
                        ★ {b.name}
                      </span>
                    ))}
                  </div>
                )}

                {/* Bottom CTA Button */}
                <div className="pt-2">
                  {isCenter ? (
                    <Link
                      href={`/business-sectors/${sector.id}`}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-white text-black font-sans font-bold text-xs uppercase tracking-wider shadow-[0_4px_20px_rgba(255,255,255,0.25)] hover:bg-[#F8E9C6] hover:shadow-[0_0_25px_rgba(221,183,99,0.5)] active:scale-[0.98] transition-all duration-300 group/btn"
                    >
                      <span>EXPLORE SECTOR DETAILS</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </Link>
                  ) : (
                    <div className="w-full py-2.5 px-4 rounded-full border border-white/20 text-[11px] font-sans uppercase tracking-wider text-white/70 text-center">
                      CLICK TO VIEW
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}

        {/* Circular Prev & Next Buttons (Left & Right - Centered Vertically with Cards) */}
        <button
          onClick={handlePrev}
          aria-label="Previous sector"
          className="absolute left-2 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0B0E16]/90 border border-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-[#D4AF5A] hover:border-[#D4AF5A] hover:text-[#06070B] shadow-[0_8px_25px_rgba(0,0,0,0.8)] active:scale-95 transition-all duration-300"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={handleNext}
          aria-label="Next sector"
          className="absolute right-2 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0B0E16]/90 border border-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-[#D4AF5A] hover:border-[#D4AF5A] hover:text-[#06070B] shadow-[0_8px_25px_rgba(0,0,0,0.8)] active:scale-95 transition-all duration-300"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Bottom Pagination Dots for All 11 Sectors */}
      <div className="flex items-center justify-center gap-2 pt-6 sm:pt-8">
        {BUSINESS_SECTORS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            aria-label={`Go to sector ${idx + 1}`}
            className={`transition-all duration-300 rounded-full ${
              activeIndex === idx
                ? 'w-6 h-2 bg-[#D4AF5A] shadow-[0_0_10px_#D4AF5A]'
                : 'w-2 h-2 bg-white/20 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
