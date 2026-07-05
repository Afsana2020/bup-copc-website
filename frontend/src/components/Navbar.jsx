import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [isDark, setIsDark] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Events & Activities', path: '/events' },
    { name: 'Partnerships', path: '/partnerships' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Club Panel', path: '/executives' },
    { name: 'About', path: '/about' }
  ];

  return (
    <nav className="bg-white/90 dark:bg-black/95 backdrop-blur-lg border-b border-silver-200 dark:border-zinc-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 overflow-hidden rounded-xl border border-silver-200 dark:border-zinc-800 group-hover:border-electric-500 transition-colors bg-white">
            <img 
              src="/images/permanent/copc_logo.jpg" 
              alt="BUP CoPC Logo" 
              className="w-full h-full object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-electric-500 text-white font-bold text-2xl">B</div>';
              }}
            />
          </div>
          <div className="flex items-baseline">
            <span className="text-3xl font-bold tracking-tighter text-black dark:text-white">BUP</span>
            <span className="text-electric-500 text-3xl font-bold tracking-tighter ml-1">CoPC</span>
          </div>
        </Link>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-9 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`${isActive ? 'text-electric-500 font-bold' : 'text-gray-700 dark:text-silver-200 hover:text-electric-500'} transition-colors`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Mode Toggle */}
        <button
          onClick={() => setIsDark(!isDark)}
          className="p-3 rounded-2xl hover:bg-silver-100 dark:hover:bg-zinc-800 transition-all"
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;