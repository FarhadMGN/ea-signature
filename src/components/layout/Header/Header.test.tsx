import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Header } from './Header'

describe('Header', () => {
  it('renders brand and primary CTA', () => {
    render(<Header />)
    expect(screen.getByText('Dev Evtushenko')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Обсудить проект' })).toHaveAttribute(
      'href',
      '#contact',
    )
  })
})
