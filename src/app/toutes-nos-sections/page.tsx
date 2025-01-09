'use client';

import { motion } from 'framer-motion';
import { sections } from '@/data/sections';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/shared/Footer';

export default function ToutesNosSections() {
  return (
    <>
      <main className="flex-1 bg-gray-50">
        {/* Hero Section */}
        <section className="relative py-20 bg-green-600">
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Toutes Nos Sections
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl opacity-90"
              >
                Découvrez l'UGESM à travers le Royaume du Maroc
              </motion.p>
            </div>
          </div>
        </section>

        {/* Sections Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sections.map((section, index) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-56">
                    <Image
                      src={section.heroImage}
                      alt={section.city}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h2 className="text-2xl font-bold mb-2">{section.city}</h2>
                      <p className="text-sm opacity-90">{section.studentCount} étudiants</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-6 line-clamp-3">{section.description}</p>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Bureau Principal</h3>
                        {section.bureau
                          .filter(member => member.isMainMember)
                          .map((member, i) => (
                            <div key={i} className="text-gray-600">
                              {member.role}: {member.name}
                            </div>
                          ))}
                      </div>
                    </div>
                    <div className="mt-6">
                      <Link
                        href={`/sections/${section.id}`}
                        className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-green-600 rounded-md hover:bg-green-700 transition-colors duration-300"
                      >
                        Voir les détails
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
