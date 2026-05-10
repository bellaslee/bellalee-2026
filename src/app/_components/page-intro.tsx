import type { ReactNode } from 'react';

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  asideEyebrow?: string;
  asideDescription?: string;
  /** Full-width block above the title grid, still inside this section (above the bottom border). */
  leading?: ReactNode;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export function PageIntro({
  eyebrow,
  title,
  description,
  asideEyebrow,
  asideDescription,
  leading,
  className = '',
  titleClassName = '',
  descriptionClassName = '',
}: PageIntroProps) {
  const hasAside = asideEyebrow && asideDescription;

  return (
    <section
      className={`flex flex-col gap-8 border-b border-[color:var(--border)] pb-10 ${className}`.trim()}
    >
      {leading ? <div className="w-full">{leading}</div> : null}

      <div
        className={`grid gap-8 lg:items-start ${
          hasAside
            ? 'lg:grid-cols-[minmax(0,1.1fr)_minmax(260px,0.9fr)]'
            : ''
        }`.trim()}
      >
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.28em] text-[var(--primary)]">
            {eyebrow}
          </p>
          <h1
            className={`mt-4 font-serif text-5xl leading-none text-[var(--foreground)] sm:text-6xl ${titleClassName}`.trim()}
          >
            {title}
          </h1>
          <p
            className={`mt-6 max-w-2xl text-lg leading-8 text-[var(--foreground-muted)] ${descriptionClassName}`.trim()}
          >
            {description}
          </p>
        </div>

        {hasAside ? (
          <aside className="rounded-[2rem] border border-[color:var(--border)] bg-white/65 p-6 shadow-[0_24px_60px_rgba(33,53,72,0.05)]">
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--secondary)]">
              {asideEyebrow}
            </p>
            <p className="mt-4 text-base leading-7 text-[var(--foreground-muted)]">
              {asideDescription}
            </p>
          </aside>
        ) : null}
      </div>
    </section>
  );
}
