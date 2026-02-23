import type { PropsWithChildren } from "react";

interface CardShellProps extends PropsWithChildren {
  className?: string;
  tone?: "dark" | "light";
}

export function CardShell({ children, className, tone = "light" }: CardShellProps) {
  const toneClasses =
    tone === "dark"
      ? "bg-[var(--surface-deep)] border-[var(--border-ink)] text-[var(--text-inverse)]"
      : "bg-[var(--surface-primary)] border-[var(--border-soft)] text-[var(--text-strong)]";

  return (
    <article className={`rounded-[8px] border p-3 ${toneClasses} ${className ?? ""}`.trim()}>
      {children}
    </article>
  );
}
