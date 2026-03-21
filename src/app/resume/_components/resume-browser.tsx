'use client';

import Link from 'next/link';
import { startTransition, useState, type ReactNode } from 'react';
import { SurfacePanel } from '../../_components/surface-panel';
import {
  caseStudies,
  certificationItems,
  educationItems,
  experienceFilters,
  experienceItems,
  keyStrengths,
  navItems,
  overviewStats,
  skillClusters,
  type ExperienceItem,
  type SectionId,
  writingItems,
} from '../resume-content';

function ResumeArrowLink({
  href,
  children,
}: {
  href: string;
  children: string;
}) {
  const isExternal = href.startsWith('http');

  return (
    <Link
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
      className="inline-flex items-center gap-2 text-sm font-medium text-[var(--primary)]"
    >
      {children}
      <span aria-hidden="true">{'->'}</span>
    </Link>
  );
}

function BulletList({
  items,
  tone = 'default',
}: {
  items: string[];
  tone?: 'default' | 'muted';
}) {
  const textClassName =
    tone === 'muted'
      ? 'text-[var(--foreground-muted)]'
      : 'text-[var(--foreground)]';

  return (
    <ul className="mt-3 grid gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            aria-hidden="true"
            className="mt-3 h-1.5 w-1.5 rounded-full bg-[var(--accent)]"
          />
          <span className={`text-base leading-7 ${textClassName}`}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function CapabilityChip({
  label,
  onClick,
  isActive = false,
}: {
  label: string;
  onClick?: () => void;
  isActive?: boolean;
}) {
  const classes = isActive
    ? 'border-[color:var(--primary)] bg-[var(--primary)] text-[var(--background)]'
    : 'border-[color:var(--border)] bg-white/85 text-[var(--foreground)]';

  if (!onClick) {
    return (
      <span className={`rounded-full border px-4 py-2 text-sm ${classes}`}>
        {label}
      </span>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-sm transition-colors ${classes}`}
    >
      {label}
    </button>
  );
}

function ResumeSectionPanel({
  activeSection,
  children,
}: {
  activeSection: SectionId;
  children: ReactNode;
}) {
  const currentIndex = navItems.findIndex((item) => item.id === activeSection);
  const activeItem = navItems[currentIndex];

  return (
    <div
      key={activeSection}
      id={`resume-panel-${activeSection}`}
      role="tabpanel"
      aria-labelledby={`resume-tab-${activeSection}`}
      className="rounded-[2rem] border border-[color:var(--border)] bg-white/75 p-6 shadow-[0_28px_70px_rgba(33,53,72,0.06)] animate-[fadePanel_280ms_ease-out] sm:p-8"
    >
      <div className="flex flex-col gap-6 border-b border-[color:var(--border)] pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-[var(--secondary)]">
            Section {currentIndex + 1}
          </p>
          <h2 className="mt-3 font-serif text-4xl leading-none text-[var(--foreground)] sm:text-5xl">
            {activeItem.label}
          </h2>
        </div>
        <p className="max-w-xl text-base leading-7 text-[var(--foreground-muted)]">
          {activeItem.summary}
        </p>
      </div>

      {children}
    </div>
  );
}

function OverviewSection() {
  return (
    <div className="mt-8 space-y-8">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {overviewStats.map((item) => (
          <SurfacePanel
            key={item.label}
            as="article"
            className="rounded-[1.75rem] bg-[var(--surface)]/75"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--secondary)]">
              {item.label}
            </p>
            <p className="mt-4 font-serif text-3xl leading-none text-[var(--foreground)]">
              {item.value}
            </p>
          </SurfacePanel>
        ))}
      </div>

      <SurfacePanel
        as="article"
        className="rounded-[1.75rem] bg-[var(--surface)]/75"
      >
        <p className="text-xs uppercase tracking-[0.22em] text-[var(--secondary)]">
          Key strengths
        </p>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {keyStrengths.map((item) => (
            <li key={item} className="flex gap-3">
              <span
                aria-hidden="true"
                className="mt-3 h-1.5 w-1.5 rounded-full bg-[var(--accent)]"
              />
              <span className="text-base leading-7 text-[var(--foreground)]">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </SurfacePanel>
    </div>
  );
}

function ExperienceCard({
  item,
  isExpanded,
  onToggle,
  onSelectCapability,
}: {
  item: ExperienceItem;
  isExpanded: boolean;
  onToggle: () => void;
  onSelectCapability: (capability: string) => void;
}) {
  return (
    <SurfacePanel
      as="article"
      className="rounded-[1.75rem] bg-[var(--surface)]/75"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-[var(--secondary)]">
            {item.company}
          </p>
          <h3 className="mt-2 font-serif text-3xl leading-none text-[var(--foreground)]">
            {item.role}
          </h3>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--foreground-muted)]">
            {item.scope}
          </p>
        </div>
        <div className="text-right">
          <p className="whitespace-nowrap text-sm text-[var(--foreground-muted)]">
            {item.period}
          </p>
        </div>
      </div>

      {isExpanded ? (
        <div className="mt-6 grid gap-6 border-t border-[color:var(--border)] pt-6 animate-[fadePanel_220ms_ease-out]">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--secondary)]">
              Context
            </p>
            <BulletList items={item.context} tone="muted" />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--secondary)]">
              Responsibilities
            </p>
            <BulletList items={item.responsibilities} />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--secondary)]">
              Impact highlights
            </p>
            <BulletList items={item.impact} />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--secondary)]">
              Capabilities demonstrated
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {item.capabilities.map((capability) => (
                <CapabilityChip
                  key={capability}
                  label={capability}
                  onClick={() => onSelectCapability(capability)}
                />
              ))}
            </div>
          </div>

          <ResumeArrowLink href={item.caseStudyHref}>
            View related case study
          </ResumeArrowLink>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={onToggle}
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
            onClick={onToggle}
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

function ExperienceSection() {
  const [expandedRoleId, setExpandedRoleId] = useState<string>('');
  const [selectedCapability, setSelectedCapability] = useState<string | null>(
    null,
  );

  const filteredExperience = selectedCapability
    ? experienceItems.filter((item) =>
        item.capabilities.includes(selectedCapability),
      )
    : experienceItems;

  return (
    <div className="mt-8 space-y-6">
      <div>
        <p className="text-xs uppercase tracking-[0.22em] text-[var(--secondary)]">
          Filter by capability
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <CapabilityChip
            label="All roles"
            isActive={selectedCapability === null}
            onClick={() => setSelectedCapability(null)}
          />
          {experienceFilters.map((capability) => (
            <CapabilityChip
              key={capability}
              label={capability}
              isActive={selectedCapability === capability}
              onClick={() => setSelectedCapability(capability)}
            />
          ))}
        </div>
      </div>

      <div className="grid gap-5">
        {filteredExperience.map((item) => (
          <ExperienceCard
            key={item.id}
            item={item}
            isExpanded={expandedRoleId === item.id}
            onToggle={() =>
              setExpandedRoleId((current) => (current === item.id ? '' : item.id))
            }
            onSelectCapability={setSelectedCapability}
          />
        ))}
      </div>
    </div>
  );
}

function CaseStudiesSection() {
  return (
    <div className="mt-8 grid gap-5 xl:grid-cols-3">
      {caseStudies.map((item) => (
        <SurfacePanel
          key={item.title}
          as="article"
          className="rounded-[1.75rem] bg-[var(--surface)]/75"
        >
          <div className="flex h-full flex-col">
            <h3 className="font-serif text-3xl leading-none text-[var(--foreground)]">
              {item.title}
            </h3>
            <div className="mt-5 space-y-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--secondary)]">
                  Problem
                </p>
                <p className="mt-2 text-base leading-7 text-[var(--foreground-muted)]">
                  {item.problem}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--secondary)]">
                  Constraints
                </p>
                <p className="mt-2 text-base leading-7 text-[var(--foreground-muted)]">
                  {item.constraints}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--secondary)]">
                  Role
                </p>
                <p className="mt-2 text-base leading-7 text-[var(--foreground)]">
                  {item.role}
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

function SkillsSection() {
  return (
    <div className="mt-8 grid gap-5 lg:grid-cols-3">
      {skillClusters.map((cluster) => (
        <SurfacePanel
          key={cluster.title}
          as="article"
          className="rounded-[1.75rem] bg-[var(--surface)]/75"
        >
          <p className="text-xs uppercase tracking-[0.22em] text-[var(--secondary)]">
            Skill cluster
          </p>
          <h3 className="mt-3 font-serif text-3xl leading-none text-[var(--foreground)]">
            {cluster.title}
          </h3>
          <div className="mt-5 flex flex-wrap gap-3">
            {cluster.items.map((item) => (
              <CapabilityChip key={item} label={item} />
            ))}
          </div>
        </SurfacePanel>
      ))}
    </div>
  );
}

function WritingSection() {
  return (
    <div className="mt-8 space-y-6">
      <SurfacePanel
        as="article"
        className="rounded-[1.75rem] bg-[var(--surface)]/75"
      >
        <p className="text-xs uppercase tracking-[0.22em] text-[var(--secondary)]">
          Editorial focus
        </p>
        <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--foreground-muted)]">
          I use writing to make technical thinking visible: essays, notes, and
          in-progress fragments that help connect decisions, learning, and
          implementation work.
        </p>
      </SurfacePanel>

      <div className="grid gap-5 xl:grid-cols-3">
        {writingItems.map((item) => (
          <SurfacePanel
            key={item.title}
            as="article"
            variant="white"
            className="rounded-[1.75rem]"
          >
            <h3 className="font-serif text-3xl leading-none text-[var(--foreground)]">
              {item.title}
            </h3>
            <p className="mt-4 text-base leading-7 text-[var(--foreground-muted)]">
              {item.description}
            </p>
            <div className="mt-6">
              <ResumeArrowLink href={item.href}>{item.cta}</ResumeArrowLink>
            </div>
          </SurfacePanel>
        ))}
      </div>
    </div>
  );
}

function EducationSection() {
  return (
    <div className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,1fr)_320px]">
      <div className="grid gap-5">
        {educationItems.map((item) => (
          <SurfacePanel
            key={item.title}
            as="article"
            className="rounded-[1.75rem] bg-[var(--surface)]/75"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <h3 className="font-serif text-3xl leading-none text-[var(--foreground)]">
                {item.title}
              </h3>
              <p className="text-sm uppercase tracking-[0.2em] text-[var(--secondary)]">
                {item.institution}
              </p>
            </div>
            <p className="mt-4 text-base leading-8 text-[var(--foreground-muted)]">
              {item.detail}
            </p>
          </SurfacePanel>
        ))}
      </div>

      <SurfacePanel as="aside" variant="white" className="rounded-[1.75rem]">
        <p className="text-xs uppercase tracking-[0.22em] text-[var(--secondary)]">
          Certifications and milestones
        </p>
        <div className="mt-5 grid gap-4">
          {certificationItems.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.25rem] border border-[color:var(--border)] bg-[var(--surface)]/70 p-4"
            >
              <p className="text-sm font-medium text-[var(--foreground)]">
                {item.title}
              </p>
              <p className="mt-2 text-sm text-[var(--foreground-muted)]">
                {item.status}
              </p>
            </div>
          ))}
        </div>
      </SurfacePanel>
    </div>
  );
}

function ResumeSectionContent({ activeSection }: { activeSection: SectionId }) {
  if (activeSection === 'overview') {
    return <OverviewSection />;
  }

  if (activeSection === 'experience') {
    return <ExperienceSection />;
  }

  if (activeSection === 'case-studies') {
    return <CaseStudiesSection />;
  }

  if (activeSection === 'skills') {
    return <SkillsSection />;
  }

  if (activeSection === 'writing') {
    return <WritingSection />;
  }

  return <EducationSection />;
}

export function ResumeBrowser() {
  const [activeSection, setActiveSection] = useState<SectionId>('overview');

  return (
    <section className="grid gap-8 py-10 lg:grid-cols-[280px_minmax(0,1fr)] xl:grid-cols-[300px_minmax(0,1fr)]">
      <aside className="lg:sticky lg:top-6 lg:self-start">
        <SurfacePanel variant="white" padding="compact" className="rounded-[2rem]">
          <p className="px-3 text-xs uppercase tracking-[0.24em] text-[var(--secondary)]">
            Navigate
          </p>

          <div
            role="tablist"
            aria-label="Resume sections"
            className="mt-4 flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0"
          >
            {navItems.map((item, index) => {
              const isActive = item.id === activeSection;

              return (
                <button
                  key={item.id}
                  id={`resume-tab-${item.id}`}
                  type="button"
                  role="tab"
                  aria-controls={`resume-panel-${item.id}`}
                  aria-selected={isActive}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => startTransition(() => setActiveSection(item.id))}
                  className={`min-w-[230px] rounded-[1.5rem] border px-4 py-4 text-left transition-all duration-300 lg:min-w-0 ${
                    isActive
                      ? 'border-[color:var(--primary)] bg-[var(--primary)] text-[var(--background)] shadow-[0_20px_45px_rgba(28,41,133,0.18)]'
                      : 'border-[color:var(--border)] bg-[var(--surface)]/65 text-[var(--foreground)] hover:bg-white'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium">{item.label}</p>
                      <p
                        className={`mt-2 text-sm leading-6 ${
                          isActive
                            ? 'text-[var(--background)]/80'
                            : 'text-[var(--foreground-muted)]'
                        }`}
                      >
                        {item.summary}
                      </p>
                    </div>
                    <span
                      className={`text-xs uppercase tracking-[0.2em] ${
                        isActive
                          ? 'text-[var(--background)]/75'
                          : 'text-[var(--secondary)]'
                      }`}
                    >
                      0{index + 1}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </SurfacePanel>
      </aside>

      <ResumeSectionPanel activeSection={activeSection}>
        <ResumeSectionContent activeSection={activeSection} />
      </ResumeSectionPanel>
    </section>
  );
}
