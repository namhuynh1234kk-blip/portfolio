import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';
import { FadeInProps, MagnetProps, AnimatedTextProps } from '../types';

/**
 * 1. ContactButton
 * Rounded-full pill button with premium gradient background, inner shadows, and white outline offset.
 */
export const ContactButton: React.FC<{ onClick?: () => void; label?: string }> = ({ onClick, label = "Contact Me" }) => {
  return (
    <button
      onClick={onClick}
      id="contact-btn"
      className="relative rounded-full font-medium uppercase tracking-widest text-[#D7E2EA] transition-all duration-300 active:scale-95 cursor-pointer select-none px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base"
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
        outline: '2px solid white',
        outlineOffset: '-3px'
      }}
    >
      {label}
    </button>
  );
};

/**
 * 2. LiveProjectButton
 * Ghost/outline pill button.
 */
export const LiveProjectButton: React.FC<{ onClick?: () => void; label?: string }> = ({ onClick, label = "Live Project" }) => {
  return (
    <button
      onClick={onClick}
      className="rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest transition-all duration-300 hover:bg-[#D7E2EA]/10 active:scale-95 px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base cursor-pointer"
    >
      {label}
    </button>
  );
};

/**
 * 3. FadeIn (Framer Motion wrapper)
 */
export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className = "",
  as = "div"
}) => {
  // Use motion.create for dynamic HTML elements
  const MotionComponent = motion.create(as);

  return (
    <MotionComponent
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{
        delay,
        duration,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      {children}
    </MotionComponent>
  );
};

/**
 * 4. Magnet Component
 * Mouse-following magnetic hover effect logic.
 */
export const Magnet: React.FC<MagnetProps> = ({
  children,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className = ""
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Active zone check based on element radius + padding
      const maxRadius = Math.max(rect.width, rect.height) / 2;
      if (distance < maxRadius + padding) {
        setIsHovered(true);
        setCoords({
          x: dx / strength,
          y: dy / strength
        });
      } else {
        setIsHovered(false);
        setCoords({ x: 0, y: 0 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [padding, strength]);

  return (
    <div
      ref={containerRef}
      className={`${className} cursor-pointer`}
      style={{
        transform: `translate3d(${coords.x}px, ${coords.y}px, 0)`,
        transition: isHovered ? activeTransition : inactiveTransition,
        willChange: 'transform'
      }}
    >
      {children}
    </div>
  );
};

/**
 * 5. Character helper for AnimatedText
 * Prevents dynamic React dynamic loop hook index issues.
 */
interface CharacterProps {
  char: string;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}

const Character: React.FC<CharacterProps> = ({ char, index, total, scrollYProgress }) => {
  // Map index cleanly to scroll trigger space [0.0 - 1.0]
  const start = index / total;
  const end = Math.min(1.0, start + 0.15);
  // Animates the overlay opacity elegantly
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);

  return (
    <span className="relative inline-block whitespace-pre">
      <span className="opacity-20">{char}</span>
      <motion.span style={{ opacity }} className="absolute left-0 top-0 text-[#D7E2EA] select-none">
        {char}
      </motion.span>
    </span>
  );
};

/**
 * 6. AnimatedText
 * Character-by-character scroll-reveal text animation.
 */
export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = "" }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2']
  });

  // Split string into characters
  const chars = text.split('');

  return (
    <p ref={containerRef} className={className}>
      {chars.map((char, index) => (
        <Character
          key={index}
          char={char}
          index={index}
          total={chars.length}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </p>
  );
};
