import { ExternalLink } from 'lucide-react';
import { SectionWrapper, AnimatedItem } from '../components/shared';

const projects = [
  {
    title: 'EDUMATCH: A Machine Learning-Based Recommendation System for Tertiary School Selection',
    role: 'Project Manager | Systems Architect and Designer',
    type: 'Capstone Project',
    stack: ['Python', 'Machine Learning', 'React', 'Supabase', 'REST API'],
    highlights: [
      'ML model built from scratch',
      'Dataset compilation & training',
      'Led internal & external workflows',
      'University matching algorithm',
    ],
    description: 'A machine learning-based recommendation system that suggests universities to users based on their location, budget, preferred course, available university facilities, and accreditation level. Built the AI model and datasets from scratch. Led internal team workflows and external processes.',
  },
  {
    title: 'Lifewood Website Imitation',
    role: 'Lead & Fullstack Dev',
    type: 'Internship Project',
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'Supabase', 'Tailwind'],
    highlights: [
      '3 admin role tiers',
      'HR automation system',
      'Proposal management',
      'Internal news module',
    ],
    description: 'An internship project wherein I had to replicate the company website while introducing new features and interactions for both users and administrators. The frontend covers company information, services, office location, an about page, open job positions, and internal news. The backend supports three admin roles — superadmin, HR, and management — each with a tailored interface. Key features include managing user inquiries, processing client project proposals, a built-in HR automation system, job posting management, and internal news publishing. Supporting modules include system logs for tracking admin actions and a notification system for new interactions across the platform.',
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
                  className="inline-flex items-center gap-2 text-action text-brand-accent px-3 py-2 rounded-lg border border-brand-accent/30 bg-brand-accent/12 hover:bg-brand-accent/20 transition-colors"
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
