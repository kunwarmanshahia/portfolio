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
    { name: 'Resume', path: 'https://example.com/resume.pdf', external: true },
    { name: 'About', path: '/about' },
  ];

  const isDark = theme === 'dark';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-light/70 dark:bg-brand-dark/70 header-border px-4 py-4 md:px-8 lg:px-12 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-[1920px] mx-auto flex justify-between items-center w-full">
        {/* Name / Home */}
        <Link
          to="/"
          className="flex items-center hover:opacity-70 transition-opacity text-brand-dark dark:text-brand-light font-sans font-normal text-xl md:text-2xl tracking-tight"
          aria-label="Kunwar Manshahia – Home"
        >
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
          
          {/* K_AI Button */}
          <button
            onClick={onToggleChat}
            aria-label={chatOpen ? 'Close K_AI chat' : 'Open K_AI chat'}
            className="group/kai flex items-center gap-2 font-sans text-sm md:text-base font-medium text-brand-dark dark:text-brand-light hover:opacity-70 transition-opacity focus:outline-none"
          >
            {/* AI symbol (crosshair): theme colour; cursor orange on hover and when chat open */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-colors duration-300 group-hover/kai:stroke-orange-500 ${chatOpen ? 'stroke-orange-500' : 'stroke-brand-dark dark:stroke-brand-light opacity-50'}`}
            >
              <path d="M11.5 3V21M20.5 12L2.5 12M15.9497 7.5L7.05024 16.3995M7.05026 7.5L15.9498 16.3995" />
            </svg>
            <span>K_AI</span>
          </button>

          {/* Dark mode toggle – pill + knob, portfolio colours */}
          <label htmlFor="dark-mode" className="relative inline-flex items-center cursor-pointer">
            <input
              id="dark-mode"
              type="checkbox"
              className="sr-only peer"
              role="switch"
              aria-label="Dark mode"
              checked={isDark}
              onChange={onToggleTheme}
            />
            <div
              className="relative group peer bg-brand-light rounded-full duration-300 w-[41px] h-5 ring-2 ring-brand-dark after:content-[''] after:duration-300 after:bg-brand-dark after:rounded-full after:absolute after:h-3.5 after:w-3.5 after:top-[3px] after:left-[3px] peer-checked:after:translate-x-[21px] peer-checked:after:bg-brand-light peer-checked:ring-brand-light peer-checked:bg-brand-dark peer-hover:after:scale-95"
              aria-hidden
            />
          </label>
        </nav>
      </div>
    </header>
  );
};

export default Header;
