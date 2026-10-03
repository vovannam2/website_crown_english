import type { SectionTitleProps } from "@/types/ui";

export default function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return <div className="mb-8 max-w-2xl sm:mb-10">
    <p className="home-eyebrow">{eyebrow}</p>
    <h2 className="mt-3 type-h2">{title}</h2>
    {description && <p className="mt-4 type-body text-[var(--color-ink-muted)]">{description}</p>}
  </div>;
}
