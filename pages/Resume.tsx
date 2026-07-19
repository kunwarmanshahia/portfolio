import React from 'react';
import { Link } from 'react-router-dom';
import resumeImg from '../KunwarManshahiaResume.jpg';
import resumePdf from '../KunwarManshahiaResume.pdf';
import Header from '../components/Header';

const Resume: React.FC = () => {
  return (
    <div className="min-h-screen bg-page text-ink">
      <Header />

      <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
        <Link to="/" className="text-sm font-medium text-accent hover:underline underline-offset-2">
          ← Back
        </Link>

        <h1 className="mt-8 text-[clamp(2rem,5vw,3rem)] font-bold uppercase tracking-tight text-ink">
          Resume
        </h1>
        <p className="mt-2 text-sm text-accent font-semibold uppercase tracking-wide">
          Graphic &amp; UX Designer
        </p>

        <div className="mt-10 w-full border border-ink/15 overflow-hidden">
          <img src={resumeImg} alt="Kunwar Manshahia — Resume" className="w-full h-auto block" />
        </div>

        <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
          <a
            href={resumePdf}
            download
            className="inline-flex items-center justify-center px-4 py-2.5 border border-ink text-xs font-bold uppercase tracking-[0.14em] text-ink hover:bg-accent hover:border-accent hover:text-white transition-colors"
          >
            Download PDF
          </a>
          <a
            href="https://linkedin.com/in/kunwarmanshahia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2.5 border border-ink text-xs font-bold uppercase tracking-[0.14em] text-ink hover:bg-accent hover:border-accent hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:bykunwar@gmail.com"
            className="inline-flex items-center justify-center px-4 py-2.5 border border-ink text-xs font-bold uppercase tracking-[0.14em] text-ink hover:bg-accent hover:border-accent hover:text-white transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
