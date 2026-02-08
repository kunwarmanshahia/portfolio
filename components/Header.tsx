
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Theme } from '../types';

interface HeaderProps { 
  theme: Theme; 
  onToggleTheme: () => void;
  chatOpen: boolean;
  onToggleChat: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, onToggleTheme, chatOpen, onToggleChat }) => {
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
          
          {/* KAI Button */}
          <button
            onClick={onToggleChat}
            aria-label={chatOpen ? 'Close KAI chat' : 'Open KAI chat'}
            className="group/kai flex items-center gap-2 font-sans text-sm md:text-base font-medium text-brand-dark dark:text-brand-light hover:opacity-70 transition-opacity focus:outline-none"
          >
            {/* Diamond: spins once and lights up on hover; lit when chat open */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              className={`transition-colors duration-300 group-hover/kai:fill-orange-500 group-hover/kai:animate-spin-once ${chatOpen ? 'fill-orange-500' : 'fill-brand-dark dark:fill-brand-light opacity-50'}`}
            >
              <path d="M6 0L12 6L6 12L0 6L6 0Z" />
            </svg>
            <span>KAI</span>
          </button>

          {/* Theme switch (sun / moon from Codepen) */}
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className={`theme-switch ml-4 focus:outline-none ${isDark ? 'dark' : ''}`}
          >
            <div className="mode" aria-hidden />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
