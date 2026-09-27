import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ContactCallToAction } from "./contact-call-to-action";
import { FirmIntroduction } from "./firm-introduction";
import { HeroSection } from "./hero-section";
import { ImmigrationHighlight } from "./immigration-highlight";
import { LauraProfile } from "./laura-profile";
import { PracticeAreas } from "./practice-areas";

export function HomePage() {
  return <><Header /><main id="home-content"><HeroSection /><FirmIntroduction /><PracticeAreas /><ImmigrationHighlight /><LauraProfile /><ContactCallToAction /></main><Footer /></>;
}
