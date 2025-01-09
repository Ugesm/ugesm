export default function LocalBusiness() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'UGESM - Union Générale des Étudiants Sénégalais au Maroc',
    description: 'Organisation étudiante représentant et soutenant les étudiants sénégalais au Maroc',
    url: 'https://ugesm.org',
    areaServed: {
      '@type': 'Country',
      name: 'Maroc'
    },
    audience: {
      '@type': 'Audience',
      audienceType: 'Étudiants sénégalais'
    },
    knowsAbout: [
      'Éducation supérieure au Maroc',
      'Vie étudiante',
      'Intégration culturelle',
      'Support académique',
      'Assistance administrative'
    ],
    sameAs: [
      'https://twitter.com/ugesmc',
      'https://www.instagram.com/ugesmrabat/'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['fr', 'ar']
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  )
}
