import Link from 'next/link';
import { SectionHeading } from './section-heading';
import {
  featureCards,
  homeActions,
  identityPillars,
  learningTopics,
  type HomeAction,
  type HomeFeature,
  type LearningTopic,
} from './home-content';
import { SurfaceLinkCard, SurfacePanel } from './surface-panel';

function HomeActionLink({ href, label, variant }: HomeAction) {
  const baseClasses =
    'rounded-full px-6 py-3 text-sm font-medium transition-transform duration-200';

  if (variant === 'primary') {
    return (
      <Link
        href={href}
        className={`${baseClasses} bg-[var(--primary)] hover:-translate-y-0.5`}
        style={{ color: 'var(--background)' }}
      >
        {label}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={`${baseClasses} border border-[color:var(--border)] bg-white/60 text-[var(--foreground)] transition-colors hover:bg-white`}
    >
      {label}
    </Link>
  );
}

function HeroDetail({
  title,
  body,
  surface,
}: {
  title: string;
  body: string;
  surface: 'surface' | 'white';
}) {
  const surfaceClasses =
    surface === 'surface' ? 'bg-[var(--surface)]/90' : 'bg-white/85';

  return (
    <div
      className={`rounded-2xl border border-[color:var(--border)] p-4 ${surfaceClasses}`}
    >
      <p className="text-xs uppercase tracking-[0.2em] text-[var(--secondary)]">
        {title}
      </p>
      <p className="mt-2 text-base leading-7 text-[var(--foreground)]">
        {body}
      </p>
    </div>
  );
}

export function HomeHeroSection() {
  return (
    <section className="grid gap-10 pb-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:pb-16">
      <div className="max-w-3xl">
        <h1 className="font-serif text-6xl leading-none text-[var(--foreground)] sm:text-7xl lg:text-[5rem]">
          Bella enjoys bridging the gap between people, process, and technology.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--foreground-muted)]">
          I work at the overlap of technical consulting, product management, and
          system architecture, helping teams turn complexity into clear
          decisions, scalable systems, and products people can actually use.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          {homeActions.map((action) => (
            <HomeActionLink key={action.href} {...action} />
          ))}
        </div>
      </div>

      <SurfacePanel
        className="relative shadow-[0_30px_80px_rgba(33,53,72,0.08)]"
        variant="white"
        padding="spacious"
      >
        <div
          className="ornament absolute inset-0 opacity-25"
          aria-hidden="true"
        />
        <div className="space-y-6">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--secondary)]">
              Currently Exploring
            </p>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-[var(--foreground)]">
              Creating reusable AI workflows.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <HeroDetail
              title="Focus"
              body="Experimenting with AI workflows to create repeatable and effective frameworks."
              surface="surface"
            />
            <HeroDetail
              title="Approach"
              body="Process and product-minded problem solving, future-state considerations, and documentation that keeps ideas visible."
              surface="white"
            />
          </div>
        </div>
      </SurfacePanel>
    </section>
  );
}

export function IdentityPillarsSection() {
  return (
    <section
      aria-labelledby="identity-pillars-heading"
      className="mb-12 border-y border-[color:var(--border)] py-5"
    >
      <h2 id="identity-pillars-heading" className="sr-only">
        Core focus areas
      </h2>
      <ul className="grid gap-3 text-sm uppercase tracking-[0.22em] text-[var(--primary)] sm:grid-cols-2 lg:grid-cols-4">
        {identityPillars.map((item) => (
          <li key={item} className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function FeatureCardList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 space-y-2 text-sm text-[var(--foreground)]">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function HomeFeatureCard({ feature }: { feature: HomeFeature }) {
  const isFeatured = feature.emphasis === 'featured';

  return (
    <SurfaceLinkCard
      href={feature.href}
      eyebrow={feature.eyebrow}
      title={feature.title}
      description={feature.description}
      ctaLabel={feature.ctaLabel}
      variant={feature.surface}
      padding={isFeatured ? 'spacious' : 'default'}
      titleSize={isFeatured ? 'display' : 'large'}
      titleAs="h3"
      className={
        isFeatured
          ? 'lg:row-span-2 shadow-[0_24px_60px_rgba(33,53,72,0.06)]'
          : undefined
      }
    >
      <FeatureCardList items={feature.items} />
    </SurfaceLinkCard>
  );
}

export function FeatureGridSection() {
  const [featuredCard, ...secondaryCards] = featureCards;

  return (
    <section aria-labelledby="featured-destinations-heading" className="pb-14">
      <h2 id="featured-destinations-heading" className="sr-only">
        Featured destinations
      </h2>
      <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-5 lg:grid-rows-2">
          <HomeFeatureCard feature={featuredCard} />
        </div>
        <div className="grid gap-5">
          {secondaryCards.map((feature) => (
            <HomeFeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LearningTopicCard({ topic }: { topic: LearningTopic }) {
  return (
    <SurfacePanel
      as="article"
      variant="white"
      padding="compact"
      className="shadow-[0_20px_50px_rgba(33,53,72,0.05)]"
    >
      <p className="text-xs uppercase tracking-[0.24em] text-[var(--secondary)]">
        {topic.tag}
      </p>
      <h3 className="mt-3 font-serif text-3xl leading-none text-[var(--foreground)]">
        {topic.title}
      </h3>
      <dl className="mt-5 grid gap-3 md:grid-cols-2">
        <div className="md:border-r md:border-[color:var(--border)] md:pr-4">
          <dt className="text-xs uppercase tracking-[0.18em] text-[var(--secondary)]">
            Current
          </dt>
          <dd className="mt-2 text-sm leading-7 text-[var(--foreground)]">
            {topic.current}
          </dd>
        </div>
        <div className="md:pl-4">
          <dt className="text-xs uppercase tracking-[0.18em] text-[var(--secondary)]">
            Next
          </dt>
          <dd className="mt-2 text-sm leading-7 text-[var(--foreground)]">
            {topic.next}
          </dd>
        </div>
      </dl>
    </SurfacePanel>
  );
}

export function LearningTopicsSection() {
  return (
    <section className="grid gap-8 py-14 lg:grid-cols-[0.7fr_1.3fr]">
      <SectionHeading
        eyebrow="Current Learning"
        title="A compact view into the ideas shaping how I work and live."
        description="A snapshot of what I am focused on now and what I want to move into next."
      />

      <div className="grid gap-4">
        {learningTopics.map((topic) => (
          <LearningTopicCard key={topic.title} topic={topic} />
        ))}
      </div>
    </section>
  );
}
