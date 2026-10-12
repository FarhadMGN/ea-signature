import { Button } from '@/components/ui/Button'
import { CachedImage } from '@/components/ui/CachedImage'
import { Container } from '@/components/ui/Container'
import './Hero.css'

export type HeroProps = {
  imageSrc?: string
}

export function Hero({ imageSrc = '/images/hero-start.png' }: HeroProps) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__stage">
        <div className="hero__media" aria-hidden="true">
          <CachedImage
            className="hero__image"
            src={imageSrc}
            alt=""
            loading="eager"
            fetchPriority="high"
            width={1376}
            height={768}
          />
          <div className="hero__scrim" />
        </div>

        <Container className="hero__content">
          <h1 className="hero__title" id="hero-title">
            Разработка любой сложности
          </h1>
          <p className="hero__lead">
            Веб-приложения, AI-боты и ассистенты: от вашей идеи сразу к результату
          </p>
          <div className="hero__actions">
            <Button href="#contact" variant="primary">
              Связаться
            </Button>
            <Button href="#work" variant="ghost">
              Кейсы
            </Button>
          </div>
        </Container>
      </div>
    </section>
  )
}
