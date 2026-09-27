import Image from "next/image";
import { sharedMedia } from "@/data/media";
import Link from "next/link";
import Container from "@/components/ui/Container";

import { siteConfig } from "@/config/site";
import { navigationItems } from "@/data/navigation";

export default function Footer() {
  const courseLinks = navigationItems.find((item) => item.href === "/khoa-hoc")?.children ?? [];

  return (
    <footer className="mt-auto border-t border-[var(--color-line)] bg-[var(--color-ink)] text-white">
      <Container>
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1.35fr]">
          <div>
            <Link href="/" className="footer-brand mb-5 inline-flex items-center gap-5" aria-label="Crown English - Trang chủ">
              <Image src="/logo/logoKhongChu.png" alt="" width={164} height={116} className="h-[116px] w-[164px] shrink-0 object-contain" />
              <span className="flex flex-col leading-none">
                <span className="footer-brand-crown">CROWN</span>
                <span className="footer-brand-english">ENGLISH</span>
              </span>
            </Link>
            <p className="type-small max-w-xs text-white/70">{siteConfig.shortDescription}</p>
          </div>

          <div>
            <h2 className="footer-heading">Liên kết nhanh</h2>
            <ul className="space-y-3">
              {navigationItems.filter((item) => !item.children).slice(0, 5).map((item) => (
                <li key={item.href}>
                  <Link className="footer-link" href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="footer-heading">Các khóa học</h2>
            <ul className="space-y-3">
              <li><Link className="footer-link" href="/khoa-hoc">Tất cả khóa học</Link></li>
              {courseLinks.map((item) => (
                <li key={item.href}>
                  <Link className="footer-link" href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="footer-heading">Thông tin liên hệ</h2>
            <ul className="type-small space-y-3 text-white/70">
              <li>Địa chỉ: <a className="footer-link" href={siteConfig.contact.mapsHref} target="_blank" rel="noopener noreferrer">{siteConfig.contact.address}</a></li>
              <li>Hotline: <a className="footer-link" href={siteConfig.contact.phoneHref}>{siteConfig.contact.hotline}</a></li>
              <li>Email: <a className="footer-link" href={siteConfig.contact.emailHref}>{siteConfig.contact.email}</a></li>
              <li>Zalo OA: <a className="footer-link" href={siteConfig.contact.zaloHref} target="_blank" rel="noopener noreferrer">{siteConfig.contact.zalo}</a></li>
              <li>Fanpage: <a className="footer-link" href={siteConfig.contact.facebookHref} target="_blank" rel="noopener noreferrer">{siteConfig.contact.facebook}</a></li>
              <li>Google Maps: <a className="footer-link" href={siteConfig.contact.mapsHref} target="_blank" rel="noopener noreferrer">{siteConfig.contact.maps}</a></li>
            </ul>
          </div>
        </div>

        <div className="type-small flex flex-col gap-3 border-t border-white/15 py-5 text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Crown English. All rights reserved.</span>
          <Link className="footer-link" href="/lien-he">Liên hệ tư vấn</Link>
        </div>
      </Container>
    </footer>
  );
}
