import React from 'react';
import CaseStudyCard from '../components/CaseStudyCard';
import ProjectCard from '../components/ProjectCard';
import { Logo } from '../components/Logo';

const Home: React.FC = () => {
  const selectWork = [
    {
      id: 'sw1',
      title: 'Clover X Barbershop',
      appName: 'Client Branding',
      category: '2025',
      image: '/images/cxb-1.png',
    },
    {
      id: 'sw2',
      title: 'La Haine',
      appName: 'Print Design',
      category: '2025',
      image: '/images/lahaine-1.png',
    },
  ];

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
    { id: 'p1', title: 'Clover X Barbershop', description: 'Client Branding · 2025', image: '/images/cxb-1.png', link: '/project/clover-x-barbershop' },
    { id: 'p2', title: 'La Haine', description: 'Print Design · 2025', image: '/images/lahaine-1.png', link: '/project/la-haine' },
    { id: 'p3', title: 'Triunity Martial Arts', description: 'Client Branding · 2024 / 2025', image: '/images/triunity-1.png', link: '/project/triunity', objectFit: 'contain' },
    { id: 'p4', title: 'GEARBOX', description: 'Layout Design · 2025', image: 'https://picsum.photos/1200/800?random=13' },
    { id: 'p5', title: 'Broken Yolk', description: 'Layout Design · 2025', image: 'https://picsum.photos/1200/800?random=14' },
    { id: 'p6', title: 'Producer Logos', description: 'Typographic Design · 2024 / 2025', image: 'https://picsum.photos/1200/800?random=16' },
  ];

  return (
    <div className="px-4 md:px-8 lg:px-12 pt-4 md:pt-6 pb-8 md:pb-16 max-w-[1920px] mx-auto w-full space-y-10 md:space-y-14 [&>*:nth-child(2)]:!mt-10 md:[&>*:nth-child(2)]:!mt-14 [&>*:nth-child(3)]:!mt-10 md:[&>*:nth-child(3)]:!mt-14">
      {/* Select Work heading */}
      <section className="space-y-4">
        <div className="pt-4">
          <h2 className="font-sans font-bold text-4xl md:text-7xl lg:text-8xl leading-[1.3] tracking-tighter text-brand-dark dark:text-brand-light uppercase">
            Select Work.
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 md:gap-6 pt-4 w-full">
          {selectWork.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="space-y-4">
        <div className="border-t-2 border-brand-dark dark:border-brand-light pt-6 md:pt-8">
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
        <div className="border-t-2 border-brand-dark dark:border-brand-light pt-6 md:pt-8">
          <h2 className="font-sans font-bold text-4xl md:text-7xl lg:text-8xl leading-[1.3] tracking-tighter text-brand-dark dark:text-brand-light uppercase">
            Projects.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 pt-4">
          {summaryProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* About me. */}
      <section id="about" className="space-y-4">
        <div className="border-t-2 border-brand-dark dark:border-brand-light pt-6 md:pt-8">
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
