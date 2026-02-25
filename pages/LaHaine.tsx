import React from 'react';
import { Link } from 'react-router-dom';

const LaHaine: React.FC = () => {
  return (
    <div className="px-4 md:px-8 lg:px-12 pt-4 md:pt-6 pb-4 md:pb-6 max-w-[1920px] mx-auto w-full">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm font-sans font-medium text-brand-dark/60 dark:text-brand-light/60 md:hover:text-orange-500 md:dark:hover:text-orange-400 transition-colors mb-8"
      >
        ← Back
      </Link>

      <header className="mb-12 md:mb-16">
        <p className="font-mono font-normal text-xs md:text-sm text-brand-dark/50 dark:text-brand-light/50 uppercase tracking-wider mb-4">
          Print Design · 2025
        </p>
        <h1 className="font-sans font-bold text-4xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tighter text-brand-dark dark:text-brand-light uppercase">
          La Haine
        </h1>
      </header>

      {/* Cover image */}
      <div className="aspect-video overflow-hidden mb-8 md:mb-12 max-w-[95%] mx-auto">
        <img
          src="/images/lahaine-1.jpg"
          alt="La Haine – Cover"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Context */}
      <section className="mb-12 md:mb-16">
        <div className="pt-4 border-t-2 border-brand-dark dark:border-brand-light">
          <div className="font-mono text-sm uppercase tracking-widest text-brand-dark/70 dark:text-brand-light/70 mb-2">
            Context
          </div>
          <p className="font-sans font-normal text-xl md:text-2xl tracking-tight text-brand-dark dark:text-brand-light leading-relaxed mb-4 mt-8">
            La Haine is one of my favourite films. We had to make movie posters for a class assignment; it was the obvious pick. It gave me a chance to translate the energy of the film into design — a skill I excel at.
          </p>
        </div>
      </section>

      {/* Remaining images side by side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-[95%] mx-auto">
        <div className="overflow-hidden">
          <img src="/images/lahaine-2.jpg" alt="La Haine – 2" className="w-full h-full object-cover" />
        </div>
        <div className="overflow-hidden">
          <img src="/images/lahaine-3.jpg" alt="La Haine – 3" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default LaHaine;
