import { SectionWrapper, AnimatedItem } from '../components/shared';

const Certifications = () => {
  const certs = [
    {
      src: '/assets/certificates/CCNA.jpeg',
      title: 'CCNAv7: Switching, Routing, and Wireless Essentials',
      text: 'Cisco Networking Academy certification covering network configuration, switching, wireless LAN setup, and LAN security fundamentals.',
    },
    {
      src: '/assets/certificates/AI Literacy.jpeg',
      title: 'IBM AI Literacy',
      text: 'IBM SkillsBuild certification focused on real-world AI use cases, responsible use, and guiding AI assistants for practical tasks.',
    },
    {
      src: '/assets/certificates/CC Gen AI.jpeg',
      title: 'IBM Customer Care in the Age of Generative AI',
      text: 'IBM Training certification on using generative AI, virtual agents, and chatbots to support customer care responsibly.',
    },
  ];

  return (
    <SectionWrapper id="certifications" className="pt-16 md:pt-24">
      <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
        {certs.map((cert, i) => (
          <AnimatedItem key={i} itemKey={i} className="cert-card group flex h-full flex-col gap-5">
            <div className="cert-media-frame">
              <div className="cert-image-stage">
                <img src={cert.src} alt={cert.title} className="cert-image" loading="lazy" />
              </div>
            </div>
            <div className="cert-copy">
              <h3 className="cert-title">{cert.title}</h3>
              <p className="text-body text-brand-gray/90">{cert.text}</p>
            </div>
          </AnimatedItem>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Certifications;
