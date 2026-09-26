import Reveal from "@/components/ui/Reveal";
import { aboutPageData } from "@/data/about";
import AboutImage from "./AboutImage";
import styles from "./about.module.css";

export default function AboutStory() {
  const { about } = aboutPageData;

  return (
    <section
      className={`${styles.section} ${styles.aboutGrid}`}
      aria-labelledby="story-title"
    >
      <AboutImage
        image={about.image}
        sizes="(min-width: 1200px) 450px, (min-width: 768px) 40vw, 90vw"
        className={styles.aboutImage}
      />
      <div>
        <Reveal>
          <p className={styles.eyebrow}>{about.chapter}</p>
          <h2 id="story-title" className={styles.sectionTitle}>
            {about.title}
          </h2>
        </Reveal>
        {about.paragraphs.map((paragraph, index) => (
          <Reveal key={paragraph} delay={index * 80}>
            <p className={styles.storyParagraph}>{paragraph}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
