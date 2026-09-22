type SectionTitleProps = { eyebrow: string; title: string; description?: string };

export default function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return <div className="mb-8 max-w-2xl sm:mb-10">
    <p className="home-eyebrow">{eyebrow}</p>
    <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">{title}</h2>
    {description && <p className="mt-4 text-base leading-7 text-[var(--color-ink-muted)]">{description}</p>}
  </div>;
}
