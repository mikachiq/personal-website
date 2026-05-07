import { SectionWrapper, AnimatedItem } from '../components/shared';

const resumePreviewPath = '/assets/resume/resume.jpg';

const Resume = () => (
  <SectionWrapper id="resume" className="pt-16 md:pt-24">
    <AnimatedItem>
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,520px)_1fr] gap-10 xl:gap-14 items-start">
        <div className="contact-text-panel space-y-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="contact-display text-brand-cream">Let's Connect.</h2>
              <p className="contact-display-muted">Available for innovative roles.</p>
            </div>
          </div>

          <div className="space-y-7">
            <div className="space-y-2">
              <p className="text-label text-brand-accent">Email</p>
              <a
                href="mailto:atillahadrianc@gmail.com"
                className="text-body-lg font-semibold text-brand-gray transition-colors hover:text-brand-cream"
              >
                atillahadrianc@gmail.com
              </a>
            </div>

            <div className="space-y-2">
              <p className="text-label text-brand-accent">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/atilla-castrodes-bb2151295/"
                target="_blank"
                rel="noreferrer"
                className="text-body-lg font-semibold text-brand-gray transition-colors hover:text-brand-cream"
              >
                Atilla Castrodes
              </a>
            </div>
          </div>

        </div>

        <div className="glass-card p-3 sm:p-4 max-w-[560px] w-full mx-auto lg:mx-0 lg:justify-self-end">
          <img
            src={resumePreviewPath}
            alt="Resume preview for Atilla Hadrian Castrodes"
            className="w-full rounded-2xl border border-white/10 bg-white object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </AnimatedItem>
  </SectionWrapper>
);

export default Resume;
