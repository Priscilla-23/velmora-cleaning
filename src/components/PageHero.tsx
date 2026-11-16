import { imageUrl } from '../data/site'

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow: string
  title: string
  intro?: string
  image?: string
}) {
  return (
    <section className="relative overflow-hidden bg-emerald-900 text-ivory">
      {image && (
        <img
          src={imageUrl(image, 1600)}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
      )}
      <div className="absolute inset-0 bg-linear-to-r from-emerald-950/90 via-emerald-900/70 to-emerald-900/30" />
      <div className="container-x relative py-20 sm:py-28">
        <p className="eyebrow eyebrow-light">{eyebrow}</p>
        <h1 className="mt-5 max-w-3xl text-5xl leading-[1.05] sm:text-6xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ivory/80">
            {intro}
          </p>
        )}
      </div>
    </section>
  )
}
