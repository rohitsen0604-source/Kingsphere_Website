import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#05080B] text-[#F5F5F3] px-4 py-24 text-center">
      <div className="max-w-md space-y-6">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#D6AD55] font-bold">
          ERROR 404 • ROUTE NOT FOUND
        </span>
        <h1 className="font-serif text-5xl sm:text-6xl font-bold bg-gradient-to-r from-[#F4D98E] via-[#D6AD55] to-[#96702E] bg-clip-text text-transparent">
          404
        </h1>
        <p className="text-sm text-[#A9ADB2] leading-relaxed">
          The requested page is unavailable. Please return to the official corporate portal or explore our business sectors.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <Button href="/" variant="primary" size="md">
            RETURN TO HOMEPAGE
          </Button>
          <Button href="/business-sectors" variant="outline" size="md">
            BUSINESS SECTORS
          </Button>
        </div>
      </div>
    </div>
  );
}

