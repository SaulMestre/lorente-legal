import { PageContainer } from "@/components/layout/page-container";
import { PageSection } from "@/components/layout/page-section";
import { ButtonLink } from "@/components/ui/button-link";
import { SiteLink } from "@/components/ui/link";
import { homeContent } from "../content/es";

export function PracticeAreas() {
  return (
    <PageSection aria-labelledby="practice-title" className="bg-sand/50">
      <PageContainer className="motion-reveal">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sage">Áreas de práctica</p>
        <h2 id="practice-title" className="mt-3 font-display text-heading sm:text-heading-lg">Orientación para cada etapa</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {homeContent.practiceAreas.map((area) => (
            <article key={area.title} className="rounded-card border border-ink/10 bg-paper p-6 transition duration-200 ease-out hover:border-sage/50 hover:shadow-md focus-within:border-sage/50 focus-within:shadow-md">
              <h3 className="font-display text-card-heading">{area.title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink/65">{area.description}</p>
              <ButtonLink href={area.path} className="mt-6 px-4 py-2">Conoce el área</ButtonLink>
            </article>
          ))}
        </div>
      </PageContainer>
    </PageSection>
  );
}
