import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Language, ProjectItem } from '../types';
import { TRANSLATIONS, PROJECTS } from '../data';
import { LiveProjectButton } from './Reusable';

interface ProjectsSectionProps {
  language: Language;
  onProjectClick: (project: ProjectItem) => void;
}

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  totalCards: number;
  language: Language;
  onProjectClick: (project: ProjectItem) => void;
  progress: any;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  totalCards,
  language,
  onProjectClick,
  progress
}) => {
  // Stacking calculation specified by the user
  // Scale down card as we scroll past it based on parent scroll progress
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(progress, [index * 0.25, 1], [1, targetScale]);

  return (
    <div
      style={{
        position: 'sticky',
        top: '100px',
        zIndex: index + 1,
      }}
      className="w-full flex justify-center items-start h-[85vh] select-none"
    >
      <motion.div
        style={{
          scale,
        }}
        className="w-full max-w-5xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-6 sm:p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.9)] flex flex-col justify-between"
      >
        {/* Top Row Grid */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#D7E2EA]/15 pb-6 sm:pb-8 w-full">
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Huge index number (matches services) */}
            <div
              className="font-black text-[#D7E2EA] leading-none shrink-0"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 110px)' }}
            >
              {project.id}
            </div>
            
            {/* Project Details Stack */}
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-light uppercase tracking-widest text-[#D7E2EA]/50">
                {project.category[language]}
              </span>
              <h3 className="font-semibold uppercase text-lg sm:text-2xl md:text-3xl text-[#D7E2EA] tracking-tight">
                {project.name}
              </h3>
            </div>
          </div>

          {/* Action button */}
          <div className="shrink-0">
            <LiveProjectButton
              onClick={() => onProjectClick(project)}
              label={TRANSLATIONS[language].buttons.liveProject}
            />
          </div>
        </div>

        {/* Bottom Row Two-column Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 md:mt-10 w-full overflow-hidden">
          
          {/* Col 1 (40% width): 2 stacked images */}
          <div className="flex flex-col gap-4 sm:gap-6 w-full">
            <img
              src={project.col1Image1}
              alt={`${project.name} preview 1`}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border border-white/5 drop-shadow-[0_4px_10px_rgba(0,0,0,0.3)] transition-transform duration-500 hover:scale-[1.02]"
              style={{ height: 'clamp(110px, 16vw, 210px)' }}
            />
            <img
              src={project.col1Image2}
              alt={`${project.name} preview 2`}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border border-white/5 drop-shadow-[0_4px_10px_rgba(0,0,0,0.3)] transition-transform duration-500 hover:scale-[1.02]"
              style={{ height: 'clamp(140px, 22vw, 300px)' }}
            />
          </div>

          {/* Col 2 (60% width): 1 tall image */}
          <div className="w-full flex">
            <img
              src={project.col2Image}
              alt={`${project.name} final showcase`}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="w-full h-full min-h-[220px] md:min-h-[350px] object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border border-white/5 drop-shadow-[0_4px_10px_rgba(0,0,0,0.3)] transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>

        </div>

      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ language, onProjectClick }) => {
  const t = TRANSLATIONS[language];
  const sectionRef = useRef<HTMLDivElement>(null);

  // Track the scroll progress of the entire Projects section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end']
  });

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 relative z-10 w-full -mt-10 sm:-mt-12 md:-mt-14"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Section Heading */}
        <div className="w-full flex justify-center mb-16 sm:mb-20 md:mb-24">
          <h2
            className="hero-heading font-black uppercase text-center trailing-none leading-none"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            {t.projects.title}
          </h2>
        </div>

        {/* Stacked Sticky Cards Container */}
        <div className="relative w-full flex flex-col">
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              totalCards={PROJECTS.length}
              language={language}
              onProjectClick={onProjectClick}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
