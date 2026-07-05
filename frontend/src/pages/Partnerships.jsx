import { useState } from 'react';
import { Trophy } from 'lucide-react';

const Partnerships = () => {
  const [selectedPartner, setSelectedPartner] = useState(null);

  const partnersData = [
    {
      id: 'p3',
      image: '/images/partner/p3.jpg',
      title: "5th National Data Science Summit 2026",
      tagline: "Official Club Partner! 🚀",
      shortDesc: "BUP Computer Programming Club is proud to partner with the 5th National Data Science Summit 2026 — one of the country's biggest stages for AI, Data Science, Innovation & Entrepreneurship.",
      fullDesc: `WE'RE OFFICIAL CLUB PARTNERS! 🚀

Proud to partner with the 5th National Data Science Summit 2026 — one of the country's biggest stages for AI, Data Science, Innovation & Entrepreneurship.

Your chance to compete, build, and innovate.

Theme: AI in Entrepreneurship

Date: 12 July 2026

Venue: Daffodil Smart City, Savar, Dhaka

Prize Pool: BDT 80,000

Don't just watch the future of AI — be part of it.`,
      links: [
        { label: 'Register now', url: 'https://data-science-summit-2026.vercel.app/' },
        { label: 'Event details', url: 'https://www.facebook.com/share/1DkvcTdg3P/' }
      ]
    },
    {
      id: 'p2',
      image: '/images/partner/p2.jpg',
      title: "Phoenix Summit Dhaka 2026",
      tagline: "South Asia's Biggest Cyber Security Summit! 🛡️",
      shortDesc: "Proud to announce BUP Computer Programming Club has officially joined Phoenix Summit Dhaka 2026, the biggest Cyber Security Summit in South Asia!",
      fullDesc: `Proud to announce that BUP Computer Programming Club has officially joined Phoenix Summit Dhaka 2026, the biggest Cyber Security Summit in South Asia! 

Use our exclusive campus code  𝐈𝐀𝐌𝐁𝐔𝐏 to enjoy  50% OFF on registration.

Grab your ticket: 
https://quicket.me/events/phoenix-summit-2026/

N.B: We would encourage everyone to use your BUP email for smooth operations.

Build. Secure. Lead.`,
      links: [
        { label: 'Grab your ticket', url: 'https://quicket.me/events/phoenix-summit-2026/' }
      ]
    },
    {
      id: 'p1',
      image: '/images/partner/p1.jpg',
      title: "EWU National RoboFest 2026 | NRF26",
      tagline: "United by Innovation, Powered by Clubs 🤖",
      shortDesc: "Proud to welcome our official Club Partners of EWU National RoboFest 2026 | NRF26. The minds, makers, and communities driving this movement forward.",
      fullDesc: `𝐔𝐧𝐢𝐭𝐞𝐝 𝐛𝐲 𝐈𝐧𝐧𝐨𝐯𝐚𝐭𝐢𝐨𝐧. 𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐛𝐲 𝐂𝐥𝐮𝐛𝐬 🤖

Proud to welcome our official Club Partners of EWU National RoboFest 2026 | NRF26. The minds, makers, and communities driving this movement forward 🚀

From circuits to code, bots to breakthroughs, this RoboFest is powered by your passion and creativity.

Let the machines rise. Let the innovation begin.
𝐍𝐑𝐅𝟐𝟔 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥 𝐖𝐞𝐛𝐬𝐢𝐭𝐞: https://ewuroboticsclub.com/nrf26/
𝐄𝐯𝐞𝐧𝐭 𝐋𝐢𝐧𝐤: https://www.facebook.com/events/1252637183058252/

Stay connected as we move forward towards something extraordinary.
Domination Is Destiny.`,
      links: [
        { label: '𝐍𝐑𝐅𝟐𝟔 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥 𝐖𝐞𝐛𝐬𝐢𝐭𝐞', url: 'https://ewuroboticsclub.com/nrf26/' },
        { label: '𝐄𝐯𝐞𝐧𝐭 𝐋𝐢𝐧𝐤', url: 'https://www.facebook.com/events/1252637183058252/' }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-electric-500/10 rounded-full mb-4">
          
        </div>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
          Our <span className="text-electric-500">Partnerships</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          Connecting with premium national events, tech communities, and cybersecurity summits.
        </p>
      </div>

      <div className="space-y-12">
        {partnersData.map((partner) => (
          <div 
            key={partner.id} 
            className="bg-white dark:bg-darkbg-800 rounded-3xl overflow-hidden border border-silver-200 dark:border-zinc-800 hover:border-electric-500 shadow-xl transition-all duration-300 flex flex-col md:flex-row items-stretch min-h-[300px]"
          >
            {/* Left side: Image */}
            <div className="w-full md:w-2/5 overflow-hidden bg-black flex items-center justify-center relative min-h-[250px] md:min-h-auto">
              <img 
                src={partner.image} 
                alt={partner.title}
                className="w-full h-full object-contain md:absolute md:inset-0"
              />
            </div>

            {/* Right side: Info */}
            <div className="w-full md:w-3/5 p-8 flex flex-col justify-between">
              <div>
                <span className="text-electric-500 font-semibold text-sm tracking-wider uppercase block mb-1">
                  {partner.tagline}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black dark:text-white">
                  {partner.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-6">
                  {partner.shortDesc}
                </p>
              </div>
              <div className="flex justify-end w-full">
                <button 
                  onClick={() => setSelectedPartner(partner)}
                  className="px-6 py-3 bg-electric-500/10 hover:bg-electric-500 text-electric-500 hover:text-white rounded-2xl font-bold transition-all duration-300"
                >
                  See Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Details */}
      {selectedPartner && (
        <div 
          className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedPartner(null)}
        >
          <div 
            className="relative max-w-2xl w-full bg-white dark:bg-darkbg-800 border border-silver-200 dark:border-zinc-800 rounded-3xl overflow-hidden shadow-2xl my-8"
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedPartner(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-electric-500 transition-colors flex items-center justify-center font-bold"
            >
              ✕
            </button>
            <div className="h-64 md:h-80 overflow-hidden relative bg-black flex items-center justify-center">
              <img 
                src={selectedPartner.image} 
                alt={selectedPartner.title}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-8">
              <span className="text-electric-500 font-semibold text-sm tracking-wider uppercase block mb-2">
                {selectedPartner.tagline}
              </span>
              <h3 className="text-3xl font-bold mb-4 text-black dark:text-white">
                {selectedPartner.title}
              </h3>
              
              <div className="text-gray-700 dark:text-silver-200 space-y-4 whitespace-pre-line text-base leading-relaxed max-h-[30vh] overflow-y-auto pr-2 mb-6">
                {selectedPartner.fullDesc}
              </div>

              {/* Directly write link details as requested instead of stylized buttons */}
              <div className="border-t border-silver-200 dark:border-zinc-800 pt-4 space-y-2">
                {selectedPartner.links.map((link, lIdx) => (
                  <p key={lIdx} className="text-black dark:text-white font-medium">
                    {link.label}:{' '}
                    <a 
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-electric-500 hover:underline break-all"
                    >
                      {link.url}
                    </a>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Partnerships;