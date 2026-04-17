import { Briefcase } from 'lucide-react';
import { SectionWrapper, AnimatedItem, EduImageCarousel } from '../components/shared';

const Experience = () => {
  const experiences = [
    {
      title: 'Game Tester at Railings University / PIF Nation',
      period: 'July 2022 - September 2022',
      bullets: [
        'Identified and reported bugs in pre-release games, improving user experience',
        'Collaborated with teams to suggest enhancements and ensure game quality',
      ],
    },
    {
      title: 'Barista at Hola Coffe, Southern Belle Bars',
      period: 'August 2025 - October 2025',
      bullets: [
        'Prepared and served specialty coffee, espresso drinks, and other beverages to customers',
        'Operated the cash register, processed payments, and handled daily cash reconciliation',
        'Managed inventory tracking and restocking of supplies to ensure smooth daily operations',
      ],
      images: ['/assets/job/hola.jpg', '/assets/job/hola3.jpg'],
    },
    {
      title: 'Website Developer intern at Lifewood Data Technology',
      period: 'January 2026 - May 2026 (540 hours)',
      bullets: [
        'Designed system architecture, database structures, and user flows for internal tools',
        'Created websites and AI agents to support internal company operations',
        'Crawled and compiled datasets for AI development',
        'Researched existing AI tools such as OpenClaws & LLMs for internal integration and workflow optimization',
      ],
    },
    {
      title: 'Game Boosting Specialist (Freelance)',
      period: 'March 2023 - Present',
      bullets: [
        'Fulfilled client requests for in-game resource farming, item acquisition, and account progression',
        'Adapted across multiple game titles and service types based on client needs',
        'Maintained clear and consistent communication with clients from start to delivery',
        'Ensured strict confidentiality of client account credentials, in-game currency, and inventory',
        'Provided real-time progress updates to keep clients informed throughout each task',
      ],
    },
  ];

  return (
    <SectionWrapper id="experience">
      <AnimatedItem>
        <h2 className="text-4xl font-bold text-right mb-12 uppercase tracking-tighter">Job Experience Across All Fields</h2>
      </AnimatedItem>
      <div className="space-y-12">
        {experiences.map((exp, i) => (
          <AnimatedItem key={i} className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {(exp as any).images?.length
              ? <EduImageCarousel images={(exp as any).images} level={exp.title} />
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

export default Experience;
