"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { navigationItems } from "@/data/navigation";
import Button from "@/components/ui/Button";
import { isActivePath as isActive } from "@/lib/navigation";

export default function MobileNavigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(isActive(pathname, "/khoa-hoc"));

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    const previousOverflow = document.body.style.overflow;
    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", closeOnEscape); document.body.style.overflow = previousOverflow; };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <div className="xl:hidden">
      <button type="button" className="icon-button" aria-label={open ? "Đóng menu" : "Mở menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)}>
        <span aria-hidden="true" className="flex flex-col gap-1.5">{[0, 1, 2].map((bar) => <span key={bar} className={`block h-0.5 w-5 bg-current transition-transform ${open && bar === 0 ? "translate-y-2" : ""} ${open && bar === 1 ? "opacity-0" : ""} ${open && bar === 2 ? "-translate-y-2" : ""}`} />)}</span>
      </button>
      {open && <button type="button" aria-label="Đóng menu" className="fixed inset-0 z-[90] bg-[var(--color-ink)]/30" onClick={closeMenu} />}
      <aside id="mobile-navigation" aria-label="Điều hướng di động" inert={!open} style={{ display: open ? undefined : "none" }} className={`fixed inset-y-0 right-0 z-[100] flex h-dvh max-h-dvh w-[min(88vw,280px)] flex-col overflow-hidden bg-white shadow-[var(--shadow-menu)] transition-transform duration-200 ${open ? "translate-x-0" : "pointer-events-none translate-x-full"}`}>
        <div className="flex h-[83px] shrink-0 items-center justify-between border-b border-[var(--color-line)] px-5"><span className="type-h4 text-[var(--color-ink)]">Menu</span><button type="button" className="icon-button" aria-label="Đóng menu" onClick={closeMenu}>×</button></div>
        <nav aria-label="Điều hướng di động" className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-4"><ul className="space-y-1 pb-4">
          {navigationItems.map((item) => item.children ? (
            <li key={item.href}>
              <div className={`mobile-link mobile-course-link flex items-center gap-1 ${pathname === item.href ? "mobile-link-active" : ""}`}>
                <Link href={item.href} onClick={closeMenu} className="rounded-[var(--radius-sm)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-red)]">
                  {item.label}
                </Link>
                <button
                  type="button"
                  className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-[var(--radius-sm)] transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-red)]"
                  aria-label={`Mở danh sách ${item.label.toLowerCase()}`}
                  aria-expanded={coursesOpen}
                  onClick={() => setCoursesOpen((value) => !value)}
                >
                  <ChevronDown aria-hidden="true" size={16} strokeWidth={2} className={`transition-transform ${coursesOpen ? "rotate-180" : ""}`} />
                </button>
              </div>
              {coursesOpen && (
                <ul className="ml-4 border-l border-[var(--color-line)] pl-3">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link href={child.href} onClick={closeMenu} className={`mobile-link mobile-course-item ${isActive(pathname, child.href) ? "mobile-link-active" : ""}`}>{child.label}</Link>
                      {child.levels && (
                        <ul className="mb-2 ml-3 space-y-1">
                          {child.levels.map((level) => <li key={level} className="type-small text-[var(--color-ink-muted)]">{level}</li>)}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ) : <li key={item.href}><Link href={item.href} onClick={closeMenu} className={`mobile-link ${isActive(pathname, item.href) ? "mobile-link-active" : ""}`}>{item.label}</Link></li>)}
        </ul></nav>
        <div className="flex shrink-0 justify-center border-t border-[var(--color-line)] px-5 pb-[calc(1.25rem+env(safe-area-inset-bottom))] pt-4">
          <Button href="/lien-he" className="min-h-9 w-full whitespace-nowrap px-2! py-2 text-sm" onClick={closeMenu}>Đăng ký tư vấn</Button>
        </div>
      </aside>
    </div>
  );
}
