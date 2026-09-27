import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import { isPublishedLocale, plannedLocales } from "@/lib/i18n/locale-config";
import "../globals.css";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const bodyFont = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

export function generateStaticParams() {
  return plannedLocales.filter((locale) => locale === "es").map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL("https://lorentelegal.es"),
  title: {
    default: "Lorente Legal | Despacho jurídico",
    template: "%s | Lorente Legal",
  },
  description: "Lorente Legal, despacho jurídico con asesoramiento cercano y claro.",
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  if (!isPublishedLocale(locale)) {
    notFound();
  }

  return <html lang={locale} className={`${displayFont.variable} ${bodyFont.variable}`}><body>{children}</body></html>;
}
