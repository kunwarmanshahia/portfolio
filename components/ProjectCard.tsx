
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  isLarge?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isLarge }) => {
  return (
    <div className="group cursor-pointer" data-clickable>
      <div className={`${isLarge ? 'aspect-[21/9]' : 'aspect-video'} mb-4 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 bg-brand-dark/5 dark:bg-brand-light/5`}>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex justify-between items-baseline tracking-tight">
        <h3 className="font-sans font-normal text-sm md:text-base text-brand-dark dark:text-brand-light group-hover:opacity-70 transition-opacity">
          {project.title}
        </h3>
        <span className="font-mono font-normal text-xs md:text-sm text-brand-dark/50 dark:text-brand-light/50 uppercase">
          {project.description}
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
