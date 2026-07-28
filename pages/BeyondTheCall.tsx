import React from 'react';
import ProjectPageLayout from '../components/ProjectPageLayout';
import HorizontalScrollGallery from '../components/HorizontalScrollGallery';
import { beyondTheCallGallery } from '../lib/projects';

const switzer: React.CSSProperties = {
  fontFamily: "'Switzer', sans-serif",
};

const BeyondTheCall: React.FC = () => {
  return (
    <ProjectPageLayout
      title="Beyond The Call"
      meta="Graphic Design · 2026"
      backTo="/projects"
    >
      <p
        className="max-w-2xl mb-10 text-black/70"
        style={{ ...switzer, fontWeight: 500, fontSize: '16px', lineHeight: 1.6 }}
      >
        Poster designs exploring service, urgency, and visual intensity through high-contrast
        graphic treatments.
      </p>

      <HorizontalScrollGallery
        items={beyondTheCallGallery.map((item) => ({
          id: item.id,
          src: item.image,
          alt: item.title,
          caption: item.title,
        }))}
      />
    </ProjectPageLayout>
  );
};

export default BeyondTheCall;
