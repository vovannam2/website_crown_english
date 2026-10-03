import Image from "next/image";
import type { HomeVisualProps } from "@/types/home";

export default function HomeVisual({ src, alt, label, index, preload = false, sizes = "(min-width: 900px) 30vw, 85vw" }: HomeVisualProps) {
  return src ? (
    <Image src={src} alt={alt} fill sizes={sizes} preload={preload} style={{ objectFit: "cover" }} />
  ) : (
    <div className="home-visual-placeholder" role="img" aria-label={alt}>
      <span>{index}</span><strong>{label}</strong><i aria-hidden="true" />
    </div>
  );
}

