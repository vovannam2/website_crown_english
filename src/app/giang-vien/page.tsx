import type { Metadata } from "next";
import PlaceholderPage from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = { title: "Giảng viên" };

export default function TeachersPage() {
  return <PlaceholderPage eyebrow="Đội ngũ" title="Đội ngũ giảng viên" description="Thông tin chuyên môn và kinh nghiệm của đội ngũ Crown English đang được chuẩn bị." />;
}
