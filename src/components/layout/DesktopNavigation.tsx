"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigationItems } from "@/data/navigation";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);
}

export default function DesktopNavigation() {
  const pathname = usePathname();
  const [coursesOpen, setCoursesOpen] = useState(false);

  return (
    <nav aria-label="Điều hướng chính" className="hidden flex-1 justify-center xl:flex">
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
            <li key={item.href} className="relative" onMouseEnter={() => setCoursesOpen(true)} onMouseLeave={() => setCoursesOpen(false)}>
              <button
                type="button"
                className={`nav-link inline-flex items-center gap-1 ${active ? "nav-link-active" : ""}`}
                aria-expanded={coursesOpen}
                aria-haspopup="true"
                onClick={() => setCoursesOpen((open) => !open)}
              >
                {item.label}<span aria-hidden="true" className={`text-xs transition-transform ${coursesOpen ? "rotate-180" : ""}`}>⌄</span>
              </button>
              {coursesOpen && (
                <div className="absolute left-0 top-full z-20 w-64 pt-2" onMouseEnter={() => setCoursesOpen(true)}>
                  <ul className="overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-line)] bg-white p-2 shadow-[var(--shadow-menu)]">
                    {item.children.map((child) => {
                      const childActive = isActive(pathname, child.href);
                      return <li key={child.href}><Link href={child.href} className={`dropdown-link ${childActive ? "dropdown-link-active" : ""}`} aria-current={childActive ? "page" : undefined}>{child.label}</Link></li>;
                    })}
                  </ul>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
