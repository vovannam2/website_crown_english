import type { Metadata } from "next";
import PlaceholderPage from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = { title: "Giới thiệu" };

export default function AboutPage() {
  return <PlaceholderPage eyebrow="Crown English" title="Giới thiệu Crown English" description="Nội dung câu chuyện, giá trị cốt lõi và phương pháp đào tạo của Crown English đang được chuẩn bị." />;
}
