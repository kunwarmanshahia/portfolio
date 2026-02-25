
import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  isLarge?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isLarge }) => {
  const content = (
    <>
      <div className={`${isLarge ? 'aspect-[21/9]' : 'aspect-video'} mb-4 overflow-hidden md:grayscale md:hover:grayscale-0 transition-all duration-700 bg-brand-dark/5 dark:bg-brand-light/5 relative ring-0 md:hover:ring-2 md:hover:ring-orange-500`}>
        <img 
          src={project.image} 
          alt={project.title} 
          className={`w-full h-full ${project.objectFit === 'contain' ? 'object-cover scale-105' : 'object-cover'}`}
          style={project.objectPosition ? { objectPosition: project.objectPosition } : undefined}
        />
        <div className="absolute inset-0 bg-orange-400/10 transition-opacity duration-700 group-hover:opacity-0 hidden md:block" />
      </div>
      
      <div className="flex justify-between items-baseline tracking-tight">
        <h3 className="font-sans font-normal text-sm md:text-base text-brand-dark dark:text-brand-light group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">
          {project.title}
        </h3>
        <span className="font-mono font-normal text-xs md:text-sm text-brand-dark/50 dark:text-brand-light/50 uppercase">
          {project.description}
        </span>
      </div>
    </>
  );

  if (project.link) {
    return (
      <Link to={project.link} className="group block cursor-pointer" data-clickable>
        {content}
      </Link>
    );
  }

  return <div className="group cursor-pointer" data-clickable>{content}</div>;
};

export default ProjectCard;
