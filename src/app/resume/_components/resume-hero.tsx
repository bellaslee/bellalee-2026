export function ResumeHero() {
  return (
    <section className="border-b border-[color:var(--border)] pb-10">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)] lg:items-end">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.28em] text-[var(--primary)]">
            Resume
          </p>
          <h1 className="mt-4 font-serif text-5xl leading-none text-[var(--foreground)] sm:text-6xl">
            Bella Lee
          </h1>
          <p className="mt-5 text-lg uppercase tracking-[0.24em] text-[var(--secondary)]">
            Technical Consultant / Systems-Minded Builder
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--foreground-muted)]">
            I like work that turns complexity into something people can
            understand and use, especially where technical delivery, product
            thinking, and communication all need to stay connected.
          </p>
        </div>

        <aside className="rounded-[2rem] border border-[color:var(--border)] bg-white/70 p-6 shadow-[0_24px_60px_rgba(33,53,72,0.05)]">
          <p className="text-xs uppercase tracking-[0.24em] text-[var(--secondary)]">
            Purpose
          </p>
          <p className="mt-4 text-base leading-7 text-[var(--foreground-muted)]">
            An explorable resume designed to show experience, technical
            thinking, impact, and depth of skill in a calmer, more
            product-like format.
          </p>
        </aside>
      </div>
    </section>
  );
}
