import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import { HERO_PHOTOS, FOUNDATION_INFO } from '../data/foundationData.ts';
import { WordByWordText } from './animations/TextAnimations.tsx';

interface HeroProps {
  onOpenPrograms: () => void;
  onOpenPartner: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPrograms, onOpenPartner }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  // Crossfade automatically every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prev) => (prev + 1) % HERO_PHOTOS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full min-h-[90vh] flex flex-col justify-center overflow-hidden"
      aria-label="Welcome and Mission Hero"
    >
      {/* FULL-WIDTH FULL-HEIGHT BACKGROUND PHOTOS (6 unique photos crossfading edge-to-edge) */}
      <div className="absolute inset-0 z-0">
        {HERO_PHOTOS.map((photoUrl, idx) => {
          const webpUrl = photoUrl.replace(/\.(jpg|jpeg|png)$/i, '.webp');
          return (
            <div
              key={photoUrl}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                idx === currentPhotoIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <picture className="w-full h-full block">
                <source srcSet={webpUrl} type="image/webp" />
                <img
                  src={photoUrl}
                  alt="RON Humanitarian Foundation field outreach"
                  loading={idx === 0 ? 'eager' : 'lazy'}
                  fetchPriority={idx === 0 ? 'high' : 'auto'}
                  decoding="async"
                  className="w-full h-full object-cover object-center scale-105 transition-transform duration-[6000ms]"
                />
              </picture>
            </div>
          );
        })}

        {/* DARK NAVY OVERLAY (about 65% opacity, color #0D1722 so photos look soft and dim, not bright) */}
        <div
          className="absolute inset-0 bg-[#0D1722]/65"
          style={{ backgroundColor: 'rgba(13, 23, 34, 0.65)' }}
        />
        {/* Soft gradient from left to ensure text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1722]/85 via-[#0D1722]/60 to-transparent" />
      </div>

      {/* CONTENT SITTING ON TOP ON THE LEFT */}
      <div className="relative z-10 max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 my-auto">
        <div className="max-w-2xl text-left">
          
          {/* Small gold script label */}
          <span className="font-script text-[#FDB913] text-2xl sm:text-3xl font-semibold block mb-3 select-none">
            Welcome to RON Humanitarian Foundation
          </span>

          {/* Very bold white heading with Word-by-Word animation (highlight "Compassion" in gold) */}
          <WordByWordText
            as="h1"
            text="Strengthening Communities Through Compassion, Education, and Empowerment"
            highlightWords={['Compassion,', 'Compassion']}
            highlightClassName="text-[#FDB913]"
            className="font-heading font-extrabold text-white text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-[1.15] tracking-tight mb-[14px]"
            delay={0.15}
            stagger={0.055}
          />

          {/* Short white paragraph */}
          <p className="text-white/95 text-[17px] leading-[1.7] font-body mb-[24px] max-w-xl">
            RON Humanitarian Foundation is a Nigerian humanitarian organisation
            supporting vulnerable individuals and communities through
            humanitarian support, education, health interventions, skills
            development and economic empowerment.
          </p>

          {/* Two buttons (Pill-shaped, turns navy blue #1F3A8A on hover in 0.3s) */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenPrograms}
              className="rounded-full bg-[#FDB913] hover:bg-[#1F3A8A] text-[#0D1722] hover:text-white active:bg-[#15275e] font-extrabold px-8 py-3.5 text-base inline-flex items-center gap-2.5 transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
            >
              <span>Our Programs</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenPartner}
              className="rounded-full border-2 border-white/80 hover:border-[#1F3A8A] text-white hover:bg-[#1F3A8A] hover:text-white font-bold px-7 py-3 text-base inline-flex items-center gap-2.5 transition-all duration-300 active:scale-95 cursor-pointer"
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Trust badges */}
          <div className="mt-10 pt-5 border-t border-white/15 flex flex-wrap items-center gap-5 text-xs text-white/75 font-body">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#FDB913]" />
              <span>CAC Registered: {FOUNDATION_INFO.rcNumber}</span>
            </div>
            <span className="hidden sm:inline text-white/30">·</span>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#FDB913]" />
              <span>Headquartered in Abuja · Reaching 11 Locations</span>
            </div>
          </div>

        </div>
      </div>

      {/* SMALL GOLD DOTS AT THE BOTTOM CENTRE (6 photos) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
        {HERO_PHOTOS.map((photo, index) => (
          <button
            key={photo}
            onClick={() => setCurrentPhotoIndex(index)}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              index === currentPhotoIndex
                ? 'w-7 h-2.5 bg-[#FDB913]'
                : 'w-2.5 h-2.5 bg-white/40 hover:bg-[#FDB913]/70'
            }`}
            aria-label={`Jump to slide ${index + 1}`}
            aria-current={index === currentPhotoIndex ? 'true' : 'false'}
          />
        ))}
      </div>
    </section>
  );
};
