import React from 'react';
import ProjectPageLayout from '../components/ProjectPageLayout';

const switzer: React.CSSProperties = {
  fontFamily: "'Switzer', sans-serif",
};

const CloverXBarbershop: React.FC = () => {
  return (
    <ProjectPageLayout title="Clover X Barbershop" meta="Client · Graphic Design">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-10 md:mb-14">
        <div className="bg-black overflow-hidden">
          <img
            src="/images/cxb-1.jpg"
            alt="Clover X Barbershop – Monogram"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="bg-black overflow-hidden">
          <img
            src="/images/cxb-tee.jpg"
            alt="Clover X Barbershop – Tee"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      <section className="mb-12 md:mb-16 max-w-3xl">
        <div className="pt-4 border-t border-black/20">
          <p
            className="uppercase tracking-widest text-black/50 mb-3"
            style={{ ...switzer, fontWeight: 500, fontSize: '12px' }}
          >
            Context
          </p>
          <p
            className="text-black leading-relaxed"
            style={{ ...switzer, fontWeight: 500, fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)' }}
          >
            I designed merchandise graphics for Clover X Barbershop, based in Surrey, BC. The client
            wanted their brand to feel rugged and bold while still looking clean — something that
            could sit on a distressed t-shirt and still look professional.
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="bg-black overflow-hidden">
          <img
            src="/images/cxb-3.jpg"
            alt="Clover X Barbershop – Wordmark"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="bg-black overflow-hidden">
          <img
            src="/images/cxb-2.jpg"
            alt="Clover X Barbershop – Logo"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="bg-black overflow-hidden">
          <img
            src="/images/cxb-5.jpg"
            alt="Clover X Barbershop – 5"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="bg-black overflow-hidden">
          <img
            src="/images/cxb-6.jpg"
            alt="Clover X Barbershop – 6"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </ProjectPageLayout>
  );
};

export default CloverXBarbershop;
