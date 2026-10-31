import React from 'react';
import { Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';
import { FOUNDATION_INFO, SOCIAL_LINKS } from '../data/foundationData.ts';

function XIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function TikTokIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.4a6.33 6.33 0 0 0-6.62 6.32 6.34 6.34 0 0 0 10.86 4.47 6.28 6.28 0 0 0 1.25-3.83V9.08a8.16 8.16 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.51z" />
    </svg>
  );
}

interface FooterProps {
  onNavigate?: (path: string, sectionId?: string) => void;
  onOpenDonate: () => void;
  onOpenPartner: () => void;
  onOpenVolunteer: () => void;
  onPlaceholderNav: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenDonate: _onOpenDonate,
  onOpenPartner: _onOpenPartner,
  onOpenVolunteer,
  onPlaceholderNav,
}) => {
  return (
    <footer id="footer" className="bg-[#0D1722] text-white border-t border-white/10 pt-14 pb-10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* THREE COLUMNS ONLY */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 text-left">
          
          {/* COLUMN 1: Logo (56px), RON Humanitarian Foundation (Fraunces bold 24px), Two lines about foundation, Social icons */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              {/* Logo & Foundation Name */}
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate?.('/');
                }}
                className="flex items-center gap-3.5 mb-5 cursor-pointer group"
              >
                <picture className="h-[56px] w-[56px] rounded-xl border border-white/20 shrink-0 group-hover:border-[#FDB913] transition-colors overflow-hidden block">
                  <source srcSet="/assets/aistudio/ChatGPT_Image_Oct_5__2026__04_08_07_AM_5f4f6a5a.webp" type="image/webp" />
                  <img
                    src={FOUNDATION_INFO.logo}
                    alt="RON Humanitarian Foundation Logo"
                    width={56}
                    height={56}
                    loading="lazy"
                    decoding="async"
                    className="h-[56px] w-[56px] object-contain rounded-xl shrink-0"
                  />
                </picture>
                <span className="font-heading font-extrabold text-[22px] sm:text-[24px] text-white tracking-tight leading-snug group-hover:text-[#FDB913] transition-colors">
                  RON Humanitarian Foundation
                </span>
              </a>

              {/* Exactly Two lines about the foundation */}
              <p className="text-gray-300 text-[15px] leading-[1.7] font-body mb-2.5">
                RON Humanitarian Foundation is a Nigerian humanitarian organisation supporting vulnerable individuals and communities across Nigeria.
              </p>
              <p className="text-gray-300 text-[15px] leading-[1.7] font-body mb-6">
                Guided by dignity and compassion, we advance community relief, education, healthcare interventions, and economic self-reliance.
              </p>

              {/* CAC badge */}
              <div className="flex items-center gap-2 text-xs text-gray-400 mb-6">
                <ShieldCheck className="w-4 h-4 text-[#FDB913]" />
                <span>CAC Registered NGO · {FOUNDATION_INFO.rcNumber}</span>
              </div>
            </div>

            {/* Social Icons (Facebook, Instagram, TikTok, YouTube, LinkedIn, X) */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 block">
                Connect With Us
              </span>
              <div className="flex flex-wrap items-center gap-2.5">
                {SOCIAL_LINKS.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FDB913] hover:text-[#0D1722] text-white flex items-center justify-center transition-all duration-200"
                    aria-label={item.name}
                    title={item.name}
                  >
                    {item.icon === 'facebook' && (
                      <span className="font-bold text-sm">f</span>
                    )}
                    {item.icon === 'instagram' && (
                      <span className="font-bold text-sm">ig</span>
                    )}
                    {item.icon === 'tiktok' && <TikTokIcon className="w-4 h-4" />}
                    {item.icon === 'youtube' && (
                      <span className="font-bold text-xs">YT</span>
                    )}
                    {item.icon === 'linkedin' && (
                      <span className="font-bold text-sm">in</span>
                    )}
                    {item.icon === 'x' && <XIcon className="w-4 h-4" />}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* COLUMN 2: Quick Links */}
          <div className="md:col-span-3">
            <h4 className="font-heading font-bold text-lg text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300 font-body">
              <li>
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate?.('/');
                  }}
                  className="hover:text-[#FDB913] transition-colors cursor-pointer"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate?.('/about');
                  }}
                  className="hover:text-[#FDB913] transition-colors cursor-pointer"
                >
                  About Us & Story
                </a>
              </li>
              <li>
                <a
                  href="/#programs"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate?.('/', 'programs');
                  }}
                  className="hover:text-[#FDB913] transition-colors cursor-pointer"
                >
                  Programs & Focus Areas
                </a>
              </li>
              <li>
                <a
                  href="/impact-stories"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate?.('/impact-stories');
                  }}
                  className="hover:text-[#FDB913] transition-colors cursor-pointer"
                >
                  Impact Stories
                </a>
              </li>
              <li>
                <a
                  href="/volunteer"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate?.('/volunteer');
                  }}
                  className="hover:text-[#FDB913] transition-colors cursor-pointer"
                >
                  Become a Volunteer
                </a>
              </li>
              <li>
                <a
                  href="/partner-with-us"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate?.('/partner-with-us');
                  }}
                  className="hover:text-[#FDB913] transition-colors cursor-pointer"
                >
                  Partner With Us & Donate
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate?.('/', 'faq');
                  }}
                  className="hover:text-[#FDB913] transition-colors cursor-pointer"
                >
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: Get In Touch (Ocean Centre address, both phones, email) */}
          <div className="md:col-span-4">
            <h4 className="font-heading font-bold text-lg text-white mb-4">
              Get In Touch
            </h4>
            <ul className="space-y-3.5 text-sm text-gray-300 font-body">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FDB913] shrink-0 mt-1" />
                <span className="leading-snug">
                  {FOUNDATION_INFO.address}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FDB913] shrink-0" />
                <a
                  href={`tel:${FOUNDATION_INFO.phone1Raw}`}
                  className="hover:text-[#FDB913] transition-colors tabular-nums"
                >
                  {FOUNDATION_INFO.phone1}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FDB913] shrink-0" />
                <a
                  href={`tel:${FOUNDATION_INFO.phone2Raw}`}
                  className="hover:text-[#FDB913] transition-colors tabular-nums"
                >
                  {FOUNDATION_INFO.phone2}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FDB913] shrink-0" />
                <a
                  href={`mailto:${FOUNDATION_INFO.email}`}
                  className="hover:text-[#FDB913] transition-colors break-all"
                >
                  {FOUNDATION_INFO.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Line: Copyright and RC-8594046 */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p className="text-center sm:text-left">
            © 2026 RON Humanitarian Foundation. RC-8594046.
          </p>
          <div className="flex items-center gap-6">
            <span>Dignity · Opportunity · Empowerment</span>
            <span className="text-white/20">|</span>
            <span>Abuja, Nigeria</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

