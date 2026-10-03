"use client";

import { useState } from "react";
import Image from "next/image";
import type { AboutImageProps } from "@/types/about";
import Reveal from "@/components/ui/Reveal";
import styles from "./about.module.css";

// URLs are served by Next/Vercel; they need not exist in the server filesystem.
export default function AboutImage({
  image,
  className = "",
  sizes,
  preload = false,
  revealDuration,
  revealEasing,
}: AboutImageProps) {
  const [failedSources, setFailedSources] = useState<string[]>([]);
  const src = [image.src, image.fallback].find((candidate) =>
    candidate && !failedSources.includes(candidate),
  );

  return <Reveal delay={preload ? 100 : 0} duration={revealDuration} easing={revealEasing} className={`${styles.imageFrame} ${className}`}>
    {src ? <Image key={src} src={src} alt={image.alt} fill sizes={sizes} preload={preload} style={{ objectPosition: image.position }} onError={() => setFailedSources((failed) => [...failed, src])} /> :
      <div className={styles.neutralVisual} role="img" aria-label={image.placeholder.replaceAll("/", " ")}>
        <span className={styles.neutralWord} aria-hidden="true">{image.placeholder.split("/").map((line) => <span key={line}>{line.trim()}</span>)}</span>
        <span className={styles.neutralRule} aria-hidden="true" />
      </div>}
  </Reveal>;
}
