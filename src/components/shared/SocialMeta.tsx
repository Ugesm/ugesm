import Head from 'next/head'
import { siteConfig } from '@/app/config'

interface SocialMetaProps {
  title: string
  description: string
  image?: string
  url?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  authors?: string[]
  section?: string
}

export default function SocialMeta({
  title,
  description,
  image = siteConfig.ogImage,
  url = siteConfig.url,
  type = 'website',
  publishedTime,
  modifiedTime,
  authors,
  section,
}: SocialMetaProps) {
  const fullTitle = `${title} | ${siteConfig.name}`
  const fullImage = image.startsWith('http') ? image : `${siteConfig.url}${image}`

  return (
    <Head>
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteConfig.name} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ugesmc" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* Article specific */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && section && (
        <meta property="article:section" content={section} />
      )}
      {type === 'article' && authors?.map((author) => (
        <meta key={author} property="article:author" content={author} />
      ))}

      {/* Additional SEO */}
      <link rel="canonical" href={url} />
    </Head>
  )
}
