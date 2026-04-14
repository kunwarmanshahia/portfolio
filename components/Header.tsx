import React, { useRef, useState, useCallback, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';

const LOGO_JOYSTICK_MAX = 10;

interface HeaderProps {
  hideOnMobile: boolean;
}

const Header: React.FC<HeaderProps> = ({ hideOnMobile }) => {
  const location = useLocation();
  const logoRef = useRef<HTMLAnchorElement>(null);
  const menuContainerRef = useRef<HTMLDivElement>(null);
  const [logoOffset, setLogoOffset] = useState({ x: 0, y: 0 });
  const [navMenuOpen, setNavMenuOpen] = useState(false);

  useEffect(() => {
    setNavMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!navMenuOpen) return;
    const handlePointerDown = (event: MouseEvent) => {
      if (menuContainerRef.current && !menuContainerRef.current.contains(event.target as Node)) {
        setNavMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handlePointerDown);
    return () => document.removeEventListener('mousedown', handlePointerDown);
  }, [navMenuOpen]);

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

  const headerVisibilityClass = hideOnMobile ? '-translate-y-full md:translate-y-0' : 'translate-y-0';

  const workIsActive = location.pathname === '/work';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-brand-light/80 backdrop-blur-md transition-transform duration-300 ${headerVisibilityClass}`}
    >
      <div className="max-w-[1920px] mx-auto w-full relative flex items-center justify-center px-4 py-4 md:px-8 lg:px-12 min-h-[4.5rem]">
        <div ref={menuContainerRef} className="relative flex items-center gap-3 md:gap-4">
          <Link
            ref={logoRef}
            to="/"
            className="flex items-center transition-colors text-brand-dark md:hover:text-orange-500 py-1"
            aria-label="Kunwar Manshahia – Home"
            onMouseMove={onLogoMouseMove}
            onMouseLeave={onLogoMouseLeave}
          >
            <span
              className="inline-block transition-transform duration-150 ease-out"
              style={{ transform: `translate(${logoOffset.x}px, ${logoOffset.y}px)` }}
            >
              <Logo className="h-[3.25rem] md:h-[3.9rem] w-auto shrink-0 scale-105 scale-x-[1.02] text-current" />
            </span>
          </Link>

          <button
            type="button"
            className="flex items-center justify-center text-brand-dark md:hover:text-orange-500 transition-colors p-1 -mr-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark/30"
            aria-label={navMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={navMenuOpen}
            onClick={() => setNavMenuOpen((open) => !open)}
          >
            <span className="sr-only">Menu</span>
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
              className={`transition-transform duration-200 ${navMenuOpen ? 'rotate-180' : ''}`}
              aria-hidden
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>

          {navMenuOpen && (
            <div
              className="absolute top-full left-1/2 z-50 mt-3 min-w-[12rem] -translate-x-1/2 rounded-lg border border-brand-dark/10 bg-brand-light py-2 shadow-lg"
              role="menu"
            >
              <Link
                to="/work#projects"
                role="menuitem"
                className={`block px-4 py-2.5 font-sans text-sm font-medium text-brand-dark md:hover:bg-brand-dark/5 md:hover:text-orange-500 transition-colors ${
                  workIsActive ? 'bg-brand-dark/[0.04]' : ''
                }`}
                onClick={() => setNavMenuOpen(false)}
              >
                Work
              </Link>
              <Link
                to="/resume"
                role="menuitem"
                className={`block px-4 py-2.5 font-sans text-sm font-medium text-brand-dark md:hover:bg-brand-dark/5 md:hover:text-orange-500 transition-colors ${
                  location.pathname === '/resume' ? 'bg-brand-dark/[0.04]' : ''
                }`}
                onClick={() => setNavMenuOpen(false)}
              >
                Resume
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
