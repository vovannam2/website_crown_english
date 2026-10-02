"use client";

import Image from "next/image";
import { useMemo, useState, type ComponentType, type FormEvent } from "react";
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
import styles from "./faqs.module.css";

type FaqItem = {
  readonly id: string;
  readonly question: string;
  readonly answer: readonly string[];
  readonly category?: string;
  readonly speaker?: string;
  readonly sourceImage?: string;
  readonly needsReview?: boolean;
};

type CategoryKey = "all" | "courses" | "tuition" | "teachers" | "registration" | "policy";

type CategoryMeta = {
  readonly label: string;
  readonly shortLabel: string;
  readonly eyebrow: string;
  readonly icon: ComponentType<{ size?: number; strokeWidth?: number; "aria-hidden"?: boolean }>;
};

type FaqsPageProps = {
  readonly items: readonly FaqItem[];
};

const MS_KHANH_HERO_IMAGE = "/images/Design/ChiKhanh5.jpg";
const MS_KHANH_PORTRAIT_IMAGE = "/images/Design/ChiKhanh4.jpg";
const MS_KHANH_FEATURED_IMAGE = "/images/Design/ChiKhanh2.jpg";

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

const categoryOrder: readonly CategoryKey[] = ["all", "courses", "tuition", "teachers", "registration", "policy"];

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
  document.getElementById("faq-explorer")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function ChipIcon({ category }: { category: CategoryKey }) {
  const Icon = categoryMeta[category].icon;
  return <Icon aria-hidden size={18} strokeWidth={2.2} />;
}

function SpeechBubble({
  item,
  tone,
  className = "",
}: {
  item: FaqItem;
  tone: "blue" | "pink" | "yellow";
  className?: string;
}) {
  return (
    <div className={`${styles.speechBubble} ${styles[`bubble${tone}`]} ${className}`}>
      <UserRound aria-hidden size={24} strokeWidth={2.3} />
      <span>{item.question}</span>
    </div>
  );
}

function TeacherAvatar({ className = "" }: { className?: string }) {
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
}: {
  item: FaqItem;
  compact?: boolean;
}) {
  const speaker = item.speaker || "Crown English";

  return (
    <div className={`${styles.answerShell} ${compact ? styles.answerShellCompact : ""}`}>
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

  const faqs = useMemo(() => items.filter((item) => item.question && item.answer.length > 0), [items]);
  const faqById = useMemo(() => new Map(faqs.map((item) => [item.id, item])), [faqs]);
  const heroFaqs = HERO_FAQ_IDS.map((id) => faqById.get(id)).filter(Boolean) as FaqItem[];
  const featuredFaq = getFaqById(faqs, FEATURED_FAQ_ID) ?? faqs[0];
  const policyFaqs = POLICY_FAQ_IDS.map((id) => getFaqById(faqs, id)).filter(Boolean) as FaqItem[];

  const categories = useMemo(
    () =>
      categoryOrder.filter((key) => key === "all" || faqs.some((item) => getCategoryKey(item) === key)),
    [faqs],
  );

  const filteredFaqs = useMemo(() => {
    const searchNeedle = normalizeSearch(query);

    return faqs.filter((item) => {
      const matchesCategory = category === "all" || getCategoryKey(item) === category;
      if (!matchesCategory) return false;
      if (!searchNeedle) return true;

      const searchable = normalizeSearch(`${item.question} ${answerText(item)}`);
      return searchable.includes(searchNeedle);
    });
  }, [category, faqs, query]);

  const selectedFaq = filteredFaqs.find((item) => item.id === selectedId) ?? filteredFaqs[0];
  const visibleMobileOpenId = filteredFaqs.some((item) => item.id === openMobileId)
    ? openMobileId
    : selectedFaq?.id ?? "";
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
            <p className={styles.eyebrow}>Q &amp; A</p>
            <h1 id="faq-hero-title" className={styles.heroTitle}>
              Câu hỏi thường gặp <br />
              về <span>Crown English</span>
            </h1>
            <p className={styles.heroDescription}>
              Giải đáp những thắc mắc phổ biến về khóa học, lộ trình, học phí, giảng viên và chính sách tại Crown English.
            </p>

            <form className={styles.searchForm} role="search" onSubmit={submitSearch}>
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
                {categories.filter((item) => item !== "all").map((item) => (
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

          <div className={styles.heroVisual} aria-label="Ms. Khanh giải đáp câu hỏi học viên">
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

            {heroFaqs[0] && <SpeechBubble item={heroFaqs[0]} tone="blue" className={styles.heroBubbleOne} />}
            {heroFaqs[1] && <SpeechBubble item={heroFaqs[1]} tone="pink" className={styles.heroBubbleTwo} />}
            {heroFaqs[2] && <SpeechBubble item={heroFaqs[2]} tone="yellow" className={styles.heroBubbleThree} />}

            <div className={`${styles.questionIcon} ${styles.questionIconOne}`} aria-hidden="true">
              <HelpCircle size={28} strokeWidth={2.4} />
            </div>
            <div className={`${styles.questionIcon} ${styles.questionIconTwo}`} aria-hidden="true">
              <MessageCircleQuestion size={30} strokeWidth={2.3} />
            </div>
            <div className={`${styles.questionIcon} ${styles.questionIconThree}`} aria-hidden="true">
              <Search size={26} strokeWidth={2.4} />
            </div>

            <Lightbulb aria-hidden className={`${styles.doodle} ${styles.doodleBulb}`} size={54} strokeWidth={2.1} />
            <Sparkles aria-hidden className={`${styles.doodle} ${styles.doodleSpark}`} size={42} strokeWidth={2.2} />
            <ArrowUpRight aria-hidden className={`${styles.doodle} ${styles.doodleArrow}`} size={48} strokeWidth={2.2} />
          </div>
        </Container>
      </section>

      <section id="faq-explorer" className={styles.explorer} aria-labelledby="faq-list-title">
        <Container>
          <div className={styles.explorerHeader}>
            <div>
              <p className={styles.sectionEyebrow}>Giải đáp cùng Crown</p>
              <h2 id="faq-list-title">
                Mọi điều bạn muốn biết <br />
                về Crown English
              </h2>
              <p>Chọn chủ đề, tìm nhanh bằng từ khóa và xem câu trả lời ngay bên cạnh.</p>
            </div>

            <div className={styles.filterPills} aria-label="Lọc câu hỏi theo chủ đề">
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
            </div>
          </div>

          <div className={styles.resultBar}>
            <span>{resultCountLabel}</span>
            {category !== "all" && <span>{categoryMeta[category].eyebrow}</span>}
          </div>

          {filteredFaqs.length > 0 ? (
            <>
              <div className={styles.desktopFaqGrid}>
                <div className={styles.questionList} aria-label="Danh sách câu hỏi">
                  {filteredFaqs.map((item, index) => (
                    <button
                      key={item.id}
                      type="button"
                      className={selectedFaq?.id === item.id ? styles.questionActive : ""}
                      aria-pressed={selectedFaq?.id === item.id}
                      onClick={() => chooseFaq(item.id)}
                    >
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <strong>{item.question}</strong>
                      <ChevronRight aria-hidden size={20} strokeWidth={2.3} />
                    </button>
                  ))}
                </div>

                <div className={styles.detailPanel} aria-live="polite">
                  {selectedFaq && (
                    <div key={selectedFaq.id} className={styles.answerMotion}>
                      <QuestionAnswer item={selectedFaq} />
                    </div>
                  )}
                </div>
              </div>

              <div className={styles.mobileAccordion}>
                {filteredFaqs.map((item, index) => {
                  const open = visibleMobileOpenId === item.id;
                  const answerId = `answer-${item.id}`;
                  return (
                    <article key={item.id} className={open ? styles.mobileItemOpen : ""}>
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
                  );
                })}
              </div>
            </>
          ) : (
            <div className={styles.emptyState}>
              <MessageCircleQuestion aria-hidden size={44} strokeWidth={2.1} />
              <h3>Chưa tìm thấy câu hỏi phù hợp</h3>
              <p>Thử tìm với từ khóa khác hoặc liên hệ Crown để được hỗ trợ.</p>
              <Button href="/lien-he">Đăng ký tư vấn</Button>
            </div>
          )}
        </Container>
      </section>

      {featuredFaq && (
        <section className={styles.featuredConversation} aria-labelledby="featured-faq-title">
          <Container className={styles.featuredInner}>
            <div className={styles.conversationCopy}>
              <p className={styles.sectionEyebrow}>Câu hỏi được quan tâm</p>
              <h2 id="featured-faq-title">Một cuộc trò chuyện ngắn với Crown</h2>
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
            </div>

            <div className={styles.featuredVisual} aria-hidden="true">
              <Image
                src={MS_KHANH_FEATURED_IMAGE}
                alt=""
                fill
                sizes="(min-width: 1024px) 420px, 86vw"
                className={styles.featuredImage}
              />
              <Lightbulb className={styles.featuredBulb} size={58} strokeWidth={2.2} />
            </div>
          </Container>
        </section>
      )}

      {policyFaqs.length > 0 && (
        <section className={styles.infoStrip} aria-labelledby="info-strip-title">
          <Container>
            <div className={styles.infoHeader}>
              <p className={styles.sectionEyebrow}>Thông tin cần nhớ</p>
              <h2 id="info-strip-title">Một vài chính sách được hỏi nhiều</h2>
            </div>
            <div className={styles.infoGrid}>
              {policyFaqs.map((item) => (
                <article key={item.id}>
                  <span>{categoryMeta[getCategoryKey(item)].shortLabel}</span>
                  <h3>{item.question}</h3>
                  <p>{item.answer[0]}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className={styles.ctaSection} aria-labelledby="faq-cta-title">
        <Container>
          <div className={styles.ctaCard}>
            <div className={styles.ctaCopy}>
              <p className={styles.sectionEyebrow}>Crown English</p>
              <h2 id="faq-cta-title">
                Vẫn còn <span>thắc mắc?</span>
              </h2>
              <p>
                Đừng ngần ngại! Trò chuyện trực tiếp với đội ngũ Crown để được giải đáp nhanh và chính xác nhất.
              </p>
              <Button href="/lien-he" className={styles.ctaButton}>
                Đăng ký tư vấn ngay
                <ArrowRight aria-hidden size={18} strokeWidth={2.4} />
              </Button>
            </div>

            <div className={styles.ctaVisual} aria-hidden="true">
              <Image
                src={MS_KHANH_FEATURED_IMAGE}
                alt=""
                fill
                sizes="(min-width: 1024px) 500px, 90vw"
                className={styles.ctaImage}
              />
              {getFaqById(faqs, "qa-17-lo-trinh-mat-goc-den-6-5") && (
                <SpeechBubble item={getFaqById(faqs, "qa-17-lo-trinh-mat-goc-den-6-5")!} tone="blue" className={styles.ctaBubbleBlue} />
              )}
              {getFaqById(faqs, "qa-19-vi-sao-hoc-phi-re-hon-trung-tam-khac") && (
                <SpeechBubble item={getFaqById(faqs, "qa-19-vi-sao-hoc-phi-re-hon-trung-tam-khac")!} tone="yellow" className={styles.ctaBubbleYellow} />
              )}
              <HelpCircle className={styles.ctaDoodle} size={48} strokeWidth={2.2} />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
