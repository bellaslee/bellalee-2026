declare module '*.mdx' {
  import type { ComponentType } from 'react';

  const MDXComponent: ComponentType;
  export const metadata: {
    title: string;
    summary: string;
    publishedAt: string;
    coverImage?: string;
    role?: string;
    tags?: string[];
  };
  export default MDXComponent;
}
