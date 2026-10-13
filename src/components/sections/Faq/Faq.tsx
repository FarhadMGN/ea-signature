import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { FAQ_ITEMS } from '@/content/site'
import './Faq.css'

export function Faq() {
  return (
    <section className="faq" aria-labelledby="faq-title">
      <Container>
        <div className="faq__layout">
          <Reveal>
            <h2 className="faq__title" id="faq-title">
              Частые вопросы
            </h2>
          </Reveal>
          <ul className="faq__list">
            {FAQ_ITEMS.map((item, index) => (
              <li key={item.question} className="faq__item">
                <Reveal delayMs={index * 40}>
                  <details className="faq__details">
                    <summary className="faq__question">{item.question}</summary>
                    <p className="faq__answer">{item.answer}</p>
                  </details>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
