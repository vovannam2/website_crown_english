"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Preset = "fadeUp" | "fade" | "image" | "line" | "lineX" | "draw" | "text";
type RevealProps = { children: ReactNode; className?: string; preset?: Preset; delay?: number; as?: "div" | "span"; group?: boolean };

// Server HTML stays visible. Animation only starts when the content enters view.
// Missing JavaScript or IntersectionObserver never hides content.
export default function Reveal({ children, className = "", preset = "fadeUp", delay = 0, as: Tag = "div", group = false }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const hasRevealed = useRef(false);
  useEffect(() => {
    const element = ref.current;
    if (!element || hasRevealed.current || !("IntersectionObserver" in window) || !element.animate) return;
    const revealGroup = element.closest('[data-reveal-group="true"]');
    if (revealGroup && revealGroup !== element) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animation: Animation | undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || hasRevealed.current) return;
      // Persist across effect reruns: scrolling or changing props must not replay it.
      hasRevealed.current = true;
      observer.unobserve(element);
      observer.disconnect();
      if (motion.matches) return;
      const mobile = window.matchMedia("(max-width: 767px)").matches;
      const frames: Record<Preset, Keyframe[]> = {
        fadeUp: [{ opacity: 0, transform: `translateY(${mobile ? 14 : 28}px)` }, { opacity: 1, transform: "translateY(0)" }],
        fade: [{ opacity: 0 }, { opacity: 1 }],
        image: [{ clipPath: "inset(100% 0 0 0)", transform: "scale(1.03)" }, { clipPath: "inset(0 0 0 0)", transform: "scale(1)" }],
        line: [{ transform: "scaleY(0)" }, { transform: "scaleY(1)" }],
        lineX: [{ transform: "scaleX(0)" }, { transform: "scaleX(1)" }],
        draw: [{ strokeDashoffset: 1 }, { strokeDashoffset: 0 }],
        text: [{ opacity: 0, transform: `translateY(${mobile ? "16px" : "100%"})` }, { opacity: 1, transform: "translateY(0)" }],
      };
      const target = preset === "draw" ? element.querySelector("path") ?? element : element;
      animation = target.animate(frames[preset], { duration: preset === "image" || preset === "draw" ? 750 : 650, delay, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "backwards" });
    }, { threshold: 0.08 });
    const cancelMotion = () => { if (motion.matches) animation?.cancel(); };
    motion.addEventListener("change", cancelMotion);
    observer.observe(element);
    return () => { observer.disconnect(); animation?.cancel(); motion.removeEventListener("change", cancelMotion); };
  }, [preset, delay]);
  return <Tag ref={ref} className={className} data-reveal-group={group ? "true" : undefined}>{children}</Tag>;
}
