import type { ComponentPropsWithoutRef } from "react";

type PageSectionProps = ComponentPropsWithoutRef<"section">;

export function PageSection({ className = "", ...props }: PageSectionProps) {
  return <section className={`py-section sm:py-section-lg ${className}`} {...props} />;
}