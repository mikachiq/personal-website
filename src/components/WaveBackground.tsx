import { motion } from 'motion/react';

const WaveBackground = () => (
  <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none opacity-20">
    <motion.div
      animate={{ x: [0, -1000, 0] }}
      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      className="absolute bottom-0 left-0 w-[200%] h-[40%] flex"
    >
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-brand-accent/20">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113,-1.11,1200,0V120H0Z" />
      </svg>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-brand-accent/20">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113,-1.11,1200,0V120H0Z" />
      </svg>
    </motion.div>

    <motion.div
      animate={{ x: [-1000, 0, -1000] }}
      transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      className="absolute bottom-0 left-0 w-[200%] h-[35%] flex opacity-50"
    >
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-brand-accent/30">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113,-1.11,1200,0V120H0Z" />
      </svg>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-brand-accent/30">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113,-1.11,1200,0V120H0Z" />
      </svg>
    </motion.div>
  </div>
);

export default WaveBackground;
