import { Link, createFileRoute } from '@tanstack/react-router'
import { imageUrl, site } from '../data/site'
import { services } from '../data/services'
import { seo } from '../data/seo'
import { CtaBand } from '../components/CtaBand'

export const Route = createFileRoute('/')({
  head: () =>
    seo({
      title: `${site.name} | Luxury Cleaning in Bracknell & Berkshire`,
      description: site.description,
      path: '/',
    }),
  component: HomePage,
})

const promises = [
  {
    title: 'Family-run, personally overseen',
    text: 'A family business where the people who answer your enquiry care about the result.',
  },
  {
    title: 'A consistent, familiar team',
    text: 'Wherever possible, the same cleaner returns each visit and learns how you like things done.',
  },
  {
    title: 'Attention to every detail',
    text: 'Skirting, switches, handles and hinges — the finishing touches are where we take most care.',
  },
  {
    title: 'Simple quotes, flexible payment',
    text: 'Clear tailored quotes, with card, digital wallet, bank transfer and pay-after-service options planned.',
  },
]

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-emerald-950 text-ivory">
        <img
          src={imageUrl('hero.png', 2000)}
          srcSet={`${imageUrl('hero.png', 900)} 900w, ${imageUrl('hero.png', 1400)} 1400w, ${imageUrl('hero.png', 2000)} 2000w`}
          sizes="100vw"
          alt="An immaculate Georgian living room with emerald velvet sofas and brass accents"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-emerald-950/95 via-emerald-950/70 to-emerald-950/20" />
        <div className="container-x flex min-h-[82vh] flex-col justify-center py-24">
          {site.comingSoon && (
            <p className="mb-8 inline-flex w-fit items-center gap-3 border border-gold/60 bg-emerald-950/40 px-4 py-2 text-xs uppercase tracking-[0.3em] text-gold-light backdrop-blur-sm">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
              Coming soon
            </p>
          )}
          <h1 className="max-w-3xl text-5xl leading-[1.02] sm:text-7xl lg:text-[5.5rem]">
            Excellence in <em className="text-gold-light">every</em> detail.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ivory/80">
            Velmora Cleaning Group is a family-run cleaning company bringing a
            refined, meticulous standard of care to homes and workplaces across
            Bracknell, Berkshire and selected areas of the West Midlands.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/quote" className="btn-gold">
              {site.comingSoon ? 'Register for a quote' : 'Request a quote'}
            </Link>
            <Link to="/services" className="btn-outline text-ivory">
              Explore services
            </Link>
          </div>
        </div>
      </section>

      {/* Coming soon announcement */}
      {site.comingSoon && (
        <section aria-labelledby="launch-heading" className="relative -mt-16 z-10">
          <div className="container-x">
            <div className="grid gap-8 border border-gold/40 bg-ivory p-8 shadow-[0_30px_80px_-40px_rgba(10,42,32,0.5)] sm:p-12 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="eyebrow">An announcement</p>
                <h2 id="launch-heading" className="mt-4 text-4xl text-emerald-900 sm:text-5xl">
                  We’re opening our doors soon.
                </h2>
                <p className="mt-4 max-w-2xl leading-relaxed text-ink/70">
                  We are putting the finishing touches to Velmora Cleaning Group.
                  Online booking and secure payments will open at launch — in the
                  meantime, request a quote or send us a message and we’ll be in
                  touch as soon as we open.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                <Link to="/quote" className="btn-emerald">
                  Request a quote
                </Link>
                <Link to="/contact" className="btn-outline text-emerald-900">
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Intro */}
      <section className="container-x grid items-center gap-14 py-24 lg:grid-cols-2">
        <div>
          <p className="eyebrow">The Velmora standard</p>
          <h2 className="mt-5 text-4xl leading-tight text-emerald-900 sm:text-5xl">
            A quieter kind of luxury: a home that simply feels cared for.
          </h2>
          <div className="gold-rule my-8" />
          <p className="leading-relaxed text-ink/75">
            We believe a beautifully clean space is felt as much as it is seen.
            Our approach is calm, discreet and thorough — every visit is
            planned around your property, your priorities and your routine.
          </p>
          <Link to="/about" className="mt-8 inline-block text-sm uppercase tracking-[0.2em] text-emerald-900 underline decoration-gold underline-offset-8 hover:text-gold-dark">
            Our family story
          </Link>
        </div>
        <div className="relative">
          <img
            src={imageUrl('kitchen.png', 1000)}
            alt="A pristine kitchen with emerald cabinetry, marble worktops and gold fixtures"
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />
          <img
            src={imageUrl('detail.png', 500)}
            alt=""
            loading="lazy"
            className="absolute -bottom-10 -left-6 hidden aspect-square w-48 border-8 border-ivory object-cover sm:block"
          />
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-24">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Our services</p>
              <h2 className="mt-5 text-4xl text-emerald-900 sm:text-5xl">Cleaning, beautifully done.</h2>
            </div>
            <Link to="/services" className="btn-outline text-emerald-900">
              All services
            </Link>
          </div>
          <div className="mt-14 grid gap-px bg-emerald-900/10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Link
                key={service.slug}
                to="/services/$slug"
                params={{ slug: service.slug }}
                className="group bg-white"
              >
                <div className="overflow-hidden">
                  <img
                    src={imageUrl(service.image, 700)}
                    alt=""
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <p className="font-display text-sm text-gold-dark">0{index + 1}</p>
                  <h3 className="mt-2 text-3xl text-emerald-900">{service.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">{service.short}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-emerald-900 transition group-hover:gap-4">
                    Discover <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Promises */}
      <section className="bg-emerald-900 py-24 text-ivory">
        <div className="container-x">
          <p className="eyebrow eyebrow-light">Why Velmora</p>
          <h2 className="mt-5 max-w-2xl text-4xl sm:text-5xl">
            Thoughtful service, from first enquiry to final polish.
          </h2>
          <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {promises.map((promise) => (
              <div key={promise.title} className="border-t border-gold/40 pt-6">
                <h3 className="text-2xl text-gold-light">{promise.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory/70">{promise.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="container-x grid gap-12 py-24 md:grid-cols-2 md:items-center">
        <img
          src={imageUrl('holiday.png', 1000)}
          alt="A cottage interior freshly prepared for guests with folded white towels"
          loading="lazy"
          className="aspect-[4/3] w-full object-cover"
        />
        <div>
          <p className="eyebrow">Where we work</p>
          <h2 className="mt-5 text-4xl text-emerald-900 sm:text-5xl">
            Bracknell, Berkshire &amp; the West Midlands.
          </h2>
          <p className="mt-6 leading-relaxed text-ink/75">
            Based in Bracknell, we serve homes and businesses throughout
            Berkshire, together with selected areas of the West Midlands.
          </p>
          <Link to="/areas" className="btn-emerald mt-8">
            Areas we cover
          </Link>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
