"use client";

import { useState } from "react";
import { WhatsappLogo } from "@phosphor-icons/react";
import Reveal from "./Reveal";

type PriceItem = { name: string; price: string; note?: string };
type Category = { key: string; label: string; items: PriceItem[] };

const categories: Category[] = [
  {
    key: "beauty",
    label: "Beauty & Lashes",
    items: [
      { name: "Classic Lash Extensions", price: "£55", note: "Full set" },
      { name: "Classic Lash Infill", price: "£35", note: "2–3 week" },
      { name: "Volume Lash Extensions", price: "£70", note: "Full set" },
      { name: "Volume Lash Infill", price: "£45", note: "2–3 week" },
      { name: "Lash Lift & Tint", price: "£42" },
      { name: "Brow Shape & Tint", price: "£22" },
      { name: "Brow Lamination", price: "£38", note: "Includes tint" },
      { name: "Express Facial", price: "£40", note: "30 min" },
      { name: "Luxury Facial", price: "£65", note: "60 min" },
      { name: "Half Leg Wax", price: "£18" },
      { name: "Full Leg Wax", price: "£32" },
      { name: "Underarm Wax", price: "£14" },
    ],
  },
  {
    key: "hair",
    label: "Hair",
    items: [
      { name: "Cut & Blowdry", price: "£45" },
      { name: "Blowdry & Style", price: "£30" },
      { name: "Full Head Colour", price: "£75", note: "+ blowdry" },
      { name: "Half Head Highlights", price: "£65", note: "+ blowdry" },
      { name: "Full Head Highlights", price: "£85", note: "+ blowdry" },
      { name: "Balayage", price: "from £95", note: "+ blowdry" },
      { name: "Toner", price: "£25" },
      { name: "Occasion / Bridal Updo", price: "from £60" },
      { name: "Keratin Treatment", price: "from £120" },
      { name: "Deep Conditioning Treatment", price: "£25" },
    ],
  },
  {
    key: "nails",
    label: "Nails",
    items: [
      { name: "Gel Manicure", price: "£32" },
      { name: "BIAB Manicure", price: "£38", note: "Builder gel" },
      { name: "Acrylic Full Set", price: "£45" },
      { name: "Acrylic Infill", price: "£32" },
      { name: "Gel Pedicure", price: "£38" },
      { name: "Classic Manicure", price: "£22", note: "Polish only" },
      { name: "Classic Pedicure", price: "£28", note: "Polish only" },
      { name: "Nail Art", price: "from £5", note: "Per nail" },
      { name: "Nail Removal (gel/acrylic)", price: "£12" },
      { name: "Gel Soak-Off & Reapply", price: "£40" },
    ],
  },
];

export default function Pricing() {
  const [active, setActive] = useState<string>("beauty");
  const current = categories.find((c) => c.key === active)!;

  return (
    <section id="pricing" className="bg-blush-soft py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <div className="text-center">
            <span className="inline-block rounded-full border border-rose/25 bg-white/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-rose-deep">
              Pricing
            </span>
            <h2 className="mt-5 font-display text-4xl leading-tight text-ink sm:text-5xl">
              Simple, honest prices.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-ink-soft">
              No hidden extras. What you see is what you pay. Message us on WhatsApp for a bespoke quote.
            </p>
          </div>
        </Reveal>

        {/* Tabs */}
        <Reveal delay={80}>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActive(cat.key)}
                className={`rounded-full border px-5 py-2 text-sm font-medium transition-colors duration-200 ${
                  active === cat.key
                    ? "border-rose-deep bg-rose-deep text-white shadow-[0_6px_20px_-8px_var(--rose-deep)]"
                    : "border-ink/15 bg-white/60 text-ink hover:border-rose/40 hover:text-rose-deep"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Price list */}
        <Reveal delay={120}>
          <div className="mt-8 overflow-hidden rounded-2xl bg-white shadow-[0_8px_40px_-16px_rgba(120,40,60,0.18)]">
            <div className="divide-y divide-blush">
              {current.items.map((item, i) => (
                <div
                  key={item.name}
                  className={`flex items-center justify-between gap-3 px-4 py-3.5 transition-colors hover:bg-blush/40 sm:gap-4 sm:px-6 sm:py-4 ${
                    i === 0 ? "rounded-t-2xl" : ""
                  } ${i === current.items.length - 1 ? "rounded-b-2xl" : ""}`}
                >
                  <div>
                    <span className="text-base font-medium text-ink">{item.name}</span>
                    {item.note && (
                      <span className="ml-2 text-xs text-ink-soft">{item.note}</span>
                    )}
                  </div>
                  <span className="shrink-0 font-display text-xl font-semibold text-rose-deep">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-blush bg-cream/60 px-4 py-4 sm:px-6 sm:py-5">
              <p className="text-sm text-ink-soft">
                Prices are a guide and may vary. A patch test is required 48 hours before lash and tint services for first-time clients.
              </p>
            </div>
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal delay={160}>
          <div className="mt-10 text-center">
            <a
              href="#booking"
              className="inline-flex items-center gap-2 rounded-full bg-rose-deep px-8 py-3.5 text-sm font-medium tracking-wide text-white shadow-[0_12px_28px_-10px_var(--rose-deep)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-10px_var(--rose-deep)] active:scale-[0.97]"
            >
              <WhatsappLogo weight="fill" className="h-4 w-4" />
              Book an appointment
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
