'use client';

import { startTransition } from 'react';
import { SurfacePanel } from '../../_components/surface-panel';
import { navItems, type SectionId } from '../resume.content';

export function ResumeSidebarNav({
  activeSection,
  onSelectSection,
}: {
  activeSection: SectionId;
  onSelectSection: (sectionId: SectionId) => void;
}) {
  return (
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
                onClick={() => startTransition(() => onSelectSection(item.id))}
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
  );
}
