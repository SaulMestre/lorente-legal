import { PageContainer } from "@/components/layout/page-container";
import { PageSection } from "@/components/layout/page-section";
import { homeContent } from "../content/es";

export function FirmIntroduction() {
  return (
    <PageSection id="home-introduction">
      <PageContainer className="motion-reveal grid gap-8 md:grid-cols-[0.7fr_1fr]">
        <h2 className="font-display text-heading leading-tight sm:text-heading-lg">{homeContent.introduction.title}</h2>
        <p className="max-w-2xl text-lg leading-8 text-ink/70">{homeContent.introduction.body}</p>
      </PageContainer>
    </PageSection>
  );
}
