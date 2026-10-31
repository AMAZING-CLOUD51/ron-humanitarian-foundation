import React from 'react';
import {
  ArrowRight,
  HeartHandshake,
  GraduationCap,
  Activity,
  TrendingUp,
} from 'lucide-react';
import { FOCUS_AREAS } from '../data/foundationData.ts';
import { FocusArea } from '../types.ts';
import { WordByWordText } from './animations/TextAnimations.tsx';

interface WhatWeDoProps {
  onSelectProgram: (program: FocusArea) => void;
  onExplorePrograms: () => void;
  onNavigateProgram?: (slug: string) => void;
}

export const WhatWeDo: React.FC<WhatWeDoProps> = ({
  onSelectProgram,
  onExplorePrograms,
  onNavigateProgram,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartHandshake':
        return <HeartHandshake className="w-8 h-8 text-[#FDB913]" />;
      case 'GraduationCap':
        return <GraduationCap className="w-8 h-8 text-[#FDB913]" />;
      case 'Activity':
        return <Activity className="w-8 h-8 text-[#FDB913]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-8 h-8 text-[#FDB913]" />;
      default:
        return <HeartHandshake className="w-8 h-8 text-[#FDB913]" />;
    }
  };

  return (
    <section
      id="programs"
      className="relative py-[44px] lg:py-[64px] text-white overflow-hidden scroll-mt-20"
      aria-label="What We Do - Programs"
    >
      <div id="what-we-do" className="sr-only" />
      {/* Full-width photo background with dark overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/aistudio/unnamed_7_9d9456c3.webp"
          alt="RON Humanitarian Foundation medical and community outreach"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        {/* Measured Dark Overlay */}
        <div className="absolute inset-0 bg-[#0D1722]/90 backdrop-blur-[1px]" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading & Explore Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
          <div className="max-w-2xl">
            <WordByWordText
              as="span"
              text="What We Do"
              className="font-script text-[#FDB913] text-2xl sm:text-3xl font-semibold block mb-2 select-none"
              stagger={0.08}
              delay={0.05}
            />
            <WordByWordText
              as="h2"
              text="Responding to urgent needs, building long-term self-reliance."
              highlightWords={['building']}
              highlightClassName="text-[#FDB913]"
              className="font-heading font-extrabold text-white text-3xl sm:text-4xl md:text-[42px] leading-[1.15] tracking-tight"
              delay={0.15}
              stagger={0.045}
            />
          </div>

          <div className="shrink-0">
            <button
              onClick={onExplorePrograms}
              className="rounded-full bg-[#FDB913] hover:bg-[#1F3A8A] text-[#0D1722] hover:text-white font-extrabold px-8 py-3.5 text-base inline-flex items-center gap-2.5 transition-all duration-300 shadow-none border-0 active:scale-95 cursor-pointer"
            >
              <span>Explore Our Programs</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Four Cards with Ash Grey (#5B6370) hover & gold border (#FDB913) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FOCUS_AREAS.map((area) => (
            <div
              key={area.id}
              className="bg-[#111F30]/85 border-2 border-dashed border-white/25 hover:border-[#FDB913] hover:bg-[#5B6370] card-single-corner-tr p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-sm group cursor-pointer"
              onClick={() => {
                if (onNavigateProgram && area.slug) {
                  onNavigateProgram(area.slug);
                } else {
                  onSelectProgram(area);
                }
              }}
            >
              <div>
                {/* Gold Icon */}
                <div className="w-14 h-14 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#FDB913]/20 transition-all">
                  {getIcon(area.iconName)}
                </div>

                {/* Card Title */}
                <h3 className="font-heading font-bold text-xl text-white mb-2 leading-tight">
                  {area.title}
                </h3>

                {/* Explicit subtext written in prompt */}
                <p className="text-[#FDB913] group-hover:text-[#FDB913] text-xs font-semibold tracking-wide uppercase mb-3">
                  {area.description}
                </p>

                {/* Narrative context */}
                <p className="text-gray-200 text-sm leading-relaxed font-body">
                  {area.subtext}
                </p>
              </div>

              {/* Learn More link with small arrow */}
              <div className="pt-5 mt-6 border-t border-white/15">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onNavigateProgram && area.slug) {
                      onNavigateProgram(area.slug);
                    } else {
                      onSelectProgram(area);
                    }
                  }}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#FDB913] group-hover:text-white transition-colors cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

