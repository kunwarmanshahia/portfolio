export type Project = {
  id: string;
  title: string;
  year: string;
  image: string;
  link: string;
  selectWork?: boolean;
};

export const projects: Project[] = [
  {
    id: 'forge',
    title: 'Forge',
    year: '2025',
    image: '/images/covers/forge-cover.jpg',
    link: '/case-study/forge',
    selectWork: true,
  },
  {
    id: 'mosaic',
    title: 'Mosaic',
    year: '2025',
    image: '/images/covers/mosaic-cover.jpg',
    link: '/case-study/mosaic',
    selectWork: true,
  },
  {
    id: 'cxb',
    title: 'Clover X Barbershop',
    year: '2025',
    image: '/images/cxb-1.jpg',
    link: '/project/clover-x-barbershop',
    selectWork: true,
  },
  {
    id: 'broken-yolk',
    title: 'The Broken Yolk',
    year: '2025',
    image: '/images/brokenyolk-cover.jpg',
    link: '/project/broken-yolk',
  },
  {
    id: 'gearbox',
    title: 'GEARBOX Magazine',
    year: '2025',
    image: '/images/gearbox-cover.jpg',
    link: '/project/gearbox',
  },
  {
    id: 'triunity',
    title: 'Triunity Martial Arts',
    year: '2025',
    image: '/images/triunity-1.jpg',
    link: '/project/triunity',
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

export const selectWorkProjects = projects.filter((p) => p.selectWork).slice(0, 3);
