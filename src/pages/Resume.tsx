import { Download, ExternalLink, Github, Globe, Mail, Phone } from 'lucide-react';
import { SectionWrapper, AnimatedItem } from '../components/shared';

const Resume = () => (
  <SectionWrapper id="resume" className="pt-16 md:pt-24">
    <AnimatedItem>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 items-start">
        <div className="glass-card p-3 sm:p-4">
          <img
            src="/assets/resume/resume-page-1.png"
            alt="Resume preview for Atilla Hadrian Castrodes"
            className="w-full rounded-2xl border border-white/10 bg-white object-contain"
            loading="lazy"
          />
        </div>

        <div className="space-y-4 lg:sticky lg:top-32">
          <div className="glass-card p-5 space-y-5">
            <span className="text-chip px-2.5 py-1 rounded-full border border-brand-accent/30 bg-brand-accent/12 text-brand-accent inline-block">
              Updated as of May 1, 2026
            </span>

            <div className="space-y-1">
              <p className="text-label text-brand-muted tracking-wider">Personal Contact Info</p>
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

          <div className="flex gap-3 flex-wrap">
            <a
              href="/castrodes_resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="glass-card px-4 py-3 inline-flex items-center gap-2 text-chip text-brand-gray/85 hover:text-brand-cream hover:border-brand-accent/40 transition-colors"
            >
              <ExternalLink className="w-4 h-4 text-brand-accent" />
              Open PDF
            </a>
            <a
              href="/castrodes_resume.pdf"
              download
              className="glass-card px-4 py-3 inline-flex items-center gap-2 text-chip text-brand-accent hover:border-brand-accent/40 transition-colors"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </AnimatedItem>
  </SectionWrapper>
);

export default Resume;
