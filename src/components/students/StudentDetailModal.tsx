import { Quote } from "lucide-react";
import type { StudentResult } from "@/types/student-results";
import StudentDialog from "./StudentDialog";
import StudentImage from "./StudentImage";

export default function StudentDetailModal({ student, onClose }: { student: StudentResult; onClose: () => void }) {
  return (
    <StudentDialog variant="result" title={`Thành tích của ${student.name} · ${student.exam} ${student.overall}`} onClose={onClose}>
      <div className="max-h-[calc(95dvh-72px)] overflow-y-auto overscroll-contain lg:grid lg:max-h-[calc(90dvh-72px)] lg:grid-cols-[minmax(0,0.57fr)_minmax(0,0.43fr)] lg:overflow-hidden">
        <div className="flex min-w-0 items-center justify-center bg-[#fafafa] p-4 sm:p-6 lg:p-8">
          <div className="relative h-[55dvh] max-h-[74dvh] w-full lg:h-[min(74dvh,calc(90dvh-136px))]">
            <StudentImage src={student.fullImage} alt={`Kết quả ${student.exam} ${student.overall} của ${student.name}`} sizes="(min-width: 1280px) 620px, (min-width: 1024px) 55vw, 90vw" />
          </div>
        </div>
        <div tabIndex={0} role="region" aria-label={`Thông tin và chia sẻ của ${student.name}`} className="min-w-0 p-5 focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-[var(--color-brand-red)] sm:p-8 lg:max-h-[calc(90dvh-72px)] lg:overflow-y-auto lg:overscroll-contain">
          <p className="text-xs font-bold tracking-[0.14em] text-[var(--color-brand-red)]">THÀNH TÍCH HỌC VIÊN</p>
          <h3 className="mt-3 text-[28px] font-bold leading-tight sm:text-4xl">{student.name}</h3>
          <div className="mt-5 inline-flex items-center gap-5 rounded-xl border border-[var(--color-line)] px-4 py-3">
            <span className="text-sm font-semibold text-[var(--color-ink-muted)]">{student.exam} Overall</span>
            <strong className="text-3xl leading-none text-[var(--color-brand-red)]">{student.overall}</strong>
          </div>
          {student.feedback && <section className="mt-8 border-t border-[var(--color-line)] pt-6">
            <div className="mb-4 flex items-center gap-3"><Quote size={20} className="shrink-0 text-[var(--color-brand-red)]" aria-hidden="true" /><h4 className="text-lg font-bold">Chia sẻ từ học viên</h4></div>
            <blockquote className="whitespace-pre-line text-[15px] leading-8 text-[var(--color-ink)] sm:text-base">{student.feedback}</blockquote>
          </section>}
        </div>
      </div>
    </StudentDialog>
  );
}
