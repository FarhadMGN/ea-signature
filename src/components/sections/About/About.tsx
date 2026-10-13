import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import './About.css'

export function About() {
  return (
    <section className="about" aria-labelledby="about-title">
      <Container>
        <Reveal>
          <div className="about__grid">
            <h2 className="about__title" id="about-title">
              Спокойно внедряю ИИ туда, где он реально экономит время
            </h2>
            <div className="about__body">
              <p>
                Помогаю компаниям упрощать внутренние процессы: меньше рутины, больше
                часов у команды, понятный эффект на выходе.
              </p>
              <p>
                Разработка как сопутствующий инструмент: агенты, боты, веб-продукты.
                Работаю на русском и английском. Предпочитаю ясный бриф и спокойный
                процесс.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
