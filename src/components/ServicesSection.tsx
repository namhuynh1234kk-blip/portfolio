import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS, SERVICES } from '../data';
import { FadeIn } from './Reusable';

interface ServicesSectionProps {
  language: Language;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ language }) => {
  const t = TRANSLATIONS[language];

  return (
    <section
      id="services"
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10 w-full overflow-hidden select-none"
    >
      <div className="max-w-5xl mx-auto w-full">
        
        {/* Heading */}
        <h2 className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
          {t.services.title}
        </h2>

        {/* Services List */}
        <div className="flex flex-col border-t border-[#0C0C0C]/15">
          {SERVICES.map((item, i) => (
            <FadeIn
              key={item.id}
              delay={i * 0.1}
              y={30}
              className="flex items-center gap-6 sm:gap-10 md:gap-16 py-8 sm:py-10 md:py-12 border-b border-[#0C0C0C]/15 w-full flex-col sm:flex-row text-center sm:text-left"
            >
              
              {/* Number (Left) */}
              <div
                className="font-black text-[#0C0C0C] leading-none shrink-0"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {item.id}
              </div>

              {/* Content (Right Stack) */}
              <div className="flex-1 flex flex-col items-center sm:items-start">
                
                {/* Header block with Name */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                  <h3
                    className="font-semibold text-[#0C0C0C] uppercase tracking-tight"
                    style={{ fontSize: 'clamp(1.2rem, 2.2vw, 2.1rem)' }}
                  >
                    {item.name[language]}
                  </h3>
                </div>

                {/* Description */}
                <p
                  className="font-light leading-relaxed text-[#0C0C0C] opacity-75 max-w-2xl text-center sm:text-left"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {item.description[language]}
                </p>

              </div>

            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};
