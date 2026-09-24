import { teachersPageData } from "@/data/teachers";
import { BookOpenCheck, GraduationCap, HeartHandshake } from "lucide-react";
import StandardCard from "./StandardCard";

const standardIcons = [BookOpenCheck, GraduationCap, HeartHandshake];

export default function TeacherStandards() {
  if (!teachersPageData.standards.length) return null;
  return <section className="grid gap-5 py-12 lg:grid-cols-3 lg:py-14" aria-label="Tiêu chuẩn giảng viên">
    {teachersPageData.standards.map((standard, index) => {
      const Icon = standardIcons[index] ?? BookOpenCheck;
      return <StandardCard index={index} key={standard.title}>
      <span className="inline-flex size-10 items-center justify-center rounded-[var(--radius-sm)] bg-white text-[var(--color-brand-red)]" aria-hidden="true"><Icon size={28} strokeWidth={1.75} /></span>
      <h2 className="mt-5 text-xl font-bold leading-[1.45]">{standard.title}</h2>
      <ul className="mt-5 grid gap-4 leading-[1.8] text-[var(--color-ink-muted)]">{standard.items.map((item) => <li key={item}>{item}</li>)}</ul>
    </StandardCard>;
    })}
  </section>;
}
