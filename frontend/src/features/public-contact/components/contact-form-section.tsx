import { PageContainer } from "@/components/layout/page-container";
import { PageSection } from "@/components/layout/page-section";
import { ContactForm } from "./contact-form";
import { contactContent } from "../content/es";

export function ContactFormSection() {
  const { form } = contactContent;

  return (
    <PageSection aria-labelledby="form-title" className="border-y border-moss/15 bg-sand/50">
      <PageContainer className="motion-reveal grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-moss">{form.eyebrow}</p>
          <h2 id="form-title" className="mt-3 font-display text-heading sm:text-heading-lg">{form.title}</h2>
          <p className="mt-5 max-w-sm leading-8 text-ink/70">{form.body}</p>
        </div>
        <ContactForm />
      </PageContainer>
    </PageSection>
  );
}
