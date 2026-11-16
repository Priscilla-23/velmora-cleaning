import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { nav } from '../data/site'
import { Logo } from './Logo'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 border-b border-emerald-900/10 bg-ivory/90 backdrop-blur-md">
      <div className="container-x flex h-20 items-center justify-between gap-6">
        <Link to="/" aria-label="Velmora Cleaning Group — home">
          <Logo />
        </Link>
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8 text-sm tracking-wide">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.to === '/' }}
                  className="relative py-2 text-ink/80 transition hover:text-emerald-900 data-[status=active]:text-emerald-900 data-[status=active]:after:absolute data-[status=active]:after:inset-x-0 data-[status=active]:after:-bottom-0.5 data-[status=active]:after:h-px data-[status=active]:after:bg-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link to="/book" className="btn-outline px-5! py-2.5! text-emerald-900">
            Book
          </Link>
          <Link to="/quote" className="btn-emerald px-5! py-2.5!">
            Get a quote
          </Link>
        </div>
        <button
          type="button"
          className="p-2 text-emerald-900 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
            {open ? (
              <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="1.5" />
            ) : (
              <path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor" strokeWidth="1.5" />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-emerald-900/10 bg-ivory lg:hidden"
        >
          <ul className="container-x flex flex-col py-4">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block border-b border-emerald-900/5 py-3 font-display text-2xl text-emerald-900"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-5 grid grid-cols-2 gap-3">
              <Link to="/book" onClick={() => setOpen(false)} className="btn-outline text-emerald-900">
                Book
              </Link>
              <Link to="/quote" onClick={() => setOpen(false)} className="btn-emerald">
                Get a quote
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
