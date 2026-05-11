import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { SectionWrapper, AnimatedItem } from '../components/shared';

const funFacts: { label: string; image?: string; position?: string }[] = [
  { label: 'I used to do competitive speedcubing', image: '/assets/fun-facts/wca.jpg' },
  { label: 'I live an active lifestyle', image: '/assets/fun-facts/gym.jpg' },
  { label: "I'm a collector", image: '/assets/fun-facts/collection.jpg' },
  { label: 'I love animals', image: '/assets/fun-facts/cats.jpg' },
  { label: 'I do cosplay', image: '/assets/fun-facts/cosplay.jpg' },
];

const AboutMe = () => {
  const [photoIdx, setPhotoIdx] = useState(0);
  const [photoDirection, setPhotoDirection] = useState(1);
  const photos = [
    { src: '/assets/aboutmepicture1.jpg', position: '50% 40%' },
    { src: '/assets/me.jpg', position: 'center 20%' },
  ];

  return (
    <SectionWrapper id="about" className="pt-20 md:pt-24">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-stretch">
        <AnimatedItem className="md:col-span-3 space-y-6">
          <div className="aspect-[4/3] sm:aspect-video bg-brand-dark/30 rounded-3xl border border-white/5 overflow-hidden shadow-2xl relative">
            <AnimatePresence initial={false} mode="wait">
              <motion.img
                key={photoIdx}
                src={photos[photoIdx].src}
                alt="About me"
                className="absolute inset-0 w-full h-full object-cover opacity-60"
                style={{ objectPosition: photos[photoIdx].position }}
                initial={{ x: photoDirection * 32, opacity: 0 }}
                animate={{ x: 0, opacity: 0.6 }}
                exit={{ x: photoDirection * -32, opacity: 0 }}
                transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] as const }}
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/55 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
              <div className="bg-brand-accent/40 backdrop-blur-md px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl border border-white/10 inline-block italic text-body-sm text-brand-cream">
                I automate what slows you down
              </div>
            </div>
              <button
              onClick={() => {
                setPhotoDirection(1);
                setPhotoIdx((i) => (i + 1) % photos.length);
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/75 hover:text-white text-control font-bold transition-colors"
            >
              ›
            </button>
          </div>
        </AnimatedItem>

        <AnimatedItem className="glass-card p-10 md:p-12 space-y-6 md:col-span-2">
          <h2 className="text-card-title text-brand-cream">Atilla Hadrian Castrodes</h2>
          <div className="space-y-5 text-brand-gray/90 text-body">
            <p>
              I studied BSIT at UCLM and found my calling during my internship.
              Now I build AI agents, automations, and full web systems.
            </p>
            <p>
              My strengths are system architecture, technical writing, and project management, while I keep sharpening my coding skills in tech and AI.
            </p>
          </div>
        </AnimatedItem>
      </div>

      <div className="mt-4 space-y-4 overflow-hidden">
        <AnimatedItem>
          <h3 className="text-card-title uppercase text-brand-muted">Fun Facts About Me</h3>
        </AnimatedItem>

        <div className="fun-facts-viewport relative w-full">
          <div className="fun-facts-marquee" aria-label="Fun facts carousel">
            {[0, 1].map((groupIndex) => (
              <div className="fun-facts-group" aria-hidden={groupIndex === 1} key={groupIndex}>
                {funFacts.map((fact) => (
                  <div
                    key={`${groupIndex}-${fact.label}`}
                    className={`fun-fact-card relative group border border-white/5 rounded-2xl text-center overflow-hidden ${
                      fact.image ? '' : 'bg-brand-dark/30 hover:bg-brand-dark/50 transition-colors p-4 sm:p-6'
                    }`}
                  >
                    {fact.image ? (
                      <>
                        <img
                          src={fact.image}
                          alt={fact.label}
                          className="absolute inset-0 w-full h-full object-cover opacity-60"
                          style={{ objectPosition: fact.position ?? 'center' }}
                          decoding="async"
                          draggable={false}
                        />
                        <div className="absolute inset-0 bg-brand-deep/45" />
                        <span className="absolute inset-0 z-10 flex items-center justify-center text-body-sm font-medium px-4 text-brand-cream">{fact.label}</span>
                      </>
                    ) : (
                      <span className="text-body-sm font-medium text-brand-cream">{fact.label}</span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutMe;
