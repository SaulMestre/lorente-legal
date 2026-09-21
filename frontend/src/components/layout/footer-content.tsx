import { LanguageSelector } from "./language-selector";

export function FooterContent() {
  return <div className="grid gap-8 sm:grid-cols-3"><div><p className="font-display text-xl font-semibold">Lorente Legal</p><p className="mt-2 max-w-xs text-sm text-paper/70">Despacho jurídico con asesoramiento cercano y claro.</p></div><div><p className="text-sm font-semibold">Contacto</p><p className="mt-2 text-sm text-paper/70">Datos de contacto próximamente.</p></div><div><p className="text-sm font-semibold">Idioma</p><div className="mt-2"><LanguageSelector /></div></div></div>;
}
