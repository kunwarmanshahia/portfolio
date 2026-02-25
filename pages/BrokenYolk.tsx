import React from 'react';
import { Link } from 'react-router-dom';

const BrokenYolk: React.FC = () => {
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
          The Broken Yolk
        </h1>
      </header>

      {/* Logo on top */}
      <div className="overflow-hidden mb-8 md:mb-12 max-w-[95%] mx-auto">
        <img
          src="/images/brokenyolk-logo.png"
          alt="The Broken Yolk – Logo"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Context */}
      <section className="mb-12 md:mb-16">
        <div className="pt-4 border-t-2 border-brand-dark dark:border-brand-light">
          <div className="font-mono text-sm uppercase tracking-widest text-brand-dark/70 dark:text-brand-light/70 mb-2">
            Context
          </div>
          <p className="font-sans font-normal text-xl md:text-2xl tracking-tight text-brand-dark dark:text-brand-light leading-relaxed mb-4 mt-8">
            For a class assignment, I designed a brunch menu using pre-existing menu items. I pushed the art direction toward a futuristic look — while keeping the layout clean and readable.
          </p>
        </div>
      </section>

      {/* Row 1: 1, 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-[95%] mx-auto mb-4 md:mb-6">
        <div className="overflow-hidden">
          <img src="/images/brokenyolk-1.png" alt="The Broken Yolk – 1" className="w-full h-full object-cover" />
        </div>
        <div className="overflow-hidden">
          <img src="/images/brokenyolk-2.png" alt="The Broken Yolk – 2" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Row 2: 3, 4 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-[95%] mx-auto mb-4 md:mb-6">
        <div className="overflow-hidden">
          <img src="/images/brokenyolk-3.png" alt="The Broken Yolk – 3" className="w-full h-full object-cover" />
        </div>
        <div className="overflow-hidden">
          <img src="/images/brokenyolk-4.png" alt="The Broken Yolk – 4" className="w-full h-full object-cover" />
        </div>
      </div>

    </div>
  );
};

export default BrokenYolk;

