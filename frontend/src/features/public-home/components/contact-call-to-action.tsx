import { PageContainer } from "@/components/layout/page-container";
import { PageSection } from "@/components/layout/page-section";
import { ButtonLink } from "@/components/ui/button-link";
import { homeContent } from "../content/es";

export function ContactCallToAction() {
  return (
    <PageSection>
      <PageContainer className="motion-reveal flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="font-display text-heading sm:text-heading-lg">{homeContent.contact.title}</h2>
          <p className="mt-4 max-w-xl text-lg text-ink/70">{homeContent.contact.body}</p>
        </div>
        <ButtonLink href={homeContent.contact.path}>{homeContent.contact.action}</ButtonLink>
      </PageContainer>
    </PageSection>
  );
}
