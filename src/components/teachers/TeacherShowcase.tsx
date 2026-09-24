"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import SectionTitle from "@/components/ui/SectionTitle";
import TeacherDetail from "./TeacherDetail";
import type { Teacher } from "@/types/teachers";
import TeacherImage from "./TeacherImage";

const PAGE_SIZE = 9;
const pageButtonClass = "inline-flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-[var(--color-line)] bg-white text-sm transition-colors enabled:hover:border-[var(--color-brand-red)] disabled:cursor-not-allowed disabled:opacity-40 aria-[current=page]:border-[var(--color-brand-red)] aria-[current=page]:bg-[var(--color-brand-red)] aria-[current=page]:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-brand-red)]";

export default function TeacherShowcase({ teachers }: { teachers: readonly Teacher[] }) {
  const [selectedId, setSelectedId] = useState<string | undefined>(teachers[0]?.id);
  const [page, setPage] = useState(1);
  const pageCount = Math.ceil(teachers.length / PAGE_SIZE);
  const currentPage = Math.min(page, Math.max(1, pageCount));
  const selected = teachers.find((teacher) => teacher.id === selectedId) ?? teachers[0];
  if (!selected) return null;

  return <section id="teacher-showcase" className="scroll-mt-[120px] pt-6 pb-20">
    <SectionTitle eyebrow="CROWN ENGLISH" title="Đội ngũ giảng viên" />
    <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] lg:gap-10">
      <div className="min-w-0 lg:col-start-2 lg:row-start-1">
        <div className="flex items-baseline justify-between gap-4 border-b border-[var(--color-line)] pb-4 [&>h3]:text-base [&>h3]:font-bold [&>span]:text-[13px] [&>span]:text-[var(--color-ink-muted)]"><h3>Tất cả giáo viên</h3><span>{teachers.length} giảng viên</span></div>
        <p className="mt-3 mb-5 text-[13px] text-[var(--color-ink-muted)]">Chọn giảng viên để xem hồ sơ chi tiết.</p>
        <ul className="-mx-1 flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pt-1 pb-4 lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:p-0">
          {teachers.map((teacher, index) => <li key={teacher.id} className={`w-[160px] shrink-0 snap-start lg:w-auto lg:max-w-none ${Math.floor(index / PAGE_SIZE) + 1 === currentPage ? "" : "lg:hidden"}`}>
            <button type="button" className="group block h-full w-full cursor-pointer overflow-hidden rounded-2xl border border-[var(--color-line)] bg-white px-3 py-5 text-center lg:rounded-[var(--radius-md)] lg:p-0 lg:text-left transition-[transform,border-color,box-shadow] duration-200 hover:border-[var(--color-brand-red)] hover:shadow-[0_8px_20px_rgb(35_35_35/0.06)] motion-safe:hover:-translate-y-[3px] aria-pressed:border-[var(--color-brand-red)] aria-pressed:ring-1 aria-pressed:ring-[var(--color-brand-red)] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-brand-red-dark)] motion-reduce:transition-none" aria-pressed={selected.id === teacher.id} aria-controls="teacher-profile" aria-label={`Xem hồ sơ ${teacher.name}`} onClick={() => setSelectedId(teacher.id)}>
              <div className="mx-auto size-16 overflow-hidden rounded-full border border-[var(--color-line)] [&>div]:h-full [&>div]:aspect-square lg:size-auto lg:rounded-none lg:border-0 lg:[&>div]:h-auto lg:[&>div]:aspect-[4/5]"><TeacherImage src={teacher.image} name={teacher.name} sizes="(min-width: 1200px) 200px, (min-width: 1024px) 19vw, 64px" /></div>
              <span className="mt-4 block min-h-10 text-sm font-semibold lg:mx-3 lg:mt-3 lg:min-h-0 lg:text-[15px] lg:font-bold [overflow-wrap:anywhere]">{teacher.name}</span>
              <span className="mx-3 mt-[5px] mb-3 hidden justify-between lg:flex gap-2 text-xs text-[var(--color-ink-muted)] group-aria-pressed:text-[var(--color-brand-red)]">{selected.id === teacher.id ? "Đang xem" : "Xem hồ sơ"}<span aria-hidden="true">↗</span></span>
            </button>
          </li>)}
        </ul>
        {pageCount > 1 && <nav className="mt-7 hidden flex-wrap justify-center gap-2 lg:flex" aria-label="Phân trang giảng viên">
          <button className={pageButtonClass} type="button" aria-label="Trang trước" disabled={currentPage === 1} onClick={() => setPage(currentPage - 1)}><ChevronLeft size={20} aria-hidden="true" /></button>
          {Array.from({ length: pageCount }, (_, index) => index + 1).map((number) => <button key={number} className={pageButtonClass} type="button" aria-label={`Trang ${number}`} aria-current={currentPage === number ? "page" : undefined} onClick={() => setPage(number)}>{number}</button>)}
          <button className={pageButtonClass} type="button" aria-label="Trang sau" disabled={currentPage === pageCount} onClick={() => setPage(currentPage + 1)}><ChevronRight size={20} aria-hidden="true" /></button>
        </nav>}
        <p className="mt-3 hidden text-center text-[13px] text-[var(--color-ink-muted)] lg:block" aria-live="polite" aria-atomic="true">Hiển thị {(currentPage - 1) * PAGE_SIZE + 1}–{Math.min(currentPage * PAGE_SIZE, teachers.length)} / {teachers.length} giảng viên</p>
      </div>
      <div id="teacher-profile" className="min-w-0 scroll-mt-[120px] lg:col-start-1 lg:row-start-1">
        <p className="sr-only" role="status" aria-atomic="true">Đang xem hồ sơ {selected.name}</p>
        <TeacherDetail key={selected.id} teacher={selected} />
      </div>
    </div>
  </section>;
}
