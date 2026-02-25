
import React from 'react';
import { Link } from 'react-router-dom';
import { CaseStudy } from '../types';

interface CaseStudyCardProps {
  study: CaseStudy;
}

const slugFromStudy = (study: CaseStudy): string | null => {
  const app = study.appName?.toLowerCase?.() ?? '';
  const title = study.title?.toLowerCase?.() ?? '';
  if (study.id === '1' || app === 'forge') return '/case-study/forge';
  if (study.id === '2' || app === 'mosaic') return '/case-study/mosaic';
  if (app === 'clover x barbershop' || app === 'cxb' || title === 'clover x barbershop') return '/project/clover-x-barbershop';
  if (app === 'la haine' || title === 'la haine') return '/project/la-haine';
  return null;
};

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ study }) => {
  const to = slugFromStudy(study);
  const content = (
    <>
      <div className="aspect-video mb-4 overflow-hidden bg-black grayscale hover:grayscale-0 transition-all duration-500 relative rounded-none ring-0 hover:ring-2 hover:ring-orange-500">
        <img 
          src={study.image} 
          alt={study.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-orange-400/10 transition-opacity duration-500 group-hover:opacity-0" />
      </div>
      <div className="flex justify-between items-baseline tracking-tight gap-x-3">
        <span className="font-sans font-normal text-sm md:text-base text-brand-dark dark:text-brand-light group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors min-w-0 break-words leading-snug">
          {study.title}
        </span>
        <span className="font-mono font-normal text-xs md:text-sm text-brand-dark/50 dark:text-brand-light/50 uppercase whitespace-nowrap">
          {study.appName} • {study.category}
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
