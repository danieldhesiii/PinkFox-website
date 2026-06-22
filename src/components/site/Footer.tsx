import { FacebookLogo, WhatsappLogo, Clock, MapPin } from "@phosphor-icons/react/dist/ssr";
import { site, nav, whatsappLink } from "@/lib/site";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="border-t border-border/70 bg-cream-deep">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <span className="font-display text-3xl font-semibold text-ink">
                Pink<span className="text-rose-deep">Fox</span>
              </span>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-soft">
                {site.tagline}. Lashes, hair and nails, done beautifully.
              </p>
              <div className="mt-5 flex gap-3">
                <a
                  href={site.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="PinkFox on Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-blush text-rose-deep transition-colors hover:bg-rose-deep hover:text-white"
                >
                  <FacebookLogo weight="fill" className="h-5 w-5" />
                </a>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="PinkFox on WhatsApp"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-blush text-rose-deep transition-colors hover:bg-rose-deep hover:text-white"
                >
                  <WhatsappLogo weight="fill" className="h-5 w-5" />
                </a>
              </div>

              {/* Mini map */}
              <div className="mt-5 overflow-hidden rounded-xl border border-blush shadow-sm">
                <iframe
                  title="PinkFox location"
                  src="https://maps.google.com/maps?q=1+Eastham+Cres+Brentwood+CM13+2BN+UK&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="160"
                  style={{ border: 0, display: "block" }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div>
              <h3 className="font-display text-lg text-ink">Explore</h3>
              <ul className="mt-4 space-y-2.5">
                {nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-sm text-ink-soft transition-colors hover:text-rose-deep"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-lg text-ink">Opening hours</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
                {site.hours.map((h) => (
                  <li key={h.day} className="flex items-start gap-2">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-rose/70" />
                    <span>
                      <span className="block text-ink">{h.day}</span>
                      {h.time}
                    </span>
                  </li>
                ))}
                <li className="flex items-center gap-2 pt-1">
                  <MapPin className="h-4 w-4 shrink-0 text-rose/70" />
                  {site.area}
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-2 border-t border-border/60 pt-6 text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {site.name} {site.location}. All rights
              reserved.
            </p>
            <p>Made with care in Brentwood.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
