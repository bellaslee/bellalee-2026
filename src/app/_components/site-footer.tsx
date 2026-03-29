import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

type SiteFooterProps = {
  className?: string;
};

const footerLinks = [
  {
    href: '/projects',
    label: 'Projects',
  },
  {
    href: 'https://garden.bellalee.com',
    label: 'Notes',
    icon: 'external' as const,
  },
  {
    href: 'https://www.linkedin.com/in/bellasylee/',
    label: 'LinkedIn',
    icon: 'external' as const,
  },
];

export function SiteFooter({ className = '' }: SiteFooterProps) {
  return (
    <footer
      className={`flex flex-col gap-4 border-t border-[color:var(--border)] py-8 text-sm text-[var(--primary)] md:flex-row md:items-center md:justify-between ${className}`.trim()}
    >
      <p>bella(at)bellalee(dot)com</p>
      <div className="flex flex-wrap gap-5">
        {footerLinks.map((link) => (
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
    </footer>
  );
}
