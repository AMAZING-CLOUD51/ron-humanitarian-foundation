import React, { useState, useEffect, useRef } from 'react';

interface CountUpNumberProps {
  target: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export const CountUpNumber: React.FC<CountUpNumberProps> = ({
  target,
  suffix = '',
  duration = 2000,
  className = '',
}) => {
  const [current, setCurrent] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const animatingRef = useRef(false);

  const startAnimation = () => {
    if (animatingRef.current) return;
    animatingRef.current = true;
    setCurrent(0);

    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Easing out cubic: 1 - Math.pow(1 - progress, 3)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const val = Math.floor(easeOut * target);

      setCurrent(val);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCurrent(target);
        animatingRef.current = false;
      }
    };

    requestAnimationFrame(step);
  };

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    // Trigger on initial page load
    startAnimation();

    // Trigger again each time scrolled into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startAnimation();
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={elementRef} className={`tabular-nums ${className}`}>
      {current.toLocaleString()}
      {suffix}
    </span>
  );
};
