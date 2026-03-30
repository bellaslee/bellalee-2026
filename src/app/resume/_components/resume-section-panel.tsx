'use client';

import { ReactNode } from 'react';
import { navItems, type SectionId } from '@/content/resume';

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
      className="animate-[fadePanel_280ms_ease-out] rounded-[1.75rem] border border-[color:var(--border)] bg-white/75 p-5 shadow-[0_28px_70px_rgba(33,53,72,0.06)] sm:rounded-[2rem] sm:p-8"
    >
      <div className="flex flex-col gap-4 border-b border-[color:var(--border)] pb-5 sm:gap-6 sm:pb-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h2 className="mt-2 font-serif text-3xl leading-none text-[var(--foreground)] sm:mt-3 sm:text-4xl lg:text-5xl">
            {activeItem.label}
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-6 text-[var(--foreground-muted)] sm:text-base sm:leading-7">
          {activeItem.summary}
        </p>
      </div>

      {children}
    </div>
  );
}
