# AGENTS.md — Velmora Cleaning Group

Marketing + booking website for a UK family-run cleaning company. **Continue
work from [PLAN.md](./PLAN.md)** — Milestone 1 (site + preview journeys) is done.

## Architecture

- TanStack Start (React 19, SSR) on Netlify; Tailwind CSS v4. File routes in `src/routes/`; `src/routeTree.gen.ts` is generated.
- `src/routes/__root.tsx` — shell: Coming Soon bar, header, footer, fonts (Google Fonts: Cormorant Garamond + Jost) and LocalBusiness JSON-LD.
- Pages: `index`, `about`, `services/index`, `services/$slug`, `areas`, `quote`, `book`, `payments`, `contact`.

## Key files

- `src/data/site.ts` — brand, `comingSoon` flag, contact details, nav, areas, form names, `imageUrl()` helper.
- `src/data/services.ts` — the six services (copy, checklist, image).
- `src/data/seo.ts` — per-route `head()` helper (title, description, canonical, OG).
- `src/data/booking-fixtures.ts` — **all stub data** (sample availability, payment options, sample invoice). Replace with Netlify Database + payment provider in later milestones.
- `src/components/useNetlifyForm.tsx` — AJAX Netlify Forms submission + shared form states.
- `public/__forms.html` — static Netlify Forms registration. Keep field names in sync with `QuoteForm` / `ContactForm`.
- `src/styles.css` — theme tokens (`emerald-*`, `gold`, `ivory`, fonts) and `@utility` classes (`btn-*`, `eyebrow`, `form-input`, `card`, `container-x`).

## Conventions & decisions

- **Never invent** phone numbers, emails, reviews, ratings, prices or insurance/accreditation claims. Contact details render only when set in `site.contact`.
- `site.comingSoon` gates booking confirmation and payments; they stay previews until launch.
- Images are AI-generated interiors in `public/img/*.png`, always served via Netlify Image CDN (`imageUrl(file, width)`), never raw.
- Booking dates are computed client-side in `useEffect` to avoid hydration mismatches.
- UK English throughout; `lang="en-GB"`.
- Static `public/sitemap.xml` — add new routes there.
