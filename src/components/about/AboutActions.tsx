import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { aboutPageData } from "@/data/about";
import styles from "./about.module.css";

export default function AboutActions({ delay = 0 }: { delay?: number }) {
  return <div className={styles.actions}>
    {aboutPageData.actions.map((action, index) => <Reveal key={action.href} delay={delay + index * 100}>
      <Button href={action.href} variant={index === 0 ? "primary" : "outline"}>{action.label}<span aria-hidden="true">↗</span></Button>
    </Reveal>)}
  </div>;
}
