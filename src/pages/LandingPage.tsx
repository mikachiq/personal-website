import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { AnimatedItem, pageVariants } from '../components/shared';
import { HomeProps } from '../types';

const LandingPage = ({ onNext }: HomeProps) => (
  <motion.div
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="hero-page grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,26rem)] items-center gap-8 lg:gap-12 px-4 sm:px-6 max-w-7xl mx-auto text-center md:text-left pt-16 sm:pt-20 md:pt-28 pb-10 md:pb-16"
  >
    <div className="flex flex-col items-center md:items-start gap-6 md:gap-8 lg:pt-10 xl:pt-14">
      <AnimatedItem className="space-y-4 max-w-4xl">
        <h1 className="text-display">
          Hi, I'm <span className="text-brand-cream">Atilla Hadrian Castrodes</span>
        </h1>
        <p className="text-body-lg text-brand-cream/80 font-light">
          Systems Architect | AI & Automation Practitioner
        </p>
      </AnimatedItem>

      <AnimatedItem className="w-full flex justify-center md:justify-start">
        <div className="flex flex-wrap items-stretch justify-center gap-3 bg-[#d1d5db] rounded-2xl p-3 sm:p-2 sm:pr-6 shadow-xl w-full sm:w-auto">
          <a
            href="https://www.linkedin.com/in/atilla-castrodes-bb2151295/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center transition-transform active:scale-95 hover:scale-105 touch-manipulation"
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
            <img src="/assets/icons/discord.png" alt="Discord" className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
            <span className="mt-0.5 text-chip text-black leading-none whitespace-nowrap">mikachiq#2706</span>
          </a>

          <a
            href="https://github.com/mikachiq"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center transition-transform active:scale-95 hover:scale-105 touch-manipulation"
          >
            <img src="/assets/icons/github.png" alt="GitHub" className="w-11 h-11 sm:w-12 sm:h-12 object-contain" />
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

      <AnimatedItem className="mt-8 md:mt-12 max-w-xl min-h-[3.75rem]">
        <div aria-hidden="true" className="h-full" />
        {/* <p className="text-body-sm opacity-60">Check out my gaming portfolio if you are a gacha nerd like me :P</p>
        <a href="#" className="flex items-center gap-2 text-brand-accent text-action hover:underline">
          <Triangle className="w-4 h-4 fill-current" />
          link here
        </a> */}
      </AnimatedItem>
    </div>

    <AnimatedItem className="hidden lg:flex w-full justify-end">
      <div className="relative w-full max-w-sm sm:max-w-md">
        <motion.div
          aria-hidden="true"
          animate={{ y: [0, -10, 0], scale: [1, 1.03, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-4 left-6 right-6 bottom-6 rounded-[2.4rem] border border-white/8 bg-white/6"
        />
        <motion.div
          aria-hidden="true"
          animate={{ rotate: [-5, -3, -5], y: [0, 8, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-5 bottom-3 left-3 right-12 rounded-[2.3rem] border border-brand-accent/15 bg-brand-surface/10"
        />
        <div className="absolute inset-x-10 bottom-2 h-28 rounded-full bg-brand-accent/25 blur-3xl" aria-hidden="true" />
        <div className="relative overflow-hidden rounded-[2.1rem] border border-white/10 bg-white/6 p-3 shadow-2xl backdrop-blur-sm">
          <div className="relative overflow-hidden rounded-[1.6rem] bg-[#183d67]">
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 50% 20%, rgba(155, 176, 240, 0.4), transparent 22%),
                  linear-gradient(180deg, rgba(19, 58, 102, 0.9) 0%, rgba(12, 33, 61, 0.45) 100%)
                `,
              }}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-15"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.16) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.16) 1px, transparent 1px)
                `,
                backgroundSize: '24px 24px',
              }}
            />
            <div className="absolute left-1/2 top-8 h-56 w-56 -translate-x-1/2 rounded-full border border-white/10" aria-hidden="true" />
            <div className="absolute left-1/2 top-14 h-72 w-72 -translate-x-1/2 rounded-full border border-brand-accent/10" aria-hidden="true" />
            <img
              src="/assets/grad.png"
              alt="Atilla Castrodes graduation portrait"
              className="relative z-10 h-full max-h-[34rem] w-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </AnimatedItem>
  </motion.div>
);

export default LandingPage;
