import arrowRight from './arrow-right.svg?url'
import mail from './mail.svg?url'
import scroll from './scroll.svg?url'
import telegram from './telegram.svg?url'

/** Icon asset URLs — import SVG files and consume via these variables. */
export const ICONS = {
  arrowRight,
  mail,
  scroll,
  telegram,
} as const

export type IconName = keyof typeof ICONS
