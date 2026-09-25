import type { ReactNode } from "react";
import Reveal from "@/components/ui/Reveal";

export default function StandardCard({ children, index }: { children: ReactNode; index: number }) {
  return <Reveal delay={index * 100} className="h-full">
    <article className="h-full rounded-[var(--radius-md)] border border-[var(--color-line)] bg-white p-7 transition-[transform,box-shadow] duration-[220ms] motion-safe:hover:-translate-y-1 hover:shadow-[0_12px_28px_rgb(35_35_35/0.06)] motion-reduce:transition-none">{children}</article>
  </Reveal>;
}
