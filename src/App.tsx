import { useState, useEffect } from 'react';
import { Language, ProjectItem } from './types';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { Popups } from './components/Popups';
import { ArrowUp, Instagram, Twitter, MessageSquare, Mail, Award, Layers } from 'lucide-react';

export default function App() {
  const [language, setLanguage] = useState<Language>('EN');
  const [showContact, setShowContact] = useState(false);
  const [initialPopupTab, setInitialPopupTab] = useState<'profile' | 'contact'>('profile');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll positioning to display the "Back to Top" float check
  useEffect(() => {
    const checkScrollProgress = () => {
      if (window.scrollY > window.innerHeight) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', checkScrollProgress, { passive: true });
    return () => window.removeEventListener('scroll', checkScrollProgress);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProjectClick = (project: ProjectItem) => {
    setActiveProject(project);
  };

  const openContactPopup = (tab: 'profile' | 'contact' = 'profile') => {
    setInitialPopupTab(tab);
    setShowContact(true);
  };

  return (
    <div className="main-wrapper relative min-h-screen">
      
      {/* Decorative Immersive Ambient Glow Circles */}
      <div className="absolute top-[15%] left-[10%] w-[50vw] h-[50vw] rounded-full ambient-glow-1 pointer-events-none z-0" />
      <div className="absolute top-[50%] right-[5%] w-[45vw] h-[45vw] rounded-full ambient-glow-2 pointer-events-none z-0" />
      <div className="absolute bottom-[20%] left-[8%] w-[40vw] h-[40vw] rounded-full ambient-glow-3 pointer-events-none z-0" />

      {/* 1. Hero Section */}
      <HeroSection
        language={language}
        setLanguage={setLanguage}
        onContactClick={openContactPopup}
      />

      {/* 2. Marquee Section */}
      <MarqueeSection />

      {/* 3. About Section */}
      <AboutSection
        language={language}
        onContactClick={openContactPopup}
      />

      {/* 4. Services Section */}
      <ServicesSection language={language} />

      {/* 5. Projects Section */}
      <ProjectsSection
        language={language}
        onProjectClick={handleProjectClick}
      />

      {/* Footer Element */}
      <footer className="bg-[#0C0C0C] pt-24 pb-12 px-6 border-t border-white/5 relative z-10 w-full select-none">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Logo Brand Indicator */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <Layers className="w-4 h-4 text-purple-400" />
              </div>
              <span className="font-bold text-white tracking-widest text-lg uppercase">NAM</span>
            </div>
            <p className="text-xs text-[#D7E2EA]/40 uppercase tracking-widest leading-relaxed">
              {language === 'EN'
                ? "IT Hardware Specialist & Full-Stack Developer."
                : "Chuyên Gia Phần Cứng  & Nhà Phát Triển Full-Stack."}
            </p>
          </div>

          {/* Social connections */}
          <div className="flex items-center gap-6 text-[#D7E2EA]/60">
            <a
              href="mailto:nam.hardware.dev@portfolio.net"
              className="hover:text-white transition-colors duration-200"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                setShowContact(true);
              }}
              className="hover:text-white transition-colors duration-200"
              aria-label="Message"
            >
              <MessageSquare className="w-5 h-5" />
            </a>
          </div>

        </div>

        {/* Legal block */}
        <div className="max-w-5xl mx-auto border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D7E2EA]/30">
          <p className="uppercase tracking-widest">
            {language === 'EN'
              ? "© 2026 Nam -- IT Hardware & Developer. All rights reserved."
              : "© 2026 Nam -- Kỹ sư Phần cứng & Phát triển Web. Bảo lưu mọi quyền."}
          </p>
          <div className="flex items-center gap-1.5 uppercase tracking-wider text-[10px]">
            <Award className="w-3.5 h-3.5 text-white/30" />
            <span>{language === 'EN' ? "Crafted Premium Portfolio" : "Thiết Kế Hồ Sơ Cao Cấp"}</span>
          </div>
        </div>
      </footer>

      {/* Floating back-to-top locator tool */}
      <button
        onClick={handleScrollToTop}
        className={`fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#18181A] border border-white/10 text-white/80 hover:text-white hover:border-white/30 shadow-2xl transition-all duration-300 transform cursor-pointer active:scale-90 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Back to Top"
      >
        <ArrowUp className="w-5 h-5 animate-pulse" />
      </button>

      {/* Popups & Dialog Managers */}
      <Popups
        language={language}
        showContact={showContact}
        initialTab={initialPopupTab}
        onCloseContact={() => setShowContact(false)}
        activeProject={activeProject}
        onCloseProject={() => setActiveProject(null)}
      />

    </div>
  );
}
