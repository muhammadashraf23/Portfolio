export interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveDemo: string;
  github: string;
  image: string;
}

export interface Skill {
  name: string;
  src: string;
}

export interface Experience {
  title: string;
  company: string;
  description: string;
}

export interface Education {
  degree?: string;
  certification?: string;
  institution?: string;
  provider?: string;
  year: string;
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
  portfolio: string;
}
