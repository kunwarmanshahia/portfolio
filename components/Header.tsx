
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Theme } from '../types';

interface HeaderProps { theme: Theme; onToggleTheme: () => void; }

const Header: React.FC<HeaderProps> = ({ theme, onToggleTheme }) => {
  const location = useLocation();

  const navLinks = [
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Resume', path: 'https://example.com/resume.pdf', external: true },
  ];

  const isDark = theme === 'dark';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-light/70 dark:bg-brand-dark/70 header-border px-4 py-4 md:px-8 lg:px-12 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-[1920px] mx-auto flex justify-between items-center w-full">
        {/* Name: Inter */}
        <Link to="/" className="font-sans font-normal text-2xl md:text-3xl tracking-tight hover:opacity-70 transition-opacity text-brand-dark dark:text-brand-light">
          Kunwar Manshahia
        </Link>

        {/* Nav: Proper capitalization */}
        <nav className="flex items-center space-x-6 md:space-x-12 font-sans text-sm md:text-base font-medium">
          {navLinks.map((link) => (
            link.external ? (
              <a
                key={link.name}
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-50 transition-all text-brand-dark dark:text-brand-light"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className={`${location.pathname === link.path ? 'underline underline-offset-4' : 'hover:opacity-50'} transition-all text-brand-dark dark:text-brand-light`}
              >
                {link.name}
              </Link>
            )
          ))}
          
          {/* Visual Theme Switch */}
          <button
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="group relative inline-flex h-6 w-11 items-center rounded-full border-2 border-brand-dark dark:border-brand-light transition-all duration-300 focus:outline-none"
          >
            <span
              className={`${
                isDark ? 'translate-x-5 bg-brand-light' : 'translate-x-1 bg-brand-dark'
              } inline-block h-3 w-3 transform rounded-full transition-transform duration-300 ease-in-out`}
            />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
