
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
      image: 'https://picsum.photos/800/1000?random=1',
    },
    {
      id: '2',
      title: "New to design? Here's how you can build a portfolio piece within a week.",
      appName: 'Mosaic',
      category: 'UX/UI',
      image: 'https://picsum.photos/800/1000?random=2',
    },
    {
      id: '3',
      title: 'Case Study Three',
      appName: 'Case Study Three',
      category: 'UI/UX',
      image: 'https://picsum.photos/800/1000?random=3',
    },
    {
      id: '4',
      title: 'Case Study Four',
      appName: 'Case Study Four',
      category: 'Brand',
      image: 'https://picsum.photos/800/1000?random=4',
    },
  ];

  const summaryProjects = [
    { id: 'p1', title: 'Project Alpha', description: 'Interactive installation', image: 'https://picsum.photos/1200/800?random=11' },
    { id: 'p2', title: 'Project Beta', description: 'Editorial Design', image: 'https://picsum.photos/1200/800?random=12' },
    { id: 'p3', title: 'Project Gamma', description: 'Experimental Web', image: 'https://picsum.photos/1200/800?random=13' },
    { id: 'p4', title: 'Project Delta', description: 'Brand exploration', image: 'https://picsum.photos/1200/800?random=14' },
  ];

  return (
    <div className="px-4 md:px-8 lg:px-12 pt-4 md:pt-6 pb-8 md:pb-16 max-w-[1920px] mx-auto w-full space-y-20 md:space-y-24 [&>*:nth-child(2)]:!mt-5 md:[&>*:nth-child(2)]:!mt-7">
      {/* Logo (hero) */}
      <section className="w-full min-w-0">
        <div className="text-brand-dark dark:text-brand-light">
          <Logo className="w-full h-auto max-w-full" />
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="space-y-4">
        <div className="border-t-2 border-brand-dark dark:border-brand-light pt-4 flex justify-between items-baseline">
          <h2 className="font-sans font-normal text-lg md:text-xl tracking-tight text-brand-dark dark:text-brand-light uppercase">
            Case Studies
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 pt-4">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="space-y-4">
        <div className="border-t-2 border-brand-dark dark:border-brand-light pt-4 flex justify-between items-baseline">
          <h2 className="font-sans font-normal text-lg md:text-xl tracking-tight text-brand-dark dark:text-brand-light uppercase">
            Projects
          </h2>
          <Link 
            to="/projects" 
            className="font-sans font-normal text-lg md:text-xl uppercase hover:opacity-60 transition-all text-brand-dark dark:text-brand-light underline underline-offset-4"
          >
            SEE ALL →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {summaryProjects.slice(0, 4).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Bio Section - One sentence, max 3 lines */}
      <section
        id="bio"
        className="w-full min-w-0 border-t-2 border-brand-dark dark:border-brand-light pt-4"
      >
        <p className="text-4xl md:text-7xl lg:text-8xl font-normal leading-[1.3] tracking-tighter text-left text-brand-dark dark:text-brand-light font-sans break-words">
          Kunwar Manshahia is a creative digital designer based in Surrey, Canada.
        </p>
      </section>
    </div>
  );
};

export default Home;
