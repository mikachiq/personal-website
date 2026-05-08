import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Section } from '../types';

const Navbar = ({ activeSection, onSectionChange }: { activeSection: Section; onSectionChange: (s: Section) => void }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: Section; label: string }[] = [
    { id: 'about', label: 'About Me' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'resume', label: 'Resume' },
  ];

  const handleNavClick = (section: Section) => {
    setMobileMenuOpen(false);
    onSectionChange(section);
  };

  return (
    <nav id="site-nav" className="fixed top-5 md:top-10 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.5rem)] max-w-7xl">
      <div className="relative flex items-center justify-between gap-4 md:justify-center md:gap-6">
        <button
          onClick={() => handleNavClick('home')}
          className="w-14 h-14 md:absolute md:left-0 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-brand-accent shadow-lg transition-transform hover:scale-110 active:scale-95 touch-manipulation"
        >
          <img src="/assets/grad.png" alt="Avatar" className="w-full h-full object-cover" />
        </button>

        <div className="nav-glass hidden md:flex rounded-full p-2 items-center gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-5 py-3 rounded-full text-action transition-all duration-300 active:scale-95 touch-manipulation ${
                activeSection === item.id
                  ? 'bg-white/24 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.34),0_10px_24px_rgba(5,18,34,0.24)]'
                  : 'text-brand-cream hover:bg-white/10'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
          className="md:hidden w-14 h-14 rounded-full bg-brand-accent/20 backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-2xl text-brand-cream transition-transform active:scale-95 touch-manipulation"
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-4 bg-brand-accent/20 backdrop-blur-xl border border-white/10 rounded-3xl p-3 shadow-2xl"
          >
            <div className="grid grid-cols-2 gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`min-h-14 rounded-2xl px-4 py-4 text-action transition-all duration-300 active:scale-95 touch-manipulation ${
                    activeSection === item.id
                      ? 'bg-brand-accent text-white shadow-lg'
                      : 'text-brand-cream bg-white/5 hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
