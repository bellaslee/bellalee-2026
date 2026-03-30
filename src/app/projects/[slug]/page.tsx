import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageIntro } from '@/app/_components/page-intro';
import { SitePage } from '@/app/_components/site-page';
import { SurfacePanel } from '@/app/_components/surface-panel';
import {
  getProjectPost,
  getProjectPostSlugs,
  projectPostPageContent,
} from '@/content/projects';

type ProjectPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function formatPublishedDate(publishedAt: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(publishedAt));
}

export async function generateStaticParams() {
  const slugs = await getProjectPostSlugs();

  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getProjectPost(slug);

  if (!post) {
    return {
      title: projectPostPageContent.notFoundTitle,
    };
  }

  return {
    title: `${post.metadata.title} | Bella Lee`,
    description: post.metadata.summary,
  };
}

export default async function ProjectPostPage({
  params,
}: ProjectPostPageProps) {
  const { slug } = await params;
  const post = await getProjectPost(slug);

  if (!post) {
    notFound();
  }

  const { Content, metadata } = post;

  return (
    <SitePage footerClassName="mt-16">
      <PageIntro
        eyebrow={projectPostPageContent.eyebrow}
        title={metadata.title}
        description={metadata.summary}
        asideEyebrow={projectPostPageContent.publishedLabel}
        asideDescription={formatPublishedDate(metadata.publishedAt)}
      />

      <section className="py-10">
        <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--foreground-muted)]">
          {metadata.role ? (
            <span className="rounded-full border border-[color:var(--border)] bg-white/70 px-4 py-2 uppercase tracking-[0.18em]">
              {metadata.role}
            </span>
          ) : null}
          {metadata.tags?.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[color:var(--border)] bg-[var(--surface)] px-4 py-2 uppercase tracking-[0.18em]"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      <SurfacePanel
        as="article"
        variant="white"
        padding="spacious"
        className="max-w-3xl pb-16"
      >
        <div className="project-prose">
          <Content />
        </div>
      </SurfacePanel>
    </SitePage>
  );
}
