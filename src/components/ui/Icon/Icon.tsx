import { ICONS, type IconName } from '@/icons'
import './Icon.css'

export type IconProps = {
  name: IconName
  className?: string
  title?: string
}

export function Icon({ name, className = '', title }: IconProps) {
  const src = ICONS[name]
  const classes = ['icon', className].filter(Boolean).join(' ')

  return (
    <img
      className={classes}
      src={src}
      alt=""
      width={24}
      height={24}
      aria-hidden={title ? undefined : true}
      title={title}
      decoding="async"
    />
  )
}
