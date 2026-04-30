import { Bot, Code2, Database, Workflow } from 'lucide-react';
import { SectionWrapper, AnimatedItem } from '../components/shared';

const featuredSkills = [
  { icon: Code2, name: 'React', description: 'Frontend apps, dashboards, and internal tools' },
  { icon: Database, name: 'Supabase', description: 'Database, auth, and full-stack integration' },
  { icon: Workflow, name: 'Systems Design', description: 'Architecture, flows, and technical planning' },
  { icon: Bot, name: 'AI Automation', description: 'LLMs, RAG, prompt design, and n8n workflows' },
];

const skillCategories = [
  {
    title: 'Technical Skills',
    skills: ['HTML & CSS', 'JavaScript', 'React', 'Python', 'Node.js', 'Supabase', 'Godot', 'GDScript', 'APIs', 'Git', 'Vercel'],
  },
  {
    title: 'Core Competencies',
    skills: [
      'System Architecture & Design',
      'Database Schema Design',
      'UI/UX Design',
      'User Flow Mapping',
      'Wireframing (Figma)',
      'Mind Mapping (MindManager)',
      'System Diagramming',
      'Project Management',
      'Data Annotation',
      'Team Collaboration',
      'SDLC',
      'Research',
    ],
  },
  {
    title: 'AI Tools & Literacy',
    skills: ['Google AI Studio', 'NotebookLM', 'HeyGen', 'RAG', 'Prompt Engineering', 'LLMs', 'AI Code Assistants', 'n8n', 'Gamma', 'AIGC', 'HIL'],
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
