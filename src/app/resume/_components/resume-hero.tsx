import { resumeHero } from '../resume.content';

export function ResumeHero() {
  return (
    <section className="border-b border-[color:var(--border)] pb-8 sm:pb-10">
      <div className="grid gap-6 sm:gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)] lg:items-end">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.24em] text-[var(--primary)] sm:text-sm sm:tracking-[0.28em]">
            {resumeHero.eyebrow}
          </p>
          <h1 className="mt-3 font-serif text-4xl leading-none text-[var(--foreground)] sm:mt-4 sm:text-5xl lg:text-6xl">
            {resumeHero.title}
          </h1>
          <p className="mt-4 text-sm uppercase tracking-[0.16em] text-[var(--secondary)] sm:mt-5 sm:text-base sm:tracking-[0.24em]">
            {resumeHero.role}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--foreground-muted)] sm:mt-6 sm:text-lg sm:leading-8">
            {resumeHero.summary}
          </p>
        </div>
      </div>
    </section>
  );
}
