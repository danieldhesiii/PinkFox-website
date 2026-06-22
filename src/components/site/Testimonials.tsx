"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, A11y } from "swiper/modules";
import { Star } from "@phosphor-icons/react";
import Reveal from "./Reveal";

/**
 * Sample testimonials — replace with the salon's real Facebook reviews.
 * Keep each quote to ~3 lines and attribute with a real first name + service.
 */
const testimonials = [
  {
    quote:
      "Honestly obsessed with my lashes. They lasted weeks and looked so natural. I won't go anywhere else now.",
    name: "Sophie M.",
    service: "Lash extensions",
  },
  {
    quote:
      "My balayage came out exactly how I pictured it. She really listened and the colour is gorgeous.",
    name: "Amelia R.",
    service: "Hair & colour",
  },
  {
    quote:
      "Best nails I've had in Brentwood by a mile. The art was so neat and they still look perfect.",
    name: "Chloe T.",
    service: "Gel & nail art",
  },
  {
    quote:
      "Booking on WhatsApp was so easy and the studio is lovely and calm. Felt looked after the whole time.",
    name: "Hannah P.",
    service: "Brows & lashes",
  },
];

export default function Testimonials() {
  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <section className="bg-cream pb-24 lg:pb-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <h2 className="max-w-2xl font-display text-4xl leading-tight text-ink sm:text-5xl">
            Loved by the people of <span className="italic text-rose-deep">Brentwood.</span>
          </h2>
        </Reveal>

        <Reveal className="mt-12">
          <Swiper
            modules={[Pagination, Autoplay, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={reduce ? false : { delay: 4500, disableOnInteraction: false }}
            loop={!reduce}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-14"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.name} className="h-auto">
                <figure className="flex h-full flex-col gap-5 rounded-3xl border border-rose/12 bg-white p-7 shadow-[0_20px_50px_-30px_rgba(120,40,60,0.3)]">
                  <div className="flex gap-0.5 text-rose">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} weight="fill" className="h-4 w-4" />
                    ))}
                  </div>
                  <blockquote className="font-display text-xl leading-snug text-ink">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-auto">
                    <span className="block font-medium text-ink">{t.name}</span>
                    <span className="text-sm text-ink-soft">{t.service}</span>
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>
      </div>
    </section>
  );
}
