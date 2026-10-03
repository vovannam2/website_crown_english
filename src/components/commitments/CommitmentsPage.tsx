import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  CheckCircle2,
  ClipboardCheck,
  GraduationCap,
  MessageCircle,
  Target,
  TrendingUp,
  UserRoundCheck,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import HeroDecoration from "@/components/ui/HeroDecoration";
import Reveal from "@/components/ui/Reveal";
import type { CommitmentIconName, CommitmentIconBadgeProps, CommitmentSectionHeaderProps, CommitmentCheckListProps, CommitmentHeroVisualProps, CommitmentsPageProps } from "@/types/commitments";
import styles from "./commitments.module.css";

const iconMap = {
  book: BookOpenCheck,
  clipboard: ClipboardCheck,
  graduation: GraduationCap,
  message: MessageCircle,
  personal: UserRoundCheck,
  progress: TrendingUp,
  target: Target,
  users: UsersRound,
} satisfies Record<CommitmentIconName, LucideIcon>;

function IconBadge({ icon, className = "" }: CommitmentIconBadgeProps) {
  const Icon = iconMap[icon];

  return (
    <span className={`${styles.iconBadge} ${className}`} aria-hidden="true">
      <Icon size={24} strokeWidth={2.2} />
    </span>
  );
}

function SectionHeader({
  id,
  eyebrow,
  title,
  description,
}: CommitmentSectionHeaderProps) {
  return (
    <Reveal className={styles.sectionHeader}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {description && <p>{description}</p>}
      <span className={styles.titleRule} aria-hidden="true" />
    </Reveal>
  );
}

function CheckList({ items }: CommitmentCheckListProps) {
  return (
    <ul className={styles.checkList}>
      {items.map((item) => (
        <li key={item}>
          <CheckCircle2 aria-hidden="true" size={18} strokeWidth={2.4} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function renderTitle(title: string, accent: string) {
  const [before, after] = title.split(accent);

  if (!before || after === undefined) return title;

  return (
    <>
      {before}
      <span>{accent}</span>
      {after}
    </>
  );
}

function HeroVisual({ visual }: CommitmentHeroVisualProps) {
  return (
    <Reveal preset="image" delay={100} className={styles.heroVisual}>
      <HeroDecoration />
      <div className={styles.portraitCluster} aria-label="Đội ngũ giảng viên Crown English">
        {visual.portraits.map((portrait, index) => (
          <div
            key={portrait.image}
            className={`${styles.portraitCard} ${index === 1 ? styles.portraitCardMain : ""} ${index === 2 ? styles.portraitCardRight : ""}`}
          >
            <Image
              src={portrait.image}
              alt={portrait.alt}
              fill
              sizes="(min-width: 1200px) 250px, (min-width: 768px) 22vw, 44vw"
              className={styles.portraitImage}
              preload={index === 1}
            />
          </div>
        ))}
      </div>
    </Reveal>
  );
}

export default function CommitmentsPage({ data }: CommitmentsPageProps) {
  return (
    <article className={styles.page}>
      <section className={styles.hero} aria-labelledby="commitments-title">
        <Container className={styles.heroInner}>
          <div className={styles.heroHeading}>
            <Reveal>
              <p className="hero-eyebrow-badge">{data.hero.eyebrow}</p>
            </Reveal>
            <Reveal delay={80}>
              <h1 id="commitments-title">{renderTitle(data.hero.title, data.hero.accent)}</h1>
            </Reveal>
          </div>

          <HeroVisual visual={data.hero.visual} />

          <div className={styles.heroCopy}>
            <Reveal delay={140}>
              <p className={styles.heroDescription}>{data.hero.description}</p>
            </Reveal>
            <Reveal delay={200} className={styles.heroActions}>
              {data.hero.actions.map((action) => (
                <Button key={action.href} href={action.href} variant={action.variant} className={styles.heroButton}>
                  {action.label}
                  <ArrowRight aria-hidden="true" size={17} />
                </Button>
              ))}
            </Reveal>
          </div>

        </Container>
      </section>

      <section className={styles.promiseBand} aria-labelledby="promise-title">
        <Container className={styles.promiseInner}>
          <Reveal className={styles.promiseIntro}>
            <p className={styles.smallPill}>{data.mainCommitments.eyebrow}</p>
            <h2 id="promise-title">{data.mainCommitments.title}</h2>
            <span aria-hidden="true" />
          </Reveal>
          <div className={styles.promiseCards}>
            {data.mainCommitments.items.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <article className={styles.promiseCard}>
                  <IconBadge icon={item.icon} />
                  <p className={styles.cardNumber}>{item.number}</p>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.detailsSection} aria-labelledby="details-title">
        <Container>
          <SectionHeader id="details-title" eyebrow={data.details.eyebrow} title={data.details.title} />
          <div className={styles.detailGrid}>
            {data.details.items.map((item, index) => (
              <Reveal key={item.title} delay={index * 90}>
                <article className={styles.detailCard}>
                  <div className={styles.detailImage}>
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 520px, 94vw"
                      className={styles.detailPhoto}
                    />
                  </div>
                  <div className={styles.detailCopy}>
                    <IconBadge icon={item.icon} className={styles.detailIcon} />
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <CheckList items={item.bullets} />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.courseSection} aria-labelledby="course-commitments-title">
        <Container>
          <SectionHeader
            id="course-commitments-title"
            eyebrow={data.courseCommitments.eyebrow}
            title={data.courseCommitments.title}
            description={data.courseCommitments.description}
          />
          <div className={styles.courseGrid}>
            {data.courseCommitments.items.map((course, index) => (
              <Reveal key={course.href} delay={index * 80}>
                <article className={styles.courseCard}>
                  <Link href={course.href} className={styles.courseLink}>
                    <div className={styles.courseImage}>
                      <Image
                        src={course.image}
                        alt={course.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 94vw"
                        className={`${styles.coverImage} ${course.href === "/khoa-hoc/giao-tiep" ? styles.courseImageCommunication : ""} ${course.href === "/khoa-hoc/ielts-1-kem-1" ? styles.courseImageOneToOne : ""}`}
                      />
                    </div>
                    <div className={styles.courseCopy}>
                      <div className={styles.courseTitle}>
                        <IconBadge icon={course.icon} />
                        <h3>{course.title}</h3>
                      </div>
                      <CheckList items={course.bullets} />
                      <span className={styles.courseCta}>
                        Xem chi tiết
                        <ArrowRight aria-hidden="true" size={18} />
                      </span>
                    </div>
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className={styles.policyPanel}>
            <div className={styles.policyCopy}>
              <p className={styles.eyebrow}>{data.applicationPolicy.eyebrow}</p>
              <h2>{data.applicationPolicy.title}</h2>
              <CheckList items={data.applicationPolicy.conditions} />
            </div>
            <div className={styles.policySupport}>
              <p>{data.applicationPolicy.supportTitle}</p>
              <strong>24 buổi</strong>
              <span>{data.applicationPolicy.support}</span>
            </div>
          </Reveal>
        </Container>
      </section>

      <Container className={styles.ctaWrap}>
        <section className={styles.cta} aria-labelledby="commitments-cta-title">
          <Reveal>
            <p className={styles.eyebrow}>{data.cta.eyebrow}</p>
            <h2 id="commitments-cta-title">{data.cta.title}</h2>
            <p>{data.cta.description}</p>
          </Reveal>
          <Reveal delay={100} className={styles.ctaAction}>
            <Button href={data.cta.href} className={styles.ctaButton}>
              {data.cta.buttonLabel}
              <ArrowRight aria-hidden="true" size={18} />
            </Button>
          </Reveal>
        </section>
      </Container>
    </article>
  );
}
