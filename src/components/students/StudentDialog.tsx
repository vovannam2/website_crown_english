"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { X } from "lucide-react";

export default function StudentDialog({ title, children, onClose, variant = "image" }: { title: string; children: ReactNode; onClose: () => void; variant?: "image" | "result" }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = ref.current;
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    dialog?.showModal();
    document.body.style.overflow = "hidden";
    return () => { dialog?.close(); document.body.style.overflow = overflow; previous?.focus(); };
  }, []);
  return <dialog ref={ref} role="dialog" aria-modal="true" aria-labelledby="student-dialog-title" onCancel={onClose} onClick={(event) => { if (event.target === event.currentTarget) { const box = event.currentTarget.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) onClose(); } }} className={variant === "result" ? "fixed inset-0 m-auto max-h-[95dvh] w-[calc(100%-24px)] max-w-[1200px] overflow-hidden rounded-[28px] bg-white p-0 text-[var(--color-ink)] shadow-xl backdrop:bg-black/60 backdrop:backdrop-blur-sm lg:max-h-[90dvh]" : "fixed inset-0 m-auto max-h-[90dvh] w-[calc(100%-32px)] max-w-5xl overflow-y-auto rounded-2xl bg-white p-5 text-[var(--color-ink)] shadow-xl backdrop:bg-black/55 sm:p-8"}>
    <div className={variant === "result" ? "flex h-[72px] items-center justify-between gap-4 border-b border-[var(--color-line)] px-5" : "mb-6 flex items-center justify-between gap-4"}><h2 id="student-dialog-title" className={variant === "result" ? "sr-only" : "text-xl font-bold sm:text-2xl"}>{title}</h2><button type="button" onClick={onClose} aria-label="Đóng chi tiết" autoFocus className="ml-auto flex size-11 shrink-0 items-center justify-center rounded-full border border-[var(--color-line)] hover:bg-[var(--color-surface-soft)] hover:text-[var(--color-brand-red)] focus-visible:outline-2 focus-visible:outline-[var(--color-brand-red)]"><X aria-hidden="true" /></button></div>
    {children}
  </dialog>;
}
