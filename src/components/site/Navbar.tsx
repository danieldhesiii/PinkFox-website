"use client";

import { useEffect, useState } from "react";
import { FacebookLogo, List, X } from "@phosphor-icons/react";
import { nav, site, whatsappLink } from "@/lib/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    // passive scroll flag toggle only — no per-frame work / no React state churn
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-40 transition-colors duration-500",
        scrolled || open
          ? "border-b border-border/70 bg-[oklch(0.985_0.008_70/0.9)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      ].join(" ")}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-[72px]">
        <a href="#top" className="flex items-baseline gap-1.5" aria-label="PinkFox home">
          <span className="font-display text-2xl font-semibold tracking-tight text-ink lg:text-[1.7rem]">
            Pink<span className="text-rose-deep">Fox</span>
          </span>
          <span className="hidden text-[0.65rem] font-medium uppercase tracking-[0.22em] text-ink-soft sm:inline">
            {site.location}
          </span>
        </a>

        <div className="hidden items-center gap-9 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium text-ink/80 transition-colors hover:text-rose-deep after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-rose-deep after:transition-all after:duration-300 hover:after:w-full"
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
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink/70 transition-colors hover:bg-blush hover:text-rose-deep"
          >
            <FacebookLogo weight="fill" className="h-5 w-5" />
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-rose-deep px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-transform duration-300 hover:-translate-y-0.5 active:scale-95 sm:inline-flex"
          >
            Book now
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <List className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className="overflow-hidden border-t border-border/60 backdrop-blur-md lg:hidden"
        style={{
          background: "oklch(0.985 0.008 70 / 0.97)",
          maxHeight: open ? "520px" : "0px",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "max-height 0.3s ease, opacity 0.2s ease",
        }}
      >
        <div className="flex flex-col gap-1 px-5 py-4">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 font-display text-2xl text-ink transition-colors hover:bg-blush-soft"
            >
              {item.label}
            </a>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-rose-deep px-5 py-3 text-sm font-medium text-primary-foreground"
          >
            Book on WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
