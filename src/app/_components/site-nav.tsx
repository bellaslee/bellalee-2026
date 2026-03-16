import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

type SiteNavProps = {
  className?: string;
};

type PrimaryLink = {
  href: string;
  label: string;
  icon?: 'external';
};

const primaryLinks: PrimaryLink[] = [
  { href: '/resume', label: 'Resume' },
  { href: '/roadmap', label: 'Roadmap' },
  { href: '/tools', label: 'Tools' },
  { href: '/projects', label: 'Projects' },
  {
    href: 'https://garden.bellalee.com',
    label: 'Notes',
    icon: 'external',
  },
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
          <Link
            key={link.href}
            href={link.href}
            target={link.icon === 'external' ? '_blank' : undefined}
            rel={link.icon === 'external' ? 'noreferrer' : undefined}
          >
            <span className="inline-flex items-center gap-1">
              <span>{link.label}</span>
              {link.icon === 'external' ? (
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  aria-hidden="true"
                  className="text-[0.72em]"
                />
              ) : null}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
