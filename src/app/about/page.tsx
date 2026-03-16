import { SiteFooter } from '../_components/site-footer';
import { SiteNav } from '../_components/site-nav';

const aboutSections = [
  {
    title: 'How I Work',
    body: 'I like work that turns complexity into something people can understand and use. That usually means translating between product goals, system design, and the day-to-day reality of delivery.',
  },
  {
    title: 'What I Care About',
    body: 'I am especially drawn to technical consulting, product thinking, architecture, and the discipline of making reasoning visible through writing and structure.',
  },
  {
    title: 'What This Site Is For',
    body: 'This space is meant to hold projects, resume context, roadmap threads, and notes in one place so the work and the thinking around it can stay connected.',
  },
];

export default function AboutPage() {
  return (
    <div className="site-shell min-h-screen">
      <main className="mx-auto flex w-full max-w-7xl flex-col px-6 py-6 sm:px-8 lg:px-12">
        <SiteNav className="mb-12" />

        <section className="grid gap-8 border-b border-[color:var(--border)] pb-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(260px,0.8fr)] lg:items-start">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.28em] text-[var(--primary)]">
              About
            </p>
            <h1 className="mt-4 font-serif text-5xl leading-none text-[var(--foreground)] sm:text-6xl">
              A little context for how I think, build, and learn.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--foreground-muted)]">
              I work at the intersection of technical consulting, product
              management, and systems thinking. The through-line is a preference
              for clarity: clearer problem framing, clearer decisions, and
              clearer paths from ideas to execution.
            </p>
          </div>

          <aside className="rounded-[2rem] border border-[color:var(--border)] bg-white/65 p-6 shadow-[0_24px_60px_rgba(33,53,72,0.05)]">
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--secondary)]">
              Snapshot
            </p>
            <p className="mt-4 text-base leading-7 text-[var(--foreground-muted)]">
              This page is a concise introduction to the person behind the
              projects, roadmap, and writing.
            </p>
          </aside>
        </section>

        <section className="grid gap-6 py-10 md:grid-cols-2 xl:grid-cols-3">
          {aboutSections.map((section) => (
            <article
              key={section.title}
              className="card-sheen rounded-[2rem] border border-[color:var(--border)] bg-[var(--surface)] p-7 shadow-[0_24px_60px_rgba(33,53,72,0.05)]"
            >
              <div className="relative z-10">
                <h2 className="font-serif text-4xl leading-none text-[var(--foreground)]">
                  {section.title}
                </h2>
                <p className="mt-4 text-base leading-8 text-[var(--foreground-muted)]">
                  {section.body}
                </p>
              </div>
            </article>
          ))}
        </section>

        <SiteFooter className="mt-auto" />
      </main>
    </div>
  );
}
