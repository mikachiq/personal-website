/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
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
import Resume from './pages/Resume';
import Footer from './components/Footer';
import PortfolioLoader from './components/PortfolioLoader';

const MIN_LOADER_TIME = 1800;
const LOADER_EXIT_TIME = 520;

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [isPortfolioReady, setIsPortfolioReady] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const sections: Section[] = ['home', 'about', 'education', 'experience', 'projects', 'skills', 'certifications', 'resume'];

    const handleScroll = () => {
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section: Section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(section);
    }
  };

  // keep scroll-padding-top in sync with actual navbar height across devices
  useEffect(() => {
    const nav = document.getElementById('site-nav');
    const setNavPadding = () => {
      if (!nav) return;
      const height = nav.getBoundingClientRect().height;
      // set CSS scroll-padding-top for anchor scrolling
      try {
        document.documentElement.style.scrollPaddingTop = `${height}px`;
      } catch (e) {
        // some environments may not allow direct style on documentElement
        document.documentElement.style.setProperty('scroll-padding-top', `${height}px`);
      }
      // also set CSS variable for in-app spacing
      document.documentElement.style.setProperty('--nav-height', `${height}px`);
    };

    setNavPadding();
    // update on resize and when nav contents change
    const ro = (window as any).ResizeObserver ? new (window as any).ResizeObserver(setNavPadding) : null;
    if (ro && nav) ro.observe(nav);
    window.addEventListener('resize', setNavPadding);

    return () => {
      if (ro && nav) ro.disconnect();
      window.removeEventListener('resize', setNavPadding);
    };
  }, []);

  useEffect(() => {
    let cancelled = false;
    let exitTimer: number | undefined;
    const startedAt = window.performance.now();

    document.body.classList.add('portfolio-loading');

    const waitForWindowLoad = new Promise<void>((resolve) => {
      if (document.readyState === 'complete') {
        resolve();
        return;
      }

      window.addEventListener('load', () => resolve(), { once: true });
    });

    const waitForFonts = document.fonts?.ready?.then(() => undefined).catch(() => undefined) ?? Promise.resolve();

    Promise.all([waitForWindowLoad, waitForFonts]).then(() => {
      const elapsed = window.performance.now() - startedAt;
      const remaining = Math.max(0, MIN_LOADER_TIME - elapsed);

      window.setTimeout(() => {
        if (cancelled) return;

        setIsPortfolioReady(true);
        document.body.classList.remove('portfolio-loading');
        exitTimer = window.setTimeout(() => {
          if (!cancelled) setShowLoader(false);
        }, LOADER_EXIT_TIME);
      }, remaining);
    });

    return () => {
      cancelled = true;
      document.body.classList.remove('portfolio-loading');
      if (exitTimer) window.clearTimeout(exitTimer);
    };
  }, []);

  return (
    <div className="selection:bg-brand-accent selection:text-white">
      {showLoader && <PortfolioLoader isLeaving={isPortfolioReady} />}
      <WaveBackground />
      <Navbar activeSection={activeSection} onSectionChange={handleNavClick} />

      <main className="relative text-body pb-20 md:pb-28" style={{ paddingTop: 'var(--nav-height, 56px)' }}>
        <section id="home">
          <LandingPage onNext={() => handleNavClick('about')} />
        </section>
        <section id="about">
          <AboutMe />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="certifications">
          <Certifications />
        </section>
        <section id="resume">
          <Resume />
        </section>
      </main>

      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-accent/5 rounded-full blur-[120px]" />
      </div>
      <Footer />
    </div>
  );
}
