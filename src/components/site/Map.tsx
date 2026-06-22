import Reveal from "./Reveal";

export default function Map() {
  return (
    <section className="bg-cream-deep pb-0">
      <Reveal>
        <div className="mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-8 lg:pt-20">
          <div className="text-center">
            <span className="inline-block rounded-full border border-rose/25 bg-blush/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-rose-deep">
              Find us
            </span>
            <h2 className="mt-4 font-display text-3xl text-ink sm:text-4xl">
              PinkFox, Brentwood
            </h2>
            <p className="mt-2 text-sm text-ink-soft">CM13 2BN, Brentwood, Essex</p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={80}>
        <div className="h-[340px] w-full overflow-hidden sm:h-[420px] lg:h-[500px]">
          <iframe
            title="PinkFox location"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://maps.google.com/maps?q=PinkFox+CM13+2BN+Brentwood+Essex+UK&t=&z=15&ie=UTF8&iwloc=&output=embed"
          />
        </div>
      </Reveal>
    </section>
  );
}
