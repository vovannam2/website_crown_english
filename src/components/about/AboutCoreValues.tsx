import Reveal from "@/components/ui/Reveal";
import { aboutPageData } from "@/data/about";
import styles from "./AboutCoreValues.module.css";

export default function AboutCoreValues() {
  const data = aboutPageData;
  return <section className={styles.section} aria-labelledby="values-title">
    <Reveal><p className={styles.eyebrow}>{data.valuesHeading.eyebrow}</p><h2 id="values-title" className={styles.title}>{data.valuesHeading.title}</h2></Reveal>
    <div className={styles.network}>
      <div className={styles.connections} aria-hidden="true" />
      <div className={styles.anchor}><span>CROWN ENGLISH</span><strong>CORE VALUES</strong></div>
      {data.coreValues.map((value, index) => <Reveal key={value.id} delay={index * 90} className={`${styles.valueSlot} ${styles[`slot${index + 1}`]}`}>
        <article className={`${styles.valueItem} ${styles[`value${index + 1}`]}`} tabIndex={0}>
          <span className={styles.number} aria-hidden="true">{value.number}</span>
          <div><h3>{value.title}</h3><p className={styles.english}>{value.english}</p><p className={styles.description}>{value.description}</p></div>
        </article>
        <svg className={styles.branch} viewBox="0 0 80 56" preserveAspectRatio="none" aria-hidden="true">
          <line x1="0" y1="0" x2="80" y2="56" />
        </svg>
      </Reveal>)}
    </div>
  </section>;
}
