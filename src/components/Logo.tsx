export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <svg
        viewBox="0 0 40 40"
        aria-hidden="true"
        className="h-9 w-9 shrink-0"
      >
        <rect
          x="1"
          y="1"
          width="38"
          height="38"
          fill="none"
          stroke="currentColor"
          className="text-gold"
          strokeWidth="1"
        />
        <path
          d="M10 11 L20 30 L30 11"
          fill="none"
          stroke="currentColor"
          className="text-gold"
          strokeWidth="1.6"
        />
        <circle cx="20" cy="9" r="1.4" className="fill-gold" />
      </svg>
      <span className="leading-none">
        <span
          className={`block font-display text-2xl tracking-[0.08em] ${light ? 'text-ivory' : 'text-emerald-900'}`}
        >
          VELMORA
        </span>
        <span
          className={`mt-1 block text-[0.6rem] uppercase tracking-[0.42em] ${light ? 'text-gold-light' : 'text-gold-dark'}`}
        >
          Cleaning Group
        </span>
      </span>
    </span>
  )
}
