# Velmora Cleaning Group — Product Roadmap

The website is being delivered in milestones so the brand, pages and customer
journeys can be reviewed first, then the operational systems (bookings and
payments) are connected behind them.

## Milestone 1 — Branded website & customer journeys ✅

- Premium brand identity (emerald, champagne gold, ivory), elegant typography and custom interior photography.
- Home page with Coming Soon announcement, About Us, Services (six service pages), Areas We Cover, Contact.
- Working quote request and contact forms (Netlify Forms).
- Clickable booking flow and payments screen running in preview mode with sample availability (`src/data/booking-fixtures.ts`).
- Site-wide Coming Soon mode (`site.comingSoon` in `src/data/site.ts`).
- SEO: per-page titles/descriptions, canonical URLs, Open Graph, LocalBusiness structured data, sitemap and robots.txt.

## Milestone 2 — Business email integration

- Owner adds the business email (and optional phone) to `site.contact`.
- Configure Netlify Forms email notifications so quote and contact submissions go to the business inbox.
- Optional: branded auto-reply to customers via a transactional email provider.

## Milestone 3 — Booking data model

- Netlify Database (Postgres + Drizzle) tables: services, availability/time slots, bookings, customers.
- Server functions to read real availability and create bookings, replacing the fixtures.
- Booking confirmation emails.

## Milestone 4 — Secure online payments

- Payment provider (e.g. Stripe) for card, Apple Pay and Google Pay; PayPal via Stripe or PayPal Checkout where available.
- Deposits at booking; balance payments for completed jobs via invoice reference.
- Webhooks to record payment status against bookings.
- Bank transfer (reference generation + manual reconciliation) and pay-after-service invoicing.

## Milestone 5 — Admin area

- Staff login (Netlify Identity) to view quotes, manage bookings and availability, issue invoices and mark payments.

## Milestone 6 — Launch

- Connect the custom domain and update `site.url`, `robots.txt` and `sitemap.xml`.
- Add legal pages (privacy policy, terms, cookies).
- Set `site.comingSoon = false` to open bookings and payments.
- Submit the sitemap to Google Search Console and set up a Google Business Profile.
