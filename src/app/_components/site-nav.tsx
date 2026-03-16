import Link from 'next/link';

type SiteNavProps = {
  className?: string;
};

const primaryLinks = [
  { href: '/resume', label: 'Resume' },
  { href: '/roadmap', label: 'Roadmap' },
  { href: '/tools', label: 'Tools' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
];

export function SiteNav({ className = '' }: SiteNavProps) {
  return (
    <nav
      className={`flex items-center justify-between border-b border-[color:var(--border)] pb-5 ${className}`.trim()}
    >
      <Link
        href="/"
        className="font-serif text-2xl font-semibold tracking-[0.08em] text-[var(--foreground)]"
      >
        Bella Lee
      </Link>

      <div className="hidden items-center gap-6 text-sm text-[var(--primary)] md:flex">
        {primaryLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}

        <Link
          href="https://garden.bellalee.com"
          target="_blank"
          rel="noreferrer"
          title="Essays, experiments, and unfinished thinking."
          className="group inline-flex items-center gap-1.5"
        >
          Notes
          <span
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          >
            <svg
              viewBox="0 0 12 12"
              className="h-3 w-3"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M3 9 9 3" />
              <path d="M4 3h5v5" />
            </svg>
          </span>
        </Link>
      </div>
    </nav>
  );
}
