import React from 'react';
import { Link } from 'react-router-dom';

const Gearbox: React.FC = () => {
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
          Layout Design · 2025
        </p>
        <h1 className="font-sans font-bold text-4xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tighter text-brand-dark dark:text-brand-light uppercase">
          GEARBOX Magazine
        </h1>
      </header>

      {/* Logo */}
      <div className="bg-black overflow-hidden mb-8 md:mb-12">
        <img src="/images/gearbox-logo.jpg" alt="GEARBOX – Logo" className="w-full h-full object-contain" />
      </div>

      {/* Context */}
      <section className="mb-12 md:mb-16">
        <div className="pt-4 border-t-2 border-brand-dark dark:border-brand-light">
          <div className="font-mono text-sm uppercase tracking-widest text-brand-dark/70 dark:text-brand-light/70 mb-2">
            Context
          </div>
          <p className="font-sans font-normal text-xl md:text-2xl tracking-tight text-brand-dark dark:text-brand-light leading-relaxed mb-4 mt-8">
            A typesetting and layout assignment — fit an article into a set number of pages with precise measurements. The cover was inspired by Kendrick Lamar's GNX and my own love for classic muscle cars. Shoutout TeamHHP.
          </p>
        </div>
      </section>

      {/* Row 1: 1, 2, 3 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
        <div className="bg-black overflow-hidden">
          <img src="/images/gearbox-1.jpg" alt="GEARBOX – 1" className="w-full h-full object-contain" />
        </div>
        <div className="bg-black overflow-hidden">
          <img src="/images/gearbox-2.jpg" alt="GEARBOX – 2" className="w-full h-full object-contain" />
        </div>
        <div className="bg-black overflow-hidden">
          <img src="/images/gearbox-3.jpg" alt="GEARBOX – 3" className="w-full h-full object-contain" />
        </div>
      </div>

      {/* Row 2: 4 full width */}
      <div className="bg-black overflow-hidden mb-4 md:mb-6">
        <img src="/images/gearbox-4.jpg" alt="GEARBOX – Magazine Cover" className="w-full h-full object-contain" />
      </div>

      {/* Row 3: 5, 6 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="bg-black overflow-hidden">
          <img src="/images/gearbox-5.jpg" alt="GEARBOX – 5" className="w-full h-full object-cover" />
        </div>
        <div className="bg-black overflow-hidden">
          <img src="/images/gearbox-6.jpg" alt="GEARBOX – 6" className="w-full h-full object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Gearbox;
