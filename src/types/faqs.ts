import type { ComponentType } from "react";

export type FaqItem = {
  readonly id: string;
  readonly question: string;
  readonly answer: readonly string[];
  readonly category?: string;
  readonly speaker?: string;
  readonly sourceImage?: string;
  readonly needsReview?: boolean;
};

export type CategoryKey =
  | "all"
  | "courses"
  | "tuition"
  | "teachers"
  | "registration"
  | "policy";

export type CategoryMeta = {
  readonly label: string;
  readonly shortLabel: string;
  readonly eyebrow: string;
  readonly icon: ComponentType<{
    size?: number;
    strokeWidth?: number;
    "aria-hidden"?: boolean;
  }>;
};

export type FaqsPageProps = {
  readonly items: readonly FaqItem[];
};

export type FaqChipIconProps = { category: CategoryKey };

export type FaqSpeechBubbleProps = {
  item: FaqItem;
  tone: "blue" | "pink" | "yellow";
  className?: string;
};

export type FaqTeacherAvatarProps = { className?: string };

export type FaqQuestionAnswerProps = {
  item: FaqItem;
  compact?: boolean;
};

