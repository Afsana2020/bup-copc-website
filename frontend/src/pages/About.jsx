import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-2 py-8">
      <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-16 text-center animate-fade-in">
        About <span className="text-electric-500">BUP CoPC</span>
      </h1>

      {/* Overview Section */}
      <div className="grid lg:grid-cols-2 gap-10 items-start mb-20">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-electric-500">Overview</h2>
        <p className="text-black dark:text-silver-200 text-lg leading-relaxed">
          The BUP Computer Programming Club is the official club of Bangladesh University of Professionals (BUP). Founded in January 2023, it is dedicated to advancing knowledge in computer science and cybersecurity. With the motto "Code, Compete, Conquer," the club offers interactive workshops, competitions, and mentorship to bridge theoretical learning with practical application.
        </p>
       
          <p className="text-black dark:text-silver-200 text-lg leading-relaxed">
            The club's activities not only complement the academic curriculum but also serve as a testament to BUP's commitment to nurturing well-rounded professionals equipped to address the challenges of the digital age.
          </p>
        </div>
        <div className="rounded-3xl overflow-hidden border border-electric-500/30 dark:border-electric-500/20 shadow-xl shadow-electric-500/5 group relative">
          <img 
            src="/images/permanent/abmain.jpg" 
            alt="BUP CoPC Overview" 
            className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div className="bg-white dark:bg-darkbg-800 rounded-3xl p-8 border-2 border-electric-500/30 dark:border-electric-500/20 shadow-xl shadow-electric-500/5 hover:border-electric-500 transition-all duration-300">
          <h3 className="text-2xl font-bold text-electric-500 mb-4">Mission</h3>
          <p className="text-black dark:text-silver-200 leading-relaxed text-lg">
            To cultivate technical expertise, foster teamwork, and instill a commitment to excellence, particularly in programming and cybersecurity, empowering members for success in the tech industry.
          </p>
        </div>
        <div className="bg-white dark:bg-darkbg-800 rounded-3xl p-8 border-2 border-electric-500/30 dark:border-electric-500/20 shadow-xl shadow-electric-500/5 hover:border-electric-500 transition-all duration-300">
          <h3 className="text-2xl font-bold text-electric-500 mb-4">Vision</h3>
          <p className="text-black dark:text-silver-200 leading-relaxed text-lg">
            To transform learners into proficient, inventive technologists dedicated to ethical conduct, embracing diversity, and making a positive societal contribution, while shaping the future of technology responsibly.
          </p>
        </div>
      </div>

      {/* About Website Section */}
      <div className="bg-white dark:bg-darkbg-800 rounded-3xl p-8 border-2 border-electric-500/30 dark:border-electric-500/20 shadow-xl shadow-electric-500/5">
        <h3 className="text-2xl font-bold text-electric-500 mb-4">About Website</h3>
        <p className="text-black dark:text-silver-200 leading-relaxed text-lg">
          The BUP Computer Programming Club's official web platform, launched in 2026, serves as a central digital hub for members and tech enthusiasts. The website provides easy access to learning resources, upcoming event announcements, and current panel information. This website was developed by{' '}
          <a href="https://linkedin.com/in/afsana-hena" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline">
            <strong>Afsana Hena</strong>
          </a>
          , Vice President of the 2024-2025 Executive Body. This website is continuously being handled by CoPC Executives and Sub-executive team.
        </p>
      </div>
    </div>
  );
};

export default About;