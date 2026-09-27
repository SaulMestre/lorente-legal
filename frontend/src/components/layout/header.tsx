"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { homeContent } from "@/features/public-home/content/es";
import { SiteLink } from "@/components/ui/link";
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
    <header className={`fixed inset-x-0 top-0 z-50 border-b border-moss/15 bg-paper shadow-lg transition-[opacity,transform] duration-300 ${isScrolled ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-full opacity-0"}`}>
      <PageContainer className="flex min-h-20 items-center justify-between gap-6">
        <Link href="/es/" className="font-display text-xl font-semibold tracking-tight text-ink">Lorente Legal</Link>
        <MainNavigation />
        <SiteLink href={homeContent.contact.path} className="button-interactive hidden min-h-11 items-center rounded-xl bg-sage px-4 py-2 text-sm font-semibold text-white no-underline hover:bg-moss hover:text-white lg:inline-flex">Contacto</SiteLink>
        <MobileNavigation />
      </PageContainer>
    </header>
  );
}
