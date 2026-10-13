import { useEffect, useRef, useState } from 'react'

type UseInViewOptions = {
  once?: boolean
  rootMargin?: string
  threshold?: number
}

export function useInView<T extends HTMLElement>({
  once = true,
  rootMargin = '0px 0px -8% 0px',
  threshold = 0.12,
}: UseInViewOptions = {}) {
  const ref = useRef<T | null>(null)
  const [visible, setVisible] = useState(
    () => typeof IntersectionObserver === 'undefined',
  )

  useEffect(() => {
    if (visible) return
    const node = ref.current
    if (!node || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return
        setVisible(true)
        if (once) observer.disconnect()
      },
      { rootMargin, threshold },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [once, rootMargin, threshold, visible])

  return { ref, visible }
}
