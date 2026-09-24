import { SiteLink } from "@/components/ui/link";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { homeContent } from "../content/es";

export function LauraProfile() {
  return <section aria-labelledby="laura-title" className="border-y border-moss/15 py-20 sm:py-28"><div className="motion-reveal mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 md:grid-cols-[0.7fr_1fr] md:items-center"><ImagePlaceholder label="Espacio reservado para la fotografía de Laura" /><div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-copper">Sobre la profesional</p><h2 id="laura-title" className="mt-3 font-display text-4xl sm:text-5xl">{homeContent.laura.name}</h2><p className="mt-3 text-lg font-semibold text-moss">{homeContent.laura.title}</p><p className="mt-5 max-w-xl leading-8 text-ink/70">{homeContent.laura.body}</p><SiteLink href={homeContent.laura.path} className="mt-7 inline-block font-semibold transition-colors duration-200 hover:text-copper">Conoce a Laura</SiteLink></div></div></section>;
}
