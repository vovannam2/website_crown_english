import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import AboutManifesto from "@/components/about/AboutManifesto";
import Reveal from "@/components/ui/Reveal";
import AboutActions from "@/components/about/AboutActions";
import AboutHero from "@/components/about/AboutHero";
import AboutImage from "@/components/about/AboutImage";
import AboutJourney from "@/components/about/AboutJourney";
import AboutDifferences from "@/components/about/AboutDifferences";
import AboutCoreValues from "@/components/about/AboutCoreValues";
import AboutPhilosophy from "@/components/about/AboutPhilosophy";
import { aboutPageData as data } from "@/data/about";
import styles from "@/components/about/about.module.css";

export const metadata: Metadata = {
  title: { absolute: data.seo.title },
  description: data.seo.description,
  alternates: { canonical: data.seo.canonical },
  robots: data.seo.robots,
  openGraph: { title: data.seo.openGraph.title, description: data.seo.openGraph.description, url: data.seo.canonical, type: "website" },
};

export default function AboutPage() {
  return <Container><div className={styles.page}>
    <AboutHero />
    <AboutManifesto />
    <section className={`${styles.section} ${styles.aboutGrid}`} aria-labelledby="story-title">
      <AboutImage image={data.about.image} sizes="(min-width: 1200px) 450px, (min-width: 768px) 40vw, 90vw" className={styles.aboutImage} />
      <div>
        <Reveal><p className={styles.eyebrow}>{data.about.chapter}</p><h2 id="story-title" className={styles.sectionTitle}>{data.about.title}</h2></Reveal>
        {data.about.paragraphs.map((paragraph, i) => <Reveal key={paragraph} delay={i * 80}><p className={styles.storyParagraph}>{paragraph}</p></Reveal>)}
      </div>
    </section>
    <AboutCoreValues />
    <AboutPhilosophy />
    <AboutJourney />
    <AboutDifferences />
    <section className={styles.cta} aria-labelledby="cta-title">
      <Reveal><p className={styles.eyebrow}>{data.cta.eyebrow}</p><h2 id="cta-title" className={styles.sectionTitle}>{data.cta.title}</h2><p className={styles.bodyCopy}>{data.cta.description}</p></Reveal>
      <AboutActions delay={100} />
    </section>
  </div></Container>;
}
