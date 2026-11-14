'use client';

import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  Handshake,
  Award,
  Globe2,
  TrendingUp,
  Building2,
  CheckCircle2,
  Zap,
  Leaf,
  Compass,
  Globe,
  Coins,
  X,
  Sparkles,
  Lightbulb,
} from 'lucide-react';

interface HoneycombItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  icon: React.ElementType;
  theme: 'dark' | 'gold' | 'white';
}

const HONEYCOMB_ITEMS: HoneycombItem[] = [
  {
    id: 'phil-1',
    number: '01',
    title: 'BUILDING SUSTAINABLE BUSINESSES',
    category: 'OUR PHILOSOPHY 01',
    description:
      'At KINGSPHERE, we focus on building sustainable businesses, creating long-term value, and developing strategic partnerships that drive shared growth and lasting opportunities.',
    icon: Coins,
    theme: 'dark',
  },
  {
    id: 'phil-2',
    number: '02',
    title: 'CREATING TRUST & DELIVERING VALUE',
    category: 'OUR PHILOSOPHY 02',
    description:
      'We believe that building a successful business is not just about creating wealth; it is about creating trust, delivering value, embracing responsibility and building opportunities that contribute to a better future.',
    icon: Handshake,
    theme: 'white',
  },
  {
    id: 'phil-3',
    number: '03',
    title: 'INTEGRITY & ETHICAL PRACTICES',
    category: 'CORE VALUE 01',
    description:
      'We believe in honesty, transparency, fairness and ethical business practices. We are committed to building trust through responsible decisions, clear commitments and actions that stand the test of time.',
    icon: ShieldCheck,
    theme: 'gold',
  },
  {
    id: 'str-1',
    number: '04',
    title: 'RESPONSIBILITY & STEWARDSHIP',
    category: 'CORE VALUE 02',
    description:
      'We believe in conducting business with social, environmental and economic responsibility. We strive to create opportunities that benefit our customers, partners, communities and future generations.',
    icon: Leaf,
    theme: 'dark',
  },
  {
    id: 'str-2',
    number: '05',
    title: 'EXCELLENCE & QUALITY STANDARDS',
    category: 'CORE VALUE 03',
    description:
      'We are committed to quality, professionalism and continuous improvement. We strive to achieve high standards in every project, product, service and business relationship we undertake.',
    icon: Award,
    theme: 'gold',
  },
  {
    id: 'str-3',
    number: '06',
    title: 'INNOVATION & MODERN SOLUTIONS',
    category: 'CORE VALUE 04',
    description:
      'We embrace new ideas, emerging technologies and forward-thinking solutions. We encourage creativity, explore new opportunities and transform possibilities into sustainable business ventures.',
    icon: Lightbulb,
    theme: 'white',
  },
  {
    id: 'ten-1',
    number: '07',
    title: 'UNITY & COLLABORATION',
    category: 'CORE VALUE 05',
    description:
      'We believe that lasting success is achieved together. We build strong relationships with employees, investors, customers, suppliers and strategic partners through mutual respect, shared goals and collective growth.',
    icon: Handshake,
    theme: 'dark',
  },
  {
    id: 'gov-1',
    number: '08',
    title: 'CROSS-INDUSTRY VERSATILITY',
    category: 'STRATEGIC STRENGTH',
    description:
      'Connecting diverse industries across manufacturing, infrastructure, international trade, consumer products, technology, mining, energy, recycling, consultancy and strategic investments.',
    icon: Globe2,
    theme: 'dark',
  },
  {
    id: 'exc-1',
    number: '09',
    title: 'STRATEGIC PARTNERSHIPS & ALLIANCES',
    category: 'PARTNERSHIP ECOSYSTEM',
    description:
      'Bringing together industry experts, entrepreneurs, investors, professionals, and strategic partners to develop businesses, expand opportunities, and build sustainable growth across multiple sectors.',
    icon: TrendingUp,
    theme: 'gold',
  },
  {
    id: 'sus-1',
    number: '10',
    title: 'REGIONAL & NATIONAL DEVELOPMENT',
    category: 'ECONOMIC MANDATE',
    description:
      'Our vision is to connect diverse industries, create new business opportunities, and contribute to the economic and industrial development of Maharashtra and India.',
    icon: Building2,
    theme: 'dark',
  },
  {
    id: 'dir-1',
    number: '11',
    title: 'CIRCULAR RESOURCE STEWARDSHIP',
    category: 'SUSTAINABILITY',
    description:
      'Embedding environmental responsibility, circular material workflows, waste processing, resource recovery, and clean energy optimization across every active operational domain.',
    icon: Compass,
    theme: 'white',
  },
  {
    id: 'tra-1',
    number: '12',
    title: 'GLOBAL TRADE & MARKET ACCESS',
    category: 'INTERNATIONAL REACH',
    description:
      'Connecting Indian productive potential with verified international trade corridors, cross-border technology partners, and global distribution pipelines.',
    icon: Globe,
    theme: 'dark',
  },
];

export function PhilosophyHoneycomb() {
  const [activeItem, setActiveItem] = useState<HoneycombItem | null>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveItem(null);
      }
    };
    if (activeItem) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeItem]);

  return (
    <div className="relative w-full py-8 font-sans">
      {/* Honeycomb Responsive Cluster Grid */}
      <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center items-center gap-4 sm:gap-6">
        {HONEYCOMB_ITEMS.map((item) => {
          const Icon = item.icon;

          // Theme-specific styles matching Screenshot 5
          let borderWrapper = 'bg-[#DDB763]/40 hover:bg-[#DDB763]';
          let innerBg = 'bg-[#0B1317] text-white';
          let iconColor = 'text-[#DDB763]';
          let titleColor = 'text-white';

          if (item.theme === 'gold') {
            borderWrapper = 'bg-white/40 hover:bg-white';
            innerBg = 'bg-gradient-to-b from-[#F8E9C6] via-[#DDB763] to-[#B8923A] text-black';
            iconColor = 'text-black';
            titleColor = 'text-black';
          } else if (item.theme === 'white') {
            borderWrapper = 'bg-[#DDB763]/50 hover:bg-[#DDB763]';
            innerBg = 'bg-white text-black';
            iconColor = 'text-[#DDB763]';
            titleColor = 'text-black';
          }

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveItem(item)}
              className="group relative w-[160px] h-[184px] sm:w-[190px] sm:h-[218px] md:w-[210px] md:h-[240px] transition-all duration-300 hover:scale-105 hover:z-20 cursor-pointer focus:outline-none"
              style={{
                filter: 'drop-shadow(0px 8px 16px rgba(0,0,0,0.5))',
              }}
              aria-label={`View details for ${item.title}`}
            >
              {/* Outer Hexagon Border Shell */}
              <div
                className={`w-full h-full p-[2px] transition-colors duration-300 ${borderWrapper}`}
                style={{
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                }}
              >
                {/* Inner Hexagon Content */}
                <div
                  className={`w-full h-full flex flex-col items-center justify-center p-4 sm:p-5 text-center transition-all duration-300 ${innerBg}`}
                  style={{
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                  }}
                >
                  {/* Icon */}
                  <div className="mb-2 sm:mb-3 transition-transform duration-300 group-hover:scale-110">
                    <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${iconColor}`} />
                  </div>

                  {/* Main Title */}
                  <h4 className={`text-[11px] sm:text-xs md:text-[13px] font-bold uppercase tracking-wider leading-snug line-clamp-3 ${titleColor}`}>
                    {item.title}
                  </h4>

                  {/* Subtle click indicator */}
                  <span className={`text-[9px] uppercase tracking-widest font-bold mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${titleColor}`}>
                    Click to view ↗
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* ========================================================
          CENTER POP-UP MODAL (When any Hexagon is clicked)
      ======================================================== */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveItem(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-lg rounded-3xl bg-[#0B1317] border-2 border-[#DDB763] p-6 sm:p-8 shadow-[0_25px_80px_rgba(0,0,0,0.95),0_0_40px_rgba(221,183,99,0.3)] animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-[#DDB763] hover:text-black flex items-center justify-center text-white transition-colors cursor-pointer"
              aria-label="Close pop-up"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-[#DDB763]" />
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#DDB763]">
                {activeItem.category}
              </span>
            </div>

            {/* Modal Icon + Title */}
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#F8E9C6] via-[#DDB763] to-[#C9A34F] flex items-center justify-center text-black shrink-0 shadow-lg mt-0.5">
                <activeItem.icon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-[#DDB763] block">
                  TENET #{activeItem.number}
                </span>
                <h3 className="text-lg sm:text-xl font-bold uppercase text-white tracking-tight leading-snug">
                  {activeItem.title}
                </h3>
              </div>
            </div>

            {/* Description Body */}
            <div className="py-3 border-y border-white/10 my-3">
              <p className="text-xs sm:text-sm text-white leading-relaxed font-normal">
                {activeItem.description}
              </p>
            </div>

            {/* Modal Footer */}
            <div className="pt-2 flex items-center justify-between">
              <span className="text-[11px] text-[#DDB763] font-medium">
                KINGSPHERE Corporate Ethos & Execution
              </span>
              <button
                type="button"
                onClick={() => setActiveItem(null)}
                className="px-5 py-2 rounded-full bg-white text-black hover:bg-[#F8E9C6] font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
