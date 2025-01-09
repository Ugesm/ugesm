import { MetadataRoute } from 'next'
import { siteConfig } from './config'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/toutes-nos-sections',
    '/developers',
    // Ajoutez ici d'autres routes statiques
  ]

  const currentDate = new Date().toISOString()

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: currentDate,
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.8,
  })) as MetadataRoute.Sitemap
}
