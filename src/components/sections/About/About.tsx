import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { SITE } from '@/content/site'
import './About.css'

export function About() {
  return (
    <section className="about" aria-labelledby="about-title">
      <Container>
        <SectionHeading eyebrow="О себе" title={SITE.name} id="about-title" />
        <div className="about__body">
          <p>
            Помогаю компаниям внедрять ИИ и упрощать внутренние процессы: меньше рутины,
            больше часов у команды, понятный эффект на выходе.
          </p>
          <p>
            Разработка — сопутствующий инструмент: агенты, боты, веб-продукты. Работаю на
            русском и английском. Предпочитаю ясный бриф и спокойный процесс.
          </p>
        </div>
      </Container>
    </section>
  )
}
