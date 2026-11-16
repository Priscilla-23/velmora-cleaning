import { Link, createFileRoute } from '@tanstack/react-router'
import { imageUrl } from '../../data/site'
import { services } from '../../data/services'
import { seo } from '../../data/seo'
import { PageHero } from '../../components/PageHero'
import { CtaBand } from '../../components/CtaBand'

export const Route = createFileRoute('/services/')({
  head: () =>
    seo({
      title: 'Cleaning Services — Domestic, Deep, End-of-Tenancy & More',
      description:
        'Domestic, deep, end-of-tenancy, office, commercial and holiday-let cleaning across Bracknell, Berkshire and selected areas of the West Midlands.',
      path: '/services',
      image: 'kitchen.png',
    }),
  component: ServicesPage,
})

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Six ways we look after your space."
        intro="From weekly home care to guest-ready holiday-let changeovers, every service is tailored to your property and delivered with the same meticulous standard."
        image="kitchen.png"
      />
      <section className="container-x space-y-24 py-24">
        {services.map((service, index) => (
          <article
            key={service.slug}
            className={`grid items-center gap-10 md:grid-cols-2 ${index % 2 ? 'md:[&>*:first-child]:order-2' : ''}`}
          >
            <img
              src={imageUrl(service.image, 900)}
              alt=""
              loading={index ? 'lazy' : undefined}
              className="aspect-[4/3] w-full object-cover"
            />
            <div>
              <p className="font-display text-lg text-gold-dark">0{index + 1}</p>
              <h2 className="mt-2 text-4xl text-emerald-900 sm:text-5xl">{service.name}</h2>
              <p className="mt-5 leading-relaxed text-ink/75">{service.intro}</p>
              <ul className="mt-6 grid gap-2 text-sm text-ink/75 sm:grid-cols-2">
                {service.includes.slice(0, 4).map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden="true" className="text-gold">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/services/$slug" params={{ slug: service.slug }} className="btn-emerald">
                  View details
                </Link>
                <Link to="/quote" search={{ service: service.slug }} className="btn-outline text-emerald-900">
                  Get a quote
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>
      <CtaBand />
    </>
  )
}
