import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CountUpNumber } from './CountUpNumber.tsx';
import { StaggeredRevealText, ScrambleText } from './animations/TextAnimations.tsx';
import { OptimizedImage } from './ui/OptimizedImage.tsx';

interface WhoWeAreProps {
  onDiscoverStory: () => void;
}

export const WhoWeAre: React.FC<WhoWeAreProps> = ({ onDiscoverStory }) => {
  return (
    <section
      id="who-we-are"
      className="bg-white py-[44px] lg:py-[64px] border-b border-gray-100"
      aria-label="Who We Are"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* 3-Column Layout: Side by side on desktop & tablet (md: 768px+). On mobile only (< 768px): Text first, then Photos, then Stats */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* LEFT COLUMN (Order 2 on Mobile, Left on Desktop/Tablet): 3 small stacked rounded-corner photo boxes */}
          <div className="order-2 md:order-1 md:col-span-3 lg:col-span-3 flex flex-col gap-3 sm:gap-3.5 w-full">
            {/* Box 1: Elderly woman holding medications with walking cane */}
            <div className="w-full h-[125px] sm:h-[135px] md:h-[130px] lg:h-[140px] rounded-[22px] overflow-hidden shadow-xs border border-gray-200/80 bg-gray-50">
              <OptimizedImage
                src="/assets/aistudio/1000002307_e69ace31.jpg"
                alt="Elderly community beneficiary receiving health medications and dignity support"
                title="Elderly Healthcare & Dignity Support"
                className="w-full h-full rounded-[22px]"
                priority={true}
              />
            </div>

            {/* Box 2: Children and youths holding books at IDP Camp Wasa */}
            <div className="w-full h-[125px] sm:h-[135px] md:h-[130px] lg:h-[140px] rounded-[22px] overflow-hidden shadow-xs border border-gray-200/80 bg-gray-50">
              <OptimizedImage
                src="/assets/aistudio/1000002072_884b99d2.jpg"
                alt="Children and youths holding learning books at IDP Camp Wasa"
                title="Learning Book Distribution • IDP Camp Wasa"
                className="w-full h-full rounded-[22px]"
                priority={true}
              />
            </div>

            {/* Box 3: Foundation volunteer in blue shirt distributing books to children in queue */}
            <div className="w-full h-[125px] sm:h-[135px] md:h-[130px] lg:h-[140px] rounded-[22px] overflow-hidden shadow-xs border border-gray-200/80 bg-gray-50">
              <OptimizedImage
                src="/assets/aistudio/1000002256_713ea3cb.jpg"
                alt="RON Foundation field volunteer in blue shirt distributing books to children in line"
                title="Volunteer Field Outreach • Educational Supplies"
                className="w-full h-full rounded-[22px]"
              />
            </div>
          </div>

          {/* MIDDLE COLUMN (Center on Desktop/Tablet, Order 1 on Mobile): Script label, heading, paragraphs, Discover button */}
          <div className="order-1 md:order-2 md:col-span-5 lg:col-span-5 text-left flex flex-col justify-center px-0 md:px-2">
            <div>
              {/* Cursive / script label with scramble effect */}
              <ScrambleText
                as="span"
                text="Who We Are"
                durationMs={480}
                className="font-script text-[#0B2A8A] text-2xl sm:text-3xl font-semibold block mb-2 select-none"
              />

              {/* Large bold serif heading with Staggered Text Reveal */}
              <StaggeredRevealText
                as="h2"
                lines={['Dignity.', 'Opportunity.', 'A better future.']}
                highlightIndexes={[2]}
                highlightClassName="text-[#FDB913]"
                className="font-heading font-extrabold text-[#0D1722] text-3xl sm:text-4xl md:text-[38px] lg:text-[42px] leading-[1.15] tracking-tight mb-4"
                stagger={0.12}
                delay={0.1}
              />

              {/* Paragraph text in grey */}
              <p className="text-gray-600 text-[15px] sm:text-[16px] leading-[1.7] font-body mb-3.5">
                RON Humanitarian Foundation began with one person's commitment to show up for others. In 2015, our founder, Chief Samuel Kasuwa, started supporting vulnerable families and communities. In 2025, that work became a registered foundation.
              </p>

              <p className="text-gray-600 text-[15px] sm:text-[16px] leading-[1.7] font-body mb-3.5">
                Today we respond to what communities tell us they need most - whether that's emergency food for displaced families, health checks in hard-to-reach areas, learning materials for children, or tools and training to help people earn an independent living.
              </p>

              <p className="text-gray-600 text-[15px] sm:text-[16px] leading-[1.7] font-body mb-6">
                Our work is guided by a simple belief: everyone deserves dignity, opportunity and the support needed to build a better future.
              </p>
            </div>

            {/* Discover Our Story Button */}
            <div>
              <button
                onClick={onDiscoverStory}
                className="h-[48px] px-7 py-3 rounded-full bg-[#FDB913] hover:bg-[#1F3A8A] text-[#0D1722] hover:text-white font-heading font-bold text-sm sm:text-base inline-flex items-center gap-2.5 transition-all duration-300 shadow-none border-0 active:scale-95 cursor-pointer"
              >
                <span>Discover Our Story</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN (Far right on Desktop/Tablet, Order 3 on Mobile): Visible Stat cards */}
          <div className="order-3 md:order-3 md:col-span-4 lg:col-span-4 flex flex-col gap-3 sm:gap-3.5 w-full">
            {/* Big red card with "2,200+ People Reached" */}
            <div className="bg-[#E8000B] text-white p-5 sm:p-5.5 card-single-corner-60 flex flex-col justify-between shadow-md transition-transform duration-300 hover:scale-[1.02]">
              <div>
                <span className="font-heading font-extrabold text-[40px] sm:text-[44px] leading-none text-white block">
                  <CountUpNumber target={2200} suffix="+" />
                </span>
                <span className="text-white text-base sm:text-lg font-bold mt-2 block leading-tight">
                  People Reached
                </span>
              </div>
            </div>

            {/* Below it, two cards side by side: Yellow card and Dark navy/black card */}
            <div className="grid grid-cols-2 gap-3 sm:gap-3.5">
              {/* Yellow card with "11 Locations Reached" */}
              <div className="bg-[#FDB913] text-[#0D1722] p-4 sm:p-4.5 card-single-corner-60 flex flex-col justify-between min-h-[115px] shadow-xs transition-transform duration-300 hover:scale-[1.02]">
                <span className="font-heading font-extrabold text-[36px] sm:text-[38px] leading-none text-[#0D1722] block">
                  <CountUpNumber target={11} />
                </span>
                <span className="text-[#0D1722] text-xs sm:text-sm font-extrabold mt-1.5 block leading-tight">
                  Locations Reached
                </span>
              </div>

              {/* Dark navy/black card with "4 Focus Areas" */}
              <div className="bg-[#0D1722] text-white p-4 sm:p-4.5 card-single-corner-60 flex flex-col justify-between min-h-[115px] shadow-xs transition-transform duration-300 hover:scale-[1.02]">
                <span className="font-heading font-extrabold text-[36px] sm:text-[38px] leading-none text-white block">
                  <CountUpNumber target={4} />
                </span>
                <span className="text-white text-xs sm:text-sm font-extrabold mt-1.5 block leading-tight">
                  Focus Areas
                </span>
              </div>
            </div>

            {/* Below that, a royal blue card with "10+" and its label */}
            <div className="bg-[#0B2A8A] text-white p-5 sm:p-5.5 card-single-corner-60 flex flex-col justify-between shadow-md transition-transform duration-300 hover:scale-[1.02]">
              <div>
                <span className="font-heading font-extrabold text-[40px] sm:text-[44px] leading-none text-white block">
                  <CountUpNumber target={10} suffix="+" />
                </span>
                <span className="text-white text-base sm:text-lg font-bold mt-2 block leading-tight">
                  Years of Service
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
