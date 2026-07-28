import React from 'react';
import { Link } from 'react-router-dom';

const switzer: React.CSSProperties = {
  fontFamily: "'Switzer', sans-serif",
};

type ProjectPageLayoutProps = {
  title: string;
  meta?: string;
  backTo?: string;
  children: React.ReactNode;
};

/** Shared project template: back link, then large title underneath (La Haine style). */
const ProjectPageLayout: React.FC<ProjectPageLayoutProps> = ({
  title,
  meta,
  backTo = '/',
  children,
}) => {
  return (
    <div className="min-h-screen text-black" style={{ background: '#f4f4f2' }}>
      <div className="px-4 sm:px-8 lg:px-12 pt-5 pb-16 max-w-[1920px] mx-auto w-full">
        <Link
          to={backTo}
          className="inline-block uppercase transition-colors text-black/50 hover:text-[#be1e2d]"
          style={{ ...switzer, fontWeight: 500, fontSize: '12px' }}
        >
          ← Back
        </Link>

        <header className="mt-8 mb-12 md:mb-16">
          {meta && (
            <p
              className="uppercase tracking-wider mb-4 text-black/50"
              style={{ ...switzer, fontWeight: 500, fontSize: '12px' }}
            >
              {meta}
            </p>
          )}
          <h1
            className="uppercase leading-[1.05] tracking-tight text-black"
            style={{
              ...switzer,
              fontWeight: 700,
              fontSize: 'clamp(2.5rem, 8vw, 5.5rem)',
            }}
          >
            {title}
          </h1>
        </header>

        {children}
      </div>
    </div>
  );
};

export default ProjectPageLayout;
