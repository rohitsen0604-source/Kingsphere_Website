'use client';

import React from 'react';
import Image from 'next/image';
import { GsapReveal } from '@/components/animations/GsapReveal';
import { ChevronDown } from 'lucide-react';

interface PageHeroProps {
  badge: string;
  badgeIcon?: React.ReactNode;
  title: string;
  highlightTitle?: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  children?: React.ReactNode;
  heightClass?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  badge,
  badgeIcon,
  title,
  highlightTitle,
  description,
  imageSrc,
  imageAlt,
  children,
  heightClass = 'min-h-[50vh] sm:min-h-[58vh] md:min-h-[65vh]',
}) => {
  return (
    <section className={`relative ${heightClass} flex items-center justify-center pt-24 sm:pt-28 md:pt-32 pb-14 sm:pb-16 px-3.5 sm:px-6 lg:px-8 border-b border-[rgba(201,163,79,0.2)] overflow-hidden`}>
      {/* Background Hero Image with Cinematic Scale Entrance */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.75] contrast-[1.05] transition-transform duration-1000 ease-out hover:scale-105"
        />
        {/* Modern Ambient Overlay matching dark cyan-teal aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070B0E] via-[#070B0E]/65 to-[#070B0E]/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070B0E]/80 via-transparent to-[#070B0E]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#070B0E_90%)] opacity-40" />
      </div>

      {/* Hero Foreground Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-4 sm:space-y-5">
        <GsapReveal animation="fade-up" duration={0.7}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(221, 183, 99,0.35)] bg-[#0B151A]/90 backdrop-blur-md shadow-md">
            {badgeIcon ? badgeIcon : <span className="w-1.5 h-1.5 rounded-full bg-[#DDB763] animate-pulse" />}
            <span className="text-[9.5px] sm:text-[11px] font-sans font-bold tracking-[0.22em] sm:tracking-[0.25em] uppercase text-[#F8E9C6]">
              {badge}
            </span>
          </div>
        </GsapReveal>

        <GsapReveal animation="fade-up" delay={0.12} duration={0.85}>
          <h1 className="font-sans text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[68px] font-bold tracking-tight text-white leading-[1.12]">
            {title}{' '}
            {highlightTitle && (
              <span className="bg-gradient-to-r from-[#FFFDF7] via-[#F8E9C6] to-[#DDB763] bg-clip-text text-transparent block mt-1 font-bold">
                {highlightTitle}
              </span>
            )}
          </h1>
        </GsapReveal>

        <GsapReveal animation="fade-up" delay={0.25} duration={0.85}>
          <p className="text-xs sm:text-sm md:text-base text-white leading-relaxed max-w-2xl mx-auto font-sans font-normal drop-shadow-sm">
            {description}
          </p>
        </GsapReveal>

        {children && (
          <GsapReveal animation="fade-up" delay={0.38} duration={0.85}>
            <div className="pt-2">{children}</div>
          </GsapReveal>
        )}

        {/* Subtle Decorative Scroll Indicator */}
        <div className="pt-4 flex justify-center opacity-70 hover:opacity-100 transition-opacity">
          <div className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-[#E8D29A] font-medium font-sans">
            <span>EXPLORE</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#C9A34F] animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

