'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MAIN_NAV_ITEMS, CTA_BUTTON } from '@/config/navigation';
import { BUSINESS_SECTORS } from '@/config/sectors';
import { Logo } from '@/components/ui/Logo';
import { Button } from '@/components/ui/Button';
import {
  Menu,
  X,
  ChevronDown,
  ArrowUpRight,
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

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSectorsOpen, setMobileSectorsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setMegaMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMegaMenuOpen(false);
    setMobileMenuOpen(false);
    setMobileSectorsOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pt-[env(safe-area-inset-top,0px)] ${
          isScrolled
            ? 'bg-[#080909]/95 backdrop-blur-md border-b border-[rgba(201,163,79,0.2)] shadow-[0_10px_35px_rgba(0,0,0,0.85)] py-3 sm:py-3.5'
            : 'bg-gradient-to-b from-[#080909]/90 via-[#080909]/50 to-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2">
            {/* Left: Logo */}
            <div className="shrink-0 flex items-center">
              <Logo size="md" variant="full" />
            </div>

            {/* Center: Desktop Navigation (Manrope Medium, Centered, Controlled) */}
            <nav className="hidden xl:flex items-center justify-center space-x-1 lg:space-x-2">
              {MAIN_NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;

                if (item.hasMegaMenu) {
                  return (
                    <div
                      key={item.href}
                      className="relative"
                      onMouseEnter={() => setMegaMenuOpen(true)}
                      onMouseLeave={() => setMegaMenuOpen(false)}
                    >
                      <Link
                        href={item.href}
                        className={`inline-flex items-center gap-1 px-3 py-2 text-xs font-sans font-medium uppercase tracking-[0.14em] transition-colors duration-200 ${
                          isActive || megaMenuOpen
                            ? 'text-[#E8D29A]'
                            : 'text-[#A5A39C] hover:text-[#F3F0E9]'
                        }`}
                      >
                        <span>{item.title}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            megaMenuOpen ? 'rotate-180 text-[#E8D29A]' : 'opacity-60'
                          }`}
                        />
                      </Link>

                      {/* Mega Menu Dropdown */}
                      <div
                        className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[880px] transition-all duration-300 ${
                          megaMenuOpen
                            ? 'opacity-100 translate-y-0 pointer-events-auto visible'
                            : 'opacity-0 -translate-y-2 pointer-events-none invisible'
                        }`}
                      >
                        <div className="rounded-[1px] bg-[#101111] border border-[rgba(201,163,79,0.28)] shadow-[0_24px_60px_rgba(0,0,0,0.95)] p-6 backdrop-blur-xl">
                          <div className="flex items-center justify-between pb-4 mb-4 border-b border-[rgba(201,163,79,0.16)]">
                            <div>
                              <span className="text-[10px] uppercase font-sans font-medium tracking-[0.25em] text-[#C9A34F]">
                                DIVERSIFIED PORTFOLIO
                              </span>
                              <h3 className="font-serif text-base font-normal text-[#F3F0E9]">
                                11 Core Business Sectors
                              </h3>
                            </div>
                            <Link
                              href="/business-sectors"
                              className="inline-flex items-center gap-1 text-xs text-[#C9A34F] hover:text-[#E8D29A] font-medium tracking-[0.12em] uppercase group"
                            >
                              <span>View Sector Directory</span>
                              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </Link>
                          </div>

                          <div className="grid grid-cols-3 gap-2.5">
                            {BUSINESS_SECTORS.map((sector) => {
                              const Icon = SECTOR_ICONS[sector.iconName] || Factory;
                              return (
                                <Link
                                  key={sector.id}
                                  href={`/business-sectors#${sector.id}`}
                                  className="group flex items-start gap-2.5 p-2 rounded-[1px] hover:bg-[#171816] border border-transparent hover:border-[rgba(201,163,79,0.2)] transition-all"
                                >
                                  <div className="w-7 h-7 rounded-[1px] bg-[rgba(201,163,79,0.06)] border border-[rgba(201,163,79,0.18)] flex items-center justify-center shrink-0 group-hover:border-[#C9A34F] group-hover:bg-[#C9A34F]/10 transition-colors">
                                    <Icon className="w-3.5 h-3.5 text-[#C9A34F] group-hover:text-[#E8D29A]" />
                                  </div>
                                  <div className="min-w-0">
                                    <div className="text-[11px] font-sans font-medium text-[#F3F0E9] group-hover:text-[#E8D29A] truncate">
                                      {sector.title}
                                    </div>
                                    <div className="text-[9.5px] text-[#A5A39C] line-clamp-1 mt-0.5">
                                      {sector.shortDescription}
                                    </div>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-3 py-2 text-xs font-sans font-medium uppercase tracking-[0.14em] transition-colors duration-200 group ${
                      isActive ? 'text-[#E8D29A]' : 'text-[#A5A39C] hover:text-[#F3F0E9]'
                    }`}
                  >
                    <span>{item.title}</span>
                    <span
                      className={`absolute bottom-0 left-3 right-3 h-[1.5px] bg-gradient-to-r from-[#C9A34F] via-[#E8D29A] to-[#C9A34F] transition-all duration-300 ease-out origin-center ${
                        isActive
                          ? 'opacity-100 scale-x-100 shadow-[0_0_8px_rgba(201,163,79,0.7)]'
                          : 'opacity-0 scale-x-0 group-hover:opacity-75 group-hover:scale-x-75'
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Right: Partner CTA Button */}
            <div className="hidden xl:flex items-center shrink-0">
              <Button href={CTA_BUTTON.href} variant="primary" size="sm" withArrow>
                {CTA_BUTTON.title}
              </Button>
            </div>

            {/* Mobile Hamburger Trigger */}
            <div className="flex xl:hidden items-center gap-2 sm:gap-3">
              <Button
                href={CTA_BUTTON.href}
                variant="primary"
                size="sm"
                className="hidden sm:inline-flex text-[10px] px-3 py-1.5 min-h-[36px]"
              >
                PARTNER
              </Button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-11 h-11 rounded-[1px] text-[#F3F0E9] hover:text-[#E8D29A] border border-[rgba(201,163,79,0.24)] bg-[#101111] flex items-center justify-center transition-all duration-300 shrink-0"
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                aria-expanded={mobileMenuOpen}
              >
                <div className="transition-transform duration-300 ease-out">
                  {mobileMenuOpen ? <X className="w-5 h-5 text-[#E8D29A] rotate-90" /> : <Menu className="w-5 h-5" />}
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Editorial Slide Navigation */}
      <div
        className={`fixed inset-0 z-40 bg-[#080909]/98 backdrop-blur-2xl transition-all duration-300 xl:hidden ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto visible'
            : 'opacity-0 pointer-events-none invisible'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="flex flex-col h-full pt-[calc(env(safe-area-inset-top,0px)+5.2rem)] pb-[calc(env(safe-area-inset-bottom,0px)+2rem)] px-5 sm:px-8 overflow-y-auto">
          <div className="flex flex-col divide-y divide-[rgba(201,163,79,0.12)]">
            {MAIN_NAV_ITEMS.map((item, idx) => {
              const isActive = pathname === item.href;
              const staggerStyle = {
                transitionDelay: mobileMenuOpen ? `${idx * 35}ms` : '0ms',
                transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-8px)',
                opacity: mobileMenuOpen ? 1 : 0,
              };

              if (item.hasMegaMenu) {
                return (
                  <div
                    key={item.href}
                    className="py-1 transition-all duration-300 ease-out"
                    style={staggerStyle}
                  >
                    <div className="flex items-center justify-between min-h-[44px]">
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`text-sm sm:text-base font-serif font-medium uppercase tracking-[0.16em] flex-1 py-2 ${
                          isActive ? 'text-[#E8D29A]' : 'text-[#F3F0E9]'
                        }`}
                      >
                        {item.title}
                      </Link>
                      <button
                        onClick={() => setMobileSectorsOpen(!mobileSectorsOpen)}
                        className="w-11 h-11 flex items-center justify-center text-[#C9A34F] hover:text-[#E8D29A]"
                        aria-label="Toggle sectors list"
                        aria-expanded={mobileSectorsOpen}
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            mobileSectorsOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    </div>

                    {mobileSectorsOpen && (
                      <div className="my-2 pl-3.5 space-y-1 border-l-2 border-[#C9A34F]/40 animate-in fade-in slide-in-from-top-1 duration-200">
                        {BUSINESS_SECTORS.map((sector) => (
                          <Link
                            key={sector.id}
                            href={`/business-sectors#${sector.id}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center min-h-[38px] text-xs text-[#A5A39C] hover:text-[#E8D29A] py-1 font-sans transition-colors"
                          >
                            <span className="text-[#C9A34F] font-mono mr-2">{sector.number}.</span>
                            <span className="truncate">{sector.title}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <div
                  key={item.href}
                  className="py-1 transition-all duration-300 ease-out"
                  style={staggerStyle}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center min-h-[44px] text-sm sm:text-base font-serif font-medium uppercase tracking-[0.16em] transition-colors py-2 ${
                      isActive ? 'text-[#E8D29A] font-semibold' : 'text-[#F3F0E9] hover:text-[#E8D29A]'
                    }`}
                  >
                    {item.title}
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Mobile Footer Area */}
          <div className="mt-8 pt-6 border-t border-[rgba(201,163,79,0.2)] space-y-4">
            <Button
              href={CTA_BUTTON.href}
              variant="primary"
              size="lg"
              className="w-full text-center justify-center"
              withArrow
              onClick={() => setMobileMenuOpen(false)}
            >
              {CTA_BUTTON.title}
            </Button>
            <p className="text-[10px] sm:text-[11px] text-[#A5A39C] text-center font-sans leading-relaxed">
              KINGSPHERE INFRA-TECH-TRADE (OPC) PRIVATE LIMITED
              <br />
              Parbhani, Maharashtra, India
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
