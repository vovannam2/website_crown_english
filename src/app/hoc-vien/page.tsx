import type { Metadata } from "next";
import PlaceholderPage from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = { title: "Học viên" };

export default function StudentsPage() {
  return <PlaceholderPage eyebrow="Câu chuyện học viên" title="Kết quả học viên" description="Các câu chuyện, thành tích và feedback của học viên Crown English đang được cập nhật." />;
}
