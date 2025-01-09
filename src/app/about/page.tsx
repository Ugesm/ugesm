'use client'

import Image from 'next/image'
import Footer from '@/components/shared/Footer'
import { developers } from '@/data/developers';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function AboutPage() {
  const sponsors = [
    {
      name: 'AMCI',
      logo: '/images/sponsors/amci-logo.png',
      description: 'Agence Marocaine de Coopération Internationale',
      website: 'https://www.amci.ma'
    },
    {
      name: 'Ambassade du Sénégal',
      logo: '/images/sponsors/spo.jpg',
      description: 'Ambassade du Sénégal au Maroc',
      website: 'https://www.au-senegal.com/ambassade-du-senegal-au-maroc,5627.html'
    },
    {
      name: 'Ministère de l\'Enseignement Supérieur',
      logo: '/images/sponsors/spo1.jpg',
      description: 'Ministère de l\'Enseignement Supérieur du Sénégal',
      website: 'https://www.mesr.gouv.sn'
    },
    {
      name: 'CESAM',
      logo: '/images/sponsors/sponsor4.png',
      description: 'Cesam Centrale',
      website: 'https://cesamcentrale.org/'
    },
    {
      name: 'ARSEREM',
      logo: '/images/sponsors/arserem-logo.png',
      description: 'Association des Ressortissants Sénégalais Résidents au Maroc',
      website: '#'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="relative h-[300px] sm:h-[400px] rounded-xl overflow-hidden mb-12">
          <Image
            src="/images/p1.png"
            alt="UGESM Team"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-white text-4xl sm:text-5xl font-bold text-center px-4">
              À Propos de l&apos;UGESM 
            </h1>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-green-600 mb-4">Notre Mission</h2>
            <p className="text-gray-700">
              L'union générale des étudiants et stagiaires sénégalais au Maroc, créée en mai 2004,
              s'appuie sur une vision collective, où la force réside dans les initiatives et réalisations communes. 
              Elle met en avant l'importance de la contribution de chacun pour surmonter les défis avec efficacité.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-green-600 mb-4">Notre Vision</h2>
            <p className="text-gray-700">
              Pour répondre aux besoins des étudiants et stagiaires sénégalais au Maroc, 
              l'organisation a mis en place un site internet. Cet outil vise à accompagner 
              ces derniers tout au long de leur parcours, offrant un soutien avant, pendant, 
              et après leur séjour dans le royaume
            </p>
          </div>
        </div>

        {/* L'UGESM en chiffres */}
        <div className="relative py-16 sm:py-20 bg-cover bg-center mb-12" style={{ backgroundImage: "url('/images/stats-bg.png')" }}>
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">3000+</div>
                <div className="text-sm sm:text-base text-gray-300">Étudiants</div>
              </div>

              {/* Sections */}
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-green-600 flex items-center justify-center mb-4 transform transition-transform hover:scale-110 duration-300">
                  <svg className="w-12 h-12 sm:w-16 sm:h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">15+</div>
                <div className="text-sm sm:text-base text-gray-300">Sections</div>
              </div>

              {/* Universités */}
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-green-600 flex items-center justify-center mb-4 transform transition-transform hover:scale-110 duration-300">
                  <svg className="w-12 h-12 sm:w-16 sm:h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                  </svg>
                </div>
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">50+</div>
                <div className="text-sm sm:text-base text-gray-300">Universités</div>
              </div>

              {/* Années d'expérience */}
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-green-600 flex items-center justify-center mb-4 transform transition-transform hover:scale-110 duration-300">
                  <svg className="w-12 h-12 sm:w-16 sm:h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">19</div>
                <div className="text-sm sm:text-base text-gray-300">Années d'expérience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Sponsors */}
        <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Nos Sponsors
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Nous remercions nos précieux partenaires qui nous soutiennent dans notre mission 
            d&apos;accompagnement des étudiants sénégalais au Maroc.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {sponsors.map((sponsor, index) => (
              <a 
                key={index}
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer" 
                className="group relative overflow-hidden bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-green-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="p-6">
                  <div className="relative w-full h-32 mb-6">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      fill
                      className="object-contain filter group-hover:brightness-110 transition-all duration-300"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                      {sponsor.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {sponsor.description}
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Section Développeurs */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Notre Équipe de Développement</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {developers.map((dev) => (
                <div key={dev.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative h-64 w-full">
                    <Image
                      src={dev.image}
                      alt={dev.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{dev.name}</h3>
                    <p className="text-green-600 font-medium mb-3">{dev.role}</p>
                    <p className="text-gray-600 mb-4">{dev.description}</p>
                    <div className="flex space-x-4">
                      {dev.linkedin && (
                        <a
                          href={dev.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-green-600 transition-colors"
                        >
                          <FaLinkedin className="w-6 h-6" />
                        </a>
                      )}
                      {dev.github && (
                        <a
                          href={dev.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-green-600 transition-colors"
                        >
                          <FaGithub className="w-6 h-6" />
                        </a>
                      )}
                      <a
                        href={`mailto:${dev.email}`}
                        className="text-gray-600 hover:text-green-600 transition-colors"
                      >
                        <FaEnvelope className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}
