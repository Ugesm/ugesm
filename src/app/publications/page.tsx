'use client';

import { useState } from 'react';
import { publications } from '@/data/publications';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/shared/Footer';

const categories = ['Tous', 'Vie Étudiante', 'Bourses', 'Académique', 'Culture'];

export default function PublicationsPage() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const filteredPublications = publications.filter(
    (publication) => selectedCategory === 'Tous' || publication.category === selectedCategory
  );

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                selectedCategory === category
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredPublications.map((publication) => (
            <article
              key={publication.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={publication.image}
                  alt={publication.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-2 rounded-lg">
                  <div className="text-xl font-bold">{publication.date.day}</div>
                  <div className="text-sm">{publication.date.month}</div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={publication.author.image}
                      alt={publication.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{publication.author.name}</p>
                    <p className="text-sm text-gray-500">{publication.author.university}</p>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {publication.title}
                </h2>

                <p className="text-gray-600 mb-4 line-clamp-3">{publication.excerpt}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {publication.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block px-2 py-1 text-xs text-gray-600 bg-gray-100 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <Link
                    href={`/publications/${publication.id}`}
                    className="inline-flex items-center text-green-600 hover:text-green-500"
                  >
                    Lire plus
                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
