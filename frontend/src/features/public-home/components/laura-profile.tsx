import Image from "next/image";
import { PageContainer } from "@/components/layout/page-container";
import { PageSection } from "@/components/layout/page-section";
import { SiteLink } from "@/components/ui/link";
import { homeContent } from "../content/es";

export function LauraProfile() {
  return (
    <PageSection aria-labelledby="laura-title" className="border-y border-moss/15">
      <PageContainer className="motion-reveal grid gap-10 md:grid-cols-[0.7fr_1fr] md:items-center">
        <div className="relative aspect-[4/5] min-h-64 overflow-hidden rounded-card bg-sand">
          <Image alt="Laura, profesional de Lorente Legal" className="object-cover" fill sizes="(min-width: 768px) 40vw, 100vw" src="/images/Foto%20Laura.jpeg" />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sage">Sobre la profesional</p>
          <h2 id="laura-title" className="mt-3 font-display text-heading sm:text-heading-lg">{homeContent.laura.name}</h2>
          <p className="mt-3 text-lg font-semibold text-moss">{homeContent.laura.title}</p>
          <p className="mt-5 max-w-xl leading-8 text-ink/70">{homeContent.laura.body}</p>
          <SiteLink href={homeContent.laura.path} className="mt-7 inline-block font-semibold transition-colors duration-200 hover:text-sage">Conoce a Laura</SiteLink>
        </div>
      </PageContainer>
    </PageSection>
  );
}
