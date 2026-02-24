"use client";

import { useEffect, useRef } from "react";

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

export function GridOverlay({
  columns = 12,
  baseline = 8,
  button = false,
}: GridOverlayProps) {
  const gridOverlayRef = useRef<HTMLDivElement>(null);
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
    if (!gridOverlayRef.current) {
      return;
    }

    gridOverlayRef.current.style.setProperty("--grid-column-count", String(columns));
    gridOverlayRef.current.style.setProperty("--grid-baseline", `${baseline}px`);
    gridOverlayRef.current.style.setProperty("--grid-baseline-calc", String(baseline));
  }, [columns, baseline]);

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

  return (
    <div ref={gridOverlayRef} className={className} aria-hidden={!button}>
      <div className="gridOverlay__container">
        <div className="gridOverlay__row" data-columns={columns}>
          {Array.from({ length: columns }).map((_, index) => (
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
