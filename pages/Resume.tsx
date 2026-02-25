import React from 'react';
import { Link } from 'react-router-dom';
import resumeImg from '../KunwarManshahiaResume.jpg';
import resumePdf from '../KunwarManshahiaResume.pdf';

const Resume: React.FC = () => {
  return (
    <div className="px-4 md:px-8 lg:px-12 pt-4 md:pt-6 pb-4 md:pb-6 max-w-[1920px] mx-auto w-full">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm font-sans font-medium text-brand-dark/60 dark:text-brand-light/60 md:hover:text-orange-500 md:dark:hover:text-orange-400 transition-colors mb-8"
      >
        ← Back
      </Link>

      <header className="mb-6 md:mb-8">
        <p className="font-mono font-normal text-xs md:text-sm text-brand-dark/50 dark:text-brand-light/50 uppercase tracking-wider mb-3">
          Resume
        </p>
        <h1 className="font-sans font-bold text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tighter text-brand-dark dark:text-brand-light">
          CURRENT CV.
        </h1>
      </header>

      <section className="space-y-6">
        <div className="w-full max-w-3xl rounded border border-brand-dark/10 dark:border-brand-light/15 overflow-hidden bg-brand-light/10 dark:bg-brand-dark/40">
          <img
            src={resumeImg}
            alt="Kunwar Manshahia — Resume"
            className="w-full h-auto block"
          />
        </div>

        <div className="max-w-xl space-y-4">
          <p className="font-sans text-base md:text-lg text-brand-dark dark:text-brand-light leading-relaxed">
            You can download my latest resume as a PDF. If you want to talk through experience, projects, or fit, just reach out on LinkedIn or email.
          </p>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
            <a
              href={resumePdf}
              download
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-brand-dark/40 dark:border-brand-light/40 font-mono text-xs md:text-sm uppercase tracking-[0.18em] text-brand-dark dark:text-brand-light bg-transparent md:hover:bg-orange-500 md:hover:text-white md:dark:hover:bg-orange-500 md:dark:hover:text-white transition-colors"
            >
              download pdf
            </a>
            <a
              href="https://linkedin.com/in/kunwarmanshahia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-brand-dark/40 dark:border-brand-light/40 font-mono text-xs md:text-sm uppercase tracking-[0.18em] text-brand-dark dark:text-brand-light bg-transparent md:hover:bg-orange-500 md:hover:text-white md:dark:hover:bg-orange-500 md:dark:hover:text-white transition-colors"
            >
              linkedin
            </a>
            <a
              href="mailto:bykunwar@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-brand-dark/40 dark:border-brand-light/40 font-mono text-xs md:text-sm uppercase tracking-[0.18em] text-brand-dark dark:text-brand-light bg-transparent md:hover:bg-orange-500 md:hover:text-white md:dark:hover:bg-orange-500 md:dark:hover:text-white transition-colors"
            >
              email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;

