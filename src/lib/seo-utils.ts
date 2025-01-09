import { siteConfig } from '@/app/config'

// Génère les balises link pour le préchargement DNS
export function generateDNSPrefetch() {
  return [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    'https://cdn.jsdelivr.net',
  ]
}

// Génère les balises meta pour les réseaux sociaux
export function generateSocialTags(page: {
  title: string
  description: string
  image?: string
  url?: string
}) {
  return {
    title: `${page.title} | ${siteConfig.name}`,
    description: page.description,
    image: page.image || siteConfig.ogImage,
    url: page.url || siteConfig.url,
  }
}

// Génère les données structurées pour les articles
export function generateArticleSchema(article: {
  title: string
  description: string
  datePublished: string
  dateModified: string
  author: string
  image?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image || siteConfig.ogImage,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: siteConfig.ogImage,
      },
    },
  }
}

// Génère les balises meta alternatives pour les langues
export function generateAlternateLanguages() {
  return [
    { lang: 'fr', url: siteConfig.url },
    { lang: 'en', url: `${siteConfig.url}/en` },
    { lang: 'ar', url: `${siteConfig.url}/ar` },
  ]
}

// Génère les balises meta pour la vérification de propriété
export function generateSiteVerification() {
  return {
    google: 'your-google-verification-code',
    bing: 'your-bing-verification-code',
    yandex: 'your-yandex-verification-code',
  }
}

// Génère le schema pour les événements
export function generateEventSchema(event: {
  name: string
  description: string
  startDate: string
  endDate: string
  location: string
  image?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.name,
    description: event.description,
    startDate: event.startDate,
    endDate: event.endDate,
    location: {
      '@type': 'Place',
      name: event.location,
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'MA',
      },
    },
    image: event.image || siteConfig.ogImage,
    organizer: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
  }
}

// Génère les meta tags pour l'indexation mobile
export function generateMobileMetaTags() {
  return {
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    'format-detection': 'telephone=no',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
  }
}

// Génère les balises meta pour la sécurité
export function generateSecurityHeaders() {
  return {
    'Content-Security-Policy': "default-src 'self'",
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
  }
}
