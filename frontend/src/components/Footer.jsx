import { Mail, Map, Globe } from 'lucide-react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/images/permanent/copc_logo.jpg" 
                alt="CoPC Logo" 
                className="w-10 h-10 rounded-xl object-contain"
              />
              <span className="text-xl font-bold text-white">
                BUP <span className="text-electric-500">CoPC</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Empowering future tech leaders through coding, competition, and innovation.
            </p>
            <div className="flex gap-3 pt-2">
              <a href="https://www.facebook.com/share/18zVtKDxi8/" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-[#1877f2] flex items-center justify-center transition-all">
                <FaFacebook className="w-4 h-4 text-white" />
              </a>
              <a href="https://www.linkedin.com/company/bupcopc/posts/?feedView=all" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-[#0a66c2] flex items-center justify-center transition-all">
                <FaLinkedin className="w-4 h-4 text-white" />
              </a>
              <a href="https://bup.edu.bd/club-home/bup-computer-programming-club" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-all">
                <Globe className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/events" className="hover:text-electric-500 transition-colors">Events & Activities</a></li>
              <li><a href="/partnerships" className="hover:text-electric-500 transition-colors">Partnerships</a></li>
              <li><a href="/gallery" className="hover:text-electric-500 transition-colors">Gallery</a></li>
            </ul>
          </div>

          {/* Club */}
          <div>
            <h4 className="text-white font-semibold mb-4">Club</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/executives" className="hover:text-electric-500 transition-colors">Current Panel</a></li>
              <li><a href="/about" className="hover:text-electric-500 transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Map className="w-4 h-4 mt-0.5 text-electric-500" />
                <span>BUP, Mirpur Cantonment, Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-electric-500" />
                <a href="mailto:bupcsclub@gmail.com" className="hover:text-electric-500">bupcsclub@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-black/40">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-center md:text-left">
            <p className="text-electric-500 font-medium">
              © 2026 BUP Computer Programming Club
            </p>
            <p>
              Developed by{' '}
              <a 
                href="#" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-electric-500 hover:underline transition-colors"
              >
                Afsana Hena
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;