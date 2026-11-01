"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ui/button-link";
import { homeContent } from "@/features/public-home/content/es";
import { MainNavigation } from "./main-navigation";
import { MobileNavigation } from "./mobile-navigation";
import { PageContainer } from "./page-container";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 120);

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  return (
    <header aria-hidden={!isScrolled} inert={!isScrolled} className={`fixed inset-x-0 top-0 z-50 border-b border-moss/15 bg-paper shadow-lg transition-[opacity,transform] duration-300 ${isScrolled ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-full opacity-0"}`}>
      <PageContainer className="flex min-h-20 items-center justify-between gap-6">
        <Link href="/es/" className="font-display text-xl font-semibold text-ink">Lorente Legal</Link>
        <MainNavigation />
        <ButtonLink href={homeContent.contact.path} variant="secondary" className="hidden px-4 py-2 lg:inline-flex">Contacto</ButtonLink>
        <MobileNavigation />
      </PageContainer>
    </header>
  );
}
