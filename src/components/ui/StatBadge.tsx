interface StatBadgeProps {
  label: string;
  inverse?: boolean;
}

export function StatBadge({ label, inverse = true }: StatBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs leading-none ${
        inverse
          ? "bg-alabaster-25/8 text-alabaster-150"
          : "bg-alabaster-25 text-bunker-550"
      }`}
    >
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-eucalyptus-325" />
      <span>{label}</span>
    </div>
  );
}
