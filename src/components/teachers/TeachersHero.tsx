import Container from "@/components/ui/Container";
import Image from "next/image";
import Button from "@/components/ui/Button";
import HeroDecoration from "./HeroDecoration";
import { teachersPageData } from "@/data/teachers";
import styles from "./teachers.module.css";

export default function TeachersHero() {
  const portraits = teachersPageData.hero.featuredIds
    .map((id) => teachersPageData.teachers.find((teacher) => teacher.id === id))
    .filter((teacher) => teacher !== undefined)
    .filter((teacher) => teacher.image);
  const heading = teachersPageData.seo.h1.split("giảng viên");
  return <section className="bg-white py-14 sm:py-16" aria-labelledby="teachers-title">
    <Container className="grid items-center gap-9 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
      <div className={styles.heroCopy}>
      <p className="home-eyebrow">ĐỘI NGŨ GIẢNG VIÊN</p>
      <h1 id="teachers-title" className="mt-4 max-w-[800px] text-[length:var(--type-hero-size)] font-[750] leading-[1.15] tracking-[-0.035em] text-balance [&_span]:text-[var(--color-brand-red)]">{heading[0]}<span>giảng viên</span>{heading[1]}</h1>
      <p className="mt-6 max-w-[820px] text-[length:var(--type-intro-size)] leading-[1.8] text-[var(--color-ink-muted)]">{teachersPageData.intro}</p>
      <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 [&>a]:transition-[transform,background-color] [&>a]:duration-200 motion-safe:[&>a:hover]:-translate-y-0.5 motion-reduce:[&>a]:transition-none">
        <Button href="/lien-he">Đăng ký tư vấn</Button>
        <a className="inline-flex min-h-11 items-center gap-6 font-[650] text-[var(--color-brand-red)] hover:text-[var(--color-brand-red-dark)] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-brand-red-dark)]" href="#teacher-showcase">Gặp gỡ giảng viên <span aria-hidden="true">↘</span></a>
      </div>
      </div>
      <div className="relative mx-auto aspect-[1.3] w-full max-w-[540px]" aria-label="Giảng viên Crown English">
        <HeroDecoration />
        {portraits.map((teacher, index) => <div key={teacher.id} className={`${styles.heroPortrait} absolute aspect-[4/5] w-[43%] overflow-hidden rounded-[28px] border-[5px] border-white bg-white shadow-[0_18px_40px_rgb(35_35_35/0.1)] transition-[translate,box-shadow] duration-[220ms] motion-safe:hover:-translate-y-1.5 hover:shadow-[0_24px_44px_rgb(35_35_35/0.15)] motion-reduce:transition-none ${index === 1 ? "left-[28.5%] top-[3%] z-1 [animation-delay:160ms]" : index === 0 ? "left-[3%] top-[20%] -rotate-8 [animation-delay:100ms]" : "right-[3%] top-[20%] rotate-8 [animation-delay:220ms]"}`}>
          <Image src={teacher.image} alt={`Giảng viên ${teacher.name} - Crown English`} fill sizes="(min-width: 1024px) 240px, (min-width: 640px) 240px, 42vw" preload={index === 1} className="object-cover object-top" />
        </div>)}
      </div>
    </Container>
  </section>;
}
