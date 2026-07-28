export type Project = {
  id: string;
  title: string;
  year: string;
  image: string;
  /** Cover used on Select Work when different from See All */
  selectWorkImage?: string;
  link: string;
  selectWork?: boolean;
  /** Keep in files/routes, but omit from site listings */
  hidden?: boolean;
};

export type GalleryItem = {
  id: string;
  title: string;
  year: string;
  image: string;
  /** Include in homepage mouse-scrub */
  homeMouse?: boolean;
};

export const projects: Project[] = [
  {
    id: 'forge',
    title: 'Forge',
    year: '2025',
    image: '/images/covers/forge-cover.jpg',
    link: '/case-study/forge',
    hidden: true,
  },
  {
    id: 'mosaic',
    title: 'Mosaic',
    year: '2025',
    image: '/images/covers/mosaic-cover.jpg',
    link: '/case-study/mosaic',
    hidden: true,
  },
  {
    id: 'cxb',
    title: 'Clover X Barbershop',
    year: '2025',
    image: '/images/cxb-1.jpg',
    link: '/project/clover-x-barbershop',
    hidden: true,
  },
  {
    id: 'broken-yolk',
    title: 'The Broken Yolk',
    year: '2025',
    image: '/images/brokenyolk-cover.jpg',
    link: '/project/broken-yolk',
    hidden: true,
  },
  {
    id: 'warplanes',
    title: 'Warplanes',
    year: '2026',
    image: '/images/warplanes/saab-gripen-e.png',
    link: '/project/warplanes',
    selectWork: true,
  },
  {
    id: 'judge-by-the-cover',
    title: 'Judge By The Cover',
    year: '2026',
    image: '/images/judge-by-the-cover/universe-in-your-hand.png',
    link: '/project/judge-by-the-cover',
  },
  {
    id: 'wrc',
    title: 'World Rally Championship (WRC)',
    year: '2026',
    image: '/images/wrc/sebastien-ogier.png',
    link: '/project/wrc',
  },
  {
    id: 'cirro',
    title: 'Cirro Energy',
    year: '2026',
    image: '/images/cirro/cirro-poster-2.png',
    link: '/project/cirro',
  },
  {
    id: 'beyond-the-call',
    title: 'Beyond The Call',
    year: '2026',
    image: '/images/beyond-the-call/warfighter.png',
    link: '/project/beyond-the-call',
  },
  {
    id: 'typography',
    title: 'Typography',
    year: '2026',
    image: '/images/typography/brainchild.png',
    link: '/project/typography',
  },
  {
    id: 'nike-pegasus',
    title: 'Nike Pegasus',
    year: '2026',
    image: '/images/nike-pegasus/pegasus.png',
    link: '/project/nike-pegasus',
  },
  {
    id: 'triunity',
    title: 'Triunity Martial Arts',
    year: '2025',
    image: '/images/triunity-3.jpg',
    selectWorkImage: '/images/triunity-4.jpg',
    link: '/project/triunity',
    selectWork: true,
  },
  {
    id: 'lahaine',
    title: 'La Haine',
    year: '2025',
    image: '/images/lahaine-1.jpg',
    link: '/project/la-haine',
  },
  {
    id: 'sfs',
    title: 'Signatures for Sound',
    year: '2025',
    image: '/images/sfs-cover.jpg',
    link: '/project/signatures-for-sound',
  },
];

export const warplanesGallery: GalleryItem[] = [
  {
    id: 'ah64-apache',
    title: 'AH-64 Apache',
    year: '2026',
    image: '/images/warplanes/ah64-apache.png',
    homeMouse: true,
  },
  {
    id: 'saab-gripen-e',
    title: 'Saab Gripen-E',
    year: '2026',
    image: '/images/warplanes/saab-gripen-e.png',
    homeMouse: true,
  },
  {
    id: 'b2-spirit',
    title: 'B-2 Spirit',
    year: '2026',
    image: '/images/warplanes/b2-spirit.png',
  },
  {
    id: 'f15e-strike-eagle',
    title: 'F-15E Strike Eagle',
    year: '2026',
    image: '/images/warplanes/f15e-strike-eagle.png',
    homeMouse: true,
  },
  {
    id: 'f22-raptor',
    title: 'F-22 Raptor',
    year: '2026',
    image: '/images/warplanes/f22-raptor.png',
  },
  {
    id: 'a10-warthog',
    title: 'A-10 Warthog',
    year: '2026',
    image: '/images/warplanes/a10-warthog.png',
  },
  {
    id: 'dassault-rafale',
    title: 'Dassault Rafale',
    year: '2026',
    image: '/images/warplanes/dassault-rafale.png',
  },
];

export const lahaineGallery: GalleryItem[] = [
  {
    id: 'lahaine-1',
    title: 'La Haine – 1',
    year: '2025',
    image: '/images/lahaine-1.jpg',
    homeMouse: true,
  },
  {
    id: 'lahaine-2',
    title: 'La Haine – 2',
    year: '2025',
    image: '/images/lahaine-2.jpg',
  },
];

export const sfsGallery: GalleryItem[] = [
  {
    id: 'sfs-4am-juno',
    title: '4AM JUNO',
    year: '2025',
    image: '/images/sfs-1.jpg',
    homeMouse: true,
  },
  {
    id: 'sfs-always',
    title: 'Always',
    year: '2025',
    image: '/images/sfs-3.jpg',
  },
];

export const judgeByTheCoverGallery: GalleryItem[] = [
  {
    id: 'universe-in-your-hand',
    title: 'The Universe in Your Hand',
    year: '2026',
    image: '/images/judge-by-the-cover/universe-in-your-hand.png',
    homeMouse: true,
  },
  {
    id: 'jamsheed',
    title: 'Jamsheed',
    year: '2026',
    image: '/images/judge-by-the-cover/jamsheed.png',
    homeMouse: true,
  },
];

export const wrcGallery: GalleryItem[] = [
  {
    id: 'sebastien-ogier',
    title: 'Sébastien Ogier',
    year: '2026',
    image: '/images/wrc/sebastien-ogier.png',
    homeMouse: true,
  },
  {
    id: 'monte-carlo',
    title: 'Rallye Monte-Carlo',
    year: '2026',
    image: '/images/wrc/monte-carlo.png',
    homeMouse: true,
  },
];

export const cirroGallery: GalleryItem[] = [
  {
    id: 'cirro-poster-1',
    title: 'Cirro Energy – 1',
    year: '2026',
    image: '/images/cirro/cirro-poster-1.png',
  },
  {
    id: 'cirro-poster-2',
    title: 'Cirro Energy – 2',
    year: '2026',
    image: '/images/cirro/cirro-poster-2.png',
    homeMouse: true,
  },
];

export const beyondTheCallGallery: GalleryItem[] = [
  {
    id: 'now-or-never',
    title: 'Now Or Never',
    year: '2026',
    image: '/images/beyond-the-call/now-or-never.png',
  },
  {
    id: 'warfighter',
    title: 'Warfighter',
    year: '2026',
    image: '/images/beyond-the-call/warfighter.png',
    homeMouse: true,
  },
];

export const typographyGallery: GalleryItem[] = [
  {
    id: 'right-now',
    title: 'Right Now',
    year: '2026',
    image: '/images/typography/right-now.png',
  },
  {
    id: 'design-vancouver',
    title: 'Design in Vancouver',
    year: '2026',
    image: '/images/typography/design-vancouver.png',
  },
  {
    id: 'folio',
    title: 'Folio',
    year: '2026',
    image: '/images/typography/folio.png',
    homeMouse: true,
  },
  {
    id: 'brainchild',
    title: 'Brainchild',
    year: '2026',
    image: '/images/typography/brainchild.png',
    homeMouse: true,
  },
];

/** Projects shown as single cards in See All (gallery projects listed separately) */
export const listedProjects = projects.filter(
  (p) =>
    !p.hidden &&
    p.id !== 'warplanes' &&
    p.id !== 'lahaine' &&
    p.id !== 'sfs' &&
    p.id !== 'judge-by-the-cover' &&
    p.id !== 'wrc' &&
    p.id !== 'cirro' &&
    p.id !== 'beyond-the-call' &&
    p.id !== 'typography'
);

export const selectWorkProjects = (['warplanes', 'triunity'] as const)
  .map((id) => projects.find((p) => p.id === id))
  .filter((p): p is Project => Boolean(p));

/** Homepage mouse-scrub: listed projects + gallery highlights */
export const homeMouseImages: Array<{
  id: string;
  title: string;
  image: string;
  link: string;
}> = [
  ...listedProjects.map((p) => ({
    id: p.id,
    title: p.title,
    image: p.image,
    link: p.link,
  })),
  ...warplanesGallery
    .filter((w) => w.homeMouse)
    .map((w) => ({
      id: w.id,
      title: w.title,
      image: w.image,
      link: '/project/warplanes',
    })),
  ...lahaineGallery
    .filter((w) => w.homeMouse)
    .map((w) => ({
      id: w.id,
      title: w.title,
      image: w.image,
      link: '/project/la-haine',
    })),
  ...sfsGallery
    .filter((w) => w.homeMouse)
    .map((w) => ({
      id: w.id,
      title: w.title,
      image: w.image,
      link: '/project/signatures-for-sound',
    })),
  ...judgeByTheCoverGallery
    .filter((w) => w.homeMouse)
    .map((w) => ({
      id: w.id,
      title: w.title,
      image: w.image,
      link: '/project/judge-by-the-cover',
    })),
  ...wrcGallery
    .filter((w) => w.homeMouse)
    .map((w) => ({
      id: w.id,
      title: w.title,
      image: w.image,
      link: '/project/wrc',
    })),
  ...cirroGallery
    .filter((w) => w.homeMouse)
    .map((w) => ({
      id: w.id,
      title: w.title,
      image: w.image,
      link: '/project/cirro',
    })),
  ...beyondTheCallGallery
    .filter((w) => w.homeMouse)
    .map((w) => ({
      id: w.id,
      title: w.title,
      image: w.image,
      link: '/project/beyond-the-call',
    })),
  ...typographyGallery
    .filter((w) => w.homeMouse)
    .map((w) => ({
      id: w.id,
      title: w.title,
      image: w.image,
      link: '/project/typography',
    })),
];
