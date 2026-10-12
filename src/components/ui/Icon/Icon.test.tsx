import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ICONS } from '@/icons'
import { Icon } from './Icon'

describe('Icon', () => {
  it('uses icon variable as image source', () => {
    const { container } = render(<Icon name="arrowRight" />)
    const img = container.querySelector('img')
    expect(img).toHaveAttribute('src', ICONS.arrowRight)
  })
})
