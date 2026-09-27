import Link from "next/link";
import type { ComponentProps } from "react";

export function SiteLink({ className = "", ...props }: ComponentProps<typeof Link>) {
  return <Link className={`underline decoration-sage underline-offset-4 hover:text-sage ${className}`} {...props} />;
}
