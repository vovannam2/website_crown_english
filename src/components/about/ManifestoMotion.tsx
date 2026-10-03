"use client";

import { useEffect, useRef } from "react";
import type { ManifestoMotionProps } from "@/types/about";

// A single viewport trigger coordinates the notes and connecting strokes.
// Server content stays visible without JavaScript or with reduced motion.
export default function ManifestoMotion({ children }: ManifestoMotionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const revealed = useRef(false);
  useEffect(() => {
    const root = ref.current;
    if (!root || revealed.current || !("IntersectionObserver" in window) || !root.animate) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations: Animation[] = [];
    const animate = (element: Element | null, frames: Keyframe[], delay: number, duration = 460) => {
      if (element) animations.push(element.animate(frames, { duration, delay, easing: "cubic-bezier(.22,1,.36,1)", fill: "backwards" }));
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || revealed.current) return;
      revealed.current = true;
      observer.disconnect();
      if (motion.matches) return;
      const rise = [{ opacity: 0, transform: "translateY(12px)" }, { opacity: 1, transform: "translateY(0)" }];
      animate(root.querySelector("[data-board]"), [{ opacity: 0 }, { opacity: 1 }], 0, 500);
      animate(root.querySelector("[data-board-label]"), [{ opacity: 0, transform: "translateY(-6px)" }, { opacity: 1, transform: "translateY(0)" }], 100);
      root.querySelectorAll("[data-board-note]").forEach((note, index) => animate(note, rise, 200 + index * 360));
      root.querySelectorAll("[data-board-path]").forEach((path, index) => animate(path, [{ strokeDashoffset: 1 }, { strokeDashoffset: 0 }], 460 + index * 360, 300));
      animate(root.querySelector("[data-board-statement]"), rise, 1250);
      animate(root.querySelector("[data-board-flow]"), rise, 1400);
    }, { threshold: 0.08 });
    const cancel = () => { if (motion.matches) animations.forEach((animation) => animation.cancel()); };
    motion.addEventListener("change", cancel);
    observer.observe(root);
    return () => { observer.disconnect(); animations.forEach((animation) => animation.cancel()); motion.removeEventListener("change", cancel); };
  }, []);
  return <div ref={ref}>{children}</div>;
}
