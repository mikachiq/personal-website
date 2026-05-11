export type Section = 'home' | 'about' | 'education' | 'experience' | 'projects' | 'skills' | 'certifications' | 'resume';

export interface HomeProps {
  onNext: () => void;
  onViewProjects: () => void;
  key?: string;
}
