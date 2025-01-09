'use client';

import { useState, useMemo } from 'react';
import NewsCard from './NewsCard';
import { Post } from '@/types/post';
import { sections } from '@/data/sections';

interface SectionLayoutProps {
  title: string;
  description: string;
  sectionId: string;
  initialPosts?: Post[];
  showSectionFilter?: boolean;
}

export default function SectionLayout({ 
  title, 
  description, 
  sectionId,
  initialPosts = [],
  showSectionFilter = true
}: SectionLayoutProps) {
  const [selectedSection, setSelectedSection] = useState(sectionId || 'tous');
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const categories = ['Tous', 'Événements', 'Actualités', 'Académique', 'Sport'];

  // Filtrer les posts côté client
  const filteredPosts = useMemo(() => {
    return initialPosts.filter(post => {
      const matchesSection = !showSectionFilter || selectedSection === 'tous' || post.section === selectedSection;
      const matchesCategory = selectedCategory === 'Tous' || post.category === selectedCategory;
      return matchesSection && matchesCategory;
    });
  }, [initialPosts, selectedSection, selectedCategory, showSectionFilter]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        <p className="mt-4 text-lg text-gray-600">{description}</p>
      </div>

      {/* Filtres */}
      <div className="mb-8 flex flex-col sm:flex-row gap-4">
        {/* Filtre par section - uniquement si showSectionFilter est true */}
        {showSectionFilter && (
          <div className="flex-1">
            <label htmlFor="section-filter" className="block text-sm font-medium text-gray-700 mb-2">
              Filtrer par section
            </label>
            <select
              id="section-filter"
              value={selectedSection}
              onChange={(e) => setSelectedSection(e.target.value)}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            >
              <option value="tous">Toutes les sections</option>
              {sections.map((section) => (
                <option key={section.id} value={section.id}>
                  {section.city}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Filtre par catégorie */}
        <div className="flex-1">
          <label htmlFor="category-filter" className="block text-sm font-medium text-gray-700 mb-2">
            Filtrer par catégorie
          </label>
          <select
            id="category-filter"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Grille de posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <NewsCard key={post.id} post={post} />
          ))
        ) : (
          <div className="col-span-3 text-center py-12">
            <p className="text-gray-500">Aucune actualité ne correspond aux critères sélectionnés.</p>
          </div>
        )}
      </div>
    </div>
  );
}
