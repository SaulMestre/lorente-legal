import { SiteLink } from "@/components/ui/link";

export function LanguageSelector() {
  return <nav aria-label="Selector de idioma" className="flex gap-3 text-sm"><SiteLink href="/es/" aria-current="page" className="no-underline font-semibold">ES</SiteLink><span aria-disabled="true" className="text-ink/40">EN</span><span aria-disabled="true" className="text-ink/40">CA</span></nav>;
}
