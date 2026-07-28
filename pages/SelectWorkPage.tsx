import React from 'react';
import { Link } from 'react-router-dom';
import { selectWorkProjects } from '../lib/projects';
import SiteHeader from '../components/SiteHeader';

const switzer: React.CSSProperties = {
  fontFamily: "'Switzer', sans-serif",
};

const SelectWorkPage: React.FC = () => {
  return (
    <div className="min-h-screen text-black flex flex-col" style={{ background: '#f4f4f2' }}>
      <SiteHeader selectWorkActive />

      <main className="flex-1 flex items-center px-4 sm:px-8 py-10">
        <ul className="w-full flex flex-col sm:flex-row sm:justify-center gap-6 md:gap-8 list-none p-0 m-0">
          {selectWorkProjects.map((project) => (
            <li key={project.id} className="w-full sm:w-[calc((100%-4rem)/3)] shrink-0">
              <Link to={project.link} className="group block text-center">
                <div className="aspect-[4/5] overflow-hidden bg-black/5">
                  <img
                    src={project.selectWorkImage ?? project.image}
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
