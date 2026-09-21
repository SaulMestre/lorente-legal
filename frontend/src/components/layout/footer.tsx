import { PageContainer } from "./page-container";
import { FooterContent } from "./footer-content";

export function Footer() {
  return <footer className="bg-ink py-12 text-paper"><PageContainer><FooterContent /><div className="mt-10 border-t border-paper/20 pt-5 text-xs text-paper/60">© {new Date().getFullYear()} Lorente Legal</div></PageContainer></footer>;
}
