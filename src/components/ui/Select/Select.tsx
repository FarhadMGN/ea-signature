import type { SelectHTMLAttributes } from 'react'
import './Select.css'

export type SelectOption = {
  value: string
  label: string
}

export type SelectProps = {
  label: string
  id: string
  options: readonly SelectOption[] | readonly string[]
  className?: string
} & Omit<SelectHTMLAttributes<HTMLSelectElement>, 'id' | 'className'>

function normalizeOptions(options: SelectProps['options']): SelectOption[] {
  return options.map((option) =>
    typeof option === 'string' ? { value: option, label: option } : option,
  )
}

export function Select({ label, id, options, className = '', ...rest }: SelectProps) {
  const classes = ['select', className].filter(Boolean).join(' ')
  const normalized = normalizeOptions(options)

  return (
    <label className={classes} htmlFor={id}>
      <span className="select__label">{label}</span>
      <select className="select__control" id={id} {...rest}>
        {normalized.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  )
}
