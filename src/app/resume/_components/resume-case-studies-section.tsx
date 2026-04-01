import Link from 'next/link';
import { caseStudies } from '@/content/resume';
import { SurfacePanel } from '../../_components/surface-panel';

export function ResumeCaseStudiesSection() {
  return (
    <div className="mt-8 grid gap-5 xl:grid-cols-2">
      {caseStudies.map((item) => (
        <Link key={item.title} href={item.href} className="group block h-full">
          <SurfacePanel
            as="article"
            className="h-full rounded-[1.75rem] bg-[var(--surface)]/75 transition-transform duration-300 group-hover:-translate-y-1 group-focus-visible:-translate-y-1"
          >
            <div className="flex h-full flex-col">
              <h3 className="font-serif text-2xl leading-none text-[var(--foreground)] sm:text-3xl">
                {item.title}
              </h3>
              <div className="mt-5 space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--secondary)]">
                    Context
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)] sm:text-base sm:leading-7">
                    {item.context}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--secondary)]">
                    Approach
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)] sm:text-base sm:leading-7">
                    {item.approach}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--secondary)]">
                    Outcome
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--foreground)] sm:text-base sm:leading-7">
                    {item.outcome}
                  </p>
                </div>
              </div>
              <div className="mt-6 text-sm font-medium text-[var(--primary)]">
                View deep dive{' '}
                <span
                  aria-hidden="true"
                  className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1"
                >
                  {'->'}
                </span>
              </div>
            </div>
          </SurfacePanel>
        </Link>
      ))}
    </div>
  );
}
