import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { SERVICES } from '@/content/site'
import './Services.css'

export function Services() {
  return (
    <section className="services" id="services" aria-labelledby="services-title">
      <Container>
        <SectionHeading title="ИИ, процессы и продукт" id="services-title" />
        <ul className="services__list">
          {SERVICES.map((service) => (
            <li key={service.title} className="services__item">
              <h3 className="services__name">{service.title}</h3>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
