"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigationItems } from "@/data/navigation";
import Button from "@/components/ui/Button";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);
}

export default function MobileNavigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(isActive(pathname, "/khoa-hoc"));

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", closeOnEscape); document.body.style.overflow = ""; };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <div className="2xl:hidden">
      <button type="button" className="icon-button" aria-label={open ? "Đóng menu" : "Mở menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)}>
        <span aria-hidden="true" className="flex flex-col gap-1.5">{[0, 1, 2].map((bar) => <span key={bar} className={`block h-0.5 w-5 bg-current transition-transform ${open && bar === 0 ? "translate-y-2" : ""} ${open && bar === 1 ? "opacity-0" : ""} ${open && bar === 2 ? "-translate-y-2" : ""}`} />)}</span>
      </button>
      {open && <button type="button" aria-label="Đóng menu" className="fixed inset-0 z-30 bg-[var(--color-ink)]/30" onClick={closeMenu} />}
      <aside id="mobile-navigation" aria-label="Điều hướng di động" inert={!open} style={{ display: open ? undefined : "none" }} className={`fixed right-0 top-0 z-40 flex h-dvh w-[min(88vw,360px)] flex-col bg-white p-6 shadow-[var(--shadow-menu)] transition-transform duration-200 ${open ? "translate-x-0" : "pointer-events-none translate-x-full"}`}>
        <div className="mb-8 flex items-center justify-between"><span className="text-lg font-bold text-[var(--color-ink)]">Menu</span><button type="button" className="icon-button" aria-label="Đóng menu" onClick={closeMenu}>×</button></div>
        <nav aria-label="Điều hướng di động"><ul className="space-y-1">
          {navigationItems.map((item) => item.children ? (
            <li key={item.href}>
              <button type="button" className={`mobile-link flex w-full items-center justify-between ${isActive(pathname, item.href) ? "mobile-link-active" : ""}`} aria-expanded={coursesOpen} onClick={() => setCoursesOpen((value) => !value)}>{item.label}<span aria-hidden="true" className={`transition-transform ${coursesOpen ? "rotate-180" : ""}`}>⌄</span></button>
              {coursesOpen && <ul className="ml-4 border-l border-[var(--color-line)] pl-3">{item.children.map((child) => <li key={child.href}><Link href={child.href} onClick={closeMenu} className={`mobile-link text-sm ${isActive(pathname, child.href) ? "mobile-link-active" : ""}`}>{child.label}</Link></li>)}</ul>}
            </li>
          ) : <li key={item.href}><Link href={item.href} onClick={closeMenu} className={`mobile-link ${isActive(pathname, item.href) ? "mobile-link-active" : ""}`}>{item.label}</Link></li>)}
        </ul></nav>
        <Button href="/lien-he" className="mt-auto w-full" onClick={closeMenu}>Đăng ký tư vấn</Button>
      </aside>
    </div>
  );
}
