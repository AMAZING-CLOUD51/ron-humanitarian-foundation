import React from 'react';
import { ScrambleText, WordByWordText } from './animations/TextAnimations.tsx';
import { OptimizedImage } from './ui/OptimizedImage.tsx';

interface FAQSectionProps {
  onOpenPartnerModal?: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = () => {
  return (
    <section
      id="faq"
      className="bg-white py-[44px] lg:py-[64px] border-b border-gray-100"
      aria-label="Contact and Inquiries"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ONE ROYAL BLUE ROUNDED BLOCK MATCHING SCREENSHOT NEWWWWWWW.png */}
        <div className="bg-[#0B2A8A] text-white rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-xl text-left">
          
          {/* Top: The one image (Kuru Karama GPS field outreach photo) */}
          <div className="w-full h-[240px] sm:h-[320px] md:h-[360px] relative overflow-hidden bg-[#07174a]">
            <OptimizedImage
              src="/assets/aistudio/1000002289_156d0858.jpg"
              alt="RON Humanitarian mobile medical outreach in Kuru Karama, Plateau State"
              title="RON Humanitarian Mobile Medical Outreach • Kuru Karama, Plateau State"
              className="w-full h-full"
            />
          </div>

          {/* Underneath: Cursive amber label, white bold heading, short line, yellow rounded Contact Us button */}
          <div className="p-8 sm:p-12 lg:p-16">
            <ScrambleText
              as="span"
              text="Still have questions?"
              durationMs={450}
              className="font-script text-[#FDB913] text-2xl sm:text-3xl font-semibold italic block mb-2 select-none"
            />
            <WordByWordText
              as="h2"
              text="We're happy to talk through our work."
              className="font-heading font-extrabold text-white text-3xl sm:text-4xl md:text-[44px] leading-tight mb-3 block"
              delay={0.1}
            />
            <p className="text-white/95 text-base sm:text-lg mb-8 max-w-xl font-body">
              Reach out and a member of our team will get back to you.
            </p>
            <div>
              <a
                href="#footer"
                className="inline-flex items-center justify-center rounded-full bg-[#FDB913] hover:bg-[#e6a50e] text-[#0D1722] font-extrabold px-8 py-3.5 text-base transition-all duration-300 shadow-none border-0 active:scale-95 cursor-pointer"
              >
                Contact Us
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
