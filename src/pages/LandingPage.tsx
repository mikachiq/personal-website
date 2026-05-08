import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { AnimatedItem, pageVariants } from '../components/shared';
import { HomeProps } from '../types';
import { useEffect, useState } from 'react';
import RotatingText from '../components/RotatingText';
import GlassIcons, { type GlassIconItem } from '../components/GlassIcons';

const Typewriter = ({
  prefix,
  animatedText,
  speed = 60,
}: {
  prefix: string;
  animatedText: string;
  speed?: number;
}) => {
  const text = `${prefix}${animatedText}`;
  const [display, setDisplay] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const visiblePrefix = display.slice(0, prefix.length);
  const visibleName = display.slice(prefix.length);

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
      <span className="typewriter-text text-brand-cream">{visiblePrefix}</span>
      <span className="typewriter-text hero-name-shadows">{visibleName}</span>
      <span className={`typewriter-caret ${isComplete ? 'typewriter-caret-complete' : ''}`}>&nbsp;</span>
    </span>
  );
};

const socialItems: GlassIconItem[] = [
  {
    label: 'LinkedIn profile',
    href: 'https://www.linkedin.com/in/atilla-hadrian-castrodes-bb2151295/',
    caption: 'Atilla Hadrian Castrodes',
    icon: <img src="/assets/icons/linkedin.webp" alt="" className="h-9 w-9 object-contain" />,
  },
  {
    label: 'Discord profile: mikachiq#2706',
    href: 'https://discord.com/',
    caption: 'mikachiq#2706',
    icon: <img src="/assets/icons/discord.png" alt="" className="h-9 w-9 object-contain" />,
  },
  {
    label: 'GitHub profile',
    href: 'https://github.com/mikachiq',
    caption: 'mikachiq',
    icon: <img src="/assets/icons/github.png" alt="" className="h-9 w-9 object-contain" />,
  },
];

const LandingPage = ({ onNext }: HomeProps) => (
  <motion.div
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="hero-page hero-showcase relative grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(30rem,38rem)] items-center lg:items-stretch gap-8 lg:gap-10 px-4 sm:px-6 max-w-7xl mx-auto text-center md:text-left pt-16 sm:pt-20 md:pt-28 pb-10 md:pb-16"
  >
    <div className="relative z-10 flex h-full flex-col items-center md:items-start gap-6 md:gap-8 lg:pt-10 xl:pt-14">
      <AnimatedItem className="space-y-4 max-w-none">
        <h1 className="text-display hero-title">
          <Typewriter prefix="Hi, I'm " animatedText="Atilla Hadrian Castrodes" />
        </h1>
        <p className="hero-subtitle text-body-lg text-white font-bold">
          <RotatingText
            texts={['Systems Architect', 'AI & Automation Practitioner']}
            rotationInterval={2600}
            mainClassName="text-white"
            elementLevelClassName="inline-block"
          />
        </p>
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

      <AnimatedItem className="social-links-reveal w-full flex justify-center md:justify-start lg:hidden">
        <GlassIcons items={socialItems} />
      </AnimatedItem>

      <div className="hidden md:block min-h-[0.25rem]" aria-hidden="true" />
    </div>

    <AnimatedItem className="social-links-reveal relative z-10 hidden lg:flex w-full items-center justify-end gap-5 lg:pt-10 xl:pt-14">
      <div className="relative z-30 shrink-0 overflow-visible">
        <GlassIcons items={socialItems} />
      </div>
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
