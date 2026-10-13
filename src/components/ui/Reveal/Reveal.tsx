import type { CSSProperties, ReactNode } from 'react'
import { useInView } from '@/hooks/useInView'
import './Reveal.css'

export type RevealProps = {
  children: ReactNode
  className?: string
  delayMs?: number
}

export function Reveal({ children, className = '', delayMs = 0 }: RevealProps) {
  const { ref, visible } = useInView<HTMLDivElement>()
  const classes = ['reveal', visible ? 'reveal--visible' : '', className]
    .filter(Boolean)
    .join(' ')

  const style: CSSProperties | undefined = delayMs
    ? { transitionDelay: `${delayMs}ms` }
    : undefined

  return (
    <div ref={ref} className={classes} style={style}>
      {children}
    </div>
  )
}
