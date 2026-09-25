import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import AboutImage from "./AboutImage";
import { aboutPageData } from "@/data/about";
import styles from "./about.module.css";

export default function AboutDifferences() {
  const data = aboutPageData.differences;
  return <section className={styles.section} aria-labelledby="differences-title">
    <Reveal><p className={styles.eyebrow}>{data.eyebrow}</p><h2 id="differences-title" className={styles.sectionTitle}>{data.title}</h2></Reveal>
    <article className={`${styles.differenceRow} ${styles.imageRight}`} aria-labelledby="investment-title">
      <div className={styles.differenceCopy}>
        <Reveal><p className={styles.eyebrow}>{data.investment.label}</p><h3 id="investment-title" className={styles.featureTitle}>{data.investment.title}</h3></Reveal>
        <Reveal delay={80}><p className={styles.price}><span>{data.investment.prefix}</span><strong>{data.investment.metric}</strong><span>{data.investment.unit}</span></p></Reveal>
        <Reveal delay={160}><p className={styles.bodyCopy}>{data.investment.description}</p></Reveal>
      </div>
      <AboutImage image={data.investment.image} className={`${styles.differenceImage} ${styles.softEditorialImage}`} sizes="(min-width: 1200px) 520px, (min-width: 768px) 44vw, 90vw" />
    </article>
    <article className={`${styles.differenceRow} ${styles.imageLeft}`} aria-labelledby="commitment-title">
      <AboutImage image={data.commitment.image} className={`${styles.differenceImage} ${styles.softEditorialImage}`} sizes="(min-width: 1200px) 520px, (min-width: 768px) 44vw, 90vw" />
      <div className={styles.differenceCopy}>
        <Reveal><p className={styles.eyebrow}>{data.commitment.label}</p><h3 id="commitment-title" className={styles.featureTitle}>{data.commitment.title}</h3></Reveal>
        <Reveal delay={80}><p className={styles.sessions}><strong>{data.commitment.metric}</strong><span>{data.commitment.unit}<small>{data.commitment.detail}</small></span></p></Reveal>
        <Reveal delay={160}><p className={styles.bodyCopy}>{data.commitment.description}</p><p className={styles.policyNote}>{data.commitment.note}</p><Link className={styles.textLink} href={data.commitment.link.href}>{data.commitment.link.label}<span aria-hidden="true">↗</span></Link></Reveal>
      </div>
    </article>
    <article className={`${styles.differenceRow} ${styles.imageRight}`} aria-labelledby="support-title">
      <AboutImage image={data.support.image} className={styles.supportImage} sizes="(min-width: 1200px) 520px, (min-width: 768px) 44vw, 90vw" />
      <div className={styles.differenceCopy}>
        <Reveal><p className={styles.eyebrow}>{data.support.label}</p><h3 id="support-title" className={styles.featureTitle}>{data.support.title}</h3></Reveal>
        <Reveal delay={100}><p className={styles.bodyCopy}>{data.support.description}</p><Link className={styles.textLink} href={data.support.link.href}>{data.support.link.label}<span aria-hidden="true">→</span></Link></Reveal>
      </div>
    </article>
    <article className={`${styles.differenceRow} ${styles.imageLeft}`} aria-labelledby="experience-title">
      <AboutImage image={data.experience.image} className={styles.experienceImage} sizes="(min-width: 1200px) 520px, (min-width: 768px) 44vw, 90vw" />
      <div className={`${styles.differenceCopy} ${styles.experienceCopy}`}>
        <Reveal><p className={styles.eyebrow}>{data.experience.label}</p><h3 id="experience-title" className={styles.featureTitle}>{data.experience.title}</h3></Reveal>
        <ul className={styles.experienceWords}>{data.experience.keywords.map((word, i) => <li key={word}><Reveal delay={i * 80}><span aria-hidden="true">✓</span> {word}</Reveal></li>)}</ul>
        <Reveal><p className={styles.bodyCopy}>{data.experience.description}</p></Reveal>
      </div>
    </article>
  </section>;
}
