export default function HeroDecoration() {
  return (
    <svg
      viewBox="0 0 540 416"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      {/* Loose ribbons frame the portraits without crossing their faces. */}
      <g strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 127C-2 86 28 46 69 53C108 60 104 101 76 95C48 89 70 30 125 22" stroke="var(--color-brand-red)" strokeWidth="5" opacity=".65" />
        <path d="M403 29C437 4 487 21 476 48C467 70 438 52 456 34C479 11 516 46 511 88" stroke="var(--color-brand-gold)" strokeWidth="6" opacity=".8" />
        <path d="M83 363C150 411 383 412 463 364" stroke="var(--color-brand-gold)" strokeWidth="4" opacity=".6" />
        <path d="M109 378C186 413 344 410 411 384" stroke="var(--color-brand-red)" strokeWidth="2" opacity=".3" />
      </g>
      {/* Small floral accents stay in the whitespace around the image fan. */}
      <g transform="translate(34 329) rotate(-12)" fill="var(--color-brand-red)" opacity=".75">
        <ellipse cy="-12" rx="7" ry="12" />
        <ellipse cy="-12" rx="7" ry="12" transform="rotate(72)" />
        <ellipse cy="-12" rx="7" ry="12" transform="rotate(144)" />
        <ellipse cy="-12" rx="7" ry="12" transform="rotate(216)" />
        <ellipse cy="-12" rx="7" ry="12" transform="rotate(288)" />
        <circle r="5" fill="white" />
      </g>
      <g transform="translate(502 125) rotate(15)" fill="var(--color-brand-gold)">
        <ellipse cy="-9" rx="5" ry="9" />
        <ellipse cy="-9" rx="5" ry="9" transform="rotate(72)" />
        <ellipse cy="-9" rx="5" ry="9" transform="rotate(144)" />
        <ellipse cy="-9" rx="5" ry="9" transform="rotate(216)" />
        <ellipse cy="-9" rx="5" ry="9" transform="rotate(288)" />
        <circle r="4" fill="white" />
      </g>
      <g fill="var(--color-brand-gold)">
        <path d="m159 8 3 9 9 3-9 3-3 9-3-9-9-3 9-3Z" />
        <circle cx="26" cy="196" r="3" />
        <circle cx="488" cy="338" r="4" />
      </g>
      <g fill="var(--color-brand-red)" opacity=".4">
        <circle cx="389" cy="14" r="3" />
        <circle cx="133" cy="374" r="3" />
        <path d="m516 255 2 7 7 2-7 2-2 7-2-7-7-2 7-2Z" />
      </g>
    </svg>
  );
}
