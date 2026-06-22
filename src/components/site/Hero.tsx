"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Sparkle, WhatsappLogo } from "@phosphor-icons/react";
import { whatsappLink } from "@/lib/site";

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      el.classList.add("reveal-in");
      return;
    }

    let cancelled = false;
    import("splitting").then(({ default: Splitting }) => {
      if (cancelled || !el) return;
      Splitting({ target: el, by: "chars" });
      // next frame so the split spans paint in their hidden state first
      requestAnimationFrame(() => el && el.classList.add("reveal-in"));
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-cream pt-28 lg:pt-24"
    >
      {/* soft brand wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-24 h-[34rem] w-[34rem] rounded-full bg-blush/60 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 bottom-0 h-[26rem] w-[26rem] rounded-full bg-blush-soft blur-3xl"
      />

      <div className="relative mx-auto grid min-h-[calc(100dvh-7rem)] max-w-7xl items-center gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-20">
        {/* Copy */}
        <div className="order-2 lg:order-1">
          <span className="inline-flex items-center gap-2 rounded-full border border-rose/25 bg-white/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-rose-deep">
            <Sparkle weight="fill" className="h-3.5 w-3.5" />
            Brentwood beauty studio
          </span>

          <h1
            ref={headingRef}
            className="mt-6 font-display text-[2.7rem] font-medium leading-[1.04] tracking-tight text-ink sm:text-6xl lg:text-[4.4rem]"
          >
            Lashes, hair &amp; nails, <em className="italic text-rose-deep">done beautifully.</em>
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
            A cosy Brentwood studio for lashes, hair and nails. Book your
            appointment in seconds, straight over WhatsApp.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-rose-deep px-7 py-3.5 text-base font-medium text-primary-foreground shadow-[0_14px_30px_-12px_var(--rose-deep)] transition-transform duration-300 hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <WhatsappLogo weight="fill" className="h-5 w-5" />
              Book on WhatsApp
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center justify-center rounded-full border border-ink/15 bg-white/50 px-7 py-3.5 text-base font-medium text-ink transition-colors hover:border-rose/40 hover:text-rose-deep"
            >
              View the gallery
            </a>
          </div>
        </div>

        {/* Portrait */}
        <div className="order-1 lg:order-2">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-md">
            <div
              aria-hidden
              className="absolute inset-0 -rotate-2 rounded-[2.5rem] bg-white/70 shadow-[0_30px_80px_-30px_rgba(120,40,60,0.35)]"
            />
            <Image
              src="/hero/hero-portrait.png"
              alt="Bridal pearl updo styled at the PinkFox studio"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 42vw"
              className="rounded-[2.25rem] object-cover p-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
