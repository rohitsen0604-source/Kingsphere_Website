import React from 'react';
import Link from 'next/link';
import { COMPANY_CONFIG } from '@/config/company';
import { MAIN_NAV_ITEMS } from '@/config/navigation';
import { Logo } from '@/components/ui/Logo';
import { Button } from '@/components/ui/Button';
import { MapPin, Mail, ArrowUpRight, ShieldCheck, Building2, Clock } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#070B0E] border-t border-[rgba(221,183,99,0.24)] text-white pt-16 pb-12 overflow-hidden">
      {/* Precision hairline gold accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#DDB763] to-transparent shadow-[0_0_12px_rgba(221,183,99,0.6)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pre-Footer Action Banner */}
        <div className="mb-12 sm:mb-14 pb-10 sm:pb-12 border-b border-[rgba(221,183,99,0.18)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="text-[10px] font-sans font-bold tracking-[0.25em] uppercase text-[#DDB763]">
              STRATEGIC ALLIANCES & BUSINESS INQUIRIES
            </span>
            <h3 className="font-sans text-xl sm:text-2xl md:text-3xl font-bold text-white mt-1 leading-snug">
              Ready to explore strategic opportunities with KINGSPHERE?
            </h3>
          </div>
          <Button href="/contact" variant="primary" size="md" withArrow className="w-full sm:w-auto text-center justify-center shrink-0">
            CONTACT OUR TEAM
          </Button>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[rgba(221,183,99,0.18)]">
          {/* Column 1: Company Identity (Span 6) */}
          <div className="lg:col-span-6 space-y-5">
            <Logo size="lg" variant="full" />
            <p className="text-xs sm:text-sm text-white leading-relaxed max-w-md font-sans font-normal">
              {COMPANY_CONFIG.description}
            </p>
            <div className="p-4 rounded-xl bg-[#0B1317] border border-[rgba(221,183,99,0.22)] shadow-sm max-w-md">
              <div className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#DDB763] mb-1">
                Official Brand Tagline
              </div>
              <div className="text-xs text-white font-sans italic leading-relaxed">
                &ldquo;{COMPANY_CONFIG.tagline}&rdquo;
              </div>
            </div>
          </div>

          {/* Column 2: Navigation (Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#DDB763] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-sans text-white">
              {MAIN_NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-[#DDB763] transition-colors inline-flex items-center gap-1 group text-white"
                  >
                    <span>{item.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-0.5 translate-y-0.5 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all text-[#DDB763]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Corporate Desk & Location (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#DDB763] mb-4">
              Corporate Desk
            </h4>
            <div className="space-y-3 text-xs text-white font-sans">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#DDB763] shrink-0 mt-0.5" />
                <span className="leading-snug">{COMPANY_CONFIG.location.formatted}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#DDB763] shrink-0" />
                <a
                  href={`mailto:${COMPANY_CONFIG.contact.email}`}
                  className="hover:text-[#DDB763] transition-colors font-medium"
                >
                  {COMPANY_CONFIG.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#DDB763] shrink-0" />
                <span className="text-white/90">{COMPANY_CONFIG.contact.officeHours} (IST)</span>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <Building2 className="w-4 h-4 text-[#DDB763] shrink-0 mt-0.5" />
                <span className="text-[11px] text-white/80 leading-snug">
                  {COMPANY_CONFIG.legalName}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/80 font-sans">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#DDB763]" />
            <span>
              &copy; {currentYear} {COMPANY_CONFIG.legalName}. All rights reserved.
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <span>Corporate Location: Parbhani, Maharashtra, India</span>
            <Link href="/contact" className="hover:text-[#DDB763] transition-colors text-white">
              Inquiries & Governance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
