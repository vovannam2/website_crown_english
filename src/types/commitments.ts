import type { CommitmentsPageData } from "@/data/commitments";

export type CommitmentIconName =
  | "book"
  | "clipboard"
  | "graduation"
  | "message"
  | "personal"
  | "progress"
  | "target"
  | "users";

export type CommitmentIconBadgeProps = { icon: CommitmentIconName; className?: string };
export type CommitmentSectionHeaderProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
};
export type CommitmentCheckListProps = { items: readonly string[] };
export type CommitmentHeroVisualProps = { visual: CommitmentsPageData["hero"]["visual"] };
export type CommitmentsPageProps = { data: CommitmentsPageData };
