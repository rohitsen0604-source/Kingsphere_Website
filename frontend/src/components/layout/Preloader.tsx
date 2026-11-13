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

    // Smooth, cinematic progress increment (~1.8s - 2.2s total)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        let step = 1;
        if (prev < 30) {
          step = Math.floor(Math.random() * 3) + 2; // 2 to 4
        } else if (prev < 70) {
          step = Math.floor(Math.random() * 2) + 1; // 1 to 2
        } else if (prev < 92) {
          step = Math.floor(Math.random() * 3) + 1; // 1 to 3
        } else {
          step = 1; // deliberate crawl into 100%
        }
        return Math.min(prev + step, 100);
      });
    }, 32);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      sessionStorage.setItem('kingsphere_preloaded', 'true');
      // Hold comfortably at 100% so the user clearly sees the 100% state and completion message
      const timeout = setTimeout(() => {
        setIsFinished(true);
      }, 950);

      // Gracefully unmount after smooth fade out transition
      const removeTimeout = setTimeout(() => {
        setShouldRender(false);
      }, 1950);

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
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-between p-4 sm:p-8 md:p-10 transition-all duration-1000 ease-in-out overflow-hidden ${isFinished ? 'opacity-0 scale-[1.02] pointer-events-none' : 'opacity-100 scale-100 pointer-events-auto'
        }`}
      style={{ backgroundColor: '#070B0E' }}
      aria-hidden={isFinished}
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      {/* Background Image with Ambient Cyan-Teal Theme */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/images/loading-bg.jpg"
          alt="KINGSPHERE Enterprise Loading Background"
          fill
          priority
          quality={95}
          className="object-cover object-center filter blur-[1.5px] brightness-[0.7] contrast-[1.08]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070B0E] via-[#070B0E]/40 to-[#070B0E]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070B0E]/60 via-transparent to-[#070B0E]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(221, 183, 99,0.35)_0%,transparent_65%)]" />
      </div>

      {/* Top Header Eyebrow */}
      <div className="relative z-10 w-full flex items-center justify-between text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.28em] uppercase text-white font-sans drop-shadow-md">
        <div className="flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-[#070B0E]/80 backdrop-blur-md border border-[rgba(221, 183, 99,0.3)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#DDB763] animate-pulse" />
          <span className="text-white font-bold text-[8px] sm:text-[10px]">KINGSPHERE INFRA-TECH-TRADE</span>
        </div>
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#070B0E]/80 backdrop-blur-md border border-[rgba(221, 183, 99,0.3)] text-[#DDB763] font-bold">
          PARBHANI, MAHARASHTRA
        </div>
      </div>

      {/* Center Stage: Framed Modern Glass Container */}
      <div className="relative z-10 my-auto w-full max-w-sm px-2">
        <div className="relative flex flex-col items-center justify-center text-center space-y-5 sm:space-y-6 w-full mx-auto p-6 sm:p-10 rounded-2xl bg-[#0B1317]/90 backdrop-blur-xl border border-[rgba(221, 183, 99,0.3)] shadow-[0_25px_60px_rgba(0,0,0,0.8)]">
          {/* Modern Corner Accents */}
          <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-[#DDB763] rounded-tl-sm" />
          <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-[#DDB763] rounded-tr-sm" />
          <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-[#DDB763] rounded-bl-sm" />
          <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-[#DDB763] rounded-br-sm" />

          {/* Official 3D Golden Crest Mark & Animation */}
          <div className="relative w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-[rgba(221, 183, 99,0.35)] animate-ping opacity-25" />
            <div className="absolute inset-0 rounded-full border border-dashed border-[#DDB763]/40 animate-[spin_20s_linear_infinite]" />

            <div className="relative w-16 h-16 sm:w-24 sm:h-24 rounded-full overflow-hidden shadow-[0_0_25px_rgba(221,183,99,0.55)]">
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
            <h1 className="font-sans text-lg sm:text-2xl tracking-[0.2em] sm:tracking-[0.24em] font-bold bg-gradient-to-r from-[#FFFDF7] via-[#F8E9C6] to-[#DDB763] bg-clip-text text-transparent uppercase drop-shadow">
              KINGSPHERE
            </h1>
            <p className="text-[8px] sm:text-[9.5px] tracking-[0.25em] sm:tracking-[0.3em] text-[#DDB763] font-sans uppercase font-bold">
              INFRA • TECH • TRADE
            </p>
            <p className="text-[7px] sm:text-[8px] tracking-[0.2em] sm:tracking-[0.25em] text-white font-sans uppercase font-medium">
              CREATING TRUST • DELIVERING VALUE.
            </p>
          </div>

          {/* Progress Bar Container */}
          <div className="w-full max-w-[220px] sm:max-w-[260px] space-y-2 sm:space-y-2.5 pt-1">
            <div className="h-[2.5px] w-full bg-[#070B0E] rounded-full overflow-hidden border border-[rgba(221, 183, 99,0.3)]">
              <div
                className="h-full bg-gradient-to-r from-[#DDB763] via-[#F8E9C6] to-[#DDB763] transition-all duration-150 ease-out shadow-[0_0_12px_rgba(221, 183, 99,0.8)]"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[8.5px] sm:text-[9.5px] text-white tracking-[0.14em] uppercase font-sans truncate mr-2 font-medium">
                {activeStatus}
              </span>
              <span className="text-white font-bold tracking-wider text-xs shrink-0">
                {progress}%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Tagline */}
      <div className="relative z-10 w-full text-center px-2">
        <p className="text-[8px] sm:text-[10px] tracking-[0.18em] sm:tracking-[0.24em] uppercase text-white font-sans drop-shadow-md font-medium">
          BUILDING STRATEGIC PARTNERSHIPS • CREATING GLOBAL OPPORTUNITIES
        </p>
      </div>
    </div>
  );
}
