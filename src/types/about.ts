import type { ReactNode } from "react";

export type ManifestoMotionProps = { children: ReactNode };
export type AboutMethodBadgeProps = { label: string; index: number };

export type AboutImageSlot = {
  src: string;
  fallback?: string;
  alt: string;
  position?: string;
  placeholder: string;
};

export type AboutActionsProps = {
  delay?: number;
  reveal?: boolean;
};

export type AboutImageProps = {
  image: AboutImageSlot;
  className?: string;
  sizes: string;
  preload?: boolean;
  revealDuration?: number;
  revealEasing?: string;
};
