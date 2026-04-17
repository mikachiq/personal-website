export type Section = 'home' | 'about' | 'education' | 'experience' | 'projects' | 'skills' | 'certifications';

export interface HomeProps {
  onNext: () => void;
  key?: string;
}
