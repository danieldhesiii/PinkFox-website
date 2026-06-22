/**
 * Central site configuration for PinkFox Brentwood.
 *
 * ── HOW TO UPDATE WITH REAL DETAILS ────────────────────────────────
 *  • whatsappNumber : set to the salon's real number, international format,
 *                     digits only (no "+", spaces or dashes). e.g. 447123456789
 *  • socials.facebook : already set to the live page.
 *  • gallery images   : drop real photos into /public/gallery/{beauty,hair,nails}
 *                       and list their filenames in the arrays below.
 * ───────────────────────────────────────────────────────────────────
 */

export const site = {
  name: "PinkFox",
  location: "Brentwood",
  tagline: "Beauty, Hair & Nails in Brentwood",
  description:
    "PinkFox is a Brentwood beauty studio for lashes, hair and nails. Book your appointment in seconds over WhatsApp.",

  // PLACEHOLDER — replace with the salon's real WhatsApp number (digits only).
  whatsappNumber: "447000000000",
  whatsappMessage: "Hi PinkFox! I'd love to book an appointment.",

  socials: {
    facebook: "https://www.facebook.com/blushbrentwood/",
  },

  // Optional — shown in the footer. Edit freely.
  hours: [
    { day: "Monday", time: "Closed" },
    { day: "Tuesday", time: "09:30 – 17:00" },
    { day: "Wednesday", time: "Closed" },
    { day: "Thursday", time: "09:30 – 20:00" },
    { day: "Friday", time: "11:00 – 17:00" },
    { day: "Saturday", time: "08:30 – 16:00" },
    { day: "Sunday", time: "Closed" },
  ],
  area: "1 Eastham Cres, Brentwood CM13 2BN",
} as const;

export function whatsappLink(message?: string) {
  const text = encodeURIComponent(message ?? site.whatsappMessage);
  return `https://wa.me/${site.whatsappNumber}?text=${text}`;
}

export type ServiceKey = "beauty" | "hair" | "nails";

export const services: {
  key: ServiceKey;
  title: string;
  blurb: string;
  treatments: string[];
}[] = [
  {
    key: "beauty",
    title: "Beauty & Lashes",
    blurb:
      "Lash extensions, brows and finishing touches that frame your face and last.",
    treatments: ["Lash extensions", "Lash lifts", "Brow shaping", "Facials", "Waxing"],
  },
  {
    key: "hair",
    title: "Hair",
    blurb:
      "Cuts, colour and styling designed around you, by stylists who actually listen.",
    treatments: ["Cuts & restyles", "Colour & balayage", "Blow-dries", "Treatments"],
  },
  {
    key: "nails",
    title: "Nails",
    blurb:
      "Gel, acrylic and nail art finished to perfection for hands that get noticed.",
    treatments: ["Gel manicures", "Acrylics", "Pedicures", "Nail art", "BIAB"],
  },
];

export type GalleryImage = { src: string; alt: string };

/**
 * Gallery images per category. To add the salon's real Facebook photos:
 *   1. Save them into /public/gallery/<category>/
 *   2. Add a line here pointing at the file with a short description.
 * The gallery grid and lightbox pick these up automatically.
 */
export const gallery: Record<ServiceKey, GalleryImage[]> = {
  beauty: [
    { src: "/gallery/beauty/1.png", alt: "Classic lash extensions" },
    { src: "/gallery/beauty/2.png", alt: "Full-volume lash extensions" },
    { src: "/gallery/beauty/3.png", alt: "Natural wispy lash set" },
    { src: "/gallery/beauty/4.png", alt: "Brow and lash before and after" },
  ],
  hair: [
    { src: "/gallery/hair/1.png", alt: "Bridal pearl updo" },
    { src: "/gallery/hair/2.png", alt: "Copper balayage waves" },
    { src: "/gallery/hair/3.png", alt: "Copper colour half-up style" },
    { src: "/gallery/hair/4.png", alt: "Brunette occasion updo" },
    { src: "/gallery/hair/5.png", alt: "Long blonde bouncy blow-dry" },
    { src: "/gallery/hair/6.png", alt: "Bronde curls and waves" },
  ],
  nails: [
    { src: "/gallery/nails/1.png", alt: "Pink glitter french manicure" },
    { src: "/gallery/nails/2.png", alt: "Almond nails with colourful tip art" },
    { src: "/gallery/nails/3.png", alt: "Classic french gel manicure" },
    { src: "/gallery/nails/4.png", alt: "Glossy red square nails" },
    { src: "/gallery/nails/5.png", alt: "Lilac nails with gold foil" },
    { src: "/gallery/nails/6.png", alt: "Bright gel pedicure" },
  ],
};

export const galleryTabs: { key: ServiceKey; label: string }[] = [
  { key: "beauty", label: "Beauty & Lashes" },
  { key: "hair", label: "Hair" },
  { key: "nails", label: "Nails" },
];

export const nav = [
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#pricing", label: "Pricing" },
  { href: "#booking", label: "Book" },
  { href: "#about", label: "About" },
  { href: "#visit", label: "Visit" },
];
