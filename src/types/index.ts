export type ProjectCategory = 'all' | 'web' | 'ml';

export interface Project {
  id: string;
  title: string;
  category: 'web' | 'ml';
  shortDescription: string;
  fullDescription?: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
  // Specific ML project metadata
  mlDetails?: {
    problem: string;
    dataset: string;
    model: string;
    metric: string;
  };
}

export interface SkillGroup {
  category: string;
  skills: Array<{
    name: string;
    level?: string;
    icon?: string;
  }>;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  highlight?: boolean;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
}

export interface Profile {
  name: string;
  preferredName: string;
  role: string;
  tagline: string;
  location: string;
  university: string;
  degree: string;
  year: string;
  bio: string;
  email: string;
  whatsappUrl: string;
  linkedinUrl: string;
  githubUrl: string;
  cvPath: string;
  cvFileName: string;
  skillsSummary: string[];
}
