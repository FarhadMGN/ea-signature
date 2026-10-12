import { useEffect, useState } from 'react'
import { getCachedImageUrl } from '@/utils/imageCache'
import './CachedImage.css'

export type CachedImageProps = {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
  loading?: 'lazy' | 'eager'
  fetchPriority?: 'high' | 'low' | 'auto'
}

export function CachedImage({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
  fetchPriority = 'auto',
}: CachedImageProps) {
  const [resolvedSrc, setResolvedSrc] = useState(src)

  useEffect(() => {
    let cancelled = false

    void getCachedImageUrl(src).then((url) => {
      if (!cancelled) setResolvedSrc(url)
    })

    return () => {
      cancelled = true
    }
  }, [src])

  const classes = ['cached-image', className].filter(Boolean).join(' ')

  return (
    <img
      className={classes}
      src={resolvedSrc}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      fetchPriority={fetchPriority}
      decoding="async"
    />
  )
}
