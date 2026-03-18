import React from 'react';
import { Link } from 'react-router-dom';
import KunwarCartoon from '../components/CartoonFace';

const pageStyle = "min-h-[calc(100vh-5.5rem)] pt-6 md:pt-8 flex flex-col bg-brand-light dark:bg-brand-dark text-brand-dark dark:text-brand-light";
const containerStyle = "px-4 md:px-6 lg:px-8 w-full max-w-5xl lg:max-w-6xl mx-auto";
const gridStyle = "grid gap-8 md:gap-10 md:grid-cols-2 items-center";
const subtitleStyle = "font-mono text-[11px] md:text-xs uppercase tracking-[0.28em] text-brand-dark/70 dark:text-brand-light/70";
const headingStyle = "font-sans font-bold text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tighter text-brand-dark dark:text-brand-light";
const bioStyle = "font-sans text-sm md:text-base font-light text-brand-dark/85 dark:text-brand-light/85 leading-relaxed";
const linkStyle = "inline-block font-sans font-bold text-2xl md:text-3xl lg:text-4xl leading-[1.2] tracking-tighter text-brand-dark dark:text-brand-light uppercase md:hover:text-orange-500 md:dark:hover:text-orange-400 transition-colors";
const cartoonContainerStyle = "flex justify-center md:justify-end text-brand-dark dark:text-brand-light";

const Landing: React.FC = () => {
  return (
    <div className={pageStyle}>
      <main className="flex-1 flex items-center">
        <div className={containerStyle}>
          <div className={gridStyle}>
            <div className="space-y-5 md:space-y-6 max-w-xl">
              <div className="space-y-3">
                <p className={subtitleStyle}>
                  Creative Digital Designer
                </p>
                <h1 className={headingStyle}>
                  KUNWAR MANSHAHIA
                </h1>
              </div>

              <div className="max-w-md">
                <p className={bioStyle}>
                  I use design as a language to connect people, ideas, and culture—working across product, branding, and visual systems.
                </p>
              </div>

              <div className="pt-0.5">
                <Link to="/work" className={linkStyle}>
                  See all projects. →
                </Link>
              </div>
            </div>

            <div className={cartoonContainerStyle}>
              <KunwarCartoon className="w-full" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Landing;
