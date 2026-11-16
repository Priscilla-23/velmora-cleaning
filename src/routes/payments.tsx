import { useState, type FormEvent } from 'react'
import { Link, createFileRoute } from '@tanstack/react-router'
import { site } from '../data/site'
import { paymentOptions, sampleInvoice, type PaymentOptionId } from '../data/booking-fixtures'
import { seo } from '../data/seo'
import { PageHero } from '../components/PageHero'
import { Field } from '../components/QuoteForm'
import { PaymentChoice } from '../components/PaymentChoice'

export const Route = createFileRoute('/payments')({
  head: () =>
    seo({
      title: 'Payments — Deposits & Completed Jobs',
      description:
        'Pay deposits and completed cleaning jobs securely online by card, Apple Pay, Google Pay or PayPal where available, or choose bank transfer or pay after service.',
      path: '/payments',
    }),
  component: PaymentsPage,
})

function PaymentsPage() {
  const [found, setFound] = useState(false)
  const [method, setMethod] = useState<PaymentOptionId>()

  function lookup(event: FormEvent) {
    event.preventDefault()
    setFound(true)
  }

  return (
    <>
      <PageHero
        eyebrow="Payments"
        title="Simple, secure ways to pay."
        intro="Pay a deposit when you book, or settle your invoice once your clean is complete — whichever suits you."
        image="detail.png"
      />
      <section className="container-x py-20">
        <div className="grid gap-px bg-emerald-900/10 sm:grid-cols-2 lg:grid-cols-5">
          {paymentOptions.map((option) => (
            <div key={option.id} className="bg-white p-6">
              <h2 className="text-2xl text-emerald-900">{option.name}</h2>
              <p className="mt-2 text-sm text-ink/65">{option.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <p className="eyebrow">Pay an invoice</p>
            <h2 className="mt-4 text-4xl text-emerald-900">Settle a completed clean</h2>
            <p className="mt-4 leading-relaxed text-ink/70">
              Enter the reference from your invoice email to view and pay your
              balance.
            </p>
            {site.comingSoon && (
              <p className="mt-6 border-l-2 border-gold bg-white px-5 py-4 text-sm text-ink/75">
                <strong className="font-medium text-emerald-900">Preview —</strong>{' '}
                online payments open at launch. A sample invoice is shown and
                no payment will be taken.
              </p>
            )}
          </div>
          <div className="card p-6 sm:p-10">
            {!found ? (
              <form onSubmit={lookup} className="grid gap-6 sm:grid-cols-2">
                <Field label="Invoice reference" id="p-ref">
                  <input id="p-ref" required placeholder={sampleInvoice.reference} className="form-input uppercase" />
                </Field>
                <Field label="Email" id="p-email">
                  <input id="p-email" type="email" required className="form-input" />
                </Field>
                <div className="sm:col-span-2">
                  <button type="submit" className="btn-emerald">Find my invoice</button>
                </div>
              </form>
            ) : (
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-emerald-900/10 pb-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-gold-dark">Sample invoice</p>
                    <p className="mt-1 font-display text-3xl text-emerald-900">{sampleInvoice.reference}</p>
                  </div>
                  <span className="border border-gold px-3 py-1 text-xs uppercase tracking-[0.15em] text-gold-dark">
                    {sampleInvoice.status}
                  </span>
                </div>
                <dl className="my-6 grid grid-cols-2 gap-4 text-sm">
                  <div><dt className="text-ink/55">Service</dt><dd className="text-emerald-900">{sampleInvoice.service}</dd></div>
                  <div><dt className="text-ink/55">Date</dt><dd className="text-emerald-900">{sampleInvoice.date}</dd></div>
                </dl>
                <PaymentChoice value={method} onChange={setMethod} />
                <div className="mt-8 flex flex-wrap gap-3">
                  <button type="button" disabled={site.comingSoon || !method} className="btn-gold">
                    {site.comingSoon ? 'Payments open at launch' : 'Pay securely'}
                  </button>
                  <button type="button" onClick={() => { setFound(false); setMethod(undefined) }} className="btn-outline text-emerald-900">
                    Back
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <p className="mt-16 text-center text-sm text-ink/60">
          Questions about a payment?{' '}
          <Link to="/contact" className="underline decoration-gold underline-offset-4">Contact us</Link>.
        </p>
      </section>
    </>
  )
}
