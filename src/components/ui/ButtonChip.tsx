import Link from "next/link";
import type { ReactNode } from "react";

type ButtonChipVariant = "light" | "dark" | "ghost" | "outline" | "accent";
type ButtonChipSize = "sm" | "md";

interface ButtonChipProps {
  label: string;
  badge?: string;
  href?: string;
  variant?: ButtonChipVariant;
  size?: ButtonChipSize;
  className?: string;
  leading?: ReactNode;
}

const BASE =
  "focus-ring inline-flex items-center justify-center whitespace-nowrap rounded-[12px] no-underline transition-colors focus-visible:outline-none";

const SIZE_CLASSES: Record<ButtonChipSize, string> = {
  sm: "h-[36px] gap-2 px-3 py-2 font-sans text-sm font-medium leading-[1.4285714286]",
  md: "h-[44px] gap-2 px-4 py-[10px] font-sans text-base font-medium leading-[1.5]",
};

const VARIANT_CLASSES: Record<ButtonChipVariant, string> = {
  light: "bg-gallery-25 text-bunker-800 hover:bg-gallery-50",
  dark: "bg-bunker-800 text-alabaster-25 hover:bg-bunker-675",
  ghost: "bg-transparent text-bunker-800 hover:bg-bunker-800/8",
  outline: "bg-transparent text-alabaster-25 hover:bg-alabaster-25/12",
  accent: "bg-eucalyptus-325 text-alabaster-25 hover:bg-eucalyptus-225",
};

const BADGE =
  "inline-flex h-5 min-w-[18px] items-center justify-center rounded-[8px] bg-alabaster-50 px-1 font-mono text-xxs font-medium leading-[1.2] text-bunker-675";

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
      {label ? <span className="whitespace-nowrap">{label}</span> : null}
      {badge ? <span className={BADGE}>{badge}</span> : null}
    </>
  );
}

export function ButtonChip({
  label,
  badge,
  href,
  variant = "light",
  size = "sm",
  className,
  leading,
}: ButtonChipProps) {
  const classes = `${BASE} ${SIZE_CLASSES[size]} ${VARIANT_CLASSES[variant]} ${className ?? ""}`.trim();

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
