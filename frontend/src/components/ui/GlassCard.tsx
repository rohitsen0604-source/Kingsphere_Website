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
        'group relative rounded-2xl bg-gradient-to-br from-[#0F1A1F]/95 via-[#0B1317]/95 to-[#070B0E]/98 border border-[rgba(221, 183, 99,0.22)] shadow-[0_12px_30px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.12)] p-6 md:p-8 transition-all duration-500 ease-out backdrop-blur-md',
        hoverGlow &&
          'hover:border-[#DDB763] hover:from-[#14232A]/95 hover:to-[#0B1317]/98 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(0,0,0,0.7),0_0_24px_rgba(221, 183, 99,0.25),inset_0_1px_0_rgba(255,255,255,0.2)]',
        className
      )}
      {...props}
    >
      {/* Precision corner accents with hover glow */}
      {cornerAccents && (
        <>
          <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-[#DDB763]/80 group-hover:border-[#DDB763] transition-colors duration-300" />
          <span className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-[#DDB763]/80 group-hover:border-[#DDB763] transition-colors duration-300" />
          <span className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-[#DDB763]/80 group-hover:border-[#DDB763] transition-colors duration-300" />
          <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-[#DDB763]/80 group-hover:border-[#DDB763] transition-colors duration-300" />
        </>
      )}
      {children}
    </div>
  );
}
