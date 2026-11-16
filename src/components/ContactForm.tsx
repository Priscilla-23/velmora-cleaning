import { forms } from '../data/site'
import { Field } from './QuoteForm'
import { FormError, FormSuccess, Honeypot, useNetlifyForm } from './useNetlifyForm'

export function ContactForm() {
  const { state, onSubmit, reset } = useNetlifyForm()

  if (state === 'success')
    return (
      <FormSuccess title="Message received." onReset={reset}>
        Thank you for getting in touch. We’ll reply to the email address you
        provided.
      </FormSuccess>
    )

  return (
    <form
      name={forms.contact}
      method="POST"
      action={forms.endpoint}
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={onSubmit}
      aria-busy={state === 'pending'}
      className="card p-6 sm:p-10"
    >
      <input type="hidden" name="form-name" value={forms.contact} />
      <Honeypot />
      <fieldset disabled={state === 'pending'} className="grid gap-6 sm:grid-cols-2">
        <legend className="sr-only">Contact Velmora</legend>
        <Field label="Full name" id="c-name">
          <input id="c-name" name="name" required autoComplete="name" maxLength={100} className="form-input" />
        </Field>
        <Field label="Email" id="c-email">
          <input id="c-email" name="email" type="email" required autoComplete="email" maxLength={254} className="form-input" />
        </Field>
        <Field label="Phone (optional)" id="c-phone">
          <input id="c-phone" name="phone" type="tel" autoComplete="tel" maxLength={20} className="form-input" />
        </Field>
        <Field label="Subject" id="c-subject">
          <select id="c-subject" name="subject" defaultValue="General enquiry" className="form-input">
            {['General enquiry', 'Existing booking', 'Payments', 'Careers', 'Partnerships'].map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </Field>
        <Field label="Message" id="c-message" full>
          <textarea id="c-message" name="message" required minLength={10} maxLength={2000} rows={6} className="form-input" />
        </Field>
        {state === 'error' && (
          <div className="sm:col-span-2">
            <FormError />
          </div>
        )}
        <div className="sm:col-span-2">
          <button type="submit" className="btn-emerald w-full sm:w-auto">
            {state === 'pending' ? 'Sending…' : 'Send message'}
          </button>
        </div>
      </fieldset>
    </form>
  )
}
