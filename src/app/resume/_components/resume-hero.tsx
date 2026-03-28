import { resumeHero } from '../resume.content';

export function ResumeHero() {
  return (
    <section className="border-b border-[color:var(--border)] pb-10">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)] lg:items-end">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.28em] text-[var(--primary)]">
            {resumeHero.eyebrow}
          </p>
          <h1 className="mt-4 font-serif text-5xl leading-none text-[var(--foreground)] sm:text-6xl">
            {resumeHero.title}
          </h1>
          <p className="mt-5 text-lg uppercase tracking-[0.24em] text-[var(--secondary)]">
            {resumeHero.role}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--foreground-muted)]">
            {resumeHero.summary}
          </p>
        </div>
      </div>
    </section>
  );
}
