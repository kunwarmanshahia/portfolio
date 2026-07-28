import React from 'react';
import ProjectPageLayout from '../components/ProjectPageLayout';
import HorizontalScrollGallery from '../components/HorizontalScrollGallery';
import { typographyGallery } from '../lib/projects';

const switzer: React.CSSProperties = {
  fontFamily: "'Switzer', sans-serif",
};

const Typography: React.FC = () => {
  return (
    <ProjectPageLayout title="Typography" meta="Graphic Design · 2026" backTo="/projects">
      <p
        className="max-w-2xl mb-10 text-black/70"
        style={{ ...switzer, fontWeight: 500, fontSize: '16px', lineHeight: 1.6 }}
      >
        A set of poster experiments built around type as the primary visual — rhythm, contrast, and
        voice through letterforms.
      </p>

      <HorizontalScrollGallery
        items={typographyGallery.map((item) => ({
          id: item.id,
          src: item.image,
          alt: item.title,
          caption: item.title,
        }))}
      />
    </ProjectPageLayout>
  );
};

export default Typography;
