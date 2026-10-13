import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { PROCESS_STEPS } from '@/content/site'
import './Process.css'

export function Process() {
  return (
    <section className="process" id="process" aria-labelledby="process-title">
      <Container>
        <Reveal>
          <SectionHeading title="Как проходит работа" id="process-title" />
        </Reveal>
        <ol className="process__list">
          {PROCESS_STEPS.map((step, index) => (
            <li key={step.num} className="process__item">
              <Reveal delayMs={index * 60}>
                <div className="process__card">
                  <span className="process__num" aria-hidden="true">
                    {step.num}
                  </span>
                  <h3 className="process__name">{step.title}</h3>
                  <p className="process__text">{step.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
