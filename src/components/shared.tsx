import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

export const pageVariants = {
  initial: { opacity: 0, x: 60 },
  animate: {
    opacity: 1, x: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const, staggerChildren: 0.1, delayChildren: 0.2 },
  },
  exit: {
    opacity: 0, x: -60,
    transition: { duration: 0.3, ease: [0.7, 0, 0.84, 0] as const },
  },
};

export const itemVariants = {
  initial: { opacity: 0, y: 40, clipPath: 'inset(100% 0% 0% 0%)' },
  animate: {
    opacity: 1, y: 0, clipPath: 'inset(0% 0% 0% 0%)',
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export const SectionWrapper = ({
  children,
  id,
  className = '',
  style,
}: {
  children: React.ReactNode;
  id: string;
  className?: string;
  style?: React.CSSProperties;
}) => (
  <motion.section
    key={id}
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    className={`section-wrapper pb-12 px-4 sm:px-6 max-w-7xl mx-auto ${className}`.trim()}
    style={style}
  >
    {children}
  </motion.section>
);

export const AnimatedItem = ({ children, className, key }: { children: React.ReactNode; className?: string; key?: React.Key }) => (
  <motion.div key={key} variants={itemVariants} className={className}>
    {children}
  </motion.div>
);

export const EduImageCarousel = ({ images, level, positions }: { images: string[]; level: string; positions?: string[] }) => {
  const [idx, setIdx] = useState(0);
  const [direction, setDirection] = useState(1);
  const next = () => {
    setDirection(1);
    setIdx((i) => (i + 1) % images.length);
  };
  return (
    <div className="relative aspect-square bg-brand-dark/30 rounded-3xl border border-white/5 overflow-hidden">
      <AnimatePresence initial={false} mode="wait">
        <motion.img
          key={idx}
          src={images[idx]}
          alt={level}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: positions?.[idx] ?? 'center center' }}
          initial={{ x: direction * 28, opacity: 0.6 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction * -28, opacity: 0, scale: 0.99 }}
          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] as const }}
        />
      </AnimatePresence>
      {images.length > 1 && (
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-white/75 hover:text-white text-control font-bold transition-colors"
        >
          ›
        </button>
      )}
    </div>
  );
};
