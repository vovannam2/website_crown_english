import Reveal from "@/components/ui/Reveal";
import { aboutPageData } from "@/data/about";
import styles from "./AboutManifesto.module.css";

export default function AboutManifesto() {
  const data = aboutPageData.manifesto;
  return (
    <section className={styles.section} aria-labelledby="manifesto-title">
      <div className={styles.board}>
        <Reveal className={styles.label}>
          <span className={styles.labelPin} aria-hidden="true" />
          {data.eyebrow}
        </Reveal>

        <h2 id="manifesto-title" className={styles.srOnly}>
          {data.words.join(" ")}
        </h2>

        <div className={styles.notices}>
          {data.words.map((word, index) => (
            <Reveal
              key={word}
              className={styles.noticeReveal}
              delay={80 + index * 100}
            >
              <article className={styles.notice}>
                <span className={styles.pin} aria-hidden="true" />
                <span className={styles.noticeNumber}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className={styles.word}>{word}</h3>
                <p className={styles.translation}>
                  {data.translations[index]}
                </p>
                <span className={styles.rule} aria-hidden="true" />
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className={styles.messageReveal} delay={360}>
          <div className={styles.message}>
            <span className={styles.messagePinLeft} aria-hidden="true" />
            <span className={styles.messagePinRight} aria-hidden="true" />
            <p>{data.description}</p>
            <span className={styles.signature}>CROWN ENGLISH · LEARNING PATH</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
