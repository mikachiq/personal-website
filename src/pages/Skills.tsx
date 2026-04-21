import { Atom, Code2, Database, Figma } from 'lucide-react';
import { SectionWrapper, AnimatedItem } from '../components/shared';

const featuredSkills = [
  { icon: Atom,     name: 'React',      description: 'Frontend UI, component architecture' },
  { icon: Code2,    name: 'HTML & CSS', description: 'Markup and styling fundamentals' },
  { icon: Database, name: 'Supabase',   description: 'Backend, auth, database queries' },
  { icon: Figma,    name: 'Figma',      description: 'UI design, prototyping, wireframing' },
];

const skillCategories = [
  {
    title: 'Also Technical',
    skills: ['TypeScript', 'Python', 'JavaScript', 'Java', 'Node.js', 'REST APIs', 'Godot', 'GDScript', 'SQL', 'Git', 'GitHub', 'Vercel'],
  },
  {
    title: 'AI & Tools',
    skills: ['Google AI Studio', 'NotebookLM', 'HeyGen', 'LLM API Integration', 'Prompt Engineering', 'LLMs', 'AI Code Assistants'],
  },
  {
    title: 'Design & Systems',
    skills: ['Systems Architecture', 'Database Schema', 'UI/UX Design', 'User Flow Mapping', 'Wireframing (Figma)', 'Mind Mapping', 'System Diagramming'],
  },
];

const Skills = () => (
  <SectionWrapper
    id="skills"
    className="pt-14 md:pt-20"
  >
    <AnimatedItem className="mb-10">
      <span className="text-label text-brand-muted tracking-wider mb-4 block">What I work with daily</span>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-3">
        {featuredSkills.map((skill) => {
          const Icon = skill.icon;
          return (
            <div
              key={skill.name}
              className="bg-brand-accent/8 border border-brand-accent/25 rounded-2xl p-5 flex flex-col gap-2"
            >
              <Icon className="w-5 h-5 text-brand-accent" />
              <span className="text-meta font-semibold text-brand-cream">{skill.name}</span>
              <span className="text-chip text-brand-gray/75">{skill.description}</span>
            </div>
          );
        })}
      </div>
    </AnimatedItem>

    <AnimatedItem>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
        {skillCategories.map((category) => (
          <div key={category.title} className="space-y-3">
            <span className="text-label text-brand-muted tracking-wider">{category.title}</span>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-chip px-3 py-1.5 rounded-lg border border-brand-accent/30 bg-brand-accent/12 text-brand-accent"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </AnimatedItem>
  </SectionWrapper>
);

export default Skills;
