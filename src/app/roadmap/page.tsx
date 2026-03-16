import { PageIntro } from '../_components/page-intro';
import { SitePage } from '../_components/site-page';

export default function RoadmapPage() {
  return (
    <SitePage footerClassName="mt-auto">
      <PageIntro
        eyebrow="Roadmap"
        title="A structured learning roadmap is coming soon."
        description="This page will outline current study areas, next-step priorities, and the threads connecting technical growth to future project work."
        asideEyebrow="Status"
        asideDescription="Placeholder page for the upcoming roadmap view."
      />

      <section className="py-10">
        <div className="rounded-[2rem] border border-dashed border-[color:var(--border)] bg-[var(--surface)]/70 p-8">
          <p className="text-base leading-8 text-[var(--foreground-muted)]">
            Current focuses, learning tracks, and milestone planning will be
            added here next.
          </p>
        </div>
      </section>
    </SitePage>
  );
}
