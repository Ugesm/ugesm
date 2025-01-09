'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { staggerContainer } from '@/utils/motion';
import { publications } from '@/data/publications';
import { posts } from '@/data/posts';
import Footer from '@/components/shared/Footer';
import Hero from '@/components/home/Hero';
import SectionsShowcase from '@/components/home/SectionsShowcase';
import { metadata } from './metadata';
import Image from 'next/image';
import Newsletter from '@/components/Newsletter';

export default function Home() {
  const latestPosts = posts.slice(0, 3);
  const latestPublications = publications.slice(0, 3);

  return (
    <motion.main
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="flex-1"
    >
      <Hero />

      {/* Section Événements */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-8 sm:py-16 bg-white relative"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 items-start">
            {/* Colonne gauche */}
            <div className="lg:sticky lg:top-8">
              <div className="space-y-6">
                <div className="animate-fadeInUp">
                  <span className="text-lg font-medium text-gray-600 block">
                    Restez informé
                  </span>
                  <h2 className="text-3xl font-bold text-gray-900 mt-2 relative inline-block">
                    Actualités
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-green-600 to-green-400 bg-[length:200%_100%] animate-gradient"></div>
                  </h2>
                </div>
                <p className="text-base text-gray-600 animate-fadeInLeft">
                  Suivez les dernières actualités et événements de l'UGESM. Découvrez nos activités, nos réalisations et restez connecté avec notre communauté estudiantine dynamique à travers le Maroc.
                </p>

                <div className="animate-fadeInUp">
                  <Link
                    href="/actualites"
                    className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Afficher tout
                  </Link>
                </div>
              </div>
            </div>

            {/* Colonne droite - Carrousel d'événements */}
            <div className="space-y-4 sm:space-y-6 animate-fadeInRight">
              {latestPosts.map((post, index) => (
                <Link 
                  key={post.id}
                  href={`/actualites/${post.id}`}
                  className="block group"
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col sm:flex-row">
                    <div className="relative w-full sm:w-1/3 h-[200px] sm:min-h-[160px]">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="w-full sm:w-2/3 p-4 sm:p-6">
                      <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3">
                        <div className="bg-green-600 text-white text-xs px-2 py-1 rounded">
                          {post.date}
                        </div>
                        <div className="text-gray-500 text-sm">
                          {post.category}
                        </div>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors mb-2 sm:mb-3">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {post.content}
                      </p>
                      <div className="mt-3 flex items-center text-green-600">
                        <span className="text-sm font-medium">Lire la suite</span>
                        <svg
                          className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-200"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Publications récentes */}
      <div className="bg-white py-8 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 relative inline-block">
              Publications Récentes
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-green-600 to-green-400 bg-[length:200%_100%] animate-gradient"></div>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              Découvrez nos dernières publications et recherches
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {latestPublications.map((publication) => (
              <div key={publication.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48 sm:h-40">
                  <Image
                    src={publication.image}
                    alt={publication.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center mb-2 sm:mb-3">
                    <div className="bg-green-600 text-white text-xs px-2 py-1 rounded">
                      {`${publication.date.day} ${publication.date.month} ${publication.date.year}`}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {publication.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {publication.excerpt}
                  </p>
                  <Link
                    href={`/publications/${publication.id}`}
                    className="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-700"
                  >
                    Lire la suite
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6 sm:mt-8">
            <Link
              href="/publications"
              className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-lg text-white bg-green-600 hover:bg-green-700"
            >
              Toutes les publications
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Guide pour nouveaux étudiants */}
      <div className="bg-gray-50 py-8 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 relative inline-block">
              Guide Étudiant
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-green-600 to-green-400 bg-[length:200%_100%] animate-gradient"></div>
            </h2>
            <p className="mt-3 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-base text-gray-500">
              Informations essentielles pour votre séjour d'études au Maroc
            </p>
          </div>

          <div className="mt-8 sm:mt-12 flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/4 px-4 mb-12">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-white to-gray-200 p-8 rounded-lg border-2 border-gray-300 shadow-md transition-transform duration-200"
              >
                <div className="flex items-center justify-center mb-6">
                  <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">Bourse Sénégal</h3>
                <p className="text-black mb-5">Guide complet pour obtenir une bourse d'étude au Sénégal.</p>
                <Link href="/bourse-senegal" className="text-green-600 font-semibold hover:underline flex items-center">
                  En savoir plus
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            </div>
            <div className="w-full lg:w-1/4 px-4 mb-12">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-white to-gray-200 p-8 rounded-lg border-2 border-gray-300 shadow-md transition-transform duration-200"
              >
                <div className="flex items-center justify-center mb-6">
                  <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2zM9 9h6m-6 4h6m-6 4h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">Bourse AMCI</h3>
                <p className="text-black mb-5">Informations sur les bourses offertes par l'AMCI.</p>
                <Link href="/bourse-amci" className="text-green-600 font-semibold hover:underline flex items-center">
                  En savoir plus
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            </div>
            <div className="w-full lg:w-1/4 px-4 mb-12">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-white to-gray-200 p-8 rounded-lg border-2 border-gray-300 shadow-md transition-transform duration-200"
              >
                <div className="flex items-center justify-center mb-6">
                  <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">Carte de Séjour</h3>
                <p className="text-black mb-5">Procédure pour obtenir une carte de séjour au Maroc.</p>
                <Link href="/carte-sejour" className="text-green-600 font-semibold hover:underline flex items-center">
                  En savoir plus
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            </div>
            <div className="w-full lg:w-1/4 px-4 mb-12">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-white to-gray-200 p-8 rounded-lg border-2 border-gray-300 shadow-md transition-transform duration-200"
              >
                <div className="flex items-center justify-center mb-6">
                  <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 14.25v-2.625a3.375 3.375 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0112 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">Couverture Médicale</h3>
                <p className="text-black mb-5">Informations sur la couverture médicale pour les étudiants.</p>
                <Link href="/couverture-medicale" className="text-green-600 font-semibold hover:underline flex items-center">
                  En savoir plus
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <SectionsShowcase />
      {/* Mission Section */}
      <section className="py-8 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 relative inline-block">
              Notre Mission
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-green-600 to-green-400 bg-[length:200%_100%] animate-gradient"></div>
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              L'UGESM s'engage à créer un environnement propice à la réussite académique
              et à l'épanouissement personnel des étudiants sénégalais au Maroc.
              Nous favorisons l'entraide, le partage d'expériences et la promotion
              de notre riche patrimoine culturel.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
              >
                Nous Contacter
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </Link>
              <Link
                href="/faq"
                className="inline-flex items-center px-6 py-3 border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors"
              >
                FAQ
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
     {/* Stats Section */}
     <section className="relative py-16 sm:py-20 bg-cover bg-center" style={{ backgroundImage: "url('/images/stats-bg.png')" }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              L'UGESM en chiffres
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Étudiants */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-green-600 flex items-center justify-center mb-4 transform transition-transform hover:scale-110 duration-300">
                <svg className="w-12 h-12 sm:w-16 sm:h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">2000+</div>
              <div className="text-sm sm:text-base text-gray-300">Étudiants</div>
            </div>

            {/* Universités */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-green-600 flex items-center justify-center mb-4 transform transition-transform hover:scale-110 duration-300">
                <svg className="w-12 h-12 sm:w-16 sm:h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                </svg>
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">15+</div>
              <div className="text-sm sm:text-base text-gray-300">Villes</div>
            </div>

            {/* Sections */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-green-600 flex items-center justify-center mb-4 transform transition-transform hover:scale-110 duration-300">
                <svg className="w-12 h-12 sm:w-16 sm:h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0112 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">10+</div>
              <div className="text-sm sm:text-base text-gray-300">Sections</div>
            </div>

            {/* Années d'expérience */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-green-600 flex items-center justify-center mb-4 transform transition-transform hover:scale-110 duration-300">
                <svg className="w-12 h-12 sm:w-16 sm:h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">30+</div>
              <div className="text-sm sm:text-base text-gray-300">Années d'expérience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />

      <Footer />
    </motion.main>
  );
}