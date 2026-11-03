import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactPage } from "@/features/public-contact";
import { isPublishedLocale } from "@/lib/i18n/locale-config";

const title = "Contacto";
const description = "Contacta con Lorente Legal por WhatsApp, teléfono o email, o déjanos tus datos y revisaremos tu consulta.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/es/contacto" },
  openGraph: { title: `${title} | Lorente Legal`, description, url: "/es/contacto", type: "website", locale: "es_ES" },
};

export default async function LocalizedContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isPublishedLocale(locale)) {
    notFound();
  }

  return <ContactPage />;
}
