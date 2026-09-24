import type { Teacher } from "@/types/teachers";
import TeacherImage from "./TeacherImage";
import styles from "./teachers.module.css";

function DetailList({ title, items }: { title: string; items: readonly string[] }) {
  if (!items.length) return null;
  return <section className="mt-6 [&_h4]:text-xs [&_h4]:font-[750] [&_h4]:tracking-[0.1em] [&_h4]:text-[var(--color-brand-red)] [&_h4]:uppercase [&_ul]:mt-3 [&_ul]:grid [&_ul]:gap-2.5 [&_li]:flex [&_li]:gap-2.5 [&_li]:leading-[1.7] [&_li>span:first-child]:text-[var(--color-brand-red)]">
    <h4>{title}</h4>
    <ul>{items.map((item, index) => <li key={`${index}-${item}`}><span aria-hidden="true">✓</span><span>{item}</span></li>)}</ul>
  </section>;
}

export default function TeacherDetail({ teacher }: { teacher: Teacher }) {
  return <article className={`${styles.detail} overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-line)]`} aria-labelledby="selected-teacher-name">
    <TeacherImage src={teacher.image} name={teacher.name} sizes="(min-width: 1200px) 410px, (min-width: 1024px) 36vw, (min-width: 640px) 480px, calc(100vw - 40px)" />
    <div className="px-6 pt-5 pb-7 [&>h3]:text-[28px] [&>h3]:font-[750] [&>h3]:leading-[1.3]">
      <h3 id="selected-teacher-name">{teacher.name}</h3>
      {teacher.role && <p className="mt-2 text-[var(--color-ink-muted)]">{teacher.role}</p>}
      <DetailList title="Thành tích" items={teacher.achievements} />
      <DetailList title="Kinh nghiệm" items={teacher.experience} />
      <DetailList title="Sở trường" items={teacher.strengths} />
      {teacher.quote && <blockquote className={`${styles.quote} relative mt-7 mb-6 rounded-[28px] border-4 border-[var(--color-brand-red)] bg-white px-[22px] py-5 text-center font-[Georgia,Times_New_Roman,serif] text-xl font-bold not-italic leading-[1.45] text-pretty text-[var(--color-ink)] [overflow-wrap:anywhere]`}>{teacher.quote}</blockquote>}
    </div>
  </article>;
}
