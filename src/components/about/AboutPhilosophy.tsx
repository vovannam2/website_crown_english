import Reveal from "@/components/ui/Reveal";
import { aboutPageData } from "@/data/about";

const badges = [
  "Lộ trình cá nhân hóa",
  "Theo dõi tiến độ",
  "Phản hồi đa chiều",
] as const;

function MethodBadge({ label, index }: { label: string; index: number }) {
  return (
    <Reveal delay={120 + index * 80}>
      <div className="grid grid-cols-[24px_1fr] gap-4 border-t border-[var(--color-line)] py-5 text-neutral-800">
        <span className="pt-1 type-label text-[var(--color-brand-red)]">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="type-h4">{label}</span>
      </div>
    </Reveal>
  );
}

export default function AboutPhilosophy() {
  const data = aboutPageData.philosophy;

  return (
    <section
      className="bg-white py-12 max-md:py-9"
      aria-labelledby="philosophy-title"
    >
      <Reveal>
        <p className="type-label text-[var(--color-brand-red)]">
          {data.eyebrow}
        </p>
        <h2 id="philosophy-title" className="mt-3 type-h2 text-[var(--color-ink)]">
          Định hướng đào tạo tại Crown English
        </h2>
        <p className="mt-4 max-w-2xl type-body-lg text-[var(--color-ink-muted)]">
          {data.intro}
        </p>
      </Reveal>

      <div className="mt-8 grid items-start gap-12 md:grid-cols-2 max-md:gap-7">
        <div className="relative overflow-hidden border-l-2 border-[var(--color-brand-red)] bg-[var(--color-surface-soft)] px-6 py-7 sm:px-8 sm:py-9">
          <span className="pointer-events-none absolute -right-1 -top-9 text-[8rem] font-bold leading-none text-[var(--color-brand-red)]/[0.07]" aria-hidden="true">
            ”
          </span>
          <p className="relative">
            <Reveal
              as="span"
              className="block type-h3 type-weight-normal text-[var(--color-ink-muted)]"
              delay={80}
            >
              {data.lead}
            </Reveal>
            <Reveal
              as="span"
              className="mt-3 block max-w-xl type-h2 text-[var(--color-brand-red-dark)]"
              preset="text"
              delay={150}
            >
              {data.lines.join(" ")}
            </Reveal>
          </p>
        </div>

        <div aria-label="Các yếu tố trong phương pháp đào tạo">
          <div className="border-b border-neutral-200">
            {badges.map((badge, index) => (
              <MethodBadge key={badge} label={badge} index={index} />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
