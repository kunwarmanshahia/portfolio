import React from 'react';
import ProjectPageLayout from '../components/ProjectPageLayout';
import HorizontalScrollGallery from '../components/HorizontalScrollGallery';
import { wrcGallery } from '../lib/projects';

const switzer: React.CSSProperties = {
  fontFamily: "'Switzer', sans-serif",
};

const WRC: React.FC = () => {
  return (
    <ProjectPageLayout
      title="World Rally Championship (WRC)"
      meta="Graphic Design · 2026"
      backTo="/projects"
    >
      <p
        className="max-w-2xl mb-10 text-black/70"
        style={{ ...switzer, fontWeight: 500, fontSize: '16px', lineHeight: 1.6 }}
      >
        Poster designs for the World Rally Championship — driver profiles and event covers built
        around colour, type, and the speed of the sport.
      </p>

      <HorizontalScrollGallery
        items={wrcGallery.map((item) => ({
          id: item.id,
          src: item.image,
          alt: item.title,
          caption: item.title,
        }))}
      />
    </ProjectPageLayout>
  );
};

export default WRC;
