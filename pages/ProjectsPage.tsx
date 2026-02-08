
import React from 'react';
import ProjectCard from '../components/ProjectCard';

const ProjectsPage: React.FC = () => {
  const projects = Array.from({ length: 9 }).map((_, i) => ({
    id: `p${i}`,
    title: `Project ${String.fromCharCode(65 + i)}`,
    description: `Conceptual design exploration No. ${i + 1}`,
    image: `https://picsum.photos/1200/800?random=${i + 20}`,
  }));

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
