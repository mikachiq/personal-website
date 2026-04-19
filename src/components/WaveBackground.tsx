import { motion } from 'motion/react';

const WaveBackground = () => (
  <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none opacity-20">
    <motion.div
      animate={{ x: [0, -1000, 0] }}
      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      className="absolute bottom-0 left-0 w-[200%] h-[40%] flex"
    >
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-brand-accent/20">
        <path d="M0,120 V65 C300,10 600,110 900,45 C1050,10 1130,55 1200,50 V120 Z" />
      </svg>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-brand-accent/20">
        <path d="M0,120 V65 C300,10 600,110 900,45 C1050,10 1130,55 1200,50 V120 Z" />
      </svg>
    </motion.div>

    <motion.div
      animate={{ x: [-1000, 0, -1000] }}
      transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      className="absolute bottom-0 left-0 w-[200%] h-[35%] flex opacity-50"
    >
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-brand-accent/30">
        <path d="M0,120 V75 C250,20 550,115 850,55 C1000,25 1120,65 1200,60 V120 Z" />
      </svg>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-brand-accent/30">
        <path d="M0,120 V75 C250,20 550,115 850,55 C1000,25 1120,65 1200,60 V120 Z" />
      </svg>
    </motion.div>
  </div>
);

export default WaveBackground;
