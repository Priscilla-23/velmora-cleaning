import { createFileRoute } from '@tanstack/react-router'
import { site } from '../data/site'
import { findService } from '../data/services'
import { seo } from '../data/seo'
import { PageHero } from '../components/PageHero'
import { QuoteForm } from '../components/QuoteForm'

export const Route = createFileRoute('/quote')({
  validateSearch: (search: Record<string, unknown>): { service?: string } =>
    typeof search.service === 'string' ? { service: search.service } : {},
  head: () =>
    seo({
      title: 'Request a Cleaning Quote',
      description:
        'Request a tailored quote for domestic, deep, end-of-tenancy, office, commercial or holiday-let cleaning in Bracknell, Berkshire and the West Midlands.',
      path: '/quote',
    }),
  component: QuotePage,
})

function QuotePage() {
  const { service } = Route.useSearch()
  const selected = service ? findService(service)?.name : undefined
  return (
    <>
      <PageHero
        eyebrow="Request a quote"
        title="A quote tailored to your space."
        intro="Tell us a little about your property and what you need. We’ll reply by email with a personalised quote — no obligation."
        image="bathroom.png"
      />
      <section className="container-x grid gap-12 py-20 lg:grid-cols-[1fr_2fr]">
        <aside className="space-y-8">
          {site.comingSoon && (
            <div className="border-l-2 border-gold bg-white p-6">
              <p className="eyebrow">Coming soon</p>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">
                We’re preparing to launch. Quote requests are welcome now and
                will be answered as we open.
              </p>
            </div>
          )}
          <ol className="space-y-6">
            {[
              ['Share the details', 'Property, service and preferred timing.'],
              ['Receive your quote', 'A clear, tailored price by email.'],
              ['Book & relax', 'Confirm your date and pay securely online.'],
            ].map(([title, text], index) => (
              <li key={title} className="flex gap-5">
                <span className="font-display text-4xl text-gold">{index + 1}</span>
                <span>
                  <span className="block text-2xl font-display text-emerald-900">{title}</span>
                  <span className="text-sm text-ink/70">{text}</span>
                </span>
              </li>
            ))}
          </ol>
        </aside>
        <QuoteForm defaultService={selected} />
      </section>
    </>
  )
}
