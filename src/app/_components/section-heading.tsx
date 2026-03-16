type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <p className="text-xs uppercase tracking-[0.28em] text-[var(--secondary)]">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-serif text-5xl leading-none text-[var(--foreground)]">
        {title}
      </h2>
      <p className="mt-5 max-w-lg text-base leading-8 text-[var(--foreground-muted)]">
        {description}
      </p>
    </div>
  );
}
