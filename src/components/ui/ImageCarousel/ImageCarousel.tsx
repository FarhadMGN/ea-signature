import { useCallback, useEffect, useRef, useState } from 'react'
import { CachedImage } from '@/components/ui/CachedImage'
import './ImageCarousel.css'

export type ImageCarouselSlide = {
  src: string
  alt: string
}

export type ImageCarouselProps = {
  slides: readonly ImageCarouselSlide[]
  intervalMs?: number
  className?: string
}

export function ImageCarousel({
  slides,
  intervalMs = 5000,
  className = '',
}: ImageCarouselProps) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchStartX = useRef<number | null>(null)

  const count = slides.length
  const goTo = useCallback(
    (next: number) => {
      if (count === 0) return
      setIndex(((next % count) + count) % count)
    },
    [count],
  )

  const goNext = useCallback(() => goTo(index + 1), [goTo, index])
  const goPrev = useCallback(() => goTo(index - 1), [goTo, index])

  useEffect(() => {
    if (count <= 1 || paused) return

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % count)
    }, intervalMs)

    return () => window.clearInterval(id)
  }, [count, intervalMs, paused])

  if (count === 0) return null

  const classes = ['image-carousel', className].filter(Boolean).join(' ')

  return (
    <div
      className={classes}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPaused(false)
        }
      }}
      onTouchStart={(event) => {
        touchStartX.current = event.changedTouches[0]?.clientX ?? null
        setPaused(true)
      }}
      onTouchEnd={(event) => {
        const start = touchStartX.current
        const end = event.changedTouches[0]?.clientX
        touchStartX.current = null
        setPaused(false)
        if (start == null || end == null) return
        const delta = end - start
        if (Math.abs(delta) < 40) return
        if (delta < 0) goNext()
        else goPrev()
      }}
    >
      <div className="image-carousel__stage">
        <div className="image-carousel__viewport">
          {slides.map((slide, slideIndex) => (
            <div
              key={slide.src}
              className={[
                'image-carousel__slide',
                slideIndex === index ? 'image-carousel__slide--active' : '',
              ]
                .filter(Boolean)
                .join(' ')}
              aria-hidden={slideIndex !== index}
            >
              <CachedImage
                className="image-carousel__image"
                src={slide.src}
                alt={slide.alt}
                loading={slideIndex === 0 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>

        {count > 1 ? (
          <div className="image-carousel__controls">
            <button
              type="button"
              className="image-carousel__nav"
              onClick={goPrev}
              aria-label="Предыдущее фото"
            >
              <svg
                className="image-carousel__chevron"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path
                  d="M10.5 3.5 5.5 8l5 4.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              className="image-carousel__nav"
              onClick={goNext}
              aria-label="Следующее фото"
            >
              <svg
                className="image-carousel__chevron"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path
                  d="M5.5 3.5 10.5 8l-5 4.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        ) : null}
      </div>

      {count > 1 ? (
        <div className="image-carousel__dots" role="tablist" aria-label="Слайды">
          {slides.map((slide, slideIndex) => (
            <button
              key={slide.src}
              type="button"
              role="tab"
              aria-selected={slideIndex === index}
              aria-label={`Фото ${slideIndex + 1}`}
              className={[
                'image-carousel__dot',
                slideIndex === index ? 'image-carousel__dot--active' : '',
              ]
                .filter(Boolean)
                .join(' ')}
              onClick={() => goTo(slideIndex)}
            />
          ))}
        </div>
      ) : null}
    </div>
  )
}
