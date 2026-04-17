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
    {
      src: '/assets/certificates/DB2025.jpg',
      title: 'Database Programming certificate',
      text: 'Participated in the TECH Talk: Database Programming during College Days 2025 at the University of Cebu - Lapu-Lapu and Mandaue. Gained deeper understanding of database programming fundamentals including query design and data management practices.',
    },
    {
      src: '/assets/certificates/ICT2025.jpg',
      title: 'UC ICT Congress certificate',
      text: 'Recognized for outstanding contribution during the 11th UC ICT Congress 2025 with the theme "AI Powered-ICT: Shaping the Future with Responsibility," held at SM Seaside Sky Hall, Cebu. Gained exposure to new tech integrations and software projects showcased by peers across UC campuses beyond UCLM.',
    },
  ];

  return (
    <SectionWrapper id="certifications">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
        {certs.map((cert, i) => (
          <AnimatedItem key={i} className={`flex flex-col gap-6 ${i % 2 !== 0 ? 'md:mt-24' : ''}`}>
            <div className="glass-card p-4">
              <div className="block aspect-video rounded-xl overflow-hidden relative">
                <img src={cert.src} alt={cert.title} className="w-full h-full object-contain bg-[#D9D9D9]" />
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed font-medium">{cert.text}</p>
          </AnimatedItem>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Certifications;
