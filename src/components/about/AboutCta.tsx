import Reveal from "@/components/ui/Reveal";
import { aboutPageData } from "@/data/about";
import AboutActions from "./AboutActions";
import styles from "./about.module.css";

export default function AboutCta() {
  const { cta } = aboutPageData;

  return (
    <section className={styles.cta} aria-labelledby="cta-title">
      <Reveal>
        <p className={styles.eyebrow}>{cta.eyebrow}</p>
        <h2 id="cta-title" className={styles.sectionTitle}>
          {cta.title}
        </h2>
        <p className={styles.bodyCopy}>{cta.description}</p>
      </Reveal>
      <AboutActions delay={100} />
    </section>
  );
}
