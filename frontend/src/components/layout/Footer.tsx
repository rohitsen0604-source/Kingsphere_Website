import React from 'react';
import Link from 'next/link';
import { COMPANY_CONFIG } from '@/config/company';
import { MAIN_NAV_ITEMS } from '@/config/navigation';
import { BUSINESS_SECTORS } from '@/config/sectors';
import { Logo } from '@/components/ui/Logo';
import { Button } from '@/components/ui/Button';
import { MapPin, Mail, ArrowUpRight, ShieldCheck } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#080909] border-t border-[rgba(201,163,79,0.2)] text-[#A5A39C] pt-16 pb-12 overflow-hidden">
      {/* Precision hairline gold accent */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A34F]/70 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pre-Footer Action Banner */}
        <div className="mb-12 sm:mb-14 pb-10 sm:pb-12 border-b border-[rgba(201,163,79,0.14)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="text-[10px] font-sans font-medium tracking-[0.25em] uppercase text-[#C9A34F]">
              STRATEGIC ALLIANCES & BUSINESS INQUIRIES
            </span>
            <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-normal text-[#F3F0E9] mt-1 leading-snug">
              Ready to explore strategic opportunities with KINGSPHERE?
            </h3>
          </div>
          <Button href="/contact" variant="primary" size="md" withArrow className="w-full sm:w-auto text-center justify-center shrink-0">
            CONTACT OUR TEAM
          </Button>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-[rgba(201,163,79,0.14)]">
          {/* Column 1 & 2: Company Identity */}
          <div className="lg:col-span-2 space-y-5">
            <Logo size="lg" variant="full" />
            <p className="text-xs sm:text-sm text-[#A5A39C] leading-relaxed max-w-sm font-sans">
              {COMPANY_CONFIG.description}
            </p>
            <div className="p-4 rounded-[1px] bg-[#101111] border border-[rgba(201,163,79,0.18)]">
              <div className="text-[10px] font-sans font-medium uppercase tracking-[0.2em] text-[#C9A34F] mb-1">
                Official Brand Tagline
              </div>
              <div className="text-xs text-[#F3F0E9] font-serif italic leading-relaxed">
                &ldquo;{COMPANY_CONFIG.tagline}&rdquo;
              </div>
            </div>
            <div className="space-y-2 text-xs text-[#A5A39C] font-sans">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C9A34F] shrink-0" />
                <span>{COMPANY_CONFIG.location.formatted}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C9A34F] shrink-0" />
                <a
                  href={`mailto:${COMPANY_CONFIG.contact.email}`}
                  className="hover:text-[#E8D29A] transition-colors"
                >
                  {COMPANY_CONFIG.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Navigation */}
          <div>
            <h4 className="text-xs font-sans font-medium uppercase tracking-[0.2em] text-[#C9A34F] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-sans">
              {MAIN_NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-[#E8D29A] transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{item.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-0.5 translate-y-0.5 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all text-[#C9A34F]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 & 5: Business Sectors */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-sans font-medium uppercase tracking-[0.2em] text-[#C9A34F] mb-4">
              11 Core Business Sectors
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-[11px] font-sans">
              {BUSINESS_SECTORS.map((sector) => (
                <Link
                  key={sector.id}
                  href={`/business-sectors#${sector.id}`}
                  className="hover:text-[#E8D29A] transition-colors truncate"
                  title={sector.title}
                >
                  <span className="text-[#C9A34F] font-mono mr-1.5">{sector.number}.</span>
                  {sector.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#6C6A64] font-sans">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C9A34F]" />
            <span>
              &copy; {currentYear} {COMPANY_CONFIG.legalName}. All rights reserved.
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <span>Corporate Location: Parbhani, Maharashtra, India</span>
            <Link href="/contact" className="hover:text-[#C9A34F] transition-colors">
              Inquiries & Governance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
