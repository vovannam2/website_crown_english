import Link from "next/link";
import type { ReactNode } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { homePageData as data } from "@/data/home";
import { studentResultsPageData } from "@/data/student-results";
import { teachersPageData } from "@/data/teachers";
import HomeHero from "./HomeHero";
import HomeVisual from "./HomeVisual";
import HomeTeacherStage from "./HomeTeacherStage";
import HomeVideoTeaser from "./HomeVideoTeaser";
import HomeFeedbackBoard from "./HomeFeedbackBoard";
import styles from "./home.module.css";

function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return <Link className={styles.textLink} href={href}>{children}<span aria-hidden="true">↗</span></Link>;
}

function Heading({ eyebrow, title, description, link }: {
  eyebrow: string; title: string; description?: string; link?: { href: string; label: string };
}) {
  return <Reveal className={styles.heading}>
    <div><p className={styles.eyebrow}>{eyebrow}</p><h2>{title}</h2>{description && <p className={styles.description}>{description}</p>}</div>
    {link && <TextLink href={link.href}>{link.label}</TextLink>}
  </Reveal>;
}

export default function HomePage() {
  const results = data.studentResults.featuredIds.map((id) => studentResultsPageData.results.find((item) => item.id === id)).filter((item) => item !== undefined).slice(0, 3);
  const teachers = data.teachers.featuredIds.map((id) => teachersPageData.teachers.find((item) => item.id === id)).filter((item) => item !== undefined);
  const videos = data.studentStories.featuredVideoIds.map((id) => studentResultsPageData.videos.find((item) => item.id === id)).filter((item) => item !== undefined);
  const [investment, commitment, team, experience] = data.whyCrown.items;

  return <div className={styles.page} data-reveal-easing="ease">
    <HomeHero />

    <section className={styles.programs} id="programs">
      <Container>
        <Heading {...data.programsSection} />
        <div className={styles.programGrid}>
          {data.programs.map((program, index) => {
            const titleWords = program.label.split(" ");
            const titleLines = program.titleBreakAfter
              ? [titleWords.slice(0, program.titleBreakAfter).join(" "), titleWords.slice(program.titleBreakAfter).join(" ")]
              : [program.label];
            return <Reveal key={program.courseId} delay={80 + index * 100}>
              <Link className={styles.program} href={program.href} data-tone={program.tone}>
                <div className={styles.programIndex}><span>{program.category}</span><span>{program.number} / 03</span></div>
                <div className={styles.programContent}>
                  <h3>{titleLines.map((line) => <span key={line}>{line}</span>)}</h3>
                  <span className={styles.programNote}>{program.note}</span>
                  <p>{program.description}</p>
                </div>
                <span className={styles.programCta}>Khám phá khóa học<span aria-hidden="true">↗</span></span>
              </Link>
            </Reveal>;
          })}
        </div>
      </Container>
    </section>

    <section className={styles.results}>
      <Container>
        <Heading {...data.studentResults} />
      </Container>
      <Container>
        <Reveal delay={100} duration={750} className={styles.hallOfFame}>
          <span className={styles.hallWatermark} aria-hidden="true">HALL OF FAME</span>
          <div className={styles.hallHeader}>
            <div>
              <p className={styles.eyebrow}>{data.studentResults.hallOfFame.eyebrow}</p>
              <p>{data.studentResults.hallOfFame.description}</p>
            </div>
          </div>
          <div className={styles.hallImageFrame} tabIndex={0} aria-label="Bảng danh vọng học viên, có thể cuộn ngang trên màn hình nhỏ">
            <Image
              src={data.studentResults.hallOfFame.image}
              alt={data.studentResults.hallOfFame.alt}
              sizes="(min-width: 1200px) 1120px, (min-width: 760px) 90vw, 980px"
            />
          </div>
        </Reveal>
      </Container>
      <Container>
        <div className={styles.resultWall}>
          <span className={styles.resultsWord} aria-hidden="true">RESULTS</span>
          {results.map((result, index) => <Reveal key={result.id} delay={index * 100} className={styles.achievement}>
            <article>
              <strong className={styles.score}>{result.overall}<small>{result.exam}</small></strong>
              <div className={styles.resultImage}><Image src={result.fullImage} alt={`Kết quả IELTS của ${result.name}`} fill sizes="(min-width: 900px) 330px, 76vw" /></div>
              <h3>{result.name}</h3>
              {!!result.highlights.length && <ul className={styles.skillList}>{result.highlights.map((item) => <li key={item}>{item}</li>)}</ul>}
            </article>
          </Reveal>)}
        </div>
      </Container>
    </section>

    <section className={styles.why}>
      <Container>
        <Heading {...data.whyCrown} />
        <div className={styles.metrics}>
          <Reveal className={styles.investment}>
            <p>{investment.metric.prefix}</p>
            <strong>{investment.metric.value}</strong><small>{investment.metric.unit}</small>
            <h3>{investment.title}</h3><p className={styles.metricDescription}>{investment.description}</p>
          </Reveal>
          <Reveal delay={80} className={styles.commitment}>
            <div className={styles.session}><strong>{commitment.metric.value}</strong><span>{commitment.metric.unit}<small>{commitment.metric.detail}</small></span></div>
            <h3>{commitment.title}</h3><p className={styles.metricDescription}>{commitment.description}</p>
            <p className={styles.condition}>{commitment.note}</p><TextLink href={commitment.link.href}>{commitment.link.label}</TextLink>
          </Reveal>
        </div>
        <div className={styles.features}>
          <Reveal><article className={styles.teamFeature}>
            <div className={styles.featureImage}><HomeVisual src={team.image} alt={team.title} label={data.teachers.eyebrow} /></div>
            <h3>{team.title}</h3><p>{team.description}</p><TextLink href={team.link.href}>{team.link.label}</TextLink>
          </article></Reveal>
          <Reveal delay={100}><article className={styles.experienceFeature}>
            <div className={styles.featureWords}>{experience.keywords.map((word) => <strong key={word}>{word}</strong>)}</div>
            <h3>{experience.title}</h3><p>{experience.description}</p>
          </article></Reveal>
        </div>
      </Container>
    </section>

    <section className={styles.teachers}>
      <Container><Heading {...data.teachers} /><HomeTeacherStage teachers={teachers} label={data.teachers.eyebrow} /></Container>
    </section>

    <section className={styles.about}>
      <Container>
        <Heading
          eyebrow={data.about.eyebrow}
          title={data.about.title}
          description={data.about.description}
          link={data.about.link}
        />
        <div className={styles.aboutShowcase}>
          <Reveal duration={750} className={styles.aboutImage}><HomeVisual src={data.about.image} alt={data.about.title} label={data.hero.title} /></Reveal>
          <Reveal delay={120} className={styles.aboutValues}>
            <div className={styles.valuesHeading}>
              <span aria-hidden="true" />
              <p>GIÁ TRỊ CỐT LÕI</p>
            </div>
            <ul className={styles.keywords} aria-label="Giá trị cốt lõi của Crown English">
              {data.about.keywords.map((word, index) => <li key={word}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <strong>{word}</strong>
              </li>)}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>

    <section className={styles.stories}>
      <Container>
        <Heading eyebrow={data.studentStories.eyebrow} title={data.studentStories.title} description={data.studentStories.description} />
        <HomeVideoTeaser videos={videos} moreLink={data.studentStories.link} />
        <HomeFeedbackBoard data={data.studentStories.feedback} />
      </Container>
    </section>

    <section className={styles.cta}>
      <span className={styles.ctaWatermark} aria-hidden="true">CROWN</span>
      <Container>
        <Reveal><p className={styles.eyebrow}>{data.cta.eyebrow}</p><h2>{data.cta.title}</h2><p className={styles.description}>{data.cta.description}</p></Reveal>
        <div className={styles.actions}>
          <Reveal delay={100}><Button href={data.cta.primaryCta.href}>{data.cta.primaryCta.label}</Button></Reveal>
          <Reveal delay={200}><Button href={data.cta.secondaryCta.href} variant="outline">{data.cta.secondaryCta.label}</Button></Reveal>
        </div>
      </Container>
    </section>
  </div>;
}
