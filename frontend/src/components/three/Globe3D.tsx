'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const GlobeCanvas = dynamic(() => import('./GlobeCanvas'), {
  ssr: false,
  loading: () => <GlobeFallback />,
});

function GlobeFallback() {
  return (
    <div className="w-full h-full min-h-[380px] sm:min-h-[460px] md:min-h-[500px] flex items-center justify-center relative">
      <div className="relative w-72 h-72 sm:w-84 sm:h-84 md:w-92 md:h-92 rounded-full border border-[rgba(201,163,79,0.2)] flex items-center justify-center">
        <div className="absolute inset-4 rounded-full border border-[rgba(201,163,79,0.12)] border-dashed animate-spin [animation-duration:35s]" />
        <div className="w-44 h-44 rounded-full bg-radial-gold opacity-35 blur-xl" />
        <div className="relative z-10 text-center">
          <div className="text-[10px] uppercase tracking-[0.25em] text-[#C9A34F] font-semibold">
            GLOBAL CONNECTIVITY
          </div>
          <div className="text-[9px] text-[#A5A39C] tracking-wider mt-0.5">
            KINGSPHERE NETWORK
          </div>
        </div>
      </div>
    </div>
  );
}

export function Globe3D() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <GlobeFallback />;
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="absolute inset-0 bg-radial-gold opacity-45 pointer-events-none" />
      <GlobeCanvas />
    </div>
  );
}
