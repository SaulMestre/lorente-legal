import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ContactCallToAction } from "./contact-call-to-action";
import { FirmIntroduction } from "./firm-introduction";
import { HeroSection } from "./hero-section";
import { ImmigrationHighlight } from "./immigration-highlight";
import { LauraProfile } from "./laura-profile";
import { PracticeAreas } from "./practice-areas";
import { WheelPager, type WheelSection } from "./wheel-pager";

const sections: WheelSection[] = [
  { id: "inicio", label: "Inicio", content: <HeroSection /> },
  { id: "home-introduction", label: "Presentación", content: <FirmIntroduction /> },
  { id: "areas", label: "Áreas de práctica", content: <PracticeAreas /> },
  { id: "extranjeria", label: "Extranjería y nacionalidad", content: <ImmigrationHighlight /> },
  { id: "sobre-laura", label: "Sobre Laura", content: <LauraProfile /> },
  { id: "contacto", label: "Contacto", content: <><ContactCallToAction /><Footer /></> },
];

export function HomePage() {
  return <><Header /><main id="home-content"><WheelPager sections={sections} /></main></>;
}
