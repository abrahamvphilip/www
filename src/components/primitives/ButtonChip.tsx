import Link from "next/link";
import type { ReactNode } from "react";

type ButtonChipVariant = "light" | "dark" | "ghost" | "outline";

interface ButtonChipProps {
  label: string;
  badge?: string;
  href?: string;
  variant?: ButtonChipVariant;
  className?: string;
  leading?: ReactNode;
}

const VARIANT_CLASSES: Record<ButtonChipVariant, string> = {
  light:
    "border border-[var(--border-default)] bg-[var(--surface-secondary)] text-[var(--text-strong)] transition-colors hover:bg-[#e9e8e6] active:bg-[#dfdddb]",
  dark:
    "border border-[#18181b] bg-[#18181b] text-[#ffffff] transition-colors hover:bg-[#2a2a2e] active:bg-[#101013]",
  ghost:
    "border border-[var(--border-default)] bg-transparent text-[var(--text-strong)] transition-colors hover:bg-[#18181b0d] active:bg-[#18181b1f]",
  outline:
    "border border-[#18181b] bg-transparent text-[#ffffff] transition-colors hover:bg-[#ffffff1f] active:bg-[#ffffff2e]",
};

const BASE =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap px-3 py-2 text-[14px] font-medium leading-[1.4285714286] no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a8f68] focus-visible:ring-offset-2 focus-visible:ring-offset-[#ffffff]";

function ChipBody({
  label,
  badge,
  leading,
}: {
  label: string;
  badge?: string;
  leading?: ReactNode;
}) {
  return (
    <>
      {leading}
      <span className="whitespace-nowrap">{label}</span>
      {badge ? (
        <span className="inline-flex h-4 min-w-4 items-center justify-center rounded-full border border-[var(--border-default)] bg-[var(--surface-muted)] px-1 font-mono text-[10px] font-medium leading-[1.2] text-[var(--text-body)]">
          {badge}
        </span>
      ) : null}
    </>
  );
}

export function ButtonChip({
  label,
  badge,
  href,
  variant = "light",
  className,
  leading,
}: ButtonChipProps) {
  const classes = `${BASE} ${VARIANT_CLASSES[variant]} ${className ?? ""}`.trim();

  if (href) {
    return (
      <Link href={href} className={classes}>
        <ChipBody label={label} badge={badge} leading={leading} />
      </Link>
    );
  }

  return (
    <button type="button" className={classes}>
      <ChipBody label={label} badge={badge} leading={leading} />
    </button>
  );
}
