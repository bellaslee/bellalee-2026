import type { Metadata } from 'next';
import { getProjectPosts } from '@/app/content/projects';
import { PageIntro } from '../_components/page-intro';
import { SitePage } from '../_components/site-page';
import { ProjectPostCard } from './_components/project-post-card';

export const metadata: Metadata = {
  title: 'Projects | Bella Lee',
  description:
    'Project writeups covering context, implementation decisions, and what each build taught me.',
};

export default async function ProjectsPage() {
  const posts = await getProjectPosts();

  return (
    <SitePage footerClassName="mt-auto">
      <PageIntro
        eyebrow="Projects"
        title="Project case studies and build notes."
        description="A growing set of project writeups covering problem framing, implementation decisions, and the lessons that were worth keeping."
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
              The first project post is still being drafted.
            </p>
          </div>
        )}
      </section>
    </SitePage>
  );
}
