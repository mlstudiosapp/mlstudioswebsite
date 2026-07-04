"use client";

import { useEffect, useState, useRef, type RefObject } from "react";

/**
 * Tracks scroll progress (0–1) of an element through the viewport.
 *
 * Render-agnostic on purpose: returns a plain number. Today it drives
 * CSS transforms via Framer Motion. Later it can just as easily drive
 * an R3F camera's z-position or an orbit's rotation — the consumer
 * decides what to do with the float, this hook only measures it.
 */
export function useScrollProgress<T extends HTMLElement>(): [
  RefObject<T | null>,
  number,
] {
  const ref = useRef<T | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let frame = 0;

    const measure = () => {
      const rect = node.getBoundingClientRect();
      const viewportH = window.innerHeight || 1;
      // 0 when section top hits bottom of viewport, 1 when section bottom hits top.
      const total = rect.height + viewportH;
      const traveled = viewportH - rect.top;
      const next = Math.min(1, Math.max(0, traveled / total));
      setProgress(next);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return [ref, progress];
}

/** Returns true once, client-side only, after mount — guards SSR/CSR mismatch for motion-heavy nodes. */
export function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}

/** Respects prefers-reduced-motion. */
export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}
