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

      <div className="relative mx-auto grid min-h-[calc(100dvh-7rem)] max-w-7xl items-center gap-8 px-5 pb-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-20">
        {/* Copy */}
        <div className="order-1 lg:order-1">
          <span className="inline-flex items-center gap-2 rounded-full border border-rose/25 bg-white/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-rose-deep">
            <Sparkle weight="fill" className="h-3.5 w-3.5" />
            Brentwood beauty studio
          </span>

          <h1
            ref={headingRef}
            className="mt-6 font-display text-[2.1rem] font-medium leading-[1.06] tracking-tight text-ink sm:text-5xl lg:text-[4.4rem]"
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

        {/* Editorial collage */}
        <div className="order-2 lg:order-2">
          <div className="relative mx-auto grid max-w-sm grid-cols-[1.4fr_1fr] grid-rows-[1fr_1fr] gap-2.5 sm:max-w-md sm:gap-3 lg:max-w-none">

            {/* Left — tall hair panel */}
            <div className="row-span-2 overflow-hidden rounded-[1.25rem] shadow-[0_20px_50px_-16px_rgba(120,40,60,0.28)] sm:rounded-[1.6rem]">
              <div className="relative h-full min-h-[280px] sm:min-h-[380px] lg:min-h-[420px]">
                <Image
                  src="/gallery/hair/2.png"
                  alt="Copper balayage hair colour at PinkFox"
                  fill
                  priority
                  sizes="(max-width:1024px) 55vw, 26vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.04]"
                />
                {/* editorial label */}
                <span className="absolute bottom-4 left-4 rounded-full bg-white/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-rose-deep backdrop-blur-sm">
                  Hair
                </span>
              </div>
            </div>

            {/* Top right — lashes */}
            <div className="overflow-hidden rounded-[1.25rem] shadow-[0_16px_40px_-14px_rgba(120,40,60,0.22)] sm:rounded-[1.6rem]">
              <div className="relative aspect-square">
                <Image
                  src="/gallery/beauty/2.png"
                  alt="Volume lash extensions at PinkFox"
                  fill
                  priority
                  sizes="(max-width:1024px) 38vw, 18vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.04]"
                />
                <span className="absolute bottom-3 left-3 rounded-full bg-white/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-rose-deep backdrop-blur-sm">
                  Lashes
                </span>
              </div>
            </div>

            {/* Bottom right — nails */}
            <div className="overflow-hidden rounded-[1.25rem] shadow-[0_16px_40px_-14px_rgba(120,40,60,0.22)] sm:rounded-[1.6rem]">
              <div className="relative aspect-square">
                <Image
                  src="/hero/collage-nails.png"
                  alt="Pink glitter french gel nails at PinkFox"
                  fill
                  sizes="(max-width:1024px) 38vw, 18vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.04]"
                />
                <span className="absolute bottom-3 left-3 rounded-full bg-white/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-rose-deep backdrop-blur-sm">
                  Nails
                </span>
              </div>
            </div>

            {/* decorative blush circle */}
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-4 -right-4 h-20 w-20 rounded-full bg-blush"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
