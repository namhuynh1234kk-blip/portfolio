import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data';
import { FadeIn, Magnet, ContactButton } from './Reusable';
import { Globe } from 'lucide-react';

interface HeroSectionProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  onContactClick: (tab: 'profile' | 'contact') => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  language,
  setLanguage,
  onContactClick
}) => {
  const t = TRANSLATIONS[language];

  // Helper to scroll to section
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen min-h-[600px] w-full flex flex-col justify-between overflow-x-hidden bg-[#0C0C0C] select-none">
      
      {/* 1. Navbar */}
      <FadeIn delay={0} y={-20} duration={0.8} className="w-full z-20">
        <nav className="flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8 w-full max-w-7xl mx-auto">
          {/* Menu links */}
          <div className="flex items-center gap-3 sm:gap-6 md:gap-10">
            <button
              onClick={() => handleScroll('about')}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-lg lg:text-[1.4rem] transition-all duration-200 hover:opacity-70 cursor-pointer"
            >
              {t.navbar.about}
            </button>
            <button
              onClick={() => handleScroll('services')}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-lg lg:text-[1.4rem] transition-all duration-200 hover:opacity-70 cursor-pointer"
            >
              {t.navbar.price}
            </button>
            <button
              onClick={() => handleScroll('projects')}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-lg lg:text-[1.4rem] transition-all duration-200 hover:opacity-70 cursor-pointer"
            >
              {t.navbar.projects}
            </button>
            <button
              onClick={() => onContactClick('profile')}
              className="text-purple-400 font-bold uppercase tracking-wider text-xs sm:text-sm md:text-lg lg:text-[1.4rem] transition-all duration-200 hover:text-purple-300 cursor-pointer"
            >
              {language === 'EN' ? "PROFILE / RESUME" : "HỒ SƠ CÁ NHÂN"}
            </button>
            <button
              onClick={() => onContactClick('contact')}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-lg lg:text-[1.4rem] transition-all duration-200 hover:opacity-70 cursor-pointer"
            >
              {t.navbar.contact}
            </button>
          </div>

          {/* Elegant Language Switcher */}
          <div className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-[#D7E2EA]">
            <Globe className="w-3.5 h-3.5 text-white/50" />
            <button
              onClick={() => setLanguage('EN')}
              className={`text-xs font-semibold px-2 py-0.5 rounded-full cursor-pointer transition-all ${
                language === 'EN' ? 'bg-white text-[#0C0C0C]' : 'opacity-50 hover:opacity-85'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('VI')}
              className={`text-xs font-semibold px-2 py-0.5 rounded-full cursor-pointer transition-all ${
                language === 'VI' ? 'bg-white text-[#0C0C0C]' : 'opacity-50 hover:opacity-85'
              }`}
            >
              VI
            </button>
          </div>
        </nav>
      </FadeIn>

      {/* 2. Hero Heading Container */}
      <div className="flex-1 flex items-center justify-center relative w-full px-6">
        <div className="w-full max-w-7xl mx-auto flex items-center relative h-full">
          
          {/* Main Huge Heading */}
          <FadeIn delay={0.15} y={40} className="w-full z-0 select-none">
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none text-center sm:text-left whitespace-nowrap w-full text-[13.5vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5">
              Hi, i&apos;m Nam
            </h1>
          </FadeIn>

          {/* 4. Hero Portrait (Magnet overlay) */}
          <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[240px] sm:w-[320px] md:w-[400px] lg:w-[480px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto">
            <FadeIn delay={0.6} y={30}>
              <Magnet
                padding={150}
                strength={3}
                activeTransition="transform 0.3s ease-out"
                inactiveTransition="transform 0.6s ease-in-out"
              >
                <img
                  src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
                  alt="Nam Portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                />
              </Magnet>
            </FadeIn>
          </div>

        </div>
      </div>

      {/* 3. Bottom Bar */}
      <div className="w-full z-20 px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 sm:gap-4">
        {/* Left Subtitle */}
        <FadeIn delay={0.35} y={20} className="max-w-[160px] sm:max-w-[220px] md:max-w-[260px]">
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug" style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.25rem)' }}>
            {t.hero.subtitle}
          </p>
        </FadeIn>

        {/* Right Buttons Dynamic Column */}
        <FadeIn delay={0.5} y={20} className="flex-shrink-0 flex items-center gap-3 w-full sm:w-auto">
          <ContactButton
            onClick={() => onContactClick('profile')}
            label={language === 'EN' ? "VIEW RESUME" : "XEM HỒ SƠ"}
          />
          <button
            onClick={() => onContactClick('contact')}
            className="rounded-full border-2 border-[#D7E2EA]/20 hover:border-[#D7E2EA]/50 text-[#D7E2EA] font-semibold uppercase tracking-widest transition-all duration-300 hover:bg-white/5 active:scale-95 px-5 py-3 sm:px-8 sm:py-3.5 text-xs sm:text-xs cursor-pointer"
          >
            {t.buttons.contact}
          </button>
        </FadeIn>
      </div>

    </section>
  );
};
