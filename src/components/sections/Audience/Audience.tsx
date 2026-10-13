import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { AUDIENCES } from '@/content/site'
import './Audience.css'

export function Audience() {
  return (
    <section className="audience" aria-labelledby="audience-title">
      <Container>
        <SectionHeading
          title="С кем работаю"
          lead="Тем, кому нужно больше часов и ясный результат"
          id="audience-title"
        />
        <ul className="audience__list">
          {AUDIENCES.map((item) => (
            <li key={item.title} className="audience__item">
              <h3 className="audience__name">{item.title}</h3>
              <p className="audience__text">{item.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
