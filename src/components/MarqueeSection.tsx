import React, { useEffect, useRef, useState } from 'react';
import { MARQUEE_IMAGES } from '../data';

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      // Calculate section's absolute top in the document
      const sectionTop = window.scrollY + rect.top;
      // Formula specified by user
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setScrollOffset(offset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger once on layout load
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Split images list as requested
  const row1Src = MARQUEE_IMAGES.slice(0, 11);
  const row2Src = MARQUEE_IMAGES.slice(11, 21);

  // Triple arrays for seamless visual repetition
  const row1Images = [...row1Src, ...row1Src, ...row1Src];
  const row2Images = [...row2Src, ...row2Src, ...row2Src];

  // Translations
  const transRow1 = scrollOffset - 200;
  const transRow2 = -(scrollOffset - 200);

  return (
    <section
      ref={sectionRef}
      id="marquee"
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 w-full overflow-hidden select-none"
    >
      <div className="flex flex-col gap-3 w-full">
        
        {/* Row 1: Moves RIGHT on scroll */}
        <div className="w-full overflow-hidden flex">
          <div
            className="flex gap-3 flex-nowrap"
            style={{
              transform: `translateX(${transRow1}px)`,
              willChange: 'transform',
              transition: 'transform 0.1s ease-out'
            }}
          >
            {row1Images.map((src, i) => (
              <img
                key={`r1-${i}`}
                src={src}
                alt={`Marquee item R1-${i}`}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-[280px] h-[180px] sm:w-[350px] sm:h-[224px] md:w-[420px] md:h-[270px] rounded-2xl object-cover flex-shrink-0 bg-neutral-900 pointer-events-none"
              />
            ))}
          </div>
        </div>

        {/* Row 2: Moves LEFT on scroll */}
        <div className="w-full overflow-hidden flex">
          <div
            className="flex gap-3 flex-nowrap"
            style={{
              transform: `translateX(${transRow2}px)`,
              willChange: 'transform',
              transition: 'transform 0.1s ease-out'
            }}
          >
            {row2Images.map((src, i) => (
              <img
                key={`r2-${i}`}
                src={src}
                alt={`Marquee item R2-${i}`}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-[280px] h-[180px] sm:w-[350px] sm:h-[224px] md:w-[420px] md:h-[270px] rounded-2xl object-cover flex-shrink-0 bg-neutral-900 pointer-events-none"
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
