import React from 'react';
import { Link } from 'react-router-dom';

/* Sidebar only: Overview, Solution, Research, Core Flows, Design Decisions, Final Design, Reflection */
const SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'solution', label: 'Solution' },
  { id: 'research', label: 'Research' },
  { id: 'core-flows', label: 'Core Flows' },
  { id: 'design-decisions', label: 'Design Decisions' },
  { id: 'final-design', label: 'Final Design' },
  { id: 'reflection', label: 'Reflection' },
];

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
              className="flex items-center gap-2 font-sans text-sm text-brand-dark/70 dark:text-brand-light/70 hover:text-brand-dark dark:hover:text-brand-light transition-colors mb-6"
            >
              <span aria-hidden>←</span>
              <span>BACK</span>
            </Link>
            {SECTIONS.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollTo(id)}
                className="block w-full text-left font-sans text-sm text-brand-dark/70 dark:text-brand-light/70 hover:text-brand-dark dark:hover:text-brand-light transition-colors py-1"
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
            <div className="mt-8 md:mt-10 aspect-[16/10] bg-brand-dark/10 dark:bg-brand-light/10 rounded overflow-hidden flex items-center justify-center relative">
              <span className="w-3 h-3 rounded-full bg-brand-dark/30 dark:bg-brand-light/30" aria-hidden />
              <span className="sr-only">Hero image placeholder — add Mosaic hero or key visual</span>
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
                Overview
              </div>
              <h2 className="font-sans font-normal text-xl md:text-2xl tracking-tight text-brand-dark dark:text-brand-light mb-[1.2rem]">
                A portfolio creation guide that helps early-stage creatives build real, meaningful work.
              </h2>
              <p className="font-sans text-brand-dark dark:text-brand-light leading-relaxed mb-6">
                Mosaic is a portfolio creation guide designed to help emerging designers, developers, and marketers build meaningful portfolio pieces through structured, real-world scenarios.
                The platform generates customizable project prompts based on user skills, allowing users to practice, complete, and track portfolio-ready work in one place.
              </p>

              <div className="font-mono text-sm uppercase tracking-widest text-brand-dark/70 dark:text-brand-light/70 mb-2">
                Problem
              </div>
              <h2 className="font-sans font-normal text-xl md:text-2xl tracking-tight text-brand-dark dark:text-brand-light mb-[1.2rem]">
                Early-stage creatives know how to design, but don’t know what to design.
              </h2>
              <p className="font-sans text-brand-dark dark:text-brand-light leading-relaxed mb-10">
                Early-stage creatives often struggle to build strong portfolios due to a lack of real-world experience, unclear project direction, and uncertainty about what employers expect.
                Many students and new graduates know how to design but don’t know what to design, leading to incomplete or unfocused portfolios.
              </p>

              <div className="font-mono text-sm uppercase tracking-widest text-brand-dark/70 dark:text-brand-light/70 mb-2">
                Opportunity
              </div>
              <h2 className="font-sans font-normal text-xl md:text-2xl tracking-tight text-brand-dark dark:text-brand-light mb-[1.2rem]">
                Bridge the gap between education and industry with guided, realistic project scenarios.
              </h2>
              <p className="font-sans text-brand-dark dark:text-brand-light leading-relaxed">
                There is an opportunity to bridge the gap between education and industry by guiding users through realistic project scenarios.
                By offering structured prompts, task breakdowns, and portfolio tracking, Mosaic can reduce decision fatigue and help users confidently create work that demonstrates real skills.
              </p>
            </div>
          </section>

          <section id="solution" className="mb-12 md:mb-16 scroll-mt-24">
            <div className="font-mono text-sm uppercase tracking-widest text-brand-dark/70 dark:text-brand-light/70 mb-2 pt-4 border-t-2 border-brand-dark dark:border-brand-light">
              Solution
            </div>
            <h2 className="font-sans font-normal text-xl md:text-2xl tracking-tight text-brand-dark dark:text-brand-light mb-[1.2rem]">
              AI-generated project scenarios that feel like real client briefs.
            </h2>
            <p className="font-sans text-brand-dark dark:text-brand-light leading-relaxed">
              Mosaic provides users with AI-generated, customizable project scenarios that simulate real client briefs.
              Users can create projects, complete defined tasks, and add finished work directly to their portfolio.
              The app focuses on clarity, structure, and ease of use to support users throughout the portfolio-building process.
            </p>
          </section>

          <section id="research" className="mb-12 md:mb-16 scroll-mt-24">
            <div className="font-mono text-sm uppercase tracking-widest text-brand-dark/70 dark:text-brand-light/70 mb-2 pt-4 border-t-2 border-brand-dark dark:border-brand-light">
              Research
            </div>
            <h2 className="font-sans font-normal text-xl md:text-2xl tracking-tight text-brand-dark dark:text-brand-light mb-[1.2rem]">
              Early-stage creatives want guidance, not open-ended prompts.
            </h2>
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="aspect-[3/2] min-h-[200px] bg-brand-dark/10 dark:bg-brand-light/10 rounded overflow-hidden flex items-center justify-center">
                <span className="font-mono text-xs uppercase text-brand-dark/40 dark:text-brand-light/40">Research image 1</span>
              </div>
              <div className="aspect-[3/2] min-h-[200px] bg-brand-dark/10 dark:bg-brand-light/10 rounded overflow-hidden flex items-center justify-center">
                <span className="font-mono text-xs uppercase text-brand-dark/40 dark:text-brand-light/40">Research image 2</span>
              </div>
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
            <p className="font-sans text-brand-dark dark:text-brand-light leading-relaxed mb-8">
              The core user flows were designed to support fast onboarding and efficient project creation. These flows were tested to ensure minimal friction and intuitive progression.
            </p>

            <div className="space-y-8">
              {[
                {
                  label: 'Onboarding',
                  title: 'Account creation and onboarding',
                  desc: 'Get users into a project quickly without overwhelming them up front.',
                },
                {
                  label: 'New project',
                  title: 'Create a project from a scenario prompt',
                  desc: 'Generate a realistic brief based on skills, then start with clear next steps.',
                },
                {
                  label: 'Tasks',
                  title: 'Complete tasks and save progress',
                  desc: 'Make it easy to track what’s done and what’s next, with clear confirmation.',
                },
                {
                  label: 'Portfolio',
                  title: 'Add completed work to a portfolio',
                  desc: 'Turn finished work into a portfolio-ready piece without extra friction.',
                },
                {
                  label: 'Manage',
                  title: 'Review project details and manage portfolio items',
                  desc: 'Keep active projects front-and-center while maintaining easy access to past work.',
                },
              ].map((flow) => (
                <div key={flow.title} className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                  <div className="w-full md:w-1/2 flex-shrink-0 aspect-[3/2] md:aspect-[4/3] min-h-[240px] md:min-h-0 bg-brand-dark/10 dark:bg-brand-light/10 rounded overflow-hidden flex items-center justify-center">
                    <span className="font-mono text-xs uppercase text-brand-dark/40 dark:text-brand-light/40">
                      {flow.label}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-sans font-normal text-lg tracking-tight text-brand-dark dark:text-brand-light mb-2">
                      {flow.title}
                    </h3>
                    <p className="font-sans text-brand-dark dark:text-brand-light leading-relaxed">
                      {flow.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="design-decisions" className="mb-12 md:mb-16 scroll-mt-24">
            <div className="font-mono text-sm uppercase tracking-widest text-brand-dark/70 dark:text-brand-light/70 mb-2 pt-4 border-t-2 border-brand-dark dark:border-brand-light">
              Design Decisions
            </div>
            <h2 className="font-sans font-normal text-xl md:text-2xl tracking-tight text-brand-dark dark:text-brand-light mb-[1.2rem]">
              Clarity, structure, and feedback — without getting in the way.
            </h2>

            <div className="space-y-8 mb-10">
              <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                <div className="w-full md:w-1/2 flex-shrink-0 aspect-[3/2] md:aspect-[4/3] min-h-[240px] md:min-h-0 bg-brand-dark/10 dark:bg-brand-light/10 rounded overflow-hidden flex items-center justify-center">
                  <span className="font-mono text-xs uppercase text-brand-dark/40 dark:text-brand-light/40">Interface & Navigation</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-sans font-normal text-lg tracking-tight text-brand-dark dark:text-brand-light mb-2">
                    Primary actions stay visible
                  </h3>
                  <p className="font-sans text-brand-dark dark:text-brand-light leading-relaxed">
                    Primary actions such as “Add to Portfolio” and “Save Project” were designed to be easily accessible, reducing reliance on hidden menus.
                    Navigation was structured to prioritize active projects while keeping secondary settings discoverable but unobtrusive.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                <div className="w-full md:w-1/2 flex-shrink-0 aspect-[3/2] md:aspect-[4/3] min-h-[240px] md:min-h-0 bg-brand-dark/10 dark:bg-brand-light/10 rounded overflow-hidden flex items-center justify-center">
                  <span className="font-mono text-xs uppercase text-brand-dark/40 dark:text-brand-light/40">Visual System</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-sans font-normal text-lg tracking-tight text-brand-dark dark:text-brand-light mb-2">
                    A modular system that matches the idea
                  </h3>
                  <p className="font-sans text-brand-dark dark:text-brand-light leading-relaxed">
                    A modular shape language was used to reflect the concept of a mosaic—individual pieces coming together to form a complete whole.
                    This visual metaphor reinforces the idea of building a portfolio step by step.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                <div className="w-full md:w-1/2 flex-shrink-0 aspect-[3/2] md:aspect-[4/3] min-h-[240px] md:min-h-0 bg-brand-dark/10 dark:bg-brand-light/10 rounded overflow-hidden flex items-center justify-center">
                  <span className="font-mono text-xs uppercase text-brand-dark/40 dark:text-brand-light/40">Motion feedback</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-sans font-normal text-lg tracking-tight text-brand-dark dark:text-brand-light mb-2">
                    Motion supports state changes
                  </h3>
                  <p className="font-sans text-brand-dark dark:text-brand-light leading-relaxed">
                    Motion was used to provide feedback and clarity rather than decoration. Subtle animations indicate state changes such as saving progress, completing tasks, or toggling settings like Dark Mode.
                    These micro-interactions help users understand system responses without interrupting workflow.
                  </p>
                </div>
              </div>
            </div>

            <div className="font-mono text-sm uppercase tracking-widest text-brand-dark/70 dark:text-brand-light/70 mb-2 mt-10">
              Motion Design
            </div>
            <h3 className="font-sans font-normal text-xl md:text-2xl tracking-tight text-brand-dark dark:text-brand-light mb-[1.2rem]">
              Motion used as feedback, not decoration.
            </h3>
            <p className="font-sans text-brand-dark dark:text-brand-light leading-relaxed mb-6">
              Motion was used to provide feedback and clarity rather than decoration. Subtle animations indicate state changes such as saving progress, completing tasks, or toggling settings like Dark Mode.
              These micro-interactions help users understand system responses without interrupting workflow.
            </p>
            <div className="aspect-[3/2] max-w-xl min-h-[220px] bg-brand-dark/10 dark:bg-brand-light/10 rounded overflow-hidden flex items-center justify-center">
              <span className="font-mono text-xs uppercase text-brand-dark/40 dark:text-brand-light/40">Motion design</span>
            </div>
          </section>

          <section id="final-design" className="mb-12 md:mb-16 scroll-mt-24">
            <div className="font-mono text-sm uppercase tracking-widest text-brand-dark/70 dark:text-brand-light/70 mb-2 pt-4 border-t-2 border-brand-dark dark:border-brand-light">
              Final Design
            </div>
            <h2 className="font-sans font-normal text-xl md:text-2xl tracking-tight text-brand-dark dark:text-brand-light mb-[1.2rem]">
              A clean, modern interface focused on usability and readability.
            </h2>
            <p className="font-sans text-brand-dark dark:text-brand-light leading-relaxed mb-8">
              The final design presents a clean, modern interface focused on usability and readability. High-contrast elements guide attention to primary actions, while consistent spacing and hierarchy reduce cognitive load.
              The app supports both light and dark modes to accommodate user preferences and accessibility needs.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {[1, 2, 3, 4].map((i) => (
                <figure key={i}>
                  <div className="aspect-[4/3] bg-brand-dark/10 dark:bg-brand-light/10 rounded overflow-hidden flex items-center justify-center">
                    <span className="font-mono text-xs uppercase text-brand-dark/40 dark:text-brand-light/40">
                      Screen {i}
                    </span>
                  </div>
                </figure>
              ))}
            </div>
          </section>

          {/* Reflection: keep same as Forge for now */}
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
                  When the problem is uncertainty, the best “innovation” is making information easier to understand and easier to trust.
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
              className="font-sans font-normal text-lg uppercase hover:opacity-60 transition-all text-brand-dark dark:text-brand-light underline underline-offset-4"
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

