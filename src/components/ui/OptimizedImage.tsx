import React, { useState } from 'react';
import { ZoomIn } from 'lucide-react';
import { useLightbox } from '../../context/LightboxContext.tsx';

export interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  aspectRatio?: string;
  width?: number | string;
  height?: number | string;
  priority?: boolean;
  enableLightbox?: boolean;
  title?: string;
  category?: string;
  objectFit?: 'cover' | 'contain' | 'fill';
  objectPosition?: string;
  onClick?: () => void;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  imageClassName = '',
  aspectRatio = '',
  width,
  height,
  priority = false,
  enableLightbox = true,
  title,
  category,
  objectFit = 'cover',
  objectPosition = 'center',
  onClick,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { openLightbox } = useLightbox();

  // WebP URL generation (all our assets have .webp counterparts)
  const isInternalAsset = src.startsWith('/assets/aistudio/');
  const webpSrc = isInternalAsset ? src.replace(/\.(jpg|jpeg|png)$/i, '.webp') : src;

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick();
    }
    if (enableLightbox) {
      e.stopPropagation();
      openLightbox({
        src,
        alt,
        title: title || alt,
        category,
      });
    }
  };

  return (
    <div
      onClick={enableLightbox ? handleClick : onClick}
      className={`relative overflow-hidden group ${
        enableLightbox ? 'cursor-zoom-in' : ''
      } ${aspectRatio} ${className}`}
      style={{
        width: width || undefined,
        height: height || undefined,
      }}
      title={enableLightbox ? `${alt} (Click to enlarge)` : alt}
    >
      {/* Soft Placeholder / Skeleton Shimmer - eliminates empty gaps while loading */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-100 via-slate-200/80 to-slate-100 animate-pulse z-0" />
      )}

      {/* Modern Picture Element with WebP Source & Fallback */}
      <picture className="w-full h-full block">
        {isInternalAsset && (
          <source srcSet={webpSrc} type="image/webp" />
        )}
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full transition-all duration-500 ease-out ${
            objectFit === 'cover'
              ? 'object-cover'
              : objectFit === 'contain'
              ? 'object-contain'
              : 'object-fill'
          } ${
            isLoaded
              ? 'opacity-100 blur-0 scale-100'
              : 'opacity-0 blur-xs scale-[0.99]'
          } ${imageClassName}`}
          style={{ objectPosition }}
        />
      </picture>

      {/* Subtle Zoom Badge on Hover when Lightbox is enabled */}
      {enableLightbox && isLoaded && (
        <div className="absolute bottom-3 right-3 bg-[#0D1722]/75 hover:bg-[#FDB913] text-white hover:text-[#0D1722] p-1.5 sm:p-2 rounded-full backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-md scale-90 group-hover:scale-100 pointer-events-none">
          <ZoomIn className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.2]" />
        </div>
      )}
    </div>
  );
};
