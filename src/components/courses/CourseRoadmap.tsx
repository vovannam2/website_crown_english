"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import styles from "./CourseRoadmap.module.css";

type RoadmapItem = {
  name: string;
  range?: string;
  note?: string;
  items?: readonly string[];
  content?: readonly string[];
};

type CourseRoadmapProps = {
  items: readonly RoadmapItem[];
  courseTitle: string;
};

function asList(value?: readonly string[]) {
  return value ?? [];
}

function clamp(value: number) {
  return Math.min(1, Math.max(0, value));
}

function getStageContent(item: RoadmapItem) {
  const content = asList(item.items ?? item.content);
  if (content.length > 0) return content.slice(0, 4);
  if (item.range) return [`Lộ trình được tư vấn theo đầu vào và mục tiêu ${item.range}.`];
  return ["Lộ trình được tư vấn theo đầu vào của học viên."];
}

function getStageGoal(item: RoadmapItem, index: number) {
  if (item.note) return item.note;
  if (item.range) return `Hoàn thành chặng ${index + 1} ở mốc ${item.range}.`;
  return `Hoàn thành chặng ${index + 1} trong lộ trình.`;
}

export default function CourseRoadmap({ items, courseTitle }: CourseRoadmapProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [enhanced, setEnhanced] = useState(false);
  const [progress, setProgress] = useState(1);
  const [visibleStages, setVisibleStages] = useState<Set<number>>(() => new Set(items.map((_, index) => index)));

  useEffect(() => {
    const section = sectionRef.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!section || reduceMotion.matches) return;

    setEnhanced(true);
    setVisibleStages(new Set());

    const updateProgress = () => {
      const rect = section.getBoundingClientRect();
      const viewport = window.innerHeight || document.documentElement.clientHeight;
      const start = viewport * 0.72;
      const end = -rect.height * 0.12;
      setProgress(clamp((start - rect.top) / (start - end)));
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    const observer = new IntersectionObserver((entries) => {
      setVisibleStages((current) => {
        const next = new Set(current);
        entries.forEach((entry) => {
          const index = Number((entry.target as HTMLElement).dataset.stageIndex);
          if (entry.isIntersecting && Number.isFinite(index)) next.add(index);
        });
        return next;
      });
    }, { rootMargin: "0px 0px -12% 0px", threshold: 0.28 });

    stageRefs.current.forEach((stage) => {
      if (stage) observer.observe(stage);
    });

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      observer.disconnect();
    };
  }, [items]);

  if (items.length === 0) return null;

  return (
    <section ref={sectionRef} id="lo-trinh" className={styles.section} aria-labelledby="roadmap-title">
      <div className={styles.inner}>
        <div className={styles.heading}>
          <p className="home-eyebrow">LỘ TRÌNH HỌC</p>
          <h2 id="roadmap-title" className="type-h2 mt-3 max-w-3xl">
            Hành trình học {courseTitle} theo từng chặng rõ ràng
          </h2>
          <p className="type-body-lg mt-4 max-w-3xl text-[var(--color-ink-muted)]">
            Mỗi giai đoạn được sắp xếp theo trình độ đầu vào, trọng tâm học và kết quả cần đạt để học viên nhìn thấy tiến trình trước khi bắt đầu.
          </p>
        </div>

        <div
          className={`${styles.journey} ${enhanced ? styles.enhanced : ""}`}
          style={{ "--roadmap-progress": enhanced ? progress : 1 } as CSSProperties}
          aria-label={`Lộ trình học ${courseTitle}`}
        >
          <div className={styles.path} aria-hidden="true">
            <div className={styles.pathFill} />
          </div>

          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            const visible = !enhanced || visibleStages.has(index);
            const content = getStageContent(item);
            const stageNumber = String(index + 1).padStart(2, "0");

            return (
              <div
                key={`${item.name}-${item.range ?? index}`}
                ref={(element) => { stageRefs.current[index] = element; }}
                data-stage-index={index}
                className={`${styles.stage} ${index % 2 === 0 ? styles.left : styles.right} ${isLast ? styles.target : ""} ${visible ? styles.visible : ""}`}
                style={{ "--delay": `${index * 80}ms` } as CSSProperties}
              >
                <div className={styles.nodeWrap} aria-hidden="true">
                  <span className={styles.node}>{isLast ? "★" : stageNumber}</span>
                </div>

                <article className={styles.card}>
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="type-label text-[var(--color-brand-red)]">{isLast ? "TARGET" : `CHẶNG ${stageNumber}`}</p>
                      <h3 className="type-h3 mt-2">{item.name}</h3>
                    </div>
                    {item.range && <p className={`${styles.range} type-label`}>{item.range}</p>}
                  </div>

                  <div className={styles.contentGrid}>
                    <div className={styles.contentBlock}>
                      <p className="type-label text-[var(--color-ink-muted)]">Mục tiêu</p>
                      <p className="type-small text-[var(--color-ink)]">{getStageGoal(item, index)}</p>
                    </div>

                    <div className={styles.contentBlock}>
                      <p className="type-label text-[var(--color-ink-muted)]">Nội dung học chính</p>
                      <ul className={`${styles.list} type-small text-[var(--color-ink-muted)]`}>
                        {content.map((contentItem) => <li key={contentItem}>{contentItem}</li>)}
                      </ul>
                    </div>

                    <div className={styles.contentBlock}>
                      <p className="type-label text-[var(--color-ink-muted)]">Kết quả sau giai đoạn</p>
                      <p className="type-small text-[var(--color-ink)]">
                        {item.note || (item.range ? `Nắm vững mốc ${item.range} để chuyển sang chặng tiếp theo.` : "Sẵn sàng điều chỉnh lộ trình theo mục tiêu tiếp theo.")}
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
