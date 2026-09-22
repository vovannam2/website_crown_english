import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/layout/FloatingContact";

export const metadata: Metadata = {
  title: { default: "Crown English", template: "%s | Crown English" },
  description: "Trung tâm tiếng Anh Crown English.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="vi" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex min-h-full flex-col"><Header /><main className="flex-1">{children}</main><Footer /><FloatingContact /></body>
    </html>
  );
}
