import Image from "next/image";
import { homePageData } from "@/data/home";
import styles from "./home.module.css";

export default function HeroFilmStrip() {
  const frames = homePageData.hero.filmFrames;

  return (
    <div className={styles.heroFilm} aria-hidden="true">
      <div className={styles.heroFilmTrack}>
        {[0, 1].map((copy) => (
          <div className={styles.heroFilmGroup} key={copy}>
            {frames.map((frame) => (
              <figure className={styles.heroFilmFrame} key={`${copy}-${frame.index}`}>
                <div className={styles.heroFilmPhoto}>
                  <Image
                    src={frame.image}
                    alt=""
                    fill
                    sizes="(max-width: 1000px) 190px, 250px"
                  />
                </div>
                <figcaption><span>{frame.index}</span><time>{frame.time}</time></figcaption>
              </figure>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
