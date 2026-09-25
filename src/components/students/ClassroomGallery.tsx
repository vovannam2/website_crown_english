"use client";

import { useState } from "react";
import type { ClassMoment } from "@/types/student-results";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import StudentImage from "./StudentImage";

import styles from "./students.module.css";

const colors = [
  "text-rose-400",
  "text-amber-300",
  "text-emerald-400",
  "text-sky-400",
  "text-violet-400",
  "text-pink-400",
];

export default function ClassroomGallery({
  moments,
}: {
  moments: readonly ClassMoment[];
}) {
  const [paused, setPaused] = useState(false);

  const repeats = Math.max(1, Math.ceil(5 / Math.max(1, moments.length)));
  const items = Array.from({ length: repeats }, () => moments).flat();
  if (!moments.length) return null;

  return (
    <section className="py-12 sm:py-16">
      <Reveal className="mb-8 sm:mb-10">
        <div className="flex flex-col items-start gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
          <div className="min-w-0 [&>div]:mb-0 [&>div]:max-w-none">
            <SectionTitle
              eyebrow="CÙNG NHAU TIẾN BỘ"
              title="Khoảnh khắc tại lớp học"
            />
          </div>
          <button
            type="button"
            aria-pressed={paused}
            onClick={() => setPaused((value) => !value)}
            className="min-h-11 shrink-0 rounded-full border border-[var(--color-line)] px-4 text-sm text-[var(--color-ink-muted)] focus-visible:outline-2 focus-visible:outline-[var(--color-brand-red)]"
          >
            {paused ? "Tiếp tục hiệu ứng" : "Tạm dừng hiệu ứng"}
          </button>
        </div>
        <p className="mt-4 text-base leading-7 text-[var(--color-ink-muted)]">
          Mỗi buổi học là một mảnh ghép nhỏ trong hành trình trưởng thành của học viên — nơi có sự cố gắng, những lần cùng nhau vượt qua khó khăn và cả những khoảnh khắc rất đỗi bình thường nhưng đáng nhớ tại Crown English.
        </p>
      </Reveal>
      <Reveal delay={100}><div
        data-paused={paused}
        className={`${styles.gallery} overflow-hidden py-3`}
      >
        <div
          className={`${styles.track} flex w-max`}
          style={{ animationDuration: `${items.length * 6}s` }}
        >
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy === 1 ? true : undefined}
              className="flex shrink-0"
            >
              {items.map((moment, index) => {
                const duplicate = copy === 1 || index >= moments.length;
                return (
                  <li
                    key={`${moment.image}-${index}`}
                    aria-hidden={duplicate ? true : undefined}
                    data-duplicate={duplicate}
                    className={`${styles.photoSlot} relative w-[260px] shrink-0 px-5 pt-9 pb-4 sm:w-[290px]`}
                  >
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 top-4 flex justify-between px-2"
                    >
                      {[0, 1].map((light) => (
                        <span
                          key={light}
                          className="relative flex flex-col items-center"
                        >
                          <span className={styles.bulbSocket} />
                          <span
                            style={{
                              animationDelay: `${-(index * 0.45 + light * 1.2)}s`,
                            }}
                            className={`${styles.bulb} ${colors[(index * 2 + light) % colors.length]}`}
                          />
                        </span>
                      ))}
                    </span>
                    <div
                      style={{ animationDelay: `${index * -0.6}s` }}
                      className={`${styles.hangingPhoto} relative mx-auto block w-full max-w-[250px] rounded-lg border border-[var(--color-line)] bg-white p-2 pb-4 shadow-[0_8px_20px_rgb(35_35_35/0.1)]`}
                    >
                      <span
                        aria-hidden="true"
                        className={styles.woodClip}
                      >
                        <span className={styles.clipSpring} />
                      </span>
                      <span className="relative block aspect-square overflow-hidden rounded-sm">
                        <StudentImage
                          src={moment.image}
                          alt={moment.alt}
                          sizes="250px"
                        />
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          ))}
        </div>
      </div></Reveal>
    </section>
  );
}
