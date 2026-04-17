/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { Section } from './types';
import Navbar from './components/Navbar';
import WaveBackground from './components/WaveBackground';
import LandingPage from './pages/LandingPage';
import AboutMe from './pages/AboutMe';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Certifications from './pages/Certifications';

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeSection]);

  return (
    <div className="selection:bg-brand-accent selection:text-white">
      <WaveBackground />
      {activeSection !== 'home' && (
        <Navbar activeSection={activeSection} onSectionChange={setActiveSection} />
      )}

      <main className="relative">
        <AnimatePresence mode="wait">
          {activeSection === 'home' && <LandingPage key="home" onNext={() => setActiveSection('about')} />}
          {activeSection === 'about' && <AboutMe key="about" />}
          {activeSection === 'education' && <Education key="education" />}
          {activeSection === 'experience' && <Experience key="experience" />}
          {activeSection === 'projects' && <Projects key="projects" />}
          {activeSection === 'skills' && <Skills key="skills" />}
          {activeSection === 'certifications' && <Certifications key="certifications" />}
        </AnimatePresence>
      </main>

      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-accent/5 rounded-full blur-[120px]" />
      </div>
    </div>
  );
}
