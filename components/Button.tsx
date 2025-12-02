import { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900";

  const variants: Record<string, string> = {
    primary: "bg-slate-900 text-white hover:bg-slate-800",
    secondary:
      "bg-white text-slate-900 border border-slate-300 hover:bg-slate-50",
    ghost: "text-slate-900 hover:bg-slate-100",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  const base =
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900";

  const variants: Record<string, string> = {
    primary: "bg-slate-900 text-white hover:bg-slate-800",
    secondary:
      "bg-white text-slate-900 border border-slate-300 hover:bg-slate-50",
    ghost: "text-slate-900 hover:bg-slate-100",
  };

  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
