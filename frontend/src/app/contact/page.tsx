import React from 'react';
import type { Metadata } from 'next';
import { COMPANY_CONFIG } from '@/config/company';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PageHero } from '@/components/layout/PageHero';
import { GsapReveal } from '@/components/animations/GsapReveal';
import { ContactForm } from '@/components/forms/ContactForm';
import { Button } from '@/components/ui/Button';
import {
  MapPin,
  Mail,
  Clock,
  ExternalLink,
  MessageSquare,
  Handshake,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Corporate Headquarters & Inquiries',
  description:
    'Connect with KINGSPHERE INFRA-TECH-TRADE (OPC) PRIVATE LIMITED in Parbhani, Maharashtra, India. Inquire about partnerships, projects, and trade opportunities.',
};

export default function ContactPage() {
  return (
    <div className="relative bg-[#080909] text-[#F3F0E9] min-h-screen">
      {/* 1. Contact Hero with /images/hero/08-contact-hero.png */}
      <PageHero
        badge="DIRECT CORPORATE COMMUNICATIONS"
        badgeIcon={<MessageSquare className="w-3.5 h-3.5 text-[#C9A34F]" />}
        title="CONNECT WITH"
        highlightTitle="KINGSPHERE."
        description="Our corporate desk welcomes discussions with prospective partners, industrial suppliers, infrastructure developers, and institutional stakeholders."
        imageSrc="/images/kingsphere/08-contact-hero.png"
        imageAlt="KINGSPHERE Corporate Headquarters and Direct Inquiries"
      />

      {/* 2. Company Information & 3. Business Enquiry Form */}
      <section className="py-14 sm:py-20 md:py-28 px-3.5 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 font-sans">
          {/* Company Details Column */}
          <div className="lg:col-span-5">
            <GsapReveal animation="fade-up" duration={0.85} className="space-y-5 sm:space-y-6">
              <SectionHeading
                badge="CORPORATE INFORMATION"
                title="HEADQUARTERS &"
                highlight="OFFICIAL DESK"
                align="left"
                className="mb-4"
              />

              <div className="p-5 sm:p-6 rounded-[1px] bg-[#101111] border border-[rgba(201,163,79,0.22)] space-y-3">
                <div className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#C9A34F]">
                  REGISTERED ENTITY NAME
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-normal text-[#F3F0E9]">
                  {COMPANY_CONFIG.legalName}
                </h3>
                <p className="text-xs text-[#A5A39C] leading-relaxed">
                  Incorporated as an OPC Private Limited company under the Companies Act, Republic of India.
                </p>
              </div>

              <div className="space-y-3 sm:space-y-3.5 text-xs text-[#A5A39C]">
                {/* Location */}
                <div className="p-3.5 sm:p-4 rounded-[1px] bg-[#101111] border border-[rgba(201,163,79,0.18)] flex items-start gap-3 sm:gap-3.5">
                  <MapPin className="w-4 h-4 text-[#C9A34F] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#E8D29A]">
                      Corporate Location
                    </h4>
                    <p className="text-xs text-[#F3F0E9] mt-1 font-medium">
                      {COMPANY_CONFIG.location.formatted}
                    </p>
                    <a
                      href={COMPANY_CONFIG.location.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] text-[#C9A34F] hover:text-[#E8D29A] mt-1 transition-colors"
                    >
                      <span>View region on Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Official Email */}
                <div className="p-3.5 sm:p-4 rounded-[1px] bg-[#101111] border border-[rgba(201,163,79,0.18)] flex items-start gap-3 sm:gap-3.5">
                  <Mail className="w-4 h-4 text-[#C9A34F] shrink-0 mt-0.5" />
                  <div className="break-all">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#E8D29A]">
                      Electronic Mail
                    </h4>
                    <p className="text-xs text-[#F3F0E9] mt-1">
                      General: <a href={`mailto:${COMPANY_CONFIG.contact.email}`} className="text-[#C9A34F] hover:underline">{COMPANY_CONFIG.contact.email}</a>
                    </p>
                    <p className="text-xs text-[#F3F0E9] mt-0.5">
                      Partnerships: <a href={`mailto:${COMPANY_CONFIG.contact.inquiryEmail}`} className="text-[#C9A34F] hover:underline">{COMPANY_CONFIG.contact.inquiryEmail}</a>
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="p-3.5 sm:p-4 rounded-[1px] bg-[#101111] border border-[rgba(201,163,79,0.18)] flex items-start gap-3 sm:gap-3.5">
                  <Clock className="w-4 h-4 text-[#C9A34F] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#E8D29A]">
                      Operational Hours
                    </h4>
                    <p className="text-xs text-[#F3F0E9] mt-1">
                      {COMPANY_CONFIG.contact.officeHours}
                    </p>
                    <p className="text-[11px] text-[#A5A39C] mt-0.5">
                      Indian Standard Time (UTC +05:30)
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Action */}
              <div className="p-4 sm:p-5 rounded-[1px] bg-[#101111] border border-[rgba(201,163,79,0.24)] space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[#C9A34F]">
                  <Handshake className="w-3.5 h-3.5" />
                  <span>Strategic Alliances</span>
                </div>
                <p className="text-xs text-[#A5A39C] leading-relaxed">
                  Seeking formal consortium or joint venture evaluation? You may also submit through our dedicated partnership portal.
                </p>
                <Button href="/partnerships" variant="secondary" size="sm" withArrow className="w-full sm:w-auto">
                  GO TO PARTNERSHIP PORTAL
                </Button>
              </div>
            </GsapReveal>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <GsapReveal animation="fade-up" delay={0.15} duration={0.85}>
              <ContactForm />
            </GsapReveal>
          </div>
        </div>
      </section>

      {/* 5. Location Map Section */}
      <section className="py-12 sm:py-16 px-3.5 sm:px-6 lg:px-8 bg-[#101111] border-t border-[rgba(201,163,79,0.2)]">
        <div className="max-w-7xl mx-auto space-y-5 sm:space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 font-sans">
            <div>
              <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#C9A34F]">
                REGIONAL GEOGRAPHY
              </span>
              <h3 className="font-serif text-lg sm:text-2xl font-normal text-[#F3F0E9]">
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
          <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-[1px] overflow-hidden border border-[rgba(201,163,79,0.24)] shadow-card-dark bg-[#080909]">
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
