import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function FloatingContact() {
  const { phoneHref, hotline, zaloHref, zalo } = siteConfig.contact;
  return <div className="fixed bottom-5 right-4 z-40 flex flex-col gap-3 sm:right-6"><Link href={phoneHref || "/lien-he"} aria-label={`Gọi hotline ${hotline}`} className="floating-contact"><span aria-hidden="true">☎</span><span className="hidden sm:inline">Hotline</span></Link><Link href={zaloHref || "/lien-he"} aria-label={`Liên hệ Zalo ${zalo}`} className="floating-contact floating-contact-gold"><span aria-hidden="true">Z</span><span className="hidden sm:inline">Zalo</span></Link></div>;
}
