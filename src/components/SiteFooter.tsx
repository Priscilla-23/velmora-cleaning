import { Link } from '@tanstack/react-router'
import { nav, site } from '../data/site'
import { services } from '../data/services'
import { Logo } from './Logo'

export function SiteFooter() {
  return (
    <footer className="bg-emerald-950 text-ivory/75">
      <div className="container-x grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo light />
          <p className="mt-6 font-display text-2xl italic text-gold-light">
            {site.slogan}
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            A family-run cleaning company serving Bracknell, Berkshire and
            selected areas of the West Midlands.
          </p>
        </div>
        <FooterList title="Explore">
          {nav.map((item) => (
            <li key={item.to}>
              <Link to={item.to} className="hover:text-gold-light">
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/payments" className="hover:text-gold-light">
              Payments
            </Link>
          </li>
        </FooterList>
        <FooterList title="Services">
          {services.map((service) => (
            <li key={service.slug}>
              <Link
                to="/services/$slug"
                params={{ slug: service.slug }}
                className="hover:text-gold-light"
              >
                {service.name}
              </Link>
            </li>
          ))}
        </FooterList>
        <FooterList title="Get in touch">
          {site.contact.email && (
            <li>
              <a href={`mailto:${site.contact.email}`} className="hover:text-gold-light">
                {site.contact.email}
              </a>
            </li>
          )}
          {site.contact.phone && <li>{site.contact.phone}</li>}
          <li>
            <Link to="/contact" className="hover:text-gold-light">
              Send us a message
            </Link>
          </li>
          <li>
            <Link to="/quote" className="hover:text-gold-light">
              Request a quote
            </Link>
          </li>
          <li>
            <Link to="/book" className="hover:text-gold-light">
              Book a clean
            </Link>
          </li>
        </FooterList>
      </div>
      <div className="border-t border-ivory/10">
        <p className="container-x flex flex-col justify-between gap-2 py-6 text-xs tracking-wide sm:flex-row">
          <span>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
          <span className="text-gold-light/80">Bracknell · Berkshire · West Midlands</span>
        </p>
      </div>
    </footer>
  )
}

function FooterList({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="mb-5 font-sans text-xs font-medium uppercase tracking-[0.28em] text-gold">
        {title}
      </h2>
      <ul className="space-y-3 text-sm">{children}</ul>
    </div>
  )
}
