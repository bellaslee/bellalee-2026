import { SurfacePanel } from '../../_components/surface-panel';
import { type ExperienceItem } from '../resume.content';
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
          <p className="text-sm uppercase tracking-[0.2em] text-[var(--secondary)]">
            {item.company} - {item.location}
          </p>
          <h3 className="mt-2 font-serif text-3xl leading-none text-[var(--foreground)]">
            {item.role}
          </h3>
        </div>
        <div className="text-right">
          <p className="whitespace-nowrap text-sm text-[var(--foreground-muted)]">
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
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--primary)] bg-[var(--primary)] text-lg font-medium text-[var(--background)] transition-transform duration-200 hover:-translate-y-0.5"
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
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--primary)] bg-[var(--primary)] text-lg font-medium text-[var(--background)] transition-transform duration-200 hover:-translate-y-0.5"
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
