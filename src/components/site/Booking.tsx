"use client";

import { useState } from "react";
import { WhatsappLogo, CalendarBlank, Clock, User, Phone, Scissors } from "@phosphor-icons/react";
import { services, site } from "@/lib/site";
import Reveal from "./Reveal";

const timeSlots = [
  "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00",
  "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00",
];

const openDays = ["Tuesday", "Thursday", "Friday", "Saturday"];

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    treatment: "",
    date: "",
    time: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const selectedService = services.find((s) => s.key === form.service);

  function set(field: string, value: string) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
      ...(field === "service" ? { treatment: "" } : {}),
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg = [
      `Hi PinkFox! I'd like to book an appointment.`,
      ``,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Service: ${selectedService?.title ?? form.service}`,
      form.treatment ? `Treatment: ${form.treatment}` : null,
      `Date: ${form.date}`,
      `Time: ${form.time}`,
      form.notes ? `Notes: ${form.notes}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
    setSubmitted(true);
  }

  const inputClass =
    "w-full rounded-xl border border-blush bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 focus:border-rose/50 focus:outline-none focus:ring-2 focus:ring-rose/20 transition-colors";
  const labelClass = "mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft";

  // Minimum date = tomorrow
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  return (
    <section id="booking" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="text-center">
            <span className="inline-block rounded-full border border-rose/25 bg-blush/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-rose-deep">
              Appointments
            </span>
            <h2 className="mt-5 font-display text-4xl leading-tight text-ink sm:text-5xl">
              Book your visit.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-ink-soft">
              Fill in the form and we&apos;ll confirm your slot over WhatsApp — usually within a few hours.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mx-auto mt-12 max-w-2xl">
            {submitted ? (
              <div className="flex flex-col items-center gap-6 rounded-2xl bg-blush/40 px-8 py-14 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-rose-deep text-white">
                  <WhatsappLogo weight="fill" className="h-8 w-8" />
                </span>
                <div>
                  <h3 className="font-display text-3xl text-ink">Request sent!</h3>
                  <p className="mt-2 text-ink-soft">
                    WhatsApp has opened with your booking details. We&apos;ll confirm your appointment shortly.
                  </p>
                </div>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", service: "", treatment: "", date: "", time: "", notes: "" }); }}
                  className="rounded-full border border-ink/15 px-6 py-2.5 text-sm font-medium text-ink transition-colors hover:border-rose/40 hover:text-rose-deep"
                >
                  Book another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl bg-white p-6 shadow-[0_8px_40px_-16px_rgba(120,40,60,0.15)] sm:p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Name */}
                  <div>
                    <label className={labelClass}>
                      <User className="h-3.5 w-3.5" /> Your name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={(e) => set("name", e.target.value)}
                      className={inputClass}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className={labelClass}>
                      <Phone className="h-3.5 w-3.5" /> Phone number
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="07700 900000"
                      value={form.phone}
                      onChange={(e) => set("phone", e.target.value)}
                      className={inputClass}
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label className={labelClass}>
                      <Scissors className="h-3.5 w-3.5" /> Service
                    </label>
                    <select
                      required
                      value={form.service}
                      onChange={(e) => set("service", e.target.value)}
                      className={inputClass}
                    >
                      <option value="">Select a service…</option>
                      {services.map((s) => (
                        <option key={s.key} value={s.key}>{s.title}</option>
                      ))}
                    </select>
                  </div>

                  {/* Treatment */}
                  <div>
                    <label className={labelClass}>
                      <Scissors className="h-3.5 w-3.5" /> Treatment
                    </label>
                    <select
                      value={form.treatment}
                      onChange={(e) => set("treatment", e.target.value)}
                      className={inputClass}
                      disabled={!selectedService}
                    >
                      <option value="">Select a treatment…</option>
                      {selectedService?.treatments.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  {/* Date */}
                  <div>
                    <label className={labelClass}>
                      <CalendarBlank className="h-3.5 w-3.5" /> Preferred date
                    </label>
                    <input
                      required
                      type="date"
                      min={minDate}
                      value={form.date}
                      onChange={(e) => set("date", e.target.value)}
                      className={inputClass}
                    />
                    <p className="mt-1 text-[11px] text-ink-soft">Open: Tue, Thu, Fri, Sat</p>
                  </div>

                  {/* Time */}
                  <div>
                    <label className={labelClass}>
                      <Clock className="h-3.5 w-3.5" /> Preferred time
                    </label>
                    <select
                      required
                      value={form.time}
                      onChange={(e) => set("time", e.target.value)}
                      className={inputClass}
                    >
                      <option value="">Select a time…</option>
                      {timeSlots.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  {/* Notes — full width */}
                  <div className="sm:col-span-2">
                    <label className={labelClass}>Additional notes (optional)</label>
                    <textarea
                      rows={3}
                      placeholder="Anything we should know? e.g. allergies, first-time client…"
                      value={form.notes}
                      onChange={(e) => set("notes", e.target.value)}
                      className={inputClass + " resize-none"}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-rose-deep py-4 text-base font-medium text-white shadow-[0_14px_30px_-12px_var(--rose-deep)] transition-transform duration-300 hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  <WhatsappLogo weight="fill" className="h-5 w-5" />
                  Send booking request via WhatsApp
                </button>

                <p className="mt-4 text-center text-xs text-ink-soft">
                  Tapping the button opens WhatsApp with your details pre-filled. We&apos;ll confirm within a few hours during opening times.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
