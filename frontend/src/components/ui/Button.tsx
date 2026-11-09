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
    'relative inline-flex items-center justify-center font-sans uppercase font-medium tracking-[0.14em] transition-all duration-300 rounded-[1px] select-none cursor-pointer group text-center overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A34F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080909]';

  const sizeStyles = {
    sm: 'min-h-[40px] sm:min-h-[44px] text-[11px] px-4 py-2 gap-1.5',
    md: 'min-h-[44px] text-xs px-5 sm:px-6 py-2.5 sm:py-3 gap-2',
    lg: 'min-h-[48px] text-xs sm:text-[13px] px-6 sm:px-8 py-3 sm:py-3.5 gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-[#E8D29A] via-[#C9A34F] to-[#A77D32] text-[#080909] font-semibold hover:shadow-[0_0_24px_rgba(201,163,79,0.45)] hover:brightness-105 active:scale-[0.98] before:absolute before:inset-0 before:-translate-x-full hover:before:translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent before:transition-transform before:duration-700 ease-out',
    secondary:
      'bg-[#171816] text-[#E8D29A] border border-[rgba(201,163,79,0.3)] hover:border-[#E8D29A] hover:bg-[#1E201D] hover:shadow-[0_0_18px_rgba(201,163,79,0.2)] active:scale-[0.98]',
    outline:
      'bg-transparent text-[#F3F0E9] border border-[rgba(201,163,79,0.24)] hover:text-[#E8D29A] hover:border-[#C9A34F] hover:bg-[rgba(201,163,79,0.06)] hover:shadow-[0_0_15px_rgba(201,163,79,0.12)] active:scale-[0.98]',
    ghost:
      'bg-transparent text-[#A5A39C] hover:text-[#E8D29A] hover:bg-[rgba(201,163,79,0.08)] active:scale-[0.98]',
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
