"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { ArrowUpRight, X } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import styles from "./HomeFeedbackBoard.module.css";

type FeedbackData = {
  readonly imageDirectory: string;
  readonly boardTexture: string;
  readonly year: number;
  readonly months: readonly { readonly month: number; readonly images: readonly string[] }[];
};

export default function HomeFeedbackBoard({ data }: { data: FeedbackData }) {
  const groups = [...data.months].filter((group) => group.images.length > 0).sort((a, b) => a.month - b.month);
  const feedbacks = groups.flatMap((group) => group.images.map((filename, index) => ({
    id: filename,
    month: group.month,
    src: `${data.imageDirectory.replace(/\/$/, "")}/${filename}`,
    label: `Cảm nhận học viên tháng ${group.month}/${data.year} · Bảng ${index + 1}`,
  })));
  const firstMonth = groups[0]?.month;
  const lastMonth = groups.at(-1)?.month;
  const singleMonth = firstMonth === lastMonth;
  const period = singleMonth ? `Tháng ${firstMonth}/${data.year}` : `Tháng ${firstMonth}–${lastMonth}/${data.year}`;
  const descriptionPeriod = singleMonth ? `trong tháng ${firstMonth}/${data.year}` : `từ tháng ${firstMonth} đến tháng ${lastMonth}/${data.year}`;
  const [selected, setSelected] = useState<(typeof feedbacks)[number] | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!selected) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [selected]);

  function openFeedback(feedback: (typeof feedbacks)[number]) {
    setSelected(feedback);
    dialog.current?.showModal();
  }

  if (!feedbacks.length) return null;

  return <section className={styles.section} aria-labelledby="feedback-heading">
    <Reveal className={styles.heading}>
      <div>
        <p className={styles.eyebrow}>NHỮNG LỜI NHẮN GỬI CROWN</p>
        <h3 id="feedback-heading">Bảng tin cảm nhận học viên</h3>
        <p>Gom lại những lời nhắn, cảm nhận và góp ý của học viên {descriptionPeriod}. Mỗi chia sẻ giúp Crown lắng nghe và chăm chút hơn cho từng buổi học.</p>
      </div>
      <span className={styles.date}>THÁNG {String(firstMonth).padStart(2, "0")}{!singleMonth && ` — ${String(lastMonth).padStart(2, "0")}`}<span>{data.year}</span></span>
    </Reveal>

    <Reveal delay={100} duration={750}>
    <div className={styles.board} style={{ "--board-texture": `url("${data.boardTexture}")` } as CSSProperties}>
      <div className={styles.boardTop}>
        <span className={styles.boardLabel}>GÓC NHỎ · LỜI THẬT</span>
        <p>{feedbacks.length} bảng cảm nhận · {period}</p>
      </div>
      <p className={styles.hint}>Chạm vào từng ảnh để đọc trọn lời nhắn.</p>
      <div id="feedback-posts" className={styles.grid}>
        {feedbacks.map((feedback) => <button type="button" key={feedback.id} className={styles.note} onClick={() => openFeedback(feedback)} aria-label={`Mở ${feedback.label.toLowerCase()}`} aria-haspopup="dialog">
          <span className={styles.pin} aria-hidden="true" />
          <span className={styles.image}>
            <Image src={feedback.src} alt={feedback.label} fill sizes="160px" />
          </span>
          <span className={styles.caption}><span>Tháng {String(feedback.month).padStart(2, "0")} / {data.year}</span><ArrowUpRight size={17} aria-hidden="true" /></span>
        </button>)}
      </div>
      <p className={styles.boardFooter}>Cảm ơn bạn đã chia sẻ một phần hành trình cùng Crown.</p>
    </div>
    </Reveal>

    <dialog ref={dialog} className={styles.dialog} aria-labelledby="feedback-dialog-title" onClose={() => setSelected(null)} onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
      <div className={styles.dialogHeader}>
        <h4 id="feedback-dialog-title">{selected?.label ?? "Cảm nhận học viên"}</h4>
        <button type="button" onClick={() => dialog.current?.close()} aria-label="Đóng ảnh cảm nhận"><X aria-hidden="true" size={24} /></button>
      </div>
      {selected && <div key={selected.id} className={styles.dialogBody}>
        <a href={selected.src} target="_blank" rel="noreferrer">Mở ảnh gốc để phóng to ↗</a>
        <Image src={selected.src} alt={selected.label} width={1080} height={1920} unoptimized className={styles.fullImage} />
      </div>}
    </dialog>
  </section>;
}
