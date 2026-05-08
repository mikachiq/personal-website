import { useEffect, useMemo, useState, type HTMLAttributes } from 'react';
import { AnimatePresence, motion, useReducedMotion, type Transition } from 'motion/react';

interface RotatingTextProps extends HTMLAttributes<HTMLSpanElement> {
  texts: string[];
  rotationInterval?: number;
  transition?: Transition;
  mainClassName?: string;
  splitLevelClassName?: string;
  elementLevelClassName?: string;
}

const RotatingText = ({
  texts,
  rotationInterval = 2400,
  transition = { type: 'spring', damping: 24, stiffness: 280 },
  mainClassName = '',
  splitLevelClassName = '',
  elementLevelClassName = '',
  ...rest
}: RotatingTextProps) => {
  const [index, setIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const activeText = texts[index] ?? '';

  const characters = useMemo(() => Array.from(activeText), [activeText]);
  const longestText = useMemo(
    () => texts.reduce((longest, text) => (text.length > longest.length ? text : longest), ''),
    [texts],
  );

  useEffect(() => {
    if (texts.length <= 1 || shouldReduceMotion) return;

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % texts.length);
    }, rotationInterval);

    return () => window.clearInterval(id);
  }, [rotationInterval, shouldReduceMotion, texts.length]);

  return (
    <span
      className={`relative inline-grid overflow-hidden align-bottom ${mainClassName}`.trim()}
      aria-live="polite"
      {...rest}
    >
      <span className="invisible col-start-1 row-start-1 whitespace-nowrap" aria-hidden="true">
        {longestText}
      </span>

      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={activeText}
          className={`col-start-1 row-start-1 inline-flex whitespace-nowrap ${splitLevelClassName}`.trim()}
          aria-label={activeText}
          initial={shouldReduceMotion ? false : { y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={shouldReduceMotion ? undefined : { y: '-110%', opacity: 0 }}
          transition={transition}
        >
          {characters.map((character, characterIndex) => (
            <motion.span
              key={`${activeText}-${characterIndex}`}
              className={elementLevelClassName}
              aria-hidden="true"
              initial={shouldReduceMotion ? false : { y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                ...transition,
                delay: shouldReduceMotion ? 0 : characterIndex * 0.018,
              }}
            >
              {character === ' ' ? '\u00a0' : character}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default RotatingText;
