export function ResumeBulletList({
  items,
  tone = 'default',
}: {
  items: string[];
  tone?: 'default' | 'muted';
}) {
  const textClassName =
    tone === 'muted'
      ? 'text-[var(--foreground-muted)]'
      : 'text-[var(--foreground)]';

  return (
    <ul className="mt-3 grid gap-3 sm:gap-4">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            aria-hidden="true"
            className="mt-2.5 h-1.5 w-1.5 rounded-full bg-[var(--accent)] sm:mt-3"
          />
          <span className={`text-sm leading-6 sm:text-base sm:leading-7 ${textClassName}`}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
