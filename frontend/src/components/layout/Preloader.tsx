'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const STATUS_MESSAGES = [
  { threshold: 0, text: 'INITIALIZING ENTERPRISE PLATFORM' },
  { threshold: 25, text: 'CONNECTING GLOBAL TRADE NETWORKS' },
  { threshold: 55, text: 'SYNCHRONIZING INDUSTRIAL CAPABILITIES' },
  { threshold: 80, text: 'ALIGNING STRATEGIC ALLIANCES' },
  { threshold: 98, text: 'READY • ENTERING KINGSPHERE' },
];

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Check if session has already preloaded to avoid blocking repeated internal route visits
    if (typeof window !== 'undefined' && sessionStorage.getItem('kingsphere_preloaded') === 'true') {
      setShouldRender(false);
      return;
    }

    // Smooth, fast progress increment (reaches 100% in ~500ms)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const step = prev < 60 ? Math.floor(Math.random() * 10) + 8 : Math.floor(Math.random() * 8) + 5;
        return Math.min(prev + step, 100);
      });
    }, 28);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      sessionStorage.setItem('kingsphere_preloaded', 'true');
      const timeout = setTimeout(() => {
        setIsFinished(true);
      }, 400);

      const removeTimeout = setTimeout(() => {
        setShouldRender(false);
      }, 1100);

      return () => {
        clearTimeout(timeout);
        clearTimeout(removeTimeout);
      };
    }
  }, [progress]);

  if (!shouldRender) return null;

  const activeStatus = [...STATUS_MESSAGES].reverse().find((m) => progress >= m.threshold)?.text || 'INITIALIZING';

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-between p-4 sm:p-8 md:p-10 transition-all duration-700 ease-out overflow-hidden ${isFinished ? 'opacity-0 -translate-y-3 pointer-events-none' : 'opacity-100 pointer-events-auto'
        }`}
      style={{ backgroundColor: '#080909' }}
      aria-hidden={isFinished}
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      {/* ========================================================
          BACKGROUND IMAGE (Clear, Visible & Vibrant with Light Elegant Ambiance)
      ======================================================== */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/images/loading-bg.jpg"
          alt="KINGSPHERE Enterprise Loading Background"
          fill
          priority
          quality={95}
          className="object-cover object-center filter blur-[1.5px] brightness-[0.78] contrast-[1.08]"
          sizes="100vw"
        />
        {/* Subtle Luxury Gradient: Clear, vibrant imagery while preserving edge definition */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080909]/90 via-[#080909]/20 to-[#080909]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080909]/50 via-transparent to-[#080909]/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,163,79,0.12)_0%,transparent_60%)]" />
      </div>

      {/* Top Header Eyebrow */}
      <div className="relative z-10 w-full flex items-center justify-between text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.28em] uppercase text-[#F3F0E9] font-sans drop-shadow-md">
        <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-[1px] bg-[#080909]/60 backdrop-blur-md border border-[rgba(201,163,79,0.25)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A34F] animate-pulse" />
          <span className="text-[#E8D29A] font-medium text-[8px] sm:text-[10px]">KINGSPHERE INFRA-TECH-TRADE</span>
        </div>
        <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-[1px] bg-[#080909]/60 backdrop-blur-md border border-[rgba(201,163,79,0.25)] text-[#C9A34F]">
          PARBHANI, MAHARASHTRA
        </div>
      </div>

      {/* Center Stage: Framed Architectural Glass Container */}
      <div className="relative z-10 my-auto w-full max-w-sm px-2">
        <div className="relative flex flex-col items-center justify-center text-center space-y-5 sm:space-y-6 w-full mx-auto p-5 sm:p-10 rounded-[2px] bg-[#080909]/80 backdrop-blur-md border border-[rgba(201,163,79,0.32)] shadow-[0_25px_60px_rgba(0,0,0,0.9)]">
          {/* 4 Architectural Gold Corner Accents */}
          <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-[#C9A34F]" />
          <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-[#C9A34F]" />
          <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-[#C9A34F]" />
          <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-[#C9A34F]" />

          {/* Official 3D Golden Crest Mark & Animation */}
          <div className="relative w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center">
            {/* Subtle Outer Pulsing Halo */}
            <div className="absolute inset-0 rounded-full border border-[rgba(201,163,79,0.25)] animate-ping opacity-25" />

            {/* Rotating Compass Ring */}
            <div className="absolute inset-0 rounded-full border border-dashed border-[#C9A34F]/35 animate-[spin_20s_linear_infinite]" />

            {/* Official 3D Crest Mark in Perfect Circle */}
            <div className="relative w-16 h-16 sm:w-24 sm:h-24 rounded-full overflow-hidden shadow-[0_0_25px_rgba(201,163,79,0.55)]">
              <Image
                src="/images/kingsphere/kingsphere-crest-mark.png"
                alt="KINGSPHERE Official 3D Crest"
                fill
                priority
                sizes="96px"
                className="object-cover rounded-full"
              />
            </div>
          </div>

          {/* Company Title & Official Motto */}
          <div className="space-y-1 sm:space-y-1.5">
            <h1 className="font-serif text-lg sm:text-2xl tracking-[0.2em] sm:tracking-[0.24em] font-bold bg-gradient-to-r from-[#F3F0E9] via-[#E8D29A] to-[#C9A34F] bg-clip-text text-transparent uppercase drop-shadow">
              KINGSPHERE
            </h1>
            <p className="text-[8px] sm:text-[9.5px] tracking-[0.25em] sm:tracking-[0.3em] text-[#C9A34F] font-sans uppercase font-semibold">
              INFRA • TECH • TRADE
            </p>
            <p className="text-[7px] sm:text-[8px] tracking-[0.2em] sm:tracking-[0.25em] text-[#A5A39C] font-sans uppercase">
              CREATING TRUST • DELIVERING VALUE.
            </p>
          </div>

          {/* Progress Bar Container */}
          <div className="w-full max-w-[220px] sm:max-w-[260px] space-y-2 sm:space-y-2.5 pt-1">
            {/* Hairline Progress Bar */}
            <div className="h-[2px] w-full bg-[#171816] rounded-full overflow-hidden border border-[rgba(201,163,79,0.25)]">
              <div
                className="h-full bg-gradient-to-r from-[#C9A34F] via-[#E8D29A] to-[#C9A34F] transition-all duration-150 ease-out shadow-[0_0_12px_rgba(201,163,79,0.8)]"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Numbers & Dynamic Status */}
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[8.5px] sm:text-[9.5px] text-[#A5A39C] tracking-[0.14em] uppercase font-sans truncate mr-2">
                {activeStatus}
              </span>
              <span className="text-[#E8D29A] font-semibold tracking-wider text-xs shrink-0">
                {progress}%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Tagline */}
      <div className="relative z-10 w-full text-center px-2">
        <p className="text-[8px] sm:text-[10px] tracking-[0.18em] sm:tracking-[0.24em] uppercase text-[#D4D2CD] font-sans drop-shadow-md">
          BUILDING STRATEGIC PARTNERSHIPS • CREATING GLOBAL OPPORTUNITIES
        </p>
      </div>
    </div>
  );
}
