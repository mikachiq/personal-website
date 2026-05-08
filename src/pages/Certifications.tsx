import { SectionWrapper, AnimatedItem } from '../components/shared';

const Certifications = () => {
  const certs = [
    {
      src: '/assets/certificates/CCNA.jpeg',
      title: 'CCNA certificate',
      text: 'Completed CCNAv7: Switching, Routing, and Wireless Essentials through the Cisco Networking Academy. Covers network configuration, switching operations, wireless LAN setup, and LAN security fundamentals.',
    },
    {
      src: '/assets/certificates/AI Literacy.jpeg',
      title: 'AI Literacy certificate',
      text: 'Completed IBM\'s AI Literacy course on SkillsBuild, exploring real-world AI use cases across industries and practicing how to guide an AI assistant to solve hands-on business challenges. Builds the foundation to recognize, evaluate, and apply AI tools responsibly.',
    },
    {
      src: '/assets/certificates/CC Gen AI.jpeg',
      title: 'IBM Customer Care in the Age of Gen AI',
      text: 'Completed IBM\'s Introduction to Customer Care in the Age of Generative AI (DL19007G), covering how AI assistants, virtual agents, and chatbots powered by IBM watsonx can automate customer interactions and scale support operations — with a focus on responsible AI deployment.',
    }
  ];

  return (
    <SectionWrapper id="certifications" className="pt-16 md:pt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24 mt-8 md:mt-12">
        {certs.map((cert, i) => (
          <AnimatedItem key={i} className={`flex flex-col gap-6`}>
            <div className="glass-card p-4">
              <div className="image-tint-frame block aspect-video rounded-xl overflow-hidden relative">
                <img src={cert.src} alt={cert.title} className="image-tint w-full h-full object-contain bg-[#D9D9D9]" />
              </div>
            </div>
            <p className="text-body text-brand-gray/90">{cert.text}</p>
          </AnimatedItem>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Certifications;
