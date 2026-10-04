import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import type { PlaceholderPageProps } from "@/types/ui";

export default function PlaceholderPage({ eyebrow, title, description }: PlaceholderPageProps) {
  return (
    <Container className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <p className="hero-eyebrow-badge">{eyebrow}</p>
        <h1 className="type-h1 mt-4 text-[var(--color-ink)]">{title}</h1>
        <p className="type-body-lg mx-auto mt-6 max-w-2xl text-[var(--color-ink-muted)]">{description}</p>
        <Button href="/lien-he" className="mt-8 px-6">
          Đăng ký tư vấn
        </Button>
      </div>
    </Container>
  );
}
