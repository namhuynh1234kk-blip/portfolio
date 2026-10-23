import { ReactNode } from 'react';

export type Language = 'EN' | 'VI';

export interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  as?: any;
}

export interface MagnetProps {
  children: ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export interface AnimatedTextProps {
  text: string;
  className?: string;
}

export interface ServiceItem {
  id: string; // "01", "02", etc.
  name: {
    EN: string;
    VI: string;
  };
  description: {
    EN: string;
    VI: string;
  };
}

export interface ProjectItem {
  id: string; // "01", "02", etc.
  name: string;
  category: {
    EN: string;
    VI: string;
  };
  col1Image1: string;
  col1Image2: string;
  col2Image: string;
  link: string;
}

export interface TranslationDict {
  navbar: {
    about: string;
    price: string;
    projects: string;
    contact: string;
  };
  hero: {
    heading: string;
    subtitle: string;
  };
  about: {
    title: string;
    paragraph: string;
  };
  services: {
    title: string;
  };
  projects: {
    title: string;
  };
  buttons: {
    contact: string;
    liveProject: string;
  };
}
