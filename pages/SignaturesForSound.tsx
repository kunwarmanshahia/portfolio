import React from 'react';
import ProjectPageLayout from '../components/ProjectPageLayout';
import HorizontalScrollGallery from '../components/HorizontalScrollGallery';
import { sfsGallery } from '../lib/projects';

const switzer: React.CSSProperties = {
  fontFamily: "'Switzer', sans-serif",
};

const SignaturesForSound: React.FC = () => {
  return (
    <ProjectPageLayout
      title="Signatures for Sound"
      meta="Client Branding · 2025"
      backTo="/projects"
    >
      <p
        className="max-w-2xl mb-10 text-black/70"
        style={{ ...switzer, fontWeight: 500, fontSize: '16px', lineHeight: 1.6 }}
      >
        I moved from music into design but kept close ties to the industry. This is a selection of
        branding work for producers I&apos;m lucky to call friends, and who happen to be very
        talented.
      </p>

      <HorizontalScrollGallery
        items={sfsGallery.map((item) => ({
          id: item.id,
          src: item.image,
          alt: item.title,
          caption: item.title,
        }))}
      />
    </ProjectPageLayout>
  );
};

export default SignaturesForSound;
