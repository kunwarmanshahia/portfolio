
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
      <div className={`${isLarge ? 'aspect-[21/9]' : 'aspect-video'} mb-4 overflow-hidden relative transition-all duration-700 bg-brand-dark/5 dark:bg-brand-light/5`}>
        <img 
          src={project.image} 
          alt={project.title} 
          className={`w-full h-full ${project.objectFit === 'contain' ? 'object-cover scale-105' : 'object-cover'}`}
        />
        <div className="absolute inset-0 bg-gray-400/30 dark:bg-[#eff8e2]/30 transition-opacity duration-700 group-hover:opacity-0" />
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
