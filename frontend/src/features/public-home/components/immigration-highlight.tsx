import { PageContainer } from "@/components/layout/page-container";
import { PageSection } from "@/components/layout/page-section";
import { ButtonLink } from "@/components/ui/button-link";
import { SiteLink } from "@/components/ui/link";
import { homeContent } from "../content/es";

export function ImmigrationHighlight() {
  return (
    <PageSection className="bg-moss text-white">
      <PageContainer className="motion-reveal grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/75">Áreas destacadas</p>
          <h2 className="mt-3 max-w-2xl font-display text-heading sm:text-heading-lg">{homeContent.highlight.title}</h2>
          <p className="mt-4 max-w-xl text-white/80">{homeContent.highlight.body}</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <ButtonLink href="/es/extranjeria" variant="light">Extranjería</ButtonLink>
          <ButtonLink href="/es/nacionalidad" variant="outline-inverse">Nacionalidad</ButtonLink>
        </div>
      </PageContainer>
    </PageSection>
  );
}
