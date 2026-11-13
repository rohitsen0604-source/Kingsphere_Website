'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  withArrow?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  withArrow = false,
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    'relative inline-flex items-center justify-center font-sans uppercase font-bold tracking-[0.14em] transition-all duration-300 rounded-full select-none cursor-pointer group text-center overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DDB763] focus-visible:ring-offset-2 focus-visible:ring-offset-[#070B0E]';

  const sizeStyles = {
    sm: 'min-h-[40px] sm:min-h-[44px] text-[11px] px-5 py-2 gap-1.5',
    md: 'min-h-[44px] text-xs px-6 sm:px-7 py-2.5 sm:py-3 gap-2',
    lg: 'min-h-[48px] text-xs sm:text-[13px] px-7 sm:px-9 py-3 sm:py-3.5 gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-[#FFFDF7] via-[#F8E9C6] to-[#DDB763] text-black font-bold shadow-[0_4px_20px_rgba(221,183,99,0.25)] hover:shadow-[0_0_28px_rgba(221,183,99,0.45)] hover:brightness-105 active:scale-[0.98] before:absolute before:inset-0 before:-translate-x-full hover:before:translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:transition-transform before:duration-700 ease-out',
    secondary:
      'bg-[#0B1317] text-white border border-[rgba(221, 183, 99,0.35)] hover:border-[#DDB763] hover:bg-[#101C22] hover:shadow-[0_0_20px_rgba(221, 183, 99,0.25)] active:scale-[0.98]',
    outline:
      'bg-transparent text-white border border-white/20 hover:text-white hover:border-[#DDB763] hover:bg-white/5 hover:shadow-[0_0_15px_rgba(221, 183, 99,0.2)] active:scale-[0.98]',
    ghost:
      'bg-transparent text-white/80 hover:text-white hover:bg-white/10 active:scale-[0.98]',
  };

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-1.5">
        {children}
        {withArrow && (
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1 text-current" />
        )}
      </span>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {content}
    </button>
  );
}
