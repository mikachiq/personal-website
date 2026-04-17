import { SectionWrapper, AnimatedItem } from '../components/shared';

const Skills = () => {
  const skillGroups = [
    {
      title: 'Technical Skills:',
      skills: ['HTML & CSS', 'Node.js', 'JavaScript', 'React', 'Python', 'Supabase', 'REST APIs'],
    },
    {
      title: 'AI Tools:',
      skills: ['Google AI Studio', 'NotebookLM', 'HeyGen', 'LLM API integration', 'Prompt Engineering', 'LLMs', 'AI Code assistants'],
    },
    {
      title: 'Soft and Evaluation Skills:',
      skills: [
        'Systems Architecture Design',
        'Database Schema Design',
        'UI/UX Design',
        'User Flow Mapping',
        'Wireframing (Figma)',
        'Mind Mapping (MindManager)',
        'System Diagramming (Lucidchart, Draw.io, Excalidraw)',
      ],
    },
  ];

  return (
    <SectionWrapper id="skills">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="space-y-12">
          {skillGroups.slice(0, 2).map((group, i) => (
            <div key={i} className="space-y-6">
              <AnimatedItem>
                <h3 className="text-4xl font-bold uppercase tracking-tight">{group.title}</h3>
              </AnimatedItem>
              <ul className="space-y-2">
                {group.skills.map((skill, j) => (
                  <AnimatedItem key={j} className="text-lg opacity-80 flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
                    {skill}
                  </AnimatedItem>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="space-y-6">
          <AnimatedItem>
            <h3 className="text-4xl font-bold uppercase tracking-tight">{skillGroups[2].title}</h3>
          </AnimatedItem>
          <ul className="space-y-2">
            {skillGroups[2].skills.map((skill, j) => (
              <AnimatedItem key={j} className="text-lg opacity-80 flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
                {skill}
              </AnimatedItem>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Skills;
