import Link from 'next/link';
import { type HTMLAttributes, type ReactNode } from 'react';

type SurfaceVariant = 'surface' | 'white' | 'muted';
type SurfacePadding = 'default' | 'compact' | 'spacious';
type SurfaceTitleSize = 'medium' | 'large' | 'display';
type SurfaceHeadingTag = 'h2' | 'h3';
type SurfaceDescriptionTone = 'muted' | 'default';

type SurfacePanelProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  className?: string;
  as?: 'article' | 'aside' | 'div' | 'section';
  variant?: SurfaceVariant;
  padding?: SurfacePadding;
};

type SurfaceLinkCardProps = {
  href: string;
  title: string;
  eyebrow?: string;
  description: string;
  children?: ReactNode;
  ctaLabel: string;
  className?: string;
  variant?: SurfaceVariant;
  padding?: SurfacePadding;
  titleSize?: SurfaceTitleSize;
  titleAs?: SurfaceHeadingTag;
  descriptionTone?: SurfaceDescriptionTone;
};

const panelVariantClasses: Record<SurfaceVariant, string> = {
  surface: 'bg-[var(--surface)]',
  white: 'bg-white/70',
  muted: 'bg-[var(--surface-muted)]',
};

const panelPaddingClasses: Record<SurfacePadding, string> = {
  compact: 'p-6',
  default: 'p-7',
  spacious: 'p-8',
};

const titleSizeClasses: Record<SurfaceTitleSize, string> = {
  medium: 'text-3xl',
  large: 'text-4xl',
  display: 'text-5xl',
};

const descriptionToneClasses: Record<SurfaceDescriptionTone, string> = {
  muted: 'text-[var(--foreground-muted)]',
  default: 'text-[var(--foreground)]',
};

function joinClasses(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(' ');
}

export function SurfacePanel({
  children,
  className = '',
  as = 'div',
  variant = 'surface',
  padding = 'default',
  ...props
}: SurfacePanelProps) {
  const Component = as;

  return (
    <Component
      {...props}
      className={joinClasses(
        'card-sheen rounded-[2rem] border border-[color:var(--border)] shadow-[0_24px_60px_rgba(33,53,72,0.05)]',
        panelVariantClasses[variant],
        panelPaddingClasses[padding],
        className,
      )}
    >
      <div className="relative z-10">{children}</div>
    </Component>
  );
}

export function SurfaceLinkCard({
  href,
  title,
  eyebrow,
  description,
  children,
  ctaLabel,
  className = '',
  variant = 'surface',
  padding = 'default',
  titleSize = 'large',
  titleAs = 'h3',
  descriptionTone = 'muted',
}: SurfaceLinkCardProps) {
  const isExternal = href.startsWith('http');
  const HeadingTag = titleAs;

  return (
    <Link
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
      className={joinClasses(
        'card-sheen group relative rounded-[2rem] border border-[color:var(--border)] shadow-[0_24px_60px_rgba(33,53,72,0.05)] transition-transform duration-300 hover:-translate-y-1',
        panelVariantClasses[variant],
        panelPaddingClasses[padding],
        className,
      )}
    >
      <div className="relative z-10">
        {eyebrow ? (
          <p className="text-xs uppercase tracking-[0.24em] text-[var(--secondary)]">
            {eyebrow}
          </p>
        ) : null}
        <HeadingTag
          className={joinClasses(
            eyebrow ? 'mt-3' : '',
            'font-serif leading-none text-[var(--foreground)]',
            titleSizeClasses[titleSize],
          )}
        >
          {title}
        </HeadingTag>
        <p
          className={joinClasses(
            'mt-4 text-base leading-8',
            descriptionToneClasses[descriptionTone],
          )}
        >
          {description}
        </p>
        {children}
        <p className="mt-6 text-sm font-medium text-[var(--primary)]">
          {ctaLabel}{' '}
          <span
            aria-hidden="true"
            className="inline-block transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </p>
      </div>
    </Link>
  );
}
