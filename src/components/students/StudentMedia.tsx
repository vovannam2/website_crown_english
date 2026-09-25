"use client";

import { useId, useRef, useState } from "react";
import { Play, Film, ChevronLeft, ChevronRight } from "lucide-react";
import type { ClassMoment, StudentVideo } from "@/types/student-results";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import ClassroomGallery from "./ClassroomGallery";
import styles from "./StudentMedia.module.css";

export default function StudentMedia({ videos, moments }: {
  videos: readonly StudentVideo[];
  moments: readonly ClassMoment[];
}) {
  return <>
    <ClassroomGallery moments={moments} />
    {!!videos.length && <StudentCinema videos={videos} />}
  </>;
}

function StudentCinema({ videos }: { videos: readonly StudentVideo[] }) {
  const [selectedId, setSelectedId] = useState(videos[0].id);
  const [started, setStarted] = useState(false);
  const [error, setError] = useState(false);
  const player = useRef<HTMLVideoElement>(null);
  const choices = useRef<HTMLDivElement>(null);
  const screenId = useId();
  const choicesId = useId();
  const selected = videos.find((video) => video.id === selectedId) ?? videos[0];

  function scrollChoices(direction: number) {
    const list = choices.current;
    if (!list) return;
    const card = list.firstElementChild;
    const step = card ? card.getBoundingClientRect().width + parseFloat(getComputedStyle(list).columnGap) : list.clientWidth;
    list.scrollBy({ left: direction * step, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }

  async function playVideo(video: StudentVideo) {
    const element = player.current;
    if (!element) return;
    element.pause();
    setError(false);
    setSelectedId(video.id);
    setStarted(true);
    // Set the source inside the click gesture so mobile browsers allow playback.
    if (element.getAttribute("src") !== video.src) {
      element.src = video.src;
      element.load();
    }
    try {
      await element.play();
    } catch {
      // A newer selection may interrupt play; leave its state untouched.
      if (element.getAttribute("src") === video.src && element.paused) setStarted(false);
    }
  }

  return (
    <section aria-label="Góc chia sẻ" className="py-12 sm:py-16">
      <div className={styles.cinema}>
        <Reveal className={styles.header}>
          <SectionTitle
            eyebrow="GÓC CHIA SẺ"
            title="Lắng nghe học viên Crown"
            description="Mỗi câu chuyện là một hành trình rất riêng — từ những bỡ ngỡ ban đầu, những lần cố gắng vượt qua giới hạn của bản thân đến niềm vui khi nhìn thấy sự tiến bộ rõ ràng trên chặng đường học tập tại Crown English."
          />
        </Reveal>
        <Reveal delay={100} className={styles.projection}>
          <div className={styles.screenRail} aria-hidden="true" />
          <div className={styles.screen} id={screenId}>
            <div className={styles.screenDecor} aria-hidden="true">
              <span>“</span><span>CROWN<br />STORIES</span>
            </div>
            <video
              ref={player}
              src={selected.src}
              controls
              playsInline
              preload="metadata"
              className={styles.video}
              aria-label={`Chia sẻ của ${selected.name} — ${selected.result}`}
              onPlay={(event) => {
                setStarted(true);
                document.querySelectorAll("video").forEach((other) => {
                  if (other !== event.currentTarget) other.pause();
                });
              }}
              onError={() => { setError(true); setStarted(false); }}
            >
              Trình duyệt không hỗ trợ video. <a href={selected.src}>Mở video</a>
            </video>
            {!started && !error && (
              <button className={styles.preview} type="button"
                aria-label={`Phát chia sẻ của ${selected.name}`}
                onClick={() => void playVideo(selected)}>
                <span className={styles.playIcon}><Play size={30} fill="currentColor" aria-hidden="true" /></span>
              </button>
            )}
          </div>
          <div className={styles.screenRail} aria-hidden="true" />
          <div className={styles.screenCaption} aria-live="polite">
            <div><span className={styles.captionLabel}>CÂU CHUYỆN ĐƯỢC CHỌN</span><h3>{selected.name}</h3></div>
            <span className={styles.result}>{selected.result}</span>
          </div>
          {error && <p role="alert" className={styles.error}>Không tải được video. <a href={selected.src}>Mở video trực tiếp</a></p>}
        </Reveal>
        <Reveal delay={160} className={styles.pickerHeading}>
          <Film size={18} aria-hidden="true" /><p>Chọn câu chuyện bạn muốn lắng nghe</p><span aria-hidden="true" />
          <div className={styles.scrollButtons}>
            <button type="button" aria-label="Cuộn câu chuyện sang trái" aria-controls={choicesId} onClick={() => scrollChoices(-1)}><ChevronLeft size={20} aria-hidden="true" /></button>
            <button type="button" aria-label="Cuộn câu chuyện sang phải" aria-controls={choicesId} onClick={() => scrollChoices(1)}><ChevronRight size={20} aria-hidden="true" /></button>
          </div>
        </Reveal>
        <Reveal delay={220}><div className={styles.choices} ref={choices} id={choicesId}>
          {videos.map((video, index) => {
            const active = selected.id === video.id;
            return (
              <button key={video.id} type="button" className={styles.choice}
                aria-pressed={active} aria-controls={screenId}
                aria-label={`Phát chia sẻ của ${video.name} — ${video.result}`}
                onClick={() => void playVideo(video)}>
                <span className={styles.filmStrip} aria-hidden="true" />
                <span className={styles.choiceTop}>
                  <span className={styles.storyNumber}>STORY {String(index + 1).padStart(2, "0")}</span>
                  <span className={styles.choiceScore}>{video.result}</span>
                </span>
                <span className={styles.choiceBody}>
                  <span className={styles.smallPlay}><Play size={20} fill="currentColor" aria-hidden="true" /></span>
                  <span><strong>{video.name}</strong><span className={styles.subtitle}>Cảm nhận từ học viên</span></span>
                </span>
                <span className={styles.choiceFooter}>{active ? "Đang chọn" : "Xem trên màn chiếu"}<span aria-hidden="true">↗</span></span>
              </button>
            );
          })}
        </div></Reveal>
      </div>
    </section>
  );
}
