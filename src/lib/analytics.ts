// Configuration pour le suivi analytique
export const analyticsConfig = {
  // Google Analytics
  ga: {
    trackingId: 'G-XXXXXXXXXX', // À remplacer par votre ID
    anonymizeIp: true,
    respectDNT: true,
  },
  
  // Événements personnalisés
  customEvents: {
    pageView: 'page_view',
    search: 'search',
    click: 'click',
    scroll: 'scroll_depth',
    engagement: 'user_engagement',
  },
  
  // Dimensions personnalisées
  customDimensions: {
    userType: 'dimension1',
    section: 'dimension2',
    language: 'dimension3',
  },
}

// Configuration pour le suivi des erreurs
export const errorTracking = {
  enabled: true,
  sampleRate: 1.0,
  ignoreErrors: [
    'ResizeObserver loop limit exceeded',
    'Network request failed',
  ],
  blacklistUrls: [
    /extensions\//i,
    /^chrome:\/\//i,
  ],
}

// Configuration pour le suivi des performances
export const performanceTracking = {
  enabled: true,
  metrics: [
    'TTFB',
    'FCP',
    'LCP',
    'FID',
    'CLS',
  ],
  sampling: 0.1, // 10% des utilisateurs
}

// Configuration pour le suivi du comportement utilisateur
export const userBehaviorTracking = {
  scrollDepth: {
    enabled: true,
    threshold: [25, 50, 75, 90],
  },
  clickTracking: {
    enabled: true,
    elements: [
      'button',
      'a',
      '[data-track]',
    ],
  },
  formTracking: {
    enabled: true,
    excludeFields: [
      'password',
      'credit-card',
    ],
  },
}

// Configuration pour le respect de la vie privée
export const privacyConfig = {
  cookieConsent: {
    required: true,
    duration: 365, // jours
    categories: [
      'necessary',
      'analytics',
      'marketing',
    ],
  },
  dataRetention: {
    analyticsData: 26, // mois
    errorLogs: 90, // jours
    userSessions: 30, // jours
  },
  gdpr: {
    enabled: true,
    defaultRegion: 'FR',
    requiredConsent: true,
  },
}
