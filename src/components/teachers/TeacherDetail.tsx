import type { Teacher } from "@/types/teachers";
import TeacherImage from "./TeacherImage";
import styles from "./teachers.module.css";

function DetailList({ title, items }: { title: string; items: readonly string[] }) {
  if (!items.length) return null;
  return <section className="mt-6">
    <h4 className="type-label text-[var(--color-brand-red)]">{title}</h4>
    <ul className="mt-3 grid gap-2.5">
      {items.map((item, index) => (
        <li key={`${index}-${item}`} className="type-small flex gap-2.5 text-[var(--color-ink-muted)]">
          <span aria-hidden="true" className="text-[var(--color-brand-red)]">✓</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </section>;
}

export default function TeacherDetail({ teacher }: { teacher: Teacher }) {
  return <article className={`${styles.detail} overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-line)]`} aria-labelledby="selected-teacher-name">
    <TeacherImage src={teacher.image} name={teacher.name} sizes="(min-width: 1200px) 410px, (min-width: 1024px) 36vw, (min-width: 640px) 480px, calc(100vw - 40px)" />
    <div className="px-6 pt-5 pb-7">
      <h3 id="selected-teacher-name" className="type-h3">{teacher.name}</h3>
      {teacher.role && <p className="type-small mt-2 text-[var(--color-ink-muted)]">{teacher.role}</p>}
      <DetailList title="Thành tích" items={teacher.achievements} />
      <DetailList title="Kinh nghiệm" items={teacher.experience} />
      <DetailList title="Sở trường" items={teacher.strengths} />
      {teacher.quote && <blockquote className={`${styles.quote} relative mt-7 mb-6 rounded-[28px] border-4 border-[var(--color-brand-red)] bg-white px-[22px] py-5 text-center font-[Georgia,Times_New_Roman,serif] text-xl font-bold not-italic leading-[1.45] text-pretty text-[var(--color-ink)] [overflow-wrap:anywhere]`}>{teacher.quote}</blockquote>}
    </div>
  </article>;
}
