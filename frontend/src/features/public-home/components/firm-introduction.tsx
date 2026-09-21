import { homeContent } from "../content/es";

export function FirmIntroduction() {
  return <section className="py-20 sm:py-28"><div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-8 md:grid-cols-[0.7fr_1fr]"><h2 className="font-display text-3xl leading-tight sm:text-5xl">{homeContent.introduction.title}</h2><p className="max-w-2xl text-lg leading-8 text-ink/70">{homeContent.introduction.body}</p></div></section>;
}
