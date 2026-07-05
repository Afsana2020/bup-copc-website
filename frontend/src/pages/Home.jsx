import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import { 
  Calendar, Trophy, ArrowRight, Mail, Phone, Map, Code2, 
  Users, ChevronRight, Star, Sparkles, Zap, Target, Heart
} from 'lucide-react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { activitiesData } from '../data/activities';

const renderTextWithLinks = (text) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.split(urlRegex).map((part, index) => {
    if (part.match(urlRegex)) {
      return <a key={index} href={part} target="_blank" rel="noopener noreferrer" className="text-electric-500 hover:underline break-all">{part}</a>;
    }
    return part;
  });
};

const Home = () => {
  const [selectedActivity, setSelectedActivity] = useState(null);

  const stats = [
    { icon: Users, value: "100+", label: "Members" },
    { icon: Trophy, value: "30+", label: "Events Yearly" },
    { icon: Calendar, value: "3", label: "Years Running" },
    { icon: Code2, value: "12", label: "Committees" }
  ];

  return (
    <>
      <Hero />

      

              {/* Stats Section */}
            <section className="relative z-20 pt-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="bg-white dark:bg-darkbg-800 rounded-2xl p-6 text-center shadow-xl border border-silver-200 dark:border-zinc-800 hover:border-electric-500 transition-all group animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                  <div className="w-12 h-12 bg-gradient-to-br from-electric-500 to-electric-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-electric-500">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section> 

            <br />
          {/* Sci-Fi Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-electric-500/50 to-transparent shadow-[0_0_15px_rgba(0,191,255,0.4)]"></div>

        {/* About Section */}
      <section className="py-16 bg-transparent relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-electric-500/10 rounded-full mb-6">
                  <Heart className="w-4 h-4 text-electric-500" />
                  <span className="text-electric-500 font-semibold text-sm uppercase tracking-wider">Who We Are</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                  About <span className="text-electric-500">BUP CoPC</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
                  The BUP Computer Programming Club, founded in January 2023, is dedicated to advancing knowledge in computer science and cybersecurity. With the motto "Code, Compete, Conque" the club offers interactive workshops, competitions, and mentorship to bridge theoretical learning with practical application.
                </p>
              </div>

              <a href="/about" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-electric-500 to-electric-600 hover:from-electric-600 hover:to-electric-700 text-white rounded-2xl font-semibold transition-all group shadow-lg hover:shadow-xl">
                More About Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Right Side - Images */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden h-64 border border-silver-200 dark:border-zinc-800 group relative">
                    <img 
                      src="/images/permanent/ab1.jpg" 
                      alt="BUP CoPC Activity 1" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden h-48 border border-silver-200 dark:border-zinc-800 group relative">
                    <img 
                      src="/images/permanent/ab2.jpg" 
                      alt="BUP CoPC Activity 2" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="rounded-2xl overflow-hidden h-48 border border-silver-200 dark:border-zinc-800 group relative">
                    <img 
                      src="/images/permanent/ab3.jpg" 
                      alt="BUP CoPC Activity 3" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden h-64 border border-silver-200 dark:border-zinc-800 group relative">
                    <img 
                      src="/images/permanent/ab4.jpg" 
                      alt="BUP CoPC Activity 4" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-electric-500 to-electric-600 rounded-2xl p-4 shadow-2xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">2023</div>
                  <div className="text-xs text-white/80">Established</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Sci-Fi Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-electric-500/50 to-transparent shadow-[0_0_15px_rgba(0,191,255,0.4)]"></div>


      {/* Notable Event Section */}
      <section className="py-10 bg-transparent relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-electric-500/10 rounded-full mb-3">
          
             
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
              Notable <span className="text-electric-500">Event</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-base max-w-xl mx-auto">
              Highlighting flagship events organized by the BUP Computer Programming Club.
            </p>
          </div>

          <div className="bg-white dark:bg-darkbg-800 rounded-3xl overflow-hidden border border-silver-200 dark:border-zinc-800 hover:border-electric-500 shadow-xl transition-all duration-300 flex flex-col lg:flex-row items-stretch">
            {/* Left side: Image */}
            <div className="w-full lg:w-1/2 overflow-hidden bg-black flex items-center justify-center relative min-h-[260px] lg:min-h-[400px]">
              <img 
                src="/images/Activities/e0.jpg" 
                alt="DSI Presents BUP CSE Tech Carnival 2025" 
                className="w-full h-full object-cover absolute inset-0 transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Right side: Info */}
            <div className="w-full lg:w-1/2 p-8 flex flex-col justify-between">
              <div>
                <span className="text-electric-500 font-semibold text-sm tracking-wider uppercase block mb-1">
                  Tech Carnival 2025
                </span>
                <h3 className="text-2xl font-bold mb-3 text-black dark:text-white leading-tight">
                  DSI Presents BUP CSE Tech Carnival 2025
                </h3>
                <br />
                <br />
                <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed line-clamp-4">
                  BUP Computer Programming Club (CoPC), under the supervision of the Department of CSE, successfully organized the event "DSI Presents BUP CSE Tech Carnival 2025 co-sponsored by Brain Station 23: Where Technology Meets Talent" on 24–25 September 2025 at BUP Campus. The two-day carnival featured Competitive Programming, CTF, Hackathon, and a FIFA Gaming Tournament with a total prize pool of BDT 110,000.
                </p>
              </div>
              <div className="mt-6 flex justify-end">
                <a 
                  href="/bupctc" 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-electric-500 hover:bg-electric-600 text-white rounded-2xl font-bold transition-all shadow-lg hover:shadow-electric-500/25"
                >
                  Read Details
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* Sci-Fi Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-electric-500/50 to-transparent shadow-[0_0_15px_rgba(0,191,255,0.4)]"></div>


      {/* Regular Activities Section */}
      <section className="py-16 bg-transparent relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-black dark:text-white">
                Regular <span className="text-electric-500">Activities</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl">
                A glimpse into our frequent engagements, contests, and workshops.
              </p>
            </div>
            <a href="/events" className="inline-flex items-center gap-2 text-electric-500 font-bold hover:text-electric-600 transition-colors group text-lg flex-shrink-0 mb-1">
              See more activities
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activitiesData.filter(a => ['e8', 'e7', 'e5', 'e2'].includes(a.id)).map((event) => (
              <div key={event.id} className="bg-silver-100 dark:bg-darkbg-800 rounded-3xl overflow-hidden border border-silver-200 dark:border-zinc-800 hover:border-electric-500 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="h-40 overflow-hidden relative">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <div className="inline-flex items-center gap-2 mb-2 text-electric-500">
                    <Calendar className="w-3 h-3" />
                    <span className="font-semibold text-xs tracking-wider uppercase">{event.date}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-black dark:text-white leading-tight line-clamp-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 flex-grow line-clamp-2">
                    {event.caption}
                  </p>
                  <button 
                    onClick={() => setSelectedActivity(event)}
                    className="inline-flex justify-center items-center gap-2 w-full py-2 bg-electric-500/10 hover:bg-electric-500 text-electric-500 hover:text-white rounded-xl font-semibold text-sm transition-all group mt-auto"
                  >
                    Show Details
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Regular Activities */}
      {selectedActivity && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedActivity(null)}
          ></div>
          <div className="bg-white dark:bg-darkbg-800 w-full max-w-3xl rounded-3xl overflow-hidden relative z-10 shadow-2xl max-h-[90vh] flex flex-col">
            <button 
              onClick={() => setSelectedActivity(null)}
              className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-electric-500 text-white rounded-full backdrop-blur-md transition-colors z-20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            
            <div className="h-48 sm:h-64 relative flex-shrink-0">
              <img 
                src={selectedActivity.image} 
                alt={selectedActivity.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6 md:p-8">
                <div>
                  <span className="text-electric-400 font-semibold text-sm tracking-wider uppercase block mb-2">
                    {selectedActivity.date}
                  </span>
                  <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                    {selectedActivity.title}
                  </h2>
                </div>
              </div>
            </div>
            
            <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar flex-grow">
              <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
                {renderTextWithLinks(selectedActivity.details)}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sci-Fi Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-electric-500/50 to-transparent shadow-[0_0_15px_rgba(0,191,255,0.4)]"></div>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-electric-500 to-electric-700 relative z-10 shadow-2xl">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Join the Community?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Be part of something amazing. Join BUP CoPC today and start your journey in tech!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/join" className="px-8 py-4 border-2 border-white text-white rounded-2xl font-semibold hover:bg-white hover:text-electric-500 transition-all">
              Join Now
            </a>
            <a href="https://www.facebook.com/bupcopc#" className="px-8 py-4 border-2 border-white text-white rounded-2xl font-semibold hover:bg-white hover:text-electric-500 transition-all">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;