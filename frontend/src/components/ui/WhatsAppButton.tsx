'use client';

import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

export function WhatsAppButton({
  phoneNumber = '919970444143',
  defaultMessage = 'Hello KINGSPHERE, I would like to inquire about business and strategic partnership opportunities.',
}: WhatsAppButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const encodedMessage = encodeURIComponent(defaultMessage);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 font-sans">
      {/* Tooltip / Label */}
      <div
        className={`hidden sm:flex items-center px-3.5 py-1.5 rounded-full bg-[#14222E]/95 border border-[#DDB763]/50 text-white text-xs font-medium shadow-[0_10px_25px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all duration-300 pointer-events-none ${
          isHovered
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-2'
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] mr-2 animate-ping" />
        <span className="text-white">Chat with KINGSPHERE on WhatsApp</span>
      </div>

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group w-14 h-14 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center text-white shadow-[0_10px_30px_rgba(37,211,102,0.4),0_0_20px_rgba(221,183,99,0.2)] hover:shadow-[0_12px_35px_rgba(37,211,102,0.6),0_0_30px_rgba(221,183,99,0.4)] transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-[#0E1720]"
        aria-label="Direct WhatsApp Inquiry with KINGSPHERE"
      >
        {/* Animated Radar Pulse */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" />

        {/* WhatsApp SVG Icon */}
        <svg
          className="w-7 h-7 fill-current relative z-10 transition-transform duration-300 group-hover:scale-110"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.031 0C5.396 0 0.009 5.397 0.009 12.038c0 2.122.555 4.187 1.609 6.012L0 24l6.128-1.605c1.76 1.002 3.771 1.531 5.903 1.531 6.634 0 12.023-5.397 12.023-12.038C24.054 5.397 18.665 0 12.031 0zm.019 22.016c-1.802 0-3.57-.484-5.113-1.401l-.367-.218-3.799.997 1.014-3.704-.239-.38a9.98 9.98 0 01-1.531-5.272c0-5.529 4.498-10.026 10.035-10.026 5.538 0 10.036 4.497 10.036 10.026 0 5.53-4.498 10.026-10.036 10.026zm5.497-7.509c-.301-.151-1.782-.88-2.059-.98-.276-.101-.477-.151-.678.151-.2.302-.779.98-.955 1.182-.176.201-.352.226-.653.075-.302-.151-1.274-.47-2.428-1.498-.898-.801-1.504-1.79-1.68-2.092-.176-.302-.019-.465.132-.615.136-.135.302-.352.453-.528.151-.176.201-.302.302-.503.1-.201.05-.377-.025-.528-.075-.151-.678-1.633-.929-2.236-.245-.588-.494-.509-.678-.519-.176-.01-.377-.01-.578-.01-.201 0-.528.075-.804.377-.276.302-1.055 1.03-1.055 2.512 0 1.482 1.08 2.914 1.231 3.115.151.201 2.125 3.245 5.148 4.551.719.311 1.28.497 1.718.636.722.23 1.379.197 1.9.12.58-.087 1.782-.728 2.033-1.432.251-.703.251-1.306.176-1.432-.075-.126-.276-.201-.577-.352z" />
        </svg>
      </a>
    </div>
  );
}

