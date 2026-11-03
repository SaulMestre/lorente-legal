import Image from "next/image";
import { PageContainer } from "@/components/layout/page-container";
import { PageSection } from "@/components/layout/page-section";
import { contactContent } from "../content/es";

export function PersonalAttention() {
  const { personal } = contactContent;

  return (
    <PageSection aria-labelledby="personal-title" className="bg-moss text-paper">
      <PageContainer className="motion-reveal grid items-center gap-10 md:grid-cols-[0.45fr_1fr] md:gap-16">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-card bg-sand md:max-w-none">
          <Image alt={personal.imageAlt} className="object-cover" fill sizes="(min-width: 768px) 30vw, 320px" src="/images/Foto%20Laura.jpeg" />
        </div>
        <div>
          <h2 id="personal-title" className="font-display text-heading sm:text-heading-lg">{personal.title}</h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-paper/85">{personal.body}</p>
        </div>
      </PageContainer>
    </PageSection>
  );
}
