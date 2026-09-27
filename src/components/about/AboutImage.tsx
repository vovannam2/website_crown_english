import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import type { AboutImageProps } from "@/types/about";
import Reveal from "@/components/ui/Reveal";
import styles from "./about.module.css";

// Static imports already resolve to content-hashed URLs outside public/.
// Keep filesystem resolution for optional public image slots.
export default function AboutImage({
  image,
  className = "",
  sizes,
  preload = false,
  revealDuration,
  revealEasing,
}: AboutImageProps) {
  const src = [image.src, image.fallback].find((candidate) =>
    candidate && (candidate.startsWith("/_next/static/media/") || existsSync(path.join(process.cwd(), "public", candidate))),
  );

  return <Reveal delay={preload ? 100 : 0} duration={revealDuration} easing={revealEasing} className={`${styles.imageFrame} ${className}`}>
    {src ? <Image src={src} alt={image.alt} fill sizes={sizes} preload={preload} style={{ objectPosition: image.position }} /> :
      <div className={styles.neutralVisual} role="img" aria-label={image.placeholder.replaceAll("/", " ")}>
        <span className={styles.neutralCircle} aria-hidden="true" />
        <span className={styles.neutralWord} aria-hidden="true">{image.placeholder.split("/").map((line) => <span key={line}>{line.trim()}</span>)}</span>
        <span className={styles.neutralRule} aria-hidden="true" />
      </div>}
  </Reveal>;
}
