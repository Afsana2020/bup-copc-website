import { Bug, MousePointer2, Code2, Monitor, Coffee, Terminal } from 'lucide-react';
import { FaFacebook, FaGithub, FaLinkedin, FaDiscord, FaHtml5 } from 'react-icons/fa';
import { SiCplusplus } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
const Hero = () => {
  return (
    <section className="h-[calc(100vh-85px)] flex items-center relative overflow-hidden">
    

      <div className="max-w-[85rem] mx-auto px-4 grid md:grid-cols-2 gap-4 md:gap-8 items-center relative z-10 w-full h-full">
        
        {/* LEFT - Text */}
        <div className="space-y-10 lg:pr-10 flex flex-col items-center text-center">
          
          <div className="flex flex-col items-center space-y-6 w-full">
            <h1 className="text-5xl md:text-[3.25rem] xl:text-[4.5rem] font-bold tracking-tighter leading-tight text-black dark:text-white">
              BUP Computer<br /> 
              <span className="text-electric-500">Programming Club</span>
            </h1>

            <div className="inline-flex items-center px-8 py-2.5 rounded-full bg-gradient-to-r from-electric-500/10 to-electric-600/5 text-electric-500 text-xs md:text-sm font-bold tracking-[0.25em] backdrop-blur-xl border border-electric-500/30 animate-fade-in uppercase shadow-[0_0_20px_rgba(0,191,255,0.1)]">
               CODE * COMPETE * CONQUER
            </div>
            
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed relative z-10 pt-2 mx-auto">
            Fostering competitive programming, cybersecurity, and technical excellence since 2023.
          </p>

          <div className="flex flex-col items-center gap-4 relative z-10 w-full pt-4">
            <p className="text-xs md:text-sm font-medium text-gray-400 dark:text-gray-500 tracking-[0.2em] uppercase animate-fade-in">
              Connect with our official pages
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 w-full">
              <a href="https://www.linkedin.com/company/bupcopc/posts/?feedView=all" className="group px-10 py-3.5 bg-electric-500/10 hover:bg-electric-500/20 text-electric-500 border border-white/10 dark:border-white/5 rounded-2xl font-bold transition-all transform hover:scale-105 hover:shadow-[0_0_20px_rgba(0,191,255,0.2)] flex items-center gap-3 backdrop-blur-md">
                <FaLinkedin className="w-5 h-5" />
                LinkedIn
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a href="https://www.facebook.com/share/18zVtKDxi8/" className="group px-10 py-3.5 bg-electric-500/10 hover:bg-electric-500/20 text-electric-500 border border-white/10 dark:border-white/5 rounded-2xl font-bold transition-all transform hover:scale-105 hover:shadow-[0_0_20px_rgba(0,191,255,0.2)] flex items-center gap-3 backdrop-blur-md">
                <FaFacebook className="w-5 h-5" />
                Facebook
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>


        </div>

        </div>

        {/* RIGHT - Transparent Images with Animated Lighting/Sparkles */}
        <div className="relative hidden md:flex justify-center items-center w-full min-h-[400px] group md:-ml-8 lg:-ml-12 mt-4 md:mt-6">
          
          {/* Animated Ambient Lighting & Sparkles behind the image */}
          <div className="absolute inset-0 z-0 w-full h-full flex items-center justify-center">
            {/* Core Glow - HIDDEN IN LIGHT MODE */}
            <div className="absolute w-[350px] h-[350px] hidden dark:block bg-electric-500/15 rounded-full blur-[100px] animate-pulse-slow"></div>
            
            {/* SVG Sparkle Particles - HIDDEN IN LIGHT MODE */}
            <svg className="absolute inset-0 w-full h-full max-w-[600px] hidden dark:block" viewBox="0 0 500 500">
               <circle cx="100" cy="150" r="3" fill="#00bfff" className="animate-float" style={{ animationDelay: '0.2s', filter: 'drop-shadow(0 0 8px #00bfff)' }} />
               <circle cx="400" cy="100" r="4" fill="#00bfff" className="animate-float" style={{ animationDelay: '1.5s', filter: 'drop-shadow(0 0 10px #00bfff)' }} />
               <circle cx="80" cy="350" r="2" fill="#fff" className="animate-float" style={{ animationDelay: '0.8s' }} />
               <circle cx="420" cy="380" r="5" fill="#00bfff" className="animate-float" style={{ animationDelay: '2s', filter: 'drop-shadow(0 0 12px #00bfff)' }} />
               <circle cx="250" cy="50" r="3" fill="#fff" className="animate-float" style={{ animationDelay: '1.1s' }} />
               <circle cx="200" cy="450" r="4" fill="#00bfff" className="animate-float" style={{ animationDelay: '0.5s', filter: 'drop-shadow(0 0 8px #00bfff)' }} />
               
               <g stroke="rgba(0, 191, 255, 0.4)" strokeWidth="2" fill="none" opacity="0.5">
                 <line x1="250" y1="250" x2="400" y2="100" className="animate-pulse-slow" />
                 <line x1="250" y1="250" x2="100" y2="150" className="animate-pulse-slow" style={{ animationDelay: '1s'}} />
                 <line x1="250" y1="250" x2="420" y2="380" className="animate-pulse-slow" style={{ animationDelay: '0.5s'}} />
               </g>
            </svg>
          </div>

          {/* Foreground Canvas Image */}
          <div className="relative w-full max-w-[550px] h-auto z-10 flex justify-center items-center animate-float">
            {/* Dark Mode Transparent Image */}
            <img 
              src="/images/permanent/1.png" 
              alt="BUP CoPC Network Graphic Dark"
              className="w-full h-auto object-contain hidden dark:block scale-[1.05]"
              style={{ filter: "drop-shadow(0 0 35px rgba(0,191,255,0.5)) drop-shadow(0 15px 20px rgba(0,0,0,0.6))" }}
            />
            {/* Light Mode Transparent Image - REMOVED HARSH BLUE SHADOW */}
            <img 
              src="/images/permanent/2.png" 
              alt="BUP CoPC Network Graphic Light"
              className="w-full h-auto object-contain block dark:hidden scale-[1.05]"
              style={{ filter: "drop-shadow(0 15px 25px rgba(0,0,0,0.15))" }}
            />
          </div>
          
        </div>
      </div>

    </section>
  );
};

export default Hero;