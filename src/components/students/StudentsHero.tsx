import Button from "@/components/ui/Button";
import HeroDecoration from "@/components/teachers/HeroDecoration";
import effects from "@/components/teachers/teachers.module.css";
import { studentResultsPageData as data } from "@/data/student-results";
import StudentImage from "./StudentImage";

export default function StudentsHero() {
  const portraits = data.results.filter(student => student.thumbnail).slice(0, 3);
  const heading = data.seo.h1.split(/(học viên)/i);

  return <section aria-labelledby="students-title" className="grid items-center gap-9 bg-white py-14 sm:py-16 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
    <div className={effects.heroCopy}>
      <p className="home-eyebrow">CÂU CHUYỆN HỌC VIÊN</p>
      <h1 id="students-title" className="mt-4 max-w-[800px] text-[clamp(2.25rem,5vw,3.5rem)] font-[750] leading-[1.15] tracking-[-0.035em] text-balance lg:text-[clamp(2.5rem,4vw,3.5rem)]">
        {heading.map((part, index) => part.toLowerCase() === "học viên" ? <span key={index} className="text-[var(--color-brand-red)]">{part}</span> : part)}
      </h1>
      <p className="mt-6 max-w-[820px] text-[17px] leading-[1.8] text-[var(--color-ink-muted)] lg:text-base lg:leading-[1.8]">{data.intro}</p>
      <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 [&>a]:transition-[transform,background-color] [&>a]:duration-200 motion-safe:[&>a:hover]:-translate-y-0.5 motion-reduce:[&>a]:transition-none">
        <Button href="/lien-he">Đăng ký tư vấn</Button>
        <a href="#student-results" className="inline-flex min-h-11 items-center gap-6 font-[650] text-[var(--color-brand-red)] hover:text-[var(--color-brand-red-dark)] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-brand-red-dark)]">Khám phá kết quả <span aria-hidden="true">↘</span></a>
      </div>
    </div>
    {!!portraits.length && <div className="relative mx-auto aspect-[1.3] w-full max-w-[540px]" aria-label="Học viên Crown English">
      <HeroDecoration />
      {portraits.map((student, index) => <div key={student.id} className={`${effects.heroPortrait} absolute aspect-square w-[43%] overflow-hidden rounded-[28px] border-[5px] border-white bg-white shadow-[0_18px_40px_rgb(35_35_35/0.1)] transition-[translate,box-shadow] duration-[220ms] motion-safe:hover:-translate-y-1.5 hover:shadow-[0_24px_44px_rgb(35_35_35/0.15)] motion-reduce:transition-none ${index === 1 ? "left-[28.5%] top-[7%] z-1 [animation-delay:160ms]" : index === 0 ? "left-[3%] top-[29%] -rotate-8 [animation-delay:100ms]" : "right-[3%] top-[29%] rotate-8 [animation-delay:220ms]"}`}>
        <StudentImage src={student.thumbnail} alt={`${student.name} — ${student.exam} ${student.overall}`} sizes="(min-width: 640px) 240px, 42vw" preload={index === 1} />
      </div>)}
    </div>}
  </section>;
}
