import { forms } from '../data/site'
import { services } from '../data/services'
import { FormError, FormSuccess, Honeypot, useNetlifyForm } from './useNetlifyForm'

export function QuoteForm({ defaultService = '' }: { defaultService?: string }) {
  const { state, onSubmit, reset } = useNetlifyForm()

  if (state === 'success')
    return (
      <FormSuccess title="Thank you — your quote request is in." onReset={reset}>
        We’ll review the details of your property and reply by email with a
        tailored quote.
      </FormSuccess>
    )

  return (
    <form
      name={forms.quote}
      method="POST"
      action={forms.endpoint}
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={onSubmit}
      aria-busy={state === 'pending'}
      className="card p-6 sm:p-10"
    >
      <input type="hidden" name="form-name" value={forms.quote} />
      <Honeypot />
      <fieldset disabled={state === 'pending'} className="grid gap-6 sm:grid-cols-2">
        <legend className="sr-only">Quote request</legend>
        <Field label="Service" id="q-service" full>
          <select id="q-service" name="service" required defaultValue={defaultService} className="form-input">
            <option value="" disabled>
              Choose a service
            </option>
            {services.map((service) => (
              <option key={service.slug} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Property type" id="q-property">
          <select id="q-property" name="property-type" required defaultValue="" className="form-input">
            <option value="" disabled>
              Select
            </option>
            {['Flat / apartment', 'House', 'Holiday let', 'Office', 'Commercial premises', 'Other'].map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </Field>
        <Field label="How often?" id="q-frequency">
          <select id="q-frequency" name="frequency" required defaultValue="" className="form-input">
            <option value="" disabled>
              Select
            </option>
            {['One-off', 'Weekly', 'Fortnightly', 'Monthly', 'Between guest stays', 'Not sure yet'].map((f) => (
              <option key={f}>{f}</option>
            ))}
          </select>
        </Field>
        <Field label="Bedrooms" id="q-bedrooms">
          <input id="q-bedrooms" name="bedrooms" type="number" min={0} max={20} className="form-input" />
        </Field>
        <Field label="Bathrooms" id="q-bathrooms">
          <input id="q-bathrooms" name="bathrooms" type="number" min={0} max={20} className="form-input" />
        </Field>
        <Field label="Postcode" id="q-postcode">
          <input id="q-postcode" name="postcode" required autoComplete="postal-code" maxLength={10} className="form-input uppercase" />
        </Field>
        <Field label="Preferred start date" id="q-date">
          <input id="q-date" name="preferred-date" type="date" className="form-input" />
        </Field>
        <Field label="Full name" id="q-name">
          <input id="q-name" name="name" required autoComplete="name" maxLength={100} className="form-input" />
        </Field>
        <Field label="Email" id="q-email">
          <input id="q-email" name="email" type="email" required autoComplete="email" maxLength={254} className="form-input" />
        </Field>
        <Field label="Phone (optional)" id="q-phone" full>
          <input id="q-phone" name="phone" type="tel" autoComplete="tel" maxLength={20} className="form-input" />
        </Field>
        <Field label="Anything we should know?" id="q-message" full>
          <textarea
            id="q-message"
            name="message"
            rows={5}
            maxLength={2000}
            placeholder="Access, pets, priority rooms, check-out dates…"
            className="form-input"
          />
        </Field>
        <label className="flex items-start gap-3 text-sm text-ink/75 sm:col-span-2">
          <input type="checkbox" name="consent" value="yes" required className="mt-1 accent-emerald-900" />
          I agree to Velmora Cleaning Group using these details to respond to
          my quote request.
        </label>
        {state === 'error' && (
          <div className="sm:col-span-2">
            <FormError />
          </div>
        )}
        <div className="sm:col-span-2">
          <button type="submit" className="btn-emerald w-full sm:w-auto">
            {state === 'pending' ? 'Sending…' : 'Request my quote'}
          </button>
        </div>
      </fieldset>
    </form>
  )
}

export function Field({
  label,
  id,
  full,
  children,
}: {
  label: string
  id: string
  full?: boolean
  children: React.ReactNode
}) {
  return (
    <div className={full ? 'sm:col-span-2' : undefined}>
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      {children}
    </div>
  )
}
