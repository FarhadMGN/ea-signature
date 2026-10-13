import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { PROCESS_STEPS } from '@/content/site'
import './Process.css'

export function Process() {
  return (
    <section className="process" id="process" aria-labelledby="process-title">
      <Container>
        <SectionHeading title="Как проходит работа" id="process-title" />
        <ol className="process__list">
          {PROCESS_STEPS.map((step) => (
            <li key={step.num} className="process__item">
              <span className="process__num" aria-hidden="true">
                {step.num}
              </span>
              <div className="process__body">
                <h3 className="process__name">{step.title}</h3>
                <p className="process__text">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
