import React from 'react';
import { Link } from 'react-router-dom';

const CloverXBarbershop: React.FC = () => {
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
          Client · Graphic Design
        </p>
        <h1 className="font-sans font-bold text-4xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tighter text-brand-dark dark:text-brand-light uppercase">
          Clover X Barbershop
        </h1>
      </header>

      {/* CXB1 monogram + Tee side by side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
        <div className="bg-black overflow-hidden">
          <img src="/images/cxb-1.jpg" alt="Clover X Barbershop – Monogram" className="w-full h-full object-contain" />
        </div>
        <div className="bg-black overflow-hidden">
          <img src="/images/cxb-tee.jpg" alt="Clover X Barbershop – Tee" className="w-full h-full object-contain" />
        </div>
      </div>

      {/* Overview */}
      <section className="mb-12 md:mb-16">
        <div className="pt-4 border-t-2 border-brand-dark dark:border-brand-light">
          <div className="font-mono text-sm uppercase tracking-widest text-brand-dark/70 dark:text-brand-light/70 mb-2">
            Context
          </div>
          <p className="font-sans font-normal text-xl md:text-2xl tracking-tight text-brand-dark dark:text-brand-light leading-relaxed mb-4 mt-8">
            I designed merchandise graphics for Clover X Barbershop, based in Surrey, BC. The client wanted their brand to feel rugged and bold while still looking clean — something that could sit on a distressed t-shirt and still look professional.
          </p>
        </div>
      </section>

      {/* Remaining images in 2-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
        <div className="bg-black overflow-hidden">
          <img src="/images/cxb-3.jpg" alt="Clover X Barbershop – Wordmark" className="w-full h-full object-contain" />
        </div>
        <div className="bg-black overflow-hidden">
          <img src="/images/cxb-2.jpg" alt="Clover X Barbershop – Logo" className="w-full h-full object-contain" />
        </div>
        <div className="bg-black overflow-hidden">
          <img src="/images/cxb-5.jpg" alt="Clover X Barbershop – 5" className="w-full h-full object-contain" />
        </div>
        <div className="bg-black overflow-hidden">
          <img src="/images/cxb-6.jpg" alt="Clover X Barbershop – 6" className="w-full h-full object-contain" />
        </div>
      </div>
    </div>
  );
};

export default CloverXBarbershop;
