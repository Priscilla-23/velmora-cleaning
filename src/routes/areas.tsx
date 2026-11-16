import { Link, createFileRoute } from '@tanstack/react-router'
import { areas } from '../data/site'
import { seo } from '../data/seo'
import { PageHero } from '../components/PageHero'
import { CtaBand } from '../components/CtaBand'

export const Route = createFileRoute('/areas')({
  head: () =>
    seo({
      title: 'Areas We Cover — Bracknell, Berkshire & West Midlands',
      description:
        'Velmora Cleaning Group covers Bracknell, towns across Berkshire including Wokingham, Reading, Windsor and Ascot, and selected areas of the West Midlands.',
      path: '/areas',
      image: 'holiday.png',
    }),
  component: AreasPage,
})

function AreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Areas we cover"
        title="Local to Bracknell. Trusted further afield."
        intro="We are based in Bracknell and look after homes and businesses throughout Berkshire, as well as selected areas of the West Midlands."
        image="holiday.png"
      />
      <section className="container-x py-24">
        <div className="grid gap-8 lg:grid-cols-3">
          {areas.map((area, index) => (
            <article key={area.region} className={`p-10 ${index === 0 ? 'bg-emerald-900 text-ivory' : 'card'}`}>
              <p className={`font-display text-lg ${index === 0 ? 'text-gold-light' : 'text-gold-dark'}`}>
                {index === 0 ? 'Home base' : 'Also serving'}
              </p>
              <h2 className={`mt-2 text-4xl ${index === 0 ? 'text-ivory' : 'text-emerald-900'}`}>{area.region}</h2>
              <p className={`mt-4 text-sm leading-relaxed ${index === 0 ? 'text-ivory/75' : 'text-ink/70'}`}>{area.summary}</p>
              <ul className="mt-8 space-y-3 border-t border-gold/40 pt-6 text-sm">
                {area.places.map((place) => (
                  <li key={place} className="flex gap-3">
                    <span aria-hidden="true" className="text-gold">✦</span>
                    {place}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-6 border border-gold/40 bg-white p-10 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl text-emerald-900">Not sure if we cover you?</h2>
            <p className="mt-2 text-ink/70">
              Include your postcode in a quote request and we’ll confirm availability.
            </p>
          </div>
          <Link to="/quote" className="btn-emerald">
            Check my postcode
          </Link>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
