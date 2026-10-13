import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { AUDIENCES } from '@/content/site'
import './Audience.css'

export function Audience() {
  const [featured, ...rest] = AUDIENCES

  return (
    <section className="audience" aria-labelledby="audience-title">
      <Container>
        <Reveal>
          <SectionHeading
            title="С кем работаю"
            lead="Тем, кому нужно больше часов и ясный результат"
            id="audience-title"
          />
        </Reveal>
        <div className="audience__layout">
          {featured ? (
            <Reveal className="audience__featured">
              <article className="audience__panel audience__panel--featured">
                <h3 className="audience__name">{featured.title}</h3>
                <p className="audience__text">{featured.text}</p>
              </article>
            </Reveal>
          ) : null}
          <ul className="audience__stack">
            {rest.map((item, index) => (
              <li key={item.title}>
                <Reveal delayMs={80 * (index + 1)}>
                  <article className="audience__panel">
                    <h3 className="audience__name">{item.title}</h3>
                    <p className="audience__text">{item.text}</p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
