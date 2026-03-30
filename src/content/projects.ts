import { readdir } from 'node:fs/promises';
import path from 'node:path';
import type { ComponentType } from 'react';

export type ProjectPostMetadata = {
  title: string;
  summary: string;
  publishedAt: string;
  coverImage?: string;
  role?: string;
  tags?: string[];
};

export type ProjectPostListItem = ProjectPostMetadata & {
  slug: string;
};

type ProjectPostModule = {
  default: ComponentType;
  metadata: ProjectPostMetadata;
};

export const projectsPageMetadata = {
  title: 'Projects | Bella Lee',
  description:
    'Project writeups covering context, implementation decisions, and what each build taught me.',
};

export const projectsPageIntro = {
  eyebrow: 'Projects',
  title: 'Project case studies and build notes.',
  description:
    'A growing set of project writeups covering problem framing, implementation decisions, and the lessons that were worth keeping.',
};

export const projectsPageEmptyState = {
  message: 'The first project post is still being drafted.',
};

export const projectPostPageContent = {
  eyebrow: 'Projects',
  publishedLabel: 'Published',
  notFoundTitle: 'Project Not Found | Bella Lee',
};

const PROJECTS_DIRECTORY = path.join(process.cwd(), 'src/content/projects');

async function getProjectSlugs() {
  const entries = await readdir(PROJECTS_DIRECTORY, { withFileTypes: true });

  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith('.mdx'))
    .map((entry) => entry.name.replace(/\.mdx$/, ''))
    .sort();
}

async function importProjectPost(slug: string): Promise<ProjectPostModule> {
  return import(`@/content/projects/${slug}.mdx`) as Promise<ProjectPostModule>;
}

export async function getProjectPosts(): Promise<ProjectPostListItem[]> {
  const slugs = await getProjectSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const postModule = await importProjectPost(slug);

      return {
        slug,
        ...postModule.metadata,
      };
    }),
  );

  return posts.sort(
    (left, right) =>
      new Date(right.publishedAt).getTime() -
      new Date(left.publishedAt).getTime(),
  );
}

export async function getProjectPost(slug: string) {
  const slugs = await getProjectSlugs();

  if (!slugs.includes(slug)) {
    return null;
  }

  const postModule = await importProjectPost(slug);

  return {
    slug,
    metadata: postModule.metadata,
    Content: postModule.default,
  };
}

export async function getProjectPostSlugs() {
  return getProjectSlugs();
}
