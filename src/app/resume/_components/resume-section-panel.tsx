'use client';

import { ReactNode } from 'react';
import { navItems, type SectionId } from '../resume.content';

export function ResumeSectionPanel({
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
      className="animate-[fadePanel_280ms_ease-out] rounded-[2rem] border border-[color:var(--border)] bg-white/75 p-6 shadow-[0_28px_70px_rgba(33,53,72,0.06)] sm:p-8"
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
