
export interface CaseStudy {
  id: string;
  /** case study headline shown on cards */
  title: string;
  /** app/product name (e.g. Forge, Mosaic) */
  appName: string;
  /** project type shown on cards (e.g. UX/UI) */
  category: string;
  image: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
  objectFit?: 'cover' | 'contain';
}

export type Theme = 'light' | 'dark';
