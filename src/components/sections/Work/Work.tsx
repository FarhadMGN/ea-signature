import { Container } from '@/components/ui/Container'
import { ImageCarousel } from '@/components/ui/ImageCarousel'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { PROJECTS } from '@/content/site'
import './Work.css'

export function Work() {
  return (
    <section className="work" id="work" aria-labelledby="work-title">
      <Container>
        <Reveal>
          <SectionHeading title="Что уже работает" id="work-title" />
        </Reveal>
        <ul className="work__grid">
          {PROJECTS.map((project, index) => (
            <li key={project.id} className="work__card">
              <Reveal delayMs={index * 90}>
                <div className="work__media work__media--carousel">
                  <ImageCarousel slides={project.images} intervalMs={5000} />
                </div>
                <div className="work__meta">
                  <p className="work__type">{project.type}</p>
                  <h3 className="work__name">{project.title}</h3>
                  <p className="work__result">{project.result}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
