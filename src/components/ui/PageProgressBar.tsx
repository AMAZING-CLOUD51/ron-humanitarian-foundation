import React, { useEffect, useState } from 'react';

interface PageProgressBarProps {
  isNavigating: boolean;
}

export const PageProgressBar: React.FC<PageProgressBarProps> = ({ isNavigating }) => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let t1: ReturnType<typeof setTimeout>;
    let t2: ReturnType<typeof setTimeout>;
    let t3: ReturnType<typeof setTimeout>;

    if (isNavigating) {
      setVisible(true);
      setProgress(15);

      t1 = setTimeout(() => {
        setProgress(70);
      }, 70);

      t2 = setTimeout(() => {
        setProgress(88);
      }, 180);
    } else if (visible) {
      setProgress(100);
      t3 = setTimeout(() => {
        setVisible(false);
        setProgress(0);
      }, 250);
    }

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [isNavigating, visible]);

  if (!visible && progress === 0) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[3px] z-[99999] pointer-events-none transition-opacity duration-300"
      style={{ opacity: visible ? 1 : 0 }}
      aria-hidden="true"
    >
      <div
        className="h-full bg-gradient-to-r from-[#FDB913] via-[#F59E0B] to-[#FDB913] shadow-[0_0_12px_rgba(253,185,19,0.7)] transition-all duration-300 ease-out"
        style={{
          width: `${progress}%`,
        }}
      />
      {/* Glowing tip */}
      {visible && (
        <div
          className="absolute top-0 h-[3px] w-8 bg-white/80 blur-[2px] transition-all duration-300 ease-out"
          style={{
            left: `calc(${progress}% - 32px)`,
          }}
        />
      )}
    </div>
  );
};
