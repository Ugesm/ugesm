import MainLayout from '@/components/layouts/MainLayout';
import { developers } from '@/data/developers';
import Image from 'next/image';
import Link from 'next/link';

export default function DevelopersPage() {
  return (
    <MainLayout>
      <div className="relative">
        {/* Hero Section */}
        <div className="relative min-h-[70vh] lg:min-h-[80vh] overflow-hidden flex items-center">
          {/* Background Image with Parallax effect */}
          <div className="absolute inset-0">
            <Image
              src="/images/hero-bg.png"
              alt="Developer Team Background"
              fill
              className="object-cover transform scale-105 motion-safe:animate-subtle-zoom"
              priority
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
          </div>
          
          <div className="relative w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
              <div className="text-center space-y-6 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight animate-fade-in">
                  Notre Équipe Technique
                </h1>
                <p className="text-lg md:text-xl text-gray-200 font-medium max-w-2xl mx-auto animate-fade-in-up">
                  Expertise et Innovation au Service de l&apos;UGESM
                </p>
                <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
                  Notre équipe de développement, composée d&apos;étudiants sénégalais talentueux au Maroc, 
                  allie expertise technique et vision innovante pour créer des solutions numériques performantes. 
                  Notre engagement est de fournir une plateforme moderne qui répond aux besoins évolutifs de notre communauté estudiantine.
                </p>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-gradient-to-b from-gray-900 to-gray-800 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Les Développeurs du Site </h2>
              <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
                Découvrez les talents qui façonnent l&apos;avenir numérique de l&apos;UGESM à travers 
                leur expertise technique et leur vision innovante.
              </p>
              <div className="w-24 h-1 bg-green-500 mx-auto"></div>
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {developers.map((developer, index) => (
                <div 
                  key={index} 
                  className="relative group bg-gray-800/50 rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  {/* Developer Image */}
                  <div className="relative h-72 w-full overflow-hidden">
                    <Image
                      src={developer.image}
                      alt={developer.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
                  </div>

                  {/* Developer Info */}
                  <div className="relative p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{developer.name}</h3>
                    <p className="text-green-400 font-medium mb-3">{developer.role}</p>
                    <p className="text-gray-300 text-sm mb-4">{developer.description}</p>
                    
                    {/* Social Links */}
                    <div className="flex items-center space-x-4">
                      {developer.linkedin && (
                        <Link 
                          href={developer.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </Link>
                      )}
                      {developer.github && (
                        <Link 
                          href={developer.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-gray-200 transition-colors duration-300"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </Link>
                      )}
                      <Link 
                        href={`mailto:${developer.email}`}
                        className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
