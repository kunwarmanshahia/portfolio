import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const switzer: React.CSSProperties = {
  fontFamily: "'Switzer', sans-serif",
};

const ABOUT_COPY =
  'Kunwar Manshahia; a visual designer searching to create meaningful impacts across digital and print platforms. Drawing inspiration from stories, emotions, and his roots spanning Vancouver Island to Punjab. Based in Vancouver.';

type SiteHeaderProps = {
  /** Highlight See All when already on that page */
  seeAllActive?: boolean;
  /** Highlight Select Work when already on that page */
  selectWorkActive?: boolean;
};

/**
 * Desktop: existing 3-column hover nav (unchanged).
 * Mobile/tablet (< lg): hamburger menu.
 */
const SiteHeader: React.FC<SiteHeaderProps> = ({
  seeAllActive = false,
  selectWorkActive = false,
}) => {
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    setMobileAboutOpen(false);
  };

  return (
    <header className="relative w-full px-4 sm:px-8 pt-5 pb-4 z-20" style={{ background: '#f4f4f2' }}>
      {/* Desktop */}
      <div className="hidden lg:grid grid-cols-3 items-start gap-4">
        <div
          className="justify-self-start flex items-center gap-3 whitespace-nowrap min-h-[12px]"
          onMouseEnter={() => setProjectsOpen(true)}
          onMouseLeave={() => setProjectsOpen(false)}
        >
          <button
            type="button"
            className="uppercase text-black transition-colors hover:text-[#be1e2d] leading-none"
            style={{ ...switzer, fontWeight: 500, fontSize: '12px' }}
            aria-expanded={projectsOpen}
            onClick={() => setProjectsOpen((v) => !v)}
          >
            Projects (...)
          </button>
          <div
            className={`flex items-center gap-3 overflow-hidden transition-all duration-300 ${
              projectsOpen ? 'max-w-[16rem] opacity-100' : 'max-w-0 opacity-0'
            }`}
          >
            {seeAllActive ? (
              <span
                className="shrink-0 uppercase leading-none text-[#9a9a9a]"
                style={{ ...switzer, fontWeight: 500, fontSize: '12px' }}
              >
                See All
              </span>
            ) : (
              <Link
                to="/projects"
                className="shrink-0 uppercase transition-colors text-[#9a9a9a] hover:text-[#be1e2d] leading-none"
                style={{ ...switzer, fontWeight: 500, fontSize: '12px' }}
              >
                See All
              </Link>
            )}
            {selectWorkActive ? (
              <span
                className="shrink-0 uppercase leading-none text-[#9a9a9a]"
                style={{ ...switzer, fontWeight: 500, fontSize: '12px' }}
              >
                Select Work
              </span>
            ) : (
              <Link
                to="/select-work"
                className="shrink-0 uppercase transition-colors text-[#9a9a9a] hover:text-[#be1e2d] leading-none"
                style={{ ...switzer, fontWeight: 500, fontSize: '12px' }}
              >
                Select Work
              </Link>
            )}
          </div>
        </div>

        <div className="justify-self-center min-h-[12px] flex items-center">
          <Link
            to="/"
            className="uppercase text-black transition-colors hover:text-[#be1e2d] leading-none"
            style={{ ...switzer, fontWeight: 500, fontSize: '12px' }}
            aria-label="Home"
          >
            Kunwar Manshahia
          </Link>
        </div>

        <div
          className="justify-self-end flex flex-col items-end"
          onMouseEnter={() => setAboutOpen(true)}
          onMouseLeave={() => setAboutOpen(false)}
        >
          <button
            type="button"
            className="uppercase text-black transition-colors hover:text-[#be1e2d] leading-none"
            style={{ ...switzer, fontWeight: 500, fontSize: '12px' }}
            aria-expanded={aboutOpen}
            onClick={() => setAboutOpen((v) => !v)}
          >
            About Me
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ease-out w-full ${
              aboutOpen ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0'
            }`}
          >
            <div className="max-w-xs text-right sm:max-w-sm">
              <p
                style={{
                  ...switzer,
                  fontWeight: 500,
                  fontSize: '12px',
                  lineHeight: 1.65,
                  color: '#6b6b6b',
                  textTransform: 'none',
                }}
              >
                {ABOUT_COPY}
              </p>
              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 justify-end">
                <Link
                  to="/resume"
                  className="underline underline-offset-2 transition-colors hover:text-[#be1e2d]"
                  style={{
                    ...switzer,
                    fontWeight: 500,
                    fontSize: '12px',
                    color: '#9a9a9a',
                    textTransform: 'none',
                  }}
                >
                  Resume
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile / tablet */}
      <div className="lg:hidden flex items-center justify-between gap-4 min-h-[28px]">
        <Link
          to="/"
          className="uppercase text-black transition-colors hover:text-[#be1e2d] leading-none"
          style={{ ...switzer, fontWeight: 500, fontSize: '12px' }}
          onClick={closeMenu}
        >
          Kunwar Manshahia
        </Link>
        <button
          type="button"
          className="uppercase text-black transition-colors hover:text-[#be1e2d] leading-none"
          style={{ ...switzer, fontWeight: 500, fontSize: '12px' }}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {menuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-50 flex flex-col"
          style={{ background: '#f4f4f2' }}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <div className="flex items-center justify-between gap-4 px-4 sm:px-8 pt-5 pb-4">
            <Link
              to="/"
              className="uppercase text-black leading-none"
              style={{ ...switzer, fontWeight: 500, fontSize: '12px' }}
              onClick={closeMenu}
            >
              Kunwar Manshahia
            </Link>
            <button
              type="button"
              className="uppercase text-black leading-none"
              style={{ ...switzer, fontWeight: 500, fontSize: '12px' }}
              onClick={closeMenu}
            >
              Close
            </button>
          </div>

          <nav className="flex-1 px-4 sm:px-8 pt-8 flex flex-col gap-6">
            <p
              className="uppercase text-black/40"
              style={{ ...switzer, fontWeight: 500, fontSize: '11px', letterSpacing: '0.12em' }}
            >
              Projects
            </p>
            <Link
              to="/projects"
              className="uppercase text-black"
              style={{ ...switzer, fontWeight: 500, fontSize: '18px' }}
              onClick={closeMenu}
            >
              See All
            </Link>
            <Link
              to="/select-work"
              className="uppercase text-black"
              style={{ ...switzer, fontWeight: 500, fontSize: '18px' }}
              onClick={closeMenu}
            >
              Select Work
            </Link>

            <div className="pt-4 border-t border-black/10">
              <button
                type="button"
                className="uppercase text-black w-full text-left"
                style={{ ...switzer, fontWeight: 500, fontSize: '18px' }}
                aria-expanded={mobileAboutOpen}
                onClick={() => setMobileAboutOpen((v) => !v)}
              >
                About Me
              </button>
              {mobileAboutOpen && (
                <div className="mt-4 max-w-md">
                  <p
                    style={{
                      ...switzer,
                      fontWeight: 500,
                      fontSize: '13px',
                      lineHeight: 1.65,
                      color: '#6b6b6b',
                      textTransform: 'none',
                    }}
                  >
                    {ABOUT_COPY}
                  </p>
                  <Link
                    to="/resume"
                    className="inline-block mt-4 underline underline-offset-2"
                    style={{
                      ...switzer,
                      fontWeight: 500,
                      fontSize: '12px',
                      color: '#9a9a9a',
                      textTransform: 'none',
                    }}
                    onClick={closeMenu}
                  >
                    Resume
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
