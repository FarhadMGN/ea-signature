import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { SERVICES } from '@/content/site'
import './Services.css'

export function Services() {
  return (
    <section className="services" id="services" aria-labelledby="services-title">
      <Container>
        <Reveal>
          <SectionHeading title="ИИ, процессы и продукт" id="services-title" />
        </Reveal>
        <ul className="services__list">
          {SERVICES.map((service, index) => (
            <li key={service.title}>
              <Reveal delayMs={index * 70}>
                <div className="services__item">
                  <span className="services__index" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="services__name">{service.title}</h3>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
