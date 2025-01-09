'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/solid'

export default function Breadcrumbs() {
  const pathname = usePathname()
  const paths = pathname.split('/').filter(Boolean)

  if (paths.length === 0) return null

  const breadcrumbs = paths.map((path, index) => {
    const href = `/${paths.slice(0, index + 1).join('/')}`
    const label = path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ')
    const isLast = index === paths.length - 1

    return {
      href,
      label,
      isLast,
    }
  })

  return (
    <nav className="flex px-4 py-2 text-sm text-gray-600 bg-gray-100/50 rounded-lg mb-4" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link href="/" className="inline-flex items-center hover:text-green-600">
            <HomeIcon className="w-4 h-4 mr-2" />
            Accueil
          </Link>
        </li>
        {breadcrumbs.map(({ href, label, isLast }) => (
          <li key={href}>
            <div className="flex items-center">
              <ChevronRightIcon className="w-4 h-4 mx-1" />
              {isLast ? (
                <span className="text-gray-500">{label}</span>
              ) : (
                <Link href={href} className="hover:text-green-600">
                  {label}
                </Link>
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}
