import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { PROCESS_STEPS } from '@/content/site'
import './Process.css'

export function Process() {
  return (
    <section className="process" id="process" aria-labelledby="process-title">
      <Container>
        <SectionHeading
          eyebrow="Как проходит работа"
          title="Четыре этапа без хаоса"
          id="process-title"
        />
        <ol className="process__list">
          {PROCESS_STEPS.map((step) => (
            <li key={step.num} className="process__item">
              <span className="process__num">{step.num}</span>
              <h3 className="process__name">{step.title}</h3>
              <p className="process__text">{step.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
