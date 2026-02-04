
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="px-4 md:px-8 lg:px-12 py-12 md:py-24 max-w-[1920px] mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <section className="space-y-12">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9] font-sans">
            Designing<br/>with intent,<br/>scaling with<br/>system.
          </h1>
          
          <div className="space-y-6 text-xl md:text-2xl font-light opacity-90 max-w-xl">
            <p>
              Kunwar is a multidisciplinary designer specializing in building cohesive digital experiences. 
              His approach blends rigorous systems thinking with a sharp aesthetic sensibility.
            </p>
            <p>
              Currently exploring the boundaries of generative design and spatial computing.
            </p>
          </div>
        </section>

        <section className="font-sans space-y-12 pt-12 md:pt-0">
          <div className="space-y-2">
            <h2 className="uppercase text-[10px] md:text-xs font-bold opacity-40 tracking-[0.2em]">Capabilities</h2>
            <ul className="text-lg space-y-1 font-medium">
              <li>Digital Strategy</li>
              <li>Visual Identity</li>
              <li>Product Design (UX/UI)</li>
              <li>Creative Coding</li>
              <li>Art Direction</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h2 className="uppercase text-[10px] md:text-xs font-bold opacity-40 tracking-[0.2em]">Connect</h2>
            <ul className="text-lg space-y-1 underline underline-offset-4 font-medium">
              <li><a href="mailto:hello@kunwar.com" className="hover:opacity-60 transition-opacity">Email</a></li>
              <li><a href="https://linkedin.com" className="hover:opacity-60 transition-opacity">LinkedIn</a></li>
              <li><a href="https://twitter.com" className="hover:opacity-60 transition-opacity">Twitter/X</a></li>
              <li><a href="https://instagram.com" className="hover:opacity-60 transition-opacity">Instagram</a></li>
            </ul>
          </div>

          <div className="space-y-2">
            <h2 className="uppercase text-[10px] md:text-xs font-bold opacity-40 tracking-[0.2em]">Location</h2>
            <p className="text-lg italic font-medium">Chandigarh, IN — Remote Worldwide</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
