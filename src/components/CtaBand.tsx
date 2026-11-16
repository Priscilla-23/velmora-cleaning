import { Link } from '@tanstack/react-router'
import { site } from '../data/site'

export function CtaBand() {
  return (
    <section className="bg-ivory-deep">
      <div className="container-x flex flex-col items-start justify-between gap-8 py-16 md:flex-row md:items-center">
        <div>
          <p className="eyebrow">{site.comingSoon ? 'Launching soon' : 'Ready when you are'}</p>
          <h2 className="mt-4 max-w-xl text-4xl text-emerald-900 sm:text-5xl">
            Let us take care of every detail.
          </h2>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link to="/quote" className="btn-emerald">
            Request a quote
          </Link>
          <Link to="/contact" className="btn-outline text-emerald-900">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  )
}
