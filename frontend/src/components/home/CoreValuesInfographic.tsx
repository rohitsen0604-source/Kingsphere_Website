'use client';

import React from 'react';
import { CORE_VALUES } from '@/config/values';
import { GsapReveal } from '@/components/animations/GsapReveal';
import {
  ShieldCheck,
  Award,
  Lightbulb,
  Handshake,
  Leaf,
  Target,
} from 'lucide-react';

const VALUE_ICONS: Record<string, React.ElementType> = {
  ShieldCheck,
  Award,
  Lightbulb,
  Handshake,
  Leaf,
  Target,
};

// Infographic Color Configurations matching Screenshot 1 Reference
const VALUE_STYLES = [
  {
    // 01 TRUST (Liquid Gold & Warm Champagne)
    gradient: 'from-[#F5E6B8] via-[#D4AF5A] to-[#9E782D]',
    glow: 'rgba(212, 175, 90, 0.45)',
    accent: '#D4AF5A',
  },
  {
    // 02 CAPABILITY (Vibrant Amber & Solar Orange)
    gradient: 'from-[#FFD54F] via-[#FF9800] to-[#E65100]',
    glow: 'rgba(255, 152, 0, 0.45)',
    accent: '#FFB300',
  },
  {
    // 03 INNOVATION (Electric Lime & Radiant Spring Green)
    gradient: 'from-[#B2FF59] via-[#76FF03] to-[#00E676]',
    glow: 'rgba(118, 255, 3, 0.45)',
    accent: '#76FF03',
  },
  {
    // 04 PARTNERSHIP (Cyan & Royal Sapphire Blue)
    gradient: 'from-[#00E5FF] via-[#2979FF] to-[#651FFF]',
    glow: 'rgba(41, 121, 255, 0.45)',
    accent: '#00E5FF',
  },
  {
    // 05 SUSTAINABILITY (Coral Rose & Sunset Fuchsia)
    gradient: 'from-[#FF80AB] via-[#FF4081] to-[#FF6E40]',
    glow: 'rgba(255, 64, 129, 0.45)',
    accent: '#FF4081',
  },
  {
    // 06 EXECUTION (Emerald Cyan & Pure Champagne Gold)
    gradient: 'from-[#00E5FF] via-[#00BFA5] to-[#D4AF5A]',
    glow: 'rgba(0, 191, 165, 0.45)',
    accent: '#00BFA5',
  },
];

export function CoreValuesInfographic() {
  return (
    <div className="relative w-full py-8 select-none">
      {/* Background Subtle Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-30">
        <div className="w-[500px] h-[500px] rounded-full bg-[#1C387A]/20 blur-[140px]" />
      </div>

      {/* ========================================================
          DESKTOP & TABLET VIEW (Staggered Infographic matching Reference Screenshot 1)
      ======================================================== */}
      <div className="hidden md:flex flex-col space-y-10 lg:space-y-12 max-w-5xl mx-auto relative z-10">
        {CORE_VALUES.map((val, idx) => {
          const isLeft = idx % 2 === 0; // 01, 03, 05 on Left; 02, 04, 06 on Right
          const Icon = VALUE_ICONS[val.iconName] || ShieldCheck;
          const style = VALUE_STYLES[idx % VALUE_STYLES.length];

          return (
            <GsapReveal
              key={val.id}
              animation="fade-up"
              delay={idx * 0.08}
              duration={0.75}
            >
              <div
                className={`group relative flex items-center w-full ${
                  isLeft ? 'justify-start' : 'justify-end'
                }`}
              >
                {/* ---------------- LEFT-ALIGNED ROW (01, 03, 05) ---------------- */}
                {isLeft ? (
                  <div className="flex items-center w-full max-w-3xl">
                    {/* Outer Side Line Icon */}
                    <div className="w-14 shrink-0 flex items-center justify-center mr-4">
                      <div className="w-11 h-11 rounded-full border border-white/20 bg-[#0B1317]/90 flex items-center justify-center text-white group-hover:text-white group-hover:border-white/50 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300">
                        <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                    </div>

                    {/* Circular Gradient Node (01, 03, 05) */}
                    <div className="relative shrink-0 z-20 flex items-center justify-center">
                      {/* Orbital Ring Arc */}
                      <div className="absolute w-[100px] h-[100px] rounded-full border border-white/25 border-r-transparent border-b-transparent -rotate-45 pointer-events-none group-hover:rotate-45 transition-transform duration-700" />

                      {/* Glowing Multi-Color Gradient Ring */}
                      <div
                        className={`w-20 h-20 rounded-full p-[6px] bg-gradient-to-br ${style.gradient} flex items-center justify-center transition-all duration-500 group-hover:scale-105`}
                        style={{ boxShadow: `0 0 28px ${style.glow}` }}
                      >
                        {/* Dark Center Core with Number */}
                        <div className="w-full h-full rounded-full bg-[#070B0E] flex items-center justify-center shadow-inner">
                          <span className="font-serif text-2xl font-bold text-white tracking-wider">
                            {val.number}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Horizontal Arrow Banner (Pointing Right) */}
                    <div className="relative flex-1 -ml-4 z-10">
                      <div
                        className="relative pl-8 pr-12 py-5 bg-[#0B1317]/98 border border-[rgba(221, 183, 99,0.22)] rounded-r-[6px] shadow-[0_12px_35px_rgba(0,0,0,0.6)] group-hover:border-white/40 transition-all duration-300 group-hover:-translate-y-0.5"
                        style={{
                          clipPath:
                            'polygon(0% 0%, calc(100% - 24px) 0%, 100% 50%, calc(100% - 24px) 100%, 0% 100%)',
                        }}
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-sans text-lg font-bold uppercase tracking-wider text-white">
                              {val.title}
                            </h3>
                            <span className="text-xs text-[#F8E9C6] font-sans font-medium">
                              • {val.tagline}
                            </span>
                          </div>
                          <p className="text-xs text-white font-sans leading-relaxed line-clamp-2 font-normal">
                            {val.description}
                          </p>
                        </div>
                      </div>

                      {/* Flow Chevron Arrows in Background (>>) */}
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-10 pointer-events-none flex items-center gap-1.5 opacity-25 group-hover:opacity-60 transition-opacity duration-300">
                        <span className="w-3 h-3 border-t-2 border-r-2 border-white rotate-45" />
                        <span className="w-3 h-3 border-t-2 border-r-2 border-white rotate-45" />
                      </div>
                    </div>
                  </div>
                ) : (
                  /* ---------------- RIGHT-ALIGNED ROW (02, 04, 06) ---------------- */
                  <div className="flex items-center w-full max-w-3xl flex-row-reverse">
                    {/* Outer Side Line Icon */}
                    <div className="w-14 shrink-0 flex items-center justify-center ml-4">
                      <div className="w-11 h-11 rounded-full border border-white/20 bg-[#0B1317]/90 flex items-center justify-center text-white group-hover:text-white group-hover:border-white/50 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300">
                        <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                    </div>

                    {/* Circular Gradient Node (02, 04, 06) */}
                    <div className="relative shrink-0 z-20 flex items-center justify-center">
                      {/* Orbital Ring Arc */}
                      <div className="absolute w-[100px] h-[100px] rounded-full border border-white/25 border-l-transparent border-t-transparent rotate-45 pointer-events-none group-hover:-rotate-45 transition-transform duration-700" />

                      {/* Glowing Multi-Color Gradient Ring */}
                      <div
                        className={`w-20 h-20 rounded-full p-[6px] bg-gradient-to-bl ${style.gradient} flex items-center justify-center transition-all duration-500 group-hover:scale-105`}
                        style={{ boxShadow: `0 0 28px ${style.glow}` }}
                      >
                        {/* Dark Center Core with Number */}
                        <div className="w-full h-full rounded-full bg-[#070B0E] flex items-center justify-center shadow-inner">
                          <span className="font-sans text-2xl font-bold text-white tracking-wider">
                            {val.number}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Horizontal Arrow Banner (Pointing Left) */}
                    <div className="relative flex-1 -mr-4 z-10 text-right">
                      {/* Flow Chevron Arrows in Background (<<) */}
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-10 pointer-events-none flex items-center gap-1.5 opacity-25 group-hover:opacity-60 transition-opacity duration-300">
                        <span className="w-3 h-3 border-b-2 border-l-2 border-white rotate-45" />
                        <span className="w-3 h-3 border-b-2 border-l-2 border-white rotate-45" />
                      </div>

                      <div
                        className="relative pr-8 pl-12 py-5 bg-[#0B1317]/98 border border-[rgba(221, 183, 99,0.22)] rounded-l-[6px] shadow-[0_12px_35px_rgba(0,0,0,0.6)] group-hover:border-white/40 transition-all duration-300 group-hover:-translate-y-0.5 text-left"
                        style={{
                          clipPath:
                            'polygon(24px 0%, 100% 0%, 100% 100%, 24px 100%, 0% 50%)',
                        }}
                      >
                        <div className="space-y-1 pl-2">
                          <div className="flex items-center gap-2">
                            <h3 className="font-sans text-lg font-bold uppercase tracking-wider text-white">
                              {val.title}
                            </h3>
                            <span className="text-xs text-[#F8E9C6] font-sans font-medium">
                              • {val.tagline}
                            </span>
                          </div>
                          <p className="text-xs text-white font-sans leading-relaxed line-clamp-2 font-normal">
                            {val.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </GsapReveal>
          );
        })}
      </div>

      {/* ========================================================
          MOBILE VIEW (< 768px: Fluid Timeline Stream with Zero Cramping)
      ======================================================== */}
      <div className="md:hidden flex flex-col space-y-6 relative z-10 px-2">
        {CORE_VALUES.map((val, idx) => {
          const Icon = VALUE_ICONS[val.iconName] || ShieldCheck;
          const style = VALUE_STYLES[idx % VALUE_STYLES.length];

          return (
            <div
              key={val.id}
              className="relative rounded-2xl bg-[#0B1317]/95 border border-[rgba(221, 183, 99,0.22)] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.6)] overflow-hidden"
            >
              {/* Header with Circular Gradient Node & Icon */}
              <div className="flex items-center justify-between gap-3 mb-3.5">
                <div className="flex items-center gap-3">
                  {/* Circular Gradient Badge */}
                  <div
                    className={`w-14 h-14 shrink-0 rounded-full p-[4px] bg-gradient-to-br ${style.gradient} flex items-center justify-center`}
                    style={{ boxShadow: `0 0 18px ${style.glow}` }}
                  >
                    <div className="w-full h-full rounded-full bg-[#070B0E] flex items-center justify-center shadow-inner">
                      <span className="font-sans text-lg font-bold text-white">
                        {val.number}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-sans text-lg font-bold uppercase text-white tracking-wider">
                      {val.title}
                    </h3>
                    <div className="text-[11px] font-sans text-[#DDB763]">
                      {val.tagline}
                    </div>
                  </div>
                </div>

                <div className="w-9 h-9 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white/90 shrink-0">
                  <Icon className="w-4 h-4 text-[#DDB763]" />
                </div>
              </div>

              {/* Description - Plain White */}
              <p className="text-xs text-white font-sans leading-relaxed pl-1 font-normal">
                {val.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

