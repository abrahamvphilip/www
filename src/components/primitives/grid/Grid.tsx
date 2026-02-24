"use client";

import { type CSSProperties, type ElementType, type ReactNode } from "react";

import { type TokenBreakpoint, useTokenViewport } from "@/components/primitives/_shared/useTokenViewport";

type GridStyle = CSSProperties & Record<`--${string}`, string | number | undefined>;

const warnedMessages = new Set<string>();

export interface GridProps {
  as?: ElementType;
  className?: string;
  direction?: "ltr" | "rtl";
  mobile?: number;
  tablet?: number;
  desktop?: number;
  children?: ReactNode;
}

function warnDev(message: string) {
  if (process.env.NODE_ENV === "production" || warnedMessages.has(message)) {
    return;
  }

  warnedMessages.add(message);
  console.warn(message);
}

function normalizeSpan(span: number | undefined, label: "mobile" | "tablet" | "desktop") {
  if (typeof span !== "number") {
    return undefined;
  }

  if (Number.isFinite(span) && span > 0) {
    return span;
  }

  warnDev(`[Grid] Invalid ${label} span "${String(span)}". Expected a positive number.`);
  return undefined;
}

function resolveSpanByBreakpoint(
  breakpoint: TokenBreakpoint,
  spans: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  },
) {
  if (breakpoint === "desktop") {
    return spans.desktop ?? spans.tablet ?? spans.mobile;
  }

  if (breakpoint === "tablet") {
    return spans.tablet ?? spans.mobile;
  }

  return spans.mobile;
}

export function Grid({
  as,
  className,
  direction = "ltr",
  mobile,
  tablet,
  desktop,
  children,
}: GridProps) {
  const { breakpoint } = useTokenViewport();
  const Component = as ?? "div";

  const resolvedSpan = resolveSpanByBreakpoint(breakpoint, {
    mobile: normalizeSpan(mobile, "mobile"),
    tablet: normalizeSpan(tablet, "tablet"),
    desktop: normalizeSpan(desktop, "desktop"),
  });

  const style: GridStyle = {
    flex: "none",
    direction,
    width: "calc((var(--grid-span-current) / var(--grid-column-count)) * 100%)",
    "--grid-span-current": typeof resolvedSpan === "number" ? `${resolvedSpan}` : "var(--grid-column-count)",
  };

  return (
    <Component className={className} style={style} dir={direction}>
      {children}
    </Component>
  );
}
