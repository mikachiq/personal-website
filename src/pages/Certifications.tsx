import { SectionWrapper, AnimatedItem } from '../components/shared';

const Certifications = () => {
  const certs = [
    {
      src: '/assets/certificates/CCNA%20cert.jpeg',
      title: 'CCNA certificate',
      text: 'Completed CCNAv7: Switching, Routing, and Wireless Essentials through the Cisco Networking Academy. Covers network configuration, switching operations, wireless LAN setup, and LAN security fundamentals.',
    },
    {
      src: '/assets/certificates/CCNA%20badge.jpg',
      title: 'CCNA badge',
      text: 'Cisco-verified badge for completing the CCNA: Switching, Routing, and Wireless Essentials course. Demonstrated foundation in switching operations, wired and wireless LAN configuration, security best practices, and redundancy protocols. Completed 45 practice activities and 21 hours of hands-on labs using Cisco Packet Tracer.',
    },
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
