"use client";

import { useEffect, useState } from "react";

function toLegacyCode(event: KeyboardEvent) {
  if (event.key === "Control") {
    return 17;
  }

  const normalized = event.key.toUpperCase();
  if (normalized === "K") {
    return 75;
  }
  if (normalized === "L") {
    return 76;
  }
  if (normalized === "M") {
    return 77;
  }

  return null;
}

export function useKeyDown() {
  const [keys, setKeys] = useState<number[]>([]);

  useEffect(() => {
    const pressed = new Set<number>();

    const onKeyDown = (event: KeyboardEvent) => {
      const keyCode = toLegacyCode(event);
      if (keyCode === null || pressed.has(keyCode)) {
        return;
      }

      pressed.add(keyCode);
      setKeys(Array.from(pressed));
    };

    const onKeyUp = (event: KeyboardEvent) => {
      const keyCode = toLegacyCode(event);
      if (keyCode === null) {
        return;
      }

      pressed.delete(keyCode);
      setKeys(Array.from(pressed));
    };

    const onBlur = () => {
      pressed.clear();
      setKeys([]);
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    window.addEventListener("blur", onBlur);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
      window.removeEventListener("blur", onBlur);
    };
  }, []);

  return keys;
}
