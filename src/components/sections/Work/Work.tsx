import { Container } from '@/components/ui/Container'
import { ImageCarousel } from '@/components/ui/ImageCarousel'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { PROJECTS } from '@/content/site'
import './Work.css'

export function Work() {
  return (
    <section className="work" id="work" aria-labelledby="work-title">
      <Container>
        <SectionHeading
          eyebrow="Избранные проекты"
          title="Что уже работает"
          id="work-title"
        />
        <ul className="work__grid">
          {PROJECTS.map((project) => (
            <li key={project.id} className="work__card">
              <div className="work__media work__media--carousel">
                <ImageCarousel slides={project.images} intervalMs={5000} />
              </div>
              <p className="work__type">{project.type}</p>
              <h3 className="work__name">{project.title}</h3>
              <p className="work__result">{project.result}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
