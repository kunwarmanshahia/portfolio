import React from 'react';
import { Link } from 'react-router-dom';
import resumeImg from '../KunwarManshahiaResume.jpg';
import resumePdf from '../KunwarManshahiaResume.pdf';

const switzer: React.CSSProperties = {
  fontFamily: "'Switzer', sans-serif",
};

const Resume: React.FC = () => {
  return (
    <div className="min-h-screen text-black" style={{ background: '#f4f4f2' }}>
      <header className="w-full px-4 sm:px-8 pt-5 pb-4">
        <Link
          to="/"
          className="text-black hover:opacity-60 transition-opacity"
          style={{ ...switzer, fontWeight: 500, fontSize: '12px' }}
        >
          ← Kunwar Manshahia
        </Link>
      </header>

      <div className="mx-auto max-w-3xl px-4 sm:px-8 py-10">
        <h1 style={{ ...switzer, fontWeight: 700, fontSize: '28px' }}>Resume</h1>

        <div className="mt-8 w-full border border-black/10 overflow-hidden">
          <img src={resumeImg} alt="Kunwar Manshahia — Resume" className="w-full h-auto block" />
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={resumePdf}
            download
            className="inline-flex items-center justify-center px-4 py-2 border border-black/25 hover:bg-black hover:text-[#f4f4f2] transition-colors"
            style={{ ...switzer, fontWeight: 500, fontSize: '12px' }}
          >
            Download PDF
          </a>
          <a
            href="https://linkedin.com/in/kunwarmanshahia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 border border-black/25 hover:bg-black hover:text-[#f4f4f2] transition-colors"
            style={{ ...switzer, fontWeight: 500, fontSize: '12px' }}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
