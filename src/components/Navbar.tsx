import React, { useState, useEffect } from 'react';
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
  ];

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [activeSection]);

  return (
    <nav className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.5rem)] max-w-7xl">
      <div className="flex items-center justify-between gap-3 md:gap-4">
        <div className="flex items-center gap-3 md:gap-4">
          <button
            onClick={() => onSectionChange('home')}
            className="w-12 h-12 rounded-full overflow-hidden border-2 border-brand-accent shadow-lg transition-transform hover:scale-110 active:scale-95 touch-manipulation"
          >
            <img src="/assets/ICON.webp" alt="Avatar" className="w-full h-full object-cover" />
          </button>

          <div className="hidden md:flex bg-brand-accent/20 backdrop-blur-xl border border-white/10 rounded-full p-1.5 items-center gap-1 shadow-2xl">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 active:scale-95 touch-manipulation ${
                  activeSection === item.id
                    ? 'bg-brand-accent text-white shadow-lg'
                    : 'text-brand-cream/70 hover:text-brand-cream hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
          className="md:hidden w-12 h-12 rounded-full bg-brand-accent/20 backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-2xl text-brand-cream transition-transform active:scale-95 touch-manipulation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-3 bg-brand-accent/20 backdrop-blur-xl border border-white/10 rounded-3xl p-2 shadow-2xl"
          >
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onSectionChange(item.id)}
                  className={`min-h-12 rounded-2xl px-3 py-3 text-sm font-bold transition-all duration-300 active:scale-95 touch-manipulation ${
                    activeSection === item.id
                      ? 'bg-brand-accent text-white shadow-lg'
                      : 'text-brand-cream/80 bg-white/5 hover:bg-white/10'
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
