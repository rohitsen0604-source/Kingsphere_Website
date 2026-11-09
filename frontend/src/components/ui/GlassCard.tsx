import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverGlow?: boolean;
  cornerAccents?: boolean;
}

export function GlassCard({
  children,
  className,
  hoverGlow = true,
  cornerAccents = false,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        'group relative rounded-[1px] bg-[#101111] border border-[rgba(201,163,79,0.18)] p-6 md:p-8 transition-all duration-400 ease-out',
        hoverGlow &&
          'hover:border-[rgba(201,163,79,0.45)] hover:bg-[#141615] hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,0,0,0.85),0_0_20px_rgba(201,163,79,0.12)]',
        className
      )}
      {...props}
    >
      {/* Precision corner accents with hover glow */}
      {cornerAccents && (
        <>
          <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-[#C9A34F]/80 group-hover:border-[#E8D29A] transition-colors duration-300" />
          <span className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-[#C9A34F]/80 group-hover:border-[#E8D29A] transition-colors duration-300" />
          <span className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-[#C9A34F]/80 group-hover:border-[#E8D29A] transition-colors duration-300" />
          <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-[#C9A34F]/80 group-hover:border-[#E8D29A] transition-colors duration-300" />
        </>
      )}
      {children}
    </div>
  );
}
