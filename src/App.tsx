import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LightboxProvider } from './context/LightboxContext.tsx';
import { PageProgressBar } from './components/ui/PageProgressBar.tsx';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { WhoWeAre } from './components/WhoWeAre.tsx';
import { WhatWeDo } from './components/WhatWeDo.tsx';
import { CommunitiesReached } from './components/CommunitiesReached.tsx';
import { FAQSection } from './components/FAQSection.tsx';
import { VolunteerPartnerBanner } from './components/VolunteerPartnerBanner.tsx';
import { AboutUs } from './components/AboutUs.tsx';
import { ImpactStories } from './components/ImpactStories.tsx';
import { ProgramDetail, ProgramSlug } from './components/ProgramDetail.tsx';
import { PartnerWithUs } from './components/PartnerWithUs.tsx';
import { Volunteer } from './components/Volunteer.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatingActions } from './components/FloatingActions.tsx';
import {
  DonateModal,
  PartnerModal,
  VolunteerModal,
  SearchModal,
  ProgramModal,
  PagePlaceholderModal,
} from './components/Modals.tsx';
import { FocusArea } from './types.ts';

function getPath(): string {
  if (typeof window !== 'undefined') {
    const path = window.location.pathname;
    if (path.startsWith('/about')) return '/about';
    if (path.startsWith('/impact-stories')) return '/impact-stories';
    if (path.startsWith('/partner-with-us') || path.startsWith('/partner')) return '/partner-with-us';
    if (path.startsWith('/volunteer') || path.startsWith('/become-a-volunteer')) return '/volunteer';
    if (path.startsWith('/programs/')) return path;
    return '/';
  }
  return '/';
}

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(getPath);
  const [isPageTransitioning, setIsPageTransitioning] = useState(false);

  const [donateModalOpen, setDonateModalOpen] = useState(false);
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);
  const [volunteerModalOpen, setVolunteerModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<FocusArea | null>(null);
  const [placeholderPage, setPlaceholderPage] = useState<string | null>(null);

  // Sync with browser back/forward history buttons
  useEffect(() => {
    const handlePopState = () => {
      setIsPageTransitioning(true);
      setTimeout(() => {
        setCurrentPath(getPath());
        window.scrollTo({ top: 0, behavior: 'instant' });
        setTimeout(() => setIsPageTransitioning(false), 80);
      }, 100);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Check URL hash for smooth scrolling on page load
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const hash = window.location.hash.replace('#', '');
      const timer = setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [currentPath]);

  const navigate = (path: string, sectionId?: string) => {
    let targetPath = '/';
    if (path.startsWith('/about')) {
      targetPath = '/about';
    } else if (path.startsWith('/impact-stories')) {
      targetPath = '/impact-stories';
    } else if (path.startsWith('/partner-with-us') || path.startsWith('/partner')) {
      targetPath = '/partner-with-us';
    } else if (path.startsWith('/volunteer') || path.startsWith('/become-a-volunteer')) {
      targetPath = '/volunteer';
    } else if (path.startsWith('/programs/')) {
      targetPath = path;
    }

    const isDifferentPage = targetPath !== currentPath;

    if (isDifferentPage) {
      // Trigger subtle loading progress bar and smooth transition
      setIsPageTransitioning(true);
      setTimeout(() => {
        setCurrentPath(targetPath);
        window.history.pushState({}, '', targetPath + (sectionId ? `#${sectionId}` : ''));

        if (sectionId) {
          const doScroll = () => {
            const el =
              document.getElementById(sectionId) ||
              (sectionId === 'programs' ? document.getElementById('what-we-do') : null) ||
              (sectionId === 'get-involved' ? document.getElementById('volunteer-partner') : null);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          };
          setTimeout(doScroll, 80);
          setTimeout(doScroll, 250);
        } else {
          window.scrollTo({ top: 0, behavior: 'instant' });
        }

        setTimeout(() => {
          setIsPageTransitioning(false);
        }, 120);
      }, 110);
    } else {
      window.history.pushState({}, '', targetPath + (sectionId ? `#${sectionId}` : ''));
      if (sectionId) {
        scrollToSection(sectionId);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const scrollToSection = (id: string) => {
    const el =
      document.getElementById(id) ||
      (id === 'programs' ? document.getElementById('what-we-do') : null) ||
      (id === 'get-involved' ? document.getElementById('volunteer-partner') : null);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isProgramDetail = currentPath.startsWith('/programs/');
  const programSlug = isProgramDetail
    ? (currentPath.replace('/programs/', '') as ProgramSlug)
    : null;

  return (
    <LightboxProvider>
      <div className="min-h-screen bg-white text-[#333333] flex flex-col font-sans selection:bg-[#FDB913]/30 selection:text-[#0D1722]">
        {/* TOP LOADING PROGRESS BAR FOR SMOOTH TRANSITIONS */}
        <PageProgressBar isNavigating={isPageTransitioning} />

        {/* HEADER (Top navy bar + Fixed white menu) */}
        <Header
          currentPath={currentPath}
          onNavigate={navigate}
          onOpenDonate={() => setDonateModalOpen(true)}
          onOpenSearch={() => setSearchModalOpen(true)}
          onPlaceholderNav={(page) => setPlaceholderPage(page)}
        />

        <main className="flex-1">
          <motion.div
            key={currentPath}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
        {currentPath === '/about' ? (
          /* DEDICATED ABOUT US EDITORIAL PAGE (/about) */
          <AboutUs />
        ) : currentPath === '/impact-stories' ? (
          /* DEDICATED IMPACT STORIES EDITORIAL PAGE (/impact-stories) */
          <ImpactStories
            onOpenDonate={() => setDonateModalOpen(true)}
            onOpenVolunteer={() => setVolunteerModalOpen(true)}
          />
        ) : currentPath === '/partner-with-us' ? (
          /* DEDICATED PARTNER WITH US & DONATION LANDING PAGE (/partner-with-us) */
          <PartnerWithUs
            onNavigate={navigate}
            onOpenDonateModal={() => setDonateModalOpen(true)}
          />
        ) : currentPath === '/volunteer' ? (
          /* DEDICATED BECOME A VOLUNTEER PAGE (/volunteer) */
          <Volunteer onNavigate={navigate} />
        ) : isProgramDetail && programSlug ? (
          /* DEDICATED PROGRAM DETAIL EDITORIAL PAGE (/programs/:slug) */
          <ProgramDetail
            slug={programSlug}
            onNavigate={navigate}
            onOpenDonate={() => setDonateModalOpen(true)}
          />
        ) : (
          /* HOME PAGE (All original sections kept exactly as they are) */
          <>
            {/* 1. HERO SECTION */}
            <Hero
              onOpenPrograms={() => scrollToSection('programs')}
              onOpenPartner={() => navigate('/partner-with-us')}
            />

            {/* 2. WHO WE ARE SECTION */}
            <WhoWeAre
              onDiscoverStory={() => scrollToSection('programs')}
            />

            {/* 3. WHAT WE DO SECTION */}
            <WhatWeDo
              onSelectProgram={(program) => setSelectedProgram(program)}
              onExplorePrograms={() => scrollToSection('communities')}
              onNavigateProgram={(slug) => navigate(`/programs/${slug}`)}
            />

            {/* 4. COMMUNITIES WE HAVE REACHED SECTION */}
            <CommunitiesReached />

            {/* 5. FAQ SECTION */}
            <FAQSection
              onOpenPartnerModal={() => navigate('/partner-with-us')}
            />

            {/* 6. VOLUNTEER / PARTNER SPLIT BANNER */}
            <VolunteerPartnerBanner
              onOpenVolunteer={() => navigate('/volunteer')}
              onOpenPartner={() => navigate('/partner-with-us')}
              onNavigate={navigate}
            />
          </>
        )}
          </motion.div>
      </main>

      {/* 7. FOOTER */}
      <Footer
        onNavigate={navigate}
        onOpenDonate={() => setDonateModalOpen(true)}
        onOpenPartner={() => setPartnerModalOpen(true)}
        onOpenVolunteer={() => setVolunteerModalOpen(true)}
        onPlaceholderNav={(page) => setPlaceholderPage(page)}
      />

      {/* EXTRAS: Floating WhatsApp, Call & Scroll-to-top stacked on the right */}
      <FloatingActions />

      {/* MODALS */}
      <DonateModal
        isOpen={donateModalOpen}
        onClose={() => setDonateModalOpen(false)}
      />
      <PartnerModal
        isOpen={partnerModalOpen}
        onClose={() => setPartnerModalOpen(false)}
      />
      <VolunteerModal
        isOpen={volunteerModalOpen}
        onClose={() => setVolunteerModalOpen(false)}
      />
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
      />
      <ProgramModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
        onOpenDonate={() => setDonateModalOpen(true)}
      />
      <PagePlaceholderModal
        pageName={placeholderPage}
        onClose={() => setPlaceholderPage(null)}
      />
    </div>
    </LightboxProvider>
  );
}
