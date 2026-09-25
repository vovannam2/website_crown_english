"use client";

import { useState } from "react";
import localFont from "next/font/local";
import type { StudentResult } from "@/types/student-results";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import StudentImage from "./StudentImage";
import StudentDetailModal from "./StudentDetailModal";
import styles from "./students.module.css";

const bulbColors = [
  "text-rose-400",
  "text-amber-300",
  "text-emerald-400",
  "text-sky-400",
  "text-violet-400",
  "text-pink-400",
];

const handwriting = localFont({
  src: "../../../public/fonts/PatrickHand-Regular.ttf",
  weight: "400",
  style: "normal",
  display: "swap",
});

export default function StudentResults({
  results,
}: {
  results: readonly StudentResult[];
}) {
  const [paused, setPaused] = useState(false);
  const [selected, setSelected] = useState<StudentResult | null>(null);
  const sortedResults = [...results].sort(
    (a, b) => Number(a.overall) - Number(b.overall),
  );
  const repeats = Math.max(1, Math.ceil(5 / Math.max(1, results.length)));
  const loopItems = Array.from({ length: repeats }, () => sortedResults).flat();
  if (!results.length) return null;
  return (
    <section id="student-results" className="scroll-mt-28 py-12 sm:py-16">
      <Reveal className="mb-8 sm:mb-10">
        <div className="flex flex-col items-start gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
          <div className="min-w-0 [&>div]:mb-0 [&>div]:max-w-none">
            <SectionTitle
              eyebrow="DẤU ẤN HỌC TẬP"
              title="Những thành tích nổi bật của học viên"
            />
          </div>
          <div className="shrink-0">
            <button
              type="button"
              aria-pressed={paused}
              onClick={() => setPaused((value) => !value)}
              className="min-h-11 rounded-full border border-[var(--color-line)] px-4 text-sm text-[var(--color-ink-muted)] focus-visible:outline-2 focus-visible:outline-[var(--color-brand-red)]"
            >
              {paused ? "Tiếp tục hiệu ứng" : "Tạm dừng hiệu ứng"}
            </button>
          </div>
        </div>
        <p className="mt-4 text-base leading-7 text-[var(--color-ink-muted)]">
          Đằng sau mỗi cột mốc IELTS là một hành trình nỗ lực, thay đổi và trưởng thành. Đây là những kết quả nổi bật được chính học viên Crown English tạo nên trong quá trình học tập và chinh phục mục tiêu của mình.
        </p>
      </Reveal>
      <Reveal delay={100}><div
        data-paused={paused || !!selected}
        className={`${styles.gallery} overflow-hidden py-3`}
      >
        <div
          className={`${styles.track} flex w-max`}
          style={{ animationDuration: `${loopItems.length * 6}s` }}
        >
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy === 1 ? true : undefined}
              className="flex shrink-0"
            >
              {loopItems.map((result, index) => (
                <li
                  key={`${result.id}-${index}`}
                  aria-hidden={index >= results.length ? true : undefined}
                  data-duplicate={copy === 1 || index >= results.length}
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
                          className={`${styles.bulb} ${bulbColors[(index * 2 + light) % bulbColors.length]}`}
                        />
                      </span>
                    ))}
                  </span>
                  <button
                    type="button"
                    tabIndex={copy === 1 || index >= results.length ? -1 : 0}
                    onClick={() => setSelected(result)}
                    aria-label={`Xem chi tiết ${result.name} ${result.overall}`}
                    style={{ animationDelay: `${index * -0.6}s` }}
                    className={`${styles.hangingPhoto} group relative mx-auto block w-full max-w-[250px] cursor-pointer rounded-lg border border-[var(--color-line)] bg-white p-2 pb-4 text-left shadow-[0_8px_20px_rgb(35_35_35/0.1)] transition-shadow duration-200 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-brand-red)]`}
                  >
                    <span
                      aria-hidden="true"
                      className={styles.woodClip}
                    >
                      <span className={styles.clipSpring} />
                    </span>
                    <span className="relative block aspect-square overflow-hidden rounded-sm">
                      <StudentImage
                        src={result.thumbnail}
                        alt={`${result.name} — ${result.exam} ${result.overall}`}
                        sizes="250px"
                        fit="contain"
                        fallback="avatar"
                      />
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent"
                      />
                      <span
                        className={`${handwriting.className} absolute right-4 bottom-4 left-4 text-[28px] leading-tight text-white drop-shadow-md`}
                      >
                        {result.name}
                      </span>
                      <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 bg-black/45 py-3 text-center text-xs font-bold text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none">
                        XEM CHI TIẾT
                      </span>
                    </span>
                    <span className="absolute top-2 left-4 flex min-h-[82px] w-14 flex-col items-center bg-[var(--color-brand-red)] px-1 pt-2 pb-5 text-white [clip-path:polygon(0_0,100%_0,100%_100%,50%_85%,0_100%)]">
                      <strong className="text-3xl leading-none">
                        {result.overall}
                      </strong>
                      <span className="mt-2 text-xs font-bold">
                        {result.exam}
                      </span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div></Reveal>
      {selected && (
        <StudentDetailModal
          student={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}
