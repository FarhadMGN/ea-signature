# Dev Evtushenko

Сайт-визитка: лендинги и веб-приложения. Стек — Vite + React + TypeScript, стили BEM, брендбук Signature Mono.

## Scripts

```bash
npm run dev          # локальная разработка
npm run build        # production-сборка
npm run preview      # превью сборки
npm run lint         # oxlint
npm run format       # prettier
npm run test         # vitest
npm run test:coverage
npm run check        # typecheck + lint + format + test
```

## Структура

- `src/components/ui` — переиспользуемые UI-компоненты
- `src/components/sections` — секции лендинга
- `src/components/layout` — Header / Footer / SEO
- `src/icons` — SVG-файлы + объект `ICONS` (переменные путей)
- `src/content/site.ts` — тексты и контент
- `public/images` — картинки (кэш через `CachedImage` + Cache API), hero: `hero-start.png`
- Шрифты: **Satoshi + JetBrains Mono** (Signature Mono / Variant C)

## SEO

- meta / Open Graph / Twitter через `Seo`
- JSON-LD `ProfessionalService`
- `robots.txt`, `sitemap.xml`
- long-cache заголовки для ассетов (`public/_headers` для Netlify/Cloudflare)
