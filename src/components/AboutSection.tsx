import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data';
import { FadeIn, AnimatedText, ContactButton } from './Reusable';
import microchipImg from '../assets/images/microchip_cpu_1781065100601.png';
import ethernetImg from '../assets/images/ethernet_port_1781065131510.png';
import terminalImg from '../assets/images/terminal_window_1781065145020.png';
import serverImg from '../assets/images/server_module_1781065116543.png';

interface AboutSectionProps {
  language: Language;
  onContactClick: (tab: 'profile' | 'contact') => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ language, onContactClick }) => {
  const t = TRANSLATIONS[language];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    (e.currentTarget as HTMLElement).style.display = 'none';
  };

  return (
    <section id="about" className="relative min-h-screen w-full flex flex-col justify-center items-center py-20 px-5 sm:px-8 md:px-10 bg-[#0C0C0C] overflow-hidden select-none">
      
      {/* Absolute Decorative Tech Elements */}
      
      {/* 1. Top-Left: Gold CPU Microchip */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-10">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="pointer-events-none">
          <img
            src={microchipImg}
            alt="Gold Hardware Microchip CPU 3D"
            referrerPolicy="no-referrer"
            onError={handleImageError}
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain drop-shadow-[0_10px_30px_rgba(182,0,168,0.25)] animate-soft-float"
          />
        </FadeIn>
      </div>

      {/* 2. Bottom-Left: Teal RJ45 Fiber Optic Ethernet Connector */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-10">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="pointer-events-none">
          <img
            src={ethernetImg}
            alt="Ethernet RJ45 Connector glowing 3D"
            referrerPolicy="no-referrer"
            onError={handleImageError}
            className="w-[100px] sm:w-[140px] md:w-[180px] h-auto object-contain drop-shadow-[0_10px_30px_rgba(0,220,255,0.25)]"
          />
        </FadeIn>
      </div>

      {/* 3. Top-Right: Cyber Code Console Terminal */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-10">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="pointer-events-none">
          <img
            src={terminalImg}
            alt="Cyber Linter Software Terminal 3D"
            referrerPolicy="no-referrer"
            onError={handleImageError}
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain drop-shadow-[0_10px_30px_rgba(118,33,176,0.25)]"
          />
        </FadeIn>
      </div>

      {/* 4. Bottom-Right: Metallic Server Blade Storage Unit */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-10">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="pointer-events-none">
          <img
            src={serverImg}
            alt="Blade Server Module Node 3D"
            referrerPolicy="no-referrer"
            onError={handleImageError}
            className="w-[130px] sm:w-[170px] md:w-[220px] h-auto object-contain drop-shadow-[0_10px_30px_rgba(190,76,0,0.25)] animate-soft-float"
          />
        </FadeIn>
      </div>

      {/* Content layout */}
      <div className="max-w-3xl flex flex-col items-center justify-center text-center z-20">
        
        {/* Title */}
        <FadeIn delay={0} y={40} duration={0.8}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
            {t.about.title}
          </h2>
        </FadeIn>

        {/* Inner gaps specified: gap-10 sm:gap-14 md:gap-16 */}
        <div className="mt-10 sm:mt-14 md:mt-16 w-full px-4">
          <AnimatedText
            text={t.about.paragraph}
            className="text-[#D7E2EA] font-medium leading-relaxed max-w-[560px] mx-auto text-center"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' } as any}
          />
        </div>

        {/* Gap between text block and button: gap-16 sm:gap-20 md:gap-24 */}
        <div className="mt-16 sm:mt-20 md:mt-24">
          <FadeIn delay={0.2} y={25}>
            <ContactButton
              onClick={() => onContactClick('profile')}
              label={language === 'EN' ? "READ BIO & RESUME" : "HỒ SƠ CÁ NHÂN & KINH NGHIỆM"}
            />
          </FadeIn>
        </div>

      </div>

    </section>
  );
};
