import React from 'react';
import {
  ScrambleText,
  StaggeredRevealText,
  WordByWordText,
} from './animations/TextAnimations.tsx';
import { OptimizedImage } from './ui/OptimizedImage.tsx';

// Field marquee photos for Section 4: Moments From the Field
const MARQUEE_PHOTOS = [
  {
    url: '/assets/aistudio/IMG-20260519-WA0291_9afaeb8b.jpg',
    alt: 'RON Foundation operational leadership and field coordinators strategy session',
  },
  {
    url: '/assets/aistudio/1000002072_884b99d2.jpg',
    alt: 'Community outreach and medical mobilization gathering in Jos, Plateau State',
  },
  {
    url: '/assets/aistudio/unnamed_7_9d9456c3.webp',
    alt: 'Chief Samuel Kasuwa engaging with rural children during educational outreach',
  },
  {
    url: '/assets/aistudio/unnamed_4_a93bb17c.webp',
    alt: 'RON Foundation volunteer coordinators distributing learning materials',
  },
  {
    url: '/assets/aistudio/unnamed_6_35ec23f7.webp',
    alt: 'Beneficiary families and community leaders receiving outreach support',
  },
  {
    url: '/assets/aistudio/unnamed_5_0ee9b56c.webp',
    alt: 'Outreach engagement at IDP settlement',
  },
  {
    url: '/assets/aistudio/unnamed_3_8887dafc.webp',
    alt: 'Medical outreach doctors, nurses, and clinical volunteer team',
  },
];

interface PlaceholderSlotProps {
  slotName: string;
  className?: string;
  aspectRatio?: string;
}

function PhotoPlaceholder({ slotName, className = '', aspectRatio = 'aspect-[16/9]' }: PlaceholderSlotProps) {
  return (
    <div
      className={`w-full bg-[#F6F7FB] rounded-[24px] flex flex-col items-center justify-center p-8 text-center border border-gray-100 ${aspectRatio} ${className}`}
    >
      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-3 shadow-sm border border-gray-200/60">
        <span className="font-heading font-bold text-[#1F3A8A] text-lg">RON</span>
      </div>
      <p className="font-body font-semibold text-[#1F3A8A] text-base mb-1">
        [{slotName}]
      </p>
      <p className="font-body text-xs text-gray-400">
        Official Foundation Archive Slot
      </p>
    </div>
  );
}

export const AboutUs: React.FC = () => {
  // Preload all photos on mount so images display instantly without scroll lag
  React.useEffect(() => {
    const imagesToPreload = [
      '/assets/aistudio/IMG-20260519-WA0271_6734c3d9.jpg',
      '/assets/aistudio/1000002257_2cf88b74.jpg',
      '/assets/aistudio/1000002087_6eebf6b8.jpg',
      '/assets/aistudio/1000002289_156d0858.jpg',
      '/assets/aistudio/1000002263_367a3370.jpg',
      '/assets/aistudio/IMG-20260910-WA0000_8d5a197b.jpg',
      ...MARQUEE_PHOTOS.map((p) => p.url),
    ];
    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div className="bg-white text-[#333333] font-body">
      {/* Container: max-width 1200px, centred, 20px side padding, top spacing 132px on desktop / 112px on mobile */}
      <div className="max-w-[1200px] mx-auto px-5 pt-[112px] lg:pt-[132px] pb-16">
        
        {/* ========================================================================= */}
        {/* SECTION 1: WHO WE ARE */}
        {/* ========================================================================= */}
        <section className="mb-11 md:mb-16">
          {/* Script label above heading with Scramble effect */}
          <ScrambleText
            as="span"
            text="Who We Are"
            durationMs={450}
            className="font-script text-[#1F3A8A] text-[24px] md:text-[26px] block mb-2 leading-none text-left select-none"
          />

          {/* Large bold serif heading: Fraunces 700 with Staggered reveal and Word-by-Word */}
          <h1 className="font-heading font-bold text-[36px] sm:text-[46px] lg:text-[56px] leading-[1.15] tracking-tight text-left mb-7">
            <StaggeredRevealText
              as="span"
              lines={['A Better Future.', 'Opportunity.', 'Dignity.']}
              className="block text-[#FDB913]"
              displayMode="inline"
              delay={0.1}
              stagger={0.09}
            />
            <WordByWordText
              as="span"
              text="Transforming Lives in Nigeria"
              className="block text-[#1F3A8A]"
              delay={0.25}
              stagger={0.05}
            />
          </h1>

          {/* 28px space between heading and first paragraph (mb-7 = 28px) */}
          <div className="space-y-5 text-[17px] leading-[1.8] text-[#333333] text-left">
            <p>
              RON Humanitarian Foundation is an indigenous Nigerian non-governmental organisation headquartered in Abuja, established to restore dignity, nurture self-reliance, and unlock sustainable opportunities for underserved individuals, vulnerable families, and neglected communities across Nigeria.
            </p>
            <p>
              Founded on the enduring conviction that lasting transformation begins at the grassroots, the Foundation acts as a lifeline for internally displaced persons (IDPs), widows, orphaned children, out-of-school youths, and rural households enduring chronic socioeconomic hardship.
            </p>

            {/* Photo 1 centered: max width 740px on desktop (100% on mobile), 24px rounded corners, 32px space above and below */}
            <div className="my-8 flex justify-center w-full">
              <div className="w-full max-w-[740px] rounded-[24px] overflow-hidden shadow-xs border border-gray-100">
                <OptimizedImage
                  src="/assets/aistudio/IMG-20260519-WA0271_6734c3d9.jpg"
                  alt="RON Humanitarian Foundation volunteer and leadership team standing outside entrance portal"
                  title="RON Leadership & Field Volunteers • Abuja Headquarters"
                  aspectRatio="aspect-[16/10]"
                  className="rounded-[24px]"
                  priority={true}
                />
              </div>
            </div>

            <p>
              Our interventions are rooted in empathy, transparency, and relentless field presence. Rather than offering detached or temporary assistance, RON Foundation walks directly into marginalized settlements, listening closely to community leaders, women collectives, and youth groups to formulate targeted, human-centered solutions.
            </p>
            <p>
              Operating under Corporate Affairs Commission Registration Number{' '}
              <strong className="font-bold text-[#0D1722]">RC-8594046</strong>, our governance adheres to rigorous standards of institutional accountability, ethical stewardship, and community consultation.
            </p>
            <p>
              Over the past decade of continuous community engagement, our field teams have documented more than{' '}
              <strong className="font-bold text-[#0D1722]">2,200 verified beneficiaries</strong> across{' '}
              <strong className="font-bold text-[#0D1722]">11 distinct operational locations</strong> in the Federal Capital Territory, Plateau State, and Imo State.
            </p>
            <p>
              We believe that{' '}
              <strong className="font-bold text-[#0D1722]">human dignity is non-negotiable</strong>. Whether through delivering urgent food security to displaced families, paying tuition and supplying textbooks to young learners, bringing doctors and diagnostic monitoring directly to rural doorsteps, or equipping young adults with livelihood machinery, every initiative is executed with the highest respect for the people we serve.
            </p>
            <p>
              As we expand our geographic reach, our commitment remains unshakable: to stand with the vulnerable, to advocate for the forgotten, and to build resilient communities where every Nigerian can thrive with dignity and hope.
            </p>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* SECTION 2: WHAT WE DO + PROGRAMS ACROSS NIGERIA */}
        {/* ========================================================================= */}
        <section className="my-11 md:my-16">
          {/* Script label above heading with Scramble effect */}
          <ScrambleText
            as="span"
            text="What We Do"
            durationMs={450}
            className="font-script text-[#1F3A8A] text-[24px] md:text-[26px] block mb-2 leading-none text-left select-none"
          />

          {/* Section 2: 3 lines total. Line 1 GOLD, Line 2 GOLD, Line 3 NAVY */}
          <h2 className="font-heading font-bold text-[36px] sm:text-[46px] lg:text-[56px] leading-[1.15] tracking-tight text-left mb-7">
            <StaggeredRevealText
              as="span"
              lines={['Empowering Communities.', 'Sustaining Hope.']}
              className="block text-[#FDB913]"
              displayMode="block"
              delay={0.1}
              stagger={0.12}
            />
            <WordByWordText
              as="span"
              text="Our Core Interventions Across Nigeria"
              className="block text-[#1F3A8A] mt-1"
              delay={0.25}
              stagger={0.045}
            />
          </h2>

          {/* Intro paragraph */}
          <p className="text-[17px] leading-[1.8] text-[#333333] mb-10 text-left">
            At RON Humanitarian Foundation, our operations are structured around four strategic pillars designed to address immediate vulnerability while creating pathways to permanent self-sufficiency. Each program is delivered through meticulous field assessments and direct community participation.
          </p>

          {/* PROGRAM 1: Humanitarian & Community Support */}
          <div className="mb-14 text-left">
            <h3 className="font-heading font-bold text-[26px] sm:text-[30px] lg:text-[32px] text-[#0D1722] mb-4">
              Humanitarian & Community Support
            </h3>
            <div className="space-y-4 text-[17px] leading-[1.8] text-[#333333]">
              <p>
                In times of acute displacement, economic crisis, or sudden hardship, food and shelter security represent the first line of defense. Our Humanitarian & Community Support program delivers direct nutrition packages, clean water, protective clothing, and dignity kits to internally displaced persons and impoverished rural settlements.
              </p>
              <p>
                Through systematic house-to-house distribution and organized relief hubs, we ensure that aid reaches the most fragile households—especially{' '}
                <strong className="font-bold text-[#0D1722]">elderly grandmothers caring for orphans</strong>, nursing mothers, and persons living with disabilities—without intermediaries or bureaucratic bottlenecks.
              </p>
            </div>

            {/* Photo 2 centered: max-width 740px, rounded-24px, 32px space above & below */}
            <div className="my-8 flex justify-center w-full">
              <div className="w-full max-w-[740px] rounded-[24px] overflow-hidden shadow-xs border border-gray-100">
                <OptimizedImage
                  src="/assets/aistudio/1000002069_5d46dc62.jpg"
                  alt="Beneficiary community women receiving official RON Humanitarian Foundation relief packages"
                  title="Direct Relief Package Distribution to Beneficiaries"
                  aspectRatio="aspect-[16/10]"
                  className="rounded-[24px]"
                />
              </div>
            </div>
          </div>

          {/* PROGRAM 2: Education & Youth Development */}
          <div className="mb-14 text-left">
            <h3 className="font-heading font-bold text-[26px] sm:text-[30px] lg:text-[32px] text-[#0D1722] mb-4">
              Education & Youth Development
            </h3>
            <div className="space-y-4 text-[17px] leading-[1.8] text-[#333333]">
              <p>
                Education is the most powerful antidote to generational poverty. In Nigeria, millions of children remain out of school or study in under-resourced classrooms lacking basic learning tools. RON Foundation bridges this divide by providing comprehensive school packs, custom exercise books, textbooks, uniforms, and scholarship subsidies to promising young minds.
              </p>
              <p>
                Our youth development outreaches also host mentorship sessions, literacy drives, and foundational civic education in IDP camp learning centers like{' '}
                <strong className="font-bold text-[#0D1722]">Camp Wasa</strong>, nurturing self-confidence, critical thinking, and a passion for academic excellence in every child we embrace.
              </p>
            </div>

            {/* Photo 3 centered: max-width 740px, rounded-24px, 32px space above & below */}
            <div className="my-8 flex justify-center w-full">
              <div className="w-full max-w-[740px] rounded-[24px] overflow-hidden shadow-xs border border-gray-100">
                <OptimizedImage
                  src="/assets/aistudio/1000002087_6eebf6b8.jpg"
                  alt="Children and youths gathered at IDP Camp Wasa joyfully displaying new educational exercise books"
                  title="Educational Support & Learning Book Distribution • Camp Wasa"
                  aspectRatio="aspect-[16/10]"
                  className="rounded-[24px]"
                />
              </div>
            </div>
          </div>

          {/* PROGRAM 3: Health & Well-being */}
          <div className="mb-14 text-left">
            <h3 className="font-heading font-bold text-[26px] sm:text-[30px] lg:text-[32px] text-[#0D1722] mb-4">
              Health & Well-being
            </h3>
            <div className="space-y-4 text-[17px] leading-[1.8] text-[#333333]">
              <p>
                Vulnerable communities often lack access to basic primary healthcare facilities, resulting in preventable complications from hypertension, malaria, diabetes, and infectious ailments. Our Health & Well-being initiative mobilizes licensed volunteer physicians, nurses, and lab technicians directly to hard-to-reach locations.
              </p>
              <p>
                We conduct free comprehensive vital checks, digital blood pressure screenings, blood glucose monitoring, medical consultations, and dispense{' '}
                <strong className="font-bold text-[#0D1722]">essential prescription medications</strong> alongside preventative wellness workshops for mothers and community elders.
              </p>
            </div>

            {/* Photo 4 centered: max-width 740px, rounded-24px, 32px space above & below */}
            <div className="my-8 flex justify-center w-full">
              <div className="w-full max-w-[740px] rounded-[24px] overflow-hidden shadow-xs border border-gray-100">
                <OptimizedImage
                  src="/assets/aistudio/1000002289_156d0858.jpg"
                  alt="RON healthcare professional in white clinical lab coat testing the blood pressure of an elderly woman in Kuru Karama, Plateau State"
                  title="Frontline Medical Checkup & Healthcare Outreach • Kuru Karama, Plateau State"
                  aspectRatio="aspect-[16/10]"
                  className="rounded-[24px]"
                />
              </div>
            </div>
          </div>

          {/* PROGRAM 4: Skills & Economic Empowerment */}
          <div className="mb-14 text-left">
            <h3 className="font-heading font-bold text-[26px] sm:text-[30px] lg:text-[32px] text-[#0D1722] mb-4">
              Skills & Economic Empowerment
            </h3>
            <div className="space-y-4 text-[17px] leading-[1.8] text-[#333333]">
              <p>
                Sustainable change requires financial autonomy. The Skills & Economic Empowerment initiative trains young men, women, and breadwinners in high-demand vocations, financial literacy, and small business management, transforming beneficiaries from aid recipients into productive economic leaders.
              </p>
              <p>
                Beyond training, the Foundation provides direct capital and tangible production assets—including{' '}
                <strong className="font-bold text-[#0D1722]">brand new commercial transport motorcycles</strong>, tailoring equipment, and agricultural starter kits—empowering families to generate reliable daily income and achieve long-term financial independence.
              </p>
            </div>

            {/* Photo 5 centered: max-width 740px, rounded-24px, 32px space above & below */}
            <div className="my-8 flex justify-center w-full">
              <div className="w-full max-w-[740px] rounded-[24px] overflow-hidden shadow-xs border border-gray-100">
                <OptimizedImage
                  src="/assets/aistudio/1000002263_367a3370.jpg"
                  alt="Handover ceremony of new commercial motorcycles to empowered youth beneficiaries"
                  title="Youth Livelihood Asset Handover Ceremony"
                  aspectRatio="aspect-[16/10]"
                  className="rounded-[24px]"
                />
              </div>
            </div>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* SECTION 3: CEO / LEADERSHIP */}
        {/* ========================================================================= */}
        <section className="my-11 md:my-16">
          {/* Script label above heading with Scramble effect */}
          <ScrambleText
            as="span"
            text="Leadership"
            durationMs={420}
            className="font-script text-[#1F3A8A] text-[24px] md:text-[26px] block mb-2 leading-none text-left select-none"
          />

          {/* Heading: All in blue #1F3A8A with subtle Scramble animation */}
          <h2 className="font-heading font-bold text-[36px] sm:text-[46px] lg:text-[56px] leading-[1.15] tracking-tight text-left mb-8 md:mb-10 text-[#1F3A8A]">
            <ScrambleText
              as="span"
              text="Meet our CEO"
              durationMs={500}
              className="text-[#1F3A8A]"
            />
          </h2>

          {/* 2-column layout on desktop: photo on left, writeup on right. Mobile stacks photo above text */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left column: Photo in rounded-corner frame (24px) with soft shadow, cropped so face is centered */}
            <div className="md:col-span-5 flex flex-col items-center md:items-start">
              <div className="w-full max-w-[420px] rounded-[24px] overflow-hidden shadow-lg border border-gray-100 bg-gray-50">
                <OptimizedImage
                  src="/assets/aistudio/IMG-20260910-WA0000_8d5a197b.jpg"
                  alt="Chief Samuel Kasuwa, Founder and CEO of RON Humanitarian Foundation"
                  title="Chief Samuel Kasuwa • Founder & CEO, RON Humanitarian Foundation"
                  aspectRatio="aspect-[4/5]"
                  objectPosition="center 15%"
                  className="rounded-[24px]"
                  priority={true}
                />
              </div>

              {/* Under photo: Name and title (CEO) in bold navy text (#1F3A8A) */}
              <div className="mt-4 text-center md:text-left w-full">
                <h4 className="font-heading font-bold text-[24px] text-[#1F3A8A] leading-tight">
                  Chief Samuel Kasuwa
                </h4>
                <p className="font-body font-bold text-[17px] text-[#1F3A8A] mt-1">
                  CEO
                </p>
              </div>
            </div>

            {/* Right column: Narrative text paragraphs */}
            <div className="md:col-span-7 space-y-5 text-[17px] leading-[1.8] text-[#333333] text-left">
              <p>
                RON Humanitarian Foundation was envisioned and brought to life by{' '}
                <strong className="font-bold text-[#0D1722]">Chief Samuel Kasuwa</strong>, a visionary humanitarian, community advocate, and philanthropist whose life work embodies servant leadership and grassroots empowerment.
              </p>
              <p>
                Deeply moved by the severe disparities facing displaced families and rural communities in northern and central Nigeria, Chief Kasuwa initiated the Foundation over a decade ago. For years, he personally funded community relief, school supplies, and medical check-ups out of personal conviction, demonstrating that profound social impact begins with personal responsibility.
              </p>
              <p>
                Under his strategic stewardship, RON Humanitarian Foundation has grown into a structured, CAC-registered non-governmental institution with dedicated volunteer field cadres across multiple Nigerian states. His leadership philosophy centers on{' '}
                <strong className="font-bold text-[#0D1722]">unconditional empathy</strong>, institutional transparency, and elevating the voices of those who have been marginalized by poverty or conflict.
              </p>
            </div>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* SECTION 4: PHOTO GALLERY (Continuously scrolling marquee sliding right-to-left) */}
        {/* ========================================================================= */}
        <section className="my-11 md:my-16">
          {/* Script label above heading with Scramble effect */}
          <ScrambleText
            as="span"
            text="Our Work"
            durationMs={420}
            className="font-script text-[#1F3A8A] text-[24px] md:text-[26px] block mb-2 leading-none text-left select-none"
          />

          {/* Section 4: Line 1 in GOLD (#FDB913), Line 2 in NAVY (#1F3A8A) with Word-by-Word */}
          <h2 className="font-heading font-bold text-[36px] sm:text-[46px] lg:text-[56px] leading-[1.15] tracking-tight text-left mb-7">
            <WordByWordText
              as="span"
              text="Moments"
              className="block text-[#FDB913]"
              delay={0.1}
            />
            <WordByWordText
              as="span"
              text="From the Field"
              className="block text-[#1F3A8A]"
              delay={0.2}
            />
          </h2>

          <p className="text-[17px] leading-[1.8] text-[#333333] mb-8 text-left">
            A visual record of our humanitarian field missions, healthcare outreaches, educational distributions, and community consultations across Nigerian villages, towns, and IDP centers.
          </p>

          {/* Continuously scrolling marquee sliding right-to-left with pause on hover */}
          <div className="relative w-full overflow-hidden rounded-[24px] py-4 bg-[#FAFAFA]/50 border border-gray-100">
            <div className="flex animate-marquee gap-5 items-center">
              {/* First set of photos */}
              {MARQUEE_PHOTOS.map((photo, idx) => (
                <div
                  key={`marquee-1-${idx}`}
                  className="shrink-0 h-[260px] sm:h-[300px] w-[340px] sm:w-[400px] rounded-[24px] overflow-hidden bg-gray-100 shadow-xs border border-gray-100"
                >
                  <OptimizedImage
                    src={photo.url}
                    alt={photo.alt}
                    title={photo.alt}
                    className="w-full h-full rounded-[24px]"
                  />
                </div>
              ))}

              {/* Duplicate set for seamless continuous marquee loop */}
              {MARQUEE_PHOTOS.map((photo, idx) => (
                <div
                  key={`marquee-2-${idx}`}
                  className="shrink-0 h-[260px] sm:h-[300px] w-[340px] sm:w-[400px] rounded-[24px] overflow-hidden bg-gray-100 shadow-xs border border-gray-100"
                >
                  <OptimizedImage
                    src={photo.url}
                    alt={photo.alt}
                    title={photo.alt}
                    className="w-full h-full rounded-[24px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
