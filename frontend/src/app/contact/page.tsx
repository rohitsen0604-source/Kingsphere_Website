import React from 'react';
import type { Metadata } from 'next';
import { COMPANY_CONFIG } from '@/config/company';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PageHero } from '@/components/layout/PageHero';
import { GsapReveal } from '@/components/animations/GsapReveal';
import { ContactForm } from '@/components/forms/ContactForm';
import { Button } from '@/components/ui/Button';
import {
  ExternalLink,
  MessageSquare,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Corporate Headquarters & Inquiries',
  description:
    'Connect with KINGSPHERE INFRA-TECH-TRADE (OPC) PRIVATE LIMITED in Parbhani, Maharashtra, India. Inquire about partnerships, projects, and trade opportunities.',
};

export default function ContactPage() {
  return (
    <div className="relative bg-[#070B0E] text-white min-h-screen">
      {/* 1. Contact Hero with /images/hero/08-contact-hero.png */}
      <PageHero
        badge="DIRECT CORPORATE COMMUNICATIONS"
        badgeIcon={<MessageSquare className="w-3.5 h-3.5 text-[#DDB763]" />}
        title="CONNECT WITH"
        highlightTitle="KINGSPHERE."
        description="CREATING TRUST • DELIVERING VALUE. Our corporate desk welcomes discussions with prospective partners, industrial suppliers, infrastructure developers, and institutional stakeholders."
        imageSrc="/images/kingsphere/08-contact-hero.png"
        imageAlt="KINGSPHERE Corporate Headquarters and Direct Inquiries"
      />

      {/* 2. Executive Unified Contact Enclosure (Matching Reference Design) */}
      <section className="py-12 sm:py-16 md:py-24 px-3.5 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            badge="DIRECT EXECUTIVE DIALOGUE"
            title="OFFICIAL CORPORATE"
            highlight="COMMUNICATIONS"
            description="Direct executive line to KINGSPHERE corporate desk in Parbhani, Maharashtra. Inquiries are reviewed and routed to relevant operational divisions."
            align="center"
            className="mb-8 sm:mb-12"
          />

          <GsapReveal animation="fade-up" duration={0.85}>
            <ContactForm />
          </GsapReveal>
        </div>
      </section>

      {/* 3. Location Map Section */}
      <section className="py-12 sm:py-16 px-3.5 sm:px-6 lg:px-8 bg-[#0B1317] border-t border-[rgba(221,183,99,0.22)]">
        <div className="max-w-7xl mx-auto space-y-5 sm:space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 font-sans">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#DDB763]">
                REGIONAL GEOGRAPHY
              </span>
              <h3 className="font-sans text-lg sm:text-2xl font-bold text-white tracking-tight">
                Parbhani, Maharashtra, India
              </h3>
            </div>
            <a
              href={COMPANY_CONFIG.location.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-[#C9A34F] hover:text-[#E8D29A] transition-colors"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Map Container */}
          <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-[2px] overflow-hidden border border-[rgba(221,183,99,0.28)] shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-[#0B1317]">
            <iframe
              src={COMPANY_CONFIG.location.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(90%)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KINGSPHERE Location - Parbhani, Maharashtra, India"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
