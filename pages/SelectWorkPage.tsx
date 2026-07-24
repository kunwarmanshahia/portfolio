import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { selectWorkProjects } from '../lib/projects';

const switzer: React.CSSProperties = {
  fontFamily: "'Switzer', sans-serif",
};

const SelectWorkPage: React.FC = () => {
  const [projectsOpen, setProjectsOpen] = useState(true);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <div className="min-h-screen text-black flex flex-col" style={{ background: '#f4f4f2' }}>
      <header className="relative w-full px-4 sm:px-8 pt-5 pb-4 z-10" style={{ background: '#f4f4f2' }}>
        <div className="grid grid-cols-3 items-start gap-4">
          <div
            className="justify-self-start flex items-center gap-3 whitespace-nowrap min-h-[12px]"
            onMouseEnter={() => setProjectsOpen(true)}
            onMouseLeave={() => setProjectsOpen(false)}
          >
            <Link
              to="/"
              className="uppercase text-black transition-colors hover:text-[#be1e2d] leading-none"
              style={{ ...switzer, fontWeight: 500, fontSize: '12px' }}
            >
              Projects (...)
            </Link>
            <div
              className={`flex items-center gap-3 overflow-hidden transition-all duration-300 ${
                projectsOpen ? 'max-w-[16rem] opacity-100' : 'max-w-0 opacity-0'
              }`}
            >
              <Link
                to="/projects"
                className="shrink-0 uppercase transition-colors text-[#9a9a9a] hover:text-[#be1e2d] leading-none"
                style={{ ...switzer, fontWeight: 500, fontSize: '12px' }}
              >
                See All
              </Link>
              <span
                className="shrink-0 uppercase leading-none text-[#9a9a9a]"
                style={{ ...switzer, fontWeight: 500, fontSize: '12px' }}
              >
                Select Work
              </span>
            </div>
          </div>

          <div className="justify-self-center min-h-[12px] flex items-center">
            <Link
              to="/"
              className="uppercase text-black transition-colors hover:text-[#be1e2d] leading-none"
              style={{ ...switzer, fontWeight: 500, fontSize: '12px' }}
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
                  Kunwar Manshahia; a visual designer searching to create meaningful impacts across
                  digital and print platforms. Drawing inspiration from stories, emotions, and his
                  roots spanning Vancouver Island to Punjab. Based in Vancouver.
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
                  <a
                    href="https://linkedin.com/in/kunwarmanshahia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 transition-colors hover:text-[#be1e2d]"
                    style={{
                      ...switzer,
                      fontWeight: 500,
                      fontSize: '12px',
                      color: '#9a9a9a',
                      textTransform: 'none',
                    }}
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 flex items-center px-4 sm:px-8 py-10">
        <ul className="w-full grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
          {selectWorkProjects.map((project) => (
            <li key={project.id}>
              <Link to={project.link} className="group block text-center">
                <div className="aspect-[4/5] overflow-hidden bg-black/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-opacity group-hover:opacity-90"
                  />
                </div>
                <p
                  className="mt-3 uppercase text-black transition-colors group-hover:text-[#be1e2d]"
                  style={{
                    ...switzer,
                    fontWeight: 500,
                    fontSize: '16px',
                  }}
                >
                  {project.title}
                </p>
                <p
                  className="mt-1 text-black transition-colors group-hover:text-[#be1e2d]"
                  style={{
                    ...switzer,
                    fontWeight: 500,
                    fontSize: '14px',
                  }}
                >
                  {project.year}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default SelectWorkPage;
