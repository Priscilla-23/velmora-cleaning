import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { forms } from './site'
import { findService, services } from './services'

const registration = readFileSync('public/__forms.html', 'utf8')

describe('site configuration', () => {
  it('registers every Netlify form used by the site', () => {
    expect(registration).toContain(`name="${forms.quote}"`)
    expect(registration).toContain(`name="${forms.contact}"`)
  })

  it('offers all six requested services with unique slugs', () => {
    expect(services).toHaveLength(6)
    expect(new Set(services.map((s) => s.slug)).size).toBe(6)
    expect(findService('holiday-let-cleaning')?.name).toBe('Holiday-Let Cleaning')
    expect(findService('unknown')).toBeUndefined()
  })
})
