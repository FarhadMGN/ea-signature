import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Button } from './Button'

describe('Button', () => {
  it('renders a button by default', () => {
    render(<Button>Отправить</Button>)
    expect(screen.getByRole('button', { name: 'Отправить' })).toHaveClass(
      'button',
      'button--primary',
    )
  })

  it('renders as a link when href is provided', () => {
    render(
      <Button href="#contact" variant="ghost">
        Контакт
      </Button>,
    )
    const link = screen.getByRole('link', { name: 'Контакт' })
    expect(link).toHaveAttribute('href', '#contact')
    expect(link).toHaveClass('button--ghost')
  })
})
