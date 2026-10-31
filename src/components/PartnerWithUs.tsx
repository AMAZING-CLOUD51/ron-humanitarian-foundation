import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Check, Copy, MessageCircle, HeartHandshake, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';
import { FOUNDATION_INFO } from '../data/foundationData.ts';
import {
  ScrambleText,
  StaggeredRevealText,
  WordByWordText,
} from './animations/TextAnimations.tsx';

interface PartnerWithUsProps {
  onNavigate: (path: string, sectionId?: string) => void;
  onOpenDonateModal: () => void;
}

export const PartnerWithUs: React.FC<PartnerWithUsProps> = ({
  onNavigate,
  onOpenDonateModal,
}) => {
  const [copied, setCopied] = useState(false);
  const [showAccountCard, setShowAccountCard] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const copyAccountNumber = (num: string) => {
    navigator.clipboard.writeText(num);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDonateClick = () => {
    // Show expanding account card on page and trigger modal
    setShowAccountCard(true);
    onOpenDonateModal();
  };

  return (
    <div className="bg-white text-[#333333] font-body selection:bg-[#FDB913]/30 selection:text-[#0D1722]">
      
      {/* ========================================================================= */}
      {/* 1. CINEMATIC FULL-WIDTH HERO SECTION WITH HUMANITARIAN PHOTO BACKGROUND */}
      {/* ========================================================================= */}
      <section className="relative min-h-[620px] lg:min-h-[720px] flex items-center justify-start overflow-hidden pt-[112px] lg:pt-[132px] pb-16 lg:pb-24">
        {/* Background Photograph: community gathering under the big neem tree */}
        <div className="absolute inset-0 z-0">
          <picture className="w-full h-full block">
            <source srcSet="/assets/aistudio/ron_pictures_5151457a.webp" type="image/webp" />
            <img
              src="/assets/aistudio/ron_pictures_5151457a.PNG"
              alt="RON Humanitarian Foundation community outreach in Plateau State"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover object-center"
            />
          </picture>
          {/* Measured Dark Navy / Black transparent overlay so text is clearly readable while keeping people visible */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#070e17]/95 via-[#0D1722]/85 to-[#0D1722]/70" />
        </div>

        {/* Content Container: Positioned towards upper-left following reference */}
        <div className="relative z-10 max-w-[1200px] w-full mx-auto px-5 sm:px-8 lg:px-12 text-left">
          
          {/* Back button */}
          <div className="mb-6">
            <button
              onClick={() => onNavigate('/')}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-gray-300 hover:text-[#FDB913] transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
              <span>Back to Home</span>
            </button>
          </div>

          <div className="max-w-3xl">
            {/* Small introductory tagline in elegant italic/handwritten script font with Scramble effect */}
            <ScrambleText
              as="span"
              text="Support a Life in Need"
              durationMs={450}
              className="font-script text-[#FDB913] text-[26px] sm:text-[30px] lg:text-[34px] block mb-3 leading-none italic select-none"
            />

            {/* Main Headline: Large, bold, elegant serif typography with Word-by-Word Animation */}
            <WordByWordText
              as="h1"
              text="Your Donation Helps Bring Hope, Healthcare, and Dignity to Vulnerable Communities Across Nigeria."
              highlightWords={['Hope,', 'Healthcare,', 'Dignity']}
              highlightClassName="text-[#FDB913]"
              className="font-heading font-bold text-[32px] sm:text-[44px] md:text-[52px] lg:text-[58px] leading-[1.15] text-[#FDB913] tracking-tight mb-6"
              delay={0.1}
              stagger={0.038}
            />

            {/* Introductory Description Paragraph in clean, readable white typography */}
            <p className="text-white/95 text-[16px] sm:text-[18px] lg:text-[19px] leading-[1.75] font-body mb-5">
              At RON Humanitarian Foundation, we work in communities where access to basic needs and essential services is limited. Across Nigeria, many vulnerable individuals and families struggle daily with access to healthcare, quality education, food, shelter and protection.
            </p>
            <p className="text-white/95 text-[16px] sm:text-[18px] lg:text-[19px] leading-[1.75] font-body mb-6">
              Your support enables us to reach these communities directly, respond to urgent humanitarian needs, restore hope and create opportunities for a better future. Together, we can provide meaningful assistance to those who need it most and help build stronger, healthier and more empowered communities.
            </p>

            {/* Additional Supporting Message */}
            <div className="border-l-3 border-[#FDB913] pl-4 sm:pl-5 py-1 mb-10">
              <p className="text-gray-200 italic text-[15px] sm:text-[17px] leading-[1.7] font-body">
                "Every contribution matters. Every act of kindness makes a difference. Your generosity can help transform lives, restore dignity and give vulnerable individuals and families the opportunity to look forward to a brighter tomorrow."
              </p>
            </div>

            {/* Prominent DONATE NOW Button */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={handleDonateClick}
                className="bg-[#FDB913] hover:bg-[#e6a50e] text-[#0D1722] font-heading font-extrabold text-base sm:text-lg px-9 sm:px-11 py-4 sm:py-4.5 rounded-full inline-flex items-center gap-3 transition-all duration-300 shadow-xl hover:scale-[1.03] active:scale-95 cursor-pointer uppercase tracking-wider"
              >
                <span>DONATE NOW</span>
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </button>

              <a
                href={`https://wa.me/${FOUNDATION_INFO.whatsappRaw}?text=${encodeURIComponent(
                  'Hello RON Humanitarian Foundation, I would like to partner with you or make a donation.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/15 hover:bg-white/25 text-white border border-white/30 font-bold text-sm sm:text-base px-6 sm:px-8 py-4 rounded-full inline-flex items-center gap-2 transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. OFFICIAL BANK ACCOUNT DETAILS SECTION (LIKE NNNN DONATION.PNG) */}
      {/* ========================================================================= */}
      <section id="official-bank-details" className="py-16 sm:py-20 bg-[#F6F7FB] border-t border-gray-200">
        <div className="max-w-[760px] mx-auto px-5 sm:px-8 text-left">
          
          <div className="text-center mb-8">
            <ScrambleText
              as="span"
              text="Direct Bank Transfer"
              durationMs={420}
              className="font-script text-[#1F3A8A] text-[24px] sm:text-[28px] block mb-1 select-none"
            />
            <StaggeredRevealText
              as="h2"
              lines={['Official Foundation', 'Banking Details']}
              className="font-heading font-bold text-[28px] sm:text-[34px] text-[#0D1722] tracking-tight"
              displayMode="inline"
              delay={0.1}
            />
            <p className="text-sm sm:text-base text-gray-600 mt-2">
              All contributions go directly to supporting relief outreaches, healthcare interventions, and vulnerable community members.
            </p>
          </div>

          {/* EXACT CARD AS IN NNNN DONATION.PNG */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            {/* Blue Card Header */}
            <div className="bg-[#0B2A8A] text-white p-5 sm:p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FDB913]/20 flex items-center justify-center text-[#FDB913]">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-white">
                    Support RON Humanitarian Foundation
                  </h3>
                  <p className="text-xs text-blue-200 font-body">
                    Official Registered NGO: {FOUNDATION_INFO.rcNumber}
                  </p>
                </div>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Account Details Box */}
              <div className="bg-[#F8F9FA] border border-gray-200 rounded-xl p-5 sm:p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500 font-body">
                    OFFICIAL FOUNDATION ACCOUNT (NIGERIA)
                  </span>
                  <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2.5 py-1 rounded-md">
                    Verified NGO Account
                  </span>
                </div>

                <div className="space-y-4 font-body">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-200/80 pb-3 gap-1">
                    <span className="text-xs sm:text-sm text-gray-500">Account Name:</span>
                    <span className="text-base sm:text-lg font-bold text-[#0D1722]">
                      RON Humanitarian Foundation
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-200/80 pb-3 gap-1">
                    <span className="text-xs sm:text-sm text-gray-500">Bank Name:</span>
                    <span className="text-base sm:text-lg font-bold text-[#0D1722]">
                      Zenith Bank Plc
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-1 gap-2">
                    <span className="text-xs sm:text-sm text-gray-500">Account Number:</span>
                    <div className="flex items-center gap-3">
                      <span className="font-mono font-extrabold text-2xl sm:text-3xl text-[#0B2A8A] tracking-wider tabular-nums">
                        1310384938
                      </span>
                      <button
                        onClick={() => copyAccountNumber('1310384938')}
                        className="p-2 rounded-lg bg-gray-100 hover:bg-[#FDB913]/20 text-[#0B2A8A] transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-bold"
                        title="Copy Account Number"
                      >
                        {copied ? (
                          <>
                            <Check className="w-4 h-4 text-emerald-600" />
                            <span className="text-emerald-700">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Green WhatsApp Notification Box */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-emerald-50 border border-emerald-200 rounded-xl gap-3">
                <span className="text-xs sm:text-sm text-emerald-950 font-medium">
                  Made a donation? Notify our finance desk on WhatsApp:
                </span>
                <a
                  href={`https://wa.me/${FOUNDATION_INFO.whatsappRaw}?text=${encodeURIComponent(
                    'Hello RON Humanitarian Foundation, I have completed a donation transfer of support to your Zenith Bank account (1310384938).'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2 rounded-lg text-xs sm:text-sm inline-flex items-center justify-center gap-1.5 shrink-0 transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Send Receipt</span>
                </a>
              </div>

              {/* CAC & Transparency notice */}
              <div className="pt-2 flex items-center justify-center gap-2 text-xs text-gray-500">
                <ShieldCheck className="w-4 h-4 text-[#FDB913]" />
                <span>CAC Incorporated Trustee · RC-8594046 · Audited Accounts</span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. CORPORATE & STRATEGIC PARTNERSHIP INQUIRIES */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-t border-gray-100 text-left">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="max-w-2xl">
            <span className="font-script text-[#1F3A8A] text-[24px] sm:text-[26px] block mb-2 leading-none">
              Partner With Us
            </span>
            <h3 className="font-heading font-bold text-[28px] sm:text-[36px] text-[#0D1722] tracking-tight mb-4">
              Institutional & Philanthropic Collaborations
            </h3>
            <p className="text-[17px] leading-[1.7] text-[#333333] mb-8">
              We collaborate with corporate organizations, CSR foundations, development partners, and private philanthropists to execute high-impact interventions across Nigeria. Let's discuss how we can work together.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-body">
              <a
                href={`mailto:${FOUNDATION_INFO.email}?subject=Partnership%20Proposal`}
                className="p-4 rounded-xl border border-gray-200 hover:border-[#FDB913] hover:bg-amber-50/30 flex items-center gap-3 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#1F3A8A]/10 text-[#1F3A8A] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 block">Email Us</span>
                  <strong className="text-[#0D1722]">{FOUNDATION_INFO.email}</strong>
                </div>
              </a>

              <a
                href={`tel:${FOUNDATION_INFO.phone1Raw}`}
                className="p-4 rounded-xl border border-gray-200 hover:border-[#FDB913] hover:bg-amber-50/30 flex items-center gap-3 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#1F3A8A]/10 text-[#1F3A8A] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 block">Call Directly</span>
                  <strong className="text-[#0D1722]">{FOUNDATION_INFO.phone1}</strong>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
