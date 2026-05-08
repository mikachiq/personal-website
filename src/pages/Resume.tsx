import { SectionWrapper, AnimatedItem } from '../components/shared';
import Threads from '../components/Threads';

const resumePreviewPath = '/assets/resume/resume.jpg';

const Resume = () => (
  <SectionWrapper id="resume" className="relative isolate overflow-hidden pt-16 md:pt-24">
    <div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
      <Threads
        color={[0.61, 0.69, 0.94]}
        amplitude={1.15}
        distance={0.18}
        aria-hidden="true"
      />
    </div>
    <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_22%,rgba(250,226,190,0.12),transparent_32%),linear-gradient(90deg,rgba(18,57,98,0.92),rgba(10,35,64,0.62))]" />

    <AnimatedItem className="relative z-10">
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
