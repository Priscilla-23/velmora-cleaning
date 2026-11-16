import { createFileRoute } from '@tanstack/react-router'
import { imageUrl } from '../data/site'
import { seo } from '../data/seo'
import { PageHero } from '../components/PageHero'
import { CtaBand } from '../components/CtaBand'

export const Route = createFileRoute('/about')({
  head: () =>
    seo({
      title: 'About Us — A Family-Run Cleaning Company',
      description:
        'Meet Velmora Cleaning Group, a family-run cleaning business based in Bracknell, bringing care, discretion and a meticulous eye for detail to every home and workplace.',
      path: '/about',
      image: 'bedroom.png',
    }),
  component: AboutPage,
})

const values = [
  {
    title: 'Care',
    text: 'We treat every home as if it were our own family’s — respectfully, gently and with pride.',
  },
  {
    title: 'Discretion',
    text: 'Quiet, courteous and trustworthy. We work around your day and respect your privacy.',
  },
  {
    title: 'Precision',
    text: 'Excellence lives in the details. We follow a careful routine so nothing is overlooked.',
  },
  {
    title: 'Honesty',
    text: 'Clear quotes, clear communication and no surprises — before, during or after a clean.',
  },
]

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A family business, built on care."
        intro="Velmora Cleaning Group was founded as a family-run company with a simple ambition: to bring a genuinely premium, personal standard of cleaning to the communities we call home."
        image="bedroom.png"
      />
      <section className="container-x grid gap-14 py-24 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <img
          src={imageUrl('detail.png', 900)}
          alt="A folded ivory cloth and an elegant spray bottle on white marble"
          loading="lazy"
          className="aspect-[4/5] w-full object-cover"
        />
        <div>
          <p className="eyebrow">Our story</p>
          <h2 className="mt-5 text-4xl leading-tight text-emerald-900 sm:text-5xl">
            Personal service, from a family who cares about the finish.
          </h2>
          <div className="gold-rule my-8" />
          <div className="space-y-5 leading-relaxed text-ink/75">
            <p>
              As a family-run business, Velmora is personal to us. Our name is
              on every clean, so we hold ourselves to the standard we would want
              in our own homes — thorough, considerate and consistently
              excellent.
            </p>
            <p>
              Rooted in Bracknell and serving Berkshire and selected areas of
              the West Midlands, we look after busy households, landlords and
              tenants, holiday-let owners and local businesses. Whatever the
              property, we take the time to understand what matters most to
              you before we begin.
            </p>
            <p>
              Our promise is captured in four words:{' '}
              <em className="font-display text-xl text-emerald-900">
                Excellence in Every Detail.
              </em>
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white py-24">
        <div className="container-x">
          <p className="eyebrow">What we stand for</p>
          <h2 className="mt-5 text-4xl text-emerald-900 sm:text-5xl">Our values</h2>
          <div className="mt-14 grid gap-px bg-emerald-900/10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div key={value.title} className="bg-white p-8">
                <p className="font-display text-5xl text-gold">0{index + 1}</p>
                <h3 className="mt-6 text-3xl text-emerald-900">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
