import type { Metadata } from "next";
import PlaceholderPage from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = { title: "Cam kết" };

export default function CommitmentPage() {
  return <PlaceholderPage eyebrow="Crown English" title="Cam kết đào tạo" description="Nội dung cam kết về chất lượng đào tạo và hỗ trợ học viên đang được Crown English chuẩn bị." />;
}
