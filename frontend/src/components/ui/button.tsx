import type { ButtonHTMLAttributes } from "react";

export type ButtonVariant = "primary" | "secondary" | "light" | "outline" | "outline-inverse";

const buttonVariantClasses: Record<ButtonVariant, string> = {
  primary: "bg-moss text-white hover:bg-ink",
  secondary: "bg-sage text-white hover:bg-moss",
  light: "bg-white text-ink hover:bg-sand",
  outline: "border border-moss text-moss hover:bg-moss hover:text-white",
  "outline-inverse": "border border-white/60 text-white hover:border-white hover:bg-white hover:text-moss",
};

export function getButtonClassName(variant: ButtonVariant, className = "") {
  return `button-interactive inline-flex min-h-11 items-center justify-center rounded-action px-5 py-3 text-sm font-semibold no-underline ${buttonVariantClasses[variant]} ${className}`;
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export function Button({ className = "", variant = "primary", ...props }: ButtonProps) {
  return <button className={`${getButtonClassName(variant, className)} disabled:cursor-not-allowed disabled:opacity-60`} {...props} />;
}
