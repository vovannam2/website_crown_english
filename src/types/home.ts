import type { StaticImageData } from "next/image";
import type { ReactNode } from "react";
import type { StudentVideo } from "@/types/student-results";
import type { Teacher } from "@/types/teachers";

export type HomeFeedbackData = {
  readonly boardTexture: string;
  readonly year: number;
  readonly months: readonly { readonly month: number; readonly images: readonly string[] }[];
};

export type HomeFeedbackBoardProps = { data: HomeFeedbackData };

export type HomeVisualProps = {
  src: string | StaticImageData;
  alt: string;
  label: string;
  index?: string;
  preload?: boolean;
  sizes?: string;
};

export type HomeTextLinkProps = { href: string; children: ReactNode };

export type HomeHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  link?: { href: string; label: string };
};

export type HomeVideoTeaserProps = {
  videos: readonly StudentVideo[];
  moreLink: { readonly href: string; readonly label: string };
};

export type HomeTeacherStageProps = {
  teachers: readonly Teacher[];
  label: string;
};
