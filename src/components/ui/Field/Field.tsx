import type { InputHTMLAttributes } from 'react'
import './Field.css'

export type FieldProps = {
  label: string
  id: string
  className?: string
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'id' | 'className'>

export function Field({ label, id, className = '', ...rest }: FieldProps) {
  const classes = ['field', className].filter(Boolean).join(' ')

  return (
    <label className={classes} htmlFor={id}>
      <span className="field__label">{label}</span>
      <input className="field__control" id={id} {...rest} />
    </label>
  )
}
