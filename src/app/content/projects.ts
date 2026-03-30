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

const PROJECTS_DIRECTORY = path.join(process.cwd(), 'src/app/content/projects');

async function getProjectSlugs() {
  const entries = await readdir(PROJECTS_DIRECTORY, { withFileTypes: true });

  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith('.mdx'))
    .map((entry) => entry.name.replace(/\.mdx$/, ''))
    .sort();
}

async function importProjectPost(slug: string): Promise<ProjectPostModule> {
  return import(`@/app/content/projects/${slug}.mdx`) as Promise<ProjectPostModule>;
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
