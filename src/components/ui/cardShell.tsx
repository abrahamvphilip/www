import type { PropsWithChildren } from "react";

interface CardShellProps extends PropsWithChildren {
  className?: string;
  tone?: "dark" | "light";
}

export function CardShell({ children, className, tone = "light" }: CardShellProps) {
  const toneClasses =
    tone === "dark"
      ? "bg-bunker-800 text-alabaster-25"
      : "bg-alabaster-25 text-bunker-800";

  return (
    <article className={`rounded-[8px] p-3 ${toneClasses} ${className ?? ""}`.trim()}>
      {children}
    </article>
  );
}
