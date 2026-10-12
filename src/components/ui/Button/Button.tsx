import type { ButtonHTMLAttributes, ReactNode } from 'react'
import './Button.css'

export type ButtonVariant = 'primary' | 'ghost'

export type ButtonProps = {
  children: ReactNode
  variant?: ButtonVariant
  href?: string
  className?: string
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'className'>

export function Button({
  children,
  variant = 'primary',
  href,
  className = '',
  type = 'button',
  ...rest
}: ButtonProps) {
  const classes = ['button', `button--${variant}`, className].filter(Boolean).join(' ')

  if (href) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} type={type} {...rest}>
      {children}
    </button>
  )
}
