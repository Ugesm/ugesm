'use client';

import { useState } from 'react';
import { faqData } from '@/data/faq';
import Image from 'next/image';
import { FaChevronDown, FaChevronUp, FaSearch } from 'react-icons/fa';

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeQuestions, setActiveQuestions] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleCategory = (categoryTitle: string) => {
    setActiveCategory(activeCategory === categoryTitle ? null : categoryTitle);
  };

  const toggleQuestion = (question: string) => {
    setActiveQuestions(prev =>
      prev.includes(question)
        ? prev.filter(q => q !== question)
        : [...prev, question]
    );
  };

  const filteredFAQ = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(
      q =>
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter(category => category.questions.length > 0);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/contact-hero.png"
            alt="FAQ UGESM"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Questions Fréquentes</h1>
          <p className="text-xl md:text-2xl font-light">
            Trouvez rapidement les réponses à vos questions
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-white py-8 shadow-md">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher une question..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Categories Navigation */}
          <div className="md:col-span-1">
            <nav className="space-y-2">
              {faqData.map((category) => (
                <button
                  key={category.title}
                  onClick={() => toggleCategory(category.title)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    activeCategory === category.title
                      ? 'bg-green-600 text-white'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </nav>
          </div>

          {/* Questions and Answers */}
          <div className="md:col-span-3">
            {filteredFAQ.map((category) => (
              <div
                key={category.title}
                className={`mb-8 ${
                  activeCategory && activeCategory !== category.title ? 'hidden md:block' : ''
                }`}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{category.title}</h2>
                <div className="space-y-4">
                  {category.questions.map((item) => (
                    <div
                      key={item.question}
                      className="border border-gray-200 rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => toggleQuestion(item.question)}
                        className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50"
                      >
                        <span className="font-medium text-gray-900">{item.question}</span>
                        {activeQuestions.includes(item.question) ? (
                          <FaChevronUp className="text-green-600" />
                        ) : (
                          <FaChevronDown className="text-gray-400" />
                        )}
                      </button>
                      {activeQuestions.includes(item.question) && (
                        <div className="p-4 bg-gray-50 border-t border-gray-200">
                          <p className="text-gray-600">{item.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Vous n'avez pas trouvé votre réponse ?
          </h2>
          <p className="text-gray-600 mb-8">
            N'hésitez pas à nous contacter directement. Notre équipe est là pour vous aider.
          </p>
          <a
            href="/contact"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Contactez-nous
          </a>
        </div>
      </section>
    </main>
  );
}
