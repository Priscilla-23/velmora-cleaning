import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { areas, site } from '../data/site'
import { services } from '../data/services'
import { NotFoundPage } from '../components/NotFoundPage'
import { ComingSoonBar } from '../components/ComingSoonBar'
import { SiteHeader } from '../components/SiteHeader'
import { SiteFooter } from '../components/SiteFooter'

import '../styles.css'

// Deliberately contains no phone, email, reviews or accreditation claims.
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'HouseCleaningService',
  name: site.name,
  slogan: site.slogan,
  description: site.description,
  url: site.url,
  image: `${site.url}/.netlify/images?url=/img/hero.png&w=1200&fm=jpg`,
  areaServed: areas.flatMap((area) => [
    { '@type': 'Place', name: area.region },
  ]),
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bracknell',
    addressRegion: 'Berkshire',
    addressCountry: 'GB',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Cleaning services',
    itemListElement: services.map((service) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: service.name },
    })),
  },
}

export const Route = createRootRoute({
  notFoundComponent: NotFoundPage,
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#0f3b2d' },
      { title: site.name },
      { name: 'description', content: site.description },
      { property: 'og:site_name', content: site.name },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'en_GB' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [
      { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Jost:wght@300;400;500&display=swap',
      },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(structuredData),
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <HeadContent />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-gold focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <ComingSoonBar />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <Scripts />
      </body>
    </html>
  )
}
