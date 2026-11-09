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
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-[1px] border border-[rgba(201,163,79,0.25)] bg-[#101111]/80 backdrop-blur-sm">
          <span className="w-1 h-1 rounded-full bg-[#C9A34F]" />
          <span className="text-[10px] font-sans font-medium tracking-[0.25em] uppercase text-[#E8D29A]">
            {badge}
          </span>
        </div>
      )}

      <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-normal tracking-tight text-[#F3F0E9] leading-[1.18] max-w-3xl">
        {title}{' '}
        {highlight && (
          <span className="italic font-serif text-[#E8D29A]">
            {highlight}
          </span>
        )}
      </h2>

      {/* Thin Architectural Gold Accent Line */}
      <div
        className={cn(
          'h-[1.5px] w-12 bg-gradient-to-r from-[#C9A34F] via-[#E8D29A] to-transparent my-4 transition-all duration-700 ease-out shadow-[0_0_8px_rgba(201,163,79,0.5)]',
          align === 'center' &&
            'bg-gradient-to-r from-transparent via-[#C9A34F] to-transparent w-24'
        )}
      />

      {description && (
        <p className="text-xs sm:text-sm md:text-base text-[#A5A39C] leading-relaxed max-w-2xl font-sans mt-1">
          {description}
        </p>
      )}
    </div>
  );
}
