import React from 'react';
import { Link } from 'react-router-dom';

const Triunity: React.FC = () => {
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
          Client Branding · 2024 / 2025
        </p>
        <h1 className="font-sans font-bold text-4xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tighter text-brand-dark dark:text-brand-light uppercase">
          Triunity Martial Arts
        </h1>
      </header>

      {/* Triunity 1 on top (slight zoom to remove side margins) */}
      <div className="aspect-video bg-black overflow-hidden mb-12 md:mb-16">
        <img
          src="/images/triunity-1.png"
          alt="Triunity Martial Arts – Logo 1"
          className="w-full h-full object-cover scale-105"
        />
      </div>

      {/* Context */}
      <section className="mb-12 md:mb-16">
        <div className="pt-4 border-t-2 border-brand-dark dark:border-brand-light">
          <div className="font-mono text-sm uppercase tracking-widest text-brand-dark/70 dark:text-brand-light/70 mb-2">
            Context
          </div>
          <p className="font-sans font-normal text-xl md:text-2xl tracking-tight text-brand-dark dark:text-brand-light leading-relaxed mb-4 mt-8">
            I was hired by Triunity Martial Arts to design graphics for their new gym apparel. Every decision was made with two settings in mind — how the fighters would look wearing these in the ring and how they'd carry that same energy outside the gym.
          </p>
        </div>
      </section>

      {/* Triunity 2 + 3 */} 
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
        <div className="bg-black overflow-hidden">
          <img src="/images/triunity-2.png" alt="Triunity Martial Arts – Logo 2" className="w-full h-full object-contain" />
        </div>
        <div className="bg-black overflow-hidden">
          <img src="/images/triunity-3.png" alt="Triunity Martial Arts – Logo 3" className="w-full h-full object-contain" />
        </div>
      </div>

      {/* Dragon image */} 
      <div className="w-fit mx-auto flex items-center justify-center">
        <img
          src="/images/triunity-4.png"
          alt="Triunity Martial Arts – Dragon"
          className="w-auto max-w-full h-auto object-contain max-h-[70vh] md:max-h-[640px] block"
        />
      </div>
    </div>
  );
};

export default Triunity;
