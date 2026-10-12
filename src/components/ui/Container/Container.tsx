import type { ReactNode } from 'react'
import './Container.css'

export type ContainerProps = {
  children: ReactNode
  className?: string
  as?: 'div' | 'section' | 'header' | 'footer' | 'main'
}

export function Container({ children, className = '', as: Tag = 'div' }: ContainerProps) {
  const classes = ['container', className].filter(Boolean).join(' ')
  return <Tag className={classes}>{children}</Tag>
}
