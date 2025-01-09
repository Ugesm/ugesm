import { books } from '@/data/books';
import Image from 'next/image';
import Link from 'next/link';

export default function BibliothequeHome() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Bibliothèque UGESM</h1>
          <p className="text-xl text-gray-600 mb-8">
            Découvrez les œuvres littéraires et académiques de nos étudiants
          </p>
          <Link
            href="/bibliotheque/publier"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Publier un livre
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            {['Tous', 'Roman', 'Poésie', 'Essai', 'Académique', 'Recherche'].map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full bg-white shadow hover:shadow-md transition-shadow text-gray-700 hover:text-green-600"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="relative h-96 w-full">
                <Image
                  src={book.coverImage}
                  alt={book.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={book.author.image || '/images/default-avatar.jpg'}
                      alt={book.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{book.author.name}</p>
                    <p className="text-xs text-gray-500">{book.author.university}</p>
                  </div>
                </div>

                <h2 className="text-xl font-semibold text-gray-900 mb-2">{book.title}</h2>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{book.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {book.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block px-2 py-1 text-xs text-gray-600 bg-gray-100 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{book.pageCount} pages</span>
                  <span>{book.language}</span>
                  <span>{book.publishDate}</span>
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <Link
                    href={`/bibliotheque/${book.id}`}
                    className="inline-flex items-center text-green-600 hover:text-green-700"
                  >
                    Voir plus
                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                  {book.pdfUrl && (
                    <a
                      href={book.pdfUrl}
                      className="inline-flex items-center px-4 py-2 border border-green-600 text-sm font-medium rounded-md text-green-600 hover:bg-green-50"
                    >
                      Télécharger PDF
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
