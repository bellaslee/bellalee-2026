import Link from 'next/link';

type SiteFooterProps = {
  className?: string;
};

export function SiteFooter({ className = '' }: SiteFooterProps) {
  return (
    <footer
      className={`flex flex-col gap-4 border-t border-[color:var(--border)] py-8 text-sm text-[var(--primary)] md:flex-row md:items-center md:justify-between ${className}`.trim()}
    >
      <p>bella@bellalee.com</p>
      <div className="flex flex-wrap gap-5">
        <Link href="https://www.linkedin.com/in/bellasylee/">LinkedIn</Link>
      </div>
    </footer>
  );
}
