"use client";

import { type CSSProperties, type ElementType, type ReactNode } from "react";

import { useTokenViewport } from "@/components/primitives/_shared/useTokenViewport";

type SegmentStyle = CSSProperties & Record<`--${string}`, string | number | undefined>;

export interface SegmentProps {
  as?: ElementType;
  className?: string;
  children?: ReactNode;
}

function getTokenDrivenPadding(width: number, minTablet: number | null, pageLimit: number | null) {
  if (minTablet !== null && width < minTablet) {
    return "var(--segment-padding-mobile)";
  }

  if (pageLimit !== null && width >= pageLimit) {
    return "var(--segment-padding)";
  }

  if (minTablet === null) {
    return "var(--segment-padding-mobile)";
  }

  return "calc((var(--segment-padding) / var(--page-limit)) * 100%)";
}

export function Segment({ as, className, children }: SegmentProps) {
  const { width, minTablet, pageLimit } = useTokenViewport();
  const Component = as ?? "div";
  const tokenDrivenPadding = getTokenDrivenPadding(width, minTablet, pageLimit);

  const style: SegmentStyle = {
    flexGrow: 1,
    paddingTop: tokenDrivenPadding,
    paddingBottom: tokenDrivenPadding,
  };

  return (
    <Component className={className} style={style}>
      {children}
    </Component>
  );
}
