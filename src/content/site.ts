export const SITE = {
  name: 'Dev Evtushenko',
  title: 'Dev Evtushenko: внедрение ИИ и упрощение процессов компании',
  description:
    'ИИ-трансформация процессов, агенты и чат-боты, веб-приложения. Разработка как инструмент измеримого результата. RU / EN.',
  url: 'https://devevtushenko.ru',
  locale: 'ru_RU',
  lang: 'ru',
  email: 'hello@devevtushenko.ru',
  telegram: 'https://t.me/devevtushenko',
  ogImage: '/images/hero-start.png',
} as const

export const NAV_LINKS = [
  { href: '#work', label: 'Кейсы' },
  { href: '#services', label: 'Услуги' },
  { href: '#process', label: 'Процесс' },
  { href: '#contact', label: 'Контакт' },
] as const

export const HERO = {
  title: 'ИИ для процессов компании',
  lead: 'Агенты, боты и веб, чтобы команда тратила меньше часов на рутину',
  primaryCta: 'Связаться',
  secondaryCta: 'Кейсы',
} as const

export const TRUST_ITEMS = [
  'ИИ для процессов',
  'Ответ за 24 часа',
  'RU / EN',
  'Измеримый результат',
] as const

export const AUDIENCES = [
  {
    title: 'CEO и руководители',
    text: 'Мало часов в расписании, нужно упростить работу команды',
  },
  {
    title: 'Стартапы',
    text: 'Выстроить процессы с нуля, без раздутого штата',
  },
  {
    title: 'Тем, кому нужен результат',
    text: 'Профессиональная разработка и понятный эффект, без шума',
  },
] as const

export const SERVICES = [
  { title: 'ИИ-трансформация внутренних процессов' },
  { title: 'ИИ-агенты и чат-боты' },
  { title: 'Веб-приложения и сайты' },
] as const

export const PROJECTS = [
  {
    id: 'dinner-agent',
    title: 'Персональный ИИ-агент',
    type: 'ИИ-агент',
    result: 'Подскажет, куда сходить на ужин, и поможет заказать продукты',
    images: [
      {
        src: '/images/cases/dinner-agent-chat.jpg',
        alt: 'Telegram-бот собирает корзину во ВкусВилл по запросу',
      },
      {
        src: '/images/cases/dinner-agent-basket.jpg',
        alt: 'Готовая корзина товаров во ВкусВилл',
      },
    ],
  },
  {
    id: 'media-summary',
    title: 'Пересказ аудио и видео',
    type: 'ИИ-контент',
    result: 'Краткое содержание 20-минутного подкаста и часовых роликов на YouTube',
    images: [
      {
        src: '/images/cases/marsumer-app-archive.jpg',
        alt: 'Marsumer App: архив обработанных аудио и видео',
      },
      {
        src: '/images/cases/marsumer-chat-link.jpg',
        alt: 'Marsumer: ссылка на YouTube и кнопка саммари в Telegram',
      },
      {
        src: '/images/cases/marsumer-chat-summary.jpg',
        alt: 'Marsumer: текстовое саммари видео в чате',
      },
    ],
  },
] as const

export const PROCESS_STEPS = [
  { num: '01', title: 'Бриф', text: 'Цель, узкие места, желаемый результат' },
  { num: '02', title: 'План', text: 'Сценарий внедрения и оценка' },
  { num: '03', title: 'Реализация', text: 'Агенты, процессы, продукт' },
  { num: '04', title: 'Запуск', text: 'Внедрение и поддержка на старте' },
] as const

export const FAQ_ITEMS = [
  {
    question: 'С чего начать, если процессов много?',
    answer:
      'С одной узкой задачи с понятным эффектом: экономия часов, скорость ответа, меньше ручной работы. Дальше масштабируем.',
  },
  {
    question: 'Нужна ли своя команда разработки?',
    answer:
      'Нет. Разработку беру на себя как инструмент внедрения. Вы формулируете задачу и принимаете результат.',
  },
  {
    question: 'Сколько по времени?',
    answer:
      'Зависит от объёма. Пилот обычно укладывается в несколько недель; оценку даю после короткого брифа.',
  },
  {
    question: 'Как оплата?',
    answer: 'Этапами. Обычно предоплата и закрытие по готовности этапа.',
  },
  {
    question: 'Работаешь с EN-клиентами?',
    answer: 'Да. Бриф, коммуникация и продукт на английском по запросу.',
  },
] as const

export const BUDGET_OPTIONS = [
  'до 50 000 ₽',
  '50–150 000 ₽',
  '150 000 ₽+',
  'обсудим',
] as const

export const PROJECT_TYPES = [
  'ИИ-трансформация процессов',
  'ИИ-агент / чат-бот',
  'Веб-приложение / сайт',
  'Не уверен',
] as const
