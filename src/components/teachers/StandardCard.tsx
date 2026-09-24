"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function StandardCard({ children, index }: { children: ReactNode; index: number }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || !window.IntersectionObserver) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animation: Animation | undefined;
    const stopMotion = () => { if (motion.matches) animation?.cancel(); };
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      if (!motion.matches) {
        animation = element.animate(
          [{ opacity: 0, translate: "0 24px" }, { opacity: 1, translate: "0 0" }],
          { duration: 650, delay: index * 100, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "backwards" },
        );
      }
      observer.disconnect();
    }, { threshold: 0.12 });
    observer.observe(element);
    motion.addEventListener("change", stopMotion);
    return () => {
      observer.disconnect();
      animation?.cancel();
      motion.removeEventListener("change", stopMotion);
    };
  }, [index]);

  return <article ref={ref} className="rounded-[var(--radius-md)] border border-[var(--color-line)] bg-white p-7 transition-[transform,box-shadow] duration-[220ms] motion-safe:hover:-translate-y-1 hover:shadow-[0_12px_28px_rgb(35_35_35/0.06)] motion-reduce:transition-none">{children}</article>;
}
