"use client";

import { type CSSProperties, type ElementType, type ReactNode } from "react";

import { type TokenBreakpoint, useTokenViewport } from "@/components/primitives/_shared/useTokenViewport";

type ContainerStyle = CSSProperties & Record<`--${string}`, string | number | undefined>;

export interface ContainerProps {
  as?: ElementType;
  className?: string;
  children?: ReactNode;
}

function getCurrentGutterToken(breakpoint: TokenBreakpoint) {
  if (breakpoint === "desktop") {
    return "var(--container-gutter-desktop)";
  }

  if (breakpoint === "tablet") {
    return "var(--container-gutter-tablet)";
  }

  return "var(--container-gutter-mobile)";
}

export function Container({ as, className, children }: ContainerProps) {
  const { breakpoint } = useTokenViewport();
  const Component = as ?? "div";

  const style: ContainerStyle = {
    flexGrow: 1,
    marginInline: "auto",
    paddingInline: "var(--container-gutter-current)",
    maxWidth: "calc(var(--page-width) + (var(--container-gutter-current) * 2))",
    "--container-gutter-current": getCurrentGutterToken(breakpoint),
  };

  return (
    <Component className={className} style={style}>
      {children}
    </Component>
  );
}
