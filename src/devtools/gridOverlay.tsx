"use client";

import { type CSSProperties, useEffect, useRef, useState } from "react";

import { useTokenViewport } from "@/components/primitives/_shared/useTokenViewport";
import { useKeyDown } from "./hooks/useKeyDown";
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
  const [resolvedColumns, setResolvedColumns] = useState(columns ?? 12);
  const [resolvedBaseline, setResolvedBaseline] = useState(baseline ?? 8);
  const [isHorizontalVisible, setHorizontal] = useLocalStorage(
    LOCAL_STORAGE_KEY_HORIZONTAL,
    false,
  );
  const [isVerticalVisible, setVertical] = useLocalStorage(
    LOCAL_STORAGE_KEY_VERTICAL,
    false,
  );
  const keys = useKeyDown();

  const onToggleHorizontal = () => {
    setHorizontal((current) => !current);
  };

  const onToggleVertical = () => {
    setVertical((current) => !current);
  };

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const rootStyles = getComputedStyle(document.documentElement);
    const tokenColumns = Number.parseInt(rootStyles.getPropertyValue("--grid-column-count"), 10);
    const tokenBaseline = Number.parseFloat(rootStyles.getPropertyValue("--grid-baseline"));

    const nextColumns = columns ?? (Number.isFinite(tokenColumns) ? tokenColumns : 12);
    const nextBaseline = baseline ?? (Number.isFinite(tokenBaseline) ? tokenBaseline : 8);

    setResolvedColumns(nextColumns);
    setResolvedBaseline(nextBaseline);
  }, [columns, baseline, width]);

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
    if (keys.includes(17) && keys.includes(76)) {
      setVertical((current) => !current);
    }

    if (keys.includes(17) && keys.includes(77)) {
      setHorizontal((current) => !current);
    }
  }, [keys, setHorizontal, setVertical]);

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
