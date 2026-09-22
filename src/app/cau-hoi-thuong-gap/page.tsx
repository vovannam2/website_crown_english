import type { Metadata } from "next";
import PlaceholderPage from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = { title: "Câu hỏi thường gặp" };

export default function FaqPage() {
  return <PlaceholderPage eyebrow="Hỗ trợ" title="Câu hỏi thường gặp" description="Các câu hỏi thường gặp về chương trình học và quy trình tư vấn đang được cập nhật." />;
}
