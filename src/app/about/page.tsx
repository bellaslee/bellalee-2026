import type { Metadata } from 'next';
import {
  aboutPageIntro,
  aboutPageMetadata,
  aboutSections,
  aboutSectionVariants,
} from '@/content/about';
import { PageIntro } from '../_components/page-intro';
import { SitePage } from '../_components/site-page';
import { SurfacePanel } from '../_components/surface-panel';

export const metadata: Metadata = aboutPageMetadata;

export default function AboutPage() {
  return (
    <SitePage footerClassName="mt-auto">
      <PageIntro
        eyebrow={aboutPageIntro.eyebrow}
        title={aboutPageIntro.title}
        description={aboutPageIntro.description}
        className="lg:grid-cols-[minmax(0,1.2fr)_minmax(260px,0.8fr)]"
      />

      <section className="grid gap-6 max-w-3xl py-10">
        {aboutSections.map((section, index) => (
          <SurfacePanel
            key={section.title}
            as="article"
            variant={aboutSectionVariants[index % aboutSectionVariants.length]}
            className="relative"
          >
            <div
              className="ornament absolute inset-0 opacity-25"
              aria-hidden="true"
            />
            <h2 className="font-serif text-4xl leading-none text-[var(--foreground)]">
              {section.title}
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--foreground-muted)]">
              {section.body}
            </p>
          </SurfacePanel>
        ))}
      </section>
    </SitePage>
  );
}
