import Reveal from "@/components/ui/Reveal";
import AboutImage from "./AboutImage";
import AboutActions from "./AboutActions";
import { aboutPageData as data } from "@/data/about";
import styles from "./about.module.css";

export default function AboutHero() {
  return <section className={styles.hero} aria-labelledby="about-title">
    <div className={styles.heroCopy}>
      <Reveal><p className={styles.eyebrow}>{data.hero.eyebrow}</p></Reveal>
      <h1 id="about-title" className={styles.heroTitle}>{data.hero.lines.map((line, i) =>
        <span className={styles.lineMask} key={line}><Reveal as="span" preset="text" delay={i * 80} className={styles.textLine}>{line}{i < data.hero.lines.length - 1 ? " " : ""}</Reveal></span>,
      )}</h1>
      <Reveal delay={180}><p className={styles.bodyCopy}>{data.hero.description}</p></Reveal>
      <AboutActions delay={240} />
      <a href="#manifesto" className={styles.textLink}>{data.hero.scrollLabel}<span aria-hidden="true">↓</span></a>
    </div>
    <AboutImage image={data.hero.image} preload sizes="(min-width: 1200px) 480px, (min-width: 768px) 44vw, 90vw" className={styles.heroImage} />
  </section>;
}
