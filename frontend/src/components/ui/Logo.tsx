'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'mark' | 'compact';
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ className = '', variant = 'full', size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12',
  };

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 transition-all duration-300 hover:opacity-95 select-none ${className}`}
      aria-label="KINGSPHERE - Corporate Home"
    >
      {/* Official 3D Golden Crest Mark - Circular Badge */}
      <div className={`relative flex items-center justify-center ${sizeClasses[size]} shrink-0 rounded-full overflow-hidden shadow-[0_0_14px_rgba(201,163,79,0.35)] transition-transform duration-300 group-hover:scale-105`}>
        <Image
          src="/images/kingsphere/kingsphere-crest-mark.png"
          alt="KINGSPHERE Official 3D Crest"
          fill
          priority
          sizes="48px"
          className="object-cover rounded-full"
        />
      </div>

      {variant !== 'mark' && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="font-serif tracking-[0.16em] sm:tracking-[0.22em] text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r from-[#F3F0E9] via-[#E8D29A] to-[#C9A34F] bg-clip-text text-transparent uppercase leading-none">
              KINGSPHERE
            </span>
          </div>
          {variant === 'full' && (
            <span className="text-[7.5px] sm:text-[8.5px] tracking-[0.22em] sm:tracking-[0.28em] text-[#C9A34F] uppercase font-sans font-medium mt-1">
              INFRA • TECH • TRADE
            </span>
          )}
        </div>
      )}
    </Link>
  );
}
