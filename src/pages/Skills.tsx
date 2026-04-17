import { Code2, Bot, Layers } from 'lucide-react';
import { SectionWrapper, AnimatedItem } from '../components/shared';

const skillGroups = [
  {
    title: 'Technical',
    icon: Code2,
    skills: ['HTML & CSS', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'Supabase', 'REST APIs'],
  },
  {
    title: 'AI & Tools',
    icon: Bot,
    skills: ['Google AI Studio', 'NotebookLM', 'HeyGen', 'LLM API Integration', 'Prompt Engineering', 'LLMs', 'AI Code Assistants'],
  },
  {
    title: 'Design & Systems',
    icon: Layers,
    skills: ['Systems Architecture', 'Database Schema', 'UI/UX Design', 'User Flow Mapping', 'Wireframing (Figma)', 'Mind Mapping', 'System Diagramming'],
  },
];

const Skills = () => (
    <SectionWrapper id="skills">
      <AnimatedItem>
      <h2 className="text-section-title mb-8 text-brand-cream">Skills</h2>
      </AnimatedItem>
    <AnimatedItem>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skillGroups.map((group, i) => {
          const Icon = group.icon;
          return (
            <div
              key={i}
              className={`bg-brand-dark/30 border border-white/10 rounded-2xl p-5 space-y-4 ${
                i === skillGroups.length - 1 ? 'md:col-span-1' : ''
              }`}
            >
              <div className="flex items-center gap-2">
                <Icon className="w-4 h-4 text-brand-accent" />
                <span className="text-label text-brand-muted">{group.title}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="text-chip px-3 py-1.5 rounded-lg border border-brand-accent/30 bg-brand-accent/12 text-brand-accent"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </AnimatedItem>
  </SectionWrapper>
);

export default Skills;
