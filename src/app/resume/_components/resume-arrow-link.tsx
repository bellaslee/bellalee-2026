import Link from 'next/link';
import { ReactNode } from 'react';

export function ResumeArrowLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const isExternal = href.startsWith('http');

  return (
    <Link
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
      className="inline-flex items-center gap-2 text-sm font-medium text-[var(--primary)]"
    >
      {children}
      <span aria-hidden="true">{'->'}</span>
    </Link>
  );
}
