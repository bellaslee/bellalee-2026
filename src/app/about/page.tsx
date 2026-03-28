import { PageIntro } from '../_components/page-intro';
import { SitePage } from '../_components/site-page';
import { SurfacePanel } from '../_components/surface-panel';

const aboutSections = [
  {
    title: 'How I work',
    body: "I like work that turns chaos into organized systems. That usually means translating between product goals, design, and delivery. On a more personal level, I'm obsessed with Obsidian, personal knowledge management, and thorough budgeting spreadsheets.",
  },
  {
    title: 'What I care about',
    body: 'Great experiences start with people. I believe the most important part of any work is understanding the people and stories behind the problems we solve.',
  },
  {
    title: 'Beyond work',
    body: 'I enjoy drawing, singing, fingerstyle guitar, hip-hop dance, reading, and creative writing. I take pride in my curiosity and eagerness to learn, and I hope to get to know myself, others, and the world better as I progress in my life and in my career. I gravitate toward themes of love, fate, eternity, and loss in art and philosophy.',
  },
];

export default function AboutPage() {
  return (
    <SitePage footerClassName="mt-auto">
      <PageIntro
        eyebrow="About"
        title="A peek into who I am."
        description="I am currently a technical consultant at West Monroe, but more than that, I am also an artist, writer, and lifelong learner."
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
