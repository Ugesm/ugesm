import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Redirections pour le SEO
const redirects = new Map([
  ['/accueil', '/'],
  ['/about-us', '/about'],
  ['/contact-us', '/contact'],
  ['/sections', '/toutes-nos-sections'],
])

// Redirections pour les anciennes URLs
const legacyRedirects = new Map([
  ['/old-page', '/new-page'],
  ['/ancien-site', '/'],
])

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Redirection des URLs sans trailing slash
  if (pathname !== '/' && pathname.endsWith('/')) {
    return NextResponse.redirect(
      new URL(pathname.slice(0, -1), request.url),
      301
    )
  }

  // Redirection des URLs en majuscules
  if (/[A-Z]/.test(pathname)) {
    return NextResponse.redirect(
      new URL(pathname.toLowerCase(), request.url),
      301
    )
  }

  // Gestion des redirections SEO
  const redirect = redirects.get(pathname)
  if (redirect) {
    return NextResponse.redirect(new URL(redirect, request.url), 301)
  }

  // Gestion des anciennes URLs
  const legacyRedirect = legacyRedirects.get(pathname)
  if (legacyRedirect) {
    return NextResponse.redirect(new URL(legacyRedirect, request.url), 301)
  }

  // Ajout des en-têtes de sécurité
  const response = NextResponse.next()
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:; font-src 'self' data: https:;"
  )
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
