import React from 'react';
import ProjectPageLayout from '../components/ProjectPageLayout';
import HorizontalScrollGallery from '../components/HorizontalScrollGallery';
import { cirroGallery } from '../lib/projects';

const switzer: React.CSSProperties = {
  fontFamily: "'Switzer', sans-serif",
};

const Cirro: React.FC = () => {
  return (
    <ProjectPageLayout title="Cirro Energy" meta="Graphic Design · 2026" backTo="/projects">
      <p
        className="max-w-2xl mb-10 text-black/70"
        style={{ ...switzer, fontWeight: 500, fontSize: '16px', lineHeight: 1.6 }}
      >
        Poster designs for Cirro Energy — wind power branding through texture, type, and collage
        composition.
      </p>

      <HorizontalScrollGallery
        items={cirroGallery.map((item) => ({
          id: item.id,
          src: item.image,
          alt: item.title,
          caption: item.title,
        }))}
      />
    </ProjectPageLayout>
  );
};

export default Cirro;
