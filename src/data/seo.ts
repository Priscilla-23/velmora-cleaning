import { site } from './site'

/** Per-route title, description, canonical URL and social tags. */
export function seo({
  title,
  description,
  path,
  image = 'hero.png',
}: {
  title: string
  description: string
  path: string
  image?: string
}) {
  const fullTitle = path === '/' ? title : `${title} | ${site.name}`
  const url = `${site.url}${path}`
  const ogImage = `${site.url}/.netlify/images?url=/img/${image}&w=1200&fm=jpg`
  return {
    meta: [
      { title: fullTitle },
      { name: 'description', content: description },
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:image', content: ogImage },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage },
    ],
    links: [{ rel: 'canonical', href: url }],
  }
}
