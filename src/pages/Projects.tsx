import { useState } from 'react';
import { ExternalLink, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import type { ReactNode } from 'react';
import { SectionWrapper, AnimatedItem } from '../components/shared';

type Project = {
  title: string;
  role: string;
  type: string;
  ongoing?: boolean;
  stack: string[];
  highlights: string[];
  description: ReactNode;
  visitSite?: string;
};

const projects: Project[] = [
  {
    title: 'MikaHub',
    role: 'Solo Developer & Designer',
    type: 'Personal Project',
    ongoing: true,
    stack: ['React', 'HTML & CSS', 'Figma'],
    highlights: [
      'Personal gaming portfolio',
      'Per-game builds & loadouts',
      'Gameplay highlights & clips',
      'Stats tracking',
      'Part showcase, part journal',
    ],
    description: "MikaHub is my personal gaming portfolio — a space to compile the builds, clips, and stats that usually live scattered across screenshots and Discord messages. Each game gets its own corner: character builds with full loadouts and commentary, gameplay highlights pulled from sessions that actually felt good, and stats tracking what I'm grinding right now. Part showcase, part journal, part excuse to keep playing.",
  },
  {
    title: 'EDUMATCH: A Machine Learning-Based Recommendation System for Tertiary School Selection',
    role: 'Project Manager | Systems Architect and Designer',
    type: 'Capstone Project',
    stack: ['TypeScript', 'C#', 'Python', 'React', 'PostgreSQL', 'Docker', 'External APIs', 'Random Forest'],
    highlights: [
      'Random Forest model',
      'Real student data collection',
      'Personalized recommendations',
      'University browsing & filters',
      'Led end-to-end development',
    ],
    description: 'A machine learning-based university recommendation system designed to help Filipino students make informed decisions when selecting a tertiary school. Collects real, firsthand student data from Cebu City, Mandaue City, and Lapu-Lapu City, leveraging a Random Forest model to uncover key factors influencing university choices. Generates personalized recommendations based on location, cost, programs, environment, and facilities — with university browsing filters, user profiles, an admin panel, and explainable insights through feature importance and clustering analysis. Led the development team, managing internal workflows and coordinating external processes throughout the project lifecycle.',
  },
  {
    title: 'AIRA: An HR Automation System with AI Agent Integration',
    role: 'Lead & Full Stack Developer | Systems Architect',
    type: 'Company Internal System',
    stack: ['React', 'TypeScript', 'Supabase', 'Openrouter API', 'Vercel'],
    highlights: [
      'AI-powered email scanning',
      'Automated applicant extraction',
      'HR workflow streamlining',
      'On-command status retrieval',
    ],
    description: "Designed and developed an AI-powered HR agent that automates the company's hiring pipeline — scanning the HR inbox, extracting applicant data, and surfacing it directly on the system dashboard. Automatically sends interview links to applicants, with ready-to-use email templates for scheduling, rejection, follow-ups, etc. for HR utilization. Features an integrated AI agent that retrieves and relays applicant status on command, a built-in calendar for tracking scheduled interviews, and a superadmin role to manage and onboard users across HR, management, and developer tiers.",
  },
  {
    title: 'Graduation Curse',
    role: 'Game Designer | Lead Developer',
    type: 'Game Dev',
    stack: ['Godot', 'GDScript', 'Blender', 'Sketchfab', 'Trellis3D', 'Mixamo'],
    highlights: [
      'Retro-inspired 3D horror-comedy',
      'Custom map layout & asset placement',
      'FPS mechanics',
      'Map exploration gameplay',
      'Imported & integrated 3D assets',
    ],
    description: 'A retro-inspired 3D horror-comedy FPS grounded in the Cebuano superstition that graduating students are more prone to accidents and danger. Built during my internship at Lifewood Data Technology by a 3-person team, which I led from concept through delivery — handling game design direction, core development, map layout, and asset integration. Built in Godot with GDScript, the game blends genuine atmospheric dread with comedic timing that leans into the absurdity of the superstition itself. We also produced a full game trailer to accompany the release, handling the cinematography, pacing, and edit ourselves. Assets were curated from Sketchfab, Mixamo, and Trellis3D and unified through Blender — rescaling, retexturing, and retargeting animations to match our custom character controller.',
  },
  {
    title: 'Lifewood Website Imitation',
    visitSite: 'https://lifewoodwebsite.vercel.app/',
    role: 'Lead & Fullstack Developer',
    type: 'Internship Project',
    stack: ['React', 'TypeScript', 'Supabase', 'Vercel'],
    highlights: [
      '3 admin role tiers',
      'HR automation system',
      'User queries, Open job positions, Internal news posting, and Project Proposal management',
      'Interactive internal news module',
    ],
    description: <>An internship project wherein I had to replicate the company website while introducing new features and interactions for both users and administrators. The frontend covers company information, services, office location, an about page, open job positions, and internal news. The backend supports <span className="text-brand-accent font-semibold">three admin roles — superadmin, HR, and management</span> — each with a tailored interface. Key features include managing user inquiries, processing client project proposals, a built-in HR automation system, job posting management, and internal news publishing. Supporting modules include system logs for tracking admin actions and a notification system for new interactions across the platform.</>,
  },
  {
    title: 'Adssistance: An automation email assistant agent',
    role: 'Lead Automation Developer',
    type: 'Personal Project',
    stack: ['n8n', 'OpenRouter API', 'HTML & CSS', 'JavaScript'],
    highlights: [
      'Automation email assistant for admins',
      'Generates context-aware AI replies',
      'Admin-provided context improves response accuracy',
      'Built around practical email workflow support',
    ],
    description: 'A personal automation project built as an email assistant agent. It generates context-aware replies and allows additional admin-provided context to improve the relevance and accuracy of the responses it produces.',
  },
];

const Projects = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <SectionWrapper id="projects" className="pt-14 md:pt-20">
      {/* Card grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, i) => (
          <AnimatedItem key={i} className="h-full">
            <button
              onClick={() => setSelected(project)}
              className="glass-card project-card p-5 w-full h-72 text-left flex flex-col gap-3 hover:border-brand-accent/40 transition-colors"
            >
              <div className="h-24 overflow-hidden space-y-1.5 shrink-0">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-meta font-bold text-brand-cream leading-snug line-clamp-2">{project.title}</h3>
                  {project.ongoing && (
                    <span className="text-chip shrink-0 px-2 py-0.5 rounded-full border border-brand-accent/40 bg-brand-accent/12 text-brand-accent animate-pulse">
                      In Progress
                    </span>
                  )}
                </div>
                <p className="text-label text-brand-muted">{project.type}</p>
                <p className="text-chip text-brand-gray/60 line-clamp-1">{project.role}</p>
              </div>
              <div className="border-t border-white/10 shrink-0" />
              <div className="flex flex-wrap gap-1.5 content-start overflow-hidden">
                {project.stack.map((tech, j) => (
                  <span key={j} className="text-chip px-2 py-0.5 rounded-full border border-brand-accent/30 bg-brand-accent/12 text-brand-accent">
                    {tech}
                  </span>
                ))}
              </div>
            </button>
          </AnimatedItem>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-brand-dark/80 backdrop-blur-sm z-40"
              onClick={() => setSelected(null)}
            />

            {/* Modal panel */}
            <motion.div
              key="modal"
              initial={{ opacity: 0, y: 32, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 pointer-events-none"
            >
              <div className="glass-card w-full max-w-5xl max-h-[85vh] overflow-y-auto pointer-events-auto bg-[linear-gradient(155deg,rgba(39,82,132,0.94),rgba(18,57,98,0.9))] border-white/15 shadow-[0_32px_80px_rgba(6,18,35,0.5)]">

                {/* Two-panel body */}
                <div className="grid grid-cols-1 md:grid-cols-3">

                  {/* Left: metadata */}
                  <div className="space-y-5 p-6 md:border-r border-white/12 bg-white/[0.03]">
                    <div className="space-y-0.5">
                      <p className="text-label text-brand-muted">Role</p>
                      <p className="text-body-sm font-bold text-brand-cream">{selected.role}</p>
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-label text-brand-muted">Type</p>
                      <p className="text-body-sm font-bold text-brand-cream">{selected.type}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-label text-brand-muted">Stack & Tools</p>
                      <div className="flex flex-wrap gap-1.5">
                        {selected.stack.map((tech, j) => (
                          <span key={j} className="text-brand-accent text-chip px-2.5 py-1 rounded-full border border-brand-accent/30 bg-brand-accent/12">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-label text-brand-muted">Highlights</p>
                      <ul className="space-y-1.5">
                        {selected.highlights.map((h, j) => (
                          <li key={j} className="text-body text-brand-gray/85 flex items-start gap-2">
                            <span className="text-brand-accent mt-0.5">•</span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right: title + description */}
                  <div className="md:col-span-2 p-6 space-y-3 bg-white/[0.015]">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h2 className="text-card-title text-brand-cream">{selected.title}</h2>
                        {selected.ongoing && (
                          <span className="text-chip px-2.5 py-1 rounded-full border border-brand-accent/40 bg-brand-accent/12 text-brand-accent animate-pulse shrink-0">
                            In Progress
                          </span>
                        )}
                        {selected.visitSite && (
                          <a
                            href={selected.visitSite}
                            target="_blank"
                            rel="noreferrer"
                            className="visit-site-btn inline-flex items-center gap-2 text-action text-brand-accent px-4 py-2.5 rounded-lg border border-brand-accent/20 bg-brand-accent/20 hover:bg-brand-accent/35 transition-all font-semibold"
                          >
                            <img src="/assets/vercel.png" alt="Vercel" className="w-3 h-3 object-contain invert" />
                            Live demo
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                      <button
                        onClick={() => setSelected(null)}
                        className="shrink-0 text-brand-muted hover:text-brand-cream transition-colors mt-1"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="text-body text-brand-gray/80">{selected.description}</div>
                  </div>

                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
};

export default Projects;
