import React from 'react';
import ProjectPageLayout from '../components/ProjectPageLayout';

const switzer: React.CSSProperties = {
  fontFamily: "'Switzer', sans-serif",
};

const NikePegasus: React.FC = () => {
  return (
    <ProjectPageLayout title="Nike Pegasus" meta="Graphic Design · 2026" backTo="/projects">
      <p
        className="max-w-2xl mb-10 text-black/70"
        style={{ ...switzer, fontWeight: 500, fontSize: '16px', lineHeight: 1.6 }}
      >
        A layout study for the Nike Pegasus Premium — product storytelling through type, hierarchy,
        and technical detail.
      </p>

      <div className="max-w-4xl mx-auto">
        <img
          src="/images/nike-pegasus/pegasus.png"
          alt="Nike Pegasus Premium"
          className="w-full h-auto block"
        />
      </div>
    </ProjectPageLayout>
  );
};

export default NikePegasus;
