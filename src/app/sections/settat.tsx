import MainLayout from '@/components/layouts/MainLayout';
import Image from 'next/image';

export default function SettatSection() {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Section Settat</h1>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>

        {/* Bureau de la section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Bureau de la Section</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Secrétaire Général */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Secrétaire Général</h3>
                  <p className="text-green-600 font-medium">Serigne Modou Kara Mbackè</p>
                </div>
              </div>
            </div>

            {/* Secrétaire Général Adjoint */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Secrétaire Général Adjoint</h3>
                  <p className="text-green-600 font-medium">Awa Gueye</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* À propos de la section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">À propos de notre section</h2>
          <p className="text-gray-600 mb-4">
            La section UGESM de Settat est une communauté dynamique d'étudiants sénégalais poursuivant leurs études dans 
            différents établissements de la ville. Notre section s'engage à faciliter l'intégration des nouveaux étudiants 
            et à promouvoir l'excellence académique.
          </p>
          <p className="text-gray-600">
            Nous organisons régulièrement des activités académiques, culturelles et sociales pour renforcer les liens 
            entre les membres et maintenir un esprit de solidarité au sein de notre communauté.
          </p>
        </div>

        {/* Contact */}
        <div className="bg-green-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Contactez-nous</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                <p className="text-green-600">settat@ugesm.org</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Téléphone</h3>
                <p className="text-green-600">+212 6XX-XXXXXX</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
