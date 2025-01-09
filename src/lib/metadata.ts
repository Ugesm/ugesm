import type { Metadata } from 'next'

export function generatePageMetadata(
  title: string,
  description: string,
  path: string = '/'
): Metadata {
  const fullTitle = `${title} | UGESM`
  const url = `https://ugesm.org${path}`

  return {
    title,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url,
    },
    twitter: {
      title: fullTitle,
      description,
    },
    alternates: {
      canonical: url,
    },
  }
}
