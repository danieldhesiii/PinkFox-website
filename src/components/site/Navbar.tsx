"use client";

import { useEffect, useState } from "react";
import { FacebookLogo, List, X } from "@phosphor-icons/react";
import { nav, site } from "@/lib/site";

function lenisScrollTo(href: string) {
  const section = document.querySelector(href) as HTMLElement | null;
  if (!section) return;
  // Scroll to first heading so section padding doesn't create a blank gap
  const heading = section.querySelector("h1, h2, h3, span[class*='tracking']") as HTMLElement | null;
  const el = heading ?? section;
  const navbar = document.querySelector("header") as HTMLElement | null;
  const offset = (navbar ? navbar.offsetHeight : 64) + 28;
  const lenis = (window as unknown as { __lenis?: { scrollTo: (el: HTMLElement, opts: object) => void } }).__lenis;
  if (lenis) {
    lenis.scrollTo(el, { offset: -offset, duration: 1.0 });
  } else {
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  function handleDesktopNav(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault();
    lenisScrollTo(href);
  }

  function handleMobileNav(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault();
    setOpen(false);
    setTimeout(() => lenisScrollTo(href), 340);
  }

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-40 transition-colors duration-500",
        scrolled || open
          ? "border-b border-border/70 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      ].join(" ")}
      style={scrolled || open ? { background: "oklch(0.985 0.008 70 / 0.92)" } : {}}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-[72px]">
        {/* Logo */}
        <a
          href="#top"
          onClick={(e) => handleDesktopNav(e, "#top")}
          className="flex items-baseline gap-1.5"
          aria-label="PinkFox home"
        >
          <span className="font-display text-2xl font-semibold tracking-tight text-ink lg:text-[1.7rem]">
            Pink<span className="text-rose-deep">Fox</span>
          </span>
          <span className="hidden text-[0.65rem] font-medium uppercase tracking-[0.22em] text-ink-soft sm:inline">
            {site.location}
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleDesktopNav(e, item.href)}
              className="relative text-sm font-medium tracking-wide text-ink/75 transition-colors hover:text-rose-deep after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-rose-deep after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={site.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="PinkFox on Facebook"
            className="flex h-9 w-9 items-center justify-center rounded-full text-ink/60 transition-colors hover:bg-blush hover:text-rose-deep"
          >
            <FacebookLogo weight="fill" className="h-5 w-5" />
          </a>

          {/* Desktop CTA */}
          <a
            href="#booking"
            onClick={(e) => handleDesktopNav(e, "#booking")}
            className="hidden items-center gap-1.5 rounded-full border border-rose-deep/30 bg-rose-deep/8 px-5 py-2 text-sm font-medium tracking-wide text-rose-deep transition-all duration-300 hover:bg-rose-deep hover:text-white hover:shadow-[0_8px_20px_-8px_var(--rose-deep)] sm:inline-flex"
          >
            Book now
          </a>

          {/* Burger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-blush lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <List className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className="overflow-hidden lg:hidden"
        style={{
          background: "oklch(0.985 0.008 70 / 0.98)",
          backdropFilter: "blur(12px)",
          borderTop: open ? "1px solid oklch(0.9 0.012 30 / 0.6)" : "none",
          maxHeight: open ? "520px" : "0px",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "max-height 0.32s ease, opacity 0.22s ease",
        }}
      >
        <div className="flex flex-col gap-1 px-5 py-5">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleMobileNav(e, item.href)}
              className="rounded-2xl px-4 py-3.5 font-display text-[1.6rem] text-ink transition-colors hover:bg-blush/60 hover:text-rose-deep"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#booking"
            onClick={(e) => handleMobileNav(e, "#booking")}
            className="mt-3 flex items-center justify-center rounded-full bg-rose-deep py-3.5 text-sm font-medium tracking-wide text-white shadow-[0_8px_24px_-10px_var(--rose-deep)] transition-transform active:scale-[0.97]"
          >
            Book an appointment
          </a>
        </div>
      </div>
    </header>
  );
}
