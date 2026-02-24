"use client";

import { useEffect } from "react";

import { GridOverlay } from "./gridOverlay";
import { useKeyDown } from "./hooks/useKeyDown";
import { useLocalStorage } from "./hooks/useLocalStorage";

const LOCAL_STORAGE_KEY_VISIBLE = "_northDevtoolsVisible";

export function Devtools() {
  const [isVisible, setVisible] = useLocalStorage(LOCAL_STORAGE_KEY_VISIBLE, false);
  const keys = useKeyDown();

  useEffect(() => {
    if (keys.includes(17) && keys.includes(75)) {
      setVisible((current) => !current);
    }
  }, [keys, setVisible]);

  return <GridOverlay button={isVisible} />;
}
