import React from 'react';
import ProjectPageLayout from '../components/ProjectPageLayout';
import HorizontalScrollGallery from '../components/HorizontalScrollGallery';

const switzer: React.CSSProperties = {
  fontFamily: "'Switzer', sans-serif",
};

const gallery = [
  { id: 'triunity-2', src: '/images/triunity-2.jpg', alt: 'Triunity Martial Arts – 2' },
  { id: 'triunity-3', src: '/images/triunity-3.jpg', alt: 'Triunity Martial Arts – 3' },
  { id: 'triunity-4', src: '/images/triunity-4.jpg', alt: 'Triunity Martial Arts – 4' },
  { id: 'triunity-1', src: '/images/triunity-1.jpg', alt: 'Triunity Martial Arts – 1' },
];

const Triunity: React.FC = () => {
  return (
    <ProjectPageLayout
      title="Triunity Martial Arts"
      meta="Client Branding · 2024 / 2025"
      backTo="/select-work"
    >
      <p
        className="max-w-2xl mb-10 text-black/70"
        style={{ ...switzer, fontWeight: 500, fontSize: '16px', lineHeight: 1.6 }}
      >
        I was hired by Triunity Martial Arts to design graphics for their new gym apparel. Every
        decision was made with two settings in mind — how the fighters would look wearing these in
        the ring and how they&apos;d carry that same energy outside the gym.
      </p>

      <HorizontalScrollGallery items={gallery} />
    </ProjectPageLayout>
  );
};

export default Triunity;
