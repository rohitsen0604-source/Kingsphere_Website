import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  highlight,
  description,
  align = 'center',
  className,
}: SectionHeadingProps) {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <div className={cn('flex flex-col mb-12 md:mb-16', alignmentClasses[align], className)}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-4 rounded-full border border-[rgba(221, 183, 99,0.32)] bg-[#0B151A]/90 backdrop-blur-md shadow-[0_4px_15px_rgba(0,0,0,0.5)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#DDB763] shadow-[0_0_8px_#DDB763]" />
          <span className="text-[10px] font-sans font-bold tracking-[0.22em] uppercase text-[#F8E9C6]">
            {badge}
          </span>
        </div>
      )}

      <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight text-white leading-[1.18] max-w-3xl">
        {title}{' '}
        {highlight && (
          <span className="font-sans font-bold bg-gradient-to-r from-[#FFFDF7] via-[#F8E9C6] to-[#DDB763] bg-clip-text text-transparent drop-shadow-[0_2px_14px_rgba(221,183,99,0.25)]">
            {highlight}
          </span>
        )}
      </h2>

      {/* Thin Modern Accent Line */}
      <div
        className={cn(
          'h-[2px] w-12 bg-gradient-to-r from-[#DDB763] via-[#DDB763] to-transparent my-4 transition-all duration-700 ease-out shadow-[0_0_8px_rgba(221, 183, 99,0.4)]',
          align === 'center' &&
          'bg-gradient-to-r from-transparent via-[#DDB763] to-transparent w-24'
        )}
      />

      {description && (
        <p className="text-xs sm:text-sm md:text-base text-white leading-relaxed max-w-2xl font-sans mt-1">
          {description}
        </p>
      )}
    </div>
  );
}
