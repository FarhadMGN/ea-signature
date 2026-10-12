import { beforeEach, describe, expect, it, vi } from 'vitest'
import { getCachedImageUrl } from './imageCache'

describe('getCachedImageUrl', () => {
  beforeEach(() => {
    vi.stubGlobal('caches', undefined)
  })

  it('returns the original src when Cache API is unavailable', async () => {
    await expect(getCachedImageUrl('/images/hero-start.png')).resolves.toBe(
      '/images/hero-start.png',
    )
  })

  it('returns empty string as-is', async () => {
    await expect(getCachedImageUrl('')).resolves.toBe('')
  })
})
