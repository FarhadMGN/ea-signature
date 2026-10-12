import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FAQ_ITEMS } from '@/content/site'
import './Faq.css'

export function Faq() {
  return (
    <section className="faq" aria-labelledby="faq-title">
      <Container>
        <SectionHeading eyebrow="FAQ" title="Частые вопросы" id="faq-title" />
        <ul className="faq__list">
          {FAQ_ITEMS.map((item) => (
            <li key={item.question} className="faq__item">
              <details className="faq__details">
                <summary className="faq__question">{item.question}</summary>
                <p className="faq__answer">{item.answer}</p>
              </details>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
