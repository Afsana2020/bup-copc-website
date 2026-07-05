import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';        // New full homepage
import Events from './pages/Events';
import Partnerships from './pages/Partnerships';
import Gallery from './pages/Gallery';
import Executives from './pages/Executives';
import Alumni from './pages/Alumni';
import About from './pages/About';
import Bupctc from './pages/Bupctc';
import Join from './pages/Join';

import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-transparent text-gray-900 dark:text-silver-200 flex flex-col">
        <Navbar />
        {/* Sci-Fi Divider between Navbar and Hero */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-electric-500/50 to-transparent shadow-[0_0_15px_rgba(0,191,255,0.4)]"></div>
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/partnerships" element={<Partnerships />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/executives" element={<Executives />} />
            <Route path="/alumni" element={<Alumni />} />
            <Route path="/about" element={<About />} />
            <Route path="/bupctc" element={<Bupctc />} />
            <Route path="/join" element={<Join />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;