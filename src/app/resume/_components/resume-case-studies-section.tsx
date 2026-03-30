import { caseStudies } from '@/content/resume';
import { SurfacePanel } from '../../_components/surface-panel';
import { ResumeArrowLink } from './resume-arrow-link';

export function ResumeCaseStudiesSection() {
  return (
    <div className="mt-8 grid gap-5 xl:grid-cols-2">
      {caseStudies.map((item) => (
        <SurfacePanel
          key={item.title}
          as="article"
          className="rounded-[1.75rem] bg-[var(--surface)]/75"
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
            <div className="mt-6">
              <ResumeArrowLink href={item.href}>View deep dive</ResumeArrowLink>
            </div>
          </div>
        </SurfacePanel>
      ))}
    </div>
  );
}
