import { siteConfig } from '@/app/config'

// Génère le schéma pour une page d'éducation
export function generateEducationPageSchema(page: {
  title: string
  description: string
  learningResourceType?: string
  educationalLevel?: string
  keywords?: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalPage',
    name: page.title,
    description: page.description,
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      sameAs: [siteConfig.links.twitter, siteConfig.links.instagram],
    },
    learningResourceType: page.learningResourceType || 'Article',
    educationalLevel: page.educationalLevel || 'Université',
    keywords: page.keywords || siteConfig.keywords,
    inLanguage: 'fr',
    isAccessibleForFree: true,
  }
}

// Génère le schéma pour un événement étudiant
export function generateStudentEventSchema(event: {
  name: string
  description: string
  startDate: string
  endDate: string
  location: string
  image?: string
  organizer?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.name,
    description: event.description,
    startDate: event.startDate,
    endDate: event.endDate,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
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
      name: event.organizer || siteConfig.name,
      url: siteConfig.url,
    },
    audience: {
      '@type': 'EducationalAudience',
      educationalRole: 'student',
    },
  }
}

// Génère le schéma pour une section ou un département
export function generateDepartmentSchema(department: {
  name: string
  description: string
  parentOrganization?: string
  subOrganizations?: string[]
  members?: number
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Department',
    name: department.name,
    description: department.description,
    parentOrganization: {
      '@type': 'Organization',
      name: department.parentOrganization || siteConfig.name,
      url: siteConfig.url,
    },
    numberOfEmployees: department.members,
    subOrganization: department.subOrganizations?.map(org => ({
      '@type': 'Organization',
      name: org,
    })),
  }
}

// Génère le schéma pour un article de blog ou une actualité
export function generateNewsArticleSchema(article: {
  title: string
  description: string
  datePublished: string
  dateModified: string
  author: string
  image?: string
  category?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
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
    articleSection: article.category,
    inLanguage: 'fr',
  }
}
