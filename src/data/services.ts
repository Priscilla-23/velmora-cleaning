export type Service = {
  slug: string
  name: string
  short: string
  intro: string
  image: string
  idealFor: string[]
  includes: string[]
}

export const services: Service[] = [
  {
    slug: 'domestic-cleaning',
    name: 'Domestic Cleaning',
    short: 'Regular, reliable care for the home you love coming back to.',
    intro:
      'Weekly, fortnightly or monthly visits from the same trusted cleaner, following a routine shaped around your home and the way you live in it.',
    image: 'bedroom.png',
    idealFor: ['Busy households', 'Families', 'Professionals working from home'],
    includes: [
      'Dusting and polishing of surfaces, skirting and fittings',
      'Kitchen worktops, hob, sink and appliance exteriors',
      'Bathrooms, toilets, showers and mirrors cleaned and shined',
      'Vacuuming and mopping throughout',
      'Beds made and linen changed on request',
      'Bins emptied and refreshed',
    ],
  },
  {
    slug: 'deep-cleaning',
    name: 'Deep Cleaning',
    short: 'A meticulous top-to-bottom reset for every room.',
    intro:
      'For when your home needs more than a routine clean — a seasonal refresh, a post-renovation tidy or a fresh start before regular visits begin.',
    image: 'kitchen.png',
    idealFor: ['Spring and seasonal cleans', 'After building work', 'Before regular cleaning begins'],
    includes: [
      'Inside cupboards, drawers and wardrobes',
      'Oven, hob and extractor degreasing',
      'Limescale removal from taps, tiles and screens',
      'Doors, frames, switches and skirting detailed by hand',
      'Interior windows, sills and tracks',
      'Behind and beneath accessible furniture',
    ],
  },
  {
    slug: 'end-of-tenancy-cleaning',
    name: 'End-of-Tenancy Cleaning',
    short: 'A thorough move-out clean prepared with inventory checks in mind.',
    intro:
      'Moving out or preparing a property for new tenants? We clean every room thoroughly so the property is presented at its very best for check-out.',
    image: 'bathroom.png',
    idealFor: ['Tenants moving out', 'Landlords between lets', 'Letting agents'],
    includes: [
      'Full kitchen clean including inside oven, fridge and freezer',
      'Bathrooms descaled and sanitised',
      'Inside all cupboards, wardrobes and drawers',
      'Walls spot-cleaned, skirting and doors wiped',
      'Interior windows and sills',
      'Floors vacuumed and mopped throughout',
    ],
  },
  {
    slug: 'office-cleaning',
    name: 'Office Cleaning',
    short: 'Discreet, scheduled cleaning for a workplace that impresses.',
    intro:
      'Early-morning, evening or weekend cleaning for offices and studios, scheduled around your working day so your team arrives to a calm, spotless space.',
    image: 'office.png',
    idealFor: ['Small and medium offices', 'Studios and clinics', 'Shared workspaces'],
    includes: [
      'Desks, meeting tables and touchpoints wiped',
      'Kitchens and breakout areas cleaned',
      'Washrooms cleaned and replenished',
      'Bins emptied and recycling sorted',
      'Floors vacuumed and mopped',
      'Glass partitions and entrance doors polished',
    ],
  },
  {
    slug: 'commercial-cleaning',
    name: 'Commercial Cleaning',
    short: 'Tailored cleaning programmes for larger and specialist premises.',
    intro:
      'From retail units to communal areas, we build a cleaning programme around your premises, footfall and opening hours — agreed with you in advance.',
    image: 'detail.png',
    idealFor: ['Retail and showrooms', 'Communal areas and receptions', 'Hospitality spaces'],
    includes: [
      'Site walk-round and a tailored cleaning schedule',
      'Front-of-house areas presented to a high standard',
      'Washroom and kitchen hygiene',
      'Hard floor care and vacuuming',
      'Periodic deep-clean visits',
      'A single point of contact for your account',
    ],
  },
  {
    slug: 'holiday-let-cleaning',
    name: 'Holiday-Let Cleaning',
    short: 'Guest-ready turnarounds between every stay.',
    intro:
      'Changeover cleans for holiday lets and short-stay properties, timed around check-out and check-in so every guest walks into a home that feels cared for.',
    image: 'holiday.png',
    idealFor: ['Holiday-let owners', 'Short-stay hosts', 'Property managers'],
    includes: [
      'Full changeover clean between guests',
      'Beds made with fresh linen and towels presented',
      'Kitchen reset and dishwasher emptied',
      'Bathrooms cleaned and toiletries arranged',
      'Quick check for breakages or missing items reported to you',
      'Flexible same-day turnarounds where available',
    ],
  },
]

export const findService = (slug: string) =>
  services.find((service) => service.slug === slug)
