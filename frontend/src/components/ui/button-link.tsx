import Link from "next/link";
import type { ComponentProps } from "react";
import { getButtonClassName, type ButtonVariant } from "./button";

type ButtonLinkProps = Omit<ComponentProps<typeof Link>, "className"> & {
  className?: string;
  variant?: ButtonVariant;
};

export function ButtonLink({ className = "", variant = "primary", ...props }: ButtonLinkProps) {
  return <Link className={getButtonClassName(variant, className)} {...props} />;
}