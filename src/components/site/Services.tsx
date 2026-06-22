"use client";

import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react";
import { services, type ServiceKey } from "@/lib/site";
import Reveal from "./Reveal";

const cover: Record<ServiceKey, string> = {
  beauty: "/gallery/beauty/1.png",
  hair: "/gallery/hair/1.png",
  nails: "/gallery/nails/1.png",
};

function selectGallery(key: ServiceKey) {
  window.dispatchEvent(new CustomEvent("pinkfox:gallery", { detail: key }));
}

export default function Services() {
  const [beauty, hair, nails] = services;

  return (
    <section id="services" className="relative bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="max-w-xl font-display text-4xl leading-tight text-ink sm:text-5xl">
            One studio for the three things you never want to compromise on.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-2 lg:grid-rows-2">
          {/* Beauty — large feature cell */}
          <Reveal className="lg:row-span-2">
            <ServiceCard service={beauty} image={cover.beauty} large />
          </Reveal>

          <Reveal delay={80}>
            <ServiceCard service={hair} image={cover.hair} />
          </Reveal>

          <Reveal delay={160}>
            <ServiceCard service={nails} image={cover.nails} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  image,
  large = false,
}: {
  service: (typeof services)[number];
  image: string;
  large?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={() => selectGallery(service.key)}
      className={[
        "group relative flex h-full w-full flex-col justify-end overflow-hidden rounded-3xl text-left",
        large ? "min-h-[28rem] lg:min-h-full" : "min-h-[18rem]",
      ].join(" ")}
    >
      <Image
        src={image}
        alt={service.title}
        fill
        sizes={large ? "(max-width:1024px) 100vw, 50vw" : "(max-width:1024px) 100vw, 50vw"}
        className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.05]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/25 to-transparent" />

      <div className="relative p-6 sm:p-7">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-display text-3xl text-white sm:text-[2rem]">
            {service.title}
          </h3>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors group-hover:bg-rose-deep">
            <ArrowUpRight className="h-5 w-5" />
          </span>
        </div>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/85">
          {service.blurb}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {service.treatments.map((t) => (
            <li
              key={t}
              className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-sm"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </button>
  );
}
