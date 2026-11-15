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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pt-[env(safe-area-inset-top,0px)] ${isScrolled
            ? 'bg-[#0E1720]/95 backdrop-blur-md border-b border-[rgba(221, 183, 99,0.25)] shadow-[0_10px_35px_rgba(0,0,0,0.5)] py-3 sm:py-3.5'
            : 'bg-gradient-to-b from-[#0E1720]/90 via-[#0E1720]/50 to-transparent py-4 sm:py-5'
          }`}
      >
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2">
            {/* Left: Logo */}
            <div className="shrink-0 flex items-center">
              <Logo size="md" variant="full" />
            </div>

            {/* Center: Desktop Navigation (Manrope Medium, Centered, Single-Line) */}
            <nav className="hidden lg:flex items-center justify-center gap-0.5 xl:gap-2">
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
                        className={`whitespace-nowrap inline-flex items-center gap-1 px-2.5 xl:px-3 py-2 text-[11px] xl:text-xs font-sans font-bold uppercase tracking-[0.1em] xl:tracking-[0.14em] transition-colors duration-200 ${isActive || megaMenuOpen
                            ? 'text-[#DDB763]'
                            : 'text-white hover:text-[#F8E9C6]'
                          }`}
                      >
                        <span>{item.title}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${megaMenuOpen ? 'rotate-180 text-[#DDB763]' : 'opacity-60'
                            }`}
                        />
                      </Link>

                      {/* Mega Menu Dropdown (100% Solid Opaque Background to Prevent Background Bleed-Through) */}
                      <div
                        className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[840px] max-w-[calc(100vw-32px)] z-[100] transition-all duration-300 ${megaMenuOpen
                            ? 'opacity-100 translate-y-0 pointer-events-auto visible'
                            : 'opacity-0 -translate-y-2 pointer-events-none invisible'
                          }`}
                      >
                        <div className="rounded-3xl bg-[#0E1720] border-2 border-[#DDB763] shadow-[0_30px_90px_rgba(0,0,0,0.8),0_0_40px_rgba(221,183,99,0.3)] p-6">
                          <div className="flex items-center justify-between pb-4 mb-4 border-b border-[rgba(221,183,99,0.25)]">
                            <div>
                              <span className="text-[10px] uppercase font-sans font-bold tracking-[0.25em] text-[#DDB763]">
                                DIVERSIFIED OPERATIONS
                              </span>
                              <h3 className="font-sans text-base font-bold text-white">
                                11 Business Verticals
                              </h3>
                            </div>
                            <Link
                              href="/business-sectors"
                              onClick={() => setMegaMenuOpen(false)}
                              className="inline-flex items-center gap-1 text-xs text-[#DDB763] hover:text-[#F8E9C6] font-bold tracking-[0.12em] uppercase group"
                            >
                              <span>View All 11 Verticals</span>
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
                                  onClick={() => setMegaMenuOpen(false)}
                                  className="group flex items-start gap-2.5 p-2 rounded-xl bg-[#14222E] hover:bg-[#121E24] border border-[rgba(221,183,99,0.2)] hover:border-[#DDB763] transition-all"
                                >
                                  <div className="w-7 h-7 rounded-lg bg-[#0E1720] border border-[rgba(221,183,99,0.3)] flex items-center justify-center shrink-0 group-hover:border-[#DDB763] group-hover:bg-[#DDB763]/10 transition-colors">
                                    <Icon className="w-3.5 h-3.5 text-[#DDB763] group-hover:text-white" />
                                  </div>
                                  <div className="overflow-hidden">
                                    <div className="text-xs font-sans font-bold text-white group-hover:text-[#F8E9C6] transition-colors truncate">
                                      {sector.title}
                                    </div>
                                    <div className="text-[10px] text-white/70 truncate mt-0.5 font-sans">
                                      Vertical {sector.number}
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
                    className={`whitespace-nowrap relative px-2.5 xl:px-3 py-2 text-[11px] xl:text-xs font-sans font-bold uppercase tracking-[0.1em] xl:tracking-[0.14em] transition-colors duration-200 group ${isActive ? 'text-[#DDB763]' : 'text-white hover:text-[#F8E9C6]'
                      }`}
                  >
                    <span>{item.title}</span>
                    <span
                      className={`absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-gradient-to-r from-transparent via-[#DDB763] to-transparent transition-all duration-300 ease-out origin-center ${isActive
                          ? 'opacity-100 scale-x-100 shadow-[0_0_8px_rgba(221,183,99,0.8)]'
                          : 'opacity-0 scale-x-0 group-hover:opacity-75 group-hover:scale-x-75'
                        }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Right: Partner CTA Button */}
            <div className="hidden lg:flex items-center shrink-0">
              <Button href={CTA_BUTTON.href} variant="primary" size="sm" withArrow className="whitespace-nowrap">
                {CTA_BUTTON.title}
              </Button>
            </div>

            {/* Mobile Hamburger Trigger */}
            <div className="flex lg:hidden items-center gap-2 sm:gap-3">
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
                className="w-11 h-11 rounded-xl text-white hover:text-[#F8E9C6] border border-[rgba(221, 183, 99,0.28)] bg-[#14222E] flex items-center justify-center transition-all duration-300 shrink-0"
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                aria-expanded={mobileMenuOpen}
              >
                <div className="transition-transform duration-300 ease-out">
                  {mobileMenuOpen ? <X className="w-5 h-5 text-[#F8E9C6] rotate-90" /> : <Menu className="w-5 h-5" />}
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Editorial Slide Navigation */}
      <div
        className={`fixed inset-0 z-40 bg-[#0E1720]/98 backdrop-blur-2xl transition-all duration-300 lg:hidden ${mobileMenuOpen
            ? 'opacity-100 pointer-events-auto visible'
            : 'opacity-0 pointer-events-none invisible'
          }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="flex flex-col h-full pt-[calc(env(safe-area-inset-top,0px)+5.2rem)] pb-[calc(env(safe-area-inset-bottom,0px)+2rem)] px-5 sm:px-8 overflow-y-auto">
          <div className="flex flex-col divide-y divide-[rgba(221, 183, 99,0.15)]">
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
                        className={`text-sm sm:text-base font-sans font-bold uppercase tracking-[0.14em] flex-1 py-2 ${isActive ? 'text-[#DDB763]' : 'text-white'
                          }`}
                      >
                        {item.title}
                      </Link>
                      <button
                        onClick={() => setMobileSectorsOpen(!mobileSectorsOpen)}
                        className="w-11 h-11 flex items-center justify-center text-[#DDB763] hover:text-[#F8E9C6]"
                        aria-label="Toggle sectors list"
                        aria-expanded={mobileSectorsOpen}
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${mobileSectorsOpen ? 'rotate-180' : ''
                            }`}
                        />
                      </button>
                    </div>

                    {mobileSectorsOpen && (
                      <div className="my-2 pl-3.5 space-y-1 border-l-2 border-[#DDB763]/40 animate-in fade-in slide-in-from-top-1 duration-200">
                        {BUSINESS_SECTORS.map((sector) => (
                          <Link
                            key={sector.id}
                            href={`/business-sectors#${sector.id}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center min-h-[38px] text-xs text-white/90 hover:text-[#DDB763] py-1 font-sans transition-colors"
                          >
                            <span className="text-[#DDB763] font-mono mr-2">{sector.number}.</span>
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
                    className={`flex items-center min-h-[44px] text-sm sm:text-base font-sans font-bold uppercase tracking-[0.14em] transition-colors py-2 ${isActive ? 'text-[#DDB763]' : 'text-white hover:text-[#DDB763]'
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
            <p className="text-[10px] sm:text-[11px] text-white text-center font-sans leading-relaxed">
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
