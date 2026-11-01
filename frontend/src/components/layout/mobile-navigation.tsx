"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { navigationEs } from "@/features/public-home/content/navigation-es";
import { SiteLink } from "@/components/ui/link";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <Button type="button" variant="outline" aria-expanded={isOpen} aria-controls="mobile-navigation" onClick={() => setIsOpen((value) => !value)} className="px-4 py-2">
        {isOpen ? "Cerrar menú" : "Abrir menú"}
      </Button>
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
