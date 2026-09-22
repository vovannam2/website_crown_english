import type { Metadata } from "next";
import PlaceholderPage from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = { title: "Khóa học" };

export default function CoursesPage() {
  return <PlaceholderPage eyebrow="Chương trình học" title="Khóa học tại Crown English" description="Danh sách chương trình IELTS, tiếng Anh giao tiếp và IELTS 1 kèm 1 đang được cập nhật." />;
}
