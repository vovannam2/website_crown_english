import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/layout/FloatingContact";
import { siteConfig } from "@/config/site";
import { defaultShareImage } from "@/config/share-image";

const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-bai-jamjuree",
});

const defaultTitle = "Crown English | IELTS & Tiếng Anh giao tiếp";
const defaultDescription =
  "Crown English cung cấp các chương trình IELTS, Tiếng Anh giao tiếp và IELTS 1 kèm 1 với lộ trình rõ ràng, cam kết đầu ra và đội ngũ giảng viên đồng hành cùng học viên.";
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: defaultTitle, template: "%s | Crown English" },
  description: defaultDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: "/",
    siteName: "Crown English",
    locale: "vi_VN",
    type: "website",
    images: [defaultShareImage],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [defaultShareImage.url],
  },
  verification: {
    google: "5Huji_pt8op8thbaNnbrZTA8mdvRAIUGtiCdJyZJtM8",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="vi"
      className={`${baiJamjuree.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
