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
    title: 'SUBSTANCE OVER SPECULATION',
    category: 'OUR PHILOSOPHY 01',
    description:
      'We invest time, management focus, and capital strictly in tangible productive enterprises—manufacturing, infrastructure, real trade, and essential resources. Short-term speculation is rejected in favor of enduring asset creation.',
    icon: Coins,
    theme: 'dark',
  },
  {
    id: 'phil-2',
    number: '02',
    title: 'SYMMETRIC STAKEHOLDER VALUE',
    category: 'OUR PHILOSOPHY 02',
    description:
      'Every strategic partnership must create fair, measurable upside for both sides. Enduring collaborations cannot exist without mutual prosperity, risk equilibrium, and shared long-term growth horizons.',
    icon: Handshake,
    theme: 'white',
  },
  {
    id: 'phil-3',
    number: '03',
    title: 'INTEGRITY OF WORD',
    category: 'OUR PHILOSOPHY 03',
    description:
      'Trust is our primary asset. We fulfill our contractual commitments with precision, statutory compliance, and transparent communication across all domestic and cross-border initiatives.',
    icon: ShieldCheck,
    theme: 'gold',
  },
  {
    id: 'str-1',
    number: '04',
    title: 'REGIONAL SOURCING DEPTH',
    category: 'STRATEGIC STRENGTH 01',
    description:
      'Intimate familiarity with Maharashtra’s land parcels, industrial corridors, supply ecosystems, regulatory authorities, and administrative frameworks, enabling friction-free ground execution.',
    icon: Award,
    theme: 'dark',
  },
  {
    id: 'str-2',
    number: '05',
    title: 'CROSS-INDUSTRY VERSATILITY',
    category: 'STRATEGIC STRENGTH 02',
    description:
      'Ability to connect disparate industrial sectors—linking mining off-take with manufacturing, agricultural inputs with processing clusters, and energy efficiency with civil infrastructure.',
    icon: Globe2,
    theme: 'gold',
  },
  {
    id: 'str-3',
    number: '06',
    title: 'FLEXIBLE PARTNERSHIP STRUCTURES',
    category: 'STRATEGIC STRENGTH 03',
    description:
      'Agile joint ventures, project consortia, SPVs, or contract delivery models configured specifically to match institutional investor mandates and corporate strategic needs.',
    icon: TrendingUp,
    theme: 'white',
  },
  {
    id: 'ten-1',
    number: '07',
    title: 'ENDURING ASSET CREATION',
    category: 'CORE CAPABILITY',
    description:
      'Prioritizing physical and industrial assets with multigenerational utility, predictable revenue horizons, and resilient real-economy underlying value across Maharashtra and India.',
    icon: Building2,
    theme: 'dark',
  },
  {
    id: 'gov-1',
    number: '08',
    title: 'STATUTORY & REGULATORY RIGOR',
    category: 'CORPORATE GOVERNANCE',
    description:
      'Uncompromised adherence to corporate governance, statutory compliances, legal ethics, and transparent audit standards across all public and private initiatives.',
    icon: CheckCircle2,
    theme: 'dark',
  },
  {
    id: 'exc-1',
    number: '09',
    title: 'EXECUTION VELOCITY',
    category: 'DELIVERY DISCIPLINE',
    description:
      'Rapid on-ground deployment through specialized engineering alliances, agile milestone governance, and verified local operational delivery networks.',
    icon: Zap,
    theme: 'gold',
  },
  {
    id: 'sus-1',
    number: '10',
    title: 'CIRCULAR RESOURCE STEWARDSHIP',
    category: 'SUSTAINABILITY',
    description:
      'Embedding environmental responsibility, circular material workflows, zero-waste processing, and clean energy optimization across every active operational domain.',
    icon: Leaf,
    theme: 'dark',
  },
  {
    id: 'dir-1',
    number: '11',
    title: 'EXECUTIVE LEADERSHIP ACCESS',
    category: 'STRATEGIC STEWARDSHIP',
    description:
      'Direct access to corporate decision-makers in Parbhani, eliminating multi-layered administrative bureaucracy and accelerating high-stake transactions and alliances.',
    icon: Compass,
    theme: 'white',
  },
  {
    id: 'tra-1',
    number: '12',
    title: 'GLOBAL CONNECTIVITY CORRIDORS',
    category: 'INTERNATIONAL REACH',
    description:
      'Connecting regional productive potential with verified international trade corridors, cross-border technology partners, and foreign institutional procurement pipelines.',
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
            innerBg = 'bg-gradient-to-b from-white to-[#F0F2F5] text-black';
            iconColor = 'text-black';
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

