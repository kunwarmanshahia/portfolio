import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';

const MOTION_ANIMATIONS: { src: string; scale: number }[] = [
  { src: '/animations/paintingrolleranimation.json', scale: 1.21 },
  { src: '/animations/ElectricianBoltCutters.json', scale: 1.1025 },
  { src: '/animations/plumbingtool.json', scale: 1.15 },
];

const LottieFromUrl: React.FC<{ src: string; className?: string }> = ({ src, className }) => {
  const [data, setData] = useState<object | null>(null);
  useEffect(() => {
    fetch(src)
      .then((res) => res.json())
      .then(setData)
      .catch(() => setData(null));
  }, [src]);
  if (!data) return null;
  return <Lottie animationData={data} loop className={className} rendererSettings={{ preserveAspectRatio: 'xMidYMid meet' }} />;
};

/* Sidebar: Overview/Problem, Solution, Core Flows, Research, Motion Design, Final Design, Reflection */
const SECTIONS = [
  { id: 'overview', label: 'Overview/Problem' },
  { id: 'solution', label: 'Solution' },
  { id: 'research', label: 'Research' },
  { id: 'core-flows', label: 'Core Flows' },
  { id: 'motion-graphics', label: 'Motion Design' },
  { id: 'final-design', label: 'Final Design' },
  { id: 'reflection', label: 'Reflection' },
];

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

/* Final Design carousel: row1 = 6,8,7; row2 = 5,4,3; row3 = unnumbered, 1, 2 */
const FINAL_DESIGN_SLIDES = [
  '/images/forge-iphone-6.jpg',
  '/images/forge-iphone-8.jpg',
  '/images/forge-iphone-7.jpg',
  '/images/forge-iphone-5.jpg',
  '/images/forge-iphone-4.jpg',
  '/images/forge-iphone-3.jpg',
  '/images/forge-iphone.jpg',
  '/images/forge-iphone-1.jpg',
  '/images/forge-iphone-2.jpg',
];

const SLIDES_PER_PAGE = 3;
const FinalDesignCarousel: React.FC = () => {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(FINAL_DESIGN_SLIDES.length / SLIDES_PER_PAGE);
  const prev = () => setPage((p) => (p === 0 ? totalPages - 1 : p - 1));
  const next = () => setPage((p) => (p === totalPages - 1 ? 0 : p + 1));
  const start = page * SLIDES_PER_PAGE;
  const visible = FINAL_DESIGN_SLIDES.slice(start, start + SLIDES_PER_PAGE);
  return (
    <div className="w-full">
      <div className="grid grid-cols-3 gap-4 md:gap-6 w-full">
        {visible.map((src, i) => (
          <div key={src} className="rounded overflow-hidden flex justify-center">
            <img
              src={src}
              alt={`Forge final design — screen ${start + i + 1}`}
              className="w-full h-auto block max-w-full"
            />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-6 mt-10 md:mt-12">
        <button
          type="button"
          onClick={prev}
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
          onClick={next}
          className="font-sans text-brand-dark/70 dark:text-brand-light/70 md:hover:text-orange-500 md:dark:hover:text-orange-400 transition-colors p-2 rounded border border-brand-dark/20 dark:border-brand-light/20 text-lg"
          aria-label="Next"
        >
          <span aria-hidden>→</span>
        </button>
      </div>
    </div>
  );
};

const ForgeCaseStudy: React.FC = () => {
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
          {/* Hero — label, title, read time, hero image, project details */}
          <header className="text-left mb-12 md:mb-20 w-full max-w-full">
            <div className="font-mono text-sm md:text-base uppercase tracking-widest text-brand-dark/70 dark:text-brand-light/70 mb-3 w-full">
              FORGE • UX/UI + MOTION DESIGN • 2025
            </div>
            <h1 className="font-sans font-normal text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-brand-dark dark:text-brand-light w-full max-w-full break-words">
              Our response to BC's 60,000 skilled tradesperson gap.
            </h1>
            {/* Hero / cover image */}
            <div className="mt-8 md:mt-10 rounded overflow-hidden relative w-full">
              <img
                src="/images/covers/forge-cover.jpg"
                alt="Forge — Build your future, today. App screens showing career guide and pathways."
                className="w-full h-auto object-contain block"
              />
            </div>
            {/* Project details: Role, Timeline, Team, Skills */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <div>
                <h3 className="font-sans font-normal text-sm uppercase tracking-wide text-brand-dark dark:text-brand-light mb-1">
                  Role
                </h3>
                <p className="font-sans text-sm text-brand-dark/70 dark:text-brand-light/70 leading-snug">
                  UX/UI
                  <br />
                  Motion Design
                </p>
              </div>
              <div>
                <h3 className="font-sans font-normal text-sm uppercase tracking-wide text-brand-dark dark:text-brand-light mb-1">
                  Timeline
                </h3>
                <p className="font-sans text-sm text-brand-dark/70 dark:text-brand-light/70 leading-snug">
                  August 2025 –
                  <br />
                  December 2025
                </p>
              </div>
              <div>
                <h3 className="font-sans font-normal text-sm uppercase tracking-wide text-brand-dark dark:text-brand-light mb-1">
                  Team
                </h3>
                <p className="font-sans text-sm text-brand-dark/70 dark:text-brand-light/70 leading-snug">
                  4 Designers
                  <br />
                  3 Developers
                  <br />
                  2 Project Advisors
                </p>
              </div>
              <div>
                <h3 className="font-sans font-normal text-sm uppercase tracking-wide text-brand-dark dark:text-brand-light mb-1">
                  Skills
                </h3>
                <p className="font-sans text-sm text-brand-dark/70 dark:text-brand-light/70 leading-snug">
                  Product Design
                  <br />
                  Prototyping
                  <br />
                  Web Motion Design
                </p>
              </div>
            </div>
          </header>

          {/* Overview/Problem, Opportunity under one border */}
          <section id="overview" className="mb-12 md:mb-16 scroll-mt-24">
            <div className="pt-4 border-t-2 border-brand-dark dark:border-brand-light">
              <div className="font-mono text-sm uppercase tracking-widest text-brand-dark/70 dark:text-brand-light/70 mb-2">
                Overview/Problem
              </div>
              <h2 className="font-sans font-normal text-xl md:text-2xl tracking-tight text-brand-dark dark:text-brand-light mb-[1.2rem] mt-8">
                A career pathway app that makes trades careers easier to understand.
              </h2>
              <p className="font-sans text-brand-dark dark:text-brand-light leading-relaxed mb-4">
                I built Forge for high school students from financially struggling households who need a clear view of what they’re choosing.
              </p>
              <div className="rounded overflow-hidden mb-6 w-full">
                <img
                  src="/images/ForgeOverviewPic1.jpg"
                  alt="Forge app overview — career pathway and trades discovery"
                  className="w-full h-auto block"
                />
              </div>

              <h2 className="font-sans font-normal text-xl md:text-2xl tracking-tight text-brand-dark dark:text-brand-light mb-[1.2rem] mt-8">
                Trades careers are real options, but the path isn’t clear to students.
              </h2>
              <p className="font-sans text-brand-dark dark:text-brand-light leading-relaxed mb-4">
                Most students don’t avoid trades because they hate them — they avoid them because they don’t understand them.
              </p>
              <h3 className="font-sans font-normal text-lg tracking-tight text-brand-dark dark:text-brand-light mb-2 mt-6">
                The current experience looks like this:
              </h3>
              <ul className="font-sans text-brand-dark dark:text-brand-light leading-relaxed list-disc pl-5 space-y-1 mb-4">
                <li>Information is scattered across different sites and programs.</li>
                <li>The wording is confusing or too broad.</li>
                <li>Important details are missing (cost, time, steps, long-term income).</li>
              </ul>
              <p className="font-sans text-brand-dark dark:text-brand-light leading-relaxed mb-0">
                So students either delay the decision, pick randomly, or default to what feels “safe.”
              </p>

            </div>
          </section>

          <section id="solution" className="mb-12 md:mb-16 scroll-mt-24">
            <div className="border-t-2 border-brand-dark dark:border-brand-light">
              <div className="font-mono text-sm uppercase tracking-widest text-brand-dark/70 dark:text-brand-light/70 mb-2 pt-4">
                Solution
              </div>
              <h2 className="font-sans font-normal text-xl md:text-2xl tracking-tight text-brand-dark dark:text-brand-light mb-[1.2rem] mt-8">
                A decision-support product for trades careers.
              </h2>
              <p className="font-sans text-brand-dark dark:text-brand-light leading-relaxed mb-4">
                Forge doesn't try to "sell" you a trade. It gives you a structured breakdown so you can decide.
              </p>
              <div className="rounded overflow-hidden mb-6 w-full bg-brand-dark/5 dark:bg-brand-light/5 min-h-[200px]">
                <img
                  src="/images/forge-solution.jpg"
                  alt="Forge solution — career pathway and trades discovery"
                  className="w-full h-auto block object-contain"
                />
              </div>
              <h3 className="font-sans font-normal text-lg tracking-tight text-brand-dark dark:text-brand-light mb-2">
                My design components for Forge:
              </h3>
              <ul className="font-sans text-brand-dark dark:text-brand-light leading-relaxed list-disc pl-5 space-y-1 mb-6">
                <li>AI career advisor (allows you to experience a trade)</li>
                <li>Clear career overviews (what the job is, what you do daily)</li>
                <li>Training pathway (steps, timelines, how to start)</li>
              </ul>
            </div>
          </section>

          <section id="research" className="mb-12 md:mb-16 scroll-mt-24">
            <div className="font-mono text-sm uppercase tracking-widest text-brand-dark/70 dark:text-brand-light/70 mb-2 pt-4 border-t-2 border-brand-dark dark:border-brand-light">
              Research
            </div>
            <h2 className="font-sans font-normal text-xl md:text-2xl tracking-tight text-brand-dark dark:text-brand-light mb-[1.2rem] mt-8">
              Students don’t just need more information — they need clearer information.
            </h2>
            <div className="rounded overflow-hidden mb-6 w-full bg-brand-dark/5 dark:bg-brand-light/5 min-h-[200px]">
              <img
                src="/images/ForgeSurvey1.jpg"
                alt="Forge survey insights — chart and key findings"
                className="w-full h-auto block object-contain"
              />
            </div>
            <div className="rounded overflow-hidden mb-6 w-full bg-brand-dark/5 dark:bg-brand-light/5 min-h-[200px]">
              <img
                src="/images/ForgeSurvey2.jpg"
                alt="Forge survey insights — additional responses and themes"
                className="w-full h-auto block object-contain"
              />
            </div>
            <ul className="font-sans text-brand-dark dark:text-brand-light leading-relaxed list-disc pl-5 space-y-1 mb-4">
              <li>Students discover trades too late.</li>
              <li>Online info is hard to find or understand.</li>
              <li>Students feel insecure about requirements and how to start.</li>
            </ul>
            <p className="font-sans text-brand-dark dark:text-brand-light leading-relaxed">
              So the product direction became obvious to me: don’t add more pages. Make just a few important pages easier to understand and easier to trust.
            </p>
          </section>

          <section id="core-flows" className="mb-12 md:mb-16 scroll-mt-24">
            <div className="font-mono text-sm uppercase tracking-widest text-brand-dark/70 dark:text-brand-light/70 mb-2 pt-4 border-t-2 border-brand-dark dark:border-brand-light">
              Core Flows
            </div>
            <h2 className="font-sans font-normal text-xl md:text-2xl tracking-tight text-brand-dark dark:text-brand-light mb-[1.2rem] mt-8">
              Explore careers → Understand the path → Compare outcomes.
            </h2>
            <div className="rounded overflow-hidden mb-6 w-full">
              <img
                src="/images/CoreFlows.jpg"
                alt="Forge core flows — Interactive Simulation, Explore In-Demand Trades, Career Breakdown"
                className="w-full h-auto block"
              />
            </div>
            <p className="font-sans text-brand-dark dark:text-brand-light leading-relaxed mb-4">
              I structured the product around three intentional stages:
            </p>
            <ul className="font-sans text-brand-dark dark:text-brand-light leading-relaxed list-disc pl-5 space-y-2 w-full mb-6">
              <li><strong className="font-normal">Interactive Simulation:</strong> AI guides users through studying for a trade and working in the field.</li>
              <li><strong className="font-normal">Explore In-Demand Trades:</strong> Users browse trades that are actually needed.</li>
              <li><strong className="font-normal">Career Breakdown Page:</strong> Users see the job skills, routine, and requirements needed.</li>
            </ul>
          </section>

          <section id="motion-graphics" className="mb-12 md:mb-16 scroll-mt-24">
            <div className="font-mono text-sm uppercase tracking-widest text-brand-dark/70 dark:text-brand-light/70 mb-2 pt-4 border-t-2 border-brand-dark dark:border-brand-light">
              Motion Design
            </div>
            <h2 className="font-sans font-normal text-xl md:text-2xl tracking-tight text-brand-dark dark:text-brand-light mb-[1.2rem] mt-8">
              Motion used as feedback.
            </h2>
            <p className="font-sans text-brand-dark dark:text-brand-light leading-relaxed mb-6">
              I created a small icon set and added simple animations to support meaning and state changes. The motion is minimal on purpose — Forge is an information-heavy product, so the UI needs to stay calm and readable.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 w-full">
              {MOTION_ANIMATIONS.slice(0, 3).map(({ src, scale }) => (
                <div
                  key={src}
                  className="relative rounded overflow-hidden flex items-center justify-center bg-brand-dark/5 dark:bg-brand-light/5 w-full aspect-square"
                >
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ transform: `scale(${scale})` }}>
                    <LottieFromUrl src={src} className="w-full h-full" />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="final-design" className="mb-12 md:mb-16 scroll-mt-24">
            <div className="font-mono text-sm uppercase tracking-widest text-brand-dark/70 dark:text-brand-light/70 mb-2 pt-4 border-t-2 border-brand-dark dark:border-brand-light">
              Final Design
            </div>
            <h2 className="font-sans font-normal text-xl md:text-2xl tracking-tight text-brand-dark dark:text-brand-light mb-[1.2rem] mt-8">
              A clear, step-by-step experience for exploring trades careers.
            </h2>
            <p className="font-sans text-brand-dark dark:text-brand-light leading-relaxed mb-8">
              I built the final product around one goal: help students understand what they’re choosing, what it takes, and what it leads to.
            </p>
            <FinalDesignCarousel />
          </section>

          <section id="reflection" className="mb-12 md:mb-4 scroll-mt-24">
            <div className="font-mono text-sm uppercase tracking-widest text-brand-dark/70 dark:text-brand-light/70 mb-2 pt-4 border-t-2 border-brand-dark dark:border-brand-light">
              Reflection
            </div>
            <h2 className="font-sans font-normal text-xl md:text-2xl tracking-tight text-brand-dark dark:text-brand-light mb-[1.2rem] mt-8">
              What I learned
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <h3 className="font-sans font-normal text-lg tracking-tight text-brand-dark dark:text-brand-light mb-2">
                  Subtract instead of adding more
                </h3>
                <p className="font-sans text-brand-dark dark:text-brand-light leading-relaxed text-sm md:text-base">
                  When the problem is uncertainty, the best “innovation” is making information easier to understand and easier to trust.
                </p>
              </div>
              <div>
                <h3 className="font-sans font-normal text-lg tracking-tight text-brand-dark dark:text-brand-light mb-2">
                  Communication matters the most
                </h3>
                <p className="font-sans text-brand-dark dark:text-brand-light leading-relaxed text-sm md:text-base">
                  We worked on this project for four months, and whenever communication slipped, progress slowed down. Clear, consistent check-ins ended up being just as important as the design work itself.
                </p>
              </div>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
};

export default ForgeCaseStudy;
