import Reveal from "@/components/ui/Reveal";
import AboutImage from "./AboutImage";
import { aboutPageData } from "@/data/about";
import styles from "./about.module.css";

export default function AboutJourney() {
  const data = aboutPageData.journey;
  return <section className={styles.section} aria-labelledby="journey-title">
    <Reveal><p className={styles.eyebrow}>{data.eyebrow}</p><h2 id="journey-title" className={styles.sectionTitle}>{data.title}</h2></Reveal>
    <div className={styles.journeyGrid}>
      <div>
        <div className={styles.roadmap}>
          <span className={styles.startLabel}>{data.start}</span>
          <Reveal preset="lineX" className={styles.pathLine}><span /></Reveal>
          <ol>{data.levels.map((level, i) => <li key={level.id}>
            <Reveal delay={i * 100}><span className={styles.node} aria-hidden="true" /><h3>{level.name}</h3><p>{level.score}</p></Reveal>
          </li>)}</ol>
        </div>
        <AboutImage image={data.image} sizes="(min-width: 1200px) 500px, (min-width: 768px) 44vw, 90vw" className={styles.methodImage} />
      </div>
      <div className={styles.methods}>{data.methods.map((item, i) => <Reveal key={item.id} delay={i * 80}><article className={styles.method}>
        <span className={styles.smallNumber}>{item.number}</span><div><h3>{item.title}</h3><p className={styles.bodyCopy}>{item.description}</p></div>
      </article></Reveal>)}</div>
    </div>
  </section>;
}
