
import React from 'react';
import { Link } from 'react-router-dom';
import { CaseStudy } from '../types';

interface CaseStudyCardProps {
  study: CaseStudy;
}

const slugFromStudy = (study: CaseStudy): string | null => {
  if (study.id === '1' || study.title.toLowerCase() === 'forge') return '/case-study/forge';
  return null;
};

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ study }) => {
  const to = slugFromStudy(study);
  const content = (
    <>
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
    </>
  );

  if (to) {
    return (
      <Link to={to} className="group block cursor-pointer" data-clickable>
        {content}
      </Link>
    );
  }

  return <div className="group cursor-pointer" data-clickable>{content}</div>;
};

export default CaseStudyCard;
