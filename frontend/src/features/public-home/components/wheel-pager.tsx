"use client";

import { animate } from "motion";
import { type ReactNode, useLayoutEffect, useRef, useState, useSyncExternalStore } from "react";

export type WheelSection = { id: string; label: string; content: ReactNode };

export const WHEEL_SECTION_EVENT = "home-wheel-section";

type Direction = 1 | -1;

const DURATION = 0.9;
const ROTATION = 70;
const EASE: [number, number, number, number] = [0.65, 0, 0.35, 1];
const WHEEL_GAP_MS = 120;
const SWIPE_THRESHOLD = 60;
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(onChange: () => void) {
  const query = window.matchMedia(REDUCED_MOTION_QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function canScroll(panel: HTMLElement, direction: Direction) {
  return direction > 0 ? panel.scrollTop + panel.clientHeight < panel.scrollHeight - 2 : panel.scrollTop > 2;
}

function isTypingTarget(target: EventTarget | null) {
  return target instanceof HTMLElement && (target.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName));
}

export function WheelPager({ sections }: { sections: WheelSection[] }) {
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(REDUCED_MOTION_QUERY).matches,
    () => true,
  );
  const enabled = !reducedMotion;
  const [active, setActive] = useState(0);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    if (!enabled) return;

    const panels = panelRefs.current.filter((panel): panel is HTMLDivElement => panel !== null);
    const count = panels.length;
    const root = document.documentElement;
    let current = Math.max(0, sections.findIndex((section) => `#${section.id}` === window.location.hash));
    let locked = false;
    let lastWheel = 0;
    let touchStartY = 0;
    let touchStartScroll = 0;
    let unlockTimer: number | undefined;

    const announce = (index: number) =>
      window.dispatchEvent(new CustomEvent(WHEEL_SECTION_EVENT, { detail: index }));

    const resetPanel = (panel: HTMLElement, visible: boolean) => {
      panel.style.visibility = visible ? "visible" : "hidden";
      panel.style.transform = "none";
      panel.style.opacity = "1";
    };

    const go = (target: number, direction: Direction) => {
      if (locked || target === current) return;
      const from = panels[current];
      const to = panels[target];
      locked = true;
      current = target;
      setActive(target);
      announce(target);
      window.history.replaceState(null, "", target === 0 ? window.location.pathname + window.location.search : `#${sections[target].id}`);

      to.scrollTop = direction > 0 ? 0 : to.scrollHeight;
      to.style.visibility = "visible";
      const options = { duration: DURATION, ease: EASE };
      animate(from, { y: ["0%", `${-direction * 100}%`], rotateX: [0, direction * ROTATION], opacity: [1, 0] }, options);
      animate(to, { y: [`${direction * 100}%`, "0%"], rotateX: [-direction * ROTATION, 0], opacity: [0, 1] }, options).then(() => {
        resetPanel(from, false);
        resetPanel(to, true);
        unlockTimer = window.setTimeout(() => {
          locked = false;
        }, 100);
      });
    };

    const step = (direction: Direction) => go((current + direction + count) % count, direction);

    const goToIndex = (index: number) => {
      const diff = (index - current + count) % count;
      go(index, diff <= count / 2 ? 1 : -1);
    };

    const onWheel = (event: WheelEvent) => {
      if (event.ctrlKey || Math.abs(event.deltaX) > Math.abs(event.deltaY) || Math.abs(event.deltaY) < 2) return;
      const direction: Direction = event.deltaY > 0 ? 1 : -1;
      const now = performance.now();
      const isNewGesture = now - lastWheel > WHEEL_GAP_MS;
      lastWheel = now;

      if (canScroll(panels[current], direction)) return;
      event.preventDefault();
      if (isNewGesture) step(direction);
    };

    const onTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0].clientY;
      touchStartScroll = panels[current].scrollTop;
    };

    const onTouchEnd = (event: TouchEvent) => {
      const delta = touchStartY - event.changedTouches[0].clientY;
      if (Math.abs(delta) < SWIPE_THRESHOLD) return;
      const direction: Direction = delta > 0 ? 1 : -1;
      const panel = panels[current];
      // A swipe that scrolled the panel content must not also change section.
      if (panel.scrollTop !== touchStartScroll || canScroll(panel, direction)) return;
      step(direction);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.altKey || event.ctrlKey || event.metaKey || isTypingTarget(event.target)) return;
      const direction: Direction | 0 = ["ArrowDown", "PageDown"].includes(event.key) ? 1 : ["ArrowUp", "PageUp"].includes(event.key) ? -1 : 0;
      if (direction === 0) return;
      event.preventDefault();
      const panel = panels[current];
      if (canScroll(panel, direction)) {
        panel.scrollBy({ top: direction * (event.key.startsWith("Page") ? panel.clientHeight * 0.9 : 80) });
      } else {
        step(direction);
      }
    };

    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as Element).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!anchor) return;
      const index = sections.findIndex((section) => `#${section.id}` === anchor.getAttribute("href"));
      if (index < 0) return;
      event.preventDefault();
      goToIndex(index);
    };

    const onHashChange = () => {
      const index = sections.findIndex((section) => `#${section.id}` === window.location.hash);
      if (index >= 0) goToIndex(index);
    };

    root.dataset.pager = "on";
    panels.forEach((panel, index) => resetPanel(panel, index === current));
    setActive(current);
    announce(current);

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("hashchange", onHashChange);
    document.addEventListener("click", onClick);

    return () => {
      window.clearTimeout(unlockTimer);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("hashchange", onHashChange);
      document.removeEventListener("click", onClick);
      delete root.dataset.pager;
      panels.forEach((panel) => {
        panel.style.visibility = "";
        panel.style.transform = "";
        panel.style.opacity = "";
      });
      announce(-1);
    };
  }, [enabled, sections]);

  return (
    <div className={enabled ? "fixed inset-0 overflow-hidden [perspective:1600px]" : undefined}>
      {sections.map((section, index) => (
        <div
          key={section.id}
          id={section.id}
          ref={(node) => {
            panelRefs.current[index] = node;
          }}
          aria-hidden={enabled && index !== active ? true : undefined}
          inert={enabled && index !== active}
          className={enabled ? "absolute inset-0 overflow-y-auto overscroll-contain [backface-visibility:hidden]" : undefined}
        >
          <div className={enabled ? `flex min-h-full flex-col [&>section]:my-auto ${index > 0 ? "pt-20" : ""}` : undefined}>{section.content}</div>
        </div>
      ))}
      {enabled ? (
        <nav aria-label="Secciones de la página" className="fixed right-3 top-1/2 z-40 -translate-y-1/2 sm:right-5">
          <ul className="grid gap-3">
            {sections.map((section, index) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  aria-label={section.label}
                  aria-current={index === active ? "true" : undefined}
                  title={section.label}
                  className={`block rounded-full ring-1 ring-paper/70 transition-all duration-300 ${index === active ? "h-4 w-4 bg-sage" : "h-2.5 w-2.5 bg-ink/50 hover:bg-sage"}`}
                />
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </div>
  );
}
