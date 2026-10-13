import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { TRUST_ITEMS } from '@/content/site'
import './TrustStrip.css'

export function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="Ключевые факты">
      <Container>
        <Reveal>
          <ul className="trust-strip__list">
            {TRUST_ITEMS.map((item) => (
              <li key={item} className="trust-strip__item">
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  )
}
