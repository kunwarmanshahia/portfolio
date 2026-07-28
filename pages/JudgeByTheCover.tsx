import React from 'react';
import ProjectPageLayout from '../components/ProjectPageLayout';
import HorizontalScrollGallery from '../components/HorizontalScrollGallery';
import { judgeByTheCoverGallery } from '../lib/projects';

const switzer: React.CSSProperties = {
  fontFamily: "'Switzer', sans-serif",
};

const JudgeByTheCover: React.FC = () => {
  return (
    <ProjectPageLayout
      title="Judge By The Cover"
      meta="Print Design · 2026"
      backTo="/projects"
    >
      <p
        className="max-w-2xl mb-10 text-black/70"
        style={{ ...switzer, fontWeight: 500, fontSize: '16px', lineHeight: 1.6 }}
      >
        A series of cover designs exploring how type, colour, and composition sell a story before
        you open the first page.
      </p>

      <HorizontalScrollGallery
        items={judgeByTheCoverGallery.map((item) => ({
          id: item.id,
          src: item.image,
          alt: item.title,
          caption: item.title,
        }))}
      />
    </ProjectPageLayout>
  );
};

export default JudgeByTheCover;
