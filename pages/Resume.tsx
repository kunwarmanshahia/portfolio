import React from 'react';
import { Link } from 'react-router-dom';
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

      <div className="mx-auto max-w-3xl px-4 sm:px-8 pb-10">
        <div className="w-full border border-black/10 overflow-hidden bg-white" style={{ minHeight: '70vh' }}>
          <iframe
            title="Kunwar Manshahia Resume"
            src={`${resumePdf}#toolbar=0&navpanes=0`}
            className="w-full border-0 block"
            style={{ height: 'min(85vh, 1100px)' }}
          />
        </div>

        <div className="mt-6">
          <a
            href={resumePdf}
            download="KunwarManshahiaResume.pdf"
            className="inline-flex items-center justify-center px-4 py-2 border border-black/25 hover:bg-black hover:text-[#f4f4f2] transition-colors"
            style={{ ...switzer, fontWeight: 500, fontSize: '12px' }}
          >
            Download PDF
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
