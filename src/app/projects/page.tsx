import { PageIntro } from '../_components/page-intro';
import { SitePage } from '../_components/site-page';

export default function ProjectsPage() {
  return (
    <SitePage footerClassName="mt-auto">
      <PageIntro
        eyebrow="Projects"
        title="Project case studies are on the way."
        description="This page will hold deeper writeups on selected work, including problem framing, tradeoffs, implementation decisions, and what was learned along the way."
      />

      <section className="py-10">
        <div className="rounded-[2rem] border border-dashed border-[color:var(--border)] bg-[var(--surface)]/70 p-8">
          <p className="text-base leading-8 text-[var(--foreground-muted)]">
            More detailed project narratives will land here as they are written
            and organized.
          </p>
        </div>
      </section>
    </SitePage>
  );
}
