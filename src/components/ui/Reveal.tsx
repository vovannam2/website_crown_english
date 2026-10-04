"use client";

import { useEffect, useRef } from "react";
import type { RevealPreset, RevealProps } from "@/types/ui";

// Server HTML stays visible. Animation only starts when the content enters view.
// Missing JavaScript or IntersectionObserver never hides content.
export default function Reveal({ children, className = "", preset = "fadeUp", delay = 0, duration, easing = "cubic-bezier(0.22, 1, 0.36, 1)", as: Tag = "div", group = false, ...attributes }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const hasRevealed = useRef(false);
  useEffect(() => {
    const element = ref.current;
    if (!element || hasRevealed.current || !("IntersectionObserver" in window) || !element.animate) return;
    const revealGroup = element.closest('[data-reveal-group="true"]');
    if (revealGroup && revealGroup !== element) return;
    const pageEasing = element.closest<HTMLElement>("[data-reveal-easing]")?.dataset.revealEasing;
    const resolvedEasing = pageEasing || easing;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animation: Animation | undefined;
    // Hide only content below the fold. Server HTML and visible content stay readable.
    const belowFold = element.getBoundingClientRect().top >= window.innerHeight;
    if (belowFold && !motion.matches) element.style.opacity = "0";
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || hasRevealed.current) return;
      // Persist across effect reruns: scrolling or changing props must not replay it.
      hasRevealed.current = true;
      observer.unobserve(element);
      observer.disconnect();
      element.style.opacity = "";
      if (motion.matches) return;
      const mobile = window.matchMedia("(max-width: 767px)").matches;
      const frames: Record<RevealPreset, Keyframe[]> = {
        fadeUp: [{ opacity: 0, transform: `translateY(${mobile ? 10 : 16}px)` }, { opacity: 1, transform: "translateY(0)" }],
        fade: [{ opacity: 0 }, { opacity: 1 }],
        image: [{ opacity: 0, transform: "scale(1.015)" }, { opacity: 1, transform: "scale(1)" }],
        line: [{ transform: "scaleY(0)" }, { transform: "scaleY(1)" }],
        lineX: [{ transform: "scaleX(0)" }, { transform: "scaleX(1)" }],
        draw: [{ strokeDashoffset: 1 }, { strokeDashoffset: 0 }],
        text: [{ opacity: 0, transform: `translateY(${mobile ? "16px" : "100%"})` }, { opacity: 1, transform: "translateY(0)" }],
      };
      const target = preset === "draw" ? element.querySelector("path") ?? element : element;
      animation = target.animate(frames[preset], { duration: duration ?? 520, delay, easing: resolvedEasing, fill: "both" });
      animation.onfinish = () => animation?.cancel();
    }, { threshold: 0.01, rootMargin: "0px 0px 80px 0px" });
    const cancelMotion = () => { if (motion.matches) { element.style.opacity = ""; animation?.cancel(); } };
    motion.addEventListener("change", cancelMotion);
    observer.observe(element);
    return () => { observer.disconnect(); element.style.opacity = ""; animation?.cancel(); motion.removeEventListener("change", cancelMotion); };
  }, [preset, delay, duration, easing]);
  return <Tag ref={ref} className={className} data-reveal-group={group ? "true" : undefined} {...attributes}>{children}</Tag>;
}
