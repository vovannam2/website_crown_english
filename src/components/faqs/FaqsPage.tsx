"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState, type FormEvent } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  ClipboardCheck,
  GraduationCap,
  Grid2X2,
  HelpCircle,
  Lightbulb,
  MessageCircleQuestion,
  Search,
  ShieldCheck,
  Sparkles,
  UserRound,
  UsersRound,
  WalletCards,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import styles from "./faqs.module.css";

import type {
  CategoryKey,
  CategoryMeta,
  FaqChipIconProps,
  FaqItem,
  FaqQuestionAnswerProps,
  FaqsPageProps,
  FaqSpeechBubbleProps,
  FaqTeacherAvatarProps,
} from "@/types/faqs";

const MS_KHANH_HERO_IMAGE = "/images/design/ms-khanh-faq-hero.jpg";
const MS_KHANH_PORTRAIT_IMAGE = "/images/design/ms-khanh-white-outfit-portrait.jpg";
const MS_KHANH_FEATURED_IMAGE_1 = "/images/design/ms-khanh-white-shirt-flowers.jpg";
const MS_KHANH_FEATURED_IMAGE_2 = "/images/design/ms-khanh-black-blazer-portrait.jpg";

const HERO_FAQ_IDS = [
  "qa-01-hoc-voi-ms-khanh",
  "qa-02-khong-the-theo-hoc-hoan-hoc-phi",
  "qa-09-uu-dai-khi-dang-ki-nhieu-khoa",
] as const;

const FEATURED_FAQ_ID = "qa-09-uu-dai-khi-dang-ki-nhieu-khoa";

const POLICY_FAQ_IDS = [
  "qa-11-dong-hoc-phi-theo-thang-hay-khoa",
  "qa-12-phi-hoc-thu-co-hoan-lai-khong",
  "qa-02-khong-the-theo-hoc-hoan-hoc-phi",
] as const;

const categoryMeta: Record<CategoryKey, CategoryMeta> = {
  all: {
    label: "Tất cả",
    shortLabel: "Tất cả",
    eyebrow: "Toàn bộ Q&A",
    icon: Grid2X2,
  },
  courses: {
    label: "Khóa học",
    shortLabel: "Khóa học",
    eyebrow: "Lộ trình & lớp học",
    icon: GraduationCap,
  },
  tuition: {
    label: "Học phí & ưu đãi",
    shortLabel: "Học phí",
    eyebrow: "Chi phí & ưu đãi",
    icon: WalletCards,
  },
  teachers: {
    label: "Giảng viên",
    shortLabel: "Giảng viên",
    eyebrow: "Đội ngũ đồng hành",
    icon: UsersRound,
  },
  registration: {
    label: "Đăng ký & học thử",
    shortLabel: "Đăng ký",
    eyebrow: "Trước khi vào lớp",
    icon: ClipboardCheck,
  },
  policy: {
    label: "Chính sách khác",
    shortLabel: "Chính sách",
    eyebrow: "Quy định hỗ trợ",
    icon: ShieldCheck,
  },
};

const categoryOrder: readonly CategoryKey[] = [
  "all",
  "courses",
  "tuition",
  "teachers",
  "registration",
  "policy",
];

function getCategoryKey(item: FaqItem): CategoryKey {
  switch (item.category) {
    case "tuition":
    case "promotion":
      return "tuition";
    case "teachers":
      return "teachers";
    case "trial-class":
      return "registration";
    case "refund-policy":
    case "commitment":
    case "student-support":
      return "policy";
    default:
      return "courses";
  }
}

function normalizeSearch(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase()
    .trim();
}

function answerText(item: FaqItem) {
  return item.answer.join("\n");
}

function getFaqById(items: readonly FaqItem[], id: string) {
  return items.find((item) => item.id === id);
}

function scrollToExplorer() {
  document
    .getElementById("faq-explorer")
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function ChipIcon({ category }: FaqChipIconProps) {
  const Icon = categoryMeta[category].icon;
  return <Icon aria-hidden size={18} strokeWidth={2.2} />;
}

function SpeechBubble({
  item,
  tone,
  className = "",
}: FaqSpeechBubbleProps) {
  return (
    <div
      className={`${styles.speechBubble} ${styles[`bubble${tone}`]} ${className}`}
    >
      <UserRound aria-hidden size={24} strokeWidth={2.3} />
      <span>{item.question}</span>
    </div>
  );
}

function TeacherAvatar({ className = "" }: FaqTeacherAvatarProps) {
  return (
    <span className={`${styles.teacherAvatar} ${className}`} aria-hidden="true">
      <Image
        src={MS_KHANH_PORTRAIT_IMAGE}
        alt=""
        fill
        sizes="72px"
        className={styles.teacherAvatarImage}
      />
    </span>
  );
}

function QuestionAnswer({
  item,
  compact = false,
}: FaqQuestionAnswerProps) {
  const speaker = item.speaker || "Crown English";

  return (
    <div
      className={`${styles.answerShell} ${compact ? styles.answerShellCompact : ""}`}
    >
      <div className={styles.questionBlock}>
        <span className={styles.badgeQ}>Q</span>
        <h3>{item.question}</h3>
      </div>

      <div className={styles.answerBlock}>
        <span className={styles.badgeA}>A</span>
        <div className={styles.answerCopy}>
          {item.answer.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className={styles.signature}>
        <TeacherAvatar />
        <div>
          <strong>{speaker}</strong>
          <span>Giảng viên Crown English</span>
        </div>
      </div>
    </div>
  );
}

export default function FaqsPage({ items }: FaqsPageProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryKey>("all");
  const [selectedId, setSelectedId] = useState<string>(HERO_FAQ_IDS[0]);
  const [openMobileId, setOpenMobileId] = useState<string>(HERO_FAQ_IDS[0]);

  const faqs = useMemo(
    () => items.filter((item) => item.question && item.answer.length > 0),
    [items],
  );
  const faqById = useMemo(
    () => new Map(faqs.map((item) => [item.id, item])),
    [faqs],
  );
  const heroFaqs = HERO_FAQ_IDS.map((id) => faqById.get(id)).filter(
    Boolean,
  ) as FaqItem[];
  const featuredFaq = getFaqById(faqs, FEATURED_FAQ_ID) ?? faqs[0];
  const policyFaqs = POLICY_FAQ_IDS.map((id) => getFaqById(faqs, id)).filter(
    Boolean,
  ) as FaqItem[];

  const categories = useMemo(
    () =>
      categoryOrder.filter(
        (key) =>
          key === "all" || faqs.some((item) => getCategoryKey(item) === key),
      ),
    [faqs],
  );

  const filteredFaqs = useMemo(() => {
    const searchNeedle = normalizeSearch(query);

    return faqs.filter((item) => {
      const matchesCategory =
        category === "all" || getCategoryKey(item) === category;
      if (!matchesCategory) return false;
      if (!searchNeedle) return true;

      const searchable = normalizeSearch(
        `${item.question} ${answerText(item)}`,
      );
      return searchable.includes(searchNeedle);
    });
  }, [category, faqs, query]);

  const selectedFaq =
    filteredFaqs.find((item) => item.id === selectedId) ?? filteredFaqs[0];
  const visibleMobileOpenId = filteredFaqs.some(
    (item) => item.id === openMobileId,
  )
    ? openMobileId
    : (selectedFaq?.id ?? "");
  const resultCountLabel = query
    ? `Tìm thấy ${filteredFaqs.length} câu hỏi`
    : `${filteredFaqs.length} câu hỏi`;

  function chooseCategory(nextCategory: CategoryKey, jump = false) {
    setCategory(nextCategory);
    if (jump) requestAnimationFrame(scrollToExplorer);
  }

  function chooseFaq(id: string) {
    setSelectedId(id);
    setOpenMobileId((current) => (current === id ? "" : id));
  }

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    scrollToExplorer();
  }

  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="faq-hero-title">
          <Container className={styles.heroInner}>
            <div className={styles.heroContent}>
            <p className={`hero-eyebrow-badge ${styles.eyebrow}`}>Question &amp; Answer</p>
            <h1 id="faq-hero-title" className={styles.heroTitle}>
              <span className={styles.heroLine}>Câu hỏi</span>
              <span className={styles.heroLine}>thường gặp về</span>
              <span className={`${styles.heroLine} ${styles.heroBrand}`}>Crown English</span>
            </h1>
            <p className={styles.heroDescription}>
              Giải đáp những thắc mắc phổ biến về khóa học, lộ trình, học phí,
              giảng viên và chính sách tại Crown English.
            </p>

            <form
              className={styles.searchForm}
              role="search"
              onSubmit={submitSearch}
            >
              <label className={styles.srOnly} htmlFor="faq-search">
                Tìm kiếm câu hỏi thường gặp
              </label>
              <Search aria-hidden size={22} strokeWidth={2.2} />
              <input
                id="faq-search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Bạn đang thắc mắc điều gì?"
                type="search"
              />
              <button type="submit" aria-label="Tìm câu hỏi">
                <ArrowRight aria-hidden size={22} strokeWidth={2.5} />
              </button>
            </form>

            <div className={styles.heroTopics} aria-label="Chủ đề câu hỏi">
              <p>Hoặc chọn chủ đề bạn quan tâm:</p>
              <div>
                {categories
                  .filter((item) => item !== "all")
                  .map((item) => (
                    <button
                      key={item}
                      type="button"
                      className={category === item ? styles.topicActive : ""}
                      onClick={() => chooseCategory(item, true)}
                    >
                      <ChipIcon category={item} />
                      {categoryMeta[item].label}
                    </button>
                  ))}
              </div>
            </div>
            </div>

            <div
            className={styles.heroVisual}
            aria-label="Ms. Khanh giải đáp câu hỏi học viên"
          >
            <div className={styles.heroImageWrap}>
              <Image
                src={MS_KHANH_HERO_IMAGE}
                alt="Ms. Khanh - giảng viên Crown English"
                fill
                priority
                sizes="(min-width: 1024px) 600px, 92vw"
                className={styles.heroImage}
              />
            </div>

            {heroFaqs[0] && (
              <SpeechBubble
                item={heroFaqs[0]}
                tone="blue"
                className={styles.heroBubbleOne}
              />
            )}
            {heroFaqs[1] && (
              <SpeechBubble
                item={heroFaqs[1]}
                tone="pink"
                className={styles.heroBubbleTwo}
              />
            )}
            {heroFaqs[2] && (
              <SpeechBubble
                item={heroFaqs[2]}
                tone="yellow"
                className={styles.heroBubbleThree}
              />
            )}

            <div
              className={`${styles.questionIcon} ${styles.questionIconOne}`}
              aria-hidden="true"
            >
              <HelpCircle size={28} strokeWidth={2.4} />
            </div>
            <div
              className={`${styles.questionIcon} ${styles.questionIconTwo}`}
              aria-hidden="true"
            >
              <MessageCircleQuestion size={30} strokeWidth={2.3} />
            </div>
            <div
              className={`${styles.questionIcon} ${styles.questionIconThree}`}
              aria-hidden="true"
            >
              <Search size={26} strokeWidth={2.4} />
            </div>

            <Lightbulb
              aria-hidden
              className={`${styles.doodle} ${styles.doodleBulb}`}
              size={54}
              strokeWidth={2.1}
            />
            <Sparkles
              aria-hidden
              className={`${styles.doodle} ${styles.doodleSpark}`}
              size={42}
              strokeWidth={2.2}
            />
            <ArrowUpRight
              aria-hidden
              className={`${styles.doodle} ${styles.doodleArrow}`}
              size={48}
              strokeWidth={2.2}
            />
            </div>
          </Container>
      </section>

      <section
        id="faq-explorer"
        className={styles.explorer}
        aria-labelledby="faq-list-title"
      >
        <Container>
          <div className={styles.explorerHeader}>
            <Reveal>
              <p className={styles.sectionEyebrow}>Giải đáp cùng Crown</p>
              <h2 id="faq-list-title">
                <span className={styles.explorerTitleLine}>Mọi điều bạn muốn biết</span>
                <span className={styles.explorerTitleLine}>về Crown English</span>
              </h2>
              <p>
                Chọn chủ đề, tìm nhanh bằng từ khóa và xem câu trả lời ngay bên
                cạnh.
              </p>
            </Reveal>

            <Reveal
              className={styles.filterPills}
              delay={100}
              aria-label="Lọc câu hỏi theo chủ đề"
            >
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  aria-pressed={category === item}
                  className={category === item ? styles.filterActive : ""}
                  onClick={() => chooseCategory(item)}
                >
                  <ChipIcon category={item} />
                  {categoryMeta[item].label}
                </button>
              ))}
            </Reveal>
          </div>

          <Reveal className={styles.resultBar}>
            <span>{resultCountLabel}</span>
            {category !== "all" && (
              <span>{categoryMeta[category].eyebrow}</span>
            )}
          </Reveal>

          {filteredFaqs.length > 0 ? (
            <>
              <div className={styles.desktopFaqGrid}>
                <div className={styles.questionListFrame}>
                  <div className={styles.questionList} aria-label="Danh sách câu hỏi">
                    {filteredFaqs.map((item, index) => (
                      <Reveal key={item.id} delay={Math.min(index, 5) * 55}>
                        <button
                          type="button"
                          className={
                            selectedFaq?.id === item.id ? styles.questionActive : ""
                          }
                          aria-pressed={selectedFaq?.id === item.id}
                          onClick={() => chooseFaq(item.id)}
                        >
                          <span>{String(index + 1).padStart(2, "0")}</span>
                          <strong>{item.question}</strong>
                          <ChevronRight aria-hidden size={20} strokeWidth={2.3} />
                        </button>
                      </Reveal>
                    ))}
                  </div>
                </div>

                <Reveal className={styles.detailPanel} delay={100} aria-live="polite">
                  <div className={styles.detailScroll}>
                    {selectedFaq && (
                      <div key={selectedFaq.id} className={styles.answerMotion}>
                        <QuestionAnswer item={selectedFaq} />
                      </div>
                    )}
                  </div>
                </Reveal>
              </div>

              <div className={styles.mobileAccordion}>
                {filteredFaqs.map((item, index) => {
                  const open = visibleMobileOpenId === item.id;
                  const answerId = `answer-${item.id}`;
                  return (
                    <Reveal key={item.id} delay={Math.min(index, 5) * 55}>
                      <article className={open ? styles.mobileItemOpen : ""}>
                        <button
                          type="button"
                          aria-expanded={open}
                          aria-controls={answerId}
                          onClick={() => chooseFaq(item.id)}
                        >
                          <span>{String(index + 1).padStart(2, "0")}</span>
                          <strong>{item.question}</strong>
                          <ChevronRight aria-hidden size={20} strokeWidth={2.3} />
                        </button>
                        {open && (
                          <div id={answerId} className={styles.mobileAnswer}>
                            <QuestionAnswer item={item} compact />
                          </div>
                        )}
                      </article>
                    </Reveal>
                  );
                })}
              </div>
            </>
          ) : (
            <Reveal className={styles.emptyState}>
              <MessageCircleQuestion aria-hidden size={44} strokeWidth={2.1} />
              <h3>Chưa tìm thấy câu hỏi phù hợp</h3>
              <p>Thử tìm với từ khóa khác hoặc liên hệ Crown để được hỗ trợ.</p>
              <Button href="/lien-he">Đăng ký tư vấn</Button>
            </Reveal>
          )}
        </Container>
      </section>

      {featuredFaq && (
        <section
          className={styles.featuredConversation}
          aria-labelledby="featured-faq-title"
        >
          <Container className={styles.featuredInner}>
            <Reveal className={styles.conversationHeading}>
              <p className={styles.sectionEyebrow}>Câu hỏi được quan tâm</p>
              <h2 id="featured-faq-title">
                Một cuộc trò chuyện ngắn với Crown
              </h2>
            </Reveal>

            <Reveal className={styles.conversationCopy}>
              <div className={styles.chatStack}>
                <div className={styles.chatQuestion}>
                  <span>Q</span>
                  <p>{featuredFaq.question}</p>
                </div>
                <div className={styles.chatAnswer}>
                  <span>A</span>
                  {featuredFaq.answer.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal className={styles.featuredVisual} preset="image" delay={120} aria-hidden>
              <Image
                src={MS_KHANH_FEATURED_IMAGE_2}
                alt=""
                fill
                sizes="(min-width: 1024px) 420px, 86vw"
                className={styles.featuredImage}
              />
              <Lightbulb
                className={styles.featuredBulb}
                size={58}
                strokeWidth={2.2}
              />
            </Reveal>
          </Container>
        </section>
      )}

      {policyFaqs.length > 0 && (
        <section
          className={styles.infoStrip}
          aria-labelledby="info-strip-title"
        >
          <Container>
            <Reveal className={styles.infoHeader}>
              <p className={styles.sectionEyebrow}>Thông tin cần nhớ</p>
              <h2 id="info-strip-title">Một vài chính sách được hỏi nhiều</h2>
            </Reveal>
            <div className={styles.infoGrid}>
              {policyFaqs.map((item, index) => (
                <Reveal key={item.id} delay={index * 80}>
                  <article>
                    <span>{categoryMeta[getCategoryKey(item)].shortLabel}</span>
                    <h3>{item.question}</h3>
                    <p>{item.answer[0]}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className={styles.ctaSection} aria-labelledby="faq-cta-title">
        <Container>
          <Reveal className={styles.ctaCard}>
            <div className={styles.ctaCopy}>
              <p className={styles.sectionEyebrow}>Crown English</p>
              <h2 id="faq-cta-title">
                Vẫn còn <span>thắc mắc?</span>
              </h2>
              <p>
                Đừng ngần ngại! Trò chuyện trực tiếp với đội ngũ Crown để được
                giải đáp nhanh và chính xác nhất.
              </p>
              <Button href="/lien-he" className={styles.ctaButton}>
                Đăng ký tư vấn ngay
                <ArrowRight aria-hidden size={18} strokeWidth={2.4} />
              </Button>
              <Link href="/khoa-hoc" className="ml-5 inline-flex min-h-11 items-center font-semibold text-[var(--color-brand-red)] underline-offset-4 hover:underline">Xem các khóa học</Link>
            </div>

            <div className={styles.ctaVisual} aria-hidden="true">
              <Image
                src={MS_KHANH_FEATURED_IMAGE_1}
                alt=""
                fill
                sizes="(min-width: 1024px) 500px, 90vw"
                className={styles.ctaImage}
              />
              {getFaqById(faqs, "qa-17-lo-trinh-mat-goc-den-6-5") && (
                <SpeechBubble
                  item={getFaqById(faqs, "qa-17-lo-trinh-mat-goc-den-6-5")!}
                  tone="blue"
                  className={styles.ctaBubbleBlue}
                />
              )}
              {getFaqById(
                faqs,
                "qa-19-vi-sao-hoc-phi-re-hon-trung-tam-khac",
              ) && (
                <SpeechBubble
                  item={
                    getFaqById(
                      faqs,
                      "qa-19-vi-sao-hoc-phi-re-hon-trung-tam-khac",
                    )!
                  }
                  tone="yellow"
                  className={styles.ctaBubbleYellow}
                />
              )}
              <HelpCircle
                className={styles.ctaDoodle}
                size={48}
                strokeWidth={2.2}
              />
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
