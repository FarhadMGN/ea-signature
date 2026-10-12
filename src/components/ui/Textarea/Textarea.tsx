import type { TextareaHTMLAttributes } from 'react'
import './Textarea.css'

export type TextareaProps = {
  label: string
  id: string
  className?: string
} & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'id' | 'className'>

export function Textarea({ label, id, className = '', ...rest }: TextareaProps) {
  const classes = ['textarea', className].filter(Boolean).join(' ')

  return (
    <label className={classes} htmlFor={id}>
      <span className="textarea__label">{label}</span>
      <textarea className="textarea__control" id={id} rows={4} {...rest} />
    </label>
  )
}
