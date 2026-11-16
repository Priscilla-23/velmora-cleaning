/**
 * Central brand + launch configuration.
 *
 * `comingSoon` keeps the whole website in pre-launch mode: a site-wide
 * announcement is shown, and booking/payment screens run as previews that
 * never confirm a booking or take money. Flip to `false` on launch day.
 */
export const site = {
  name: 'Velmora Cleaning Group',
  shortName: 'Velmora',
  slogan: 'Excellence in Every Detail.',
  description:
    'Velmora Cleaning Group is a family-run, premium cleaning company serving Bracknell, Berkshire and selected areas of the West Midlands. Domestic, deep, end-of-tenancy, office, commercial and holiday-let cleaning.',
  url: 'https://velmora-cleaning.netlify.app',
  comingSoon: true,
  /**
   * Business contact details. Left empty on purpose — add the real business
   * email / phone here when ready and they appear in the footer and contact page.
   */
  contact: {
    email: '',
    phone: '',
  },
}

export const nav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/areas', label: 'Areas We Cover' },
  { to: '/contact', label: 'Contact' },
] as const

export const areas = [
  {
    region: 'Bracknell',
    summary:
      'Our home base. Homes, rentals and workplaces across Bracknell and its neighbourhoods.',
    places: [
      'Bracknell town centre',
      'Binfield',
      'Warfield',
      'Crowthorne',
      'Sandhurst',
      'Ascot',
    ],
  },
  {
    region: 'Berkshire',
    summary:
      'Wider Berkshire, from the Thames Valley towns to the quieter villages in between.',
    places: ['Wokingham', 'Reading', 'Windsor', 'Maidenhead', 'Newbury'],
  },
  {
    region: 'West Midlands',
    summary:
      'Selected areas of the West Midlands. Please ask and we will confirm availability for your postcode.',
    places: ['Selected postcodes, confirmed on request'],
  },
]

/** Netlify Forms registrations live in public/__forms.html — keep fields in sync. */
export const forms = {
  endpoint: '/__forms.html',
  quote: 'quote-request',
  contact: 'contact',
}

export const imageUrl = (file: string, width: number) =>
  `/.netlify/images?url=/img/${file}&w=${width}&fm=webp&q=80`
