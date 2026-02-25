import React from 'react';
import CaseStudyCard from '../components/CaseStudyCard';
import ProjectCard from '../components/ProjectCard';
const Home: React.FC = () => {
  const selectWorkProjects = [
    {
      id: 'sw1',
      title: 'Clover X Barbershop',
      description: 'Client Branding · 2025',
      image: '/images/cxb-1.jpg',
      link: '/project/clover-x-barbershop',
    },
    {
      id: 'sw2',
      title: 'La Haine',
      description: 'Print Design · 2025',
      image: '/images/lahaine-1.jpg',
      link: '/project/la-haine',
    },
  ];

  const caseStudies = [
    {
      id: '1',
      title: "Our response to BC's 60,000 skilled tradesperson gap.",
      appName: 'Forge',
      category: 'UX/UI',
      image: '/images/covers/forge-cover.jpg',
    },
    {
      id: '2',
      title: "New to design? Here's how you can build a portfolio piece within a week.",
      appName: 'Mosaic',
      category: 'UX/UI',
      image: '/images/covers/mosaic-cover.jpg?v=2',
    },
  ];

  const summaryProjects = [
    { id: 'p1', title: 'Triunity Martial Arts', description: 'Client Branding · 2025', image: '/images/triunity-1.jpg', link: '/project/triunity', objectFit: 'contain' },
    { id: 'p2', title: 'Signatures for Sound', description: 'Client Branding · 2025', image: '/images/sfs-cover.jpg?v=2', link: '/project/signatures-for-sound' },
    { id: 'p3', title: 'The Broken Yolk', description: 'Layout Design · 2025', image: '/images/brokenyolk-cover.jpg', link: '/project/broken-yolk', objectFit: 'cover' },
    { id: 'p4', title: 'GEARBOX Magazine', description: 'Layout Design · 2025', image: '/images/gearbox-cover.jpg', link: '/project/gearbox', objectFit: 'cover' },
    { id: 'p5', title: 'Clover X Barbershop', description: 'Client Branding · 2025', image: '/images/cxb-1.jpg', link: '/project/clover-x-barbershop' },
    { id: 'p6', title: 'La Haine', description: 'Print Design · 2025', image: '/images/lahaine-1.jpg', link: '/project/la-haine' },
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 pt-4 w-full">
          {selectWorkProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 pt-4 w-full">
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
            My name is<br />Kunwar Manshahia.
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 pt-4">
          <div className="space-y-6">
            <div className="space-y-4 text-lg md:text-xl font-sans font-light text-brand-dark dark:text-brand-light opacity-90 max-w-xl leading-relaxed">
              <p>Before anything else, I’m a communicator. I use design as a language to connect people, ideas, and culture.</p>
              <p>
                I work across product and visual design, building experiences within business and technology.
              </p>
              <p>
                Before design, I was heavily involved in music from a young age — digging through rows of vinyl, producing sounds, and immersing myself in emerging acoustic, visual, and cultural trends.
              </p>
              <p>
                That period shaped my creative foundation and taught me how creation can translate into emotion — it's something that continues to influence how I approach design today.
              </p>
            </div>
            <p className="font-mono text-xs md:text-sm text-brand-dark/70 dark:text-brand-light/70">
              currently a digital design and development student at bcit, graduating may 2026.
            </p>
          </div>
          <div className="font-sans space-y-8 pt-8 lg:pt-0">
            <div className="space-y-2">
              <h3 className="uppercase text-[10px] md:text-xs font-bold text-brand-dark/60 dark:text-brand-light/60 tracking-[0.2em]">Capabilities</h3>
              <ul className="text-base md:text-lg space-y-2 font-medium text-brand-dark dark:text-brand-light">
                <li>User Flows, User Research, Wireframing, Prototyping <span className="font-mono font-normal text-xs md:text-sm text-brand-dark/50 dark:text-brand-light/50 uppercase">FIGMA</span></li>
                <li>Branding Systems, Composition, Layout, Typography <span className="font-mono font-normal text-xs md:text-sm text-brand-dark/50 dark:text-brand-light/50 uppercase">PHOTOSHOP, ILLUSTRATOR</span></li>
                <li>Storyboarding, Timing, Transitions, Filming <span className="font-mono font-normal text-xs md:text-sm text-brand-dark/50 dark:text-brand-light/50 uppercase">AFTER EFFECTS, PREMIERE PRO</span></li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="uppercase text-[10px] md:text-xs font-bold text-brand-dark/60 dark:text-brand-light/60 tracking-[0.2em]">Connect</h3>
              <ul className="text-base md:text-lg space-y-1 font-medium">
                <li>
                  <a
                    href="mailto:bykunwar@gmail.com"
                    className="text-brand-dark dark:text-brand-light underline underline-offset-4 transition-colors md:hover:text-orange-500 md:dark:hover:text-orange-400"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/kunwarmanshahia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-dark dark:text-brand-light underline underline-offset-4 transition-colors md:hover:text-orange-500 md:dark:hover:text-orange-400"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="/#/resume"
                    className="text-brand-dark dark:text-brand-light underline underline-offset-4 transition-colors md:hover:text-orange-500 md:dark:hover:text-orange-400"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
