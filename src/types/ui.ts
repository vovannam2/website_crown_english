import type { ReactNode } from "react";

export type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export type PlaceholderPageProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export type RevealPreset = "fadeUp" | "fade" | "image" | "line" | "lineX" | "draw" | "text";

export type RevealProps = {
  children: ReactNode;
  className?: string;
  preset?: RevealPreset;
  delay?: number;
  duration?: number;
  easing?: string;
  as?: "div" | "span";
  group?: boolean;
};
