import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  listedProjects,
  warplanesGallery,
  lahaineGallery,
  sfsGallery,
  judgeByTheCoverGallery,
  wrcGallery,
  cirroGallery,
  beyondTheCallGallery,
  typographyGallery,
} from '../lib/projects';
import ProjectGridItem, { ImageLightbox } from '../components/ProjectGridItem';
import SiteHeader from '../components/SiteHeader';

const switzer: React.CSSProperties = {
  fontFamily: "'Switzer', sans-serif",
};

type LightboxState = { src: string; alt: string } | null;

const SectionTitle: React.FC<{ title: string; year: string; to?: string }> = ({
  title,
  year,
  to,
}) => {
  const body = (
    <>
      <p
        className={`uppercase text-black ${to ? 'transition-colors group-hover:text-[#be1e2d]' : ''}`}
        style={{ ...switzer, fontWeight: 500, fontSize: '16px' }}
      >
        {title}
      </p>
      <p
        className={`mt-1 text-black ${to ? 'transition-colors group-hover:text-[#be1e2d]' : ''}`}
        style={{ ...switzer, fontWeight: 500, fontSize: '14px' }}
      >
        {year}
      </p>
    </>
  );

  if (to) {
    return (
      <Link to={to} className="group mt-3 inline-block text-center">
        {body}
      </Link>
    );
  }

  return <div className="mt-3 inline-block text-center">{body}</div>;
};

const ProjectsPage: React.FC = () => {
  const [lightbox, setLightbox] = useState<LightboxState>(null);

  const openLightbox = (src: string, alt: string) => setLightbox({ src, alt });

  const triunity = listedProjects.find((p) => p.id === 'triunity');
  const nike = listedProjects.find((p) => p.id === 'nike-pegasus');

  return (
    <div className="min-h-screen text-black" style={{ background: '#f4f4f2' }}>
      <SiteHeader seeAllActive />

      <main className="px-4 sm:px-8 pt-10 pb-16 text-center">
        <section id="warplanes" aria-label="Warplanes" className="mx-auto max-w-6xl mb-20 scroll-mt-20">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 sm:gap-x-6 gap-y-6 sm:gap-y-10">
            {warplanesGallery.map((item, index) => (
              <ProjectGridItem
                key={item.id}
                title={item.title}
                year={item.year}
                image={item.image}
                link="/project/warplanes"
                hideMeta
                centerInRow={index === warplanesGallery.length - 1}
              />
            ))}
          </ul>
          <SectionTitle title="Warplanes" year="2026" to="/project/warplanes" />
        </section>

        <section
          id="wrc"
          aria-label="World Rally Championship (WRC)"
          className="mx-auto max-w-6xl mb-20 scroll-mt-20"
        >
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 sm:gap-x-6 gap-y-6 sm:gap-y-10">
            {wrcGallery.map((item) => (
              <ProjectGridItem
                key={item.id}
                title={item.title}
                year={item.year}
                image={item.image}
                hideMeta
                lockColumn
                onOpen={() => openLightbox(item.image, item.title)}
              />
            ))}
          </ul>
          <SectionTitle title="World Rally Championship (WRC)" year="2026" />
        </section>

        <section
          id="judge-by-the-cover"
          aria-label="Judge By The Cover"
          className="mx-auto max-w-6xl mb-20 scroll-mt-20"
        >
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 sm:gap-x-6 gap-y-6 sm:gap-y-10">
            {judgeByTheCoverGallery.map((item) => (
              <ProjectGridItem
                key={item.id}
                title={item.title}
                year={item.year}
                image={item.image}
                hideMeta
                lockColumn
                onOpen={() => openLightbox(item.image, item.title)}
              />
            ))}
          </ul>
          <SectionTitle title="Judge By The Cover" year="2026" />
        </section>

        <section
          id="beyond-the-call"
          aria-label="Beyond The Call"
          className="mx-auto max-w-6xl mb-20 scroll-mt-20"
        >
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 sm:gap-x-6 gap-y-6 sm:gap-y-10">
            {beyondTheCallGallery.map((item) => (
              <ProjectGridItem
                key={item.id}
                title={item.title}
                year={item.year}
                image={item.image}
                hideMeta
                lockColumn
                onOpen={() => openLightbox(item.image, item.title)}
              />
            ))}
          </ul>
          <SectionTitle title="Beyond The Call" year="2026" />
        </section>

        <section id="typography" aria-label="Typography" className="mx-auto max-w-6xl mb-20 scroll-mt-20">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 sm:gap-x-6 gap-y-6 sm:gap-y-10">
            {typographyGallery.map((item) => (
              <ProjectGridItem
                key={item.id}
                title={item.title}
                year={item.year}
                image={item.image}
                hideMeta
                lockColumn
                onOpen={() => openLightbox(item.image, item.title)}
              />
            ))}
          </ul>
          <SectionTitle title="Typography" year="2026" />
        </section>

        <section id="cirro" aria-label="Cirro Energy" className="mx-auto max-w-6xl mb-20 scroll-mt-20">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 sm:gap-x-6 gap-y-6 sm:gap-y-10">
            {cirroGallery.map((item) => (
              <ProjectGridItem
                key={item.id}
                title={item.title}
                year={item.year}
                image={item.image}
                hideMeta
                lockColumn
                onOpen={() => openLightbox(item.image, item.title)}
              />
            ))}
          </ul>
          <SectionTitle title="Cirro Energy" year="2026" />
        </section>

        {nike && (
          <section
            id="nike-pegasus"
            aria-label="Nike Pegasus"
            className="mx-auto max-w-6xl mb-20 scroll-mt-20"
          >
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 sm:gap-x-6 gap-y-6 sm:gap-y-10">
              <ProjectGridItem
                title={nike.title}
                year={nike.year}
                image={nike.image}
                lockColumn
                centerInRow
                hideMeta
                onOpen={() => openLightbox(nike.image, nike.title)}
              />
            </ul>
            <SectionTitle title="Nike Pegasus" year="2026" />
          </section>
        )}

        <section id="la-haine" aria-label="La Haine" className="mx-auto max-w-6xl mb-20 scroll-mt-20">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 sm:gap-x-6 gap-y-6 sm:gap-y-10">
            {lahaineGallery.map((item, index) => (
              <ProjectGridItem
                key={item.id}
                title={item.title}
                year={item.year}
                image={item.image}
                hideMeta
                centerInRow={index === lahaineGallery.length - 1}
                onOpen={() => openLightbox(item.image, item.title)}
              />
            ))}
          </ul>
          <SectionTitle title="La Haine" year="2025" />
        </section>

        {triunity && (
          <section
            id="triunity"
            aria-label="Triunity Martial Arts"
            className="mx-auto max-w-6xl mb-20 scroll-mt-20"
          >
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 sm:gap-x-6 gap-y-6 sm:gap-y-10">
              <ProjectGridItem
                title={triunity.title}
                year={triunity.year}
                image={triunity.image}
                link={triunity.link}
                hideMeta
                centerInRow
              />
            </ul>
            <SectionTitle title="Triunity Martial Arts" year="2025" to={triunity.link} />
          </section>
        )}

        <section
          id="signatures-for-sound"
          aria-label="Signatures for Sound"
          className="mx-auto max-w-6xl scroll-mt-20"
        >
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 sm:gap-x-6 gap-y-6 sm:gap-y-10">
            {sfsGallery.map((item) => (
              <ProjectGridItem
                key={item.id}
                title={item.title}
                year={item.year}
                image={item.image}
                hideMeta
                lockColumn
                onOpen={() => openLightbox(item.image, item.title)}
              />
            ))}
          </ul>
          <SectionTitle title="Signatures for Sound" year="2025" />
        </section>
      </main>

      {lightbox && (
        <ImageLightbox
          src={lightbox.src}
          alt={lightbox.alt}
          onClose={() => setLightbox(null)}
        />
      )}
    </div>
  );
};

export default ProjectsPage;
