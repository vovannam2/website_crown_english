import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const variantClasses = {
  primary: "bg-[var(--color-brand-red)] text-white hover:bg-[var(--color-brand-red-dark)]",
  secondary: "bg-[var(--color-brand-gold)] text-[var(--color-ink)] hover:bg-[var(--color-brand-gold-dark)]",
  outline:
    "border border-[var(--color-line-strong)] bg-white text-[var(--color-ink)] hover:border-[var(--color-brand-red)] hover:text-[var(--color-brand-red)]",
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = `inline-flex min-h-11 items-center justify-center gap-2 rounded-[var(--radius-sm)] px-5 py-3 text-sm font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-red)] ${variantClasses[variant]} ${className}`;

  if (href) {
    return <Link href={href} className={classes}>{children}</Link>;
  }

  return <button type={type} onClick={onClick} className={classes}>{children}</button>;
}
