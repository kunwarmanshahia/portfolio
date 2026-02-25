import React, { useRef, useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { Theme } from '../types';

const LOGO_JOYSTICK_MAX = 10;

interface HeaderProps { 
  theme: Theme; 
  onToggleTheme: () => void;
  chatOpen: boolean;
  onToggleChat: () => void;
  hideOnMobile: boolean;
}

const Header: React.FC<HeaderProps> = ({ theme, onToggleTheme, chatOpen, onToggleChat, hideOnMobile }) => {
  const location = useLocation();
  const logoRef = useRef<HTMLAnchorElement>(null);
  const [logoOffset, setLogoOffset] = useState({ x: 0, y: 0 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const onLogoMouseMove = useCallback((e: React.MouseEvent) => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) return;
    const el = logoRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    const clamp = (v: number) => Math.max(-1, Math.min(1, v));
    setLogoOffset({
      x: clamp(dx) * LOGO_JOYSTICK_MAX,
      y: clamp(dy) * LOGO_JOYSTICK_MAX,
    });
  }, []);

  const onLogoMouseLeave = useCallback(() => {
    setLogoOffset({ x: 0, y: 0 });
  }, []);

  const navLinks = [
    { name: 'Resume', path: '/resume', external: false },
  ];

  const isDark = theme === 'dark';

  const headerVisibilityClass = hideOnMobile ? '-translate-y-full md:translate-y-0' : 'translate-y-0';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-brand-light/70 dark:bg-brand-dark/70 header-border px-4 py-4 md:px-8 lg:px-12 backdrop-blur-md transition-colors duration-300 transform transition-transform ${headerVisibilityClass}`}>
      <div className="max-w-[1920px] mx-auto w-full">
        <div className="flex items-center justify-between w-full relative">
          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden flex items-center text-brand-dark dark:text-brand-light md:hover:text-orange-500 md:dark:hover:text-orange-400 transition-colors"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileMenuOpen(prev => !prev)}
          >
            <span className="sr-only">Menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>

          {/* Logo – joystick follow on hover; centered on mobile, left on desktop */}
          <Link
            ref={logoRef}
            to="/"
            className="flex items-center transition-colors text-brand-dark dark:text-brand-light md:hover:text-orange-500 md:dark:hover:text-orange-400 py-1 pr-2 absolute left-1/2 -translate-x-1/2 md:static md:transform-none"
            aria-label="Kunwar Manshahia – Home"
            onMouseMove={onLogoMouseMove}
            onMouseLeave={onLogoMouseLeave}
          >
            <span
              className="inline-block transition-transform duration-150 ease-out"
              style={{ transform: `translate(${logoOffset.x}px, ${logoOffset.y}px)` }}
            >
              <Logo className="h-10 md:h-12 w-auto shrink-0 scale-105 scale-x-[1.02] text-current" />
            </span>
          </Link>

          {/* Desktop nav: Resume, Ask My AI, Dark toggle */}
          <nav className="hidden md:flex items-center space-x-6 md:space-x-12 font-sans text-sm md:text-base font-medium">
          {navLinks.map((link) => (
            link.external ? (
              <a
                key={link.name}
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors text-brand-dark dark:text-brand-light md:hover:text-orange-500 md:dark:hover:text-orange-400"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className={`${location.pathname === link.path ? 'underline underline-offset-4' : ''} transition-colors text-brand-dark dark:text-brand-light md:hover:text-orange-500 md:dark:hover:text-orange-400`}
              >
                {link.name}
              </Link>
            )
          ))}

          {/* Ask My AI Button */}
          <button
            onClick={onToggleChat}
            aria-label={chatOpen ? 'Close Ask My AI chat' : 'Open Ask My AI chat'}
            className="group/kai flex items-center gap-1.5 font-sans font-medium text-sm md:text-base text-brand-dark dark:text-brand-light md:hover:text-orange-500 md:dark:hover:text-orange-400 transition-colors focus:outline-none"
          >
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
            <span>Ask My AI</span>
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

        {/* Mobile menu drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 border-t border-brand-dark/10 dark:border-brand-light/10 pt-3 space-y-3 text-sm font-sans text-brand-dark dark:text-brand-light">
            <Link
              to="/resume"
              className="block underline underline-offset-4 md:hover:text-orange-500 md:dark:hover:text-orange-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              resume
            </Link>
            <button
              type="button"
              onClick={() => {
                onToggleTheme();
              }}
              className="block w-full text-left underline underline-offset-4 md:hover:text-orange-500 md:dark:hover:text-orange-400 transition-colors"
            >
              {isDark ? 'light mode' : 'dark mode'}
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
