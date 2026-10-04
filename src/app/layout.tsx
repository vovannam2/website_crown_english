import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/layout/FloatingContact";
import { Analytics } from "@vercel/analytics/next";
import {
  defaultShareImage,
  defaultSiteDescription,
  defaultSiteTitle,
  getSiteOrigin,
} from "@/config/seo";

const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-bai-jamjuree",
});

const siteOrigin = getSiteOrigin();

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: { default: defaultSiteTitle, template: "%s | Crown English" },
  description: defaultSiteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: defaultSiteTitle,
    description: defaultSiteDescription,
    url: "/",
    siteName: "Crown English",
    locale: "vi_VN",
    type: "website",
    images: [defaultShareImage],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultSiteTitle,
    description: defaultSiteDescription,
    images: [defaultShareImage.url],
  },
  verification: {
    google: "5Huji_pt8op8thbaNnbrZTA8mdvRAIUGtiCdJyZJtM8",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="vi" className={`${baiJamjuree.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="flex min-h-full flex-col"><Header /><main className="flex-1">{children}</main><Footer /><FloatingContact /><Analytics /></body>
    </html>
  );
}
