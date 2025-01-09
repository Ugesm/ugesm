import { Metadata } from 'next'

interface SEOMetadataProps {
  title: string
  description: string
  keywords: string[]
  ogImage?: string
  canonicalUrl?: string
}

export function generateMetadata({
  title,
  description,
  keywords,
  ogImage = '/images/og-image.jpg',
  canonicalUrl,
}: SEOMetadataProps): Metadata {
  return {
    title: `${title} | UGESM - Union Générale des Étudiants Sénégalais au Maroc`,
    description,
    keywords: keywords.join(', '),
    openGraph: {
      title: `${title} | UGESM`,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'fr_FR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | UGESM`,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  }
}
