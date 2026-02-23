
import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
  { id: 'p1', title: 'Triunity Martial Arts', description: 'Client · Graphic Design', image: 'https://picsum.photos/1200/800?random=11' },
  { id: 'p2', title: 'BUBS', description: 'Visual Branding · Graphic Design', image: 'https://picsum.photos/1200/800?random=12' },
  { id: 'p3', title: 'GAdventures Magazine', description: 'Typography · Layout Design', image: 'https://picsum.photos/1200/800?random=13' },
  { id: 'p4', title: 'Broken Yolk Menu', description: 'Branding · Layout Design', image: 'https://picsum.photos/1200/800?random=14' },
  { id: 'p5', title: 'GEARBOX Magazine', description: 'Typography · Layout Design', image: 'https://picsum.photos/1200/800?random=15' },
  { id: 'p6', title: '"La Haine"', description: 'Visual Branding · Graphic Design', image: 'https://picsum.photos/1200/800?random=16' },
];

const ProjectsPage: React.FC = () => {

  return (
    <div className="px-4 md:px-8 lg:px-12 py-12 md:py-24 max-w-[1920px] mx-auto w-full space-y-12">
      <div className="section-divider pb-8">
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter font-sans uppercase">Index</h1>
        <p className="mt-4 font-sans uppercase text-xs md:text-sm font-bold opacity-60 tracking-[0.2em]">Full catalogue of works & experiments</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
