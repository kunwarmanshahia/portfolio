import React from 'react';

const ForgeCaseStudy: React.FC = () => {
  return (
    <div className="px-4 md:px-8 lg:px-12 py-12 md:py-24 max-w-[1920px] mx-auto w-full">
      <article className="max-w-3xl mx-auto text-center">
        {/* App name + area of design */}
        <div className="font-mono text-sm md:text-base uppercase tracking-widest text-brand-dark dark:text-brand-light opacity-80 mb-4">
          forge — UX/UI
        </div>
        {/* Title */}
        <h1 className="font-sans font-normal text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-brand-dark dark:text-brand-light">
          Closing BC’s 80,000 Tradesworker Gap
        </h1>
      </article>
    </div>
  );
};

export default ForgeCaseStudy;
