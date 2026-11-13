'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { PARTNERSHIP_CATEGORIES } from '@/config/partnerships';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, AlertCircle, Loader2, Send } from 'lucide-react';

const partnershipSchema = z.object({
  fullName: z.string().min(2, 'Full Name is required'),
  companyName: z.string().min(2, 'Company Name is required'),
  email: z.string().email('Please enter a valid business email'),
  phone: z.string().min(6, 'Please enter a valid phone number with country code'),
  country: z.string().min(2, 'Country is required'),
  category: z.string().min(1, 'Please select a partnership category'),
  message: z.string().min(15, 'Please share brief details of your proposal (min 15 characters)'),
  consent: z.boolean().refine((val) => val === true, {
    message: 'You must acknowledge the terms to submit',
  }),
});

type PartnershipFormValues = z.infer<typeof partnershipSchema>;

export function PartnershipForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [submittedData, setSubmittedData] = useState<PartnershipFormValues | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PartnershipFormValues>({
    resolver: zodResolver(partnershipSchema),
    defaultValues: {
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      country: '',
      category: '',
      message: '',
      consent: false,
    },
  });

  const onSubmit = async (data: PartnershipFormValues) => {
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
    const mailtoSubject = encodeURIComponent(`Partnership Proposal: ${submittedData.category} - ${submittedData.companyName}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${submittedData.fullName}\nCompany: ${submittedData.companyName}\nEmail: ${submittedData.email}\nPhone: ${submittedData.phone}\nCountry: ${submittedData.country}\nCategory: ${submittedData.category}\n\nProposal Details:\n${submittedData.message}`
    );

    return (
      <div className="p-8 rounded-[1px] bg-[#070B0E] border border-[#C9A34F]/40 text-center space-y-5 animate-in fade-in duration-300">
        <div className="w-12 h-12 mx-auto rounded-[1px] bg-[rgba(201,163,79,0.1)] border border-[#C9A34F] flex items-center justify-center text-[#E8D29A]">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-serif text-2xl font-normal text-[#F3F0E9]">
            Partnership Inquiry Recorded
          </h3>
          <p className="text-xs sm:text-sm text-white mt-2 max-w-md mx-auto font-sans leading-relaxed">
            Thank you, <strong className="text-[#E8D29A]">{submittedData.fullName}</strong>. Your strategic alliance inquiry for{' '}
            <strong className="text-[#F3F0E9]">{submittedData.companyName}</strong> has been prepared.
          </p>
        </div>

        <div className="p-4 rounded-[1px] bg-[#171816] border border-[rgba(201,163,79,0.18)] text-left text-xs space-y-1.5 max-w-md mx-auto font-sans">
          <div>
            <span className="text-white">Category:</span>{' '}
            <span className="text-[#E8D29A] font-medium">{submittedData.category}</span>
          </div>
          <div>
            <span className="text-white">Corporate Destination:</span>{' '}
            <span className="text-[#F3F0E9]">partnerships@kingsphere.in</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Button
            href={`mailto:partnerships@kingsphere.in?subject=${mailtoSubject}&body=${mailtoBody}`}
            variant="primary"
            size="md"
            withArrow
          >
            SEND VIA OFFICIAL MAIL CLIENT
          </Button>
          <Button variant="outline" size="md" onClick={handleReset}>
            SUBMIT ANOTHER INQUIRY
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 md:p-8 rounded-[1px] bg-[#070B0E] border border-[rgba(201,163,79,0.2)] space-y-6 shadow-card-dark font-sans"
    >
      <div className="border-b border-[rgba(201,163,79,0.14)] pb-4">
        <span className="text-[10px] font-sans font-medium tracking-[0.25em] uppercase text-[#C9A34F]">
          FORMAL ALLIANCE APPLICATION
        </span>
        <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#F3F0E9] mt-1">
          Initiate Strategic Partnership
        </h3>
        <p className="text-xs text-white mt-1">
          Complete the credentials below for direct evaluation by our executive leadership.
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
            placeholder="e.g. Rajesh Kumar"
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

        {/* Company Name */}
        <div>
          <label className="block text-xs font-medium uppercase tracking-wider text-[#E8D29A] mb-1.5">
            Company / Organization Name *
          </label>
          <input
            {...register('companyName')}
            type="text"
            placeholder="e.g. Global Infra Ventures Ltd"
            className={`w-full min-h-[44px] px-3.5 py-2.5 rounded-[1px] bg-[#171816] border text-base sm:text-xs text-[#F3F0E9] placeholder-[#6C6A64] focus:outline-none transition-all duration-300 ${
              errors.companyName
                ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500/30'
                : 'border-[rgba(201,163,79,0.2)] focus:border-[#C9A34F] focus:ring-1 focus:ring-[#C9A34F]/30 focus:shadow-[0_0_12px_rgba(201,163,79,0.2)]'
            }`}
          />
          {errors.companyName && (
            <span className="text-[11px] text-red-400 mt-1 flex items-center gap-1 animate-in fade-in duration-200">
              <AlertCircle className="w-3 h-3" /> {errors.companyName.message}
            </span>
          )}
        </div>

        {/* Business Email */}
        <div>
          <label className="block text-xs font-medium uppercase tracking-wider text-[#E8D29A] mb-1.5">
            Business Email *
          </label>
          <input
            {...register('email')}
            type="email"
            placeholder="e.g. rajesh@enterprise.com"
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
            Phone / Contact Number *
          </label>
          <input
            {...register('phone')}
            type="tel"
            placeholder="e.g. +91 98765 43210"
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

        {/* Country */}
        <div>
          <label className="block text-xs font-medium uppercase tracking-wider text-[#E8D29A] mb-1.5">
            Country of Operation *
          </label>
          <input
            {...register('country')}
            type="text"
            placeholder="e.g. India / UAE / Germany"
            className={`w-full min-h-[44px] px-3.5 py-2.5 rounded-[1px] bg-[#171816] border text-base sm:text-xs text-[#F3F0E9] placeholder-[#6C6A64] focus:outline-none transition-all duration-300 ${
              errors.country
                ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500/30'
                : 'border-[rgba(201,163,79,0.2)] focus:border-[#C9A34F] focus:ring-1 focus:ring-[#C9A34F]/30 focus:shadow-[0_0_12px_rgba(201,163,79,0.2)]'
            }`}
          />
          {errors.country && (
            <span className="text-[11px] text-red-400 mt-1 flex items-center gap-1 animate-in fade-in duration-200">
              <AlertCircle className="w-3 h-3" /> {errors.country.message}
            </span>
          )}
        </div>

        {/* Partnership Category */}
        <div>
          <label className="block text-xs font-medium uppercase tracking-wider text-[#E8D29A] mb-1.5">
            Partnership Category *
          </label>
          <select
            {...register('category')}
            className={`w-full min-h-[44px] px-3.5 py-2.5 rounded-[1px] bg-[#171816] border text-base sm:text-xs text-[#F3F0E9] focus:outline-none transition-all duration-300 ${
              errors.category
                ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500/30'
                : 'border-[rgba(201,163,79,0.2)] focus:border-[#C9A34F] focus:ring-1 focus:ring-[#C9A34F]/30 focus:shadow-[0_0_12px_rgba(201,163,79,0.2)]'
            }`}
          >
            <option value="">Select relevant partnership focus</option>
            {PARTNERSHIP_CATEGORIES.map((cat) => (
              <option key={cat.id} value={cat.title}>
                {cat.title}
              </option>
            ))}
          </select>
          {errors.category && (
            <span className="text-[11px] text-red-400 mt-1 flex items-center gap-1 animate-in fade-in duration-200">
              <AlertCircle className="w-3 h-3" /> {errors.category.message}
            </span>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-medium uppercase tracking-wider text-[#E8D29A] mb-1.5">
          Proposal / Collaboration Overview *
        </label>
        <textarea
          {...register('message')}
          rows={4}
          placeholder="Briefly describe your enterprise scale, target sector, and expected partnership model..."
          className={`w-full px-3.5 py-2.5 rounded-[1px] bg-[#171816] border text-xs text-[#F3F0E9] placeholder-[#6C6A64] focus:outline-none transition-all duration-300 ${
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
          id="partnership-consent"
          type="checkbox"
          className="mt-1 h-3.5 w-3.5 rounded-[1px] border-[rgba(201,163,79,0.3)] bg-[#171816] accent-[#C9A34F]"
        />
        <label htmlFor="partnership-consent" className="text-xs text-white leading-relaxed">
          I confirm that the submitted corporate information is accurate and authorize KINGSPHERE to review this inquiry for strategic business alignment.
        </label>
      </div>
      {errors.consent && (
        <span className="text-[11px] text-red-400 block -mt-2">
          {errors.consent.message}
        </span>
      )}

      {/* Submit CTA */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>TRANSMITTING INQUIRY...</span>
          </>
        ) : (
          <>
            <Send className="w-3.5 h-3.5" />
            <span>SUBMIT PARTNERSHIP PROPOSAL</span>
          </>
        )}
      </Button>
    </form>
  );
}
