import Link from 'next/link';
import type { ProjectPostListItem } from '@/content/projects';
import { ProjectCoverImage } from './project-cover-image';

type ProjectPostCardProps = {
  post: ProjectPostListItem;
};

function formatPublishedDate(publishedAt: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(publishedAt));
}

export function ProjectPostCard({ post }: ProjectPostCardProps) {
  return (
    <li>
      <Link
        href={`/projects/${post.slug}`}
        className="card-sheen flex h-full flex-col overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-white/75 transition duration-200 hover:-translate-y-0.5 hover:border-[color:var(--primary)]/25 hover:shadow-[0_24px_60px_rgba(33,53,72,0.08)] md:flex-row md:items-stretch"
      >
        {post.coverImage ? (
          <div className="relative min-h-52 w-full shrink-0 md:w-[42%] md:self-stretch">
            <div className="relative h-full min-h-52 md:absolute md:inset-0 md:min-h-0">
              <ProjectCoverImage
                variant="card"
                src={post.coverImage}
                alt=""
                decorative
              />
            </div>
          </div>
        ) : null}
        <div className="flex flex-1 flex-col p-7">
          <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--foreground-muted)]">
            <span className="uppercase tracking-[0.2em] text-[var(--primary)]">
              {formatPublishedDate(post.publishedAt)}
            </span>
            {post.role ? (
              <>
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                <span>{post.role}</span>
              </>
            ) : null}
          </div>

          <h2 className="mt-5 font-serif text-3xl leading-tight text-[var(--foreground)]">
            {post.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--foreground-muted)]">
            {post.summary}
          </p>

          {post.tags?.length ? (
            <ul className="mt-6 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-[color:var(--border)] bg-[var(--surface)] px-3 py-1 text-xs uppercase tracking-[0.18em] text-[var(--foreground-muted)]"
                >
                  {tag}
                </li>
              ))}
            </ul>
          ) : null}

          <p className="mt-8 text-sm uppercase tracking-[0.22em] text-[var(--secondary)]">
            Read case study
          </p>
        </div>
      </Link>
    </li>
  );
}
