import React from 'react';
import { Link } from 'react-router-dom';
import KunwarCartoon from '../components/CartoonFace';

const pageStyle = "min-h-[calc(100vh-5.5rem)] pt-6 md:pt-8 flex flex-col bg-brand-light dark:bg-brand-dark text-brand-dark dark:text-brand-light"; // this is the page styling.
const containerStyle = "px-4 md:px-6 lg:px-8 w-full max-w-5xl lg:max-w-6xl mx-auto";
const gridStyle = "grid gap-8 md:gap-8 md:grid-cols-[1.05fr_0.95fr] items-center";
const headingStyle = "font-sans font-bold text-[3.15rem] md:text-[5.25rem] lg:text-[6.3rem] leading-[1.05] tracking-tighter text-brand-dark dark:text-brand-light";
const bioStyle = "font-sans text-[1.1rem] md:text-[1.4rem] font-light text-brand-dark/85 dark:text-brand-light/85 leading-relaxed";
const linkStyle = "inline-block font-sans font-bold text-[2.1rem] md:text-[2.6rem] lg:text-[3.15rem] leading-[1.2] tracking-tighter text-brand-dark dark:text-brand-light uppercase md:hover:text-orange-500 md:dark:hover:text-orange-400 transition-colors";
const cartoonContainerStyle = "flex justify-center text-brand-dark dark:text-brand-light";

// react function component AKA it tells TypeScript that this is a valid React component.
const Landing: React.FC = () => {
  return (
    <div className={pageStyle}>
      <main className="flex-1 flex items-center">
        <div className={containerStyle}>
          <div className={gridStyle}>
            <div className="space-y-5 md:space-y-6 max-w-xl md:pr-6">
              <div className="space-y-3">
                <h1 className={headingStyle}>
                  KUNWAR MANSHAHIA
                </h1>
              </div>

              <div className="max-w-md">
                <p className={bioStyle}>
                  To me, design is a way to mix stories, emotions, and rhythm into a language that people can connect to.
                </p>
              </div>

              <div className="pt-0.5">
                <Link to="/work" className={linkStyle}>
                  See my work. →
                </Link>
              </div>
            </div>

            <div className={`${cartoonContainerStyle} overflow-visible`}>
              <div className="w-full max-w-lg md:max-w-xl scale-[1.7] origin-center mx-auto md:-translate-x-6">
                <KunwarCartoon className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Landing;
