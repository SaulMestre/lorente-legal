"use client";

import { useState } from "react";
import { navigationEs } from "@/features/public-home/content/navigation-es";
import { SiteLink } from "@/components/ui/link";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button type="button" aria-expanded={isOpen} aria-controls="mobile-navigation" onClick={() => setIsOpen((value) => !value)} className="min-h-11 rounded-full border border-moss px-4 text-sm font-semibold text-moss">
        {isOpen ? "Cerrar menú" : "Abrir menú"}
      </button>
      {isOpen ? (
        <nav id="mobile-navigation" aria-label="Navegación móvil" className="absolute inset-x-0 top-full border-b border-moss/20 bg-paper px-5 py-5 shadow-lg">
          <ul className="mx-auto grid max-w-6xl gap-3">
            {navigationEs.map((item) => (
              <li key={item.path}>
                <SiteLink href={item.path} onClick={() => setIsOpen(false)} className="block py-2 no-underline">{item.label}</SiteLink>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </div>
  );
}
