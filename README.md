# Velmora Cleaning Group

*Excellence in Every Detail.*

The website for Velmora Cleaning Group, a family-run premium cleaning company
serving Bracknell, Berkshire and selected areas of the West Midlands. It is
currently in **Coming Soon** mode.

## What's included

- Home (with Coming Soon announcement), About Us, Services + six service pages,
  Areas We Cover, Request a Quote, Book a Clean, Payments and Contact.
- Quote and contact forms powered by Netlify Forms.
- Booking and payment journeys in preview mode — fully clickable, but they do
  not create bookings or take payments yet.
- Mobile-first layout, SEO metadata, structured data, sitemap and robots.txt.

## Technology

- [TanStack Start](https://tanstack.com/start) (React 19, file-based routes, SSR)
- Tailwind CSS v4
- Netlify Forms, Netlify Image CDN, Netlify hosting

## Running locally

```bash
pnpm install
netlify dev     # or: pnpm dev
pnpm test
```

Form submissions are only processed on Netlify deploys (or `netlify dev`).

## Configuration

Edit `src/data/site.ts`:

- `comingSoon` — `true` keeps the site in pre-launch mode. Set to `false` at launch.
- `contact.email` / `contact.phone` — left empty until the real details are provided.
- `url` — update when the custom domain is connected (also `public/robots.txt` and `public/sitemap.xml`).

## Roadmap

Real bookings (Netlify Database), secure payments (card, Apple Pay, Google Pay,
PayPal, bank transfer, pay after service), email notifications and an admin
area are planned. See [PLAN.md](./PLAN.md).
