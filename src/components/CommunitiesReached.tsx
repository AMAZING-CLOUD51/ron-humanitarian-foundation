import React, { useState } from 'react';
import { MapPin, Users, CheckCircle2 } from 'lucide-react';
import { COMMUNITIES, FOUNDATION_INFO } from '../data/foundationData.ts';
import { CountUpNumber } from './CountUpNumber.tsx';
import { ScrambleText, StaggeredRevealText } from './animations/TextAnimations.tsx';

export const CommunitiesReached: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Plateau' | 'Abuja' | 'Imo'>('All');

  const filteredCommunities = activeFilter === 'All'
    ? COMMUNITIES
    : COMMUNITIES.filter((item) => item.state === activeFilter);

  return (
    <section
      id="communities"
      className="bg-slate-50 py-[44px] lg:py-[64px] border-b border-gray-200/80"
      aria-label="Communities We Have Reached"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 text-left">
          <div>
            <ScrambleText
              as="span"
              text="Documented Impact"
              durationMs={450}
              className="font-script text-[#FDB913] text-2xl sm:text-3xl font-semibold block mb-2 select-none"
            />
            <StaggeredRevealText
              as="h2"
              lines={['Communities We', 'Have Reached']}
              highlightIndexes={[1]}
              highlightClassName="text-[#FDB913]"
              className="font-heading font-extrabold text-[#0D1722] text-3xl sm:text-4xl md:text-[42px] leading-[1.15] tracking-tight"
              displayMode="inline"
              delay={0.1}
            />
          </div>

          {/* Region Filter Buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-white border border-gray-200 rounded-full shadow-2xs self-start md:self-auto">
            {(['All', 'Plateau', 'Abuja', 'Imo'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  activeFilter === filter
                    ? 'bg-[#0B2A8A] text-white shadow-xs'
                    : 'text-gray-600 hover:text-[#0B2A8A] hover:bg-gray-100'
                }`}
              >
                {filter === 'All' ? 'All Locations (11)' : filter}
              </button>
            ))}
          </div>
        </div>

        {/* Communities Grid: Cards turn gold (#FDB913) on hover and numbers count from 0 to target */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-10">
          {filteredCommunities.map((item, idx) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200/90 hover:border-[#FDB913] hover:bg-[#FDB913] card-single-corner-tr p-6 shadow-2xs hover:shadow-md transition-all duration-300 group flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 group-hover:text-[#0D1722]/80 transition-colors">
                    <MapPin className="w-3.5 h-3.5 text-[#0B2A8A] group-hover:text-[#0D1722]" />
                    <span>{item.state === 'Abuja' ? 'Federal Capital Territory' : `${item.state} State`}</span>
                  </div>
                  <span className="text-[11px] font-bold text-gray-400 group-hover:text-[#0D1722]/70 tabular-nums">
                    #{idx + 1}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg text-[#0D1722] mb-1 group-hover:text-[#0D1722] transition-colors leading-snug">
                  {item.name}
                </h3>
                
                {item.highlight && (
                  <p className="text-xs text-gray-500 group-hover:text-[#0D1722]/80 font-body mb-5 transition-colors">
                    {item.highlight}
                  </p>
                )}
              </div>

              {/* Number of people reached counting up in ~2s on scroll into view */}
              <div className="pt-4 border-t border-gray-100 group-hover:border-black/10 flex items-baseline justify-between transition-colors">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-gray-500 group-hover:text-[#0D1722]/80 font-bold block transition-colors">
                    Beneficiaries
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-heading font-extrabold text-3xl sm:text-[34px] text-[#0B2A8A] group-hover:text-[#0D1722] tabular-nums leading-none transition-colors">
                      <CountUpNumber target={item.reached} />
                    </span>
                    <span className="text-xs text-gray-500 group-hover:text-[#0D1722]/80 font-bold transition-colors">
                      people
                    </span>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-white/40 flex items-center justify-center text-[#FDB913] group-hover:text-[#0D1722] transition-all">
                  <CheckCircle2 className="w-4 h-4 text-[#0B2A8A] group-hover:text-[#0D1722]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Required Bottom Total Line: "Total: 2,242 people reached across 11 locations." */}
        <div className="bg-white border-2 border-[#FDB913]/50 rounded-2xl p-6 sm:p-7 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#FDB913]/20 flex items-center justify-center shrink-0">
              <Users className="w-6 h-6 text-[#0B2A8A]" />
            </div>
            <div>
              <p className="font-heading font-extrabold text-[#0D1722] text-xl sm:text-2xl leading-tight">
                Total:{' '}
                <CountUpNumber target={FOUNDATION_INFO.totalPeopleReached} /> people
                reached across {FOUNDATION_INFO.locationsCount} locations.
              </p>
              <p className="text-gray-600 text-sm font-body mt-0.5">
                Each count represents verified human lives impacted with food, healthcare, youth education, and livelihoods.
              </p>
            </div>
          </div>

          <div className="shrink-0">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#0B2A8A] text-white text-xs font-bold rounded-full">
              Verified Field Log
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

