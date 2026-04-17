import { Code2 } from 'lucide-react';
import { SectionWrapper, AnimatedItem } from '../components/shared';

const Projects = () => (
  <SectionWrapper id="projects">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <AnimatedItem className="aspect-[3/4] bg-brand-dark/30 rounded-3xl border border-white/5 flex items-center justify-center shadow-2xl">
        <Code2 className="w-24 h-24 text-brand-accent opacity-20" />
      </AnimatedItem>
      <AnimatedItem className="md:col-span-3 space-y-8">
        <div className="space-y-2">
          <h3 className="text-3xl font-bold leading-tight">
            EDUMATCH: A machine learning-based recommendation system for tertiary school selection
          </h3>
          <p className="italic text-lg opacity-60 font-medium">Capstone Project | Project Manager</p>
        </div>
        <div className="space-y-4 text-lg opacity-80 leading-relaxed">
          <p>
            • A machine learning-based recommendation system that suggests universities to users based on their location,
            budget, preferred course, available university facilities, and accreditation level. Built the AI model and
            datasets from scratch. Led internal team workflows and external processes.
          </p>
        </div>
      </AnimatedItem>
    </div>
  </SectionWrapper>
);

export default Projects;
