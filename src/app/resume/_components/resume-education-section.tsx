import { SurfacePanel } from '../../_components/surface-panel';
import { educationItems, skillGroups } from '../resume.content';

export function ResumeEducationSection() {
  return (
    <div className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,1fr)_320px]">
      <div className="grid gap-5">
        {educationItems.map((item) => (
          <SurfacePanel
            key={item.title}
            as="article"
            className="rounded-[1.75rem] bg-[var(--surface)]/75"
          >
            <div className="flex flex-col gap-2">
              <h3 className="font-serif text-2xl leading-none text-[var(--foreground)] sm:text-3xl">
                {item.title}
              </h3>
              {item.period ? (
                <p className="text-xs uppercase tracking-[0.16em] text-[var(--secondary)] sm:text-sm sm:tracking-[0.2em]">
                  {item.period}
                </p>
              ) : null}
            </div>
            <p className="mt-4 text-sm leading-7 text-[var(--foreground-muted)] sm:text-base sm:leading-8">
              {item.institution}
            </p>
            {item.detail ? (
              <p className="mt-4 text-sm leading-7 text-[var(--foreground-muted)] sm:text-base sm:leading-8">
                {item.detail}
              </p>
            ) : null}
          </SurfacePanel>
        ))}
      </div>

      <SurfacePanel as="aside" variant="white" className="rounded-[1.75rem]">
        <p className="text-xs uppercase tracking-[0.22em] text-[var(--secondary)]">
          Skills
        </p>
        <div className="mt-5 grid gap-4">
          {skillGroups.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.25rem] border border-[color:var(--border)] bg-[var(--surface)]/70 p-4"
            >
              <p className="text-sm font-medium text-[var(--foreground)]">
                {item.title}
              </p>
              <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)]">
                {item.items.join(', ')}
              </p>
            </div>
          ))}
        </div>
      </SurfacePanel>
    </div>
  );
}
