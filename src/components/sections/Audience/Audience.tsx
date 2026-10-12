import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { AUDIENCES } from '@/content/site'
import './Audience.css'

export function Audience() {
  return (
    <section className="audience" aria-labelledby="audience-title">
      <Container>
        <SectionHeading
          eyebrow="С кем работаю"
          title="Тем, кому нужно больше часов и ясный результат"
          id="audience-title"
        />
        <ul className="audience__grid">
          {AUDIENCES.map((item) => (
            <li key={item.title} className="audience__card">
              <h3 className="audience__card-title">{item.title}</h3>
              <p className="audience__card-text">{item.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
