// Configurations pour l'optimisation des images
export const imageOptimization = {
  domains: ['ugesm.org'],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  formats: ['image/webp'],
}

// Configuration pour le chargement différé des images
export const lazyLoadConfig = {
  loading: 'lazy',
  threshold: 0.1,
  rootMargin: '50px 0px',
}

// Configuration pour le préchargement des ressources critiques
export const preloadResources = [
  { rel: 'preload', href: '/fonts/custom-font.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
  { rel: 'preload', href: '/logo.png', as: 'image' },
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
]

// Configuration pour la compression des ressources
export const compressionConfig = {
  enabled: true,
  level: 6,
  threshold: '10kb',
}

// Configuration pour le cache du navigateur
export const cacheConfig = {
  images: {
    maxAge: 60 * 60 * 24 * 30, // 30 jours
    immutable: true,
  },
  fonts: {
    maxAge: 60 * 60 * 24 * 365, // 1 an
    immutable: true,
  },
  static: {
    maxAge: 60 * 60 * 24 * 7, // 1 semaine
  },
}

// Configuration pour le service worker
export const serviceWorkerConfig = {
  scope: '/',
  strategies: {
    images: 'cache-first',
    fonts: 'cache-first',
    static: 'network-first',
    api: 'network-first',
  },
  cacheName: 'ugesm-cache-v1',
}

// Configuration pour le suivi des performances
export const performanceMetrics = {
  track: [
    'FCP', // First Contentful Paint
    'LCP', // Largest Contentful Paint
    'FID', // First Input Delay
    'CLS', // Cumulative Layout Shift
    'TTFB', // Time to First Byte
  ],
  reportTo: '/api/performance',
}
