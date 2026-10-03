import localClassroom13Image from "../../../public/images/students/classrooms/ielts-class-social-post-study-tables.jpg";
import localClassroom04Image from "../../../public/images/students/classrooms/teacher-tutoring-student-at-desk.jpg";
import localClassroom08Image from "../../../public/images/students/classrooms/teacher-leading-small-ielts-class.jpg";
import localClassroom01Image from "../../../public/images/students/classrooms/ielts-grammar-class-with-teacher.jpg";
import localClassroom12Image from "../../../public/images/students/classrooms/ielts-class-social-post-side-view.jpg";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  Coins,
  GraduationCap,
  Laptop,
  Layers3,
  MonitorPlay,
  Target,
  TrendingUp,
  UserRoundCheck,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import CourseRoadmap from "./CourseRoadmap";

import type {
  ClassType,
  CourseDataProps,
  CoursePageData,
  CoursesAchievementsProps,
  CoursesLearningFormatsProps,
  CoursesOverviewPageProps,
  HighlightItem,
  IconName,
  LevelItem,
  VisualCard,
  VisualTone,
} from "@/types/courses";

const courseImages: Record<string, string> = {
  ielts: localClassroom13Image.src,
  "giao-tiep": localClassroom04Image.src,
  "ielts-1-kem-1": localClassroom08Image.src,
};

const classTypeLabels: Record<string, string> = {
  standard: "Standard",
  premium: "Premium",
  premiumGroup3: "Premium nhóm 3",
  oneToOne: "1:1",
};

const iconMap: Record<IconName, LucideIcon> = {
  book: BookOpen,
  briefcase: BriefcaseBusiness,
  coins: Coins,
  graduation: GraduationCap,
  layers: Layers3,
  target: Target,
  teacher: UserRoundCheck,
  trending: TrendingUp,
  users: UsersRound,
};

function asList(value?: string | readonly string[]) {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

function hasText(value?: string) {
  return Boolean(value && value.trim().length > 0);
}

function isText(value: string | undefined): value is string {
  return Boolean(value && value.trim().length > 0);
}

function getLevelTitle(level: LevelItem) {
  return level.name ?? level.level ?? level.sourceHeading ?? "Trình độ";
}

function getCourseImage(data: CoursePageData) {
  return data.hero.image || courseImages[data.id] || localClassroom01Image.src;
}

function getCourseDescription(data: CoursePageData) {
  return data.hero.description || data.seo.description;
}

function getAudienceCards(data: CoursePageData): VisualCard[] {
  if (data.overview.cards && data.overview.cards.length > 0) return [...data.overview.cards];

  const items = [...data.suitableFor, ...data.studentProblems];
  const source = items.length > 0 ? items : data.seo.secondaryTopics.slice(0, 4);
  const tones: VisualCard["tone"][] = ["red", "blue", "gold", "green"];
  const icons: IconName[] = ["graduation", "trending", "target", "briefcase"];

  return source.slice(0, 4).map((item, index) => ({
    title: item,
    description: data.seo.primaryTopic,
    icon: icons[index] ?? "graduation",
    tone: tones[index] ?? "red",
  }));
}

function getCourseHighlights(data: CoursePageData): HighlightItem[] {
  if (data.highlights && data.highlights.length > 0) return [...data.highlights];

  if (Array.isArray(data.benefits)) {
    const icons: IconName[] = ["users", "coins", "teacher", "book"];
    return data.benefits.slice(0, 4).map((benefit, index) => {
      const isText = typeof benefit === "string";
      return {
        title: isText ? benefit : benefit.title,
        description: isText ? data.seo.primaryTopic : benefit.description,
        icon: icons[index] ?? "book",
      };
    });
  }

  if (data.benefits && !Array.isArray(data.benefits)) {
    const icons: IconName[] = ["users", "coins", "teacher", "book"];
    return Object.entries(data.benefits).slice(0, 4).map(([group, items], index) => ({
      title: classTypeLabels[group] ?? group,
      description: items[0] ?? data.seo.primaryTopic,
      icon: icons[index] ?? "book",
    }));
  }

  return [];
}

function toneClasses(tone: VisualTone = "red") {
  const classes = {
    red: "bg-[#FFF0F2] text-[var(--color-brand-red)]",
    blue: "bg-[#EEF5FF] text-[#4F7DF3]",
    gold: "bg-[#FFF6DA] text-[#D9921F]",
    green: "bg-[#EAF8EF] text-[#2BA56A]",
  };

  return classes[tone];
}

function getIcon(icon: IconName | undefined, fallback: IconName) {
  return iconMap[icon ?? fallback];
}

function cleanPrice(price?: string) {
  return price?.replace(/\s*\/\s*/g, "/").replace(/khoá/gi, "khóa").trim() || "Tư vấn";
}

function getOptionPrice(classType: ClassType) {
  const tuition = classType.tuition ?? [];
  if (tuition.length === 0) return "Tư vấn";

  const firstPrice = cleanPrice(tuition[0]?.price);
  const samePrice = tuition.every((item) => cleanPrice(item.price) === firstPrice);

  return samePrice ? firstPrice : `Từ ${firstPrice}`;
}

function getClassTypeBullets(classType: ClassType, notes: readonly string[]) {
  const tuition = classType.tuition ?? [];
  const firstTuition = tuition[0];
  const bullets = [
    classType.classSize ? `Sĩ số: ${classType.classSize}` : "",
    classType.frequency ? `Thời gian: ${classType.frequency}` : "",
    firstTuition?.duration && firstTuition?.sessions ? `${firstTuition.duration} - ${firstTuition.sessions}` : firstTuition?.sessions ?? "",
    firstTuition?.sessionDuration ? `Mỗi buổi: ${firstTuition.sessionDuration}` : "",
    tuition.length > 1 ? `${tuition.length} lộ trình: ${tuition.map((item) => item.course).join(", ")}` : firstTuition?.course ? `Áp dụng: ${firstTuition.course}` : "",
    ...notes,
  ];

  return bullets.filter(Boolean).slice(0, 6);
}

function renderAccentTitle(title: string, accent?: string) {
  const lines = title.split("\n");

  return (
    <>
      {lines.map((line, index) => {
        const isLast = index === lines.length - 1;
        const hasAccent = Boolean(accent && line.includes(accent));
        const [beforeAccent, afterAccent] = hasAccent && accent ? line.split(accent) : [line, ""];

        return (
          <span key={`${line}-${index}`}>
            {hasAccent ? (
              <>
                {beforeAccent}
                <span className="relative inline-block text-[var(--color-brand-red)] after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-full after:rounded-full after:bg-[var(--color-brand-red)] after:opacity-25">
                  {accent}
                </span>
                {afterAccent}
              </>
            ) : (
              line
            )}
            {!isLast && <br />}
          </span>
        );
      })}
    </>
  );
}

function CourseHeroTitle({ data }: CourseDataProps) {
  if (data.hero.titlePrefix) return renderAccentTitle(`${data.hero.titlePrefix} ${data.hero.titleAccent ?? ""}`.trim(), data.hero.titleAccent);
  return <>{data.seo.h1}</>;
}

function CourseHeroStats({ data }: CourseDataProps) {
  if (data.hero.stats && data.hero.stats.length > 0) {
    return (
      <dl className="mt-8 grid gap-5 sm:grid-cols-3">
        {data.hero.stats.map((stat) => {
          const Icon = getIcon(stat.icon, "target");

          return (
            <div key={stat.title} className="flex gap-3">
              <dt className="grid size-11 shrink-0 place-items-center rounded-full bg-[#FFF0F2] text-[var(--color-brand-red)]">
                <Icon aria-hidden="true" size={21} />
                <span className="sr-only">{stat.title}</span>
              </dt>
              <dd>
                <p className="type-h4">{stat.title}</p>
                <p className={`mt-1 type-small ${stat.tone === "red" ? "font-bold text-[var(--color-brand-red)]" : "text-[var(--color-ink-muted)]"}`}>
                  {stat.description}
                </p>
              </dd>
            </div>
          );
        })}
      </dl>
    );
  }

  return (
    <dl className="mt-8 grid gap-3 sm:grid-cols-3">
      <div className="border-t border-[var(--color-line-strong)] pt-4">
        <dt className="type-label text-[var(--color-ink-muted)]">Mục tiêu</dt>
        <dd className="type-h4 mt-2 text-[var(--color-brand-red)]">{data.hero.highlight || data.hero.subtitle || data.seo.primaryTopic}</dd>
      </div>
      <div className="border-t border-[var(--color-line-strong)] pt-4">
        <dt className="type-label text-[var(--color-ink-muted)]">Lộ trình</dt>
        <dd className="type-h4 mt-2">{data.roadmap.length} chặng</dd>
      </div>
      <div className="border-t border-[var(--color-line-strong)] pt-4">
        <dt className="type-label text-[var(--color-ink-muted)]">Tư vấn</dt>
        <dd className="type-h4 mt-2">Theo đầu vào</dd>
      </div>
    </dl>
  );
}

function CourseAudienceSection({ data }: CourseDataProps) {
  const cards = getAudienceCards(data);
  const featurePanel = data.overview.featurePanel;

  return (
    <section className="w-full bg-white py-16 sm:py-20" aria-labelledby="overview-title">
      <Container>
        <div className={`grid gap-10 lg:items-center ${data.overview.image ? "lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14" : "lg:grid-cols-[0.88fr_1.12fr]"}`}>
          <Reveal>
            <div className="max-w-3xl">
              <p className="home-eyebrow">{data.overview.eyebrow || "TỔNG QUAN KHÓA HỌC"}</p>
              <h2 id="overview-title" className="mt-3 type-h2">
                {renderAccentTitle(hasText(data.overview.title) ? data.overview.title : "Khóa học này dành cho ai?", data.overview.titleAccent)}
              </h2>
              <div className="mt-6 space-y-4">
                {(data.overview.paragraphs.length > 0
                  ? data.overview.paragraphs
                  : [data.seo.description]).map((paragraph) => (
                  <p key={paragraph} className="type-body-lg text-[var(--color-ink-muted)]">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className={`mt-8 grid gap-4 ${cards.length === 1 ? "max-w-xl" : "sm:grid-cols-2"}`}>
              {cards.map((card) => {
                const Icon = getIcon(card.icon, "graduation");
                return (
                  <article key={card.title} className="rounded-[var(--radius-sm)] border border-[var(--color-line)] bg-white p-5 shadow-[var(--shadow-header)]">
                    <div className={`grid size-12 place-items-center rounded-full ${toneClasses(card.tone)}`}>
                      <Icon aria-hidden="true" size={22} strokeWidth={2.2} />
                    </div>
                    <h3 className="mt-5 type-h4">{card.title}</h3>
                    <p className="mt-2 type-small text-[var(--color-ink-muted)]">{card.description}</p>
                  </article>
                );
              })}
            </div>
          </Reveal>

          {featurePanel ? (
          <Reveal delay={120} className="relative overflow-hidden rounded-[var(--radius-sm)] bg-[#F7FCFF] shadow-[var(--shadow-menu)] lg:-mr-8 xl:-mr-10">
            <Image
              src={featurePanel.image}
              alt={featurePanel.alt}
              width={1536}
              height={1024}
              sizes="(min-width: 1280px) 680px, (min-width: 1024px) 620px, 92vw"
              className="h-auto w-full"
            />
            <Button href="/lien-he" className="absolute bottom-5 left-5 z-10 rounded-full px-7 py-4 shadow-[var(--shadow-menu)] sm:bottom-7 sm:left-7">
              {featurePanel.ctaLabel || data.cta?.buttonLabel || "Đăng ký tư vấn ngay"}
              <ArrowRight aria-hidden="true" size={18} />
            </Button>
          </Reveal>
          ) : data.overview.image ? (
          <Reveal preset="image" delay={120} className="relative mx-auto aspect-[482/651] w-full max-w-[440px] overflow-hidden rounded-[var(--radius-sm)] bg-white shadow-[var(--shadow-menu)]">
            <Image src={data.overview.image} alt={data.overview.imageAlt || "Giảng viên hướng dẫn học viên tại Crown English"} fill sizes="(min-width: 1024px) 440px, 90vw" className="object-cover" />
          </Reveal>
          ) : (
          <Reveal preset="image" delay={120} className="relative min-h-[360px] overflow-hidden rounded-[var(--radius-sm)] bg-white shadow-[var(--shadow-menu)]">
            <Image src={getCourseImage(data)} alt={`Không gian học ${data.hero.title} tại Crown English`} fill sizes="(min-width: 1024px) 480px, 90vw" className="object-cover" />
          </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}

function CourseHighlightsSection({ data }: CourseDataProps) {
  const highlights = getCourseHighlights(data);
  if (highlights.length === 0) return null;

  return (
    <section className="w-full bg-white py-12 sm:py-16" aria-labelledby="benefits-title">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <Reveal>
            <p className="home-eyebrow">VÌ SAO CHỌN CROWN ENGLISH</p>
            <h2 id="benefits-title" className="mt-3 type-h2">Điểm khác biệt của {data.seo.primaryTopic}</h2>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, index) => {
              const Icon = getIcon(item.icon, "book");
              return (
                <Reveal key={item.title} delay={index * 70}>
                  <article className="h-full border-l border-[var(--color-line)] pl-5">
                    <div className="grid size-10 place-items-center rounded-full bg-[#FFF0F2] text-[var(--color-brand-red)]">
                      <Icon aria-hidden="true" size={20} strokeWidth={2.2} />
                    </div>
                    <h3 className="mt-4 type-h4">{item.title}</h3>
                    <p className="mt-2 type-small text-[var(--color-ink-muted)]">{item.description}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

function CourseTuitionSection({ data }: CourseDataProps) {
  if (!data.classTypes || Object.keys(data.classTypes).length === 0) return null;

  const title = data.id === "ielts"
    ? "Học phí IELTS và sĩ số lớp tại Crown English"
    : `Học phí và hình thức lớp ${data.hero.title}`;

  return (
    <section className="py-16 sm:py-20" aria-labelledby="tuition-title">
      <Reveal>
        <p className="home-eyebrow">HỌC PHÍ & HÌNH THỨC LỚP</p>
        <h2 id="tuition-title" className="mt-3 max-w-3xl type-h2">{title}</h2>
        <p className="mt-4 max-w-3xl type-body-lg text-[var(--color-ink-muted)]">
          Bảng học phí được trình bày theo từng mô hình lớp để học viên dễ so sánh sĩ số, thời lượng và mức đầu tư trước khi đăng ký tư vấn đầu vào.
        </p>
      </Reveal>
      <div className={`mt-10 grid gap-6 ${Object.keys(data.classTypes).length >= 3 ? "lg:grid-cols-3 lg:items-end" : "lg:grid-cols-2"}`}>
        {Object.entries(data.classTypes).map(([key, classType], index) => {
          const label = classTypeLabels[key] ?? key;
          const isPremium = key.toLowerCase().includes("premium");
          const isOneToOne = key.toLowerCase().includes("onetoone");
          const notes = [isOneToOne ? classType.standardTime : undefined, classType.offline, classType.evening, ...(classType.schedule ?? []), ...(classType.benefits ?? [])].filter(isText);
          const featuredNotes = isOneToOne ? notes.slice(0, 3) : [];
          const cardNotes = isOneToOne ? [] : notes;
          const bullets = getClassTypeBullets(classType, cardNotes);
          const optionNumber = index + 1;
          const isFeatured = optionNumber === 1 && Object.keys(data.classTypes ?? {}).length >= 3;
          const desktopOrder = Object.keys(data.classTypes ?? {}).length >= 3
            ? optionNumber === 1
              ? "lg:order-2"
              : optionNumber === 2
                ? "lg:order-1"
                : "lg:order-3"
            : "";

          return (
            <article
              key={key}
              className={`relative flex h-full flex-col overflow-visible rounded-[var(--radius-sm)] border bg-white px-5 pb-5 pt-12 shadow-[var(--shadow-header)] transition duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-menu)] sm:px-6 sm:pb-6 ${desktopOrder} ${isFeatured ? "border-[var(--color-brand-red)] bg-[#FFF2EA] lg:min-h-[520px] lg:pt-14" : isPremium || isOneToOne ? "border-[#F3C7C7]" : "border-[var(--color-line)]"}`}
            >
              <div className={`absolute -top-8 left-1/2 grid size-16 -translate-x-1/2 place-items-center rounded-full border bg-white text-[2.8rem] font-black leading-none text-[var(--color-ink)] shadow-[var(--shadow-header)] ${isFeatured ? "border-[var(--color-brand-red)]" : "border-[var(--color-line)]"}`}>
                {optionNumber}
              </div>
              <div className="min-w-0 text-center">
                <p className="type-label text-[var(--color-brand-red)]">Option {optionNumber}</p>
                <h3 className="mt-3 text-[1.35rem] font-black uppercase leading-[1.12] text-[var(--color-ink)] sm:text-[1.55rem] xl:text-[1.7rem]">{classType.title || label}</h3>
                <p className="mt-4 break-words text-[clamp(1.7rem,2.35vw,2.45rem)] font-black leading-none text-[var(--color-brand-red)]">
                  {getOptionPrice(classType)}
                </p>
                {classType.description && <p className="mt-4 type-small text-[var(--color-ink-muted)]">{classType.description}</p>}
              </div>

              <ul className="mt-7 flex-1 space-y-3" aria-label={`Thông tin ${label} của ${data.seo.primaryTopic}`}>
                {bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 type-small text-[var(--color-ink-muted)]">
                    <CheckCircle2 aria-hidden="true" className="mt-0.5 shrink-0 text-[var(--color-brand-red)]" size={17} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {featuredNotes.length > 0 && (
                <div className="relative mt-6 rounded-[var(--radius-sm)] border border-[#F3C7C7] bg-white/85 p-5 text-left">
                  <div className="absolute -right-3 -top-3 grid size-10 place-items-center rounded-full bg-[var(--color-brand-red)] text-white shadow-[var(--shadow-header)]">
                    <ArrowUpRight aria-hidden="true" size={20} />
                  </div>
                  <p className="type-label text-[var(--color-brand-red)]">Lưu ý cho Option {optionNumber}</p>
                  <ul className="mt-4 space-y-3">
                    {featuredNotes.map((note) => (
                      <li key={note} className="flex gap-3 type-small text-[var(--color-ink-muted)]">
                        <ArrowRight aria-hidden="true" className="mt-0.5 shrink-0 text-[var(--color-brand-red)]" size={16} />
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {classType.classSize && (
                <p className={`mt-6 rounded-[var(--radius-sm)] px-4 py-3 text-center type-label ${isFeatured ? "bg-white text-[var(--color-brand-red)]" : "bg-[var(--color-surface-soft)] text-[var(--color-ink-muted)]"}`}>
                  {classType.classSize}
                </p>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}

function CoursesLearningFormats({ data }: CoursesLearningFormatsProps) {
  if (!data || data.items.length === 0) return null;

  return (
    <section className="relative left-1/2 right-1/2 -mx-[50dvw] w-[100dvw] overflow-x-clip bg-[#EEF8FF] py-14 sm:py-16" aria-labelledby="learning-formats-title">
      <Container>
        <Reveal>
          <h2 id="learning-formats-title" className="type-h2 text-[#143B69]">{data.title}</h2>
          <p className="mt-3 max-w-2xl type-body-lg text-[var(--color-ink-muted)]">{data.description}</p>
        </Reveal>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {data.items.map((item, index) => {
            const Icon = item.icon === "laptop" ? Laptop : MonitorPlay;

            return (
              <Reveal key={item.title} delay={index * 80}>
                <article className="grid h-full overflow-hidden rounded-[var(--radius-sm)] border border-white/75 bg-white shadow-[var(--shadow-header)] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-menu)] md:grid-cols-[0.88fr_1.12fr]">
                  <div className="flex gap-5 p-6 sm:p-7">
                    <div className="grid size-16 shrink-0 place-items-center rounded-[var(--radius-sm)] bg-[#EAF3FF] text-[#5D86E8]">
                      <Icon aria-hidden="true" size={30} strokeWidth={2.1} />
                    </div>
                    <div>
                      <h3 className="type-h3 text-[#18345C]">{item.title}</h3>
                      <p className="mt-3 type-small text-[var(--color-ink-muted)]">{item.description}</p>
                    </div>
                  </div>
                  <div className="relative min-h-[230px] bg-[var(--color-surface-soft)] md:min-h-full">
                    <Image src={item.image} alt={`${item.title} tại Crown English`} fill sizes="(min-width: 1024px) 360px, 92vw" className="object-cover" />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function CoursesAchievements({ data }: CoursesAchievementsProps) {
  if (!data || data.results.length === 0) return null;

  return (
    <section className="py-12 sm:py-16" aria-labelledby="course-achievements-title">
      <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
        <Reveal>
          <p className="home-eyebrow">BẢNG VÀNG THÀNH TÍCH</p>
          <h2 id="course-achievements-title" className="mt-3 type-h2">{data.title}</h2>
          <p className="mt-4 max-w-2xl type-body-lg text-[var(--color-ink-muted)]">{data.description}</p>
        </Reveal>
        {data.video && (
          <Reveal delay={100} className="overflow-hidden rounded-[var(--radius-sm)] border border-[var(--color-line)] bg-white shadow-[var(--shadow-menu)]">
            <div className="bg-[var(--color-ink)]">
              <video
                src={data.video.src}
                controls
                preload="metadata"
                playsInline
                className="aspect-video w-full bg-black object-contain"
                aria-label={`Video chia sẻ của ${data.video.name} - ${data.video.result}`}
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 p-5">
              <div>
                <p className="type-label text-[var(--color-brand-red)]">VIDEO CHIA SẺ</p>
                <h3 className="mt-2 type-h3">{data.video.name}</h3>
              </div>
              <p className="rounded-full bg-[#FFF0F2] px-4 py-2 type-label text-[var(--color-brand-red)]">{data.video.result}</p>
            </div>
          </Reveal>
        )}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {data.results.map((result, index) => (
          <Reveal key={result.id} delay={index * 45}>
            <article className="group overflow-hidden rounded-[var(--radius-sm)] border border-[var(--color-line)] bg-white shadow-[var(--shadow-header)] transition duration-200 hover:-translate-y-1 hover:border-[var(--color-brand-red)] hover:shadow-[var(--shadow-menu)]">
              <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-surface-soft)]">
                <Image
                  src={result.fullImage}
                  alt={`Bảng điểm ${result.exam} ${result.overall} của ${result.name}`}
                  fill
                  sizes="(min-width: 1024px) 260px, (min-width: 640px) 45vw, 90vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                />
                <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 shadow-[var(--shadow-header)]">
                  <p className="type-label text-[var(--color-brand-red)]">{result.exam} {result.overall}</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="type-h4">{result.name}</h3>
                {result.highlights.length > 0 && (
                  <p className="mt-2 type-small text-[var(--color-ink-muted)]">{result.highlights.slice(0, 2).join(" · ")}</p>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function CoursesOverviewPage({ title, description, heroImage = localClassroom12Image.src, learningFormats, achievements, courses }: CoursesOverviewPageProps) {
  return (
    <Container className="py-8 sm:py-10 lg:py-12">
      <section className="grid items-center gap-9 py-4 lg:grid-cols-[0.95fr_1.05fr]" aria-labelledby="courses-title">
        <Reveal>
          <p className="home-eyebrow">CHƯƠNG TRÌNH HỌC</p>
          <h1 id="courses-title" className="mt-4 type-h1">{title}</h1>
          <p className="mt-6 max-w-2xl type-body-lg text-[var(--color-ink-muted)]">{description}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="/lien-he">Đăng ký tư vấn</Button>
            <Button href="#course-list" variant="outline">Xem khóa học</Button>
          </div>
        </Reveal>
        <Reveal preset="image" className="relative aspect-square max-h-[540px] overflow-hidden rounded-[var(--radius-sm)] bg-[var(--color-surface-soft)]">
          <Image src={heroImage} alt="Lớp học IELTS và giao tiếp tại Crown English" fill sizes="(min-width: 1024px) 560px, 90vw" className="object-cover" priority />
        </Reveal>
      </section>

      <section id="course-list" className="py-12 sm:py-16" aria-labelledby="course-list-title">
        <Reveal>
          <p className="home-eyebrow">3 LỘ TRÌNH CHÍNH</p>
          <h2 id="course-list-title" className="mt-3 type-h2">Chọn khóa theo mục tiêu đầu vào</h2>
        </Reveal>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {courses.map((course, index) => (
            <Reveal key={course.href} delay={index * 80}>
              <article className="group h-full overflow-hidden rounded-[var(--radius-sm)] border border-[var(--color-line)] bg-white shadow-[var(--shadow-header)] transition duration-200 hover:-translate-y-1 hover:border-[var(--color-brand-red)] hover:shadow-[var(--shadow-menu)]">
                <Link href={course.href} className="flex h-full flex-col focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-brand-red)]">
                  <div className="relative aspect-[1.25/1] overflow-hidden bg-[#eff8ff] p-3">
                    <div className="relative h-full w-full overflow-hidden rounded-[var(--radius-sm)] bg-white/70">
                      <Image src={course.image} alt={`Không gian học ${course.title} tại Crown English`} fill sizes="(min-width: 1024px) 360px, 90vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                    </div>
                    <div className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 shadow-[var(--shadow-header)]">
                      <p className="type-label text-[var(--color-brand-red)]">{course.levels.length} cấp độ</p>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="type-h3 text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-brand-red)]">{course.title}</h3>
                    <p className="mt-4 type-body text-[var(--color-ink-muted)]">{course.description}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {course.levels.map((level) => (
                        <li key={level} className="rounded-full border border-[var(--color-line)] bg-white px-3 py-1 type-label text-[var(--color-ink-muted)]">{level}</li>
                      ))}
                    </ul>
                    <span className="mt-auto inline-flex pt-6 type-button text-[var(--color-brand-red)]">
                      Xem chi tiết
                      <ArrowRight aria-hidden="true" className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
                    </span>
                  </div>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CoursesAchievements data={achievements} />

      <CoursesLearningFormats data={learningFormats} />
    </Container>
  );
}

export default function CourseLandingPage({ data }: CourseDataProps) {
  const levels = data.id === "ielts" ? [] : data.levels ?? data.personalizedRoadmap ?? [];
  const description = getCourseDescription(data);
  const methodParagraphs = data.method ? asList(data.method.description).concat(data.method.paragraphs ?? []) : [];
  const hasClassTypes = data.classTypes && Object.keys(data.classTypes).length > 0;

  return (
    <article>
        <section className="w-full bg-white py-12 sm:py-16 lg:py-20" aria-labelledby="course-title">
          <Container className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
            <div>
              <Reveal>
                <p className="home-eyebrow">{data.hero.eyebrow || "KHÓA HỌC CROWN ENGLISH"}</p>
                <h1 id="course-title" className="mt-4 type-h1">
                  <CourseHeroTitle data={data} />
                </h1>
              </Reveal>
              <Reveal delay={90}>
                <p className="mt-6 max-w-2xl type-body-lg text-[var(--color-ink-muted)]">
                  {description}
                </p>
              </Reveal>
              <Reveal delay={150} className="mt-7 flex flex-wrap gap-3">
                <Button href="/lien-he">
                  Đăng ký tư vấn ngay
                  <ArrowRight aria-hidden="true" size={18} />
                </Button>
                <Button href="#lo-trinh" variant="outline">Xem lộ trình học</Button>
              </Reveal>
              <Reveal delay={220}>
                <CourseHeroStats data={data} />
              </Reveal>
            </div>
            <Reveal preset="image" className="relative min-h-[340px] overflow-hidden rounded-[var(--radius-sm)] bg-[var(--color-surface-soft)] lg:min-h-[470px]">
              <span aria-hidden="true" className="absolute left-[-18px] top-14 z-10 grid gap-1.5">
                <span className="block h-1.5 w-9 rotate-[-24deg] rounded-full bg-[var(--color-brand-red)]" />
                <span className="block h-1.5 w-7 rotate-[-8deg] rounded-full bg-[var(--color-brand-red)]" />
                <span className="block h-1.5 w-5 rotate-[12deg] rounded-full bg-[var(--color-brand-red)]" />
              </span>
              <Image src={getCourseImage(data)} alt={`Lớp học ${data.hero.title} tại Crown English`} fill sizes="(min-width: 1024px) 520px, 90vw" className="object-cover" priority />
              {data.hero.badge && (
                <div className="absolute bottom-5 right-5 max-w-[220px] rounded-full bg-white px-5 py-4 shadow-[var(--shadow-menu)]">
                  <p className="type-small font-bold text-[var(--color-ink)]">{data.hero.badge.title}</p>
                  <p className="type-label text-[var(--color-brand-red)]">{data.hero.badge.description}</p>
                </div>
              )}
              {data.hero.proofCard && (
                <div className="absolute bottom-5 left-5 z-10 grid max-w-[280px] grid-cols-[72px_1fr] gap-3 rounded-[var(--radius-sm)] border border-white/80 bg-white/95 p-3 shadow-[var(--shadow-menu)] backdrop-blur sm:bottom-6 sm:left-6">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-sm)] bg-[var(--color-surface-soft)]">
                    <Image
                      src={data.hero.proofCard.image}
                      alt={data.hero.proofCard.alt}
                      fill
                      sizes="72px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="min-w-0 self-center">
                    <p className="type-label text-[var(--color-brand-red)]">{data.hero.proofCard.eyebrow}</p>
                    <p className="mt-1 type-h4 text-[var(--color-ink)]">{data.hero.proofCard.title}</p>
                    <p className="mt-1 type-small text-[var(--color-ink-muted)]">{data.hero.proofCard.description}</p>
                  </div>
                </div>
              )}
            </Reveal>
          </Container>
        </section>

        <CourseAudienceSection data={data} />

        <CourseHighlightsSection data={data} />

        <CourseRoadmap items={data.roadmap} courseTitle={data.hero.title} />

        {hasClassTypes && (
          <div className="w-full bg-white">
            <Container>
              <CourseTuitionSection data={data} />
            </Container>
          </div>
        )}

        <Container className="pb-16 sm:pb-20">
        {levels.length > 0 && (
          <section className="py-16 sm:py-20" aria-labelledby="levels-title">
            <Reveal>
              <p className="home-eyebrow">CHI TIẾT TRÌNH ĐỘ</p>
              <h2 id="levels-title" className="mt-3 max-w-3xl type-h2">Mỗi đầu vào có một mục tiêu học rõ ràng</h2>
            </Reveal>
            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              {levels.map((level, index) => {
                const title = getLevelTitle(level);
                return (
                  <Reveal key={level.id ?? title} delay={index * 60}>
                    <article className="h-full rounded-[var(--radius-sm)] border border-[var(--color-line)] bg-white p-5">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <p className="type-label text-[var(--color-brand-red)]">{level.range ?? level.sessions ?? "Theo đầu vào"}</p>
                          <h3 className="mt-2 type-h3">{title}</h3>
                        </div>
                        {(level.tuition || level.priceAfter18) && <p className="rounded-full bg-[var(--color-surface-soft)] px-3 py-1 type-small font-bold text-[var(--color-brand-red)]">{level.tuition ?? `Từ ${level.priceBefore18}`}</p>}
                      </div>
                      {(level.duration || level.sessions) && <p className="mt-4 type-small font-semibold text-[var(--color-ink)]">{level.duration ?? level.sessions}</p>}
                      {level.suitableFor && <p className="mt-4 type-small text-[var(--color-ink-muted)]">{level.suitableFor}</p>}
                      {level.entryRequirement && <p className="mt-4 rounded-[var(--radius-sm)] bg-[var(--color-surface-soft)] p-3 type-small text-[var(--color-ink-muted)]">{level.entryRequirement}</p>}
                      <ul className="mt-5 space-y-3">
                        {asList(level.content).slice(0, 5).map((item) => (
                          <li key={item} className="type-small text-[var(--color-ink-muted)]">{item}</li>
                        ))}
                      </ul>
                      {[...asList(level.detail), ...asList(level.refund), ...asList(level.benefits)].length > 0 && (
                        <details className="mt-5 rounded-[var(--radius-sm)] border border-[var(--color-line)] p-3">
                          <summary className="cursor-pointer type-small font-bold text-[var(--color-brand-red)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-brand-red)]">Xem thêm chi tiết</summary>
                          <div className="mt-3 space-y-3">
                            {[...asList(level.detail), ...asList(level.refund), ...asList(level.benefits)].map((item) => (
                              <p key={item} className="type-small text-[var(--color-ink-muted)]">{item}</p>
                            ))}
                          </div>
                        </details>
                      )}
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </section>
        )}

        {methodParagraphs.length > 0 && (
          <section className="rounded-[var(--radius-sm)] bg-[var(--color-brand-red-dark)] p-6 text-white sm:p-8 lg:p-10" aria-labelledby="method-title">
            <Reveal>
              <p className="type-label text-white/80">PHƯƠNG PHÁP</p>
              <h2 id="method-title" className="mt-3 type-h2">{data.method?.title || "Phương pháp học"}</h2>
            </Reveal>
            <div className="mt-6 grid gap-5 lg:grid-cols-2">
              {methodParagraphs.map((paragraph) => (
                <p key={paragraph} className="type-small text-white/85">{paragraph}</p>
              ))}
            </div>
          </section>
        )}

        {data.schedule && data.schedule.length > 0 && (
          <section className="border-t border-[var(--color-line)] py-16" aria-labelledby="schedule-title">
            <Reveal>
              <p className="home-eyebrow">LƯU Ý LỊCH HỌC</p>
              <h2 id="schedule-title" className="mt-3 type-h2">Tốc độ học có thể linh hoạt</h2>
            </Reveal>
            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {data.schedule.map((item) => <p key={item} className="rounded-[var(--radius-sm)] bg-[var(--color-surface-soft)] p-4 type-small text-[var(--color-ink-muted)]">{item}</p>)}
            </div>
          </section>
        )}

        <section className="grid items-center gap-6 rounded-[var(--radius-sm)] border border-[var(--color-line)] bg-[var(--color-surface-soft)] p-6 sm:p-8 lg:grid-cols-[1fr_auto]" aria-labelledby="course-cta-title">
          <Reveal>
            <p className="home-eyebrow">TƯ VẤN LỘ TRÌNH</p>
            <h2 id="course-cta-title" className="mt-3 type-h2">{data.cta?.title || "Chưa chắc nên bắt đầu từ cấp độ nào?"}</h2>
            <p className="mt-4 max-w-2xl type-small text-[var(--color-ink-muted)]">{data.cta?.description || "Crown English có thể tư vấn đầu vào để chọn đúng lớp, đúng nhịp học và tối ưu chi phí trước khi đăng ký."}</p>
          </Reveal>
          <Reveal delay={100} className="flex flex-wrap gap-3 lg:justify-end">
            <Button href="/lien-he">{data.cta?.buttonLabel || "Đăng ký tư vấn"}</Button>
            <Button href="/khoa-hoc" variant="outline">Xem 3 khóa học</Button>
            <Link href="/cam-ket" className="inline-flex min-h-11 items-center type-small font-semibold text-[var(--color-brand-red)] underline-offset-4 hover:underline">Xem cam kết đầu ra</Link>
            <Link href="/hoc-vien" className="inline-flex min-h-11 items-center type-small font-semibold text-[var(--color-brand-red)] underline-offset-4 hover:underline">Xem kết quả học viên</Link>
          </Reveal>
        </section>
        </Container>
      </article>
  );
}
