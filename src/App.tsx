/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Menu,
  X,
  GraduationCap, 
  Briefcase, 
  Code2, 
  Award, 
  User,
  ExternalLink,
  Triangle
} from 'lucide-react';

// --- Types ---

type Section = 'home' | 'about' | 'education' | 'experience' | 'projects' | 'skills' | 'certifications';

interface HomeProps {
  onNext: () => void;
  key?: string;
}

// --- Components ---

const Navbar = ({ activeSection, onSectionChange }: { activeSection: Section, onSectionChange: (s: Section) => void }) => {
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
            <img
              src="/assets/ICON.webp"
              alt="Avatar"
              className="w-full h-full object-cover"
            />
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

const pageVariants = {
  initial: {
    opacity: 0,
    x: 100,
    skewX: -5,
  },
  animate: {
    opacity: 1,
    x: 0,
    skewX: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    x: -100,
    skewX: 5,
    transition: {
      duration: 0.5,
      ease: [0.7, 0, 0.84, 0] as const,
    },
  },
};

const itemVariants = {
  initial: { 
    opacity: 0, 
    y: 40,
    clipPath: 'inset(100% 0% 0% 0%)'
  },
  animate: { 
    opacity: 1, 
    y: 0,
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const
    }
  },
};

const SectionWrapper = ({ children, id }: { children: React.ReactNode; id: string }) => (
  <motion.section
    key={id}
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="pt-28 md:pt-32 pb-12 px-4 sm:px-6 max-w-7xl mx-auto"
  >
    {children}
  </motion.section>
);

const AnimatedItem = ({ children, className, key }: { children: React.ReactNode; className?: string; key?: React.Key }) => (
  <motion.div key={key} variants={itemVariants} className={className}>
    {children}
  </motion.div>
);

// --- Sections ---

const Home = ({ onNext }: HomeProps) => (
  <motion.div 
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="min-h-[100svh] flex flex-col justify-center items-center md:items-start gap-8 md:gap-10 px-4 sm:px-6 max-w-7xl mx-auto text-center md:text-left"
  >
    <AnimatedItem className="space-y-4 max-w-4xl">
      <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95]">
        Hi, I'm <span className="text-brand-cream">Atilla Hadrian Castrodes</span>
      </h1>
      <p className="text-lg sm:text-xl md:text-3xl text-brand-cream/80 font-light leading-relaxed">
        Systems Architect | AI & Automation Practitioner
      </p>
    </AnimatedItem>

    <AnimatedItem className="w-full flex justify-center md:justify-start">
      <div className="flex flex-wrap items-stretch justify-center gap-3 bg-[#d1d5db] rounded-2xl p-3 sm:p-2 sm:pr-6 shadow-xl">
        <a
          href="https://www.linkedin.com/in/atilla-castrodes-bb2151295/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn profile"
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center transition-transform active:scale-95 hover:scale-105 touch-manipulation"
        >
          <img
            src="/assets/icons/linkedin.webp"
            alt="LinkedIn"
            className="w-full h-full object-contain"
          />
        </a>

        <a
          href="https://discord.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Discord profile"
          className="flex flex-col items-center justify-center w-24 sm:w-28 rounded-xl px-2 py-1 transition-transform active:scale-95 hover:scale-105 touch-manipulation"
        >
          <img
            src="/assets/icons/discord.png"
            alt="Discord"
            className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
          />
          <span className="mt-0.5 text-[10px] font-bold text-black leading-none whitespace-nowrap">mikachiq#2706</span>
        </a>

        <a
          href="https://github.com/mikachiq"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub profile"
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center transition-transform active:scale-95 hover:scale-105 touch-manipulation"
        >
          <img
            src="/assets/icons/github.png"
            alt="GitHub"
            className="w-full h-full object-contain"
          />
        </a>
      </div>
    </AnimatedItem>

    <AnimatedItem>
      <button 
        onClick={onNext}
        className="btn-primary text-lg sm:text-xl md:text-2xl group w-full sm:w-auto justify-center active:scale-[0.98] touch-manipulation"
      >
        <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 group-hover:translate-x-2 transition-transform" />
        Get to know me
        <div className="btn-accent-blob" />
      </button>
    </AnimatedItem>

    <AnimatedItem className="mt-8 md:mt-12 space-y-2 max-w-xl">
      <p className="text-sm sm:text-base opacity-60">Check out my gaming portfolio if you are a gacha nerd like me :P</p>
      <a href="#" className="flex items-center gap-2 text-brand-accent hover:underline">
        <Triangle className="w-4 h-4 fill-current" />
        link here
      </a>
    </AnimatedItem>
  </motion.div>
);

const AboutMe = () => {
  const [photoIdx, setPhotoIdx] = useState(0);
  const photos = [
    { src: "/assets/aboutmepicture1.jpg", position: "50% 40%" },
    { src: "/assets/me.jpg", position: "center 20%" },
  ];
  const funFacts: { label: string; image?: string; position?: string; minH?: string }[] = [
    { label: "I used to do competitive speedcubing", image: "/assets/WCA.png", position: "center 35%" },
    { label: "I do cosplay", image: "/assets/cosplay.jpg", position: "center 30%", minH: "150px" },
    { label: "I go to the gym 5x a week", image: "/assets/gym.jpg", position: "center 55%" },
    { label: "I have a collection of figurines", image: "/assets/collection.jpg" },
    { label: "I love animals", image: "/assets/cats.jpeg" },
  ];

  const duplicatedFacts = [...funFacts, ...funFacts, ...funFacts];

  return (
    <SectionWrapper id="about">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-stretch">
        <AnimatedItem className="md:col-span-3 space-y-6">
          <div className="aspect-[4/3] sm:aspect-video bg-brand-dark/30 rounded-3xl border border-white/5 overflow-hidden shadow-2xl relative">
            <img
              key={photoIdx}
              src={photos[photoIdx].src}
              alt="About me"
              className="w-full h-full object-cover opacity-60 transition-opacity duration-300"
              style={{ objectPosition: photos[photoIdx].position }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/55 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
               <div className="bg-brand-accent/40 backdrop-blur-md px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl border border-white/10 inline-block italic text-xs sm:text-sm">
                  I automate what slows you down
               </div>
            </div>
            <button
              onClick={() => setPhotoIdx((i) => (i + 1) % photos.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/75 hover:text-white text-2xl font-bold transition-colors"
            >
              ›
            </button>
          </div>
        </AnimatedItem>
        
        <AnimatedItem className="glass-card p-10 md:p-12 space-y-6 md:col-span-2">
          <h2 className="text-3xl font-bold leading-tight">Atilla Hadrian Castrodes</h2>
          <div className="space-y-5 text-brand-cream/80 leading-relaxed text-[1.05rem]">
            <p>
              I studied BSIT at UCLM and found my calling in making things work on their own. 
              Now I design automation systems and AI integrations that do the heavy lifting so people don't have to.
            </p>
            <p>
              My stronghold is definitely system architecture and frontend design, with a bit of database queries.
            </p>
          </div>
        </AnimatedItem>
      </div>

      <div className="mt-4 space-y-4 overflow-hidden">
        <AnimatedItem>
          <h3 className="text-xl font-bold uppercase tracking-widest opacity-60">Fun Facts About Me</h3>
        </AnimatedItem>
        
        <AnimatedItem className="relative w-full flex">
          <motion.div
            className="flex gap-4 whitespace-nowrap"
            animate={{
              x: ["0%", "-33.333333%"],
            }}
            transition={{
              ease: "linear",
              duration: 15,
              repeat: Infinity,
            }}
          >
            {duplicatedFacts.map((fact, i) => (
              <div
                key={i}
                style={{ minHeight: fact.minH ?? (fact.image ? '105px' : undefined) }}
                className={`relative group border border-white/5 rounded-2xl text-center overflow-hidden min-w-[190px] sm:min-w-[250px] md:min-w-[300px] ${
                  fact.image ? 'p-4 sm:p-6' : 'bg-brand-dark/30 hover:bg-brand-dark/50 transition-colors p-4 sm:p-6'
                }`}
              >
                {fact.image ? (
                  <>
                    <img src={fact.image} alt={fact.label} className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: fact.position ?? 'center' }} />
                    <div className="absolute inset-0 bg-brand-deep/40" />
                    <span className="absolute inset-0 z-10 flex items-center justify-center text-sm font-medium px-4">{fact.label}</span>
                  </>
                ) : (
                  <span className="text-sm font-medium">{fact.label}</span>
                )}
              </div>
            ))}
          </motion.div>
        </AnimatedItem>
      </div>
    </SectionWrapper>
  );
};

const EduImageCarousel = ({ images, level, positions }: { images: string[]; level: string; positions?: string[] }) => {
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((i) => (i + 1) % images.length);
  return (
    <div className="relative aspect-square bg-brand-dark/30 rounded-3xl border border-white/5 overflow-hidden">
      <img src={images[idx]} alt={level} className="w-full h-full object-cover transition-opacity duration-300" style={{ objectPosition: positions?.[idx] ?? 'center' }} />
      {images.length > 1 && (
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-white/75 hover:text-white text-2xl font-bold transition-colors"
        >
          ›
        </button>
      )}
    </div>
  );
};

const Education = () => {
  const education = [
    {
      level: "Elementary",
      schools: [
        { name: "Saint Alphonsus Catholic School", years: "2010-2015" },
        { name: "Saint Dominic Savio International School", years: "2015-2016" }
      ],
      achievements: ["Poem writing winner", "Won multiple art related contests"],
      images: ["/assets/education/elem1.jpg", "/assets/education/elem2.jpg"] as string[]
    },
    {
      level: "Junior High School",
      track: "Human and Computer Interaction",
      schools: [{ name: "Saint Dominic Savio International School", years: "2016-2020" }],
      achievements: ["With Honors", "Journalism club president", "Impromptu Speech champion", "Leadership training"],
      images: [] as string[]
    },
    {
      level: "Senior High School",
      track: "STEM",
      schools: [{ name: "Saint Dominic Savio International School", years: "2020-2022" }],
      achievements: ["With Honors", "Best in General Chemistry, Statistics & Probability, and PerDev", "Top 5 STEM graduate", "Math tutor as my immersion"],
      images: ["/assets/education/SHS1.jpg", "/assets/education/SHS2.jpg", "/assets/education/SHS3.jpg"],
      positions: ["center 15%", "center", "center"]
    },
    {
      level: "College",
      course: "Bachelor of Science in Information Technology",
      schools: [{ name: "University of Cebu, Lapu-Lapu and Mandaue", years: "2022-2026" }],
      achievements: ["Dean's Lister", "Cisco certifications", "PHP and DB tutorials, and ICT congress programs attendee", "Top 10 Capstone Projects"],
      images: ["/assets/education/collegefront.jpg", "/assets/education/college1.jpeg",]
    }
  ];

  return (
    <SectionWrapper id="education">
      <div className="space-y-12">
        {education.map((edu, i) => (
          <AnimatedItem key={i} className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
            {edu.images.length > 0
              ? <EduImageCarousel images={edu.images} level={edu.level} positions={(edu as any).positions} />
              : <div className="aspect-square bg-brand-dark/30 rounded-3xl border border-white/5 flex items-center justify-center">
                  <GraduationCap className="w-16 h-16 text-brand-accent opacity-40" />
                </div>
            }
            <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <h3 className="text-3xl font-bold">{edu.level}</h3>
                {edu.track && <p className="text-xs font-bold opacity-60">Track: {edu.track}</p>}
                {edu.course && <p className="text-xs font-bold opacity-60">Course: {edu.course}</p>}
                <ul className="space-y-1 mt-4">
                  {edu.achievements.map((ach, j) => (
                    <li key={j} className="text-sm opacity-80 flex items-start gap-2">
                      <span className="text-brand-accent mt-1">›</span>
                      {ach}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-right md:text-left space-y-2">
                {edu.schools.map((school, j) => (
                  <div key={j} className="space-y-1">
                    <p className="font-bold text-sm">{school.name} ({school.years})</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedItem>
        ))}
      </div>
    </SectionWrapper>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Game Tester at Railings University / PIF Nation",
      period: "July 2022 - September 2022",
      bullets: [
        "Identified and reported bugs in pre-release games, improving user experience",
        "Collaborated with teams to suggest enhancements and ensure game quality"
      ]
    },
    {
      title: "Barista at Hola Coffe, Southern Belle Bars",
      period: "August 2025 - October 2025",
      bullets: [
        "Prepared and served specialty coffee, espresso drinks, and other beverages to customers",
        "Operated the cash register, processed payments, and handled daily cash reconciliation",
        "Managed inventory tracking and restocking of supplies to ensure smooth daily operations"
      ],
      images: ["/assets/job/hola.jpg", "/assets/job/hola2.jpg"]
    },
    {
      title: "Website Developer intern at Lifewood Data Technology",
      period: "January 2026 - May 2026 (540 hours)",
      bullets: [
        "Designed system architecture, database structures, and user flows for internal tools",
        "Created websites and AI agents to support internal company operations",
        "Crawled and compiled datasets for AI development",
        "Researched existing AI tools such as OpenClaws & LLMs for internal integration and workflow optimization"
      ]
    },
    {
      title: "Game Boosting Specialist (Freelance)",
      period: "March 2023 - Present",
      bullets: [
        "Fulfilled client requests for in-game resource farming, item acquisition, and account progression",
        "Adapted across multiple game titles and service types based on client needs",
        "Maintained clear and consistent communication with clients from start to delivery",
        "Ensured strict confidentiality of client account credentials, in-game currency, and inventory",
        "Provided real-time progress updates to keep clients informed throughout each task"
      ]
    }
  ];

  return (
    <SectionWrapper id="experience">
      <AnimatedItem>
        <h2 className="text-4xl font-bold text-right mb-12 uppercase tracking-tighter">Job Experience Across All Fields</h2>
      </AnimatedItem>
      <div className="space-y-12">
        {experiences.map((exp, i) => (
          <AnimatedItem key={i} className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {exp.images?.length
              ? <EduImageCarousel images={exp.images} level={exp.title} />
              : <div className="aspect-square bg-brand-dark/30 rounded-3xl border border-white/5 flex items-center justify-center">
                  <Briefcase className="w-16 h-16 text-brand-accent opacity-40" />
                </div>
            }
            <div className="md:col-span-3 space-y-4">
              <div className="space-y-1">
                <h3 className="text-2xl font-bold">{exp.title}</h3>
                <p className="italic text-sm opacity-60 font-medium">{exp.period}</p>
              </div>
              <ul className="space-y-2">
                {exp.bullets.map((bullet, j) => (
                  <li key={j} className="text-sm opacity-80 flex items-start gap-2">
                    <span className="text-brand-accent mt-1">•</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedItem>
        ))}
      </div>
    </SectionWrapper>
  );
};

const Projects = () => (
  <SectionWrapper id="projects">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <AnimatedItem className="aspect-[3/4] bg-brand-dark/30 rounded-3xl border border-white/5 flex items-center justify-center shadow-2xl">
        <Code2 className="w-24 h-24 text-brand-accent opacity-20" />
      </AnimatedItem>
      <AnimatedItem className="md:col-span-3 space-y-8">
        <div className="space-y-2">
          <h3 className="text-3xl font-bold leading-tight">
            EDUMATCH: A machine learning-based recommendation system for tertiary school selection
          </h3>
          <p className="italic text-lg opacity-60 font-medium">Capstone Project | Project Manager</p>
        </div>
        <div className="space-y-4 text-lg opacity-80 leading-relaxed">
          <p>
            • A machine learning-based recommendation system that suggests universities to users based on their location, 
            budget, preferred course, available university facilities, and accreditation level. Built the AI model and 
            datasets from scratch. Led internal team workflows and external processes.
          </p>
        </div>
      </AnimatedItem>
    </div>
  </SectionWrapper>
);

const Skills = () => {
  const skillGroups = [
    {
      title: "Technical Skills:",
      skills: ["HTML & CSS", "Node.js", "JavaScript", "React", "Python", "Supabase", "REST APIs"]
    },
    {
      title: "AI Tools:",
      skills: ["Google AI Studio", "NotebookLM", "HeyGen", "LLM API integration", "Prompt Engineering", "LLMs", "AI Code assistants"]
    },
    {
      title: "Soft and Evaluation Skills:",
      skills: [
        "Systems Architecture Design",
        "Database Schema Design",
        "UI/UX Design",
        "User Flow Mapping",
        "Wireframing (Figma)",
        "Mind Mapping (MindManager)",
        "System Diagramming (Lucidchart, Draw.io, Excalidraw)"
      ]
    }
  ];

  return (
    <SectionWrapper id="skills">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="space-y-12">
          {skillGroups.slice(0, 2).map((group, i) => (
            <div key={i} className="space-y-6">
              <AnimatedItem>
                <h3 className="text-4xl font-bold uppercase tracking-tight">{group.title}</h3>
              </AnimatedItem>
              <ul className="space-y-2">
                {group.skills.map((skill, j) => (
                  <AnimatedItem key={j} className="text-lg opacity-80 flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
                    {skill}
                  </AnimatedItem>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="space-y-6">
          <AnimatedItem>
            <h3 className="text-4xl font-bold uppercase tracking-tight">{skillGroups[2].title}</h3>
          </AnimatedItem>
          <ul className="space-y-2">
            {skillGroups[2].skills.map((skill, j) => (
              <AnimatedItem key={j} className="text-lg opacity-80 flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
                {skill}
              </AnimatedItem>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
};

const PdfPreview = ({ src, title }: { src: string; title: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState<{ w: number; h: number }>({ w: 0, h: 0 });
  const [pageRatio, setPageRatio] = useState<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const measure = (el: Element) => {
      setContainerSize({ w: (el as HTMLElement).clientWidth, h: (el as HTMLElement).clientHeight });
    };
    const observer = new ResizeObserver(([entry]) => {
      setContainerSize({ w: entry.contentRect.width, h: entry.contentRect.height });
    });
    observer.observe(containerRef.current);
    measure(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Fit the page inside the container without cropping
  const renderWidth = (() => {
    const { w, h } = containerSize;
    if (!w || !h) return 0;
    if (!pageRatio) return w;
    // pageRatio = page width / page height
    const widthFromHeight = h * pageRatio;
    return Math.min(w, widthFromHeight);
  })();

  return (
    <div ref={containerRef} className="w-full h-full flex items-center justify-center bg-[#D9D9D9]">
      {containerSize.w > 0 && (
        <Document file={src} loading={null} error={<span className="text-xs text-red-400">Failed to load PDF</span>}>
          <Page
            pageNumber={1}
            width={renderWidth || undefined}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            onLoadSuccess={(page) => setPageRatio(page.width / page.height)}
          />
        </Document>
      )}
    </div>
  );
};

const Certifications = () => {
  const certs = [
    {
      src: "/assets/certificates/CCNA%20cert.jpeg",
      type: "image" as const,
      title: "CCNA certificate",
      text: "Completed CCNAv7: Switching, Routing, and Wireless Essentials through the Cisco Networking Academy. Covers network configuration, switching operations, wireless LAN setup, and LAN security fundamentals."
    },
    {
      src: "/assets/certificates/CCNA%20badge.jpg",
      type: "image" as const,
      title: "CCNA badge",
      text: "Cisco-verified badge for completing the CCNA: Switching, Routing, and Wireless Essentials course. Demonstrated foundation in switching operations, wired and wireless LAN configuration, security best practices, and redundancy protocols. Completed 45 practice activities and 21 hours of hands-on labs using Cisco Packet Tracer."
    },
    {
      src: "/assets/certificates/DB2025.pdf",
      type: "pdf" as const,
      title: "Database Programming certificate",
      text: "Participated in the TECH Talk: Database Programming during College Days 2025 at the University of Cebu - Lapu-Lapu and Mandaue. Gained deeper understanding of database programming fundamentals including query design and data management practices."
    },
    {
      src: "/assets/certificates/ICT2025.pdf",
      type: "pdf" as const,
      title: "UC ICT Congress certificate",
      text: "Recognized for outstanding contribution during the 11th UC ICT Congress 2025 with the theme \"AI Powered-ICT: Shaping the Future with Responsibility,\" held at SM Seaside Sky Hall, Cebu. Gained exposure to new tech integrations and software projects showcased by peers across UC campuses beyond UCLM."
    }
  ];

  return (
    <SectionWrapper id="certifications">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
        {certs.map((cert, i) => (
          <AnimatedItem key={i} className={`flex flex-col gap-6 ${i % 2 !== 0 ? 'md:mt-24' : ''}`}>
            <div className="glass-card p-4">
              <div className="block aspect-video rounded-xl overflow-hidden relative">
                {cert.type === 'pdf' ? (
                  <PdfPreview src={cert.src} title={cert.title} />
                ) : (
                  <img
                    src={cert.src}
                    alt={cert.title}
                    className="w-full h-full object-contain bg-[#D9D9D9]"
                  />
                )}
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed font-medium">
              {cert.text}
            </p>
          </AnimatedItem>
        ))}
      </div>
    </SectionWrapper>
  );
};

const WaveBackground = () => (
  <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none opacity-20">
    <motion.div
      animate={{
        x: [0, -1000, 0],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }}
      className="absolute bottom-0 left-0 w-[200%] h-[40%] flex"
    >
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-brand-accent/20">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113,-1.11,1200,0V120H0Z"></path>
      </svg>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-brand-accent/20">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113,-1.11,1200,0V120H0Z"></path>
      </svg>
    </motion.div>
    
    <motion.div
      animate={{
        x: [-1000, 0, -1000],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "linear"
      }}
      className="absolute bottom-0 left-0 w-[200%] h-[35%] flex opacity-50"
    >
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-brand-accent/30">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113,-1.11,1200,0V120H0Z"></path>
      </svg>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-brand-accent/30">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113,-1.11,1200,0V120H0Z"></path>
      </svg>
    </motion.div>
  </div>
);

// --- Main App ---

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');

  // Handle scroll to top when section changes
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
          {activeSection === 'home' && <Home key="home" onNext={() => setActiveSection('about')} />}
          {activeSection === 'about' && <AboutMe key="about" />}
          {activeSection === 'education' && <Education key="education" />}
          {activeSection === 'experience' && <Experience key="experience" />}
          {activeSection === 'projects' && <Projects key="projects" />}
          {activeSection === 'skills' && <Skills key="skills" />}
          {activeSection === 'certifications' && <Certifications key="certifications" />}
        </AnimatePresence>
      </main>

      {/* Background Decorative Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-accent/5 rounded-full blur-[120px]" />
      </div>
    </div>
  );
}
