interface StatBadgeProps {
  label: string;
  inverse?: boolean;
}

export function StatBadge({ label, inverse = true }: StatBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs leading-none ${
        inverse
          ? "border-[var(--border-ink)] bg-[var(--surface-glass)] text-[var(--text-inverse-subtle)]"
          : "border-[var(--border-soft)] bg-[var(--surface-primary)] text-[var(--text-subtle)]"
      }`}
    >
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
      <span>{label}</span>
    </div>
  );
}
