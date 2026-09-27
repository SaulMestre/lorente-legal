import Image from "next/image";
import { SiteLink } from "@/components/ui/link";
import { homeContent } from "../content/es";

export function LauraProfile() {
  return <section aria-labelledby="laura-title" className="border-y border-moss/15 py-20 sm:py-28"><div className="motion-reveal mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 md:grid-cols-[0.7fr_1fr] md:items-center"><div className="relative aspect-[4/5] min-h-64 overflow-hidden rounded-2xl bg-sand"><Image alt="Laura, profesional de Lorente Legal" className="object-cover" fill sizes="(min-width: 768px) 40vw, 100vw" src="/images/Foto%20Laura.jpeg" /></div><div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-sage">Sobre la profesional</p><h2 id="laura-title" className="mt-3 font-display text-4xl sm:text-5xl">{homeContent.laura.name}</h2><p className="mt-3 text-lg font-semibold text-moss">{homeContent.laura.title}</p><p className="mt-5 max-w-xl leading-8 text-ink/70">{homeContent.laura.body}</p><SiteLink href={homeContent.laura.path} className="mt-7 inline-block font-semibold transition-colors duration-200 hover:text-sage">Conoce a Laura</SiteLink></div></div></section>;
}
