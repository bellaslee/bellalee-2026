import type { Metadata } from 'next';
import {
  getProjectPosts,
  projectsPageEmptyState,
  projectsPageIntro,
  projectsPageMetadata,
} from '@/content/projects';
import { PageIntro } from '../_components/page-intro';
import { SitePage } from '../_components/site-page';
import { ProjectPostCard } from './_components/project-post-card';

export const metadata: Metadata = projectsPageMetadata;

export default async function ProjectsPage() {
  const posts = await getProjectPosts();

  return (
    <SitePage footerClassName="mt-auto">
      <PageIntro
        eyebrow={projectsPageIntro.eyebrow}
        title={projectsPageIntro.title}
        description={projectsPageIntro.description}
      />
      <section className="py-10">
        {posts.length ? (
          <ul className="grid gap-6">
            {posts.map((post) => (
              <ProjectPostCard key={post.slug} post={post} />
            ))}
          </ul>
        ) : (
          <div className="rounded-[2rem] border border-dashed border-[color:var(--border)] bg-white/60 p-8">
            <p className="text-base leading-8 text-[var(--foreground-muted)]">
              {projectsPageEmptyState.message}
            </p>
          </div>
        )}
      </section>
    </SitePage>
  );
}
