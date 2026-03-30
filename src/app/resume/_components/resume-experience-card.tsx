import { type ExperienceItem } from '@/content/resume';
import { SurfacePanel } from '../../_components/surface-panel';
import { ResumeArrowLink } from './resume-arrow-link';
import { ResumeBulletList } from './resume-bullet-list';
import { ResumeSkillChip } from './resume-skill-chip';

export function ResumeExperienceCard({
  item,
  isExpanded,
  onToggle,
  onSelectSkill,
}: {
  item: ExperienceItem;
  isExpanded: boolean;
  onToggle: () => void;
  onSelectSkill: (skill: string) => void;
}) {
  return (
    <SurfacePanel
      as="article"
      className="cursor-pointer rounded-[1.75rem] bg-[var(--surface)]/75 transition-transform duration-200 hover:-translate-y-0.5"
      onClick={onToggle}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-[var(--secondary)] sm:text-sm sm:tracking-[0.2em]">
            {item.company} - {item.location}
          </p>
          <h3 className="mt-2 font-serif text-2xl leading-none text-[var(--foreground)] sm:text-3xl">
            {item.role}
          </h3>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[var(--foreground-muted)] sm:mt-4 sm:text-base sm:leading-7">
            {item.summary}
          </p>
        </div>
        <div className="sm:text-right">
          <p className="text-sm text-[var(--foreground-muted)] sm:whitespace-nowrap">
            {item.period}
          </p>
        </div>
      </div>

      {isExpanded ? (
        <div className="mt-6 grid animate-[fadePanel_220ms_ease-out] gap-6 border-t border-[color:var(--border)] pt-6">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--secondary)]">
              Contributions
            </p>
            <ResumeBulletList items={item.contributions} />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--secondary)]">
              Skills
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {item.skills.map((skill) => (
                <ResumeSkillChip
                  key={skill}
                  label={skill}
                  onClick={() => onSelectSkill(skill)}
                />
              ))}
            </div>
          </div>

          {item.caseStudyHref ? (
            <div onClick={(event) => event.stopPropagation()}>
              <ResumeArrowLink href={item.caseStudyHref}>
                View related case study
              </ResumeArrowLink>
            </div>
          ) : null}

          <div className="flex justify-end">
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                onToggle();
              }}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--primary)] bg-[var(--primary)] text-lg font-medium text-[var(--background)] transition-transform duration-200 hover:-translate-y-0.5 sm:h-10 sm:w-10"
              aria-expanded={isExpanded}
              aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${item.role}`}
            >
              {isExpanded ? '-' : '+'}
            </button>
          </div>
        </div>
      ) : (
        <div className="mt-6 flex justify-end border-t border-[color:var(--border)] pt-6">
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onToggle();
            }}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--primary)] bg-[var(--primary)] text-lg font-medium text-[var(--background)] transition-transform duration-200 hover:-translate-y-0.5 sm:h-10 sm:w-10"
            aria-expanded={isExpanded}
            aria-label={`Expand ${item.role}`}
          >
            +
          </button>
        </div>
      )}
    </SurfacePanel>
  );
}
