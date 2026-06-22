"use client";

import { useEffect, useRef } from "react";

export function useSplitting<T extends HTMLElement>(
  options: Record<string, unknown> = {}
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;

    let cleanup: (() => void) | undefined;

    import("splitting").then(({ default: Splitting }) => {
      const results = Splitting({ target: ref.current!, ...options });
      cleanup = () => {
        results.forEach((r) => {
          if (r.el instanceof HTMLElement) {
            r.el.removeAttribute("data-splitting");
          }
        });
      };
    });

    return () => cleanup?.();
  }, [options]);

  return ref;
}
