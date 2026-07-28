import React from 'react';
import ProjectPageLayout from '../components/ProjectPageLayout';

const switzer: React.CSSProperties = {
  fontFamily: "'Switzer', sans-serif",
};

const BrokenYolk: React.FC = () => {
  return (
    <ProjectPageLayout title="The Broken Yolk" meta="Layout Design · 2025">
      <div className="overflow-hidden mb-10 md:mb-14 max-w-[95%]">
        <img
          src="/images/brokenyolk-logo.jpg"
          alt="The Broken Yolk – Logo"
          className="w-full h-auto object-contain"
        />
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
            For a class assignment, I designed a brunch menu using pre-existing menu items. I pushed
            the art direction toward a futuristic look — while keeping the layout clean and readable.
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-[95%] mb-4 md:mb-6">
        <img
          src="/images/brokenyolk-1.jpg"
          alt="The Broken Yolk – 1"
          className="w-full h-auto object-cover"
        />
        <img
          src="/images/brokenyolk-2.jpg"
          alt="The Broken Yolk – 2"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-[95%]">
        <img
          src="/images/brokenyolk-3.jpg"
          alt="The Broken Yolk – 3"
          className="w-full h-auto object-cover"
        />
        <img
          src="/images/brokenyolk-4.jpg"
          alt="The Broken Yolk – 4"
          className="w-full h-auto object-cover"
        />
      </div>
    </ProjectPageLayout>
  );
};

export default BrokenYolk;
