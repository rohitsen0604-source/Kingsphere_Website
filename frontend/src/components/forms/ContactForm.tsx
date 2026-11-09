'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, AlertCircle, Loader2, Send } from 'lucide-react';
import { COMPANY_CONFIG } from '@/config/company';

const ENQUIRY_TYPES = [
  'General Business Inquiry',
  'Strategic Partnership & Joint Venture',
  'Industrial Manufacturing & Sourcing',
  'Infrastructure & Construction Projects',
  'International Trade & Commodities',
  'Consultancy & Corporate Recovery',
  'Mining & Natural Resources',
  'Clean Energy & Circular Economy',
];

const contactSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(6, 'Please enter a valid telephone contact'),
  companyName: z.string().optional(),
  enquiryType: z.string().min(1, 'Please select an enquiry classification'),
  subject: z.string().min(4, 'Subject line is required'),
  message: z.string().min(15, 'Please provide details of your message (minimum 15 characters)'),
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
      fullName: '',
      email: '',
      phone: '',
      companyName: '',
      enquiryType: '',
      subject: '',
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

  if (status === 'success' && submittedData) {
    const mailtoSubject = encodeURIComponent(`[${submittedData.enquiryType}] ${submittedData.subject}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${submittedData.fullName}\nEmail: ${submittedData.email}\nPhone: ${submittedData.phone}\nCompany: ${
        submittedData.companyName || 'N/A'
      }\nEnquiry Type: ${submittedData.enquiryType}\nSubject: ${submittedData.subject}\n\nMessage:\n${submittedData.message}`
    );

    return (
      <div className="p-8 rounded-[1px] bg-[#101111] border border-[#C9A34F]/40 text-center space-y-5 animate-in fade-in duration-300 font-sans">
        <div className="w-12 h-12 mx-auto rounded-[1px] bg-[rgba(201,163,79,0.1)] border border-[#C9A34F] flex items-center justify-center text-[#E8D29A]">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-serif text-2xl font-normal text-[#F3F0E9]">
            Transmission Formatted
          </h3>
          <p className="text-xs sm:text-sm text-[#A5A39C] mt-2 max-w-md mx-auto leading-relaxed">
            Thank you, <strong className="text-[#E8D29A]">{submittedData.fullName}</strong>. Your communication regarding &ldquo;{submittedData.subject}&rdquo; has been formatted for our administrative desk.
          </p>
        </div>

        <div className="p-4 rounded-[1px] bg-[#171816] border border-[rgba(201,163,79,0.18)] text-left text-xs space-y-1.5 max-w-md mx-auto">
          <div>
            <span className="text-[#A5A39C]">Classification:</span>{' '}
            <span className="text-[#E8D29A] font-medium">{submittedData.enquiryType}</span>
          </div>
          <div>
            <span className="text-[#A5A39C]">Primary Destination:</span>{' '}
            <span className="text-[#F3F0E9]">{COMPANY_CONFIG.contact.email}</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Button
            href={`mailto:${COMPANY_CONFIG.contact.email}?subject=${mailtoSubject}&body=${mailtoBody}`}
            variant="primary"
            size="md"
            withArrow
          >
            DISPATCH VIA LOCAL EMAIL CLIENT
          </Button>
          <Button variant="outline" size="md" onClick={handleReset}>
            NEW MESSAGE
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 md:p-8 rounded-[1px] bg-[#101111] border border-[rgba(201,163,79,0.2)] space-y-4 shadow-card-dark font-sans"
    >
      <div className="border-b border-[rgba(201,163,79,0.14)] pb-4">
        <span className="text-[10px] font-sans font-medium tracking-[0.25em] uppercase text-[#C9A34F]">
          CORPORATE DESK
        </span>
        <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#F3F0E9] mt-1">
          Direct Business Enquiry
        </h3>
        <p className="text-xs text-[#A5A39C] mt-1">
          Send a direct communication to KINGSPHERE corporate office in Parbhani, Maharashtra.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-medium uppercase tracking-wider text-[#E8D29A] mb-1.5">
            Full Name *
          </label>
          <input
            {...register('fullName')}
            type="text"
            placeholder="Your name"
            className={`w-full min-h-[44px] px-3.5 py-2.5 rounded-[1px] bg-[#171816] border text-base sm:text-xs text-[#F3F0E9] placeholder-[#6C6A64] focus:outline-none transition-all duration-300 ${
              errors.fullName
                ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500/30'
                : 'border-[rgba(201,163,79,0.2)] focus:border-[#C9A34F] focus:ring-1 focus:ring-[#C9A34F]/30 focus:shadow-[0_0_12px_rgba(201,163,79,0.2)]'
            }`}
          />
          {errors.fullName && (
            <span className="text-[11px] text-red-400 mt-1 flex items-center gap-1 animate-in fade-in duration-200">
              <AlertCircle className="w-3 h-3" /> {errors.fullName.message}
            </span>
          )}
        </div>

        {/* Email Address */}
        <div>
          <label className="block text-xs font-medium uppercase tracking-wider text-[#E8D29A] mb-1.5">
            Email Address *
          </label>
          <input
            {...register('email')}
            type="email"
            placeholder="name@company.com"
            className={`w-full min-h-[44px] px-3.5 py-2.5 rounded-[1px] bg-[#171816] border text-base sm:text-xs text-[#F3F0E9] placeholder-[#6C6A64] focus:outline-none transition-all duration-300 ${
              errors.email
                ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500/30'
                : 'border-[rgba(201,163,79,0.2)] focus:border-[#C9A34F] focus:ring-1 focus:ring-[#C9A34F]/30 focus:shadow-[0_0_12px_rgba(201,163,79,0.2)]'
            }`}
          />
          {errors.email && (
            <span className="text-[11px] text-red-400 mt-1 flex items-center gap-1 animate-in fade-in duration-200">
              <AlertCircle className="w-3 h-3" /> {errors.email.message}
            </span>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-xs font-medium uppercase tracking-wider text-[#E8D29A] mb-1.5">
            Phone Number *
          </label>
          <input
            {...register('phone')}
            type="tel"
            placeholder="+91 ..."
            className={`w-full min-h-[44px] px-3.5 py-2.5 rounded-[1px] bg-[#171816] border text-base sm:text-xs text-[#F3F0E9] placeholder-[#6C6A64] focus:outline-none transition-all duration-300 ${
              errors.phone
                ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500/30'
                : 'border-[rgba(201,163,79,0.2)] focus:border-[#C9A34F] focus:ring-1 focus:ring-[#C9A34F]/30 focus:shadow-[0_0_12px_rgba(201,163,79,0.2)]'
            }`}
          />
          {errors.phone && (
            <span className="text-[11px] text-red-400 mt-1 flex items-center gap-1 animate-in fade-in duration-200">
              <AlertCircle className="w-3 h-3" /> {errors.phone.message}
            </span>
          )}
        </div>

        {/* Company Name */}
        <div>
          <label className="block text-xs font-medium uppercase tracking-wider text-[#E8D29A] mb-1.5">
            Company Name (Optional)
          </label>
          <input
            {...register('companyName')}
            type="text"
            placeholder="Firm or Organisation"
            className="w-full min-h-[44px] px-3.5 py-2.5 rounded-[1px] bg-[#171816] border border-[rgba(201,163,79,0.2)] text-base sm:text-xs text-[#F3F0E9] placeholder-[#6C6A64] focus:outline-none focus:border-[#C9A34F] focus:ring-1 focus:ring-[#C9A34F]/30 focus:shadow-[0_0_12px_rgba(201,163,79,0.2)] transition-all duration-300"
          />
        </div>

        {/* Enquiry Type */}
        <div>
          <label className="block text-xs font-medium uppercase tracking-wider text-[#E8D29A] mb-1.5">
            Enquiry Type *
          </label>
          <select
            {...register('enquiryType')}
            className={`w-full min-h-[44px] px-3.5 py-2.5 rounded-[1px] bg-[#171816] border text-base sm:text-xs text-[#F3F0E9] focus:outline-none transition-all duration-300 ${
              errors.enquiryType
                ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500/30'
                : 'border-[rgba(201,163,79,0.2)] focus:border-[#C9A34F] focus:ring-1 focus:ring-[#C9A34F]/30 focus:shadow-[0_0_12px_rgba(201,163,79,0.2)]'
            }`}
          >
            <option value="">Select Category</option>
            {ENQUIRY_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.enquiryType && (
            <span className="text-[11px] text-red-400 mt-1 flex items-center gap-1 animate-in fade-in duration-200">
              <AlertCircle className="w-3 h-3" /> {errors.enquiryType.message}
            </span>
          )}
        </div>

        {/* Subject */}
        <div>
          <label className="block text-xs font-medium uppercase tracking-wider text-[#E8D29A] mb-1.5">
            Subject *
          </label>
          <input
            {...register('subject')}
            type="text"
            placeholder="Brief subject of inquiry"
            className={`w-full min-h-[44px] px-3.5 py-2.5 rounded-[1px] bg-[#171816] border text-base sm:text-xs text-[#F3F0E9] placeholder-[#6C6A64] focus:outline-none transition-all duration-300 ${
              errors.subject
                ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500/30'
                : 'border-[rgba(201,163,79,0.2)] focus:border-[#C9A34F] focus:ring-1 focus:ring-[#C9A34F]/30 focus:shadow-[0_0_12px_rgba(201,163,79,0.2)]'
            }`}
          />
          {errors.subject && (
            <span className="text-[11px] text-red-400 mt-1 flex items-center gap-1 animate-in fade-in duration-200">
              <AlertCircle className="w-3 h-3" /> {errors.subject.message}
            </span>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-medium uppercase tracking-wider text-[#E8D29A] mb-1.5">
          Message Details *
        </label>
        <textarea
          {...register('message')}
          rows={4}
          placeholder="Please write your detailed inquiry or business proposal..."
          className={`w-full px-3.5 py-2.5 rounded-[1px] bg-[#171816] border text-base sm:text-xs text-[#F3F0E9] placeholder-[#6C6A64] focus:outline-none transition-all duration-300 ${
            errors.message
              ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500/30'
              : 'border-[rgba(201,163,79,0.2)] focus:border-[#C9A34F] focus:ring-1 focus:ring-[#C9A34F]/30 focus:shadow-[0_0_12px_rgba(201,163,79,0.2)]'
          }`}
        />
        {errors.message && (
          <span className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" /> {errors.message.message}
          </span>
        )}
      </div>

      {/* Consent Checkbox */}
      <div className="flex items-start gap-3">
        <input
          {...register('consent')}
          id="contact-consent"
          type="checkbox"
          className="mt-1 h-3.5 w-3.5 rounded-[1px] border-[rgba(201,163,79,0.3)] bg-[#171816] accent-[#C9A34F]"
        />
        <label htmlFor="contact-consent" className="text-xs text-[#A5A39C]">
          I agree that KINGSPHERE may process these contact details to respond to this business enquiry.
        </label>
      </div>
      {errors.consent && (
        <span className="text-[11px] text-red-400 block -mt-2">
          {errors.consent.message}
        </span>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        size="md"
        className="w-full"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>FORMATTING DISPATCH...</span>
          </>
        ) : (
          <>
            <Send className="w-3.5 h-3.5" />
            <span>TRANSMIT MESSAGE</span>
          </>
        )}
      </Button>
    </form>
  );
}
