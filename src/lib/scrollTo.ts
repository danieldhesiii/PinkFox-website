/**
 * Scroll so the first heading/content inside a section lands just below the
 * fixed navbar. Measures real navbar height at call-time for every screen size.
 */
export function scrollTo(target: string) {
  const id = target.startsWith("#") ? target.slice(1) : target;
  const section = document.getElementById(id);
  if (!section) return;

  // Prefer the first heading inside the section so section padding doesn't
  // create a blank gap between the navbar and visible content.
  const heading = section.querySelector("h1, h2, h3, span[class*='tracking']") as HTMLElement | null;
  const el = heading ?? section;

  const navbar = document.querySelector("header") as HTMLElement | null;
  const navH = navbar ? navbar.offsetHeight : 64;
  // Small breathing room below navbar
  const gap = 28;
  const offset = navH + gap;

  const lenis = (window as unknown as { __lenis?: { scrollTo: (el: HTMLElement, opts: object) => void } }).__lenis;

  if (lenis) {
    lenis.scrollTo(el, { offset: -offset, duration: 1.0 });
  } else {
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
}
