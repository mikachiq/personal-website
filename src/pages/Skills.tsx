import { SectionWrapper, AnimatedItem } from '../components/shared';

type SkillItem = {
  label: string;
  icon?: string;
  invertOnLight?: boolean;
  wideIcon?: boolean;
  cropIcon?: 'openai' | 'deepseek';
};

const skillGroups = [
  {
    title: 'Frontend',
    description: 'Interfaces, dashboards, and prototypes.',
    skills: [
    { label: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { label: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { label: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { label: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { label: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { label: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { label: 'Framer', icon: '/assets/icons/framer.svg' },
    { label: 'Lovable', icon: '/assets/icons/lovable.svg' },
    ],
  },
  {
    title: 'Backend & Data',
    description: 'APIs, data, version control, and deployment.',
    skills: [
      { label: 'Supabase', icon: 'https://cdn.simpleicons.org/supabase/3ECF8E' },
      { label: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { label: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { label: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { label: 'Vercel', icon: 'https://cdn.simpleicons.org/vercel/FFFFFF', invertOnLight: true },
      { label: 'APIs', icon: '/assets/icons/api.svg' },
    ],
  },
  {
    title: 'AI tools and literacy',
    description: 'AI tools for research, coding, and workflows.',
    skills: [
      { label: 'n8n', icon: 'https://cdn.simpleicons.org/n8n/EA4B71' },
      { label: 'Google AI Studio', icon: 'https://cdn.simpleicons.org/google/4285F4' },
      { label: 'NotebookLM', icon: 'https://cdn.simpleicons.org/notebooklm/FFFFFF', invertOnLight: true },
      { label: 'Claude / Claude code', icon: 'https://cdn.simpleicons.org/claude/D97757' },
      { label: 'ChatGPT / Codex', icon: '/assets/icons/openai.svg', cropIcon: 'openai' },
      { label: 'DeepSeek', icon: '/assets/icons/deepseek.svg', cropIcon: 'deepseek' },
      { label: 'OpenRouter', icon: 'https://cdn.simpleicons.org/openrouter/FFFFFF', invertOnLight: true },
      { label: 'Blackbox', icon: '/assets/icons/blackbox.ico' },
      { label: 'HeyGen', icon: 'https://cdn.sanity.io/images/pdhqcmb1/production/83db2519472125eff4a047b07de4d49eb4d5f880-132x132.svg?auto=format&fit=max' },
      { label: 'Gamma', icon: 'https://support.gamma.io/hc/article_attachments/12729503351571' },
    ],
  },
  {
    title: 'Game Development',
    description: 'Engines, 3D assets, animation, and prototyping.',
    skills: [
      { label: 'Sketchfab', icon: 'https://cdn.simpleicons.org/sketchfab/1CAAD9' },
      { label: 'Trellis3D', icon: '/assets/icons/trellis3d.ico' },
      { label: 'Meshy.ai', icon: '/assets/icons/meshy.ico' },
      { label: 'Blender', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg' },
      { label: 'Godot / GDScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg' },
      { label: 'Mixamo', icon: '/assets/icons/mixamo.ico' },
      { label: 'Blockbench', icon: 'https://cdn.simpleicons.org/blockbench/1E93D9' },
    ],
  },
  {
    title: 'Productivity & Creative Tools',
    description: 'Docs, reports, diagrams, decks, and editing.',
    skills: [
      { label: 'Google Sheets', icon: 'https://cdn.simpleicons.org/googlesheets/34A853' },
      { label: 'Google Docs', icon: 'https://cdn.simpleicons.org/googledocs/4285F4' },
      { label: 'Looker Studio', icon: 'https://cdn.simpleicons.org/looker/4285F4' },
      { label: 'Canva', icon: '/assets/icons/canva.ico' },
      { label: 'PowerPoint', icon: '/assets/icons/powerpoint.svg' },
      { label: 'CapCut', icon: '/assets/icons/capcut.svg' },
      { label: 'Lucidchart', icon: '/assets/icons/lucidchart.ico' },
      { label: 'Excalidraw', icon: 'https://cdn.simpleicons.org/excalidraw/6965DB' },
      { label: 'MindManager', icon: '/assets/icons/mindmanager.ico' },
      { label: 'Draw.io', icon: 'https://cdn.simpleicons.org/diagramsdotnet/F08705' },
    ],
  },
  {
    title: 'Competencies',
    description: 'Planning, research, systems, and collaboration.',
    skills: [
      { label: 'UI/UX Design' },
      { label: 'User Flow Mapping' },
      { label: 'System Architecture & Design' },
      { label: 'System Diagramming' },
      { label: 'Project Management' },
      { label: 'SDLC' },
      { label: 'Team Collaboration' },
      { label: 'Research' },
      { label: 'Data Annotation' },
      { label: 'LLMs' },
      { label: 'RAG' },
      { label: 'Prompt Engineering' },
      { label: 'AIGC' },
      { label: 'HIL' },
      { label: 'AI Code Assistants' },
    ],
  },
] satisfies { title: string; description: string; skills: SkillItem[] }[];

const skillFlowDuration = '48s';

const SkillToken = ({ skill, focusable = true }: { skill: SkillItem; focusable?: boolean }) => (
  <span
    className={skill.icon ? 'skill-flow-token skill-flow-token-icon' : 'skill-flow-token'}
    aria-label={skill.icon ? skill.label : undefined}
    tabIndex={skill.icon && focusable ? 0 : undefined}
  >
    {skill.icon ? (
      <>
        <span className={skill.cropIcon ? `skill-flow-icon-crop skill-flow-icon-crop-${skill.cropIcon}` : undefined}>
          <img
            src={skill.icon}
            alt=""
            className={`skill-flow-icon ${skill.wideIcon ? 'skill-flow-icon-wide' : ''} ${skill.cropIcon ? 'skill-flow-icon-mark-source' : ''} ${skill.invertOnLight ? 'skill-flow-icon-invert' : ''}`}
            loading="lazy"
            decoding="async"
          />
        </span>
        <span className="skill-flow-tooltip" aria-hidden="true">{skill.label}</span>
        <span className="sr-only">{skill.label}</span>
      </>
    ) : (
      skill.label
    )}
  </span>
);

const Skills = () => (
  <SectionWrapper
    id="skills"
    className="pt-14 md:pt-20"
  >
    <AnimatedItem>
      <div className="skill-flow-menu">
        {skillGroups.map((group, index) => (
          <div key={group.title}>
            {index === 4 ? (
              <div className="skill-flow-divider" aria-label="Additional skills">
                <span>Also good with:</span>
              </div>
            ) : null}
            <div className={`skill-flow-row ${index === 0 ? 'skill-flow-row-first' : ''} ${index >= 4 ? 'skill-flow-row-supporting' : ''}`}>
              <div className="skill-flow-copy">
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </div>
              <div className="skill-flow-track" aria-label={`${group.title} skills`}>
                <div
                  className="skill-flow-strip"
                  style={{
                    animationDirection: index % 2 === 0 ? 'normal' : 'reverse',
                    animationDuration: skillFlowDuration,
                  }}
                >
                  {[0, 1, 2, 3].map((setIndex) => (
                    <div className="skill-flow-set" aria-hidden={setIndex > 0} key={`${group.title}-${setIndex}`}>
                      {group.skills.map((skill) => (
                        <SkillToken
                          key={`${group.title}-${setIndex}-${skill.label}`}
                          skill={skill}
                          focusable={setIndex === 0}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AnimatedItem>
  </SectionWrapper>
);

export default Skills;
