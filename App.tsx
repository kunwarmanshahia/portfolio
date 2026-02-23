
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Cursor from './components/Cursor';
import ChatWidget from './components/ChatWidget';
import Home from './pages/Home';
import ForgeCaseStudy from './pages/ForgeCaseStudy';
import MosaicCaseStudy from './pages/MosaicCaseStudy';
import { Theme } from './types';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [chatOpen, setChatOpen] = useState(false);

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

  const CHAT_WIDTH = '400px';

  return (
    <Router>
      <Cursor theme={theme} />
      <div className="min-h-screen">
        <Header theme={theme} onToggleTheme={toggleTheme} chatOpen={chatOpen} onToggleChat={toggleChat} />
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
            </Routes>
          </main>
          <footer className="p-8 md:p-12 text-xs font-mono opacity-50 text-center uppercase tracking-widest border-t border-brand-dark/10 dark:border-brand-light/10 mt-20">
            © {new Date().getFullYear()} Kunwar Manshahia — All Rights Reserved
          </footer>
        </div>
      </div>
    </Router>
  );
};

export default App;
