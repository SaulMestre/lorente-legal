import { SiteLink } from "@/components/ui/link";
import { homeContent } from "../content/es";

export function PracticeAreas() {
  return <section aria-labelledby="practice-title" className="bg-sand/50 py-20 sm:py-28"><div className="motion-reveal mx-auto max-w-6xl px-5 sm:px-8"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-copper">Áreas de práctica</p><h2 id="practice-title" className="mt-3 font-display text-4xl sm:text-5xl">Orientación para cada etapa</h2><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{homeContent.practiceAreas.map((area) => <article key={area.title} className="rounded-2xl border border-ink/10 bg-paper p-6 transition duration-200 ease-out hover:-translate-y-1 hover:border-copper/50 hover:shadow-lg focus-within:-translate-y-1 focus-within:border-copper/50 focus-within:shadow-lg"><h3 className="font-display text-2xl">{area.title}</h3><p className="mt-3 text-sm leading-6 text-ink/65">{area.description}</p><SiteLink href={area.path} className="mt-6 inline-block text-sm font-semibold transition-colors duration-200 hover:text-copper">Conoce el área</SiteLink></article>)}</div></div></section>;
}
