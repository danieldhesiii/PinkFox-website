# PinkFox Brentwood

A soft-luxe website for **PinkFox**, a Brentwood beauty studio offering lashes,
hair and nails. Built with Next.js, Tailwind v4, GSAP + Lenis smooth scroll,
Splitting.js heading animations and a Swiper testimonials carousel.

## Run it

```bash
npm run dev      # dev server at http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Updating the content (no code knowledge needed)

Everything the salon needs to edit lives in **`src/lib/site.ts`**:

- **WhatsApp number** — set `whatsappNumber` to the real number, international
  format, digits only (e.g. `447123456789`). This powers every "Book on
  WhatsApp" button and the floating chat button. _Currently a placeholder._
- **Facebook link** — `socials.facebook` (already set to the live page).
- **Opening hours / area** — `hours` and `area`, shown in the footer.
- **Services & treatments** — the `services` list.

## Swapping in real photos

The gallery and hero currently use **AI-generated placeholder images** so the
design can be reviewed. Some carry faint stylised text (e.g. a faux magazine
masthead) — this disappears as soon as the real photos are dropped in.

To use the salon's own Facebook photos:

1. Save them into the matching folder:
   - `public/gallery/beauty/` (lashes, brows, makeup)
   - `public/gallery/hair/`
   - `public/gallery/nails/`
   - `public/hero/hero-portrait.png` (the main hero image)
2. List each gallery file in the `gallery` object in `src/lib/site.ts` with a
   short description, e.g. `{ src: "/gallery/nails/5.png", alt: "Ombre gel set" }`.

The gallery grid, category tabs and lightbox pick them up automatically — add as
many per category as you like.

## Structure

```
src/
  app/                  layout (fonts, metadata) + globals.css (brand tokens)
  components/
    site/               Navbar, Hero, Services, Gallery, About,
                        Testimonials, Footer, WhatsAppButton, Reveal
    providers/          Lenis smooth-scroll provider
  lib/
    site.ts             ← all editable content + WhatsApp/Facebook links
    gsap.ts             GSAP + ScrollTrigger registration
```

## Design notes

- Palette: cream + blush with a single deep-rose accent (locked, light theme).
- Type: Cormorant Garamond (display serif) + Outfit (body).
- All motion respects `prefers-reduced-motion`.
