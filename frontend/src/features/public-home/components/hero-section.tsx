import Image from "next/image";
import Link from "next/link";
import { SiteLink } from "@/components/ui/link";
import { HeroBackgroundVideo } from "./hero-background-video";
import { navigationEs } from "../content/navigation-es";
import { homeContent } from "../content/es";

export function HeroSection() {
  return (
    <>
      <section className="relative isolate hidden min-h-[min(760px,100svh)] overflow-hidden bg-moss text-paper lg:block">
        <HeroBackgroundVideo device="desktop" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-ink/35 via-ink/25 to-ink/75" />
        <div className="relative mx-auto flex min-h-[min(760px,100svh)] max-w-7xl flex-col justify-between px-6 py-10 sm:px-10 lg:px-14 lg:py-14">
          <div className="flex justify-center pt-8 sm:pt-12">
            <div className="flex items-stretch shadow-2xl shadow-ink/25">
              <Link
                aria-label="Lorente Legal, inicio"
                className="flex h-24 w-28 items-center justify-center bg-paper px-3 sm:w-32"
                href="/es/"
              >
                <Image
                  alt="Logotipo de Lorente Legal"
                  className="h-20 w-20 object-contain"
                  height={1254}
                  sizes="80px"
                  src="/images/logo_transparent.png"
                  width={1254}
                />
              </Link>
              <details className="group relative">
                <summary className="flex h-24 cursor-pointer list-none items-center gap-3 bg-ink px-5 text-sm font-semibold uppercase tracking-[0.16em] text-paper [&::-webkit-details-marker]:hidden">
                  <span aria-hidden="true" className="grid gap-1">
                    <span className="h-px w-5 bg-current" />
                    <span className="h-px w-5 bg-current" />
                    <span className="h-px w-5 bg-current" />
                  </span>
                  Menú
                </summary>
                <nav aria-label="Menú principal" className="absolute left-0 top-full z-20 min-w-60 bg-paper px-6 py-4 text-ink shadow-xl">
                  <ul className="grid gap-1">
                    {navigationEs.map((item) => (
                      <li key={item.path}>
                        <Link className="block py-2 text-sm no-underline transition-colors hover:text-sage" href={item.path}>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </details>
              <SiteLink
                className="button-interactive flex h-24 items-center bg-sage px-5 text-sm font-semibold text-white no-underline hover:bg-white hover:text-moss sm:px-7"
                href={homeContent.contact.path}
              >
                Contacto
              </SiteLink>
            </div>
          </div>

          <div className="flex items-end justify-between gap-8 pb-2">
            <div className="max-w-3xl">
              <h1 className="max-w-3xl font-display text-5xl leading-[0.98] sm:text-6xl xl:text-7xl">
                {homeContent.hero.title}
              </h1>
              <p className="mt-5 max-w-xl text-lg text-paper/85">{homeContent.hero.description}</p>
              <SiteLink
                className="button-interactive mt-7 inline-flex min-h-11 items-center rounded-xl bg-sage px-5 py-3 font-semibold text-white no-underline hover:bg-white hover:text-moss"
                href={homeContent.hero.primaryPath}
              >
                {homeContent.hero.primaryAction}
              </SiteLink>
            </div>
            <a className="mb-2 hidden shrink-0 items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-paper no-underline xl:flex" href="#home-introduction">
              Desplázate para explorar
              <span aria-hidden="true" className="h-3 w-3 rotate-45 border-b border-r border-current" />
            </a>
          </div>
        </div>
      </section>

      <section className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden bg-moss px-4 py-12 text-paper lg:hidden">
        <HeroBackgroundVideo device="mobile" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-ink/45 via-ink/40 to-ink/75" />
        <h1 className="sr-only">{homeContent.hero.title}</h1>
        <div className="relative flex w-full max-w-[420px] items-stretch shadow-2xl shadow-ink/25">
          <Link
            aria-label="Lorente Legal, inicio"
            className="flex h-24 w-[30%] items-center justify-center bg-paper px-2"
            href="/es/"
          >
            <Image
              alt="Logotipo de Lorente Legal"
              className="h-20 w-20 object-contain"
              height={1254}
              sizes="80px"
              src="/images/logo_transparent.png"
              width={1254}
            />
          </Link>
          <details className="group relative flex-1">
            <summary className="flex h-24 w-full cursor-pointer list-none items-center justify-center gap-2 bg-ink px-3 text-xs font-semibold uppercase tracking-[0.16em] text-paper [&::-webkit-details-marker]:hidden sm:gap-3 sm:px-5 sm:text-sm">
              <span aria-hidden="true" className="grid gap-1">
                <span className="h-px w-5 bg-current" />
                <span className="h-px w-5 bg-current" />
                <span className="h-px w-5 bg-current" />
              </span>
              Menú
            </summary>
            <nav aria-label="Menú principal" className="absolute left-0 top-full z-20 w-[min(16rem,calc(100vw-2rem))] bg-paper px-6 py-4 text-ink shadow-xl">
              <ul className="grid gap-1">
                {navigationEs.map((item) => (
                  <li key={item.path}>
                        <Link className="block py-2 text-sm no-underline transition-colors hover:text-sage" href={item.path}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </details>
          <SiteLink
            className="button-interactive flex h-24 w-[30%] items-center justify-center bg-sage px-2 text-xs font-semibold text-white no-underline hover:bg-white hover:text-moss sm:text-sm"
            href={homeContent.contact.path}
          >
            Contacto
          </SiteLink>
        </div>
        <a className="absolute bottom-10 flex flex-col items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-paper no-underline" href="#home-introduction">
          Desplázate para explorar
          <span aria-hidden="true" className="h-3 w-3 rotate-45 border-b border-r border-current" />
        </a>
      </section>
    </>
  );
}
