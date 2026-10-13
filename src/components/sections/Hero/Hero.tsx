import { Button } from '@/components/ui/Button'
import { CachedImage } from '@/components/ui/CachedImage'
import { Container } from '@/components/ui/Container'
import { HERO, SITE } from '@/content/site'
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
            width={1672}
            height={941}
          />
          <div className="hero__scrim" />
        </div>

        <Container className="hero__content">
          <p className="hero__brand">{SITE.name}</p>
          <h1 className="hero__title" id="hero-title">
            {HERO.title}
          </h1>
          <p className="hero__lead">{HERO.lead}</p>
          <div className="hero__actions">
            <Button href="#contact" variant="primary">
              {HERO.primaryCta}
            </Button>
            <Button href="#work" variant="ghost">
              {HERO.secondaryCta}
            </Button>
          </div>
        </Container>
      </div>
    </section>
  )
}
