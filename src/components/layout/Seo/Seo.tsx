import { Helmet } from 'react-helmet-async'
import { SITE } from '@/content/site'

export type SeoProps = {
  title?: string
  description?: string
  path?: string
}

export function Seo({
  title = SITE.title,
  description = SITE.description,
  path = '/',
}: SeoProps) {
  const url = `${SITE.url}${path}`
  const image = `${SITE.url}${SITE.ogImage}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    image,
    email: SITE.email,
    areaServed: ['RU', 'Worldwide'],
    availableLanguage: ['Russian', 'English'],
    priceRange: '₽₽',
  }

  return (
    <Helmet>
      <html lang={SITE.lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={SITE.locale} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="theme-color" content="#0a0a0b" />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  )
}
