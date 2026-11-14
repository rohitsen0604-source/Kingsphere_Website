'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Mail,
  MapPin,
  Clock,
  Building2,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Send,
  Sparkles,
} from 'lucide-react';
import { COMPANY_CONFIG } from '@/config/company';

const ENQUIRY_TYPES = [
  'General Business Inquiry',
  'Strategic Investment & Joint Ventures',
  'Manufacturing & Industrial Development',
  'Infrastructure, Construction & Development',
  'International Trade & Import-Export',
  'Consumer Goods & Commercial Businesses (ALBINE AQUA™ / ELBRUS™)',
  'Technology & Digital Businesses',
  'Mining & Natural Resources',
  'Energy & Sustainable Solutions',
  'Recycling & Circular Economy',
  'Consultancy & Business Recovery',
  'Projects & Services (PROJECTS & CONTRACT EXECUTION)',
];

const contactSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(6, 'Please enter a valid telephone contact'),
  enquiryType: z.string().min(1, 'Please select an enquiry category'),
  message: z.string().min(10, 'Please write your message (minimum 10 characters)'),
  consent: z.boolean().refine((val) => val === true, {
    message: 'You must consent to communicate regarding this inquiry',
  }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [submittedData, setSubmittedData] = useState<ContactFormValues | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      enquiryType: 'General Business Inquiry',
      message: '',
      consent: false,
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setStatus('submitting');
    await new Promise((resolve) => setTimeout(resolve, 850));
    setSubmittedData(data);
    setStatus('success');
  };

  const handleReset = () => {
    reset();
    setStatus('idle');
    setSubmittedData(null);
  };

  return (
    <div className="relative rounded-[28px] sm:rounded-[36px] bg-[#0B1317]/95 border border-[rgba(221, 183, 99,0.28)] shadow-[0_24px_80px_rgba(0,0,0,0.7)] backdrop-blur-xl p-4 sm:p-7 lg:p-10 font-sans overflow-hidden">
      {/* Ambient cyan-teal glow matching screenshot */}
      <div className="pointer-events-none absolute -top-32 -right-32 w-80 h-80 bg-[radial-gradient(circle,rgba(221, 183, 99,0.45)_0%,transparent_70%)]" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 w-80 h-80 bg-[radial-gradient(circle,rgba(221, 183, 99,0.2)_0%,transparent_70%)]" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        {/* ========================================================
            LEFT COLUMN: CONTACT INFORMATION SUB-CARD (Screenshot 2)
        ======================================================== */}
        <div className="lg:col-span-5 rounded-[22px] sm:rounded-[26px] bg-[#070B0E] border border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-inner relative overflow-hidden">
          {/* Subtle background decorative circle */}
          <div className="pointer-events-none absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-[#DDB763]/10 blur-2xl" />

          <div className="space-y-6 sm:space-y-8 relative z-10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-[#DDB763]" />
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#DDB763]">
                  DIRECT CHANNEL
                </span>
              </div>
              <h3 className="font-sans text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-white mt-2 leading-relaxed font-normal">
                Connect directly with KINGSPHERE corporate desk for partnerships, trade logistics, and infrastructure initiatives.
              </p>
            </div>

            {/* Information Items */}
            <div className="space-y-5 sm:space-y-6">
              {/* Official Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0B1317] border border-[rgba(221, 183, 99,0.24)] flex items-center justify-center text-[#DDB763] shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="text-xs space-y-1">
                  <div className="text-[10px] uppercase tracking-wider font-bold text-[#DDB763]">
                    Electronic Mail
                  </div>
                  <div>
                    <a
                      href={`mailto:${COMPANY_CONFIG.contact.email}`}
                      className="text-white hover:text-[#DDB763] transition-colors font-medium break-all"
                    >
                      {COMPANY_CONFIG.contact.email}
                    </a>
                  </div>
                  <div>
                    <a
                      href={`mailto:${COMPANY_CONFIG.contact.inquiryEmail}`}
                      className="text-white/80 hover:text-[#DDB763] transition-colors break-all"
                    >
                      {COMPANY_CONFIG.contact.inquiryEmail}
                    </a>
                  </div>
                </div>
              </div>

              {/* Corporate Head Office */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0B1317] border border-[rgba(221, 183, 99,0.24)] flex items-center justify-center text-[#DDB763] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-xs space-y-1">
                  <div className="text-[10px] uppercase tracking-wider font-bold text-[#DDB763]">
                    HEAD OFFICE
                  </div>
                  <p className="text-white font-medium">
                    {COMPANY_CONFIG.location.formatted}
                  </p>
                  <a
                    href={COMPANY_CONFIG.location.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-[#DDB763] hover:text-[#DDB763] transition-colors pt-0.5"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Registered Corporate Entity & Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0B1317] border border-[rgba(221, 183, 99,0.24)] flex items-center justify-center text-[#DDB763] shrink-0 mt-0.5">
                  <Building2 className="w-4 h-4" />
                </div>
                <div className="text-xs space-y-1">
                  <div className="text-[10px] uppercase tracking-wider font-bold text-[#DDB763]">
                    REGISTERED ENTITY
                  </div>
                  <p className="text-white font-medium leading-snug">
                    {COMPANY_CONFIG.legalName}
                  </p>
                  <div className="flex items-center gap-1.5 text-[11px] text-white/80 pt-1">
                    <Clock className="w-3 h-3 text-[#DDB763]" />
                    <span>{COMPANY_CONFIG.contact.officeHours} (IST)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Fast-Track Assurance */}
          <div className="pt-6 mt-6 border-t border-white/10 relative z-10">
            <div className="flex items-center gap-2 text-[11px] text-white">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Desk Status: Active & Operational</span>
            </div>
          </div>
        </div>

        {/* ========================================================
            RIGHT COLUMN: SLEEK MINIMALIST FORM (Screenshot 2)
        ======================================================== */}
        <div className="lg:col-span-7 flex flex-col justify-between py-2 sm:py-4">
          {status === 'success' && submittedData ? (
            <div className="h-full flex flex-col justify-center items-center text-center p-6 sm:p-10 space-y-6 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-[#DDB763]/10 border border-[#DDB763] flex items-center justify-center text-[#DDB763] shadow-[0_0_30px_rgba(221,183,99,0.25)]">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white">
                  Message Transmitted
                </h3>
                <p className="text-xs sm:text-sm text-white max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#F8E9C6]">{submittedData.firstName} {submittedData.lastName}</strong>. Your enquiry regarding &ldquo;{submittedData.enquiryType}&rdquo; has been formatted.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0E131E] border border-white/10 text-left text-xs space-y-2 max-w-md w-full">
                <div className="flex justify-between">
                  <span className="text-[#8E95A5]">Category:</span>
                  <span className="text-[#DDB763] font-medium">{submittedData.enquiryType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8E95A5]">Email:</span>
                  <span className="text-white">{submittedData.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8E95A5]">Phone:</span>
                  <span className="text-white">+91 {submittedData.phone}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2 w-full sm:w-auto">
                <a
                  href={`mailto:${COMPANY_CONFIG.contact.email}?subject=${encodeURIComponent(`[${submittedData.enquiryType}] from ${submittedData.firstName} ${submittedData.lastName}`)}&body=${encodeURIComponent(`Name: ${submittedData.firstName} ${submittedData.lastName}\nEmail: ${submittedData.email}\nPhone: +91 ${submittedData.phone}\nCategory: ${submittedData.enquiryType}\n\nMessage:\n${submittedData.message}`)}`}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-[#F8E9C6] transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>DISPATCH VIA EMAIL CLIENT</span>
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/5 border border-white/20 text-white font-medium text-xs tracking-wider uppercase hover:bg-white/10 transition-colors"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 sm:space-y-7">
              {/* Row 1: First Name & Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <label className="block text-xs font-medium text-white mb-1.5">
                    First Name
                  </label>
                  <input
                    {...register('firstName')}
                    type="text"
                    placeholder="Enter first name"
                    className={`w-full bg-transparent border-b py-2 text-sm text-white placeholder-white/25 focus:outline-none transition-colors duration-200 ${
                      errors.firstName
                        ? 'border-red-500 focus:border-red-400'
                        : 'border-white/20 focus:border-[#DDB763]'
                    }`}
                  />
                  {errors.firstName && (
                    <span className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.firstName.message}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-medium text-white mb-1.5">
                    Last Name
                  </label>
                  <input
                    {...register('lastName')}
                    type="text"
                    placeholder="Enter last name"
                    className={`w-full bg-transparent border-b py-2 text-sm text-white placeholder-white/25 focus:outline-none transition-colors duration-200 ${
                      errors.lastName
                        ? 'border-red-500 focus:border-red-400'
                        : 'border-white/20 focus:border-[#DDB763]'
                    }`}
                  />
                  {errors.lastName && (
                    <span className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.lastName.message}
                    </span>
                  )}
                </div>
              </div>

              {/* Row 2: Email & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <label className="block text-xs font-medium text-white mb-1.5">
                    Email
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="your.email@example.com"
                    className={`w-full bg-transparent border-b py-2 text-sm text-white placeholder-white/25 focus:outline-none transition-colors duration-200 ${
                      errors.email
                        ? 'border-red-500 focus:border-red-400'
                        : 'border-white/20 focus:border-[#DDB763]'
                    }`}
                  />
                  {errors.email && (
                    <span className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email.message}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-medium text-white mb-1.5">
                    Phone Number
                  </label>
                  <div className="flex items-center gap-2 border-b border-white/20 focus-within:border-[#DDB763] transition-colors duration-200">
                    <span className="text-sm font-semibold text-[#DDB763] select-none py-2 shrink-0">
                      +91
                    </span>
                    <input
                      {...register('phone')}
                      type="tel"
                      placeholder="98765 43210"
                      className={`w-full bg-transparent py-2 text-sm text-white placeholder-white/25 focus:outline-none ${
                        errors.phone ? 'text-red-300' : ''
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <span className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phone.message}
                    </span>
                  )}
                </div>
              </div>

              {/* Row 3: Enquiry Classification */}
              <div>
                <label className="block text-xs font-medium text-white mb-1.5">
                  Enquiry Category
                </label>
                <div className="relative">
                  <select
                    {...register('enquiryType')}
                    className="w-full bg-transparent border-b border-white/20 focus:border-[#DDB763] py-2.5 text-sm text-white focus:outline-none transition-colors appearance-none cursor-pointer pr-8"
                  >
                    {ENQUIRY_TYPES.map((type) => (
                      <option key={type} value={type} className="bg-[#0B1317] text-white">
                        {type}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-white/40 text-xs">
                    ▼
                  </div>
                </div>
              </div>

              {/* Row 4: Message */}
              <div>
                <label className="block text-xs font-medium text-white mb-1.5">
                  Message
                </label>
                <textarea
                  {...register('message')}
                  rows={3}
                  placeholder="Write your message.."
                  className={`w-full bg-transparent border-b py-2 text-sm text-white placeholder-white/25 focus:outline-none transition-colors duration-200 resize-none ${
                    errors.message
                      ? 'border-red-500 focus:border-red-400'
                      : 'border-white/20 focus:border-[#DDB763]'
                  }`}
                />
                {errors.message && (
                  <span className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.message.message}
                  </span>
                )}
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start gap-3 pt-1">
                <input
                  {...register('consent')}
                  id="contact-consent"
                  type="checkbox"
                  className="mt-1 h-3.5 w-3.5 rounded-sm border-white/30 bg-[#0E131E] accent-[#DDB763]"
                />
                <label htmlFor="contact-consent" className="text-xs text-white leading-relaxed cursor-pointer select-none">
                  I agree that KINGSPHERE may process these business contact details to reply to this corporate inquiry.
                </label>
              </div>
              {errors.consent && (
                <span className="text-[11px] text-red-400 block -mt-3">
                  {errors.consent.message}
                </span>
              )}

              {/* ========================================================
                  BOTTOM ACTION ROW: PLAYFUL DASHED ARROW + PILL BUTTON
              ======================================================== */}
              <div className="pt-4 flex items-center justify-end gap-3 sm:gap-6 relative">
                {/* Dotted/Dashed Curved Arrow SVG (matching Screenshot 2) */}
                <div className="hidden sm:flex items-center gap-2 select-none pointer-events-none">
                  <svg
                    className="w-24 sm:w-28 h-10 text-white/40"
                    viewBox="0 0 120 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M 10 32 C 35 34, 60 30, 85 18 C 95 13, 102 10, 108 8"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeDasharray="4 3.5"
                      strokeLinecap="round"
                    />
                    <polygon
                      points="114,8 103,4 107,12"
                      fill="currentColor"
                    />
                  </svg>
                </div>

                {/* High Contrast Pill Button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full sm:w-auto px-9 py-3.5 rounded-full bg-white text-black hover:bg-[#F8E9C6] active:scale-[0.98] transition-all duration-200 font-semibold text-sm shadow-[0_8px_24px_rgba(255,255,255,0.18)] hover:shadow-[0_12px_32px_rgba(221,183,99,0.35)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed shrink-0"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-black" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <span>Send Message</span>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
