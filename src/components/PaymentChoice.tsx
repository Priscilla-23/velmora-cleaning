import { paymentOptions, type PaymentOptionId } from '../data/booking-fixtures'

export function PaymentChoice({
  value,
  onChange,
}: {
  value?: PaymentOptionId
  onChange: (id: PaymentOptionId) => void
}) {
  return (
    <fieldset className="space-y-3">
      <legend className="sr-only">Choose how to pay</legend>
      {paymentOptions.map((option) => (
        <label
          key={option.id}
          className={`flex cursor-pointer items-start gap-4 border p-5 transition ${value === option.id ? 'border-gold bg-gold/10' : 'border-emerald-900/10 hover:border-gold/60'}`}
        >
          <input
            type="radio"
            name="payment"
            checked={value === option.id}
            onChange={() => onChange(option.id)}
            className="mt-1.5 accent-emerald-900"
          />
          <span className="flex-1">
            <span className="block font-display text-2xl text-emerald-900">{option.name}</span>
            <span className="mt-1 block text-sm text-ink/65">{option.detail}</span>
            <span className="mt-3 flex flex-wrap gap-2">
              {option.badges.map((badge) => (
                <span key={badge} className="border border-emerald-900/15 px-2 py-0.5 text-[0.65rem] uppercase tracking-[0.15em] text-ink/60">
                  {badge}
                </span>
              ))}
            </span>
          </span>
        </label>
      ))}
    </fieldset>
  )
}
