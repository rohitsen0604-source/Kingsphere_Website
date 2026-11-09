'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export type AnimationType =
  | 'fade-up'
  | 'fade-in'
  | 'slide-left'
  | 'slide-right'
  | 'scale'
  | 'mask-reveal'
  | 'clip-reveal'
  | 'line-draw';

interface GsapRevealProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  stagger?: number;
  className?: string;
  triggerHook?: string;
}

export function GsapReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 0.85,
  stagger = 0,
  className = '',
  triggerHook = 'top 88%',
}: GsapRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check user accessibility preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !elementRef.current) return;

    const el = elementRef.current;

    const ctx = gsap.context(() => {
      let fromVars: gsap.TweenVars = { opacity: 0 };
      let toVars: gsap.TweenVars = {
        opacity: 1,
        duration,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: triggerHook,
          toggleActions: 'play none none none',
          once: true,
        },
      };

      switch (animation) {
        case 'fade-up':
          fromVars = { opacity: 0, y: 32 };
          toVars = { ...toVars, y: 0 };
          break;
        case 'fade-in':
          fromVars = { opacity: 0 };
          toVars = { ...toVars };
          break;
        case 'slide-left':
          fromVars = { opacity: 0, x: -36 };
          toVars = { ...toVars, x: 0 };
          break;
        case 'slide-right':
          fromVars = { opacity: 0, x: 36 };
          toVars = { ...toVars, x: 0 };
          break;
        case 'scale':
          fromVars = { opacity: 0, scale: 0.94 };
          toVars = { ...toVars, scale: 1 };
          break;
        case 'mask-reveal':
        case 'clip-reveal':
          fromVars = { opacity: 0, clipPath: 'inset(100% 0% 0% 0%)' };
          toVars = { ...toVars, opacity: 1, clipPath: 'inset(0% 0% 0% 0%)', ease: 'power4.out' };
          break;
        case 'line-draw':
          fromVars = { transformOrigin: 'left center', scaleX: 0, opacity: 0 };
          toVars = { ...toVars, scaleX: 1, opacity: 1, ease: 'power2.inOut' };
          break;
      }

      if (stagger > 0) {
        const staggerItems = el.querySelectorAll('.gsap-item');
        if (staggerItems.length > 0) {
          gsap.fromTo(staggerItems, fromVars, {
            ...toVars,
            stagger,
          });
          return;
        }
      }

      gsap.fromTo(el, fromVars, toVars);
    }, elementRef);

    return () => ctx.revert();
  }, [animation, delay, duration, stagger, triggerHook]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
