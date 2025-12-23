
export interface TechStack {
  name: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  tags: string[];
}

export interface Proficiency {
  label: string;
  percentage: number;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  challenges?: string[];
  responsibilities?: string[];
  role?: string;
  date?: string;
  teamSize?: number;
  category: 'Mobile' | 'Web' | 'UI Kit';
  image: string;
  tags: string[];
  demoUrl: string;
  sourceUrl: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  current?: boolean;
  tags: string[];
  icon: string;
}

export interface PortfolioData {
  hero: {
    name: string;
    role: string;
    description: string;
    techStack: TechStack[];
  };
  about: {
    title: string;
    subtitle: string;
    description: string;
    features: { title: string; desc: string; icon: string; color: string }[];
    stats: { label: string; value: string }[];
  };
  skills: {
    categories: SkillCategory[];
    proficiencies: Proficiency[];
    techAndLibraries: string[];
  };
  projects: Project[];
  experiences: Experience[];
  contact: {
    email: string;
    github: string;
    linkedin: string;
    phone: string;
  };
}
