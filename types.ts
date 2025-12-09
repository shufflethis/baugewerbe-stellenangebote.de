export interface JobListing {
  id: number;
  title: string;
  company: string;
  location: string;
  type: 'Vollzeit' | 'Teilzeit' | 'Projektbasis';
  salary?: string;
  postedAt: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface StatItem {
  label: string;
  value: string;
  description: string;
}

export enum PageRoute {
  HOME = '/',
  EMPLOYERS = '/arbeitgeber',
  EMPLOYEES = '/arbeitnehmer',
  IMPRESSUM = '/impressum',
  PRIVACY = '/datenschutz'
}