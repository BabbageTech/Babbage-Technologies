# Babbage Technologies — Website

A Next.js 15 / React 19 / Tailwind v4 marketing site for Babbage Technologies,
a software development company.

## Design direction

The identity is built around the company's namesake, Charles Babbage, designer
of the Analytical Engine — the first general-purpose mechanical computer.
Instead of a generic navy-and-amber SaaS template, the site uses:

- **Palette** — ink (near-black graphite), warm paper, brass and verdigris
  (oxidised copper), the metals of Victorian precision instruments.
- **Type** — Fraunces (display serif) for headings, IBM Plex Mono for labels,
  plate numbers and specs, Inter for body copy.
- **Signature devices** — a "sprocket rule" (a row of perforations, echoing
  punch-card stock) used as a section divider, and numbered "plate" labels
  (`PLATE 01 — SERVICES`) styled after engineering drawings, since Babbage's
  own Engine drawings were literally numbered plates.
- **Hero graphic** — a hand-built, animated SVG gear-train diagram in place of
  the generic "dashboard mockup" pattern.

## Structure

```
app/
  page.tsx                 Home
  work/page.tsx             Work — project index
  work/[slug]/page.tsx       Work — case study detail
  services/page.tsx         Services
  about/page.tsx             About
  pricing/page.tsx           Pricing
  contact/page.tsx           Contact
components/
  Header.tsx, Footer.tsx     Site chrome
  EngineDiagram.tsx          Signature hero SVG
  SprocketRule.tsx           Section-divider component
  PlateLabel.tsx             Mono "eyebrow" label component
  *Section.tsx / Contact.tsx Page bodies
  ui/                        button primitive (shadcn-style)
lib/
  site-data.ts                Central content: services, projects, pricing,
                               team, testimonials, nav links, company info
```

## Work / Projects page

Added per the redesign brief: `/work` lists case studies, each with its own
`/work/[slug]` detail page (problem / approach / result, stack, client).
Six entries are seeded in `lib/site-data.ts` — three based on the real client
testimonials already in the codebase (Tartle, Widgety, Umergence), three
representative placeholders covering logistics, healthcare and retail.
**Replace the placeholder entries with real case studies and imagery** before
launch, and double-check the Tartle/Widgety/Umergence summaries with those
clients if you don't already have sign-off to describe the engagements.

## Content notes

- Fixed a naming inconsistency: the site previously read "Barbage" in the
  header, footer and contact copy; the project itself (package name, folder,
  metadata) was always "Babbage". Copy now reads "Babbage Technologies"
  throughout. **Double-check `hello@babbagetechnologies.com` against your
  actual domain** — the original code used `barbagetech.com`, which may be
  your real registered domain rather than a typo.
- Team names, pricing tiers (Ksh) and the contact phone/email were carried
  over from the original codebase as real business content.
- `ContactForm.tsx` keeps the original EmailJS integration (service/template
  IDs) so form submissions keep working.

## Photography

Three real photos from the original `/public` folder (`about-hero.jpg`,
`about.jpg`, `Commitment.jpg`) are now wired in via `components/DuotonePhoto.tsx`,
which applies a grayscale + brass/verdigris color-blend treatment so they sit
naturally next to the ink/brass linework instead of reading as stock photos
on a different design system. Placement:

- `about-hero.jpg` — banner under the About page hero
- `about.jpg` — beside the "Our story" copy on About
- `Commitment.jpg` — beside the process steps in Home's "How we work" section

Swap the `src` in those three spots for real team/office photography when
you have it — the duotone treatment will apply automatically.

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Housekeeping already done

- Removed a duplicate `next.config.js` that conflicted with `next.config.ts`.
- Removed unused shadcn primitives (`card`, `tabs`, `dropdown-menu`, `input`,
  `textarea`) and their now-unnecessary dependencies, since none were in use.
- Consolidated the toast notifier to a single instance in the root layout
  (it was previously mounted twice, in the footer and the contact form).
