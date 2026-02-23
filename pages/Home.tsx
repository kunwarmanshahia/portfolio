
import React from 'react';
import { Link } from 'react-router-dom';
import CaseStudyCard from '../components/CaseStudyCard';
import ProjectCard from '../components/ProjectCard';
import { Logo } from '../components/Logo';

const Home: React.FC = () => {
  const caseStudies = [
    {
      id: '1',
      title: "Our response to BC's 60,000 skilled tradesperson gap.",
      appName: 'Forge',
      category: 'UX/UI',
      image: '/images/covers/forge-cover.png',
    },
    {
      id: '2',
      title: "New to design? Here's how you can build a portfolio piece within a week.",
      appName: 'Mosaic',
      category: 'UX/UI',
      image: '/images/covers/mosaic-cover.png?v=2',
    },
  ];

  const summaryProjects = [
    { id: 'p1', title: 'Triunity Martial Arts', description: 'Client · Graphic Design', image: 'https://picsum.photos/1200/800?random=11' },
    { id: 'p2', title: 'BUBS', description: 'Visual Branding · Graphic Design', image: 'https://picsum.photos/1200/800?random=12' },
    { id: 'p3', title: 'GAdventures Magazine', description: 'Typography · Layout Design', image: 'https://picsum.photos/1200/800?random=13' },
    { id: 'p4', title: 'Broken Yolk Menu', description: 'Branding · Layout Design', image: 'https://picsum.photos/1200/800?random=14' },
    { id: 'p5', title: 'GEARBOX Magazine', description: 'Typography · Layout Design', image: 'https://picsum.photos/1200/800?random=15' },
    { id: 'p6', title: '"La Haine"', description: 'Visual Branding · Graphic Design', image: 'https://picsum.photos/1200/800?random=16' },
  ];

  return (
    <div className="px-4 md:px-8 lg:px-12 pt-4 md:pt-6 pb-8 md:pb-16 max-w-[1920px] mx-auto w-full space-y-20 md:space-y-24 [&>*:nth-child(2)]:!mt-5 md:[&>*:nth-child(2)]:!mt-7">
      {/* Case Studies Section */}
      <section id="case-studies" className="space-y-4">
        <div className="pt-4 flex justify-between items-baseline">
          <h2 className="font-sans font-bold text-4xl md:text-7xl lg:text-8xl leading-[1.3] tracking-tighter text-brand-dark dark:text-brand-light uppercase">
            Case Studies.
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 md:gap-6 pt-4 w-full">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>
      </section>

      {/* Projects Section — same spacing as Case Studies (header + border) */}
      <section className="space-y-4">
        <div className="border-t-2 border-brand-dark dark:border-brand-light pt-8 md:pt-10 flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <h2 className="font-sans font-bold text-4xl md:text-7xl lg:text-8xl leading-[1.3] tracking-tighter text-brand-dark dark:text-brand-light uppercase">
            Projects.
          </h2>
          <Link 
            to="/projects" 
            className="font-sans font-normal text-lg md:text-xl uppercase transition-all text-brand-dark dark:text-brand-light underline underline-offset-4 shrink-0 hover:text-orange-500 dark:hover:text-orange-400"
          >
            SEE ALL. →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {summaryProjects.slice(0, 4).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Logo moved below projects, with border */}
      <section className="w-full min-w-0 border-t-2 border-brand-dark dark:border-brand-light pt-4">
        <div className="text-brand-dark dark:text-brand-light">
          <Logo className="w-full h-auto max-w-full" />
        </div>
      </section>
    </div>
  );
};

export default Home;
