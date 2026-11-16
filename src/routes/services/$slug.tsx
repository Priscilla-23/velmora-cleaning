import { Link, createFileRoute, notFound } from '@tanstack/react-router'
import { imageUrl } from '../../data/site'
import { findService, services } from '../../data/services'
import { seo } from '../../data/seo'
import { PageHero } from '../../components/PageHero'
import { CtaBand } from '../../components/CtaBand'

export const Route = createFileRoute('/services/$slug')({
  loader: ({ params }) => {
    const service = findService(params.slug)
    if (!service) throw notFound()
    return service
  },
  head: ({ loaderData }) =>
    loaderData
      ? seo({
          title: `${loaderData.name} in Bracknell & Berkshire`,
          description: `${loaderData.intro} Serving Bracknell, Berkshire and selected areas of the West Midlands.`,
          path: `/services/${loaderData.slug}`,
          image: loaderData.image,
        })
      : {},
  component: ServicePage,
})

function ServicePage() {
  const service = Route.useLoaderData()
  const others = services.filter((item) => item.slug !== service.slug).slice(0, 3)
  return (
    <>
      <PageHero eyebrow="Our services" title={service.name} intro={service.intro} image={service.image} />
      <section className="container-x grid gap-14 py-24 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <h2 className="text-4xl text-emerald-900">What’s included</h2>
          <div className="gold-rule my-6" />
          <ul className="grid gap-4 sm:grid-cols-2">
            {service.includes.map((item) => (
              <li key={item} className="card flex gap-4 p-5 text-sm leading-relaxed">
                <span aria-hidden="true" className="text-gold">✦</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-ink/60">
            Every clean is tailored — the exact checklist is agreed with you
            when we prepare your quote.
          </p>
        </div>
        <aside className="space-y-6">
          <img src={imageUrl(service.image, 800)} alt="" className="aspect-[4/3] w-full object-cover" />
          <div className="bg-emerald-900 p-8 text-ivory">
            <h2 className="text-3xl text-gold-light">Ideal for</h2>
            <ul className="mt-4 space-y-2 text-sm text-ivory/80">
              {service.idealFor.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3">
              <Link to="/quote" search={{ service: service.slug }} className="btn-gold">
                Get a quote
              </Link>
              <Link to="/book" search={{ service: service.slug }} className="btn-outline text-ivory">
                Book this service
              </Link>
            </div>
          </div>
        </aside>
      </section>
      <section className="bg-white py-20">
        <div className="container-x">
          <h2 className="text-3xl text-emerald-900">Other services</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {others.map((other) => (
              <Link key={other.slug} to="/services/$slug" params={{ slug: other.slug }} className="group card p-6 transition hover:border-gold">
                <h3 className="text-2xl text-emerald-900">{other.name}</h3>
                <p className="mt-2 text-sm text-ink/70">{other.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
