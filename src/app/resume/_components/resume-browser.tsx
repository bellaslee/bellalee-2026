'use client';

import { useState } from 'react';
import { type SectionId } from '../resume.content';
import { ResumeSectionContent } from './resume-section-content';
import { ResumeSectionPanel } from './resume-section-panel';
import { ResumeSidebarNav } from './resume-sidebar-nav';

export function ResumeBrowser() {
  const [activeSection, setActiveSection] = useState<SectionId>('experience');

  return (
    <section className="grid gap-8 py-10 lg:grid-cols-[280px_minmax(0,1fr)] xl:grid-cols-[300px_minmax(0,1fr)]">
      <ResumeSidebarNav
        activeSection={activeSection}
        onSelectSection={setActiveSection}
      />

      <ResumeSectionPanel activeSection={activeSection}>
        <ResumeSectionContent activeSection={activeSection} />
      </ResumeSectionPanel>
    </section>
  );
}
