import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { homePageData as data } from "@/data/home";
import HeroFilmStrip from "./HeroFilmStrip";
import HeroMetrics from "./HeroMetrics";
import styles from "./home.module.css";

export default function HomeHero() {
  const { hero } = data;
  const banners = [hero.backgroundImage, ...hero.bannerAlternatives];
  return (
    <section className={styles.heroCampaign} aria-labelledby="home-title">
      <div className={styles.heroCampaignBackground} aria-hidden="true">
        {banners.map((banner, index) => (
          <div
            className={styles.heroCampaignSlide}
            style={{ animationDelay: `${index * 6}s` }}
            key={banner.src}
          >
            <Image
              className={styles.heroCampaignImage}
              src={banner}
              alt=""
              fill
              sizes="100vw"
              quality={88}
              preload={index === 0}
            />
          </div>
        ))}
      </div>
      <div className={styles.heroCampaignTint} aria-hidden="true" />

      <div className={styles.heroCampaignInner}>
        <Reveal className={styles.heroCampaignCopy} duration={650} group>
          <p className={styles.heroCampaignEyebrow}>{hero.eyebrow}</p>
          <h1 className={styles.heroCampaignTitle} id="home-title" aria-label={hero.title}>
            {hero.headlineLines.map((line) => (
              <span className={styles.heroHeadlineMask} key={line}>
                <span>{line}</span>
              </span>
            ))}
          </h1>
            <ul className={styles.heroProgramChips} aria-label="Chương trình đào tạo">
              {hero.programChips.map((program) => <li key={program}>{program}</li>)}
            </ul>
          <p className={styles.heroCampaignDescription}>{hero.description}</p>
          <div className={styles.heroCampaignActions}>
            <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
            <Button href={hero.secondaryCta.href} variant="outline">{hero.secondaryCta.label}</Button>
          </div>
          <HeroMetrics />
        </Reveal>

        <Reveal className={styles.heroFilmPlacement} delay={100} duration={750}>
          <HeroFilmStrip />
        </Reveal>
      </div>
    </section>
  );
}
