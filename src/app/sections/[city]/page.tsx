'use client';

import { sections } from '@/data/sections';
import Image from 'next/image';
import BureauMembers from '@/components/BureauMembers';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaTelegram } from 'react-icons/fa';

interface SectionPageProps {
  params: {
    city: string;
  };
}

export default function SectionPage({ params }: SectionPageProps) {
  const section = sections.find(s => s.id === params.city);

  if (!section) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-900">Section non trouvée</h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh]">
        <div className="absolute inset-0">
          <Image
            src={section.heroImage}
            alt={section.city}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/60" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Section {section.city}</h1>
            <p className="text-xl md:text-2xl font-light">{section.slogan}</p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Description de la section */}
        <section className="mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">À propos de notre section</h2>
            <p className="text-gray-600 text-lg mb-8">{section.description}</p>
            <div className="flex items-center space-x-2 text-gray-600">
              <div className="bg-green-100 rounded-full p-2">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <span>{section.studentCount} étudiants</span>
            </div>
          </div>
        </section>

        {/* Bureau de la section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Bureau de la Section</h2>
          <BureauMembers members={section.bureau} />
        </section>

        {/* Universités */}
        {section.universities && section.universities.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Nos Universités</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.universities.map((university) => (
                <div
                  key={university.name}
                  className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{university.name}</h3>
                  <p className="text-gray-600 mb-4">{university.description}</p>
                  <div className="flex items-start space-x-2 text-gray-600">
                    <FaMapMarkerAlt className="w-5 h-5 mt-1 text-green-600" />
                    <span>{university.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Informations de contact */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Coordonnées */}
            <div className="space-y-6">
              {section.address && (
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <FaMapMarkerAlt className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Adresse</h3>
                    <p className="text-gray-600 mt-1">{section.address}</p>
                  </div>
                </div>
              )}

              {section.email && (
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <FaEnvelope className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    <a 
                      href={`mailto:${section.email}`}
                      className="text-green-600 hover:text-green-700 mt-1 block"
                    >
                      {section.email}
                    </a>
                  </div>
                </div>
              )}

              {section.phone && (
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <FaPhone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Téléphone</h3>
                    <a 
                      href={`tel:${section.phone}`}
                      className="text-green-600 hover:text-green-700 mt-1 block"
                    >
                      {section.phone}
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Réseaux sociaux */}
            {section.socialMedia && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Réseaux sociaux</h3>
                <div className="grid grid-cols-2 gap-4">
                  {section.socialMedia.facebook && (
                    <a
                      href={section.socialMedia.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors group"
                    >
                      <div className="bg-green-100 p-3 rounded-full group-hover:bg-green-200 transition-colors">
                        <FaFacebook className="w-6 h-6 text-green-600" />
                      </div>
                      <span className="font-medium text-gray-700 group-hover:text-gray-900">Facebook</span>
                    </a>
                  )}

                  {section.socialMedia.instagram && (
                    <a
                      href={section.socialMedia.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors group"
                    >
                      <div className="bg-green-100 p-3 rounded-full group-hover:bg-green-200 transition-colors">
                        <FaInstagram className="w-6 h-6 text-green-600" />
                      </div>
                      <span className="font-medium text-gray-700 group-hover:text-gray-900">Instagram</span>
                    </a>
                  )}

                  {section.socialMedia.telegram && (
                    <a
                      href={section.socialMedia.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors group"
                    >
                      <div className="bg-green-100 p-3 rounded-full group-hover:bg-green-200 transition-colors">
                        <FaTelegram className="w-6 h-6 text-green-600" />
                      </div>
                      <span className="font-medium text-gray-700 group-hover:text-gray-900">Telegram</span>
                    </a>
                  )}

                  {section.socialMedia.twitter && (
                    <a
                      href={section.socialMedia.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors group"
                    >
                      <div className="bg-green-100 p-3 rounded-full group-hover:bg-green-200 transition-colors">
                        <FaTwitter className="w-6 h-6 text-green-600" />
                      </div>
                      <span className="font-medium text-gray-700 group-hover:text-gray-900">Twitter</span>
                    </a>
                  )}

                  {section.socialMedia.linkedin && (
                    <a
                      href={section.socialMedia.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors group"
                    >
                      <div className="bg-green-100 p-3 rounded-full group-hover:bg-green-200 transition-colors">
                        <FaLinkedin className="w-6 h-6 text-green-600" />
                      </div>
                      <span className="font-medium text-gray-700 group-hover:text-gray-900">LinkedIn</span>
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
