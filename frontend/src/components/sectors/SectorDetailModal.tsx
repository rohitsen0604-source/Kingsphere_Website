'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { SectorItem } from '@/config/sectors';
import { Button } from '@/components/ui/Button';
import {
  X,
  CheckCircle,
  TrendingUp,
  Factory,
  Building2,
  Ship,
  ShoppingBag,
  Cpu,
  Gem,
  Sun,
  Recycle,
  Compass,
  Briefcase,
} from 'lucide-react';

const SECTOR_ICONS: Record<string, React.ElementType> = {
  Factory,
  Building2,
  Ship,
  ShoppingBag,
  Cpu,
  Gem,
  Sun,
  Recycle,
  Compass,
  Briefcase,
  TrendingUp,
};

interface SectorDetailModalProps {
  sector: SectorItem | null;
  onClose: () => void;
}

export function SectorDetailModal({ sector, onClose }: SectorDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (sector) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [sector, onClose]);

  if (!sector) return null;

  const Icon = SECTOR_ICONS[sector.iconName] || Factory;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#080909]/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[1px] bg-[#070B0E] border border-[rgba(201,163,79,0.32)] shadow-[0_30px_70px_rgba(0,0,0,0.98)] text-[#F3F0E9] p-6 sm:p-8 md:p-10"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={sector.title}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-[1px] bg-[#171816] text-white hover:text-[#E8D29A] border border-[rgba(201,163,79,0.2)] hover:border-[#C9A34F] transition-colors z-20"
          aria-label="Close sector details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded-[1px] bg-[#C9A34F] text-[#080909]">
            SECTOR {sector.number}
          </span>
          <div className="flex items-center gap-1.5 text-xs text-[#C9A34F] font-medium uppercase tracking-[0.15em] font-sans">
            <Icon className="w-3.5 h-3.5" />
            <span>Core Portfolio Domain</span>
          </div>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-[#F3F0E9] leading-tight">
          {sector.title}
        </h2>

        {/* Sector Visual Hero inside Modal */}
        <div className="relative h-56 sm:h-72 w-full my-6 rounded-[1px] overflow-hidden border border-[rgba(201,163,79,0.2)]">
          <Image
            src={sector.image}
            alt={sector.title}
            fill
            className="object-cover filter brightness-[0.8] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070B0E] via-transparent to-transparent opacity-85" />
          <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-[1px] bg-[#080909]/85 border border-[rgba(201,163,79,0.2)] backdrop-blur-sm">
            <div className="text-[10px] uppercase font-sans font-medium tracking-[0.2em] text-[#C9A34F]">
              Strategic Focus
            </div>
            <div className="text-xs text-[#F3F0E9] mt-0.5 font-sans font-medium">
              {sector.strategicFocus}
            </div>
          </div>
        </div>

        {/* Full Overview */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xs font-sans font-medium uppercase tracking-[0.2em] text-[#C9A34F] mb-2">
              Domain Overview
            </h3>
            <p className="text-sm sm:text-base text-white leading-relaxed font-sans">
              {sector.fullDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Capabilities */}
            <div className="p-5 rounded-[1px] bg-[#171816] border border-[rgba(201,163,79,0.18)]">
              <div className="flex items-center gap-2 text-xs font-sans font-medium uppercase tracking-[0.14em] text-[#E8D29A] mb-3">
                <CheckCircle className="w-4 h-4 text-[#C9A34F]" />
                <span>Operational Capabilities</span>
              </div>
              <ul className="space-y-2.5 text-xs text-white font-sans">
                {sector.capabilities.map((cap, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#C9A34F] mt-1.5 shrink-0" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Opportunities */}
            <div className="p-5 rounded-[1px] bg-[#171816] border border-[rgba(201,163,79,0.18)]">
              <div className="flex items-center gap-2 text-xs font-sans font-medium uppercase tracking-[0.14em] text-[#E8D29A] mb-3">
                <TrendingUp className="w-4 h-4 text-[#C9A34F]" />
                <span>Partnership Opportunities</span>
              </div>
              <ul className="space-y-2.5 text-xs text-white font-sans">
                {sector.opportunities.map((opp, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#E8D29A] mt-1.5 shrink-0" />
                    <span>{opp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Modal Action CTA */}
          <div className="pt-6 border-t border-[rgba(201,163,79,0.18)] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-white font-sans">
              Interested in collaborating in this sector?
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Button
                href="/partnerships"
                variant="primary"
                size="md"
                withArrow
                onClick={onClose}
                className="w-full sm:w-auto"
              >
                PROPOSE PARTNERSHIP
              </Button>
              <Button
                variant="outline"
                size="md"
                onClick={onClose}
                className="w-full sm:w-auto"
              >
                CLOSE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
