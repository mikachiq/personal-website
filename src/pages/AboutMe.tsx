import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { SectionWrapper, AnimatedItem } from '../components/shared';

const AboutMe = () => {
  const [photoIdx, setPhotoIdx] = useState(0);
  const [photoDirection, setPhotoDirection] = useState(1);
  const photos = [
    { src: '/assets/aboutmepicture1.jpg', position: '50% 40%' },
    { src: '/assets/me.jpg', position: 'center 20%' },
  ];
  const funFacts: { label: string; image?: string; position?: string; minH?: string }[] = [
    { label: 'I used to do competitive speedcubing', image: '/assets/WCA.png', position: 'center 35%' },
    { label: 'I do cosplay', image: '/assets/cosplay.jpg', position: 'center 30%', minH: '150px' },
    { label: 'I go to the gym 5x a week', image: '/assets/gym.jpg', position: 'center 55%' },
    { label: 'I have a collection of figurines', image: '/assets/collection.jpg' },
    { label: 'I love animals', image: '/assets/cats.jpeg' },
  ];

  const duplicatedFacts = [...funFacts, ...funFacts, ...funFacts];

  return (
    <SectionWrapper id="about">
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
              I studied BSIT at UCLM and found my calling in making things work on their own.
              Now I design automation systems and AI integrations that do the heavy lifting so people don't have to.
            </p>
            <p>
              My stronghold is definitely system architecture and frontend design, with a bit of database queries.
            </p>
          </div>
        </AnimatedItem>
      </div>

      <div className="mt-4 space-y-4 overflow-hidden">
        <AnimatedItem>
          <h3 className="text-card-title uppercase text-brand-muted">Fun Facts About Me</h3>
        </AnimatedItem>

        <AnimatedItem className="relative w-full flex">
          <motion.div
            className="flex gap-4 whitespace-nowrap"
            animate={{ x: ['0%', '-33.333333%'] }}
            transition={{ ease: 'linear', duration: 15, repeat: Infinity }}
          >
            {duplicatedFacts.map((fact, i) => (
              <div
                key={i}
                style={{ minHeight: fact.minH ?? (fact.image ? '105px' : undefined) }}
                className={`relative group border border-white/5 rounded-2xl text-center overflow-hidden min-w-[190px] sm:min-w-[250px] md:min-w-[300px] ${
                  fact.image ? 'p-4 sm:p-6' : 'bg-brand-dark/30 hover:bg-brand-dark/50 transition-colors p-4 sm:p-6'
                }`}
              >
                {fact.image ? (
                  <>
                    <img
                      src={fact.image}
                      alt={fact.label}
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{ objectPosition: fact.position ?? 'center' }}
                    />
                    <div className="absolute inset-0 bg-brand-deep/40" />
                    <span className="absolute inset-0 z-10 flex items-center justify-center text-body-sm font-medium px-4 text-brand-cream">{fact.label}</span>
                  </>
                ) : (
                  <span className="text-body-sm font-medium text-brand-cream">{fact.label}</span>
                )}
              </div>
            ))}
          </motion.div>
        </AnimatedItem>
      </div>
    </SectionWrapper>
  );
};

export default AboutMe;
