import React from 'react';
import { ArrowRight } from 'lucide-react';
import { WordByWordText } from './animations/TextAnimations.tsx';

interface VolunteerPartnerBannerProps {
  onOpenVolunteer: () => void;
  onOpenPartner: () => void;
  onNavigate?: (path: string) => void;
}

export const VolunteerPartnerBanner: React.FC<VolunteerPartnerBannerProps> = ({
  onOpenVolunteer,
  onOpenPartner,
  onNavigate,
}) => {
  return (
    <section
      id="get-involved"
      className="bg-[#09111b] py-12 sm:py-16 w-full scroll-mt-24"
      aria-label="Volunteer and Partner Opportunities"
    >
      <div id="volunteer-partner" className="sr-only" />
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ONE single joined card with rounded corners, split exactly 50/50 with NO gap */}
        <div className="rounded-[28px] sm:rounded-[36px] overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-0 shadow-2xl border border-white/10">
          
          {/* LEFT HALF: Background photo of volunteers with dark overlay */}
          <div className="relative min-h-[380px] sm:min-h-[450px] p-8 sm:p-12 lg:p-14 flex flex-col justify-center text-left overflow-hidden">
            {/* Background Photo */}
            <div className="absolute inset-0 z-0">
              <picture>
                <source srcSet="/assets/aistudio/IMG-20260519-WA0286_038cb92f.webp" type="image/webp" />
                <img
                  src="/assets/aistudio/IMG-20260519-WA0286_038cb92f.jpg"
                  alt="RON Humanitarian Foundation field volunteers"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center"
                />
              </picture>
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-[#0D1722]/80" />
            </div>

            {/* Left Content */}
            <div className="relative z-10 max-w-md w-full">
              <WordByWordText
                as="h3"
                text="Become a volunteer?"
                className="font-heading font-extrabold text-white text-3xl sm:text-4xl md:text-[42px] leading-[1.15] tracking-tight mb-4 block"
                delay={0.1}
              />
              <p className="text-white/95 text-base sm:text-[17px] leading-relaxed mb-8 font-body">
                Join us on the ground and help deliver support where it's needed most.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => {
                    if (onNavigate) {
                      onNavigate('/volunteer');
                    } else {
                      onOpenVolunteer();
                    }
                  }}
                  className="rounded-full bg-[#FDB913] hover:bg-[#e6a50e] text-[#0D1722] font-extrabold px-8 py-3.5 text-base inline-flex items-center gap-2 transition-all duration-300 shadow-none border-0 active:scale-95 cursor-pointer"
                >
                  <span>Become a Volunteer</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT HALF: Solid royal blue background (#0B2A8A) sitting directly touching with no gap */}
          <div className="relative min-h-[380px] sm:min-h-[450px] bg-[#0B2A8A] p-8 sm:p-12 lg:p-14 flex flex-col justify-center text-left text-white">
            <div className="relative z-10 max-w-md w-full">
              <WordByWordText
                as="h3"
                text="Partner With Us"
                className="font-heading font-extrabold text-white text-3xl sm:text-4xl md:text-[42px] leading-[1.15] tracking-tight mb-4 block"
                delay={0.1}
              />
              <p className="text-blue-100 text-base sm:text-[17px] leading-relaxed mb-8 font-body">
                Together, we can reach more communities, create more opportunities and build lasting impact.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => {
                    if (onNavigate) {
                      onNavigate('/partner-with-us');
                    } else {
                      onOpenPartner();
                    }
                  }}
                  className="rounded-full bg-[#FDB913] hover:bg-[#e6a50e] text-[#0D1722] font-extrabold px-8 py-3.5 text-base inline-flex items-center gap-2 transition-all duration-300 shadow-none border-0 active:scale-95 cursor-pointer"
                >
                  <span>Partner With Us</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
