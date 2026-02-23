import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/* Sidebar: same structure as Forge — Overview/Problem, Solution, Research, Core Flows, Graphic Design, Final Design, Reflection */
const SECTIONS = [
  { id: 'overview', label: 'Overview/Problem' },
  { id: 'solution', label: 'Solution' },
  { id: 'research', label: 'Research' },
  { id: 'core-flows', label: 'Core Flows' },
  { id: 'graphic-design', label: 'Graphic Design' },
  { id: 'final-design', label: 'Final Design' },
  { id: 'reflection', label: 'Reflection' },
];

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const SLIDES_PER_PAGE = 3;
const MOSAIC_FINAL_SLIDES = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => `/images/mosaic-${n}.png`);
const MosaicFinalDesignCarousel: React.FC = () => {
  const totalPages = Math.ceil(MOSAIC_FINAL_SLIDES.length / SLIDES_PER_PAGE);
  const [page, setPage] = useState(0);
  const start = page * SLIDES_PER_PAGE;
  const visible = MOSAIC_FINAL_SLIDES.slice(start, start + SLIDES_PER_PAGE);
  return (
    <div className="w-full">
      <div className="grid grid-cols-3 gap-4 md:gap-6 w-full">
        {visible.map((src, i) => (
          <div key={src} className="rounded overflow-hidden flex justify-center">
            <img src={src} alt={`Mosaic final design — screen ${start + i + 1}`} className="w-full h-auto block max-w-full" />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-6 mt-10 md:mt-12">
        <button
          type="button"
          onClick={() => setPage((p) => (p === 0 ? totalPages - 1 : p - 1))}
          className="font-sans text-brand-dark/70 dark:text-brand-light/70 hover:text-orange-500 dark:hover:text-orange-400 transition-colors p-2 rounded border border-brand-dark/20 dark:border-brand-light/20 text-lg"
          aria-label="Previous"
        >
          <span aria-hidden>←</span>
        </button>
        <span className="font-mono text-sm md:text-base text-brand-dark/70 dark:text-brand-light/70 tabular-nums">
          {page + 1} / {totalPages}
        </span>
        <button
          type="button"
          onClick={() => setPage((p) => (p === totalPages - 1 ? 0 : p + 1))}
          className="font-sans text-brand-dark/70 dark:text-brand-light/70 hover:text-orange-500 dark:hover:text-orange-400 transition-colors p-2 rounded border border-brand-dark/20 dark:border-brand-light/20 text-lg"
          aria-label="Next"
        >
          <span aria-hidden>→</span>
        </button>
      </div>
    </div>
  );
};

const MosaicCaseStudy: React.FC = () => {
  return (
    <div className="px-4 md:px-8 lg:px-12 pt-[1.8rem] md:pt-[3.6rem] pb-12 md:pb-24 max-w-[1920px] mx-auto w-full">
      <div className="flex flex-col lg:flex-row lg:gap-12 xl:gap-16">
        {/* Sticky sidebar nav */}
        <aside className="lg:w-48 xl:w-52 flex-shrink-0 order-2 lg:order-1">
          <nav className="lg:sticky lg:top-24 space-y-1">
            <Link
              to="/#case-studies"
              className="flex items-center gap-2 font-sans text-sm text-brand-dark/70 dark:text-brand-light/70 hover:text-orange-500 dark:hover:text-orange-400 transition-colors mb-6"
            >
              <span aria-hidden>←</span>
              <span>BACK</span>
            </Link>
            {SECTIONS.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollTo(id)}
                className="block w-full text-left font-sans text-sm text-brand-dark/70 dark:text-brand-light/70 hover:text-orange-500 dark:hover:text-orange-400 transition-colors py-1"
              >
                {label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <article className="w-full max-w-3xl flex-1 order-1 lg:order-2 min-w-0">
          {/* Hero */}
          <header className="text-left mb-12 md:mb-20 w-full max-w-full">
            <div className="font-mono text-sm md:text-base uppercase tracking-widest text-brand-dark/70 dark:text-brand-light/70 mb-3 w-full">
              MOSAIC • UX/UI + GRAPHIC DESIGN • 2025
            </div>
            <h1 className="font-sans font-normal text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-brand-dark dark:text-brand-light w-full max-w-full break-words">
              New to design? Here's how you can build a portfolio piece within a week.
            </h1>
            <div className="mt-8 md:mt-10 rounded overflow-hidden relative w-full">
              <img
                src="/images/covers/mosaic-cover.png?v=2"
                alt="Mosaic — Create projects and customize your portfolio. App screens showing project creation and profile."
                className="w-full h-auto object-contain block"
              />
            </div>

            {/* Project details */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <div>
                <h3 className="font-sans font-normal text-sm uppercase tracking-wide text-brand-dark dark:text-brand-light mb-1">
                  Role
                </h3>
                <p className="font-sans text-sm text-brand-dark/70 dark:text-brand-light/70 leading-snug">
                  UX/UI
                  <br />
                  Graphic Design
                </p>
              </div>
              <div>
                <h3 className="font-sans font-normal text-sm uppercase tracking-wide text-brand-dark dark:text-brand-light mb-1">
                  Timeline
                </h3>
                <p className="font-sans text-sm text-brand-dark/70 dark:text-brand-light/70 leading-snug">
                  February 2025 –
                  <br />
                  May 2025
                </p>
              </div>
              <div>
                <h3 className="font-sans font-normal text-sm uppercase tracking-wide text-brand-dark dark:text-brand-light mb-1">
                  Team
                </h3>
                <p className="font-sans text-sm text-brand-dark/70 dark:text-brand-light/70 leading-snug">
                  3 Designers
                  <br />
                  1 Project Advisor
                </p>
              </div>
              <div>
                <h3 className="font-sans font-normal text-sm uppercase tracking-wide text-brand-dark dark:text-brand-light mb-1">
                  Skills
                </h3>
                <p className="font-sans text-sm text-brand-dark/70 dark:text-brand-light/70 leading-snug">
                  User Research
                  <br />
                  User Testing
                  <br />
                  Prototyping
                </p>
              </div>
            </div>
          </header>

          {/* Overview, Problem, Opportunity */}
          <section id="overview" className="mb-12 md:mb-16 scroll-mt-24">
            <div className="pt-4 border-t-2 border-brand-dark dark:border-brand-light">
              <div className="font-mono text-sm uppercase tracking-widest text-brand-dark/70 dark:text-brand-light/70 mb-2">
                Overview/Problem
              </div>
              <h2 className="font-sans font-normal text-xl md:text-2xl tracking-tight text-brand-dark dark:text-brand-light mb-[1.2rem] mt-8">
                A portfolio creation guide that helps early-stage creatives build real, meaningful work.
              </h2>
              <p className="font-sans text-brand-dark dark:text-brand-light leading-relaxed mb-4">
                Mosaic is a portfolio creation guide designed to help emerging designers, developers, and marketers build meaningful portfolio pieces through structured, real-world scenarios.
                The platform generates customizable project prompts based on user skills, allowing users to practice, complete, and track portfolio-ready work in one place.
              </p>
              <div className="rounded overflow-hidden mb-6 w-full">
                <img src="/images/mosaic-problems.png" alt="Mosaic — overview and problem space" className="w-full h-auto block" />
              </div>

              <h2 className="font-sans font-normal text-xl md:text-2xl tracking-tight text-brand-dark dark:text-brand-light mb-[1.2rem] mt-8">
                Early-stage creatives know how to design, but don’t know what to design.
              </h2>
              <p className="font-sans text-brand-dark dark:text-brand-light leading-relaxed mb-4">
                Early-stage creatives often struggle to build strong portfolios due to a lack of real-world experience, unclear project direction, and uncertainty about what employers expect.
                Many students and new graduates know how to design but don’t know what to design.
              </p>

              <h3 className="font-sans font-normal text-lg tracking-tight text-brand-dark dark:text-brand-light mb-2 mt-6">
                The current experience looks like this
              </h3>
              <ul className="font-sans text-brand-dark dark:text-brand-light leading-relaxed list-disc pl-5 space-y-1 mb-4">
                <li>Project ideas are scattered or too open-ended.</li>
                <li>It's unclear what "portfolio-ready" work looks like.</li>
                <li>Progress and finished work are hard to track in one place.</li>
              </ul>
              <p className="font-sans text-brand-dark dark:text-brand-light leading-relaxed mb-0">
                So users either delay starting, pick random prompts, or produce work that doesn't tell a clear story.
              </p>
            </div>
          </section>

          <section id="solution" className="mb-12 md:mb-16 scroll-mt-24">
            <div className="pt-4 border-t-2 border-brand-dark dark:border-brand-light">
              <div className="font-mono text-sm uppercase tracking-widest text-brand-dark/70 dark:text-brand-light/70 mb-2">
                Solution
              </div>
              <h2 className="font-sans font-normal text-xl md:text-2xl tracking-tight text-brand-dark dark:text-brand-light mb-[1.2rem]">
                AI-generated project scenarios that feel like real client briefs.
              </h2>
              <p className="font-sans text-brand-dark dark:text-brand-light leading-relaxed mb-4">
                Mosaic provides users with AI-generated, customizable project scenarios that simulate real client briefs.
                Users can create projects, complete defined tasks, and add finished work directly to their portfolio.
              </p>
              <div className="rounded overflow-hidden mb-6 w-full">
                <img src="/images/mosaic-solution.png" alt="Mosaic — solution overview" className="w-full h-auto block" />
              </div>
              <h3 className="font-sans font-normal text-lg tracking-tight text-brand-dark dark:text-brand-light mb-2">
                What Mosaic includes
              </h3>
              <ul className="font-sans text-brand-dark dark:text-brand-light leading-relaxed list-disc pl-5 space-y-1 mb-6">
                <li>Guided project scenarios (realistic briefs and tasks)</li>
                <li>Clear task breakdowns and progress tracking</li>
                <li>Add completed work directly to your portfolio</li>
              </ul>
            </div>
          </section>

          <section id="research" className="mb-12 md:mb-16 scroll-mt-24">
            <div className="font-mono text-sm uppercase tracking-widest text-brand-dark/70 dark:text-brand-light/70 mb-2 pt-4 border-t-2 border-brand-dark dark:border-brand-light">
              Research
            </div>
            <h2 className="font-sans font-normal text-xl md:text-2xl tracking-tight text-brand-dark dark:text-brand-light mb-[1.2rem]">
              Early-stage creatives want guidance, not open-ended prompts.
            </h2>
            <div className="rounded overflow-hidden mb-6 w-full">
              <img src="/images/mosaic-userpersonas.png" alt="Mosaic — user personas and research" className="w-full h-auto block" />
            </div>
            <p className="font-sans text-brand-dark dark:text-brand-light leading-relaxed">
              Research focused on understanding how students and early-career creatives approach portfolio building.
              Key insights revealed that users often feel overwhelmed when starting new projects and value guidance over open-ended prompts.
              Usability testing further highlighted the importance of clear navigation, visible primary actions, and confirmation feedback during key moments such as saving and adding work to a portfolio.
            </p>
          </section>

          <section id="core-flows" className="mb-12 md:mb-16 scroll-mt-24">
            <div className="font-mono text-sm uppercase tracking-widest text-brand-dark/70 dark:text-brand-light/70 mb-2 pt-4 border-t-2 border-brand-dark dark:border-brand-light">
              Core Flows
            </div>
            <h2 className="font-sans font-normal text-xl md:text-2xl tracking-tight text-brand-dark dark:text-brand-light mb-[1.2rem]">
              Fast onboarding → Create a project → Track progress → Add to portfolio.
            </h2>
            <p className="font-sans text-brand-dark dark:text-brand-light leading-relaxed mb-6">
              The core user flows were designed to support fast onboarding and efficient project creation. These flows were tested to ensure minimal friction and intuitive progression.
            </p>
            <div className="space-y-8 w-full">
              {[
                {
                  label: 'Onboarding',
                  img: '/images/mosaic-coreflows1.png',
                  title: 'Account creation and onboarding',
                  desc: 'Get users into a project quickly without overwhelming them up front.',
                },
                {
                  label: 'New project',
                  img: '/images/mosaic-coreflows2.png',
                  title: 'Create a project from a scenario prompt',
                  desc: 'Generate a realistic brief based on skills, then start with clear next steps.',
                },
                {
                  label: 'Tasks',
                  img: '/images/mosaic-coreflows3.png',
                  title: 'Complete tasks and save progress',
                  desc: 'Make it easy to track what’s done and what’s next, with clear confirmation.',
                },
              ].map((flow) => (
                <div key={flow.title} className="w-full">
                  <div className="rounded overflow-hidden w-full mb-3">
                    <img src={flow.img} alt="" className="w-full h-auto block" />
                  </div>
                  <h3 className="font-sans font-normal text-lg tracking-tight text-brand-dark dark:text-brand-light mb-2">
                    {flow.title}
                  </h3>
                  <p className="font-sans text-brand-dark dark:text-brand-light leading-relaxed">
                    {flow.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="graphic-design" className="mb-12 md:mb-16 scroll-mt-24">
            <div className="font-mono text-sm uppercase tracking-widest text-brand-dark/70 dark:text-brand-light/70 mb-2 pt-4 border-t-2 border-brand-dark dark:border-brand-light">
              Graphic Design
            </div>
            <h2 className="font-sans font-normal text-xl md:text-2xl tracking-tight text-brand-dark dark:text-brand-light mb-[1.2rem] mt-8">
              Visual system and feedback — without getting in the way.
            </h2>
            <p className="font-sans text-brand-dark dark:text-brand-light leading-relaxed mb-6">
              A modular shape language reflects the concept of a mosaic—individual pieces coming together to form a complete whole. Motion and visual feedback support state changes and primary actions.
            </p>
            <div className="flex flex-col gap-6 w-full max-w-full">
              <div className="rounded overflow-hidden w-full">
                <img src="/images/mosaic-graphicdesign1.png" alt="Mosaic — graphic design 1" className="w-full h-auto max-w-full object-contain" />
              </div>
              <div className="rounded overflow-hidden w-full">
                <img src="/images/mosaic-graphicdesign2.png" alt="Mosaic — graphic design 2" className="w-full h-auto max-w-full object-contain" />
              </div>
            </div>
          </section>

          <section id="final-design" className="mb-12 md:mb-16 scroll-mt-24">
            <div className="font-mono text-sm uppercase tracking-widest text-brand-dark/70 dark:text-brand-light/70 mb-2 pt-4 border-t-2 border-brand-dark dark:border-brand-light">
              Final Design
            </div>
            <h2 className="font-sans font-normal text-xl md:text-2xl tracking-tight text-brand-dark dark:text-brand-light mb-[1.2rem] mt-8">
              A clean, modern interface focused on usability and readability.
            </h2>
            <p className="font-sans text-brand-dark dark:text-brand-light leading-relaxed mb-8">
              The final design presents a clean, modern interface focused on usability and readability. High-contrast elements guide attention to primary actions, while consistent spacing and hierarchy reduce cognitive load.
              The app supports both light and dark modes to accommodate user preferences and accessibility needs.
            </p>
            <MosaicFinalDesignCarousel />
          </section>

          <section id="reflection" className="mb-12 md:mb-16 scroll-mt-24">
            <div className="font-mono text-sm uppercase tracking-widest text-brand-dark/70 dark:text-brand-light/70 mb-2 pt-4 border-t-2 border-brand-dark dark:border-brand-light">
              Reflection
            </div>
            <h2 className="font-sans font-normal text-xl md:text-2xl tracking-tight text-brand-dark dark:text-brand-light mb-[1.2rem]">
              What I learned
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <h3 className="font-sans font-normal text-lg tracking-tight text-brand-dark dark:text-brand-light mb-2">
                  Clarity beats features
                </h3>
                <p className="font-sans text-brand-dark dark:text-brand-light leading-relaxed text-sm md:text-base">
                  When the problem is uncertainty, the best "innovation" is making information easier to understand and easier to trust.
                </p>
              </div>
              <div>
                <h3 className="font-sans font-normal text-lg tracking-tight text-brand-dark dark:text-brand-light mb-2">
                  Small decisions matter
                </h3>
                <p className="font-sans text-brand-dark dark:text-brand-light leading-relaxed text-sm md:text-base">
                  Sectioning, wording, hierarchy, when to show financials — they matter more than adding extra screens.
                </p>
              </div>
            </div>
          </section>

          <footer className="border-t-2 border-brand-dark dark:border-brand-light pt-8 mt-12">
            <Link
              to="/#case-studies"
              className="font-sans font-normal text-lg uppercase transition-colors text-brand-dark dark:text-brand-light underline underline-offset-4 hover:text-orange-500 dark:hover:text-orange-400"
            >
              Back to Case Studies →
            </Link>
          </footer>
        </article>
      </div>
    </div>
  );
};

export default MosaicCaseStudy;
