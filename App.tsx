
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Cursor from './components/Cursor';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import About from './pages/About';
import { Theme } from './types';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
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

  return (
    <Router>
      <Cursor theme={theme} />
      <div className="min-h-screen">
        <Header theme={theme} onToggleTheme={toggleTheme} />
        <main className="pt-16 md:pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <footer className="p-8 md:p-12 text-xs font-mono opacity-50 text-center uppercase tracking-widest border-t border-brand-dark/10 dark:border-brand-light/10 mt-20">
          © {new Date().getFullYear()} Kunwar Manshahia — All Rights Reserved
        </footer>
      </div>
    </Router>
  );
};

export default App;
