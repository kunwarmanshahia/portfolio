import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const onHome = location.pathname === '/';

  const linkClass = (active: boolean) =>
    `text-sm font-medium uppercase tracking-wide transition-colors hover:text-accent ${
      active ? 'text-accent' : 'text-ink'
    }`;

  const nav = (
    <>
      <Link
        to={{ pathname: '/', hash: 'work' }}
        className={linkClass(onHome)}
        onClick={() => setOpen(false)}
      >
        Work
      </Link>
      <Link to="/resume" className={linkClass(location.pathname === '/resume')} onClick={() => setOpen(false)}>
        Resume
      </Link>
      <a href="mailto:bykunwar@gmail.com" className={linkClass(false)} onClick={() => setOpen(false)}>
        Contact
      </a>
    </>
  );

  return (
    <header className="sticky top-0 z-40 bg-page/95 backdrop-blur-sm border-b border-ink/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link
          to="/"
          className="text-xs sm:text-sm font-bold uppercase tracking-[0.12em] text-ink hover:text-accent transition-colors"
        >
          Kunwar Manshahia
        </Link>

        <nav className="hidden md:flex items-center gap-6">{nav}</nav>

        <button
          type="button"
          className="md:hidden text-xs font-bold uppercase tracking-wide text-ink hover:text-accent"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      {open && (
        <nav className="md:hidden flex flex-col gap-4 border-t border-ink/10 px-5 py-5 bg-page">
          {nav}
        </nav>
      )}
    </header>
  );
};

export default Header;
