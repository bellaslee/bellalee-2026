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
    <ul className="mt-3 grid gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            aria-hidden="true"
            className="mt-3 h-1.5 w-1.5 rounded-full bg-[var(--accent)]"
          />
          <span className={`text-base leading-7 ${textClassName}`}>{item}</span>
        </li>
      ))}
    </ul>
  );
}
