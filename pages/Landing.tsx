import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SELECTED_WORK = [
  {
    id: 'mosaic',
    title: 'Mosaic',
    meta: 'UX/UI · 2025',
    image: '/images/covers/mosaic-cover.jpg?v=2',
    href: '/case-study/mosaic',
  },
  {
    id: 'triunity',
    title: 'Triunity Martial Arts',
    meta: 'Client Branding · 2025',
    image: '/TriunityCarousel.jpg?v=2',
    href: '/project/triunity',
  },
  {
    id: 'cxb',
    title: 'Clover X Barbershop',
    meta: 'Client Branding · 2025',
    image: '/CXBCarousel.jpg',
    href: '/project/clover-x-barbershop',
  },
];

const Landing: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SELECTED_WORK.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const currentProject = SELECTED_WORK[activeIndex];

  return (
    <div className="min-h-[calc(100vh-5.5rem)] pt-6 md:pt-8 flex flex-col bg-brand-light dark:bg-brand-dark text-brand-dark dark:text-brand-light">
      <main className="flex-1 flex items-center">
        <div className="px-4 md:px-6 lg:px-8 w-full max-w-5xl lg:max-w-6xl mx-auto">
          <div className="transform scale-[1.1] md:scale-[1.15] origin-center">
            <div className="grid gap-4 md:gap-5 lg:gap-6 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1.05fr)] items-center">
            {/* Hero copy */}
            <div className="space-y-5 md:space-y-6 max-w-xl">
              <div className="space-y-3">
                <p className="font-mono text-[11px] md:text-xs uppercase tracking-[0.28em] text-brand-dark/70 dark:text-brand-light/70">
                  Creative Digital Designer
                </p>
                <h1 className="font-sans font-bold text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tighter text-brand-dark dark:text-brand-light">
                  KUNWAR MANSHAHIA
                </h1>
              </div>

              <div className="max-w-md">
                <p className="font-sans text-sm md:text-base font-light text-brand-dark/85 dark:text-brand-light/85 leading-relaxed">
                  I use design as a language to connect people, ideas, and culture—working across product, branding, and visual systems.
                </p>
              </div>

              <div className="pt-0.5">
                <Link
                  to="/work"
                  className="inline-block font-sans font-bold text-2xl md:text-3xl lg:text-4xl leading-[1.2] tracking-tighter text-brand-dark dark:text-brand-light uppercase md:hover:text-orange-500 md:dark:hover:text-orange-400 transition-colors"
                >
                  See all projects. →
                </Link>
              </div>
            </div>

            {/* Selected work carousel */}
            <section className="space-y-3 md:space-y-4">
              <h2 className="font-sans font-bold text-xl md:text-2xl lg:text-3xl leading-[1.1] tracking-tighter text-brand-dark dark:text-brand-light uppercase">
                Selected Work.
              </h2>
              <div className="space-y-3">
                <Link
                  to={currentProject.href}
                  className="group block text-brand-dark dark:text-brand-light"
                >
                  <img
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="w-full h-auto max-h-[32vh] md:max-h-[40vh] object-cover transition-transform duration-500 ease-out"
                  />
                  <div className="mt-2.5 flex items-baseline justify-between gap-3">
                    <span className="font-sans text-sm md:text-base font-light text-brand-dark/85 dark:text-brand-light/85 leading-relaxed group-hover:text-orange-500 md:group-hover:text-orange-500 md:dark:group-hover:text-orange-400 transition-colors">
                      {currentProject.title}
                    </span>
                    <span className="font-mono text-[11px] md:text-xs uppercase tracking-[0.2em] text-brand-dark/60 dark:text-brand-light/60">
                      {currentProject.meta}
                    </span>
                  </div>
                </Link>

                <div className="flex items-center justify-center gap-1.5 pt-0.5">
                  {SELECTED_WORK.map((project, index) => (
                    <button
                      key={project.id}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                        index === activeIndex
                          ? 'bg-brand-dark dark:bg-brand-light'
                          : 'bg-brand-dark/20 dark:bg-brand-light/25'
                      }`}
                      aria-label={`Show ${project.title}`}
                    />
                  ))}
                </div>
              </div>
            </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Landing;

