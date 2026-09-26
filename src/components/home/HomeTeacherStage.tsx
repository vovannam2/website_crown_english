"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";
import type { Teacher } from "@/types/teachers";
import Reveal from "@/components/ui/Reveal";
import HomeVisual from "./HomeVisual";
import styles from "./home.module.css";

export default function HomeTeacherStage({
  teachers,
  label,
}: {
  teachers: readonly Teacher[];
  label: string;
}) {
  const [activeId, setActiveId] = useState<string>();
  const [dragging, setDragging] = useState(false);
  const [hasDragged, setHasDragged] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const momentumFrame = useRef<number | undefined>(undefined);
  const drag = useRef({
    active: false,
    startX: 0,
    lastX: 0,
    lastTime: 0,
    velocity: 0,
    moved: false,
  });

  useEffect(
    () => () => {
      if (momentumFrame.current) cancelAnimationFrame(momentumFrame.current);
    },
    [],
  );

  if (!teachers.length)
    return (
      <div className={styles.teacherEmpty}>
        <span aria-hidden="true">CROWN</span>
        <p>{label}</p>
        <div aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
      </div>
    );

  const startDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    const track = trackRef.current;
    if (!track) return;
    if (momentumFrame.current) cancelAnimationFrame(momentumFrame.current);
    drag.current = {
      active: true,
      startX: event.clientX,
      lastX: event.clientX,
      lastTime: performance.now(),
      velocity: 0,
      moved: false,
    };
    track.setPointerCapture(event.pointerId);
    setDragging(true);
  };

  const moveDrag = (event: PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track || !drag.current.active) return;
    const now = performance.now();
    const delta = event.clientX - drag.current.lastX;
    const elapsed = Math.max(now - drag.current.lastTime, 1);
    const adjustedDelta = delta * 0.82;
    track.scrollLeft -= adjustedDelta;
    drag.current.velocity = adjustedDelta / elapsed;
    drag.current.lastX = event.clientX;
    drag.current.lastTime = now;
    if (Math.abs(event.clientX - drag.current.startX) > 6) {
      drag.current.moved = true;
      setHasDragged(true);
    }
  };

  const stopDrag = (event: PointerEvent<HTMLDivElement>) => {
    drag.current.active = false;
    if (event.currentTarget.hasPointerCapture(event.pointerId))
      event.currentTarget.releasePointerCapture(event.pointerId);
    const track = trackRef.current;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let velocity = Math.max(-16, Math.min(16, -drag.current.velocity * 14));
    const glide = () => {
      if (!track || reducedMotion || Math.abs(velocity) < 0.12) {
        setDragging(false);
        return;
      }
      track.scrollLeft += velocity;
      velocity *= 0.955;
      momentumFrame.current = requestAnimationFrame(glide);
    };
    momentumFrame.current = requestAnimationFrame(glide);
  };

  return (
    <div className={styles.teacherCarousel}>
      {!hasDragged && (
        <span className={styles.teacherDragHint} aria-hidden="true">
          Nắm kéo để khám phá
        </span>
      )}
      <div
        ref={trackRef}
        className={styles.teacherTrack}
        data-dragging={dragging}
        onPointerDown={startDrag}
        onPointerMove={moveDrag}
        onPointerUp={stopDrag}
        onPointerCancel={stopDrag}
      >
        {teachers.map((teacher, index) => (
          <Reveal key={teacher.id} delay={index * 80}>
            <button
              type="button"
              className={styles.teacherButton}
              aria-expanded={activeId === teacher.id}
              onClick={() => {
                if (drag.current.moved) return;
                setActiveId((current) =>
                  current === teacher.id ? undefined : teacher.id,
                );
              }}
            >
              <span className={styles.teacherImage}>
                <HomeVisual
                  src={teacher.image}
                  alt={teacher.name}
                  label={teacher.name}
                />
                <span className={styles.teacherImageShade} aria-hidden="true" />
                <span className={styles.teacherBadge}>
                  {teacher.achievements.find((item) =>
                    item.includes("IELTS"),
                  ) || teacher.achievements[0]}
                </span>
                <span className={styles.teacherOverlay}>
                  <strong>{teacher.name}</strong>
                  <span className={styles.teacherOverlayList}>
                    {teacher.achievements.slice(0, 3).map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                    {teacher.experience[0] && (
                      <span>{teacher.experience[0]}</span>
                    )}
                  </span>
                </span>
              </span>
              <strong className={styles.teacherName}>{teacher.name}</strong>
              <span className={styles.teacherRole}>
                {teacher.role || teacher.strengths[0] || teacher.experience[0]}
              </span>
            </button>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
