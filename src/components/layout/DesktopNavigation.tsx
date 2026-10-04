"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { navigationItems } from "@/data/navigation";
import { isActivePath as isActive } from "@/lib/navigation";

export default function DesktopNavigation() {
  const pathname = usePathname();
  const [coursesOpen, setCoursesOpen] = useState(false);

  return (
    <nav aria-label="Điều hướng chính" className="hidden shrink-0 xl:flex">
      <ul className="flex items-center gap-1">
        {navigationItems.map((item) => {
          const active = isActive(pathname, item.href);
          if (!item.children) {
            return (
              <li key={item.href}>
                <Link className={`nav-link ${active ? "nav-link-active" : ""}`} href={item.href} aria-current={active ? "page" : undefined}>
                  {item.label}
                </Link>
              </li>
            );
          }

          return (
            <li
              key={item.href}
              className="relative"
              onMouseEnter={() => setCoursesOpen(true)}
              onMouseLeave={() => setCoursesOpen(false)}
              onFocus={() => setCoursesOpen(true)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) setCoursesOpen(false);
              }}
            >
              <div className={`nav-link gap-1 px-3 ${active ? "nav-link-active" : ""}`}>
                <Link
                  href={item.href}
                  className="rounded-[var(--radius-sm)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-brand-red)]"
                  aria-current={active ? "page" : undefined}
                  onClick={() => setCoursesOpen(false)}
                >
                  {item.label}
                </Link>
                <button
                  type="button"
                  className="inline-flex h-8 w-5 items-center justify-center rounded-[var(--radius-sm)] text-xs transition-colors hover:bg-[var(--color-surface-soft)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-red)]"
                  aria-label={`Mở danh sách ${item.label.toLowerCase()}`}
                  aria-expanded={coursesOpen}
                  aria-haspopup="true"
                  onClick={() => setCoursesOpen((open) => !open)}
                >
                  <ChevronDown aria-hidden="true" size={14} strokeWidth={2} className={`block transition-transform ${coursesOpen ? "rotate-180" : ""}`} />
                </button>
              </div>
              {coursesOpen && (
                <div className="absolute left-1/2 top-full z-20 w-[760px] -translate-x-1/2 pt-2" onMouseEnter={() => setCoursesOpen(true)}>
                  <div className="rounded-[var(--radius-md)] border border-[var(--color-line)] bg-white p-5 shadow-[var(--shadow-menu)]">
                    <div className="mb-4 flex items-center justify-between gap-4 border-b border-[var(--color-line)] pb-4">
                      <Link href={item.href} className="type-h4 group inline-flex items-center gap-2 rounded-[var(--radius-sm)] text-[var(--color-ink)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-brand-red)]">
                        {item.label}
                        <span aria-hidden="true" className="text-[var(--color-ink-muted)] transition-transform group-hover:translate-x-1">›</span>
                      </Link>
                      <span className="type-label text-[var(--color-ink-muted)]">Chọn theo mục tiêu</span>
                    </div>
                    <ul className="grid grid-cols-3 gap-5">
                    {item.children.map((child) => {
                      const childActive = isActive(pathname, child.href);
                      return (
                        <li key={child.href} className="min-w-0">
                          <Link href={child.href} className={`group block rounded-[var(--radius-sm)] p-3 transition-colors hover:bg-[var(--color-surface-soft)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-red)] ${childActive ? "bg-[var(--color-surface-soft)]" : ""}`} aria-current={childActive ? "page" : undefined}>
                            {child.eyebrow && <span className="type-label text-[var(--color-ink-muted)]">{child.eyebrow}</span>}
                            <span className={`type-h4 mt-2 block ${childActive ? "text-[var(--color-brand-red)]" : "text-[var(--color-ink)] group-hover:text-[var(--color-brand-red)]"}`}>{child.label}</span>
                          </Link>
                          {child.levels && (
                            <ul className="mt-2 space-y-1 px-3">
                              {child.levels.map((level) => (
                                <li key={level} className="type-small text-[var(--color-ink-muted)]">{level}</li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
