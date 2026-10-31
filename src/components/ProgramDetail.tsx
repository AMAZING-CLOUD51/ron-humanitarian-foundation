import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import {
  ScrambleText,
  StaggeredRevealText,
  WordByWordText,
} from './animations/TextAnimations.tsx';
import { OptimizedImage } from './ui/OptimizedImage.tsx';

export type ProgramSlug =
  | 'humanitarian-support'
  | 'education-youth'
  | 'health-wellbeing'
  | 'skills-empowerment';

interface ProgramDetailProps {
  slug: ProgramSlug;
  onNavigate: (path: string, sectionId?: string) => void;
  onOpenDonate?: () => void;
}

interface PhotoItem {
  url?: string;
  alt?: string;
  isPlaceholder?: boolean;
  placeholderText?: string;
}

interface ProgramContent {
  slug: ProgramSlug;
  title: string;
  tagline: string;
  p1: string;
  photo1?: PhotoItem;
  p2: string;
  photo2?: PhotoItem;
  p3: string;
  photo3?: PhotoItem;
  p4: string;
}

const PROGRAMS_DATA: Record<ProgramSlug, ProgramContent> = {
  'humanitarian-support': {
    slug: 'humanitarian-support',
    title: 'Humanitarian & Community Support',
    tagline: 'Relief that reaches people where they are',
    p1: 'RON Humanitarian Foundation provides practical assistance to vulnerable individuals and communities through food, grains, clothing and other essential support. For a family facing hardship, a bag of grain or a set of clothes is more than a donation. It is relief, and a reminder that someone is thinking of them.',
    photo1: {
      url: '/assets/aistudio/1000002257_2cf88b74.jpg',
      alt: 'Elderly woman receiving relief package from volunteer in black shirt and cap',
    },
    p2: 'Our outreaches have taken this support to communities across Plateau State, including Riyom, Horop in Bokkos, Gangare, Miango and Vom, as well as Wassa in Abuja and Mbaise in Imo State. We go to the people, and we begin by listening to what each community tells us it needs.',
    photo2: {
      url: '/assets/aistudio/1000002306_e1ba250b.jpg',
      alt: 'Three people holding the RON bag in front of a building with man in red on left',
    },
    p3: 'Displaced families are an important part of this work. Our team has reached people at the Barkin Ladi IDP camp and in Wassa, Abuja, bringing relief to those who have lost the most.',
    photo3: {
      url: '/assets/aistudio/1000002087_6eebf6b8.jpg',
      alt: 'Outreach crowd at the IDP camp with the RON banner',
    },
    p4: 'Our work to date has been self-funded. We welcome partners who share our belief that every family deserves dignity, so that we can reach more communities.',
  },

  'education-youth': {
    slug: 'education-youth',
    title: 'Education & Youth Development',
    tagline: 'Learning that keeps the future open',
    p1: 'We believe every child deserves the chance to learn. RON Humanitarian Foundation supports access to learning materials, educational initiatives and opportunities that help children and young people grow and dream bigger.',
    photo1: {
      url: '/assets/aistudio/unnamed_2_ee2ea191.webp',
      alt: 'Line of children holding booklets and leaflets during outreach',
    },
    p2: 'Our outreaches have provided educational materials to children and students with learning needs, easing the burden on families and helping children keep learning.',
    photo2: {
      url: '/assets/aistudio/unnamed_7_9d9456c3.webp',
      alt: 'Man sitting with children handing out leaflets and educational materials',
    },
    p3: 'We take these materials to children where they live, in communities across Plateau State, Abuja and Imo State, and we listen to what young people and their families say they need most.',
    photo3: {
      url: '/assets/aistudio/childre.jpg',
      alt: 'Volunteer smiling with community children during educational empowerment outreach',
    },
    p4: 'Education is one of the most durable investments a community can make. We are expanding our reach to support more students, classrooms and learning centres.',
  },

  'health-wellbeing': {
    slug: 'health-wellbeing',
    title: 'Health & Well-being',
    tagline: 'Care that comes to the community',
    p1: 'Good health is the foundation of every other opportunity. RON Humanitarian Foundation supports health interventions, medical equipment and health awareness initiatives in communities where needs have been identified.',
    photo1: {
      url: '/assets/aistudio/1000002289_156d0858.jpg',
      alt: 'Volunteer healthcare worker taking elderly woman blood pressure during health outreach in Plateau',
    },
    p2: 'Our medical support includes medical interventions and equipment for communities and healthcare facilities, among them the Bokkos Cottage Hospital.',
    photo2: {
      url: '/assets/aistudio/unnamed_3_8887dafc.webp',
      alt: 'Volunteers in white coats attending community members during clinical outreach',
    },
    p3: 'Our outreaches serve people of every age, from older community members to mothers and their babies, so that no one is left out because of where they live.',
    photo3: {
      url: '/assets/aistudio/1000002320_ee0217bd.jpg',
      alt: 'Volunteer with mother and baby during health consultation',
    },
    p4: 'As we grow, we are building partnerships with institutions and health partners so that more communities can receive the care they need.',
  },

  'skills-empowerment': {
    slug: 'skills-empowerment',
    title: 'Skills & Economic Empowerment',
    tagline: 'Opportunity people can build on',
    p1: 'Lasting change comes when people can provide for themselves. RON Humanitarian Foundation promotes practical skills, entrepreneurship and livelihood opportunities that help individuals and families become more self-reliant.',
    photo1: {
      url: '/assets/aistudio/1000002263_367a3370.jpg',
      alt: 'Motorcycle handover where man in navy outfit hands key to young man',
    },
    p2: 'Our empowerment initiatives include mobility support that gives people a practical means to earn, so that short-term help can become long-term independence.',
    photo2: {
      url: '/assets/aistudio/1000002260_15ebffa8.jpg',
      alt: 'Group of beneficiaries standing with wrapped motorcycles for commercial mobility',
    },
    p3: 'An opportunity placed in the right hands can change a family’s future. We are strengthening our programmes and partnerships so that more people can start earning and standing on their own feet.',
    photo3: {
      url: '/assets/aistudio/IMG-20260519-WA0264_c8d10d4b.jpg',
      alt: 'Second motorcycle handover with man holding up key',
    },
    p4: 'We believe in hand-ups, not just hand-outs. Every tool, training and asset we provide is an investment in human dignity.',
  },
};

export const ProgramDetail: React.FC<ProgramDetailProps> = ({
  slug,
  onNavigate,
}) => {
  const content = PROGRAMS_DATA[slug] || PROGRAMS_DATA['humanitarian-support'];

  // Form states
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [lastSubmission, setLastSubmission] = useState<{
    fullName: string;
    email: string;
    phone: string;
    message: string;
  } | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setSubmitted(false);
  }, [slug]);

  const buildWhatsAppUrl = (name: string, mail: string, tel: string, msg: string) => {
    const text = `Hello RON Humanitarian Foundation,\n\nI want to support the program: *${content.title}*.\n\n*Name:* ${name || 'Interested Supporter'}\n*Email:* ${mail || 'Not provided'}\n*Phone:* ${tel || 'Not provided'}\n\n*Message:* ${msg || 'I would like to support or volunteer for this program.'}`;
    return `https://wa.me/2347077104798?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submissionData = {
      programSlug: slug,
      programTitle: content.title,
      fullName,
      email,
      phone,
      message,
      timestamp: new Date().toISOString(),
    };

    // 1. Store in localStorage backup
    try {
      const existingRaw = localStorage.getItem('ron_program_inquiries');
      const existing = existingRaw ? JSON.parse(existingRaw) : [];
      existing.push(submissionData);
      localStorage.setItem('ron_program_inquiries', JSON.stringify(existing));
    } catch {
      // Local storage fallback
    }

    // 2. Deliver email directly to ronhumanitarianfoundation@gmail.com
    try {
      await fetch('https://formsubmit.co/ajax/ronhumanitarianfoundation@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `New Support Inquiry: ${content.title} (${fullName})`,
          Program: content.title,
          Name: fullName,
          Email: email,
          Phone: phone,
          Message: message,
          _replyto: email,
        }),
      });
    } catch {
      // Graceful fallback if network is offline
    }

    setLastSubmission({
      fullName,
      email,
      phone,
      message,
    });

    setIsSubmitting(false);
    setSubmitted(true);
    setFullName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  const renderPhotoSlot = (photo?: PhotoItem) => {
    if (!photo) return null;

    if (photo.isPlaceholder) {
      return (
        <div className="my-8 flex justify-center w-full">
          <div className="w-full max-w-[740px] aspect-[16/10] bg-[#F6F7FB] rounded-[24px] flex items-center justify-center text-gray-500 font-body font-semibold text-base sm:text-lg border border-gray-100">
            {photo.placeholderText || 'Photo to be uploaded'}
          </div>
        </div>
      );
    }

    if (photo.url) {
      return (
        <div className="my-8 flex justify-center w-full">
          <div className="w-full max-w-[740px] rounded-[24px] overflow-hidden shadow-xs border border-gray-100">
            <OptimizedImage
              src={photo.url}
              alt={photo.alt || content.title}
              title={`${content.title} • Official Foundation Outreach`}
              aspectRatio="aspect-[16/10]"
              className="rounded-[24px]"
            />
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="bg-white text-[#333333] font-body selection:bg-[#FDB913]/30 selection:text-[#0D1722]">
      {/* Container: max-width 1200px, centred, 20px side padding, top spacing 132px desktop / 112px mobile */}
      <div className="max-w-[1200px] mx-auto px-5 pt-[112px] lg:pt-[132px] pb-24 text-left">

        {/* Back Link to Programs on Home page */}
        <div className="mb-8">
          <button
            onClick={() => onNavigate('/', 'programs')}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#1F3A8A] hover:text-[#FDB913] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
            <span>Back to All Programs</span>
          </button>
        </div>

        {/* ========================================================================= */}
        {/* HEADER SECTION */}
        {/* ========================================================================= */}
        <section className="mb-10">
          {/* Script label with Scramble effect */}
          <ScrambleText
            as="span"
            text="Our Programs"
            triggerKey={slug}
            durationMs={450}
            className="font-script text-[#1F3A8A] text-[24px] md:text-[26px] block mb-2 leading-none select-none"
          />

          {/* Heading Line 1: Fraunces 700 with Word-by-Word animation */}
          <WordByWordText
            key={`title-${slug}`}
            as="h1"
            text={content.title}
            className="font-heading font-bold text-[34px] sm:text-[46px] lg:text-[54px] leading-[1.15] text-[#FDB913] tracking-tight block"
            delay={0.1}
          />

          {/* Heading Line 2: Fraunces 700 with Staggered line reveal */}
          <StaggeredRevealText
            key={`tagline-${slug}`}
            as="h2"
            text={content.tagline}
            className="font-heading font-bold text-[28px] sm:text-[38px] lg:text-[44px] leading-[1.2] text-[#1F3A8A] tracking-tight mt-1 mb-8"
            delay={0.2}
          />
        </section>

        {/* ========================================================================= */}
        {/* EDITORIAL NARRATIVE & EXACT PHOTOS */}
        {/* ========================================================================= */}
        <article className="space-y-4 text-[17px] sm:text-[18px] leading-[1.8] text-[#333333]">
          {/* Paragraph 1 */}
          <p>{content.p1}</p>
          {/* Photo under Paragraph 1 */}
          {renderPhotoSlot(content.photo1)}

          {/* Paragraph 2 */}
          <p>{content.p2}</p>
          {/* Photo under Paragraph 2 */}
          {renderPhotoSlot(content.photo2)}

          {/* Paragraph 3 */}
          <p>{content.p3}</p>
          {/* Photo under Paragraph 3 */}
          {renderPhotoSlot(content.photo3)}

          {/* Paragraph 4 - NO photo under Paragraph 4 */}
          <p>{content.p4}</p>
        </article>

        {/* ========================================================================= */}
        {/* FORM SECTION (64px below last paragraph, mt-16, pure white background) */}
        {/* ========================================================================= */}
        <section className="mt-16 pt-8 text-left">
          {/* Script label: Caveat 26px / 24px mobile, NAVY #1F3A8A */}
          <span className="font-script text-[#1F3A8A] text-[24px] md:text-[26px] block mb-2 leading-none">
            Get Involved
          </span>

          {/* Heading Line 1 (gold #FDB913): Support This Program */}
          <h3 className="font-heading font-bold text-[30px] sm:text-[38px] lg:text-[42px] leading-[1.15] text-[#FDB913] tracking-tight">
            Support This Program
          </h3>

          {/* Heading Line 2 (navy #1F3A8A): Partner With Us */}
          <h4 className="font-heading font-bold text-[26px] sm:text-[32px] lg:text-[36px] leading-[1.2] text-[#1F3A8A] tracking-tight mt-1 mb-4">
            Partner With Us
          </h4>

          {/* Short introductory paragraph */}
          <p className="text-[17px] sm:text-[18px] leading-[1.7] text-[#333333] max-w-2xl mb-8">
            Whether you want to contribute, volunteer or partner with us on this program, we would love to hear from you. Fill in the form below and our team will get back to you.
          </p>

          <div className="max-w-2xl">
            {submitted ? (
              <div className="bg-[#F6F7FB] border border-[#1F3A8A]/20 rounded-[24px] p-6 sm:p-8 text-left space-y-5">
                <div className="flex items-start gap-3.5">
                  <CheckCircle2 className="w-7 h-7 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-heading font-bold text-xl text-[#0D1722]">
                      Thank you for reaching out!
                    </h5>
                    <p className="text-base text-[#333333] mt-1">
                      Your message has been sent directly to our team at <strong className="text-[#1F3A8A]">ronhumanitarianfoundation@gmail.com</strong>.
                    </p>
                  </div>
                </div>

                {/* Instant WhatsApp Option */}
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-emerald-950">
                      Need an instant reply?
                    </p>
                    <p className="text-xs text-emerald-800">
                      You can also chat directly with our team on WhatsApp (+234 707 710 4798).
                    </p>
                  </div>
                  <a
                    href={buildWhatsAppUrl(
                      lastSubmission?.fullName || '',
                      lastSubmission?.email || '',
                      lastSubmission?.phone || '',
                      lastSubmission?.message || ''
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-5 py-2.5 rounded-full text-sm inline-flex items-center justify-center gap-2 shrink-0 transition-colors cursor-pointer shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Open in WhatsApp</span>
                  </a>
                </div>

                <div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-sm font-bold text-[#1F3A8A] hover:text-[#FDB913] underline transition-colors cursor-pointer"
                  >
                    Send another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-[#0D1722] mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Your Full Name"
                    className="w-full bg-white border border-gray-300 rounded-[14px] px-4 py-3.5 text-[#333333] placeholder-gray-400 focus:outline-hidden focus:border-[#FDB913] focus:ring-2 focus:ring-[#FDB913]/20 text-base"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-[#0D1722] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full bg-white border border-gray-300 rounded-[14px] px-4 py-3.5 text-[#333333] placeholder-gray-400 focus:outline-hidden focus:border-[#FDB913] focus:ring-2 focus:ring-[#FDB913]/20 text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#0D1722] mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+234 800 000 0000"
                      className="w-full bg-white border border-gray-300 rounded-[14px] px-4 py-3.5 text-[#333333] placeholder-gray-400 focus:outline-hidden focus:border-[#FDB913] focus:ring-2 focus:ring-[#FDB913]/20 text-base"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#0D1722] mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How would you like to contribute, volunteer, or partner with us on this program?"
                    className="w-full bg-white border border-gray-300 rounded-[14px] px-4 py-3.5 text-[#333333] placeholder-gray-400 focus:outline-hidden focus:border-[#FDB913] focus:ring-2 focus:ring-[#FDB913]/20 text-base resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#FDB913] hover:bg-[#e6a50e] text-[#1F3A8A] font-extrabold px-9 py-3.5 rounded-full text-base transition-all duration-200 cursor-pointer disabled:opacity-50 inline-flex items-center gap-2"
                  >
                    <span>{isSubmitting ? 'Sending to Team...' : 'Send Message'}</span>
                  </button>

                  <a
                    href={buildWhatsAppUrl(fullName, email, phone, message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold px-7 py-3.5 rounded-full text-base transition-all duration-200 inline-flex items-center gap-2 cursor-pointer shadow-xs"
                    title="Send via official WhatsApp (+234 707 710 4798)"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                    <span>Send via WhatsApp</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* EXPLORE OTHER PROGRAMS */}
        {/* ========================================================================= */}
        <section className="mt-20 pt-10 border-t border-gray-200">
          <span className="font-script text-[#1F3A8A] text-[22px] block mb-2 leading-none">
            Other Programs
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {(
              [
                'humanitarian-support',
                'education-youth',
                'health-wellbeing',
                'skills-empowerment',
              ] as ProgramSlug[]
            )
              .filter((s) => s !== slug)
              .map((otherSlug) => {
                const other = PROGRAMS_DATA[otherSlug];
                return (
                  <button
                    key={otherSlug}
                    onClick={() => onNavigate(`/programs/${otherSlug}`)}
                    className="p-5 rounded-[20px] bg-[#F6F7FB] hover:bg-amber-50/60 text-left transition-colors cursor-pointer group flex items-center justify-between"
                  >
                    <div>
                      <h5 className="font-heading font-bold text-base text-[#0D1722] group-hover:text-[#1F3A8A]">
                        {other.title}
                      </h5>
                      <p className="text-xs text-gray-500 line-clamp-1 mt-1">
                        {other.tagline}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#FDB913] group-hover:translate-x-1 transition-all shrink-0 ml-3" />
                  </button>
                );
              })}
          </div>
        </section>

      </div>
    </div>
  );
};
