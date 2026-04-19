import { GraduationCap } from 'lucide-react';
import { SectionWrapper, AnimatedItem, EduImageCarousel } from '../components/shared';

const Education = () => {
  const education = [
    {
      level: 'College',
      course: 'Bachelor of Science in Information Technology',
      schools: [{ name: 'University of Cebu, Lapu-Lapu and Mandaue', years: '2022-2026' }],
      achievements: ["Dean's Lister (2022-2026)", 'Cisco certifications', 'Tech Talks and ICT congress programs attendee', 'Part in the Top 10 Capstone Projects in our batch', 'PSITS Treaurer (2023)'],
      images: ['/assets/education/collegefront.jpg', '/assets/education/college1.jpeg'],
    },
    {
      level: 'Senior High School',
      track: 'STEM',
      schools: [{ name: 'Saint Dominic Savio International School', years: '2020-2022' }],
      achievements: ['With Honors throughout Grade 11 & 12', 'Best in General Chemistry, Statistics & Probability, and PerDev', 'Top 5 STEM graduate', 'Math tutor to elementary pupils as my immersion'],
      images: ['/assets/education/SHS1.jpg', '/assets/education/SHS2.jpg', '/assets/education/SHS3.jpg'],
      positions: ['center 15%', 'center', 'center'],
    },
    {
      level: 'Junior High School',
      track: 'Human and Computer Interaction',
      schools: [{ name: 'Saint Dominic Savio International School', years: '2016-2020' }],
      achievements: ['With Honors (2016-2020)', 'Journalism club president', 'Impromptu Speech champion', 'Leadership training (2016-2020)', 'Won and placed in multiple sports-related competitions'],
      images: ['/assets/education/JHS1.jpg','/assets/education/JHS2.jpg','/assets/education/JHS3.jpg','/assets/education/JS4.jpg'] as string[],
    },
    {
      level: 'Elementary',
      schools: [
        { name: 'Saint Alphonsus Catholic School', years: '2010-2015' },
        { name: 'Saint Dominic Savio International School', years: '2015-2016' },
      ],
      achievements: ['Poem writing winner', 'Won multiple art related contests'],
      images: ['/assets/education/elem1.jpg', '/assets/education/elem2.jpg'] as string[],
    },
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
            <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1.25fr)] gap-6">
              <div className="space-y-2">
                <h3 className="text-card-title text-brand-cream">{edu.level}</h3>
                {(edu as any).track && <p className="text-meta text-brand-muted">Track: {(edu as any).track}</p>}
                {(edu as any).course && <p className="text-meta text-brand-muted">Course: {(edu as any).course}</p>}
                <ul className="space-y-1 mt-4">
                  {edu.achievements.map((ach, j) => (
                    <li key={j} className="text-body text-brand-gray/90 flex items-start gap-2 md:whitespace-nowrap">
                      <span className="text-brand-accent mt-1">›</span>
                      {ach}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col items-start space-y-2 min-w-0 md:pl-4 md:pt-1">
                {edu.schools.map((school, j) => (
                  <div key={j} className="space-y-1">
                    <p className="font-bold text-body text-brand-cream whitespace-nowrap">{school.name} ({school.years})</p>
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

export default Education;
