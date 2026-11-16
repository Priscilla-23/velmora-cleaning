import { Link } from '@tanstack/react-router'
import { site } from '../data/site'

export function ComingSoonBar() {
  if (!site.comingSoon) return null
  return (
    <div className="bg-emerald-950 text-ivory/90">
      <p className="container-x flex flex-wrap items-center justify-center gap-x-3 gap-y-1 py-2.5 text-center text-xs tracking-[0.14em] uppercase">
        <span className="text-gold-light">Coming soon</span>
        <span aria-hidden="true" className="text-gold">
          ✦
        </span>
        <span>Velmora Cleaning Group is preparing to launch.</span>
        <Link
          to="/quote"
          className="underline decoration-gold underline-offset-4 hover:text-gold-light"
        >
          Register for an early quote
        </Link>
      </p>
    </div>
  )
}
