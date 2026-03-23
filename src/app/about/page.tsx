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
    body: "Great expereinces start with people. I'm passionate about making information, products, and processes intuitive, accessible, and enjoyable by bridging the gap between people and technology.",
  },
  {
    title: 'What This Site Is For',
    body: 'This space is meant to hold projects, resume context, roadmap threads, and notes in one place so the work and the thinking around it can stay connected.',
  },
  {
    title: 'Beyond Work',
    body: "Beyond work, I enjoy drawing, singing, fingerstyle guitar, hip-hop dance, reading, and creative writing. I take pride in my curiosity and eagerness to learn, and I hope to get to know myself, others, and the world better as I progress in my life and in my career. I gravitate toward themes of love, fate, eternity, and loss in art and philosophy. Recently, I've been really interested in learning about search and retrieval systems.",
  },
];

export default function AboutPage() {
  return (
    <SitePage footerClassName="mt-auto">
      <PageIntro
        eyebrow="About"
        title="A peek into who I am, both at and outside of work."
        description="I am currently a technical consultant at West Monroe, but I am also an artist, writer, and lifelong learner."
        className="lg:grid-cols-[minmax(0,1.2fr)_minmax(260px,0.8fr)]"
      />

      <section className="grid gap-6 py-10 md:grid-cols-2">
        {aboutSections.map((section) => (
          <SurfacePanel key={section.title} as="article">
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
