import React, { useState, useEffect } from 'react';
import { ArrowUp, Phone, MessageCircle } from 'lucide-react';
import { FOUNDATION_INFO } from '../data/foundationData.ts';

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${FOUNDATION_INFO.whatsappRaw}?text=${encodeURIComponent(
    'Hello RON Humanitarian Foundation, I would like to learn more about supporting your mission.'
  )}`;

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all group relative focus-visible:outline-2 focus-visible:outline-[#25D366] pointer-events-auto"
        aria-label="Chat with RON Humanitarian Foundation on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        {/* Tooltip to the left */}
        <span className="absolute right-14 bg-[#0D1722] text-white text-xs font-bold py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
          Chat on WhatsApp
        </span>
      </a>

      {/* Direct Call Button */}
      <a
        href={`tel:${FOUNDATION_INFO.phone1Raw}`}
        className="w-12 h-12 rounded-full bg-[#0B2A8A] text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all group relative focus-visible:outline-2 focus-visible:outline-[#0B2A8A] pointer-events-auto"
        aria-label="Call RON Humanitarian Foundation directly"
      >
        <Phone className="w-5 h-5 fill-current" />
        {/* Tooltip to the left */}
        <span className="absolute right-14 bg-[#0D1722] text-white text-xs font-bold py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
          Call +234 707 710 4798
        </span>
      </a>

      {/* Scroll-to-top button stacked below Call & WhatsApp on the right (Yellow/Gold with dark arrow matching screenshots) */}
      <button
        onClick={scrollToTop}
        className={`w-12 h-12 rounded-full bg-[#FDB913] hover:bg-[#e6a50e] text-[#0D1722] flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 pointer-events-auto cursor-pointer ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-85 translate-y-0'
        }`}
        aria-label="Scroll to top of page"
        title="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 stroke-[2.5]" />
      </button>
    </div>
  );
};
