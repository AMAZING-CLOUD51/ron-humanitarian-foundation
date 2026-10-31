import React, { useState } from 'react';
import {
  Mail,
  Phone,
  ArrowRight,
  Menu,
  X,
} from 'lucide-react';
import { FOUNDATION_INFO, NAV_LINKS, SOCIAL_LINKS } from '../data/foundationData.ts';

function XIcon({ className = "w-3.5 h-3.5 text-[#FDB913]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function TikTokIcon({ className = "w-3.5 h-3.5 text-[#FDB913]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.4a6.33 6.33 0 0 0-6.62 6.32 6.34 6.34 0 0 0 10.86 4.47 6.28 6.28 0 0 0 1.25-3.83V9.08a8.16 8.16 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.51z" />
    </svg>
  );
}

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string, sectionId?: string) => void;
  onOpenDonate: () => void;
  onOpenSearch?: () => void;
  onPlaceholderNav: (pageName: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPath,
  onNavigate,
  onOpenDonate,
  onPlaceholderNav,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  let activeNav = 'Home';
  if (currentPath === '/about') {
    activeNav = 'About Us';
  } else if (currentPath === '/impact-stories') {
    activeNav = 'Impact Stories';
  } else if (currentPath.startsWith('/programs')) {
    activeNav = 'Programs';
  } else if (currentPath === '/partner-with-us') {
    activeNav = 'Donate';
  } else if (currentPath === '/volunteer') {
    activeNav = 'Get Involved';
  } else if (currentPath === '/') {
    activeNav = 'Home';
  }

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    link: { name: string; href: string }
  ) => {
    setMobileMenuOpen(false);

    if (link.name === 'Home') {
      e.preventDefault();
      onNavigate('/');
      return;
    }

    if (link.name === 'About Us') {
      e.preventDefault();
      onNavigate('/about');
      return;
    }

    if (link.name === 'Impact Stories') {
      e.preventDefault();
      onNavigate('/impact-stories');
      return;
    }

    if (link.name === 'Programs') {
      e.preventDefault();
      if (currentPath === '/') {
        const target =
          document.getElementById('programs') ||
          document.getElementById('what-we-do');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      } else {
        onNavigate('/', 'programs');
        return;
      }
    }

    if (link.name === 'Donate') {
      e.preventDefault();
      onNavigate('/partner-with-us');
      return;
    }

    if (link.name === 'Get Involved') {
      e.preventDefault();
      if (currentPath === '/') {
        const target =
          document.getElementById('get-involved') ||
          document.getElementById('volunteer-partner');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      } else {
        onNavigate('/', 'get-involved');
        return;
      }
    }

    if (link.name === 'Contact Us') {
      e.preventDefault();
      if (currentPath === '/') {
        const target = document.getElementById('footer');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      } else {
        onNavigate('/', 'footer');
        return;
      }
    }

    if (link.href.startsWith('#')) {
      const targetId = link.href.replace('#', '');
      if (currentPath === '/') {
        const target = document.getElementById(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      } else {
        e.preventDefault();
        onNavigate('/', targetId);
        return;
      }
    }

    e.preventDefault();
    onPlaceholderNav(link.name);
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* PART 1, TOP BAR: thin full-width royal blue bar (#1E3A8A) with small white text */}
      <div className="bg-[#1E3A8A] text-white text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-[#2b4fae]/60">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Left side, in one row with small amber/yellow icons */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6">
            <a
              href={`mailto:${FOUNDATION_INFO.email}`}
              className="flex items-center gap-1.5 hover:text-[#FDB913] transition-colors duration-200"
              title="Official Email"
            >
              <Mail className="w-3.5 h-3.5 text-[#FDB913]" />
              <span className="tracking-wide text-[13px]">{FOUNDATION_INFO.email}</span>
            </a>
            <a
              href={`tel:${FOUNDATION_INFO.phone1Raw}`}
              className="flex items-center gap-1.5 hover:text-[#FDB913] transition-colors duration-200"
              title="Primary Phone"
            >
              <Phone className="w-3.5 h-3.5 text-[#FDB913]" />
              <span className="tabular-nums text-[13px]">{FOUNDATION_INFO.phone1}</span>
            </a>
            <a
              href={`tel:${FOUNDATION_INFO.phone2Raw}`}
              className="flex items-center gap-1.5 hover:text-[#FDB913] transition-colors duration-200"
              title="Secondary Phone"
            >
              <Phone className="w-3.5 h-3.5 text-[#FDB913]" />
              <span className="tabular-nums text-[13px]">{FOUNDATION_INFO.phone2}</span>
            </a>
          </div>

          {/* Right side: amber/yellow social icons */}
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-5 h-5 flex items-center justify-center text-[#FDB913] hover:text-white transition-colors duration-200"
                aria-label={item.name}
                title={item.name}
              >
                {item.icon === 'facebook' && (
                  <span className="font-bold text-xs">f</span>
                )}
                {item.icon === 'instagram' && (
                  <span className="font-bold text-xs">ig</span>
                )}
                {item.icon === 'tiktok' && <TikTokIcon />}
                {item.icon === 'youtube' && (
                  <span className="font-bold text-[10px]">YT</span>
                )}
                {item.icon === 'linkedin' && (
                  <span className="font-bold text-xs">in</span>
                )}
                {item.icon === 'x' && <XIcon />}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* PART 2, MAIN NAVBAR: white floating navbar with large rounded corners, soft shadow, small margin left & right */}
      <div className="max-w-[1280px] mx-auto px-3 sm:px-6 my-2.5">
        <div className="bg-white rounded-2xl shadow-md border border-gray-100/90 h-[74px] flex items-center justify-between px-4 sm:px-6 md:px-8">
          
          {/* Far left: RON logo (navy square with white tree), then "RON Humanitarian Foundation" stacked on 3 lines */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/');
            }}
            className="flex items-center gap-3 shrink-0 py-1"
          >
            <picture className="h-[52px] w-[52px] rounded-lg shrink-0 overflow-hidden block">
              <source srcSet="/assets/aistudio/ChatGPT_Image_Oct_5__2026__04_08_07_AM_5f4f6a5a.webp" type="image/webp" />
              <img
                src={FOUNDATION_INFO.logo}
                alt="RON Humanitarian Foundation Logo"
                width={52}
                height={52}
                loading="eager"
                fetchPriority="high"
                decoding="sync"
                className="h-[52px] w-[52px] object-contain rounded-lg shrink-0"
              />
            </picture>
            <div className="flex flex-col justify-center text-left leading-[1.08]">
              <span className="font-heading font-extrabold text-[16px] sm:text-[18px] text-[#0B2A8A] tracking-tight">
                RON
              </span>
              <span className="font-heading font-extrabold text-[16px] sm:text-[18px] text-[#0B2A8A] tracking-tight">
                Humanitarian
              </span>
              <span className="font-heading font-extrabold text-[16px] sm:text-[18px] text-[#0B2A8A] tracking-tight">
                Foundation
              </span>
            </div>
          </a>

          {/* Desktop & Tablet Navigation: Exactly in this order:
              1. Home
              2. About Us
              3. Impact Stories
              4. Programs
              5. Get Involved
              6. Donate (visually prominent gold button)
              7. Contact Us
          */}
          <nav className="hidden min-[760px]:flex items-center gap-2.5 md:gap-3 lg:gap-4.5 xl:gap-6 text-[12.5px] md:text-[13px] lg:text-[14px] xl:text-[15px] font-bold text-[#0D1722] shrink min-w-0">
            {NAV_LINKS.map((link) => {
              const isActive = activeNav === link.name;

              if (link.name === 'Donate') {
                return (
                  <button
                    key={link.name}
                    onClick={() => onNavigate('/partner-with-us')}
                    className="rounded-full bg-[#FDB913] hover:bg-[#e6a50e] text-[#0D1722] font-extrabold px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 text-xs sm:text-sm lg:text-base inline-flex items-center justify-center gap-1.5 shadow-xs transition-all duration-200 hover:scale-[1.02] cursor-pointer shrink-0"
                  >
                    <span>Donate</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </button>
                );
              }

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`transition-colors duration-200 whitespace-nowrap py-1 cursor-pointer ${
                    isActive
                      ? 'text-[#FDB913]'
                      : 'text-[#0D1722] hover:text-[#FDB913]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Mobile-only menu toggle (only on phone-sized screens below 760px) */}
          <div className="min-[760px]:hidden flex items-center gap-2">
            <button
              onClick={() => onNavigate('/partner-with-us')}
              className="rounded-lg bg-[#FDB913] text-[#0D1722] font-extrabold px-3 py-1.5 text-xs flex items-center gap-1 cursor-pointer"
            >
              <span>Donate</span>
              <ArrowRight className="w-3 h-3 stroke-[2.5]" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-800 hover:text-[#0B2A8A] rounded-lg cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile dropdown menu (phone screens only) with all 7 items */}
        {mobileMenuOpen && (
          <div className="min-[760px]:hidden mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 space-y-2">
            <nav className="flex flex-col space-y-1">
              {NAV_LINKS.map((link) => {
                if (link.name === 'Donate') {
                  return (
                    <div key={link.name} className="py-1">
                      <button
                        onClick={() => {
                          setMobileMenuOpen(false);
                          onNavigate('/partner-with-us');
                        }}
                        className="w-full rounded-xl bg-[#FDB913] text-[#0D1722] font-extrabold py-3 text-center flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                      >
                        <span>Donate</span>
                        <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                      </button>
                    </div>
                  );
                }

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    className={`py-2 px-3 rounded-lg text-[15px] font-bold flex items-center justify-between transition-colors cursor-pointer ${
                      activeNav === link.name
                        ? 'bg-amber-50 text-[#FDB913]'
                        : 'text-[#0D1722] hover:bg-gray-50'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
                  </a>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
