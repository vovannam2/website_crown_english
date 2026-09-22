import Link from "next/link";
import Container from "@/components/ui/Container";

type PlaceholderPageProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PlaceholderPage({ eyebrow, title, description }: PlaceholderPageProps) {
  return (
    <Container className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--color-brand-red)]">{eyebrow}</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-[var(--color-ink)] sm:text-5xl">{title}</h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[var(--color-ink-muted)]">{description}</p>
        <Link href="/lien-he" className="mt-8 inline-flex min-h-11 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-brand-red)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-brand-red-dark)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-red)]">
          Đăng ký tư vấn
        </Link>
      </div>
    </Container>
  );
}
