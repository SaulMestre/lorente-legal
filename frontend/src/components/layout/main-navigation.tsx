import { navigationEs } from "@/features/public-home/content/navigation-es";
import { SiteLink } from "@/components/ui/link";

export function MainNavigation() {
  return (
    <nav aria-label="Navegación principal" className="hidden lg:block">
      <ul className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 text-sm">
        {navigationEs.map((item) => (
          <li key={item.path}>
            <SiteLink href={item.path} className="no-underline hover:text-copper">{item.label}</SiteLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
