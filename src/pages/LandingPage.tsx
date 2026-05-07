import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { AnimatedItem, pageVariants } from '../components/shared';
import { HomeProps } from '../types';
import { useEffect, useState } from 'react';

const Typewriter = ({ text, speed = 60 }: { text: string; speed?: number }) => {
  const [display, setDisplay] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let i = 0;
    setDisplay('');
    setIsComplete(false);
    const id = setInterval(() => {
      i += 1;
      setDisplay(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(id);
        setIsComplete(true);
      }
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);

  return (
    <span>
      <span className="typewriter-text text-brand-cream">{display}</span>
      <span className={`typewriter-caret ${isComplete ? 'typewriter-caret-complete' : ''}`}>&nbsp;</span>
    </span>
  );
};

const LandingPage = ({ onNext }: HomeProps) => (
  <motion.div
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="hero-page hero-showcase relative grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(24rem,32rem)] items-center lg:items-start gap-8 lg:gap-10 px-4 sm:px-6 max-w-7xl mx-auto text-center md:text-left pt-16 sm:pt-20 md:pt-28 pb-10 md:pb-16"
  >
    <div className="relative z-10 flex flex-col items-center md:items-start gap-6 md:gap-8 lg:pt-10 xl:pt-14">
      <AnimatedItem className="space-y-4 max-w-none">
        <h1 className="text-display hero-title">
          <Typewriter text={"Hi, I'm Atilla Hadrian Castrodes"} />
        </h1>
        <p className="hero-subtitle text-body-lg text-brand-cream/80 font-light">
          Systems Architect | AI & Automation Practitioner
        </p>
      </AnimatedItem>

      <AnimatedItem className="w-full flex justify-center md:justify-start">
        <div className="hero-social-dock relative flex flex-wrap items-stretch justify-center gap-3 overflow-hidden bg-white/65 backdrop-blur-xl border border-white/70 rounded-2xl p-3 sm:p-2 sm:pr-5 shadow-[0_22px_55px_rgba(5,18,34,0.3),inset_0_1px_0_rgba(255,255,255,0.95),inset_0_-18px_38px_rgba(255,255,255,0.24)] ring-1 ring-white/35 w-full sm:w-auto before:absolute before:inset-x-0 before:top-0 before:h-1/2 before:bg-gradient-to-b before:from-white/70 before:to-transparent before:pointer-events-none">
          <a
            href="https://www.linkedin.com/in/atilla-castrodes-bb2151295/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center bg-white/0 transition-all active:scale-95 hover:scale-105 hover:bg-white/25 touch-manipulation"
          >
            <img src="/assets/icons/linkedin.webp" alt="LinkedIn" className="w-10 h-10 sm:w-11 sm:h-11 object-contain" />
          </a>

          <a
            href="https://discord.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Discord profile"
            className="relative z-10 flex flex-col items-center justify-center w-24 sm:w-28 rounded-xl px-2 py-1 transition-all active:scale-95 hover:scale-105 hover:bg-white/25 touch-manipulation"
          >
            <img src="/assets/icons/discord.png" alt="Discord" className="w-10 h-10 sm:w-11 sm:h-11 object-contain" />
            <span className="mt-0.5 text-chip text-black leading-none whitespace-nowrap">mikachiq#2706</span>
          </a>

          <a
            href="https://github.com/mikachiq"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center bg-white/0 transition-all active:scale-95 hover:scale-105 hover:bg-white/25 touch-manipulation"
          >
            <img src="/assets/icons/github.png" alt="GitHub" className="w-10 h-10 sm:w-11 sm:h-11 object-contain" />
          </a>
        </div>
      </AnimatedItem>

      <AnimatedItem className="w-full flex justify-center md:justify-start">
        <button
          onClick={onNext}
          className="btn-primary text-action group w-full sm:w-auto justify-center active:scale-[0.98] touch-manipulation"
        >
          <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 group-hover:translate-x-2 transition-transform" />
          Get to know me
          <div className="btn-accent-blob" />
        </button>
      </AnimatedItem>

      <div className="hidden md:block min-h-[3.75rem]" aria-hidden="true" />
    </div>

    <AnimatedItem className="relative z-10 hidden lg:flex w-full justify-end lg:pt-10 xl:pt-14">
      <div className="relative w-full max-w-lg xl:max-w-xl">
        <div className="hero-image-frame relative overflow-hidden rounded-[2.1rem] p-2 shadow-2xl">
          <img
            src="/assets/grad.png"
            alt="Atilla Castrodes graduation portrait"
            className="relative z-10 h-full max-h-[42rem] w-full object-cover object-top rounded-[1.6rem]"
          />
        </div>
      </div>
    </AnimatedItem>
  </motion.div>
);

export default LandingPage;
