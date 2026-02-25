"use client";

import { type CSSProperties, useEffect, useMemo, useRef } from "react";

import { useTokenViewport } from "@/components/primitives/_shared/useTokenViewport";
import { useLocalStorage } from "./hooks/useLocalStorage";

import "./gridOverlay.css";

const LOCAL_STORAGE_KEY_HORIZONTAL = "_northDevtoolsHorizontalGrid";
const LOCAL_STORAGE_KEY_VERTICAL = "_northDevtoolsVerticalGrid";

interface GridOverlayProps {
  columns?: number;
  baseline?: number;
  button?: boolean;
}

type GridOverlayStyle = CSSProperties & Record<`--${string}`, string | number | undefined>;

function getCurrentGutterToken(breakpoint: "mobile" | "tablet" | "desktop") {
  if (breakpoint === "desktop") {
    return "var(--container-gutter-desktop)";
  }

  if (breakpoint === "tablet") {
    return "var(--container-gutter-tablet)";
  }

  return "var(--container-gutter-mobile)";
}

export function GridOverlay({
  columns,
  baseline,
  button = false,
}: GridOverlayProps) {
  const { breakpoint, width, minMobile } = useTokenViewport();
  const gridOverlayRef = useRef<HTMLDivElement>(null);
  const [isHorizontalVisible, setHorizontal] = useLocalStorage(
    LOCAL_STORAGE_KEY_HORIZONTAL,
    false,
  );
  const [isVerticalVisible, setVertical] = useLocalStorage(
    LOCAL_STORAGE_KEY_VERTICAL,
    false,
  );

  const { resolvedColumns, resolvedBaseline } = useMemo(() => {
    const fallbackColumns = columns ?? 12;
    const fallbackBaseline = baseline ?? 8;

    if (typeof window === "undefined" || width === 0) {
      return {
        resolvedColumns: fallbackColumns,
        resolvedBaseline: fallbackBaseline,
      };
    }

    const rootStyles = getComputedStyle(document.documentElement);
    const tokenColumns = Number.parseInt(rootStyles.getPropertyValue("--grid-column-count"), 10);
    const tokenBaseline = Number.parseFloat(rootStyles.getPropertyValue("--grid-baseline"));

    return {
      resolvedColumns: columns ?? (Number.isFinite(tokenColumns) ? tokenColumns : 12),
      resolvedBaseline: baseline ?? (Number.isFinite(tokenBaseline) ? tokenBaseline : 8),
    };
  }, [columns, baseline, width]);

  const onToggleHorizontal = () => {
    setHorizontal((current) => !current);
  };

  const onToggleVertical = () => {
    setVertical((current) => !current);
  };

  useEffect(() => {
    if (!gridOverlayRef.current) {
      return;
    }

    const currentGutterToken = getCurrentGutterToken(breakpoint);
    const isBelowMinMobile = minMobile !== null && width < minMobile;

    gridOverlayRef.current.style.setProperty("--grid-column-count", String(resolvedColumns));
    gridOverlayRef.current.style.setProperty("--grid-baseline", `${resolvedBaseline}px`);
    gridOverlayRef.current.style.setProperty("--grid-baseline-calc", String(resolvedBaseline));
    gridOverlayRef.current.style.setProperty("--grid-overlay-gutter-current", currentGutterToken);
    gridOverlayRef.current.style.setProperty(
      "--grid-overlay-page-limit-current",
      isBelowMinMobile
        ? "calc(var(--page-width) + var(--grid-overlay-gutter-current))"
        : "calc(var(--page-width) + (var(--grid-overlay-gutter-current) * 2))",
    );
  }, [breakpoint, minMobile, resolvedBaseline, resolvedColumns, width]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (!event.ctrlKey || event.repeat) {
        return;
      }

      const key = event.key.toLowerCase();
      if (key === "l") {
        setVertical((current) => !current);
      }

      if (key === "m") {
        setHorizontal((current) => !current);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [setHorizontal, setVertical]);

  const className = `gridOverlay ${isHorizontalVisible ? "gridOverlayIsHorizontalIsVisible" : ""} ${
    isVerticalVisible ? "gridOverlayIsVerticalVisible" : ""
  }`;
  const containerStyle: GridOverlayStyle = {
    width: "min(100%, var(--grid-overlay-page-limit-current, var(--page-limit)))",
    paddingInline:
      "var(--grid-overlay-gutter-current, var(--container-gutter-mobile))",
  };

  return (
    <div ref={gridOverlayRef} className={className} aria-hidden={!button}>
      <div className="gridOverlay__container" style={containerStyle}>
        <div className="gridOverlay__row" data-columns={resolvedColumns}>
          {Array.from({ length: resolvedColumns }).map((_, index) => (
            <div key={`grid_column_${index}`} className="gridOverlay__column">
              <div className="gridOverlay__visualize" />
            </div>
          ))}
        </div>
      </div>

      {button ? (
        <>
          <button
            type="button"
            aria-label="Toggle vertical column grid"
            className={`gridOverlay__button ${isVerticalVisible ? "vertical" : ""}`}
            onClick={onToggleVertical}
          >
            <svg
              className="gridOverlay__button__svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
            >
              <g stroke="none" strokeWidth="1" fill="currentColor" fillRule="evenodd">
                <rect x="0" y="0" width="2" height="14" />
                <rect x="4" y="0" width="2" height="14" />
                <rect x="8" y="0" width="2" height="14" />
                <rect x="12" y="0" width="2" height="14" />
              </g>
            </svg>
          </button>

          <button
            type="button"
            aria-label="Toggle horizontal baseline grid"
            className={`gridOverlay__button ${isHorizontalVisible ? "horizontal" : ""}`}
            onClick={onToggleHorizontal}
          >
            <svg
              className="gridOverlay__button__svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
            >
              <g
                stroke="none"
                strokeWidth="1"
                fill="currentColor"
                fillRule="evenodd"
                transform="translate(7 7) rotate(-270) translate(-7 -7)"
              >
                <rect x="0" y="0" width="2" height="14" />
                <rect x="4" y="0" width="2" height="14" />
                <rect x="8" y="0" width="2" height="14" />
                <rect x="12" y="0" width="2" height="14" />
              </g>
            </svg>
          </button>
        </>
      ) : null}
    </div>
  );
}
