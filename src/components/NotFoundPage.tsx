import { Link } from '@tanstack/react-router'

export function NotFoundPage() {
  return (
    <section className="container-x py-32 text-center">
      <p className="eyebrow justify-center">Page not found</p>
      <h1 className="mt-5 text-5xl text-emerald-900">
        This room hasn’t been prepared yet.
      </h1>
      <p className="mt-4 text-ink/70">
        The page you were looking for doesn’t exist or has moved.
      </p>
      <Link to="/" className="btn-emerald mt-10">
        Return home
      </Link>
    </section>
  )
}
