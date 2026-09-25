import Reveal from "@/components/ui/Reveal";
import { aboutPageData } from "@/data/about";
import styles from "./AboutCoreValues.module.css";

export default function AboutCoreValues() {
  const data = aboutPageData;
  return <section className={styles.section} aria-labelledby="values-title">
    <Reveal><p className={styles.eyebrow}>{data.valuesHeading.eyebrow}</p><h2 id="values-title" className={styles.title}>{data.valuesHeading.title}</h2></Reveal>
    <div className={styles.network}>
      <div className={styles.connections} aria-hidden="true"><svg viewBox="0 0 100 100" preserveAspectRatio="none">
        <line className={styles.line1} x1="50" y1="50" x2="29" y2="27" /><line className={styles.line2} x1="50" y1="50" x2="71" y2="27" />
        <line className={styles.line3} x1="50" y1="50" x2="29" y2="73" /><line className={styles.line4} x1="50" y1="50" x2="71" y2="73" />
        <circle className={styles.centerDot} cx="50" cy="50" r="1.2" />
        <circle className={`${styles.endDot} ${styles.dot1}`} cx="29" cy="27" r=".75" /><circle className={`${styles.endDot} ${styles.dot2}`} cx="71" cy="27" r=".75" />
        <circle className={`${styles.endDot} ${styles.dot3}`} cx="29" cy="73" r=".75" /><circle className={`${styles.endDot} ${styles.dot4}`} cx="71" cy="73" r=".75" />
      </svg></div>
      <div className={styles.anchor}><span>CROWN ENGLISH</span><strong>CORE VALUES</strong></div>
      {data.coreValues.map((value, index) => <Reveal key={value.id} delay={index * 90} className={`${styles.valueSlot} ${styles[`slot${index + 1}`]}`}>
        <article className={`${styles.valueItem} ${styles[`value${index + 1}`]}`} tabIndex={0}>
          <span className={styles.number} aria-hidden="true">{value.number}</span>
          <div><h3>{value.title}</h3><p className={styles.english}>{value.english}</p><p className={styles.description}>{value.description}</p></div>
        </article>
      </Reveal>)}
    </div>
  </section>;
}
