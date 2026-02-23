interface PlaceholderMediaProps {
  label: string;
  ratio?: string;
  className?: string;
  variant?: "checker" | "gauge" | "isometric" | "portrait" | "outline" | "shadow";
}

export function PlaceholderMedia({
  label,
  ratio = "16/9",
  className,
  variant = "checker",
}: PlaceholderMediaProps) {
  const overlay =
    variant === "shadow"
      ? "bg-[radial-gradient(circle_at_50%_76%,#0000002a_0%,transparent_62%)]"
      : variant === "outline"
        ? "bg-[radial-gradient(circle_at_50%_72%,#00000018_0%,transparent_58%)]"
        : "bg-transparent";

  return (
    <div
      aria-label={label}
      className={`relative w-full overflow-hidden border border-[var(--border-default)] bg-[var(--surface-card)] ${className ?? ""}`.trim()}
      style={{ aspectRatio: ratio }}
    >
      <div className="absolute inset-0 checkerboard" />
      <div className={`absolute inset-0 ${overlay}`} />
    </div>
  );
}
