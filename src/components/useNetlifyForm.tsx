import { useRef, useState, type FormEvent } from 'react'
import { forms } from '../data/site'

export type FormState = 'idle' | 'pending' | 'success' | 'error'

/**
 * AJAX submission to Netlify Forms. Posts to the static registration file
 * (not `/`, which SSR handles) and treats an unchanged registration page as
 * a failure, so local previews never show a false success.
 */
export function useNetlifyForm() {
  const [state, setState] = useState<FormState>('idle')
  const submitting = useRef(false)

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (submitting.current) return
    const body = new URLSearchParams()
    new FormData(event.currentTarget).forEach((value, key) =>
      body.append(key, String(value)),
    )
    submitting.current = true
    setState('pending')
    try {
      const response = await fetch(forms.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
        signal: AbortSignal.timeout(15000),
      })
      if (!response.ok || /\bdata-netlify\s*=/i.test(await response.text()))
        throw new Error('Submission was not accepted')
      setState('success')
    } catch {
      setState('error')
    } finally {
      submitting.current = false
    }
  }

  return { state, onSubmit, reset: () => setState('idle') }
}

export function Honeypot() {
  return (
    <p hidden>
      <label>
        Leave this empty
        <input name="bot-field" tabIndex={-1} autoComplete="off" />
      </label>
    </p>
  )
}

export function FormError() {
  return (
    <p role="alert" className="border-l-2 border-red-700 bg-red-50 px-4 py-3 text-sm text-red-900">
      We couldn’t send your details just now. Everything you entered is still
      here — please try again in a moment.
    </p>
  )
}

export function FormSuccess({
  title,
  children,
  onReset,
}: {
  title: string
  children: React.ReactNode
  onReset: () => void
}) {
  return (
    <div role="status" className="card p-10 text-center">
      <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold text-2xl text-gold-dark">
        ✓
      </span>
      <h3 className="mt-6 text-3xl text-emerald-900">{title}</h3>
      <p className="mx-auto mt-3 max-w-md text-ink/70">{children}</p>
      <button type="button" onClick={onReset} className="mt-8 text-sm underline decoration-gold underline-offset-4">
        Send another
      </button>
    </div>
  )
}
