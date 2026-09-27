import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { aboutPageData } from "@/data/about";
import type { AboutActionsProps } from "@/types/about";
import styles from "./about.module.css";

export default function AboutActions({ delay = 0, reveal = true }: AboutActionsProps) {
  return <div className={styles.actions}>
    {aboutPageData.actions.map((action, index) => {
      const button = <Button href={action.href} variant={index === 0 ? "primary" : "outline"}>{action.label}<span aria-hidden="true">↗</span></Button>;
      return reveal ? <Reveal key={action.href} delay={delay + index * 100}>{button}</Reveal> : <span key={action.href}>{button}</span>;
    })}
  </div>;
}
