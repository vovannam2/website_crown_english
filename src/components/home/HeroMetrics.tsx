import { homePageData } from "@/data/home";
import Reveal from "@/components/ui/Reveal";
import styles from "./home.module.css";

export default function HeroMetrics() {
  return (
    <div className={styles.heroMetrics} aria-label="Thông tin nổi bật">
      {homePageData.hero.metrics.map((metric, index) => (
        <Reveal className={styles.heroMetric} delay={520 + index * 80} key={metric.id}>
          <span className={styles.heroMetricLabel}>{metric.label}</span>
          <p className={styles.heroMetricValue}>
            <strong>{metric.value}</strong>
            <span>{metric.unit}</span>
          </p>
          <span className={styles.heroMetricNote}>{metric.note}</span>
          {"subnote" in metric && <small>{metric.subnote}</small>}
        </Reveal>
      ))}
    </div>
  );
}
