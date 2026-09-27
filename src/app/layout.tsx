import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/layout/FloatingContact";

const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-bai-jamjuree",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Crown English", template: "%s | Crown English" },
  description: "Trung tâm tiếng Anh Crown English.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="vi" className={`${baiJamjuree.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="flex min-h-full flex-col"><Header /><main className="flex-1">{children}</main><Footer /><FloatingContact /></body>
    </html>
  );
}
