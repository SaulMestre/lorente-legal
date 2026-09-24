import { SiteLink } from "@/components/ui/link";
import { homeContent } from "../content/es";

export function ContactCallToAction() {
  return <section className="py-20 sm:py-28"><div className="motion-reveal mx-auto flex max-w-6xl flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-end md:justify-between"><div><h2 className="font-display text-4xl sm:text-5xl">{homeContent.contact.title}</h2><p className="mt-4 max-w-xl text-lg text-ink/70">{homeContent.contact.body}</p></div><SiteLink href={homeContent.contact.path} className="inline-flex min-h-11 items-center rounded-full bg-moss px-5 py-3 font-semibold text-white no-underline transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-copper focus-visible:-translate-y-0.5">{homeContent.contact.action}</SiteLink></div></section>;
}
