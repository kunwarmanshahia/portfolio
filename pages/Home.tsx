import React, { useState } from 'react';
import CaseStudyCard from '../components/CaseStudyCard';
import ProjectCard from '../components/ProjectCard';
import { Logo } from '../components/Logo';

const Home: React.FC = () => {
  const [projectsExpanded, setProjectsExpanded] = useState(false);
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
        <div className="border-t-2 border-brand-dark dark:border-brand-light pt-8 md:pt-10">
          <h2 className="font-sans font-bold text-4xl md:text-7xl lg:text-8xl leading-[1.3] tracking-tighter text-brand-dark dark:text-brand-light uppercase">
            Projects.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {summaryProjects.slice(0, 2).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        {/* Expandable: remaining projects with smooth height animation */}
        <div
          className="grid transition-[grid-template-rows] duration-300 ease-in-out"
          style={{ gridTemplateRows: projectsExpanded ? '1fr' : '0fr' }}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              {summaryProjects.slice(2).map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setProjectsExpanded((v) => !v)}
          className="group flex items-center justify-center w-full py-4 text-brand-dark dark:text-brand-light hover:text-orange-500 dark:hover:text-orange-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark dark:focus-visible:ring-brand-light rounded-full"
          aria-expanded={projectsExpanded}
        >
          <span className="flex items-center justify-center w-14 h-14 rounded-full border-2 border-current transition-colors group-hover:border-orange-500 dark:group-hover:border-orange-400">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-transform duration-300 ease-in-out ${projectsExpanded ? 'rotate-180' : ''}`}
            >
              <path d="M12 6V18M12 18L7 13M12 18L17 13" />
            </svg>
          </span>
        </button>
      </section>

      {/* About me. */}
      <section id="about" className="space-y-4">
        <div className="border-t-2 border-brand-dark dark:border-brand-light pt-8 md:pt-10">
          <h2 className="font-sans font-bold text-4xl md:text-7xl lg:text-8xl leading-[1.3] tracking-tighter text-brand-dark dark:text-brand-light uppercase">
            My name is Kunwar.
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 pt-4">
          <div className="space-y-6">
            <p className="text-xl md:text-2xl font-sans font-light text-brand-dark dark:text-brand-light leading-relaxed max-w-xl opacity-90">
              Designing with intent, scaling with system.
            </p>
            <div className="space-y-4 text-lg md:text-xl font-sans font-light text-brand-dark dark:text-brand-light opacity-90 max-w-xl leading-relaxed">
              <p>
                Kunwar is a multidisciplinary designer specializing in building cohesive digital experiences.
                His approach blends rigorous systems thinking with a sharp aesthetic sensibility.
              </p>
              <p>
                Currently exploring the boundaries of generative design and spatial computing.
              </p>
            </div>
          </div>
          <div className="font-sans space-y-8 pt-8 lg:pt-0">
            <div className="space-y-2">
              <h3 className="uppercase text-[10px] md:text-xs font-bold text-brand-dark/60 dark:text-brand-light/60 tracking-[0.2em]">Capabilities</h3>
              <ul className="text-base md:text-lg space-y-2 font-medium text-brand-dark dark:text-brand-light">
                <li>UX/UI <span className="font-mono font-normal text-xs md:text-sm text-brand-dark/50 dark:text-brand-light/50 uppercase">FIGMA</span></li>
                <li>Graphic Design, Visual Branding <span className="font-mono font-normal text-xs md:text-sm text-brand-dark/50 dark:text-brand-light/50 uppercase">PHOTOSHOP, ILLUSTRATOR</span></li>
                <li>Motion Design, Video Editing <span className="font-mono font-normal text-xs md:text-sm text-brand-dark/50 dark:text-brand-light/50 uppercase">AFTER EFFECTS, PREMIERE PRO</span></li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="uppercase text-[10px] md:text-xs font-bold text-brand-dark/60 dark:text-brand-light/60 tracking-[0.2em]">Connect</h3>
              <ul className="text-base md:text-lg space-y-1 font-medium">
                <li><a href="mailto:hello@kunwar.com" className="text-brand-dark dark:text-brand-light underline underline-offset-4 transition-colors hover:text-orange-500 dark:hover:text-orange-400">Email</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-brand-dark dark:text-brand-light underline underline-offset-4 transition-colors hover:text-orange-500 dark:hover:text-orange-400">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Logo */}
      <section className="w-full min-w-0 border-t-2 border-brand-dark dark:border-brand-light pt-4">
        <div className="text-brand-dark dark:text-brand-light">
          <Logo className="w-full h-auto max-w-full" />
        </div>
      </section>
    </div>
  );
};

export default Home;
