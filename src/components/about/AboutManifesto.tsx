import { Fragment, type CSSProperties } from "react";
import { ArrowRight, BookOpen, Pencil, MessageCircle, TrendingUp } from "lucide-react";
import { aboutPageData } from "@/data/about";
import ManifestoMotion from "./ManifestoMotion";
import styles from "./AboutManifesto.module.css";

const microcopy = ["Loại bỏ phần học dư thừa.", "Tập trung đúng mục tiêu.", "Rõ lộ trình, rõ tiến độ."];
const learningFlow = [
  { label: "LEARN", icon: BookOpen },
  { label: "PRACTICE", icon: Pencil },
  { label: "FEEDBACK", icon: MessageCircle },
  { label: "PROGRESS", icon: TrendingUp },
];

export default function AboutManifesto() {
  const data = aboutPageData.manifesto;
  return (
    <section id="manifesto" className={styles.section} aria-labelledby="manifesto-title">
      <ManifestoMotion>
        <div className={styles.board} data-board style={{ "--board-texture": `url("${data.boardTexture}")` } as CSSProperties}>
          <header className={styles.boardHeader} data-board-label>
            <div className={styles.label}><span className={styles.labelPin} aria-hidden="true" />{data.eyebrow}</div>
            <span className={styles.boardCaption}>CROWN LEARNING PATH</span>
          </header>
          <h2 id="manifesto-title" className={styles.srOnly}>{data.words.join(" ")}</h2>
          <ol className={styles.notices}>
            {data.words.map((word, index) => (
              <li key={word} className={styles.pathStep}>
                <div className={styles.noticeReveal} data-board-note>
                  <article className={styles.notice}>
                    <span className={styles.pin} aria-hidden="true" />
                    <span className={styles.noticeNumber}>{String(index + 1).padStart(2, "0")}</span>
                    <h3 className={styles.word}>{word}</h3>
                    <p className={styles.translation} lang="en">{data.translations[index]}</p>
                    <span className={styles.rule} aria-hidden="true" />
                    <p className={styles.microcopy}>{microcopy[index]}</p>
                  </article>
                </div>
                {index < data.words.length - 1 && (
                  <svg className={styles.connector} viewBox="0 0 60 24" fill="none" aria-hidden="true">
                    <path data-board-path pathLength="1" d="M2 14 C18 5 33 19 55 10 M49 5 L56 10 L50 17" />
                  </svg>
                )}
              </li>
            ))}
          </ol>
          <div className={styles.messageReveal} data-board-statement>
            <div className={styles.message}>
              <span className={styles.tape} aria-hidden="true" />
              <p>{data.description}</p>
              <span className={styles.statementUnderline} aria-hidden="true" />
              <span className={styles.signature}>CROWN ENGLISH / LEARNING PATH</span>
            </div>
          </div>
          <div className={styles.learningFlow} data-board-flow aria-label="Quy trình: Học, thực hành, nhận phản hồi, tiến bộ">
            {learningFlow.map(({ label, icon: Icon }, index) => (
              <Fragment key={label}>
                {index > 0 && <ArrowRight className={styles.flowArrow} size={14} aria-hidden="true" />}
                <span lang="en"><Icon size={16} strokeWidth={1.5} aria-hidden="true" />{label}</span>
              </Fragment>
            ))}
          </div>
        </div>
      </ManifestoMotion>
    </section>
  );
}
