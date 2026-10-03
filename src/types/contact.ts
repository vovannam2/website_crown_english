import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import type { ContactPageData } from "@/data/contact";

export type ContactPageProps = {
  readonly data: ContactPageData;
};

export type ContactActionLink = {
  readonly value: string;
  readonly href: string;
};

export type ContactRow = {
  readonly label: string;
  readonly icon: LucideIcon;
  readonly description: string;
  readonly links: readonly ContactActionLink[];
};

export type LocationFact = {
  readonly label: string;
  readonly value: string;
  readonly icon: LucideIcon;
};

export type ContactActionProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

