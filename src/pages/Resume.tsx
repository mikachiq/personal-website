import { Mail, Phone, Github, Globe, Download } from 'lucide-react';
import { SectionWrapper, AnimatedItem } from '../components/shared';

const workExperience = [
  {
    title: 'Web Developer Intern · Lifewood Data Technology',
    period: 'Jan 2026 – May 2026 (540 hrs)',
    bullets: [
      'Designed system architecture, database structures, and user flows for internal tools',
      'Created websites and AI agents to support internal company operations',
      'Crawled and compiled datasets for AI development',
      'Researched AI tools (OpenClaws, LLMs) for internal integration and workflow optimization',
    ],
  },
  {
    title: 'Game Beta Tester / Reviewer · Railings University / PIF Nation',
    period: 'Jul 2022 – Sep 2022',
    bullets: [
      'Identified and reported bugs in pre-release games, improving user experience',
      'Collaborated with teams to suggest enhancements and ensure game quality',
    ],
  },
];

const education = [
  {
    school: 'University of Cebu, Lapu-Lapu and Mandaue',
    detail: 'Bachelor of Science in Information Technology',
    period: '2022 – Present',
  },
  {
    school: 'Saint Dominic Savio International School',
    detail: 'Elementary, Junior High School, and Senior High School',
    period: '2015 – 2022',
  },
];

const projects = [
  {
    name: 'EduMatch',
    type: 'Capstone Project',
    role: 'Project Manager, Systems Architect, and Frontend Developer',
    desc: 'A machine learning-based recommendation system that suggests universities to users based on location, budget, preferred course, facilities, and accreditation level. Built the AI model and datasets from scratch. Led internal team workflows and external processes.',
  },
  {
    name: 'MikaHub',
    type: 'Personal Project',
    role: 'UI Designer and Lead Developer',
    desc: 'A gaming portfolio for showcasing game builds and character data. Designed the user interface and maintain character/build information up-to-date with in-game progress.',
  },
  {
    name: 'AIRA',
    type: 'Company Internal System',
    role: 'Lead & Full Stack Developer, Systems Architect',
    desc: 'An AI agent for the HR department that streamlines the hiring process by scanning emails and displaying applicant information on the system dashboard. Integrated AI to retrieve and relay applicant status on command.',
  },
  {
    name: 'Lifewood Website Imitation',
    type: 'Internship Project',
    role: 'Full Stack Developer',
    desc: 'Replicated the company website while adding new features and interactions for both user and admin. Built with a functional frontend and backend.',
  },
  {
    name: 'Malunggay Pandezzel',
    type: 'Game Dev',
    role: 'Game Designer and Lead Developer',
    desc: 'A retro-inspired 3D horror-comedy FPS built in Godot. Designed the map layout, asset placement, and game logic through scripting and integrating imported assets. Focused on FPS mechanics and map exploration.',
  },
];

const skillSections = [
  {
    label: 'Technical',
    items: ['HTML & CSS', 'JavaScript', 'React', 'Python', 'Supabase', 'Node.js', 'REST APIs', 'Godot', 'Git', 'Vercel'],
  },
  {
    label: 'Soft & Evaluation',
    items: ['Systems Architecture', 'DB Schema Design', 'UI/UX Design', 'User Flow Mapping', 'Wireframing (Figma)', 'Mind Mapping', 'Project Management', 'Data Annotation', 'API Route Planning', 'SDLC', 'Research'],
  },
  {
    label: 'AI Tools',
    items: ['Google AI Studio', 'NotebookLM', 'HeyGen', 'LLM API Integration', 'Prompt Engineering', 'LLMs', 'AI Code Assistants', 'n8n', 'Gamma'],
  },
];

const Resume = () => (
  <SectionWrapper id="resume" className="pt-16 md:pt-24">
    <AnimatedItem>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 items-start">

        {/* LEFT: Resume document */}
        <div className="glass-card p-6 sm:p-8 space-y-8">

          {/* Header */}
          <div className="pb-6 border-b border-white/10">
            <h1 className="text-card-title text-brand-cream">ATILLA HADRIAN C. CASTRODES</h1>
            <p className="text-chip text-brand-muted mt-1">
              Systems Architect · AI & Automation Practitioner · BS Information Technology (2026)
            </p>
          </div>

          {/* Work Experience */}
          <section className="space-y-4">
            <p className="text-label text-brand-muted tracking-wider">Relevant Work Experience</p>
            <div className="space-y-5">
              {workExperience.map((job, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-start justify-between gap-3 flex-wrap">
                    <p className="text-body-sm font-bold text-brand-cream">{job.title}</p>
                    <p className="text-chip text-brand-muted shrink-0">{job.period}</p>
                  </div>
                  <ul className="space-y-1">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="text-chip text-brand-gray/80 flex items-start gap-2">
                        <span className="text-brand-accent mt-0.5 shrink-0">•</span>{b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="space-y-3">
            <p className="text-label text-brand-muted tracking-wider">Education</p>
            <div className="space-y-3">
              {education.map((edu, i) => (
                <div key={i} className="flex items-start justify-between gap-3 flex-wrap">
                  <div>
                    <p className="text-body-sm font-bold text-brand-cream">{edu.school}</p>
                    <p className="text-chip text-brand-gray/70">{edu.detail}</p>
                  </div>
                  <p className="text-chip text-brand-muted shrink-0">{edu.period}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section className="space-y-3">
            <p className="text-label text-brand-muted tracking-wider">Projects</p>
            <div className="space-y-4">
              {projects.map((project, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="text-body-sm font-bold text-brand-cream">{project.name}</p>
                    <span className="text-chip px-2 py-0.5 rounded-full border border-brand-accent/30 bg-brand-accent/12 text-brand-accent">
                      {project.type}
                    </span>
                  </div>
                  <p className="text-chip text-brand-muted">Role: {project.role}</p>
                  <p className="text-chip text-brand-gray/75">{project.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section className="space-y-4">
            <p className="text-label text-brand-muted tracking-wider">Skills</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {skillSections.map((section) => (
                <div key={section.label} className="space-y-2">
                  <p className="text-chip font-semibold text-brand-cream">{section.label}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {section.items.map((s) => (
                      <span key={s} className="text-chip px-2 py-0.5 rounded-full border border-brand-accent/30 bg-brand-accent/12 text-brand-accent">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* RIGHT: Contact + meta */}
        <div className="space-y-4 lg:sticky lg:top-32">
          <div className="glass-card p-5 space-y-5">
            <span className="text-chip px-2.5 py-1 rounded-full border border-brand-accent/30 bg-brand-accent/12 text-brand-accent inline-block">
              Updated as of April 2026
            </span>

            <div className="space-y-1">
              <p className="text-label text-brand-muted tracking-wider">Contact</p>
            </div>

            <div className="space-y-3">
              <a
                href="mailto:atillahadrianc@gmail.com"
                className="flex items-center gap-3 text-brand-gray/80 hover:text-brand-cream transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-accent shrink-0" />
                <span className="text-chip break-all">atillahadrianc@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-brand-gray/80">
                <Phone className="w-4 h-4 text-brand-accent shrink-0" />
                <span className="text-chip">09560396527</span>
              </div>
              <a
                href="https://github.com/mikachiq"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-brand-gray/80 hover:text-brand-cream transition-colors"
              >
                <Github className="w-4 h-4 text-brand-accent shrink-0" />
                <span className="text-chip">mikachiq</span>
              </a>
              <a
                href="https://castrodesdev.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-brand-gray/80 hover:text-brand-cream transition-colors"
              >
                <Globe className="w-4 h-4 text-brand-accent shrink-0" />
                <span className="text-chip">castrodesdev.vercel.app</span>
              </a>
            </div>
          </div>

          <a
            href="/castrodes_resume.pdf"
            download
            className="glass-card p-4 flex items-center justify-center gap-2 text-action text-brand-accent hover:border-brand-accent/40 transition-colors w-full"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </a>
        </div>

      </div>
    </AnimatedItem>
  </SectionWrapper>
);

export default Resume;
