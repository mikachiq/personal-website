import { ExternalLink } from 'lucide-react';
import { SectionWrapper, AnimatedItem } from '../components/shared';

const projects = [
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
    title: 'AIRA: HR Automation System with AI Agent Integration',
    role: 'Lead & Full Stack Developer | Systems Architect',
    type: 'Company Internal System',
    stack: ['React 19', 'Vite', 'TypeScript', 'Express', 'Supabase', 'Nodemailer', 'Google APIs'],
    highlights: [
      'AI-powered email scanning',
      'Automated applicant extraction',
      'HR workflow streamlining',
      'On-command status retrieval',
    ],
    description: 'Designed and developed an AI-powered HR agent that automates the company\'s hiring pipeline — scanning the HR inbox, extracting applicant data, and surfacing it directly on the system dashboard. Automatically sends interview links to applicants, with ready-to-use email templates for scheduling, rejection, follow-ups, etc. for HR utilization. Features an integrated AI agent that retrieves and relays applicant status on command, a built-in calendar for tracking scheduled interviews, and a superadmin role to manage and onboard users across HR, management, and developer tiers.',
  },
  {
    title: 'Lifewood Website Imitation',
    role: 'Lead & Fullstack Dev',
    type: 'Internship Project',
    stack: ['TypeScript', 'JavaScript', 'HTML', 'Express', 'Supabase', 'Tailwind', 'PostgreSQL'],
    highlights: [
      '3 admin role tiers',
      'HR automation system',
      'User queries, Open job positions, Internal news posting, and Project Proposal management',
      'Interactive internal news module',
    ],
    description: <>An internship project wherein I had to replicate the company website while introducing new features and interactions for both users and administrators. The frontend covers company information, services, office location, an about page, open job positions, and internal news. The backend supports <span className="text-brand-accent font-semibold">three admin roles — superadmin, HR, and management</span> — each with a tailored interface. Key features include managing user inquiries, processing client project proposals, a built-in HR automation system, job posting management, and internal news publishing. Supporting modules include system logs for tracking admin actions and a notification system for new interactions across the platform.</>,
    visitSite: 'https://lifewoodwebsite.vercel.app/',
  },
];

const Projects = () => (
  <SectionWrapper id="projects">
    <div className="space-y-8">
      {projects.map((project, i) => (
        <AnimatedItem key={i}>
          <div className="glass-card p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left: metadata */}
            <div className="space-y-5 border-r border-brand-muted/20 pr-6">
              <div className="space-y-0.5">
                <p className="text-label text-brand-muted">Role</p>
                <p className="text-body-sm font-bold text-brand-cream">{project.role}</p>
              </div>
              <div className="space-y-0.5">
                <p className="text-label text-brand-muted">Type</p>
                <p className="text-body-sm font-bold text-brand-cream">{project.type}</p>
              </div>
              <div className="space-y-2">
                <p className="text-label text-brand-muted">Stack</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech, j) => (
                    <span key={j} className="text-brand-accent text-chip px-2.5 py-1 rounded-full border border-brand-accent/30 bg-brand-accent/12">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-label text-brand-muted">Highlights</p>
                <ul className="space-y-1.5">
                  {project.highlights.map((h, j) => (
                    <li key={j} className="text-body text-brand-gray/85 flex items-start gap-2">
                      <span className="text-brand-accent mt-0.5">•</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
              {project.visitSite && (
                <a
                  href={project.visitSite}
                  target="_blank"
                  rel="noreferrer"
                  className="visit-site-btn inline-flex items-center gap-2 text-action text-brand-accent px-4 py-2.5 rounded-lg border border-brand-accent/20 bg-brand-accent/20 hover:bg-brand-accent/35 transition-all font-semibold"
                >
                  <img src="/assets/vercel.png" alt="Vercel" className="w-3 h-3 object-contain invert" />
                  Visit site
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>

            {/* Right: description */}
            <div className="md:col-span-2 space-y-3">
              <h3 className="text-card-title text-brand-cream">{project.title}</h3>
              <p className="text-body text-brand-gray/80">{project.description}</p>
            </div>
          </div>
        </AnimatedItem>
      ))}
    </div>
  </SectionWrapper>
);

export default Projects;
