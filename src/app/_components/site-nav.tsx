'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useState } from 'react';

type SiteNavProps = {
  className?: string;
};

type PrimaryLink = {
  href: string;
  label: string;
  icon?: 'external';
};

const primaryLinks: PrimaryLink[] = [
  { href: '/about', label: 'About' },
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav
      aria-label="Primary"
      className={`relative flex flex-wrap items-center justify-between gap-4 border-b border-[color:var(--border)] pb-5 ${className}`.trim()}
    >
      <Link
        href="/"
        className="font-serif text-2xl font-semibold tracking-[0.08em] text-[var(--foreground)]"
        onClick={closeMobileMenu}
      >
        Bella Lee
      </Link>

      <button
        type="button"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border)] bg-white/70 text-[var(--foreground)] transition-colors duration-200 hover:bg-white md:hidden"
        aria-expanded={isMobileMenuOpen}
        aria-controls="mobile-site-menu"
        aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        onClick={() => setIsMobileMenuOpen((open) => !open)}
      >
        <span className="sr-only">
          {isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        </span>
        <span className="relative h-4 w-5">
          <span
            className={`absolute left-0 h-0.5 w-5 rounded-full bg-current transition-all duration-200 ${
              isMobileMenuOpen ? 'top-[7px] rotate-45' : 'top-0'
            }`}
          />
          <span
            className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition-all duration-200 ${
              isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`absolute left-0 h-0.5 w-5 rounded-full bg-current transition-all duration-200 ${
              isMobileMenuOpen ? 'top-[7px] -rotate-45' : 'top-[14px]'
            }`}
          />
        </span>
      </button>

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

      {isMobileMenuOpen ? (
        <div
          id="mobile-site-menu"
          className="basis-full rounded-[1.5rem] border border-[color:var(--border)] bg-white/85 p-3 text-sm text-[var(--primary)] shadow-[0_20px_45px_rgba(33,53,72,0.08)] md:hidden"
        >
          <div className="flex flex-col">
            {primaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target={link.icon === 'external' ? '_blank' : undefined}
                rel={link.icon === 'external' ? 'noreferrer' : undefined}
                onClick={closeMobileMenu}
                className="flex items-center justify-between rounded-2xl px-4 py-3 transition-colors duration-200 hover:bg-[var(--surface)]"
              >
                <span>{link.label}</span>
                {link.icon === 'external' ? (
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    aria-hidden="true"
                    className="text-[0.85em]"
                  />
                ) : null}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </nav>
  );
}
