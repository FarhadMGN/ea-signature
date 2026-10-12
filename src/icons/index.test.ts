import { describe, expect, it } from 'vitest'
import { ICONS } from './index'

describe('ICONS', () => {
  it('exposes required icon variables', () => {
    expect(ICONS).toEqual(
      expect.objectContaining({
        arrowRight: expect.any(String),
        mail: expect.any(String),
        scroll: expect.any(String),
        telegram: expect.any(String),
      }),
    )
  })
})
