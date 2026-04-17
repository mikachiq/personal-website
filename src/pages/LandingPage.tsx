import { motion } from 'motion/react';
import { ArrowRight, Triangle } from 'lucide-react';
import { AnimatedItem, pageVariants } from '../components/shared';
import { HomeProps } from '../types';

const LandingPage = ({ onNext }: HomeProps) => (
  <motion.div
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="min-h-[100svh] flex flex-col justify-center items-center md:items-start gap-8 md:gap-10 px-4 sm:px-6 max-w-7xl mx-auto text-center md:text-left"
  >
    <AnimatedItem className="space-y-4 max-w-4xl">
      <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95]">
        Hi, I'm <span className="text-brand-cream">Atilla Hadrian Castrodes</span>
      </h1>
      <p className="text-lg sm:text-xl md:text-3xl text-brand-cream/80 font-light leading-relaxed">
        Systems Architect | AI & Automation Practitioner
      </p>
    </AnimatedItem>

    <AnimatedItem className="w-full flex justify-center md:justify-start">
      <div className="flex flex-wrap items-stretch justify-center gap-3 bg-[#d1d5db] rounded-2xl p-3 sm:p-2 sm:pr-6 shadow-xl">
        <a
          href="https://www.linkedin.com/in/atilla-castrodes-bb2151295/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn profile"
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center transition-transform active:scale-95 hover:scale-105 touch-manipulation"
        >
          <img src="/assets/icons/linkedin.webp" alt="LinkedIn" className="w-full h-full object-contain" />
        </a>

        <a
          href="https://discord.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Discord profile"
          className="flex flex-col items-center justify-center w-24 sm:w-28 rounded-xl px-2 py-1 transition-transform active:scale-95 hover:scale-105 touch-manipulation"
        >
          <img src="/assets/icons/discord.png" alt="Discord" className="w-8 h-8 sm:w-9 sm:h-9 object-contain" />
          <span className="mt-0.5 text-[10px] font-bold text-black leading-none whitespace-nowrap">mikachiq#2706</span>
        </a>

        <a
          href="https://github.com/mikachiq"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub profile"
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center transition-transform active:scale-95 hover:scale-105 touch-manipulation"
        >
          <img src="/assets/icons/github.png" alt="GitHub" className="w-full h-full object-contain" />
        </a>
      </div>
    </AnimatedItem>

    <AnimatedItem>
      <button
        onClick={onNext}
        className="btn-primary text-lg sm:text-xl md:text-2xl group w-full sm:w-auto justify-center active:scale-[0.98] touch-manipulation"
      >
        <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 group-hover:translate-x-2 transition-transform" />
        Get to know me
        <div className="btn-accent-blob" />
      </button>
    </AnimatedItem>

    <AnimatedItem className="mt-8 md:mt-12 space-y-2 max-w-xl">
      <p className="text-sm sm:text-base opacity-60">Check out my gaming portfolio if you are a gacha nerd like me :P</p>
      <a href="#" className="flex items-center gap-2 text-brand-accent hover:underline">
        <Triangle className="w-4 h-4 fill-current" />
        link here
      </a>
    </AnimatedItem>
  </motion.div>
);

export default LandingPage;
