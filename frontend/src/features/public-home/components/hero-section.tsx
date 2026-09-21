import { SiteLink } from "@/components/ui/link";
import { homeContent } from "../content/es";

export function HeroSection() {
  return <section className="bg-moss py-20 text-paper sm:py-28"><div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end"><div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-sand">{homeContent.hero.eyebrow}</p><h1 className="mt-5 max-w-3xl font-display text-5xl leading-[0.95] tracking-tight sm:text-7xl">{homeContent.hero.title}</h1><p className="mt-6 max-w-xl text-lg text-paper/80">{homeContent.hero.description}</p><SiteLink href={homeContent.hero.primaryPath} className="mt-8 inline-flex min-h-11 items-center rounded-full bg-copper px-5 py-3 font-semibold text-white no-underline">{homeContent.hero.primaryAction}</SiteLink></div><p className="max-w-sm border-l border-sand/50 pl-5 text-sm leading-6 text-paper/75">Con Laura al frente, Lorente Legal acompaña tus decisiones jurídicas con claridad y cercanía.</p></div></section>;
}
