'use client';

import React, { useState, useEffect, useRef } from 'react';
import { BUSINESS_APPROACH_STEPS } from '@/config/business-approach';
import { CheckCircle2, Play, Pause } from 'lucide-react';

const STEP_DURATION = 4000; // 4 seconds per phase

export function ApproachTimeline({ interactive = true }: { interactive?: boolean }) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progressPercent, setProgressPercent] = useState(0);

  const activeStep = BUSINESS_APPROACH_STEPS[activeStepIndex];
  const startTimeRef = useRef<number>(Date.now());

  // Automatic Step Progression with smooth timer
  useEffect(() => {
    if (isPaused) return;

    startTimeRef.current = Date.now();
    setProgressPercent(0);

    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const currentPercent = Math.min((elapsed / STEP_DURATION) * 100, 100);
      setProgressPercent(currentPercent);

      if (elapsed >= STEP_DURATION) {
        setActiveStepIndex((prev) => (prev + 1) % BUSINESS_APPROACH_STEPS.length);
        startTimeRef.current = Date.now();
        setProgressPercent(0);
      }
    }, 40);

    return () => clearInterval(progressInterval);
  }, [activeStepIndex, isPaused]);

  const handleStepClick = (idx: number) => {
    if (!interactive) return;
    setActiveStepIndex(idx);
    startTimeRef.current = Date.now();
    setProgressPercent(0);
  };

  return (
    <div
      className="w-full space-y-10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Autoplay Status & Controls Bar */}
      <div className="flex items-center justify-between text-xs text-[#A5A39C] font-sans px-1">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#C9A34F] animate-pulse" />
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#E8D29A]">
            AUTOMATIC EXECUTION SEQUENCE • PHASE 0{activeStepIndex + 1} OF 06
          </span>
        </div>

        <button
          onClick={() => setIsPaused((prev) => !prev)}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[1px] bg-[#101111] border border-[rgba(201,163,79,0.25)] hover:border-[#C9A34F] text-[#E8D29A] text-[10px] uppercase tracking-wider transition-colors cursor-pointer"
          title={isPaused ? 'Resume Auto-Progression' : 'Pause Auto-Progression'}
        >
          {isPaused ? (
            <>
              <Play className="w-3 h-3 text-[#C9A34F]" />
              <span>Resume</span>
            </>
          ) : (
            <>
              <Pause className="w-3 h-3 text-[#C9A34F]" />
              <span>Hover to Pause</span>
            </>
          )}
        </button>
      </div>

      {/* Horizontal Architectural Stepper (Desktop) */}
      <div className="hidden lg:block relative py-2">
        {/* Continuous Precision Base Line: Stretches exactly from Center of Node 01 to Center of Node 06 */}
        <div className="absolute top-[24px] left-[8.333%] right-[8.333%] h-[2px] -translate-y-1/2 bg-[rgba(201,163,79,0.22)] z-0" />

        {/* Dynamic Golden Connecting Progress Line: Smoothly travels between node centers */}
        <div
          className="absolute top-[24px] left-[8.333%] h-[2px] -translate-y-1/2 bg-gradient-to-r from-[#C9A34F] via-[#E8D29A] to-[#C9A34F] transition-all duration-500 z-0 shadow-[0_0_12px_rgba(201,163,79,0.8)]"
          style={{ width: `${(activeStepIndex / 5) * 83.333}%` }}
        />

        {/* 6 Step Nodes Grid */}
        <div className="grid grid-cols-6 relative z-10">
          {BUSINESS_APPROACH_STEPS.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            const isPassed = activeStepIndex >= idx;

            return (
              <button
                key={step.step}
                onClick={() => handleStepClick(idx)}
                className="flex flex-col items-center text-center group cursor-pointer focus:outline-none"
              >
                {/* Node Box: Fully Opaque background so the line sits BEHIND the box cleanly */}
                <div
                  className={`relative z-20 w-12 h-12 rounded-[2px] flex items-center justify-center transition-all duration-300 border ${isActive
                      ? 'bg-[#171816] border-[#E8D29A] text-[#E8D29A] shadow-[0_0_20px_rgba(201,163,79,0.45)] scale-110 ring-2 ring-[#C9A34F]/30'
                      : isPassed
                        ? 'bg-[#101111] border-[#C9A34F] text-[#C9A34F]'
                        : 'bg-[#080909] border-[rgba(201,163,79,0.25)] text-[#A5A39C] hover:border-[#C9A34F]/60 hover:text-[#E8D29A]'
                    }`}
                >
                  <span className="font-mono text-xs font-semibold">{step.step}</span>

                  {/* Micro Progress Bar inside active step node */}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#080909] overflow-hidden rounded-b-[1px]">
                      <div
                        className="h-full bg-gradient-to-r from-[#C9A34F] to-[#E8D29A] transition-all duration-75"
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                  )}
                </div>

                {/* Title & Phase Label */}
                <span className={`font-serif text-xs font-normal mt-3.5 leading-snug max-w-[130px] transition-colors ${isActive ? 'text-[#E8D29A] font-medium' : 'text-[#D4D2CD] group-hover:text-[#F3F0E9]'
                  }`}>
                  {step.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Step Highlight Card (Desktop Display) - Dynamic Animated Content */}
      <div
        key={activeStep.step}
        className="hidden lg:block rounded-[2px] bg-[#101111] border border-[rgba(201,163,79,0.28)] p-8 sm:p-10 shadow-card-dark transition-all duration-500 animate-in fade-in slide-in-from-bottom-2"
      >
        <div className="grid grid-cols-12 gap-8 items-center">
          {/* Left Column: Phase Description */}
          <div className="col-span-8 space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs px-2.5 py-0.5 rounded-[1px] bg-[#C9A34F] text-[#080909] font-semibold">
                PHASE {activeStep.step}
              </span>
              <span className="text-[10px] uppercase font-sans font-medium tracking-[0.2em] text-[#C9A34F]">
                Execution Methodology
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#F3F0E9] tracking-tight">
              {activeStep.title}
            </h3>

            <p className="text-sm font-serif italic text-[#E8D29A]">
              &ldquo;{activeStep.tagline}&rdquo;
            </p>

            <p className="text-xs sm:text-sm text-[#A5A39C] leading-relaxed font-sans max-w-2xl">
              {activeStep.description}
            </p>
          </div>

          {/* Right Column: Actions & Deliverables */}
          <div className="col-span-4 border-l border-[rgba(201,163,79,0.18)] pl-8 space-y-4 font-sans">
            <div>
              <div className="text-[10px] uppercase font-medium tracking-wider text-[#C9A34F]">
                Operational Action
              </div>
              <div className="text-xs text-[#F3F0E9] mt-1 leading-relaxed">
                {activeStep.keyAction}
              </div>
            </div>

            <div className="pt-2 border-t border-[rgba(201,163,79,0.12)]">
              <div className="text-[10px] uppercase font-medium tracking-wider text-[#E8D29A]">
                Key Deliverable
              </div>
              <div className="text-xs text-[#A5A39C] mt-1 flex items-start gap-1.5 leading-relaxed">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A34F] shrink-0 mt-0.5" />
                <span>{activeStep.deliverable}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Step Timing Bar */}
        <div className="mt-8 pt-4 border-t border-[rgba(201,163,79,0.12)] flex items-center justify-between text-[10px] text-[#A5A39C] font-mono">
          <span>STEP PROGRESSION</span>
          <div className="w-48 h-[2px] bg-[#171816] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#C9A34F] to-[#E8D29A] transition-all duration-75"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <span className="text-[#E8D29A]">{Math.round(progressPercent)}%</span>
        </div>
      </div>

      {/* Vertical Timeline (Mobile & Tablet) */}
      <div className="lg:hidden relative pl-5 sm:pl-7 space-y-4 font-sans">
        {/* Continuous Precision Vertical Base Line */}
        <div className="absolute left-[13px] sm:left-[17px] top-6 bottom-6 w-[2px] bg-[rgba(201,163,79,0.22)] z-0" />

        {/* Dynamic Vertical Golden Progress Line */}
        <div
          className="absolute left-[13px] sm:left-[17px] top-6 w-[2px] bg-gradient-to-b from-[#C9A34F] via-[#E8D29A] to-[#C9A34F] transition-all duration-500 z-0 shadow-[0_0_10px_rgba(201,163,79,0.7)]"
          style={{ height: `${(activeStepIndex / 5) * 88}%` }}
        />

        {BUSINESS_APPROACH_STEPS.map((step, idx) => {
          const isSelected = activeStepIndex === idx;
          const isPassed = activeStepIndex >= idx;

          return (
            <div
              key={step.step}
              className={`relative rounded-[1px] p-4 sm:p-5 border transition-all duration-300 cursor-pointer ${isSelected
                  ? 'bg-[#141615] border-[#C9A34F] shadow-[0_0_20px_rgba(201,163,79,0.18)]'
                  : 'bg-[#101111] border-[rgba(201,163,79,0.18)] hover:border-[rgba(201,163,79,0.4)]'
                }`}
              onClick={() => handleStepClick(idx)}
            >
              {/* Timeline Node Attached directly onto the line */}
              <div
                className={`absolute -left-[27px] sm:-left-[35px] top-4 w-7 h-7 sm:w-8 sm:h-8 rounded-[2px] flex items-center justify-center font-mono text-[11px] sm:text-xs font-semibold z-10 border transition-all ${isSelected
                    ? 'bg-[#C9A34F] text-[#080909] border-[#E8D29A] shadow-[0_0_15px_rgba(201,163,79,0.6)] scale-110'
                    : isPassed
                      ? 'bg-[#171816] border-[#C9A34F] text-[#E8D29A]'
                      : 'bg-[#080909] border-[rgba(201,163,79,0.3)] text-[#A5A39C]'
                  }`}
              >
                {step.step}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[10px] text-[#C9A34F] font-semibold tracking-wider">
                    PHASE {step.step}
                  </span>
                  <span className="text-[9px] text-[#A5A39C] uppercase tracking-wider font-mono">
                    0{step.step} / 06
                  </span>
                </div>

                <h4 className="font-serif text-base sm:text-lg font-normal text-[#F3F0E9] mt-0.5">
                  {step.title}
                </h4>

                <p className="text-xs text-[#E8D29A] font-serif italic mt-0.5">
                  &ldquo;{step.tagline}&rdquo;
                </p>

                <p className="text-xs text-[#A5A39C] leading-relaxed mt-2 font-sans">
                  {step.description}
                </p>

                {isSelected && (
                  <div className="mt-3.5 pt-3.5 border-t border-[rgba(201,163,79,0.16)] space-y-2 text-xs animate-in fade-in duration-200">
                    <div>
                      <span className="text-[10px] uppercase font-semibold text-[#C9A34F] tracking-wider">
                        Operational Action:{' '}
                      </span>
                      <span className="text-[#F3F0E9]">{step.keyAction}</span>
                    </div>
                    <div className="flex items-start gap-1.5 text-[#A5A39C] pt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A34F] shrink-0 mt-0.5" />
                      <span>{step.deliverable}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
