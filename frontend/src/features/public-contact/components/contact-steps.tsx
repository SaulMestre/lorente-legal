import { PageContainer } from "@/components/layout/page-container";
import { PageSection } from "@/components/layout/page-section";
import { contactContent } from "../content/es";

export function ContactSteps() {
  const { steps } = contactContent;

  return (
    <PageSection aria-labelledby="steps-title">
      <PageContainer className="motion-reveal">
        <h2 id="steps-title" className="font-display text-heading sm:text-heading-lg">{steps.title}</h2>
        <ol className="mt-10 grid gap-8 md:grid-cols-3 md:gap-10">
          {steps.items.map((step) => (
            <li key={step.number} className="border-t border-moss/30 pt-5">
              <span className="font-display text-display text-sage">{step.number}</span>
              <p className="mt-3 text-lg leading-8 text-ink/80">{step.text}</p>
            </li>
          ))}
        </ol>
      </PageContainer>
    </PageSection>
  );
}
