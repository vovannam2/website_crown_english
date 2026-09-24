"use client";

import Image from "next/image";
import { useState } from "react";

export default function TeacherImage({ name, src, sizes }: { name: string; src: string; sizes: string }) {
  const [failedSource, setFailedSource] = useState<string | null>(null);
  const alt = `Giảng viên ${name} - Crown English`;
  return <div className="relative aspect-[4/5] w-full overflow-hidden bg-white">
    {src && failedSource !== src ? (
      <Image src={src} alt={alt} fill sizes={sizes} className="object-cover object-top transition-transform duration-[220ms] motion-safe:group-hover:scale-[1.025] motion-reduce:transition-none" onError={() => setFailedSource(src)} />
    ) : (
      <div className="flex h-full items-center justify-center bg-[var(--color-line)] text-[var(--color-ink-muted)] [&_svg]:w-2/5 [&_svg]:max-w-32" role="img" aria-label={alt}>
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="32" cy="22" r="10" /><path d="M12 56v-4a20 20 0 0 1 40 0v4" />
        </svg>
      </div>
    )}
  </div>;
}
