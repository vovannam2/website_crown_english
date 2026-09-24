import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";

export default function Header() {
  return <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-white/95 shadow-[var(--shadow-header)] backdrop-blur">
    <div className="layout-shell"><div className="flex min-h-[82px] items-center justify-between gap-5">
      <Link href="/" className="flex h-16 shrink-0 items-center gap-3 rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-brand-red)]" aria-label="Crown English - Trang chủ">
        <Image src="/logo/logoKhongChu.png" alt="" width={94} height={64} priority className="h-16 w-[94px] shrink-0 object-contain" />
        <span className="flex min-w-0 flex-col justify-center leading-none"><span className="brand-crown">CROWN</span><span className="brand-english">ENGLISH</span></span>
      </Link>
      <DesktopNavigation />
      <div className="hidden shrink-0 items-center gap-3 2xl:flex"><Button href="/lien-he" variant="primary" className="min-w-[142px] whitespace-nowrap">Đăng ký tư vấn</Button></div>
      <MobileNavigation />
    </div></div>
  </header>;
}
