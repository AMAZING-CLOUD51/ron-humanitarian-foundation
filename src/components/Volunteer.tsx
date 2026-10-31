import React, { useState, useEffect } from 'react';
import { ArrowLeft, CheckCircle2, MessageCircle, Heart, Users, MapPin, Sparkles } from 'lucide-react';
import { FOUNDATION_INFO } from '../data/foundationData.ts';
import {
  ScrambleText,
  StaggeredRevealText,
  WordByWordText,
} from './animations/TextAnimations.tsx';
import { OptimizedImage } from './ui/OptimizedImage.tsx';

interface VolunteerProps {
  onNavigate: (path: string, sectionId?: string) => void;
}

export const Volunteer: React.FC<VolunteerProps> = ({ onNavigate }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [interest, setInterest] = useState('Community Relief & Food Distribution');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const buildWhatsAppVolunteerUrl = () => {
    const text = `Hello RON Humanitarian Foundation,\n\nI would like to apply to Become a Volunteer!\n\n*Name:* ${fullName || 'Volunteer Applicant'}\n*Email:* ${email || 'Not provided'}\n*Phone/WhatsApp:* ${phone || 'Not provided'}\n*State/City:* ${location || 'Nigeria'}\n*Area of Interest:* ${interest}\n\n*Why I want to volunteer:* ${message || 'I want to serve and help vulnerable communities.'}`;
    return `https://wa.me/${FOUNDATION_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submissionData = {
      type: 'Volunteer Application',
      fullName,
      email,
      phone,
      location,
      interest,
      message,
      timestamp: new Date().toISOString(),
    };

    // Save locally
    try {
      const existingRaw = localStorage.getItem('ron_volunteer_applications');
      const existing = existingRaw ? JSON.parse(existingRaw) : [];
      existing.push(submissionData);
      localStorage.setItem('ron_volunteer_applications', JSON.stringify(existing));
    } catch {
      // fallback
    }

    // Deliver directly to ronhumanitarianfoundation@gmail.com
    try {
      await fetch('https://formsubmit.co/ajax/ronhumanitarianfoundation@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `New Volunteer Application: ${fullName} (${location})`,
          Type: 'Volunteer Application',
          Name: fullName,
          Email: email,
          Phone: phone,
          Location: location,
          InterestArea: interest,
          Motivation: message,
          _replyto: email,
        }),
      });
    } catch {
      // graceful offline
    }

    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="bg-white text-[#333333] font-body selection:bg-[#FDB913]/30 selection:text-[#0D1722]">
      {/* Container: max-width 1200px, 20px padding, top spacing 132px desktop / 112px mobile */}
      <div className="max-w-[1200px] mx-auto px-5 pt-[112px] lg:pt-[132px] pb-24 text-left">
        
        {/* Back Link */}
        <div className="mb-8">
          <button
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#1F3A8A] hover:text-[#FDB913] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
            <span>Back to Home</span>
          </button>
        </div>

        {/* Header Section */}
        <section className="mb-10">
          <ScrambleText
            as="span"
            text="Get Involved"
            durationMs={450}
            className="font-script text-[#1F3A8A] text-[24px] md:text-[26px] block mb-2 leading-none select-none"
          />

          <WordByWordText
            as="h1"
            text="Become a Volunteer"
            className="font-heading font-bold text-[34px] sm:text-[46px] lg:text-[54px] leading-[1.15] text-[#FDB913] tracking-tight block"
            delay={0.1}
          />

          <StaggeredRevealText
            as="h2"
            lines={[
              'Join us on the ground and help deliver',
              "support where it's needed most.",
            ]}
            className="font-heading font-bold text-[28px] sm:text-[38px] lg:text-[44px] leading-[1.2] text-[#1F3A8A] tracking-tight mt-1 mb-8"
            displayMode="block"
            delay={0.2}
          />
        </section>

        {/* Narrative & Photos */}
        <article className="space-y-4 text-[17px] sm:text-[18px] leading-[1.8] text-[#333333]">
          <p>
            At RON Humanitarian Foundation, volunteers are the lifeblood of our frontline work. Whether we are packing grains into relief hampers for displaced households in Wassa, setting up diagnostic checkup posts in Bokkos, or putting textbooks into eager young hands, our volunteers stand shoulder-to-shoulder with communities.
          </p>

          {/* Centered Photo 1: max-width 740px, rounded-[24px], my-8 */}
          <div className="my-8 flex justify-center w-full">
            <div className="w-full max-w-[740px] rounded-[24px] overflow-hidden shadow-xs border border-gray-100">
              <OptimizedImage
                src="/assets/aistudio/IMG-20260519-WA0286_038cb92f.jpg"
                alt="RON Humanitarian Foundation volunteers on the field"
                title="RON Foundation Volunteers on the Frontline"
                aspectRatio="aspect-[16/10]"
                className="rounded-[24px]"
                priority={true}
              />
            </div>
          </div>

          <p>
            You do not need prior humanitarian experience to make a lasting difference. What we value most is empathy, dependability, and a genuine commitment to upholding human dignity. We welcome medical professionals, teachers, students, photographers, logistics organizers, and passionate everyday citizens.
          </p>

          {/* Centered Photo 2: max-width 740px, rounded-[24px], my-8 */}
          <div className="my-8 flex justify-center w-full">
            <div className="w-full max-w-[740px] rounded-[24px] overflow-hidden shadow-xs border border-gray-100">
              <OptimizedImage
                src="/assets/aistudio/unnamed_7_9d9456c3.webp"
                alt="RON Humanitarian Foundation volunteer engaging community children"
                title="Engaging Community Children • Educational Outreach"
                aspectRatio="aspect-[16/10]"
                className="rounded-[24px]"
              />
            </div>
          </div>

          <p>
            Volunteering with RON Foundation gives you direct frontline impact. You will travel to rural settlements, interact with community elders, mentor children, and witness firsthand the profound relief that a single act of kindness brings.
          </p>
        </article>

        {/* Application Form Section (64px below last paragraph, mt-16) */}
        <section className="mt-16 pt-8 text-left border-t border-gray-100">
          <span className="font-script text-[#1F3A8A] text-[24px] md:text-[26px] block mb-2 leading-none">
            Volunteer Application
          </span>

          <h3 className="font-heading font-bold text-[30px] sm:text-[38px] lg:text-[42px] leading-[1.15] text-[#FDB913] tracking-tight">
            Register as a Volunteer
          </h3>

          <h4 className="font-heading font-bold text-[26px] sm:text-[32px] lg:text-[36px] leading-[1.2] text-[#1F3A8A] tracking-tight mt-1 mb-4">
            Tell us about yourself
          </h4>

          <p className="text-[17px] sm:text-[18px] leading-[1.7] text-[#333333] max-w-2xl mb-8">
            Complete the short application form below. Our volunteer coordination team will review your submission and contact you ahead of our upcoming community outreaches.
          </p>

          <div className="max-w-2xl">
            {submitted ? (
              <div className="bg-[#F6F7FB] border border-[#1F3A8A]/20 rounded-[24px] p-6 sm:p-8 text-left space-y-5">
                <div className="flex items-start gap-3.5">
                  <CheckCircle2 className="w-7 h-7 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-heading font-bold text-xl text-[#0D1722]">
                      Application Received!
                    </h5>
                    <p className="text-base text-[#333333] mt-1">
                      Thank you for offering your heart and time. Your details have been sent to our team at <strong className="text-[#1F3A8A]">ronhumanitarianfoundation@gmail.com</strong>.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-emerald-950">
                      Want to connect right away?
                    </p>
                    <p className="text-xs text-emerald-800">
                      Reach out to our volunteer coordinator on WhatsApp (+234 707 710 4798).
                    </p>
                  </div>
                  <a
                    href={buildWhatsAppVolunteerUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-5 py-2.5 rounded-full text-sm inline-flex items-center justify-center gap-2 shrink-0 transition-colors shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>

                <div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-sm font-bold text-[#1F3A8A] hover:text-[#FDB913] underline transition-colors cursor-pointer"
                  >
                    Submit another application
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-[#0D1722] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Amina Bello"
                    className="w-full bg-white border border-gray-300 rounded-[14px] px-4 py-3.5 text-[#333333] placeholder-gray-400 focus:outline-hidden focus:border-[#FDB913] focus:ring-2 focus:ring-[#FDB913]/20 text-base"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-[#0D1722] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="amina@example.com"
                      className="w-full bg-white border border-gray-300 rounded-[14px] px-4 py-3.5 text-[#333333] placeholder-gray-400 focus:outline-hidden focus:border-[#FDB913] focus:ring-2 focus:ring-[#FDB913]/20 text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#0D1722] mb-2">
                      Phone / WhatsApp Number *
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-[#0D1722] mb-2">
                      State & City of Residence *
                    </label>
                    <input
                      type="text"
                      required
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="e.g. Jos, Plateau State or Abuja"
                      className="w-full bg-white border border-gray-300 rounded-[14px] px-4 py-3.5 text-[#333333] placeholder-gray-400 focus:outline-hidden focus:border-[#FDB913] focus:ring-2 focus:ring-[#FDB913]/20 text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#0D1722] mb-2">
                      Primary Area of Interest
                    </label>
                    <select
                      value={interest}
                      onChange={(e) => setInterest(e.target.value)}
                      className="w-full bg-white border border-gray-300 rounded-[14px] px-4 py-3.5 text-[#333333] focus:outline-hidden focus:border-[#FDB913] focus:ring-2 focus:ring-[#FDB913]/20 text-base"
                    >
                      <option value="Community Relief & Food Distribution">Community Relief & Food Distribution</option>
                      <option value="Medical & Healthcare Outreach">Medical & Healthcare Outreach</option>
                      <option value="Education & Child Mentorship">Education & Child Mentorship</option>
                      <option value="Logistics & Event Coordination">Logistics & Event Coordination</option>
                      <option value="Media, Photography & Storytelling">Media, Photography & Storytelling</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#0D1722] mb-2">
                    Why would you like to volunteer with RON Foundation? *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us a little bit about your background, skills, and availability..."
                    className="w-full bg-white border border-gray-300 rounded-[14px] px-4 py-3.5 text-[#333333] placeholder-gray-400 focus:outline-hidden focus:border-[#FDB913] focus:ring-2 focus:ring-[#FDB913]/20 text-base resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#FDB913] hover:bg-[#e6a50e] text-[#1F3A8A] font-extrabold px-9 py-3.5 rounded-full text-base transition-all duration-200 cursor-pointer disabled:opacity-50 inline-flex items-center gap-2"
                  >
                    <span>{isSubmitting ? 'Submitting...' : 'Submit Volunteer Application'}</span>
                  </button>

                  <a
                    href={buildWhatsAppVolunteerUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold px-7 py-3.5 rounded-full text-base transition-all duration-200 inline-flex items-center gap-2 cursor-pointer shadow-xs"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                    <span>Apply via WhatsApp</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </section>

      </div>
    </div>
  );
};
