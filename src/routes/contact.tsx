import { Link, createFileRoute } from '@tanstack/react-router'
import { site } from '../data/site'
import { seo } from '../data/seo'
import { PageHero } from '../components/PageHero'
import { ContactForm } from '../components/ContactForm'

export const Route = createFileRoute('/contact')({
  head: () =>
    seo({
      title: 'Contact Us',
      description:
        'Get in touch with Velmora Cleaning Group, a family-run cleaning company serving Bracknell, Berkshire and selected areas of the West Midlands.',
      path: '/contact',
    }),
  component: ContactPage,
})

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We’d love to hear from you."
        intro="Questions, special requests or an existing booking — send us a message and we’ll reply by email."
        image="office.png"
      />
      <section className="container-x grid gap-12 py-20 lg:grid-cols-[1fr_2fr]">
        <aside className="space-y-8">
          <div>
            <h2 className="text-3xl text-emerald-900">Velmora Cleaning Group</h2>
            <p className="mt-2 font-display text-xl italic text-gold-dark">{site.slogan}</p>
          </div>
          <dl className="space-y-5 text-sm">
            <div>
              <dt className="form-label">Based in</dt>
              <dd className="text-ink/75">Bracknell, Berkshire</dd>
            </div>
            <div>
              <dt className="form-label">Serving</dt>
              <dd className="text-ink/75">
                Bracknell, Berkshire and selected areas of the West Midlands
              </dd>
            </div>
            {site.contact.email && (
              <div>
                <dt className="form-label">Email</dt>
                <dd>
                  <a href={`mailto:${site.contact.email}`} className="underline decoration-gold underline-offset-4">
                    {site.contact.email}
                  </a>
                </dd>
              </div>
            )}
            {site.contact.phone && (
              <div>
                <dt className="form-label">Phone</dt>
                <dd className="text-ink/75">{site.contact.phone}</dd>
              </div>
            )}
          </dl>
          <div className="border-l-2 border-gold bg-white p-6 text-sm text-ink/75">
            Looking for a price? The{' '}
            <Link to="/quote" className="underline decoration-gold underline-offset-4">
              quote request form
            </Link>{' '}
            helps us prepare a tailored quote faster.
          </div>
        </aside>
        <ContactForm />
      </section>
    </>
  )
}
