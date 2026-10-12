import { act, cleanup, render, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { ImageCarousel } from './ImageCarousel'

afterEach(() => {
  cleanup()
  vi.useRealTimers()
})

const slides = [
  { src: '/images/cases/dinner-agent-chat.jpg', alt: 'Чат с агентом' },
  { src: '/images/cases/dinner-agent-basket.jpg', alt: 'Корзина ВкусВилл' },
] as const

describe('ImageCarousel', () => {
  it('shows the first slide and switches on next click', async () => {
    const user = userEvent.setup()
    const { container } = render(<ImageCarousel slides={slides} />)
    const view = within(container)

    expect(container.querySelectorAll('.image-carousel__slide--active')).toHaveLength(1)
    expect(
      container.querySelector('.image-carousel__slide--active .cached-image'),
    ).toHaveAttribute('alt', 'Чат с агентом')

    await user.click(view.getByRole('button', { name: 'Следующее фото' }))

    expect(
      container.querySelector('.image-carousel__slide--active .cached-image'),
    ).toHaveAttribute('alt', 'Корзина ВкусВилл')
  })

  it('auto-advances after the interval', () => {
    vi.useFakeTimers()
    const { container } = render(<ImageCarousel slides={slides} intervalMs={5000} />)

    expect(
      container.querySelector('.image-carousel__slide--active .cached-image'),
    ).toHaveAttribute('alt', 'Чат с агентом')

    act(() => {
      vi.advanceTimersByTime(5000)
    })

    expect(
      container.querySelector('.image-carousel__slide--active .cached-image'),
    ).toHaveAttribute('alt', 'Корзина ВкусВилл')
  })
})
