import Image from "next/image";
import { Heart, ChatCircle, MapPin } from "@phosphor-icons/react/dist/ssr";
import Reveal from "./Reveal";

const points = [
  {
    icon: Heart,
    title: "A proper one-to-one",
    body: "No conveyor belt. Just unhurried time in the chair and a finish you'll actually love.",
  },
  {
    icon: ChatCircle,
    title: "Booking without the faff",
    body: "Message on WhatsApp, pick a time, done. No apps, no accounts, no hold music.",
  },
  {
    icon: MapPin,
    title: "Right here in Brentwood",
    body: "A warm, friendly studio that locals come back to again and again.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem]">
            <Image
              src="/hero/about-salon.png"
              alt="Inside the PinkFox studio in Brentwood"
              fill
              sizes="(max-width:1024px) 90vw, 42vw"
              className="object-cover"
            />
          </div>
          <div
            aria-hidden
            className="absolute -bottom-5 -right-3 hidden h-28 w-28 rounded-full bg-blush sm:block"
          />
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <h2 className="font-display text-4xl leading-tight text-ink sm:text-5xl lg:text-[3.4rem]">
              The little Brentwood studio that treats you like a regular from day one.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-soft">
              PinkFox is where lashes, hair and nails come together under one
              roof, done with care and zero rush. You&apos;ll leave feeling like
              the most polished version of yourself.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-3 lg:gap-5">
            {points.map((p, i) => (
              <Reveal key={p.title} delay={120 + i * 80}>
                <div className="flex h-full flex-col gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blush text-rose-deep">
                    <p.icon weight="fill" className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-xl text-ink">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-soft">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
