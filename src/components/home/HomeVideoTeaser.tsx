"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import type { StudentVideo } from "@/types/student-results";
import Reveal from "@/components/ui/Reveal";
import styles from "./home.module.css";

export default function HomeVideoTeaser({ videos, moreLink }: {
  videos: readonly StudentVideo[];
  moreLink: { readonly href: string; readonly label: string };
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  function pauseOtherVideos(current: HTMLVideoElement) {
    document.querySelectorAll("video").forEach((video) => {
      if (video !== current) video.pause();
    });
  }

  const video = videos[0];
  if (!video) return null;

  const playVideo = async () => {
    setStarted(true);
    try {
      await videoRef.current?.play();
    } catch {
      setStarted(false);
    }
  };

  return <Reveal className={styles.videoFeature} delay={100}>
    <article>
      <div className={styles.videoFeatureMedia}>
        <video
          ref={videoRef}
          src={video.src}
          controls={started}
          playsInline
          preload="metadata"
          aria-label={`${video.name} — ${video.result}`}
          onPlay={(event) => { setStarted(true); pauseOtherVideos(event.currentTarget); }}
          onEnded={() => setStarted(false)}
        />
        {!started && <button type="button" className={styles.videoPlay} onClick={playVideo} aria-label={`Phát video chia sẻ của ${video.name}`}>
          <span aria-hidden="true">▶</span>
          <strong>Nghe câu chuyện</strong>
        </button>}
        <span className={styles.videoStoryLabel} aria-hidden="true">STUDENT STORY</span>
      </div>
      <div className={styles.videoFeatureCopy}>
        <p>CHIA SẺ NỔI BẬT</p>
        <h3>Điều gì phía sau cột mốc <strong>{video.result}</strong>?</h3>
        <p>Nghe {video.name} kể về hành trình học tập và những trải nghiệm của mình tại Crown English.</p>
        <div className={styles.videoStudent}><span>{video.name}</span><strong>{video.result}</strong></div>
        <Link className={styles.videoMore} href={moreLink.href}>{moreLink.label}<span aria-hidden="true">→</span></Link>
      </div>
    </article>
  </Reveal>;
}
