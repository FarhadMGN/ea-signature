# AGENTS.md — Dev Evtushenko

Инструкции для AI-агентов, работающих с этим репозиторием.

## Проект

Сайт-визитка **Dev Evtushenko**: лендинги и веб-приложения под заказ.  
Стек: **Vite + React 19 + TypeScript**. Стили: **BEM + CSS** (без Tailwind).  
Брендбук: **Signature Mono (Variant C)** — `#0A0A0B` / `#1A1A1C` / `#8A8A8E` / `#D4D0C8` / `#EDEDED`, шрифты **Satoshi + JetBrains Mono**. Кнопки — pill (`--radius-pill`).

Тон копирайта: спокойный деловой премиум. Языки контента: RU (основной), EN по запросу.

## Команды

```bash
npm run dev
npm run build
npm run test
npm run lint          # oxlint
npm run format        # prettier
npm run check         # typecheck + lint + format:check + test
```

Перед сдачей изменений прогоняй `npm run check`.

## Архитектура

- `src/components/ui` — переиспользуемые UI-компоненты (Button, Field, Icon, CachedImage, …)
- `src/components/sections` — секции лендинга (Hero, Work, Contact, …)
- `src/components/layout` — Header, Footer, Seo
- `src/content/site.ts` — тексты, навигация, услуги, кейсы
- `src/icons` — SVG-файлы; в коде только через объект `ICONS`
- `src/hooks` — хуки
- `src/utils` — утилиты (`imageCache`)
- `public/images` — статика (hero preview и обложки кейсов)

Новые блоки — **отдельные компоненты** со своими `*.css` (BEM: `block`, `block__element`, `block--modifier`). Не сваливать разметку в `App.tsx`.

## Обязательные правила

1. **TypeScript** — строгий режим, без `any` без причины.
2. **BEM** — классы в CSS, не CSS-in-JS / не Tailwind.
3. **Иконки** — файл в `src/icons/`, экспорт в `ICONS`, использование через `<Icon name="…" />` или `ICONS.*`.
4. **Картинки** — через `CachedImage` (Cache API), пути в `public/images`.
5. **SEO** — не ломать `Seo`, `robots.txt`, `sitemap.xml`, семантику секций и `id` якорей.
6. **Тесты** — для новой логики/форм добавляй Vitest + Testing Library.
7. **Контент** — правки текстов в `src/content/site.ts`, не хардкодить по всему дереву без нужды.

## Hero

- Статичный preview: `public/images/hero-start.png`
- Подключение: `<Hero imageSrc="/images/hero-start.png" />` в `HomePage`
- Видео / scroll-scrub не используются

## Чего не делать

- Не коммитить секреты, `.env` с ключами
- Не раздувать PR несвязанным рефакторингом
- Не менять бренд-токены в `src/styles/tokens.css` без явного запроса
- Не подключать тяжёлые UI-киты «на всякий случай»

## Деплой / кэш

`public/_headers` — long-cache для `/assets/*`, средний для images. Сохраняй при правках статики.


## Git workflow

**Никогда не коммитить напрямую в `main`.** Любое изменение — через ветку + PR.

### Старт работы (каждый раз, когда начинается задача)

Если текущая ветка `main` и рабочее дерево чистое:
```bash
git checkout main && git pull
git checkout -b <type>/<kebab-case-description>
```

### Имена веток

| Тип | Когда | Пример |
|---|---|---|
| `feat/` | Новая фича для пользователя | `feat/model-selector` |
| `fix/` | Исправление бага | `fix/sidepanel-scroll` |
| `refactor/` | Внутренние изменения без смены поведения | `refactor/split-components` |
| `docs/` | Только документация | `docs/env-vars-reference` |
| `test/` | Только тесты | `test/report-form` |
| `chore/` | Зависимости, конфиги, CI | `chore/bump-mui` |
| `perf/` | Оптимизация производительности | `perf/reduce-bundle-size` |

Имена короткие, в нижнем регистре через дефис.

### Commit messages — Conventional Commits

Формат: `<type>(<scope>): <imperative description>`

- `scope` опционален: модуль/область (`popup`, `sidepanel`, `ui`, `api`)
- Описание — в императиве, без точки в конце, до ~70 символов
- Тело (через пустую строку) — объясняет **почему**, не **что**

Примеры:
```
feat(sidepanel): add copy-to-clipboard button
fix(popup): prevent double submit on fast click
refactor(ui): extract GenerateButton component
chore: bump vite to 6.2
```

Типы: `feat`, `fix`, `refactor`, `docs`, `test`, `chore`, `perf`.

### Перед открытием PR

1. Билд и тайп-чек: `npm run build` — должен завершиться без ошибок
2. Линт: `npm run lint` — должен быть чистым
3. Сверить `README.md` с текущим состоянием кода
4. `git push -u origin <branch>`

### Открытие PR через `gh`

```bash
gh pr create --title "<type>(<scope>): краткое описание" --body "$(cat <<'EOF'
## Summary
- <что и зачем>

## Test plan
- [ ] npm run build passes
- [ ] npm run lint passes
- [ ] <manual checks в браузере, если нужны>
EOF
)"
```

PR-титл и тело должны соответствовать Conventional Commits, т.к. они станут текстом
squash-коммита в `main` после мерджа (так настроен репо).

### Мердж

Только **squash merge**. Merge commits и rebase merges запрещены (настроено в репо):
```bash
gh pr merge --squash --delete-branch
```

Локально — вернуться на main и удалить ветку:
```bash
git checkout main && git pull
git branch -d <branch>
```

### Итог

`git log main --oneline` должен быть прямой вертикалью из Conventional Commits-титлов.
Никаких merge commits, никаких WIP'ов, никаких веток в истории main.

## Версионирование и CHANGELOG

Проект использует **Semantic Versioning** (SemVer): `MAJOR.MINOR.PATCH`.

Текущая версия хранится в `package.json` (поле `version`) и дублируется в файле `VERSION`.

| Тип изменения | Bump |
|---|---|
| `fix` — исправление бага | PATCH |
| `feat` — новая функция | MINOR |
| Ломающее изменение API/поведения | MAJOR |

### Правила для каждого PR

**Любой PR, кроме `docs/` и `chore/`, должен:**

1. Обновить `version` в `package.json` и файл `VERSION`.
2. Добавить запись в раздел `## [Unreleased]` файла `CHANGELOG.md`.
3. Обновить номер версии в бейдже в `README.md` (строка `img.shields.io/badge/version-...`).

Формат записи в changelog:

```
### Added / Fixed / Changed / Removed
- Краткое описание изменения (максимум 1–2 строки)
```

### Выпуск нового релиза

1. В `CHANGELOG.md` переименовать `## [Unreleased]` → `## [x.y.z] – YYYY-MM-DD`
   и добавить новый пустой `## [Unreleased]` выше.
2. Обновить `version` в `package.json` и `VERSION`.
3. Обновить бейдж в `README.md`.
4. `npm run build` + `npm run lint`, открыть PR.
5. После мерджа: `git tag vX.Y.Z && git push origin vX.Y.Z`
6. Задеплоить `dist/` через Chrome Web Store (вручную).

# Karpathy Guidelines

Behavioral guidelines to reduce common LLM coding mistakes, derived from [Andrej Karpathy's observations](https://x.com/karpathy/status/2015883857489522876) on LLM coding pitfalls.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.
