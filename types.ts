
export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
}

export type Theme = 'light' | 'dark';
