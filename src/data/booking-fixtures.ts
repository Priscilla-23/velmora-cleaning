/**
 * STUB DATA for the booking and payment previews.
 *
 * Nothing here is real: availability is generated, and no booking is stored
 * or payment taken. A later milestone replaces these with Netlify Database
 * availability and a payment provider (see PLAN.md).
 */

export const timeSlots = ['08:00', '10:00', '12:30', '15:00'] as const

/** Next `days` working days (Mon–Sat) with pseudo-random slot availability. */
export function upcomingDays(from: Date, days = 12) {
  const result: { date: Date; slots: { time: string; available: boolean }[] }[] = []
  const cursor = new Date(from)
  cursor.setHours(0, 0, 0, 0)
  cursor.setDate(cursor.getDate() + 2)
  while (result.length < days) {
    if (cursor.getDay() !== 0) {
      const seed = cursor.getDate() * 7 + cursor.getMonth()
      result.push({
        date: new Date(cursor),
        slots: timeSlots.map((time, i) => ({ time, available: (seed + i * 3) % 5 !== 0 })),
      })
    }
    cursor.setDate(cursor.getDate() + 1)
  }
  return result
}

export type PaymentOptionId = 'card' | 'wallet' | 'paypal' | 'bank' | 'after'

export const paymentOptions: {
  id: PaymentOptionId
  name: string
  detail: string
  badges: string[]
}[] = [
  {
    id: 'card',
    name: 'Pay deposit by card',
    detail: 'Secure card payment. Balance due after your clean.',
    badges: ['Visa', 'Mastercard', 'Amex'],
  },
  {
    id: 'wallet',
    name: 'Apple Pay / Google Pay',
    detail: 'Pay your deposit in one tap where your device supports it.',
    badges: ['Apple Pay', 'Google Pay'],
  },
  {
    id: 'paypal',
    name: 'PayPal',
    detail: 'Pay your deposit with your PayPal account, where available.',
    badges: ['PayPal'],
  },
  {
    id: 'bank',
    name: 'Bank transfer',
    detail: 'We email our bank details and your payment reference with your confirmation.',
    badges: ['BACS', 'Faster Payments'],
  },
  {
    id: 'after',
    name: 'Pay after service',
    detail: 'Receive an invoice once your clean is complete and pay online or by transfer.',
    badges: ['Invoice'],
  },
]

/** Example invoice shown on the payments preview. Clearly labelled as a sample. */
export const sampleInvoice = {
  reference: 'VEL-SAMPLE-0001',
  service: 'Deep Cleaning',
  date: 'Sample date',
  status: 'Awaiting payment',
}
