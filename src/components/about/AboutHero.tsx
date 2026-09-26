import Reveal from "@/components/ui/Reveal";
import AboutImage from "./AboutImage";
import AboutActions from "./AboutActions";
import { aboutPageData as data } from "@/data/about";
import styles from "./about.module.css";

export default function AboutHero() {
  return <section className={styles.hero} aria-labelledby="about-title">
    <Reveal className={styles.heroCopy} duration={650} easing="ease">
      <p className={styles.eyebrow}>{data.hero.eyebrow}</p>
      <h1 id="about-title" className={styles.heroTitle}>{data.hero.lines.map((line, i) =>
        <span className={styles.lineMask} key={line}><span className={styles.textLine}>{line}{i < data.hero.lines.length - 1 ? " " : ""}</span></span>,
      )}</h1>
      <p className={styles.bodyCopy}>{data.hero.description}</p>
      <AboutActions reveal={false} />
      <a href="#manifesto" className={styles.textLink}>{data.hero.scrollLabel}<span aria-hidden="true">↓</span></a>
    </Reveal>
    <AboutImage image={data.hero.image} preload revealDuration={750} revealEasing="ease" sizes="(min-width: 1200px) 480px, (min-width: 768px) 44vw, 90vw" className={styles.heroImage} />
  </section>;
}
