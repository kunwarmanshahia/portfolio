
import React from 'react';
import { CaseStudy } from '../types';

interface CaseStudyCardProps {
  study: CaseStudy;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ study }) => {
  return (
    <div className="group cursor-pointer" data-clickable>
      <div className="bg-black mb-4 overflow-hidden card-aspect grayscale hover:grayscale-0 transition-all duration-500 relative">
        <img 
          src={study.image} 
          alt={study.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex justify-between items-baseline tracking-tight">
        <span className="font-sans font-normal text-sm md:text-base text-brand-dark dark:text-brand-light group-hover:opacity-70 transition-opacity">
          {study.title}
        </span>
        <span className="font-mono font-normal text-xs md:text-sm text-brand-dark/50 dark:text-brand-light/50 uppercase">
          {study.category}
        </span>
      </div>
    </div>
  );
};

export default CaseStudyCard;
