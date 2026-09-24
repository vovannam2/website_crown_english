"use client";

import Image from "next/image";
import { ImageOff } from "lucide-react";
import { useState } from "react";

export default function StudentImage({ src, alt, sizes, preload = false, fit = "contain", fallback = "image" }: { src: string; alt: string; sizes: string; preload?: boolean; fit?: "contain" | "cover"; fallback?: "image" | "avatar" }) {
  const [failed, setFailed] = useState<string | null>(null);
  if (!src || failed === src) return <div role="img" aria-label={alt} className="flex h-full items-center justify-center bg-[var(--color-line)] text-[var(--color-ink-muted)]">
    {fallback === "avatar" ? <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="w-2/5 max-w-32"><circle cx="32" cy="22" r="10" /><path d="M12 56v-4a20 20 0 0 1 40 0v4" /></svg> : <ImageOff size={40} aria-hidden="true" />}
  </div>;
  return <Image src={src} alt={alt} fill sizes={sizes} preload={preload} className={fit === "cover" ? "object-cover object-top" : "object-contain"} onError={() => setFailed(src)} />;
}
