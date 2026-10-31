import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn, MapPin, Sparkles, ShieldCheck } from 'lucide-react';

export interface LightboxImageItem {
  src: string;
  alt?: string;
  title?: string;
  category?: string;
  location?: string;
}

interface LightboxContextType {
  openLightbox: (item: LightboxImageItem | string, alt?: string, title?: string) => void;
  closeLightbox: () => void;
  isOpen: boolean;
}

const LightboxContext = createContext<LightboxContextType | undefined>(undefined);

export const useLightbox = (): LightboxContextType => {
  const context = useContext(LightboxContext);
  if (!context) {
    throw new Error('useLightbox must be used within a LightboxProvider');
  }
  return context;
};

export const LightboxProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeImage, setActiveImage] = useState<LightboxImageItem | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const openLightbox = useCallback((item: LightboxImageItem | string, alt?: string, title?: string) => {
    if (typeof item === 'string') {
      setActiveImage({
        src: item,
        alt: alt || 'RON Humanitarian Foundation outreach photograph',
        title: title || alt || 'Official Foundation Outreach Archive',
      });
    } else {
      setActiveImage(item);
    }
    setIsLoaded(false);
  }, []);

  const closeLightbox = useCallback(() => {
    setActiveImage(null);
  }, []);

  // Keyboard navigation: Escape key closes lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox();
      }
    };

    if (activeImage) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeImage, closeLightbox]);

  // Clean WebP / fallback helper
  const resolvedSrc = activeImage?.src || '';
  const webpSrc = resolvedSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp');

  return (
    <LightboxContext.Provider value={{ openLightbox, closeLightbox, isOpen: !!activeImage }}>
      {children}

      <AnimatePresence>
        {activeImage && (
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 md:p-8 select-none"
            role="dialog"
            aria-modal="true"
            aria-label="Enlarged image lightbox view"
          >
            {/* Backdrop with dark overlay and blur, click outside to close */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.24, ease: 'easeOut' }}
              className="absolute inset-0 bg-[#070E18]/92 backdrop-blur-md cursor-pointer"
              onClick={closeLightbox}
            />

            {/* Top Bar Controls */}
            <div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-6 flex items-center justify-between z-20 pointer-events-none">
              <div className="flex items-center gap-2.5 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-white/90 text-xs font-semibold pointer-events-auto">
                <ShieldCheck className="w-4 h-4 text-[#FDB913]" />
                <span className="hidden xs:inline">RON Humanitarian Foundation</span>
                <span className="text-white/40">•</span>
                <span className="text-[#FDB913]">RC-8594046</span>
              </div>

              <div className="flex items-center gap-3 pointer-events-auto">
                <button
                  onClick={closeLightbox}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-white/20 active:bg-[#FDB913] active:text-[#0D1722] text-white flex items-center justify-center transition-all duration-200 border border-white/15 shadow-xl hover:scale-105 cursor-pointer group"
                  aria-label="Close enlarged image view (Escape)"
                  title="Close (Esc)"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:rotate-90 duration-300" />
                </button>
              </div>
            </div>

            {/* Central Image Container with Zoom & Fade Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 10 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 max-w-[94vw] max-h-[85vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-black/40 max-w-full max-h-[76vh] flex items-center justify-center">
                {/* Preloader spinner while image decodes */}
                {!isLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center min-w-[280px] min-h-[220px]">
                    <div className="w-9 h-9 border-3 border-white/20 border-t-[#FDB913] rounded-full animate-spin" />
                  </div>
                )}

                <picture>
                  <source srcSet={webpSrc} type="image/webp" />
                  <img
                    src={resolvedSrc}
                    alt={activeImage.alt || 'Enlarged field photograph'}
                    onLoad={() => setIsLoaded(true)}
                    className={`max-w-[92vw] max-h-[74vh] w-auto h-auto object-contain transition-opacity duration-300 ${
                      isLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </picture>
              </div>

              {/* Bottom Caption Pill */}
              {(activeImage.title || activeImage.alt) && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.2 }}
                  className="mt-3 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-center max-w-xl text-white/95 text-xs sm:text-sm font-medium shadow-lg"
                >
                  <p className="line-clamp-2">
                    {activeImage.title || activeImage.alt}
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </LightboxContext.Provider>
  );
};
