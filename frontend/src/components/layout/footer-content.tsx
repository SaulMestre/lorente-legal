import { LanguageSelector } from "./language-selector";
import { contactInfo } from "@/lib/config/contact-info";

export function FooterContent() {
  return (
    <div className="grid gap-8 sm:grid-cols-3">
      <div>
        <p className="font-display text-xl font-semibold">Lorente Legal</p>
        <p className="mt-2 max-w-xs text-sm text-paper/70">Despacho jurídico con asesoramiento cercano y claro.</p>
      </div>
      <div>
        <p className="text-sm font-semibold">Contacto</p>
        <div className="mt-2 flex flex-col items-start gap-1 text-sm text-paper/70">
          <a href={contactInfo.phoneHref} className="underline underline-offset-4">{contactInfo.phoneDisplay}</a>
          <a href={contactInfo.whatsappHref} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Hablar por WhatsApp</a>
        </div>
      </div>
      <div>
        <p className="text-sm font-semibold">Idioma</p>
        <div className="mt-2"><LanguageSelector /></div>
      </div>
    </div>
  );
}
