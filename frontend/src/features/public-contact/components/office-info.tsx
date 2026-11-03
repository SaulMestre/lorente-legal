import { PageContainer } from "@/components/layout/page-container";
import { PageSection } from "@/components/layout/page-section";
import { getButtonClassName } from "@/components/ui/button";
import { contactInfo } from "@/lib/config/contact-info";
import { contactContent } from "../content/es";

export function OfficeInfo() {
  const { office } = contactContent;
  const rows = [
    { label: office.labels.address, value: contactInfo.address },
    { label: office.labels.hours, value: contactInfo.hours },
    { label: office.labels.phone, value: contactInfo.phoneDisplay, href: contactInfo.phoneHref },
    { label: office.labels.email, value: contactInfo.emailDisplay, href: contactInfo.emailHref },
  ];

  return (
    <PageSection id="despacho" aria-labelledby="office-title" className="scroll-mt-8">
      <PageContainer className="motion-reveal grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <h2 id="office-title" className="font-display text-heading sm:text-heading-lg">{office.title}</h2>
        <div>
          <dl className="divide-y divide-moss/20 border-y border-moss/20">
            {rows.map((row) => (
              <div key={row.label} className="grid gap-1 py-4 sm:grid-cols-[8rem_1fr] sm:gap-6">
                <dt className="text-sm font-semibold uppercase tracking-[0.12em] text-moss">{row.label}</dt>
                <dd className="text-lg">
                  {row.href ? <a href={row.href} className="underline decoration-sage underline-offset-4">{row.value}</a> : row.value}
                </dd>
              </div>
            ))}
          </dl>
          <a
            href={contactInfo.mapsHref}
            {...(contactInfo.isMapsConfigured ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className={getButtonClassName("outline", "mt-8 min-h-12 w-full sm:w-auto")}
          >
            {office.maps}
            {contactInfo.isMapsConfigured ? <span className="sr-only"> (Google Maps, se abre en una pestaña nueva)</span> : null}
          </a>
        </div>
      </PageContainer>
    </PageSection>
  );
}
