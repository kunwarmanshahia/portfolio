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
const MOSAIC_FINAL_SLIDES = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => `/images/mosaic-${n}.jpg`);
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
          className="font-sans text-brand-dark/70 dark:text-brand-light/70 md:hover:text-orange-500 md:dark:hover:text-orange-400 transition-colors p-2 rounded border border-brand-dark/20 dark:border-brand-light/20 text-lg"
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
          className="font-sans text-brand-dark/70 dark:text-brand-light/70 md:hover:text-orange-500 md:dark:hover:text-orange-400 transition-colors p-2 rounded border border-brand-dark/20 dark:border-brand-light/20 text-lg"
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
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm font-sans font-medium text-brand-dark/60 dark:text-brand-light/60 md:hover:text-orange-500 md:dark:hover:text-orange-400 transition-colors mb-6 lg:hidden"
      >
        ← Back
      </Link>
      <div className="flex flex-col lg:flex-row lg:gap-12 xl:gap-16">
        {/* Sticky sidebar nav (desktop only) */}
        <aside className="hidden lg:block lg:w-48 xl:w-52 flex-shrink-0 order-2 lg:order-1">
          <nav className="lg:sticky lg:top-24 space-y-1">
            <Link
              to="/#case-studies"
              className="flex items-center gap-2 font-sans text-sm text-brand-dark/70 dark:text-brand-light/70 md:hover:text-orange-500 md:dark:hover:text-orange-400 transition-colors mb-6"
            >
              <span aria-hidden>←</span>
              <span>BACK</span>
            </Link>
            {SECTIONS.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollTo(id)}
                className="block w-full text-left font-sans text-sm text-brand-dark/70 dark:text-brand-light/70 md:hover:text-orange-500 md:dark:hover:text-orange-400 transition-colors py-1"
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
                src="/images/covers/mosaic-cover.jpg?v=2"
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
                <img src="/images/mosaic-problems.jpg" alt="Mosaic — overview and problem space" className="w-full h-auto block" />
              </div>

              <h2 className="font-sans font-normal text-xl md:text-2xl tracking-tight text-brand-dark dark:text-brand-light mb-[1.2rem] mt-8">
                Early-stage creatives know how to design, but don’t know what to design.
              </h2>
              <p className="font-sans text-brand-dark dark:text-brand-light leading-relaxed mb-4">
                Early-stage creatives often struggle to build strong portfolios due to a lack of real-world experience, unclear project direction, and uncertainty about what employers expect.
              </p>

              <h3 className="font-sans font-normal text-lg tracking-tight text-brand-dark dark:text-brand-light mb-2 mt-6">
                The current experience looks like this:
              </h3>
              <ul className="font-sans text-brand-dark dark:text-brand-light leading-relaxed list-disc pl-5 space-y-1 mb-4">
                <li>Project ideas are scattered or too open-ended.</li>
                <li>It's unclear what "portfolio-ready" work looks like.</li>
                <li>Progress and finished work are hard to track in one place.</li>
              </ul>
              <p className="font-sans text-brand-dark dark:text-brand-light leading-relaxed mb-0">
                Many students and new graduates have the tools but don't know what to build.
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
                Mosaic provides users with AI-generated, customizable project scenarios that simulate real clients. Users can create projects, complete defined tasks, and add finished work directly to their portfolio.
              </p>
              <div className="rounded overflow-hidden mb-6 w-full">
                <img src="/images/mosaic-solution.jpg" alt="Mosaic — solution overview" className="w-full h-auto block" />
              </div>
              <h3 className="font-sans font-normal text-lg tracking-tight text-brand-dark dark:text-brand-light mb-2">
                What Mosaic includes:
              </h3>
              <ul className="font-sans text-brand-dark dark:text-brand-light leading-relaxed list-disc pl-5 space-y-1 mb-6">
                <li>AI Guided project scenarios (realistic projects and tasks)</li>
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
              <img src="/images/mosaic-userpersonas.jpg" alt="Mosaic — user personas and research" className="w-full h-auto block" />
            </div>
            <h3 className="font-sans font-normal text-lg tracking-tight text-brand-dark dark:text-brand-light mb-2 mt-6">
              Through my research, I realized:
            </h3>
            <ul className="font-sans text-brand-dark dark:text-brand-light leading-relaxed list-disc pl-5 space-y-1 mb-4">
              <li>Users feel overwhelmed when starting new projects and need structure, not just a blank canvas.</li>
              <li>Guidance matters more than freedom — open-ended prompts cause hesitation, not creativity.</li>
              <li>Clear navigation, visible actions, and confirmation feedback are critical at key moments like saving and adding work to a portfolio.</li>
            </ul>
          </section>

          <section id="core-flows" className="mb-12 md:mb-16 scroll-mt-24">
            <div className="font-mono text-sm uppercase tracking-widest text-brand-dark/70 dark:text-brand-light/70 mb-2 pt-4 border-t-2 border-brand-dark dark:border-brand-light">
              Core Flows
            </div>
            <h2 className="font-sans font-normal text-xl md:text-2xl tracking-tight text-brand-dark dark:text-brand-light mb-[1.2rem]">
              Accessibility first. Then the core flow.
            </h2>
            <p className="font-sans text-brand-dark dark:text-brand-light leading-relaxed mb-6">
              Before mapping out any user flows, I made sure Mosaic was usable for everyone. From there, the core flow was kept intentionally simple — onboard quickly, create a project, track your tasks, and add to your portfolio.
            </p>
            <div className="space-y-8 w-full">
              {[
                {
                  label: 'Accessibility',
                  img: '/images/mosaic-coreflows1.jpg',
                  title: 'Light mode, dark mode, and colourblind mode',
                  desc: 'Accessibility was a core priority from the start. We designed three display modes — including a dedicated colourblind mode — so every user can interact with Mosaic comfortably.',
                },
                {
                  label: 'Onboarding',
                  img: '/images/mosaic-coreflows2.jpg',
                  title: 'Email-based onboarding with a verification code',
                  desc: 'Users sign up by entering their email and receiving a one-time code — no passwords, no friction. Quick to start, easy to trust.',
                },
                {
                  label: 'Project creation',
                  img: '/images/mosaic-coreflows3.jpg',
                  title: 'Project ideation as a simple questionnaire',
                  desc: 'Instead of a blank prompt, users answer a short set of questions. Mosaic uses their answers to generate a tailored project brief — structured, relevant, and ready to start.',
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
              I wanted to use modular shapes to reflect the concept of a mosaic — individual pieces coming together to form a complete whole, while staying true to the app's core value: simplicity.
            </p>
            <div className="flex flex-col gap-8 w-full max-w-full">
              <div>
                  <div className="rounded overflow-hidden w-full mb-4">
                    <img src="/images/mosaic-graphicdesign1.jpg" alt="Mosaic — Gems user avatars" className="w-full h-auto max-w-full object-contain" />
                  </div>
                <h3 className="font-sans font-normal text-lg tracking-tight text-brand-dark dark:text-brand-light mb-2">These are called "Gems"</h3>
                <p className="font-sans text-brand-dark dark:text-brand-light leading-relaxed">
                  I created user avatars called "Gems" (yes, I did it before Google — just without the AI). They appear during profile creation and give each user a distinct, personal identity within the app while staying true to brand colours.
                </p>
              </div>
              <div>
                  <div className="rounded overflow-hidden w-full mb-4">
                    <img src="/images/mosaic-graphicdesign2.jpg" alt="Mosaic — onboarding and project creation graphics" className="w-full h-auto max-w-full object-contain" />
                  </div>
                <h3 className="font-sans font-normal text-lg tracking-tight text-brand-dark dark:text-brand-light mb-2">Simplicity is the best</h3>
                <p className="font-sans text-brand-dark dark:text-brand-light leading-relaxed">
                  I created simple graphics for the onboarding and project creation modules. I believe in taking away rather than adding — simplicity isn't just aesthetic, it helps people learn better.
                </p>
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
              The final design presents a clean, modern interface focused on accessibility, usability, and readability. Coloured elements guide attention to primary actions, while consistent spacing and hierarchy reduce cognitive load.
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
                  Keep on learning
                </h3>
                <p className="font-sans text-brand-dark dark:text-brand-light leading-relaxed text-sm md:text-base">
                  Throughout the process, I encountered design techniques that pushed me out of my comfort zone. Instead of resisting them, I leaned in — and that's where the most growth happened.
                </p>
              </div>
              <div>
                <h3 className="font-sans font-normal text-lg tracking-tight text-brand-dark dark:text-brand-light mb-2">
                  The power of difference
                </h3>
                <p className="font-sans text-brand-dark dark:text-brand-light leading-relaxed text-sm md:text-base">
                  I usually gravitate toward minimalism — muted tones, clean layouts. But Mosaic called for something different. I used vibrant colours intentionally, to create an environment that feels energetic and encourages learning without feeling overwhelming.
                </p>
              </div>
            </div>
          </section>

          <footer className="border-t-2 border-brand-dark dark:border-brand-light pt-8 mt-12">
            <Link
              to="/#case-studies"
              className="font-sans font-normal text-lg uppercase transition-colors text-brand-dark dark:text-brand-light underline underline-offset-4 md:hover:text-orange-500 md:dark:hover:text-orange-400"
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
