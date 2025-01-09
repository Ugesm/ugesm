'use client'

interface RelatedContentProps {
  links: Array<{
    title: string
    description: string
    href: string
    category?: string
  }>
}

export default function RelatedContent({ links }: RelatedContentProps) {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Articles Connexes
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {link.category && (
                <span className="text-sm text-green-600 font-medium">
                  {link.category}
                </span>
              )}
              <h3 className="mt-2 text-lg font-semibold text-gray-900">
                {link.title}
              </h3>
              <p className="mt-2 text-gray-600">{link.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
