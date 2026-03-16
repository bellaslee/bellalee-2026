import Link from 'next/link';
import { SiteFooter } from './_components/site-footer';
import { SiteNav } from './_components/site-nav';

export default function Home() {
  const identityPillars = [
    'Technical consulting',
    'Product management',
    'System architecture',
    'Learning in public',
  ];

  const featureCards = [
    {
      title: 'Interactive Resume',
      description:
        'A structured view of consulting work, cross-functional delivery, and the technical decisions behind each engagement.',
      items: ['Experience', 'Engagement highlights'],
      href: '/resume',
      className: 'lg:row-span-2 bg-[var(--surface)]',
    },
    {
      title: 'Learning Roadmap',
      description:
        'A working roadmap for what I am focused on now, what I want to move into next, and how those threads shape future projects and writing.',
      items: [
        'Current focus',
        'Next steps',
        'Structured findings and reflections',
      ],
      href: '/roadmap',
      className: 'bg-white/70',
    },
    {
      title: 'Working Notes',
      description:
        'A living notebook of technical explorations, reflections, and unfinished thinking that connects the work behind the work.',
      items: [
        'Book logs and essays',
        'Rough notes',
        'In-progress reflections on work and learning',
      ],
      href: 'https://garden.bellalee.com',
      className: 'bg-[var(--surface-muted)]',
    },
  ];

  const learningTopics = [
    {
      title: 'Salesforce Administration and Development',
      tag: 'Career',
      current:
        'Building fluency in configuration, data models, platform syntax, and certifications.',
      next: 'Work through deeper implementation patterns and exam prep.',
    },
    {
      title: 'Product Management',
      tag: 'Career',
      current:
        'Studying prioritization, stakeholder alignment, and product discovery.',
      next: 'Turn product thinking into reusable planning and scoping frameworks.',
    },
    {
      title: 'System Architecture',
      tag: 'Career',
      current:
        'Learning architecture patterns, scaling decisions, and technical tradeoffs.',
      next: 'Apply those patterns through case studies and system design writeups.',
    },
    {
      title: 'Marathi',
      tag: 'Language',
      current:
        'Learning the alphabet and using basic Hindi as an accessible entry point.',
      next: 'Build simple listening and speaking practice into the week.',
    },
    {
      title: 'Bread-Baking',
      tag: 'Craft',
      current:
        'Practicing technique through repeat bakes and better dough feel.',
      next: 'Refine consistency and document the recipes worth keeping.',
    },
  ];

  return (
    <div className="site-shell min-h-screen">
      <main className="mx-auto flex w-full max-w-7xl flex-col px-6 py-6 sm:px-8 lg:px-12">
        <SiteNav className="mb-12" />

        <section className="grid gap-10 pb-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:pb-16">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.28em] text-[var(--primary)]">
              Technical Consultant
            </p>
            <h1 className="font-serif text-6xl leading-none text-[var(--foreground)] sm:text-7xl lg:text-[5rem]">
              Bella enjoys bridging the gap between people, process, and
              technology.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--foreground-muted)]">
              I work at the overlap of technical consulting, product management,
              and system architecture, helping teams turn complexity into clear
              decisions, scalable systems, and products people can actually use.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/resume"
                className="rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-medium transition-transform duration-200 hover:-translate-y-0.5"
                style={{ color: 'var(--background)' }}
              >
                View Resume
              </Link>
              <Link
                href="/projects"
                className="rounded-full border border-[color:var(--border)] bg-white/60 px-6 py-3 text-sm font-medium text-[var(--foreground)] transition-colors duration-200 hover:bg-white"
              >
                Explore Projects
              </Link>
            </div>
          </div>

          <div className="card-sheen relative rounded-[2rem] border border-[color:var(--border)] bg-white/70 p-8 shadow-[0_30px_80px_rgba(33,53,72,0.08)]">
            <div className="ornament absolute inset-0 opacity-25" />
            <div className="relative z-10 space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--secondary)]">
                  Currently Exploring
                </p>
                <h2 className="mt-3 font-serif text-4xl leading-tight text-[var(--foreground)]">
                  Creating reusable AI workflows.
                </h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-[color:var(--border)] bg-[var(--surface)]/90 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--secondary)]">
                    Focus
                  </p>
                  <p className="mt-2 text-base leading-7 text-[var(--foreground)]">
                    Experimenting with AI workflows to create repeatable and
                    effective frameworks.
                  </p>
                </div>
                <div className="rounded-2xl border border-[color:var(--border)] bg-white/85 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--secondary)]">
                    Approach
                  </p>
                  <p className="mt-2 text-base leading-7 text-[var(--foreground)]">
                    Process and product-minded problem solving, future-state
                    considerations, and documentation that keeps ideas visible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12 grid gap-3 border-y border-[color:var(--border)] py-5 text-sm uppercase tracking-[0.22em] text-[var(--primary)] sm:grid-cols-2 lg:grid-cols-4">
          {identityPillars.map((item) => (
            <div key={item} className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              <span>{item}</span>
            </div>
          ))}
        </section>

        <section className="grid gap-5 pb-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-5 lg:grid-rows-2">
            {featureCards.slice(0, 1).map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className={`card-sheen group relative rounded-[2rem] border border-[color:var(--border)] p-8 shadow-[0_24px_60px_rgba(33,53,72,0.06)] transition-transform duration-300 hover:-translate-y-1 ${card.className}`}
              >
                <div className="relative z-10 flex h-full flex-col justify-between gap-8">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-[var(--secondary)]">
                      Featured Path
                    </p>
                    <h2 className="mt-4 font-serif text-5xl leading-none text-[var(--foreground)]">
                      {card.title}
                    </h2>
                    <p className="mt-5 max-w-xl text-base leading-8 text-[var(--foreground-muted)]">
                      {card.description}
                    </p>
                  </div>
                  <div className="space-y-3">
                    {card.items.map((item) => (
                      <p
                        key={item}
                        className="text-sm text-[var(--foreground)]"
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                  <p className="text-sm font-medium text-[var(--primary)]">
                    Step inside{' '}
                    <span className="transition-transform duration-300 group-hover:translate-x-1 inline-block">
                      →
                    </span>
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="grid gap-5">
            {featureCards.slice(1).map((card) => (
              <Link
                key={card.title}
                href={card.href}
                target={card.href.startsWith('http') ? '_blank' : undefined}
                rel={card.href.startsWith('http') ? 'noreferrer' : undefined}
                title={
                  card.title === 'Notes'
                    ? 'Essays, experiments, and unfinished thinking.'
                    : undefined
                }
                className={`card-sheen group relative rounded-[2rem] border border-[color:var(--border)] p-7 shadow-[0_24px_60px_rgba(33,53,72,0.05)] transition-transform duration-300 hover:-translate-y-1 ${card.className}`}
              >
                <div className="relative z-10">
                  <p className="text-xs uppercase tracking-[0.24em] text-[var(--secondary)]">
                    Explore
                  </p>
                  <h2 className="mt-3 font-serif text-4xl leading-none text-[var(--foreground)]">
                    {card.title}
                  </h2>
                  <p className="mt-4 text-base leading-8 text-[var(--foreground-muted)]">
                    {card.description}
                  </p>
                  <div className="mt-6 space-y-2 text-sm text-[var(--foreground)]">
                    {card.items.map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                  </div>
                  <p className="mt-6 text-sm font-medium text-[var(--primary)]">
                    Learn more{' '}
                    <span className="transition-transform duration-300 group-hover:translate-x-1 inline-block">
                      →
                    </span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* <section className="grid gap-6 border-y border-[color:var(--border)] py-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <div className="rounded-[2rem] bg-white/70 p-8 shadow-[0_24px_70px_rgba(33,53,72,0.06)]">
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--secondary)]">
              Featured Project
            </p>
            <h2 className="mt-4 font-serif text-5xl leading-none text-[var(--foreground)]">
              Translating technical complexity into a clearer product direction.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[color:rgba(33,53,72,0.8)]">
              A case study in aligning stakeholder needs, system constraints,
              and user experience so a complicated workflow becomes easier to
              prioritize, design, and scale.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-[var(--primary)]">
              {[
                'Product Strategy',
                'System Design',
                'Technical Discovery',
                'Delivery Planning',
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[color:var(--border)] px-3 py-1.5"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="mt-6 border-l-2 border-[var(--accent)] pl-4 text-base leading-7 text-[var(--foreground)]">
              Outcome: the team gained a sharper architecture story, clearer
              product priorities, and a stronger path to implementation.
            </p>
            <Link
              href="/projects"
              className="mt-8 inline-flex text-sm font-medium text-[var(--primary)]"
            >
              View the full case study →
            </Link>
          </div>

          <div className="card-sheen relative rounded-[2rem] border border-[color:var(--border)] bg-[var(--surface)]/80 p-8">
            <div className="relative z-10 h-full rounded-[1.5rem] border border-[color:rgba(53,92,125,0.18)] bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(216,227,234,0.55))] p-6">
              <div className="grid gap-4 md:grid-cols-[0.7fr_0.3fr]">
                <div className="rounded-[1.25rem] border border-[color:var(--border)] bg-white/80 p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--secondary)]">
                    System Flow
                  </p>
                  <div className="mt-5 space-y-3">
                    {[
                      'Inputs clarified',
                      'Logic grouped',
                      'Feedback surfaced',
                      'State made visible',
                    ].map((step) => (
                      <div
                        key={step}
                        className="flex items-center gap-3 rounded-full bg-[var(--surface)] px-4 py-3 text-sm text-[var(--foreground)]"
                      >
                        <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid gap-4">
                  <div className="rounded-[1.25rem] border border-[color:var(--border)] bg-white/75 p-5">
                    <p className="text-xs uppercase tracking-[0.2em] text-[var(--secondary)]">
                      Architecture
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[var(--foreground)]">
                      UI, system logic, and documentation designed as one
                      conversation.
                    </p>
                  </div>
                  <div className="rounded-[1.25rem] border border-[color:var(--border)] bg-[var(--primary)] p-5 text-white">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                      Insight
                    </p>
                    <p className="mt-3 text-sm leading-7">
                      The interface works better when the reasoning is visible,
                      not hidden.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section className="grid gap-8 py-14 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--secondary)]">
              Current Learning
            </p>
            <h2 className="mt-4 font-serif text-5xl leading-none text-[var(--foreground)]">
              A compact view into the ideas shaping how I work and live.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-8 text-[var(--foreground-muted)]">
              The roadmap shows what I am focused on now, what I want to move
              into next, and how those threads feed future projects, writing,
              and ways of working.
            </p>
          </div>

          <div className="grid gap-4">
            {learningTopics.map((topic) => (
              <Link
                key={topic.title}
                href="/roadmap"
                className="rounded-[1.75rem] border border-[color:var(--border)] bg-white/70 p-6 shadow-[0_20px_50px_rgba(33,53,72,0.05)] transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <h3 className="font-serif text-3xl text-[var(--foreground)]">
                    {topic.title}
                  </h3>
                  <span className="rounded-full bg-[var(--surface)] px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[var(--primary)]">
                    {topic.tag}
                  </span>
                </div>

                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  <div className="md:border-r md:border-[color:var(--border)] md:pr-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-[var(--secondary)]">
                      Current
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[var(--foreground)]">
                      {topic.current}
                    </p>
                  </div>

                  <div className="md:pl-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-[var(--secondary)]">
                      Next
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[var(--foreground)]">
                      {topic.next}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-sm font-medium text-[var(--primary)]">
                  Open notes and demos →
                </p>
              </Link>
            ))}
          </div>
        </section>

        <SiteFooter />
      </main>
    </div>
  );
}
