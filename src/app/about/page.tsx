import { PageIntro } from '../_components/page-intro';
import { SitePage } from '../_components/site-page';
import { SurfacePanel } from '../_components/surface-panel';

const aboutSections = [
  {
    title: 'How I Work',
    body: 'I like work that turns complexity into something people can understand and use. That usually means translating between product goals, system design, and the day-to-day reality of delivery.',
  },
  {
    title: 'What I Care About',
    body: 'I am especially drawn to technical consulting, product thinking, architecture, and the discipline of making reasoning visible through writing and structure.',
  },
  {
    title: 'What This Site Is For',
    body: 'This space is meant to hold projects, resume context, roadmap threads, and notes in one place so the work and the thinking around it can stay connected.',
  },
];

export default function AboutPage() {
  return (
    <SitePage footerClassName="mt-auto">
      <PageIntro
        eyebrow="About"
        title="A little context for how I think, build, and learn."
        description="I work at the intersection of technical consulting, product management, and systems thinking. The through-line is a preference for clarity: clearer problem framing, clearer decisions, and clearer paths from ideas to execution."
        asideEyebrow="Snapshot"
        asideDescription="This page is a concise introduction to the person behind the projects, roadmap, and writing."
        className="lg:grid-cols-[minmax(0,1.2fr)_minmax(260px,0.8fr)]"
      />

      <section className="grid gap-6 py-10 md:grid-cols-2 xl:grid-cols-3">
        {aboutSections.map((section) => (
          <SurfacePanel key={section.title} as="article">
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
