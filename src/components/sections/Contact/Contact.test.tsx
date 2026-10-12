import { cleanup, render, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Contact } from './Contact'

afterEach(() => {
  cleanup()
})

describe('Contact', () => {
  it('shows validation error when required fields are empty', async () => {
    const user = userEvent.setup()
    const { container } = render(<Contact />)
    const view = within(container)

    await user.click(view.getByRole('button', { name: 'Отправить заявку' }))

    expect(view.getByRole('alert')).toHaveTextContent(
      'Заполните имя, контакт и описание задачи.',
    )
  })

  it('submits filled form and shows success message', async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn().mockResolvedValue(undefined)
    const { container } = render(<Contact onSubmit={onSubmit} />)
    const view = within(container)

    await user.type(view.getByRole('textbox', { name: 'Имя' }), 'Иван')
    await user.type(view.getByRole('textbox', { name: 'Telegram или email' }), '@ivan')
    await user.type(view.getByRole('textbox', { name: 'О проекте' }), 'Нужен лендинг')
    await user.click(view.getByRole('button', { name: 'Отправить заявку' }))

    expect(onSubmit).toHaveBeenCalledWith(
      expect.objectContaining({
        name: 'Иван',
        contact: '@ivan',
        message: 'Нужен лендинг',
      }),
    )
    expect(view.getByRole('status')).toHaveTextContent('Спасибо')
  })
})
