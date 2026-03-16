'use client';

import { SiteFooter } from '../_components/site-footer';
import { SiteNav } from '../_components/site-nav';

export default function ProjectsPage() {
  return (
    <div className="site-shell min-h-screen">
      <main className="mx-auto flex w-full max-w-7xl flex-col px-6 py-6 sm:px-8 lg:px-12">
        <SiteNav className="mb-12" />

        <section className="grid gap-8 border-b border-[color:var(--border)] pb-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(260px,0.9fr)] lg:items-start">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.28em] text-[var(--primary)]">
              Projects
            </p>
            <h1 className="mt-4 font-serif text-5xl leading-none text-[var(--foreground)] sm:text-6xl">
              Project case studies are on the way.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--foreground-muted)]">
              This page will hold deeper writeups on selected work, including
              problem framing, tradeoffs, implementation decisions, and what was
              learned along the way.
            </p>
          </div>

          <aside className="rounded-[2rem] border border-[color:var(--border)] bg-white/65 p-6 shadow-[0_24px_60px_rgba(33,53,72,0.05)]">
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--secondary)]">
              Status
            </p>
            <p className="mt-4 text-base leading-7 text-[var(--foreground-muted)]">
              Placeholder page for upcoming project deep dives.
            </p>
          </aside>
        </section>

        <section className="py-10">
          <div className="rounded-[2rem] border border-dashed border-[color:var(--border)] bg-[var(--surface)]/70 p-8">
            <p className="text-base leading-8 text-[var(--foreground-muted)]">
              More detailed project narratives will land here as they are
              written and organized.
            </p>
          </div>
        </section>

        <SiteFooter className="mt-auto" />
      </main>
    </div>
  );
}
