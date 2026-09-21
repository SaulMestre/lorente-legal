import Link from "next/link";
import { MainNavigation } from "./main-navigation";
import { MobileNavigation } from "./mobile-navigation";
import { PageContainer } from "./page-container";

export function Header() {
  return (
    <header className="relative border-b border-moss/15 bg-paper">
      <PageContainer className="flex min-h-20 items-center justify-between gap-6">
        <Link href="/es/" className="font-display text-xl font-semibold tracking-tight text-ink">Lorente Legal</Link>
        <MainNavigation />
        <MobileNavigation />
      </PageContainer>
    </header>
  );
}
