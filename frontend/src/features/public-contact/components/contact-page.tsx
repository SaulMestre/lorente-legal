import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ContactFormSection } from "./contact-form-section";
import { ContactHero } from "./contact-hero";
import { ContactSteps } from "./contact-steps";
import { OfficeInfo } from "./office-info";
import { PersonalAttention } from "./personal-attention";

export function ContactPage() {
  return (
    <>
      <Header />
      <main id="contact-content">
        <ContactHero />
        <ContactFormSection />
        <ContactSteps />
        <PersonalAttention />
        <OfficeInfo />
      </main>
      <Footer />
    </>
  );
}
