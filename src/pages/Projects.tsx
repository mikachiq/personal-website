import { useEffect, useState } from 'react';
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
  preview?: {
    images?: string[];
    accentLabel?: string;
  };
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
    description:
      "MikaHub is my personal gaming portfolio - a space to compile the builds, clips, and stats that usually live scattered across screenshots and Discord messages. Each game gets its own corner: character builds with full loadouts and commentary, gameplay highlights pulled from sessions that actually felt good, and stats tracking what I'm grinding right now. Part showcase, part journal, part excuse to keep playing.",
    preview: {
      accentLabel: 'Gaming Portfolio',
    },
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
    description:
      'A machine learning-based university recommendation system designed to help Filipino students make informed decisions when selecting a tertiary school. Collects real, firsthand student data from Cebu City, Mandaue City, and Lapu-Lapu City, leveraging a Random Forest model to uncover key factors influencing university choices. Generates personalized recommendations based on location, cost, programs, environment, and facilities - with university browsing filters, user profiles, an admin panel, and explainable insights through feature importance and clustering analysis. Led the development team, managing internal workflows and coordinating external processes throughout the project lifecycle.',
    preview: {
      images: [
        '/assets/projects%20folder/Edumatch1.jpeg',
        '/assets/projects%20folder/Edumatch2.jpeg',
      ],
      accentLabel: 'ML Recommender',
    },
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
    description:
      "Designed and developed an AI-powered HR agent that automates the company's hiring pipeline - scanning the HR inbox, extracting applicant data, and surfacing it directly on the system dashboard. Automatically sends interview links to applicants, with ready-to-use email templates for scheduling, rejection, follow-ups, etc. for HR utilization. Features an integrated AI agent that retrieves and relays applicant status on command, a built-in calendar for tracking scheduled interviews, and a superadmin role to manage and onboard users across HR, management, and developer tiers.",
    preview: {
      images: [
        '/assets/projects%20folder/AIRA1.jpeg',
        '/assets/projects%20folder/AIRA2.jpeg',
        '/assets/projects%20folder/AIRA3.jpeg',
      ],
      accentLabel: 'AI HR Agent',
    },
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
    description:
      'A retro-inspired 3D horror-comedy FPS grounded in the Cebuano superstition that graduating students are more prone to accidents and danger. Built during my internship at Lifewood Data Technology by a 3-person team, which I led from concept through delivery - handling game design direction, core development, map layout, and asset integration. Built in Godot with GDScript, the game blends genuine atmospheric dread with comedic timing that leans into the absurdity of the superstition itself. We also produced a full game trailer to accompany the release, handling the cinematography, pacing, and edit ourselves. Assets were curated from Sketchfab, Mixamo, and Trellis3D and unified through Blender - rescaling, retexturing, and retargeting animations to match our custom character controller.',
    preview: {
      images: [
        '/assets/projects%20folder/Graduation%20Curse%20icon.png',
        '/assets/projects%20folder/Gradcurse1.jpeg',
        '/assets/projects%20folder/gradcurse2.jpeg',
        '/assets/projects%20folder/gradcurse3.jpeg',
      ],
      accentLabel: '3D Horror Comedy',
    },
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
    description: (
      <>
        An internship project wherein I had to replicate the company website while introducing new features and
        interactions for both users and administrators. The frontend covers company information, services, office
        location, an about page, open job positions, and internal news. The backend supports{' '}
        <span className="text-brand-accent font-semibold">three admin roles - superadmin, HR, and management</span> -
        each with a tailored interface. Key features include managing user inquiries, processing client project
        proposals, a built-in HR automation system, job posting management, and internal news publishing. Supporting
        modules include system logs for tracking admin actions and a notification system for new interactions across the
        platform.
      </>
    ),
    preview: {
      accentLabel: 'Web Platform Clone',
    },
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
    description:
      'A personal automation project built as an email assistant agent. It generates context-aware replies and allows additional admin-provided context to improve the relevance and accuracy of the responses it produces.',
    preview: {
      images: [
        '/assets/projects%20folder/adssistance%20UI.jpeg',
        '/assets/projects%20folder/n8n%20workflow.jpeg',
      ],
      accentLabel: 'Workflow + UI',
    },
  },
];

const Projects = () => {
  const [selected, setSelected] = useState<Project | null>(null);
  const [previewTick, setPreviewTick] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setPreviewTick((current) => current + 1);
    }, 2500);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <SectionWrapper id="projects" className="pt-14 md:pt-20">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => {
          const previewImages = project.preview?.images ?? [];
          const activeImageIndex = previewImages.length > 0 ? previewTick % previewImages.length : 0;

          return (
            <AnimatedItem key={i} className="h-full">
              <button
                onClick={() => setSelected(project)}
                className="glass-card project-card flex h-80 w-full flex-col text-left transition-colors hover:border-brand-accent/40"
              >
                <div className="project-preview shrink-0">
                  {previewImages.length > 1 ? (
                    <div className="project-preview-stage">
                      {previewImages.map((image, imageIndex) => (
                        <img
                          key={image}
                          src={image}
                          alt={`${project.title} preview ${imageIndex + 1}`}
                          className={`project-preview-slide project-preview-image object-cover object-top ${
                            activeImageIndex === imageIndex ? 'is-active' : ''
                          }`}
                        />
                      ))}
                    </div>
                  ) : previewImages.length === 1 ? (
                    <img
                      src={previewImages[0]}
                      alt={`${project.title} interface preview`}
                      className="project-preview-image h-full w-full object-cover object-top"
                    />
                  ) : (
                    <div className="project-preview-fallback">
                      <div className="project-preview-orb" />
                      <div className="project-preview-grid" />
                      <p className="project-preview-watermark">{project.title}</p>
                      <div className="project-preview-copy">
                        <span className="project-preview-tag">{project.preview?.accentLabel ?? project.type}</span>
                        <span className="project-preview-stack">{project.stack.slice(0, 2).join(' / ')}</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col justify-start gap-1.5 p-5 pt-3">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="max-w-[85%] text-meta font-bold leading-snug text-brand-cream line-clamp-3">
                      {project.title}
                    </h3>
                    {project.ongoing && (
                      <span className="shrink-0 rounded-full border border-brand-accent/40 bg-brand-accent/12 px-2 py-0.5 text-chip text-brand-accent animate-pulse">
                        In Progress
                      </span>
                    )}
                  </div>
                  <p className="text-label text-brand-muted">{project.type}</p>
                  <p className="text-chip text-brand-gray/60 line-clamp-2">{project.role}</p>
                </div>
              </button>
            </AnimatedItem>
          );
        })}
      </div>

      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-brand-dark/80 backdrop-blur-sm"
              onClick={() => setSelected(null)}
            />

            <motion.div
              key="modal"
              initial={{ opacity: 0, y: 32, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none sm:p-8"
            >
              <div className="glass-card pointer-events-auto max-h-[85vh] w-full max-w-5xl overflow-y-auto border-white/15 bg-[linear-gradient(155deg,rgba(39,82,132,0.94),rgba(18,57,98,0.9))] shadow-[0_32px_80px_rgba(6,18,35,0.5)]">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="space-y-5 border-white/12 bg-white/[0.03] p-6 md:border-r">
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
                          <span
                            key={j}
                            className="rounded-full border border-brand-accent/30 bg-brand-accent/12 px-2.5 py-1 text-brand-accent text-chip"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-label text-brand-muted">Highlights</p>
                      <ul className="space-y-1.5">
                        {selected.highlights.map((h, j) => (
                          <li key={j} className="flex items-start gap-2 text-body text-brand-gray/85">
                            <span className="mt-0.5 text-brand-accent">*</span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-3 bg-white/[0.015] p-6 md:col-span-2">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-3">
                        <h2 className="text-card-title text-brand-cream">{selected.title}</h2>
                        {selected.ongoing && (
                          <span className="shrink-0 rounded-full border border-brand-accent/40 bg-brand-accent/12 px-2.5 py-1 text-chip text-brand-accent animate-pulse">
                            In Progress
                          </span>
                        )}
                        {selected.visitSite && (
                          <a
                            href={selected.visitSite}
                            target="_blank"
                            rel="noreferrer"
                            className="visit-site-btn inline-flex items-center gap-2 rounded-lg border border-brand-accent/20 bg-brand-accent/20 px-4 py-2.5 text-action font-semibold text-brand-accent transition-all hover:bg-brand-accent/35"
                          >
                            <img src="/assets/vercel.png" alt="Vercel" className="h-3 w-3 object-contain invert" />
                            Live demo
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        )}
                      </div>
                      <button
                        onClick={() => setSelected(null)}
                        className="mt-1 shrink-0 text-brand-muted transition-colors hover:text-brand-cream"
                      >
                        <X className="h-5 w-5" />
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
