import { useEffect, useState } from 'react'
import { Link, createFileRoute } from '@tanstack/react-router'
import { site } from '../data/site'
import { findService, services } from '../data/services'
import { paymentOptions, upcomingDays, type PaymentOptionId } from '../data/booking-fixtures'
import { PaymentChoice } from '../components/PaymentChoice'
import { seo } from '../data/seo'
import { Field } from '../components/QuoteForm'

export const Route = createFileRoute('/book')({
  validateSearch: (search: Record<string, unknown>): { service?: string } =>
    typeof search.service === 'string' ? { service: search.service } : {},
  head: () =>
    seo({
      title: 'Book a Clean',
      description:
        'Book your Velmora clean online: choose a service, pick a date and time, and pay a deposit securely or choose bank transfer or pay after service.',
      path: '/book',
    }),
  component: BookPage,
})

const steps = ['Service', 'Date & time', 'Your details', 'Payment', 'Review']

type Booking = {
  service: string
  propertyType: string
  bedrooms: string
  date?: Date
  time?: string
  name: string
  email: string
  phone: string
  address: string
  postcode: string
  notes: string
  payment?: PaymentOptionId
}

const fmtDay = (d: Date) => d.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' })

function BookPage() {
  const search = Route.useSearch()
  const [step, setStep] = useState(0)
  const [done, setDone] = useState(false)
  const [days, setDays] = useState<ReturnType<typeof upcomingDays>>([])
  const [booking, setBooking] = useState<Booking>({
    service: findService(search.service ?? '')?.slug ?? '',
    propertyType: '',
    bedrooms: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    postcode: '',
    notes: '',
  })
  // Dates depend on "today", so build them in the browser to avoid hydration mismatch.
  useEffect(() => setDays(upcomingDays(new Date())), [])

  const set = <K extends keyof Booking>(key: K, value: Booking[K]) =>
    setBooking((b) => ({ ...b, [key]: value }))

  const canContinue = [
    booking.service && booking.propertyType,
    booking.date && booking.time,
    booking.name && /\S+@\S+\.\S+/.test(booking.email) && booking.address && booking.postcode,
    booking.payment,
    true,
  ][step]

  const service = findService(booking.service)
  const payment = paymentOptions.find((p) => p.id === booking.payment)

  return (
    <section className="bg-ivory">
      <div className="container-x py-16">
        <p className="eyebrow">Online booking</p>
        <h1 className="mt-4 text-5xl text-emerald-900 sm:text-6xl">Book your clean</h1>
        {site.comingSoon && (
          <p className="mt-6 max-w-2xl border-l-2 border-gold bg-white px-5 py-4 text-sm text-ink/75">
            <strong className="font-medium text-emerald-900">Preview —</strong>{' '}
            online booking opens at launch. You can explore every step, but no
            booking will be made and no payment will be taken.
          </p>
        )}

        <ol className="mt-12 grid grid-cols-5 gap-2" aria-label="Booking progress">
          {steps.map((label, i) => (
            <li key={label} aria-current={i === step ? 'step' : undefined}>
              <div className={`h-0.5 ${i <= step ? 'bg-gold' : 'bg-emerald-900/10'}`} />
              <span className={`mt-3 hidden text-xs uppercase tracking-[0.18em] sm:block ${i === step ? 'text-emerald-900' : 'text-ink/45'}`}>
                {label}
              </span>
            </li>
          ))}
        </ol>

        <div className="mt-10 grid gap-10 lg:grid-cols-[2fr_1fr]">
          <div className="card p-6 sm:p-10">
            {done ? (
              <div role="status" className="py-10 text-center">
                <p className="eyebrow justify-center">Coming soon</p>
                <h2 className="mt-4 text-4xl text-emerald-900">Bookings open at launch.</h2>
                <p className="mx-auto mt-4 max-w-md text-ink/70">
                  Thank you for previewing our booking experience. Nothing has
                  been booked or charged. Request a quote and we’ll be in touch
                  as soon as we open.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <Link to="/quote" className="btn-emerald">Request a quote</Link>
                  <button type="button" className="btn-outline text-emerald-900" onClick={() => { setDone(false); setStep(0) }}>
                    Start again
                  </button>
                </div>
              </div>
            ) : (
              <>
                <h2 className="text-3xl text-emerald-900">{steps[step]}</h2>
                <div className="gold-rule my-6" />

                {step === 0 && (
                  <div className="space-y-8">
                    <div className="grid gap-3 sm:grid-cols-2">
                      {services.map((s) => (
                        <button
                          key={s.slug}
                          type="button"
                          aria-pressed={booking.service === s.slug}
                          onClick={() => set('service', s.slug)}
                          className={`border p-5 text-left transition ${booking.service === s.slug ? 'border-gold bg-gold/10' : 'border-emerald-900/10 hover:border-gold/60'}`}
                        >
                          <span className="block font-display text-2xl text-emerald-900">{s.name}</span>
                          <span className="mt-1 block text-sm text-ink/65">{s.short}</span>
                        </button>
                      ))}
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2">
                      <Field label="Property type" id="b-property">
                        <select id="b-property" value={booking.propertyType} onChange={(e) => set('propertyType', e.target.value)} className="form-input">
                          <option value="" disabled>Select</option>
                          {['Flat / apartment', 'House', 'Holiday let', 'Office', 'Commercial premises'].map((t) => <option key={t}>{t}</option>)}
                        </select>
                      </Field>
                      <Field label="Bedrooms (if applicable)" id="b-bedrooms">
                        <input id="b-bedrooms" type="number" min={0} value={booking.bedrooms} onChange={(e) => set('bedrooms', e.target.value)} className="form-input" />
                      </Field>
                    </div>
                  </div>
                )}

                {step === 1 && (
                  <div className="space-y-8">
                    <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
                      {days.map((day) => {
                        const selected = booking.date?.toDateString() === day.date.toDateString()
                        return (
                          <button
                            key={day.date.toISOString()}
                            type="button"
                            aria-pressed={selected}
                            onClick={() => { set('date', day.date); set('time', undefined) }}
                            className={`border px-2 py-3 text-center text-sm transition ${selected ? 'border-emerald-900 bg-emerald-900 text-ivory' : 'border-emerald-900/10 hover:border-gold'}`}
                          >
                            {fmtDay(day.date)}
                          </button>
                        )
                      })}
                    </div>
                    {booking.date && (
                      <div>
                        <p className="form-label">Arrival time</p>
                        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                          {days.find((d) => d.date.toDateString() === booking.date?.toDateString())?.slots.map((slot) => (
                            <button
                              key={slot.time}
                              type="button"
                              disabled={!slot.available}
                              aria-pressed={booking.time === slot.time}
                              onClick={() => set('time', slot.time)}
                              className={`border py-3 text-sm transition disabled:cursor-not-allowed disabled:text-ink/30 disabled:line-through ${booking.time === slot.time ? 'border-gold bg-gold/15 text-emerald-900' : 'border-emerald-900/10 hover:border-gold'}`}
                            >
                              {slot.time}
                            </button>
                          ))}
                        </div>
                        <p className="mt-3 text-xs text-ink/50">Sample availability shown for preview.</p>
                      </div>
                    )}
                  </div>
                )}

                {step === 2 && (
                  <div className="grid gap-6 sm:grid-cols-2">
                    <Field label="Full name" id="b-name">
                      <input id="b-name" autoComplete="name" value={booking.name} onChange={(e) => set('name', e.target.value)} className="form-input" />
                    </Field>
                    <Field label="Email" id="b-email">
                      <input id="b-email" type="email" autoComplete="email" value={booking.email} onChange={(e) => set('email', e.target.value)} className="form-input" />
                    </Field>
                    <Field label="Phone (optional)" id="b-phone">
                      <input id="b-phone" type="tel" autoComplete="tel" value={booking.phone} onChange={(e) => set('phone', e.target.value)} className="form-input" />
                    </Field>
                    <Field label="Postcode" id="b-postcode">
                      <input id="b-postcode" autoComplete="postal-code" value={booking.postcode} onChange={(e) => set('postcode', e.target.value)} className="form-input uppercase" />
                    </Field>
                    <Field label="Address" id="b-address" full>
                      <input id="b-address" autoComplete="street-address" value={booking.address} onChange={(e) => set('address', e.target.value)} className="form-input" />
                    </Field>
                    <Field label="Access notes, pets, priorities" id="b-notes" full>
                      <textarea id="b-notes" rows={4} value={booking.notes} onChange={(e) => set('notes', e.target.value)} className="form-input" />
                    </Field>
                  </div>
                )}

                {step === 3 && (
                  <PaymentChoice value={booking.payment} onChange={(id) => set('payment', id)} />
                )}

                {step === 4 && (
                  <dl className="divide-y divide-emerald-900/10 text-sm">
                    {[
                      ['Service', service?.name],
                      ['Property', [booking.propertyType, booking.bedrooms && `${booking.bedrooms} bedrooms`].filter(Boolean).join(' · ')],
                      ['Date & time', booking.date && `${fmtDay(booking.date)} at ${booking.time}`],
                      ['Name', booking.name],
                      ['Email', booking.email],
                      ['Address', `${booking.address}, ${booking.postcode.toUpperCase()}`],
                      ['Payment', payment?.name],
                      ['Price', 'Confirmed in your tailored quote'],
                    ].map(([k, v]) => (
                      <div key={k} className="flex justify-between gap-6 py-3">
                        <dt className="text-ink/55">{k}</dt>
                        <dd className="text-right text-emerald-900">{v}</dd>
                      </div>
                    ))}
                  </dl>
                )}

                <div className="mt-10 flex justify-between gap-3">
                  <button type="button" className="btn-outline text-emerald-900" disabled={step === 0} onClick={() => setStep((s) => s - 1)}>
                    Back
                  </button>
                  {step < steps.length - 1 ? (
                    <button type="button" className="btn-emerald" disabled={!canContinue} onClick={() => setStep((s) => s + 1)}>
                      Continue
                    </button>
                  ) : (
                    <button type="button" className="btn-gold" onClick={() => setDone(true)}>
                      {site.comingSoon ? 'Confirm (preview)' : 'Confirm booking'}
                    </button>
                  )}
                </div>
              </>
            )}
          </div>

          <aside className="h-fit bg-emerald-900 p-8 text-ivory lg:sticky lg:top-28">
            <h2 className="text-3xl text-gold-light">Your booking</h2>
            <dl className="mt-6 space-y-4 text-sm">
              <Summary label="Service" value={service?.name} />
              <Summary label="Date" value={booking.date && `${fmtDay(booking.date)}${booking.time ? ` · ${booking.time}` : ''}`} />
              <Summary label="Payment" value={payment?.name} />
            </dl>
            <p className="mt-8 border-t border-gold/30 pt-6 text-xs leading-relaxed text-ivory/60">
              Secure payments for deposits and completed jobs — card, Apple Pay,
              Google Pay and PayPal where available, plus bank transfer and
              pay-after-service.
            </p>
          </aside>
        </div>
      </div>
    </section>
  )
}

function Summary({ label, value }: { label: string; value?: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-[0.2em] text-gold">{label}</dt>
      <dd className="mt-1 text-ivory/85">{value || '—'}</dd>
    </div>
  )
}
