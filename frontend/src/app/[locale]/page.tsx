import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HomePage } from "@/features/public-home";
import { isPublishedLocale } from "@/lib/i18n/locale-config";

export const metadata: Metadata = {
  title: "Lorente Legal | Despacho jurídico",
  description: "Asesoramiento jurídico cercano y claro para decisiones importantes.",
  alternates: { canonical: "/es/" },
  openGraph: {
    title: "Lorente Legal | Despacho jurídico",
    description: "Asesoramiento jurídico cercano y claro para decisiones importantes.",
    url: "/es/",
    type: "website",
    locale: "es_ES",
  },
};

export default async function LocalizedHomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isPublishedLocale(locale)) {
    notFound();
  }

  return <HomePage />;
}
