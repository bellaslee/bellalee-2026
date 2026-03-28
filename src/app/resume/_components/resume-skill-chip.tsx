type ResumeSkillChipProps = {
  label: string;
  onClick?: () => void;
  isActive?: boolean;
};

export function ResumeSkillChip({
  label,
  onClick,
  isActive = false,
}: ResumeSkillChipProps) {
  const classes = isActive
    ? 'border-[color:var(--primary)] bg-[var(--primary)] text-[var(--background)]'
    : 'border-[color:var(--border)] bg-white/85 text-[var(--foreground)]';

  if (!onClick) {
    return (
      <span className={`rounded-full border px-4 py-2 text-sm ${classes}`}>
        {label}
      </span>
    );
  }

  return (
    <button
      type="button"
      onClick={(event) => {
        event.stopPropagation();
        onClick?.();
      }}
      className={`rounded-full border px-4 py-2 text-sm transition-colors ${classes}`}
    >
      {label}
    </button>
  );
}
