import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Trang chủ",
  description: "Trang chủ Crown English.",
};

export default function Home() {
  return (
    <Container className="py-20 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Trang chủ</h1>
        <p className="mt-5 text-base text-[var(--color-ink-muted)]">Nội dung đang được cập nhật.</p>
      </div>
    </Container>
  );
}
