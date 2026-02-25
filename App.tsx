
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Cursor from './components/Cursor';
import ChatWidget from './components/ChatWidget';
import Home from './pages/Home';
import ForgeCaseStudy from './pages/ForgeCaseStudy';
import MosaicCaseStudy from './pages/MosaicCaseStudy';
import CloverXBarbershop from './pages/CloverXBarbershop';
import LaHaine from './pages/LaHaine';
import Triunity from './pages/Triunity';
import Gearbox from './pages/Gearbox';
import BrokenYolk from './pages/BrokenYolk';
import SignaturesForSound from './pages/SignaturesForSound';
import { Theme } from './types';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [chatOpen, setChatOpen] = useState(false);
  const [hideHeaderOnMobile, setHideHeaderOnMobile] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
    // No saved theme: keep default dark (initial state)
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const toggleChat = () => {
    setChatOpen(prev => !prev);
  };

  // Mobile-only header hide/show based on scroll direction.
  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      const currentY = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const delta = currentY - lastY;
          if (currentY > 80 && delta > 5) {
            setHideHeaderOnMobile(true);
          } else if (delta < -5) {
            setHideHeaderOnMobile(false);
          }
          lastY = currentY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const CHAT_WIDTH = '400px';

  return (
    <Router>
      <Cursor theme={theme} />
      <div className="min-h-screen">
        <Header
          theme={theme}
          onToggleTheme={toggleTheme}
          chatOpen={chatOpen}
          onToggleChat={toggleChat}
          hideOnMobile={hideHeaderOnMobile}
        />
        <ChatWidget theme={theme} open={chatOpen} onClose={() => setChatOpen(false)} width={CHAT_WIDTH} />
        <div
          className="transition-[margin-right] duration-300 ease-out"
          style={{ marginRight: chatOpen ? CHAT_WIDTH : 0 }}
        >
          <main className="pt-16 md:pt-20 min-w-0">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/case-study/forge" element={<ForgeCaseStudy />} />
              <Route path="/case-study/mosaic" element={<MosaicCaseStudy />} />
              <Route path="/project/clover-x-barbershop" element={<CloverXBarbershop />} />
              <Route path="/project/la-haine" element={<LaHaine />} />
              <Route path="/project/triunity" element={<Triunity />} />
              <Route path="/project/gearbox" element={<Gearbox />} />
              <Route path="/project/broken-yolk" element={<BrokenYolk />} />
              <Route path="/project/signatures-for-sound" element={<SignaturesForSound />} />
            </Routes>
          </main>
          <footer className="p-8 md:p-12 text-xs font-mono opacity-50 uppercase tracking-widest border-t border-brand-dark/10 dark:border-brand-light/10 mt-20">
            <div className="flex flex-col gap-3 items-center justify-between md:flex-row">
              <a
                href="https://linkedin.com/in/kunwarmanshahia"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
              >
                linkedin
              </a>
              <span className="text-center">
                © {new Date().getFullYear()} Kunwar Manshahia — Made In Canada
              </span>
              <a
                href="mailto:bykunwar@gmail.com"
                className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
              >
                bykunwar@gmail.com
              </a>
            </div>
          </footer>
        </div>
      </div>
    </Router>
  );
};

export default App;
