import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, type Variants } from 'motion/react';

// ============================================================================
// 1. WORD-BY-WORD ANIMATION
// Smoothly animates words into view sequentially with subtle blur & lift.
// ============================================================================
export interface WordByWordProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  highlightWords?: string[];
  highlightClassName?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  once?: boolean;
}

export const WordByWordText: React.FC<WordByWordProps> = ({
  text,
  className = '',
  as: Component = 'div',
  highlightWords = [],
  highlightClassName = 'text-[#FDB913]',
  delay = 0.1,
  stagger = 0.045,
  duration = 0.42,
  once = true,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: '-20px' });

  // Normalise words for matching highlights (case-insensitive clean match)
  const isHighlighted = (word: string) => {
    const clean = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return highlightWords.some(
      (h) => h.replace(/[^a-zA-Z0-9]/g, '').toLowerCase() === clean
    );
  };

  const words = text.split(' ').filter(Boolean);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 14,
      filter: 'blur(4px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration,
        ease: [0.22, 1, 0.36, 1] as const, // Gentle spring curve
      },
    },
  };

  const MotionComponent = motion[Component as keyof typeof motion] as typeof motion.div;

  return (
    <MotionComponent
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={`inline-block ${className}`}
      aria-label={text}
    >
      {words.map((word, idx) => {
        const highlighted = isHighlighted(word);
        return (
          <motion.span
            key={`${word}-${idx}`}
            variants={wordVariants}
            className={`inline-block mr-[0.28em] ${
              highlighted ? highlightClassName : ''
            }`}
          >
            {word}
          </motion.span>
        );
      })}
    </MotionComponent>
  );
};

// ============================================================================
// 2. STAGGERED TEXT REVEAL
// Elegant editorial staggered line or phrase reveal. Smoothly reveals
// phrases or lines with gentle easing and slight vertical translation.
// ============================================================================
export interface StaggeredRevealProps {
  lines?: string[];
  text?: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  highlightIndexes?: number[];
  highlightClassName?: string;
  lineClassNames?: string[];
  displayMode?: 'inline' | 'block';
  delay?: number;
  stagger?: number;
  duration?: number;
  once?: boolean;
}

export const StaggeredRevealText: React.FC<StaggeredRevealProps> = ({
  lines,
  text,
  className = '',
  as: Component = 'div',
  highlightIndexes = [],
  highlightClassName = 'text-[#FDB913]',
  lineClassNames = [],
  displayMode = 'inline',
  delay = 0.12,
  stagger = 0.08,
  duration = 0.55,
  once = true,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: '-20px' });

  // Use provided lines or split text by punctuation/phrases
  const items = lines && lines.length > 0 ? lines : (text ? text.split('. ').map((s, i, a) => i < a.length - 1 ? s + '.' : s) : []);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const lineVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 18,
      filter: 'blur(5px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration,
        ease: [0.16, 1, 0.3, 1] as const, // Smooth deceleration curve
      },
    },
  };

  const MotionComponent = motion[Component as keyof typeof motion] as typeof motion.div;

  return (
    <MotionComponent
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
      aria-label={lines ? lines.join(' ') : text}
    >
      {items.map((item, idx) => {
        const customLineClass = lineClassNames[idx] || '';
        const isHighlight = highlightIndexes.includes(idx);
        return (
          <span
            key={`${item}-${idx}`}
            className={`${displayMode === 'block' ? 'block' : 'inline-block'} overflow-hidden ${
              displayMode === 'inline' ? 'mr-[0.25em]' : 'mb-1'
            }`}
          >
            <motion.span
              variants={lineVariants}
              className={`${displayMode === 'block' ? 'block' : 'inline-block'} ${
                isHighlight ? highlightClassName : ''
              } ${customLineClass}`}
            >
              {item}
            </motion.span>
          </span>
        );
      })}
    </MotionComponent>
  );
};

// ============================================================================
// 3. SCRAMBLE TEXT ANIMATION
// Editorial character decryption effect. Rapidly resolves into the target
// letters with randomized glyphs. Controlled duration ("not too much").
// ============================================================================
const SCRAMBLE_GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#%&*';

export interface ScrambleTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  triggerKey?: string | number;
  durationMs?: number;
  speedMs?: number;
  delayMs?: number;
  revealOrder?: 'left-to-right' | 'random';
  once?: boolean;
}

export const ScrambleText: React.FC<ScrambleTextProps> = ({
  text,
  className = '',
  as: Component = 'span',
  triggerKey,
  durationMs = 520, // Crisp ~0.5s duration - not overdone
  speedMs = 28,     // Smooth 28ms tick
  delayMs = 80,
  revealOrder = 'left-to-right',
  once = true,
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    // If once is enabled and we already animated for this trigger, show final text
    if (once && hasAnimatedRef.current && triggerKey === undefined) {
      setDisplayText(text);
      return;
    }

    let timeoutId: ReturnType<typeof setTimeout>;
    let intervalId: ReturnType<typeof setInterval>;
    let frame = 0;
    const totalFrames = Math.max(1, Math.floor(durationMs / speedMs));

    timeoutId = setTimeout(() => {
      setIsScrambling(true);
      intervalId = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;

        const resolvedCount =
          revealOrder === 'left-to-right'
            ? Math.floor(progress * text.length)
            : 0;

        const next = text
          .split('')
          .map((char, index) => {
            // Keep spaces, commas, punctuation clean
            if (char === ' ' || char === '\n' || char === '.' || char === ',' || char === '-' || char === ':') {
              return char;
            }

            if (revealOrder === 'left-to-right') {
              if (index < resolvedCount) {
                return text[index];
              }
            } else {
              if (Math.random() < progress) {
                return text[index];
              }
            }

            // Pick a random glyph
            return SCRAMBLE_GLYPHS[Math.floor(Math.random() * SCRAMBLE_GLYPHS.length)];
          })
          .join('');

        setDisplayText(next);

        if (frame >= totalFrames) {
          clearInterval(intervalId);
          setDisplayText(text);
          setIsScrambling(false);
          hasAnimatedRef.current = true;
        }
      }, speedMs);
    }, delayMs);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, triggerKey, durationMs, speedMs, delayMs, revealOrder, once]);

  return (
    <Component
      ref={containerRef as any}
      className={`inline-block tracking-normal transition-colors ${className}`}
      aria-label={text}
      data-scrambling={isScrambling}
    >
      {displayText}
    </Component>
  );
};
