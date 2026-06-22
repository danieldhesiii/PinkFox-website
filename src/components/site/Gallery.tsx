"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { CaretLeft, CaretRight, X } from "@phosphor-icons/react";
import { gallery, galleryTabs, type ServiceKey } from "@/lib/site";
import Reveal from "./Reveal";

export default function Gallery() {
  const [tab, setTab] = useState<ServiceKey>("beauty");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const images = gallery[tab];

  // Allow the Services cards to jump straight to a category.
  useEffect(() => {
    const handler = (e: Event) => {
      const key = (e as CustomEvent).detail as ServiceKey;
      if (key) {
        setTab(key);
        document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
      }
    };
    window.addEventListener("pinkfox:gallery", handler);
    return () => window.removeEventListener("pinkfox:gallery", handler);
  }, []);

  const close = useCallback(() => setLightbox(null), []);
  const next = useCallback(
    () => setLightbox((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length]
  );
  const prev = useCallback(
    () => setLightbox((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (lightbox === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox, close, next, prev]);

  return (
    <section id="gallery" className="bg-blush-soft py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-display text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl">
            Recent work, <span className="italic text-rose-deep">straight from the studio.</span>
          </h2>
          <p className="max-w-sm text-ink-soft">
            A peek at real PinkFox finishes. Tap any photo to take a closer look.
          </p>
        </Reveal>

        {/* Tabs */}
        <Reveal className="mt-10">
          <div
            role="tablist"
            aria-label="Gallery categories"
            className="inline-flex flex-wrap gap-1 rounded-full border border-rose/15 bg-white/70 p-1.5 backdrop-blur-sm"
          >
            {galleryTabs.map((t) => {
              const active = t.key === tab;
              return (
                <button
                  key={t.key}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setTab(t.key)}
                  className={[
                    "rounded-full px-5 py-2.5 text-sm font-medium transition-colors",
                    active
                      ? "bg-rose-deep text-primary-foreground shadow-sm"
                      : "text-ink/70 hover:text-rose-deep",
                  ].join(" ")}
                >
                  {t.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Masonry grid */}
        <div className="mt-10 columns-2 gap-4 [column-fill:_balance] md:columns-3 lg:gap-5">
          {images.map((img, i) => (
            <Reveal
              key={img.src}
              delay={(i % 3) * 70}
              className="mb-4 break-inside-avoid lg:mb-5"
            >
              <button
                type="button"
                onClick={() => setLightbox(i)}
                className="group relative block w-full overflow-hidden rounded-2xl bg-white"
                aria-label={`Open ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={900}
                  height={1200}
                  sizes="(max-width:768px) 45vw, 30vw"
                  className="h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <span className="absolute inset-0 bg-rose-deep/0 transition-colors duration-500 group-hover:bg-rose-deep/10" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/85 p-4 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
        >
          <button
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous"
            className="absolute left-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
          >
            <CaretLeft className="h-6 w-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next"
            className="absolute right-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
          >
            <CaretRight className="h-6 w-6" />
          </button>

          <figure
            className="relative max-h-[85vh] w-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              width={1200}
              height={1600}
              className="max-h-[85vh] w-auto rounded-xl object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-white/70">
              {images[lightbox].alt}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
