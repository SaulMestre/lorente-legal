import Link from "next/link";
import { PageContainer } from "@/components/layout/page-container";
import { PageSection } from "@/components/layout/page-section";
import { getButtonClassName } from "@/components/ui/button";
import { contactInfo } from "@/lib/config/contact-info";
import { contactContent } from "../content/es";

export function ContactHero() {
  const { hero } = contactContent;
  const whatsappExternal = contactInfo.isWhatsappConfigured;

  return (
    <PageSection aria-labelledby="contact-title" className="pb-12 pt-8 sm:pb-16 sm:pt-10">
      <PageContainer>
        <Link href="/es/" className="font-display text-xl font-semibold text-ink no-underline">Lorente Legal</Link>
        <div className="mt-14 max-w-2xl sm:mt-20">
          <h1 id="contact-title" className="font-display text-display sm:text-display-lg">{hero.title}</h1>
          <p className="mt-6 text-lg leading-8 text-ink/70 sm:text-xl">{hero.body}</p>
          <a
            href={contactInfo.whatsappHref}
            {...(whatsappExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className={getButtonClassName("primary", "mt-8 min-h-14 w-full px-8 text-base sm:w-auto")}
          >
            {hero.whatsapp}
            {whatsappExternal ? <span className="sr-only"> (se abre en una pestaña nueva)</span> : null}
          </a>
          <p className="mt-3 text-sm text-ink/60">{hero.note}</p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:flex sm:gap-4">
            <a href={contactInfo.phoneHref} className={getButtonClassName("outline", "min-h-12 sm:px-8")}>{hero.phone}</a>
            <a href={contactInfo.emailHref} className={getButtonClassName("outline", "min-h-12 sm:px-8")}>{hero.email}</a>
          </div>
        </div>
      </PageContainer>
    </PageSection>
  );
}
