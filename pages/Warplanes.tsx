import React from 'react';
import ProjectPageLayout from '../components/ProjectPageLayout';
import HorizontalScrollGallery from '../components/HorizontalScrollGallery';
import { warplanesGallery } from '../lib/projects';

const switzer: React.CSSProperties = {
  fontFamily: "'Switzer', sans-serif",
};

const Warplanes: React.FC = () => {
  return (
    <ProjectPageLayout title="Warplanes" meta="Graphic Design · 2026" backTo="/select-work">
      <p
        className="max-w-2xl mb-10 text-black/70"
        style={{ ...switzer, fontWeight: 500, fontSize: '16px', lineHeight: 1.6 }}
      >
        A series of poster designs exploring millitary aircraft through colour, type, and texture
        experimentation. Created during my time at Brainchild.
      </p>

      <HorizontalScrollGallery
        items={warplanesGallery.map((item) => ({
          id: item.id,
          src: item.image,
          alt: item.title,
          caption: item.title,
        }))}
      />
    </ProjectPageLayout>
  );
};

export default Warplanes;
