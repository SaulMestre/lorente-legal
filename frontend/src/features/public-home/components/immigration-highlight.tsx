import { SiteLink } from "@/components/ui/link";
import { homeContent } from "../content/es";

export function ImmigrationHighlight() {
  return <section className="py-20 sm:py-28"><div className="motion-reveal mx-auto max-w-6xl px-5 sm:px-8"><div className="grid gap-8 rounded-3xl bg-moss p-8 text-white sm:p-12 md:grid-cols-[1fr_auto] md:items-end"><div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/75">Áreas destacadas</p><h2 className="mt-3 max-w-2xl font-display text-4xl sm:text-5xl">{homeContent.highlight.title}</h2><p className="mt-4 max-w-xl text-white/80">{homeContent.highlight.body}</p></div><div className="flex flex-wrap gap-4"><SiteLink href="/es/extranjeria" className="button-interactive rounded-xl bg-white px-5 py-3 text-sm font-semibold text-ink no-underline hover:bg-sand">Extranjería</SiteLink><SiteLink href="/es/nacionalidad" className="button-interactive rounded-xl border border-white/60 px-5 py-3 text-sm font-semibold no-underline hover:border-white hover:bg-white hover:text-moss">Nacionalidad</SiteLink></div></div></div></section>;
}
