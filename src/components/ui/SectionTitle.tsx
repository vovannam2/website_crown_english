type SectionTitleProps = { eyebrow: string; title: string; description?: string };

export default function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return <div className="mb-8 max-w-2xl sm:mb-10">
    <p className="home-eyebrow">{eyebrow}</p>
    <h2 className="type-h2 mt-3">{title}</h2>
    {description && <p className="type-body-lg mt-4 text-[var(--color-ink-muted)]">{description}</p>}
  </div>;
}
