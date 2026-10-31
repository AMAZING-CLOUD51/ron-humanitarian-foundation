import React, { useEffect } from 'react';
import { Star, MapPin, Heart, ArrowRight } from 'lucide-react';
import {
  ScrambleText,
  StaggeredRevealText,
  WordByWordText,
} from './animations/TextAnimations.tsx';
import { OptimizedImage } from './ui/OptimizedImage.tsx';

interface ImpactStoriesProps {
  onOpenDonate?: () => void;
  onOpenVolunteer?: () => void;
}

export const ImpactStories: React.FC<ImpactStoriesProps> = ({
  onOpenDonate,
  onOpenVolunteer,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    // Preload all 6 outreach images so they pop up instantly when scrolling
    const imagesToPreload = [
      '/assets/aistudio/1000002266_94850bb3.jpg',
      '/assets/aistudio/unnamed_2_ee2ea191.webp',
      '/assets/aistudio/1000002247.jpg',
      '/assets/aistudio/1000002320_ee0217bd.jpg',
      '/assets/aistudio/1000002263_367a3370.jpg',
      '/assets/aistudio/ron_pictures_5151457a.png',
    ];
    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div className="bg-white text-[#333333] font-body selection:bg-[#FDB913]/30 selection:text-[#0D1722]">
      {/* Container: max-width 1200px, centred, 20px side padding, top spacing 132px on desktop / 112px on mobile */}
      <div className="max-w-[1200px] mx-auto px-5 pt-[112px] lg:pt-[132px] pb-20">
        
        {/* ========================================================================= */}
        {/* SECTION 1: HEADER & INTRO */}
        {/* ========================================================================= */}
        <section className="mb-14 sm:mb-16 text-center max-w-4xl mx-auto">
          {/* Script label above heading with Scramble effect */}
          <ScrambleText
            as="span"
            text="Our Impact in Action"
            durationMs={450}
            className="font-script text-[#C88A00] text-[24px] md:text-[26px] block mb-2 font-semibold select-none"
          />

          {/* Large bold serif heading with Word-by-Word Animation */}
          <WordByWordText
            as="h1"
            text="Lives touched across Nigeria, one community at a time"
            highlightWords={['Nigeria,', 'community', 'time']}
            highlightClassName="text-[#FDB913]"
            className="font-heading font-bold text-[36px] sm:text-[46px] lg:text-[56px] leading-[1.18] tracking-tight mb-6 text-[#1F3A8A]"
            delay={0.12}
            stagger={0.045}
          />

          <p className="text-[17px] sm:text-[18px] leading-[1.8] text-[#444444] font-body max-w-3xl mx-auto">
            Over the past decade, RON Humanitarian Foundation has journeyed into remote, rural, and underserved communities to deliver life-affirming interventions. From frontline food relief and healthcare to educational supplies and youth empowerment, our impact is measured in real faces, renewed dignity, and lasting resilience across Plateau State, Abuja FCT, and Imo State.
          </p>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: 6-PHOTO OUTREACH GRID */}
        {/* ========================================================================= */}
        <section className="mb-20 sm:mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* PHOTO 1: Food relief distribution in Plateau State */}
            <div className="group flex flex-col">
              <div className="h-[260px] sm:h-[320px] rounded-[24px] overflow-hidden bg-gray-100 border border-gray-100 relative">
                <OptimizedImage
                  src="/assets/aistudio/1000002266_94850bb3.jpg"
                  alt="RON Foundation food relief package distribution in Plateau State"
                  title="Food Relief & Nutrition Package Distribution • Plateau State"
                  className="w-full h-full rounded-[24px]"
                  priority={true}
                />
                <div className="absolute top-4 left-4 bg-[#0D1722]/85 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 backdrop-blur-xs z-10 pointer-events-none">
                  <MapPin className="w-3.5 h-3.5 text-[#FDB913]" />
                  <span>Plateau State</span>
                </div>
              </div>
              <div className="pt-4 text-left">
                <h3 className="font-heading font-bold text-lg text-[#1F3A8A] mb-1">
                  Food Relief & Nutrition Package Distribution
                </h3>
                <p className="text-sm text-[#555555] leading-relaxed">
                  Delivering essential nutrition staples, grains, and relief packages directly to rural families and elderly residents facing food insecurity.
                </p>
              </div>
            </div>

            {/* PHOTO 2: Educational support & school materials */}
            <div className="group flex flex-col">
              <div className="h-[260px] sm:h-[320px] rounded-[24px] overflow-hidden bg-gray-100 border border-gray-100 relative">
                <OptimizedImage
                  src="/assets/aistudio/unnamed_2_ee2ea191.webp"
                  alt="RON Foundation volunteer distributing educational books and learning packages"
                  title="Education & Back-to-School Support • IDP Camp Wassa"
                  className="w-full h-full rounded-[24px]"
                  priority={true}
                />
                <div className="absolute top-4 left-4 bg-[#0D1722]/85 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 backdrop-blur-xs z-10 pointer-events-none">
                  <MapPin className="w-3.5 h-3.5 text-[#FDB913]" />
                  <span>IDP Camp Wassa</span>
                </div>
              </div>
              <div className="pt-4 text-left">
                <h3 className="font-heading font-bold text-lg text-[#1F3A8A] mb-1">
                  Education & Back-to-School Support
                </h3>
                <p className="text-sm text-[#555555] leading-relaxed">
                  Equipping children with textbooks, writing exercise books, and backpacks so displaced and rural pupils can stay enrolled in school.
                </p>
              </div>
            </div>

            {/* PHOTO 3: Free medical diagnosis & health screening (Medical personnel checking patients) */}
            <div className="group flex flex-col">
              <div className="h-[260px] sm:h-[320px] rounded-[24px] overflow-hidden bg-gray-100 border border-gray-100 relative">
                <OptimizedImage
                  src="/assets/aistudio/1000002247.jpg"
                  alt="RON healthcare medical volunteer conducting blood pressure screening and clinical diagnosis for an elder in the community"
                  title="Community Health Screenings & Diagnosis • Bassa LGA, Plateau"
                  className="w-full h-full rounded-[24px]"
                />
                <div className="absolute top-4 left-4 bg-[#0D1722]/85 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 backdrop-blur-xs z-10 pointer-events-none">
                  <MapPin className="w-3.5 h-3.5 text-[#FDB913]" />
                  <span>Bassa LGA, Plateau</span>
                </div>
              </div>
              <div className="pt-4 text-left">
                <h3 className="font-heading font-bold text-lg text-[#1F3A8A] mb-1">
                  Community Health Screenings & Diagnosis
                </h3>
                <p className="text-sm text-[#555555] leading-relaxed">
                  Deploying clinical volunteers to perform blood pressure checks, vitals monitoring, diabetes checks, and provide free medications.
                </p>
              </div>
            </div>

            {/* PHOTO 4: Maternal & infant healthcare outreach */}
            <div className="group flex flex-col">
              <div className="h-[260px] sm:h-[320px] rounded-[24px] overflow-hidden bg-gray-100 border border-gray-100 relative">
                <OptimizedImage
                  src="/assets/aistudio/1000002320_ee0217bd.jpg"
                  alt="RON volunteer attending to mother and infant during community outreach"
                  title="Maternal & Child Wellness Support • Jos South, Plateau"
                  className="w-full h-full rounded-[24px]"
                />
                <div className="absolute top-4 left-4 bg-[#0D1722]/85 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 backdrop-blur-xs z-10 pointer-events-none">
                  <MapPin className="w-3.5 h-3.5 text-[#FDB913]" />
                  <span>Jos South, Plateau</span>
                </div>
              </div>
              <div className="pt-4 text-left">
                <h3 className="font-heading font-bold text-lg text-[#1F3A8A] mb-1">
                  Maternal & Child Wellness Support
                </h3>
                <p className="text-sm text-[#555555] leading-relaxed">
                  Specialized health consultations for nursing mothers and young infants, providing prenatal vitamins, nutrition counseling, and baby essentials.
                </p>
              </div>
            </div>

            {/* PHOTO 5: Youth empowerment & asset handover (Abuja) */}
            <div className="group flex flex-col">
              <div className="h-[260px] sm:h-[320px] rounded-[24px] overflow-hidden bg-gray-100 border border-gray-100 relative">
                <OptimizedImage
                  src="/assets/aistudio/1000002263_367a3370.jpg"
                  alt="Asset key handover ceremony empowering youth beneficiary"
                  title="Youth Empowerment & Asset Grants • Abuja"
                  className="w-full h-full rounded-[24px]"
                />
                <div className="absolute top-4 left-4 bg-[#0D1722]/85 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 backdrop-blur-xs z-10 pointer-events-none">
                  <MapPin className="w-3.5 h-3.5 text-[#FDB913]" />
                  <span>Abuja</span>
                </div>
              </div>
              <div className="pt-4 text-left">
                <h3 className="font-heading font-bold text-lg text-[#1F3A8A] mb-1">
                  Youth Empowerment & Asset Grants
                </h3>
                <p className="text-sm text-[#555555] leading-relaxed">
                  Handing over commercial tools, logistics keys, and starter equipment to help young Nigerians launch sustainable small enterprises.
                </p>
              </div>
            </div>

            {/* PHOTO 6: IDP Camp Mobilisation & Grassroots Reach (Abuja, ron pictures image under neem tree) */}
            <div className="group flex flex-col">
              <div className="h-[260px] sm:h-[320px] rounded-[24px] overflow-hidden bg-gray-100 border border-gray-100 relative">
                <OptimizedImage
                  src="/assets/aistudio/ron_pictures_5151457a.png"
                  alt="IDP community mobilization and grassroots reach meeting under the neem tree"
                  title="IDP Camp Mobilisation & Grassroots Reach • Abuja"
                  className="w-full h-full rounded-[24px]"
                />
                <div className="absolute top-4 left-4 bg-[#0D1722]/85 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 backdrop-blur-xs z-10 pointer-events-none">
                  <MapPin className="w-3.5 h-3.5 text-[#FDB913]" />
                  <span>Abuja</span>
                </div>
              </div>
              <div className="pt-4 text-left">
                <h3 className="font-heading font-bold text-lg text-[#1F3A8A] mb-1">
                  IDP Camp Mobilisation & Grassroots Reach
                </h3>
                <p className="text-sm text-[#555555] leading-relaxed">
                  Large-scale outreach bringing food relief, medical staff, educational kits, and heartfelt solidarity to hundreds of displaced families.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: TESTIMONIALS (Ameesha Foundation sample match) */}
        {/* ========================================================================= */}
        <section className="pt-8 border-t border-gray-100">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            {/* Script label above heading with Scramble effect */}
            <ScrambleText
              as="span"
              text="Testimonials"
              durationMs={420}
              className="font-script text-[#C88A00] text-[24px] md:text-[26px] block mb-2 font-semibold select-none"
            />

            {/* Large bold serif heading with Staggered reveal */}
            <StaggeredRevealText
              as="h2"
              lines={[
                'What Beneficiaries and Partners Say',
                'About RON Humanitarian Foundation',
              ]}
              highlightIndexes={[0]}
              highlightClassName="text-[#0D1722]"
              className="font-heading font-bold text-[32px] sm:text-[42px] leading-[1.2] tracking-tight text-[#0D1722]"
              displayMode="block"
              delay={0.1}
            />
          </div>

          {/* Three Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* CARD 1: Jummai D. */}
            <div className="bg-white rounded-[24px] p-8 sm:p-9 border-2 border-[#FDB913]/35 flex flex-col justify-between text-left transition-all duration-300 hover:border-[#FDB913] hover:-translate-y-1">
              <div>
                {/* 5 gold stars */}
                <div className="flex items-center gap-1.5 mb-6 text-[#FDB913]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#FDB913] stroke-[#FDB913]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="font-body text-[#333333] text-[15px] sm:text-[16px] leading-[1.8] italic mb-8">
                  &ldquo;During a very difficult time, RON Humanitarian Foundation provided essential food and medical support for my family. That help meant everything to us. It reminded us that we are not alone.&rdquo;
                </p>
              </div>

              {/* Author & uppercase role */}
              <div className="pt-4 border-t border-gray-100">
                <h4 className="font-heading font-bold text-[#1F3A8A] text-lg leading-tight mb-1">
                  — Jummai D.
                </h4>
                <p className="text-xs font-bold tracking-wider text-[#C88A00] uppercase font-body">
                  Beneficiary — Jos, Plateau State
                </p>
              </div>
            </div>

            {/* CARD 2: Blessing O. */}
            <div className="bg-white rounded-[24px] p-8 sm:p-9 border-2 border-[#FDB913]/35 flex flex-col justify-between text-left transition-all duration-300 hover:border-[#FDB913] hover:-translate-y-1">
              <div>
                {/* 5 gold stars */}
                <div className="flex items-center gap-1.5 mb-6 text-[#FDB913]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#FDB913] stroke-[#FDB913]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="font-body text-[#333333] text-[15px] sm:text-[16px] leading-[1.8] italic mb-8">
                  &ldquo;RON Humanitarian Foundation is bringing real change to our community. Their programs are not just helpful—they are transforming lives and giving people hope.&rdquo;
                </p>
              </div>

              {/* Author & uppercase role */}
              <div className="pt-4 border-t border-gray-100">
                <h4 className="font-heading font-bold text-[#1F3A8A] text-lg leading-tight mb-1">
                  — Blessing O.
                </h4>
                <p className="text-xs font-bold tracking-wider text-[#C88A00] uppercase font-body">
                  Community Leader — Mbaise, Imo State
                </p>
              </div>
            </div>

            {/* CARD 3: Mal. Ibrahim K. */}
            <div className="bg-white rounded-[24px] p-8 sm:p-9 border-2 border-[#FDB913]/35 flex flex-col justify-between text-left transition-all duration-300 hover:border-[#FDB913] hover:-translate-y-1">
              <div>
                {/* 5 gold stars */}
                <div className="flex items-center gap-1.5 mb-6 text-[#FDB913]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#FDB913] stroke-[#FDB913]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="font-body text-[#333333] text-[15px] sm:text-[16px] leading-[1.8] italic mb-8">
                  &ldquo;RON Humanitarian Foundation is a trusted organization that consistently delivers meaningful support to vulnerable populations. Their approach is both compassionate and strategic.&rdquo;
                </p>
              </div>

              {/* Author & uppercase role */}
              <div className="pt-4 border-t border-gray-100">
                <h4 className="font-heading font-bold text-[#1F3A8A] text-lg leading-tight mb-1">
                  — Mal. Ibrahim K.
                </h4>
                <p className="text-xs font-bold tracking-wider text-[#C88A00] uppercase font-body">
                  Development Partner — Abuja FCT
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* CALL TO ACTION ROW */}
        {/* ========================================================================= */}
        <section className="mt-16 sm:mt-20 text-center">
          <div className="bg-[#1E3A8A] text-white rounded-[24px] p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-left max-w-xl">
              <span className="font-script text-[#FDB913] text-2xl font-semibold block mb-1">
                Be part of the next story
              </span>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white">
                Together, we can reach even more lives in need.
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              {onOpenVolunteer && (
                <button
                  onClick={onOpenVolunteer}
                  className="rounded-full bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3.5 text-sm transition-colors border border-white/20 cursor-pointer"
                >
                  Become a Volunteer
                </button>
              )}
              {onOpenDonate && (
                <button
                  onClick={onOpenDonate}
                  className="rounded-full bg-[#FDB913] hover:bg-[#e6a50e] text-[#0D1722] font-extrabold px-7 py-3.5 text-sm inline-flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <span>Donate Today</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              )}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
