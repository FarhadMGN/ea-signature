import { useState, type FormEvent } from 'react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Field } from '@/components/ui/Field'
import { Icon } from '@/components/ui/Icon'
import { Reveal } from '@/components/ui/Reveal'
import { Select } from '@/components/ui/Select'
import { Textarea } from '@/components/ui/Textarea'
import { BUDGET_OPTIONS, PROJECT_TYPES, SITE } from '@/content/site'
import './Contact.css'

export type ContactFormValues = {
  name: string
  contact: string
  projectType: string
  message: string
  budget: string
}

export type ContactProps = {
  onSubmit?: (values: ContactFormValues) => void | Promise<void>
}

export function Contact({ onSubmit }: ContactProps) {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)

    const form = event.currentTarget
    const data = new FormData(form)

    const values: ContactFormValues = {
      name: String(data.get('name') ?? '').trim(),
      contact: String(data.get('contact') ?? '').trim(),
      projectType: String(data.get('projectType') ?? ''),
      message: String(data.get('message') ?? '').trim(),
      budget: String(data.get('budget') ?? ''),
    }

    if (!values.name || !values.contact || !values.message) {
      setError('Заполните имя, контакт и описание задачи.')
      return
    }

    try {
      await onSubmit?.(values)
      setSubmitted(true)
      form.reset()
    } catch {
      setError('Не удалось отправить заявку. Напишите напрямую в Telegram.')
    }
  }

  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <Container>
        <div className="contact__layout">
          <Reveal>
            <div className="contact__intro">
              <h2 className="contact__title" id="contact-title">
                Связаться
              </h2>
              <p className="contact__lead">
                Кратко опишите задачу. Отвечу в течение суток.
              </p>
              <div className="contact__direct">
                <a className="contact__direct-link" href={SITE.telegram}>
                  <Icon name="telegram" />
                  Telegram
                </a>
                <a className="contact__direct-link" href={`mailto:${SITE.email}`}>
                  <Icon name="mail" />
                  {SITE.email}
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delayMs={80}>
            {submitted ? (
              <p className="contact__success" role="status">
                Спасибо. Свяжусь с вами в ближайшее время.
              </p>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit} noValidate>
                <Field id="name" name="name" label="Имя" autoComplete="name" required />
                <Field
                  id="client-contact"
                  name="contact"
                  label="Telegram или email"
                  autoComplete="email"
                  required
                />
                <Select
                  id="projectType"
                  name="projectType"
                  label="Тип проекта"
                  options={PROJECT_TYPES}
                />
                <Textarea
                  id="message"
                  name="message"
                  label="О проекте"
                  placeholder="Коротко о задаче..."
                  required
                />
                <Select
                  id="budget"
                  name="budget"
                  label="Бюджет"
                  options={BUDGET_OPTIONS}
                />

                {error ? (
                  <p className="contact__error" role="alert">
                    {error}
                  </p>
                ) : null}

                <Button type="submit" variant="primary">
                  Отправить заявку
                </Button>
              </form>
            )}
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
