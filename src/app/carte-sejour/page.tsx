import Image from 'next/image';
import Footer from '@/components/shared/Footer';

export default function CarteSejourPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-400 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-white text-center">
              Carte de Séjour
            </h1>
            <p className="mt-4 text-xl text-white text-center">
              Guide des démarches administratives pour l'obtention et le renouvellement de votre carte de séjour au Maroc
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Informations importantes
            </h2>
            <div className="prose prose-green">
              <p className="text-gray-600">
                Cette section détaille les dispositions légales et réglementaires qui encadrent votre entrée et votre séjour au Maroc.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                      Vous disposez de trois (3) mois de circulation libre après votre arrivée pour effectuer toutes les démarches administratives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Documents Requis - Première Demande */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Documents requis pour la première demande
            </h2>
            <ul className="space-y-3">
              {[
                "Photocopie légalisée du passeport (avec date d'entrée)",
                "Extrait de casier judiciaire du Sénégal (moins de 3 mois)",
                "Formulaires à remplir sur place au commissariat",
                "Certificat médical",
                "Certificat de résidence ou contrat de bail",
                "8 photos d'identité",
                "Attestation de bourse",
                "Attestation d'inscription"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>

            {/* Bouton Casier Judiciaire */}
            <div className="mt-6 border-t pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Casier Judiciaire Marocain
              </h3>
              <p className="text-gray-600 mb-4">
                Pour le renouvellement, vous pouvez obtenir votre casier judiciaire directement via la plateforme en ligne du Maroc :
              </p>
              <a
                href="https://casierjudiciaire.justice.gov.ma/Accueil.aspx?culture=fr-FR"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-green-600 text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Demander votre casier judiciaire en ligne
              </a>
            </div>
          </div>

          {/* Renouvellement */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Renouvellement de la carte de séjour
            </h2>
            <div className="prose prose-green">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-blue-700">
                      Le renouvellement doit être effectué 1 mois avant la date d'expiration de votre carte.
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                Les documents requis sont les mêmes que pour la première demande, à l'exception de l'extrait de casier judiciaire qui ne doit pas obligatoirement provenir du Sénégal.
              </p>
            </div>
          </div>

          {/* En cas de perte */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              En cas de perte
            </h2>
            <div className="prose prose-green">
              <div className="space-y-4">
                <p className="text-gray-600">
                  En cas de perte de votre carte de séjour, suivez ces étapes :
                </p>
                <ol className="list-decimal list-inside space-y-2 text-gray-600">
                  <li>Rendez-vous à la police de votre préfecture pour faire une déclaration de perte</li>
                  <li>Obtenez un certificat de perte</li>
                  <li>Rassemblez tous les documents requis mentionnés ci-dessus</li>
                  <li>Déposez l'ensemble du dossier (documents + certificat de perte) à votre wilaya</li>
                </ol>
              </div>
              <div className="bg-red-50 border-l-4 border-red-400 p-4 mt-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-red-700">
                      Il est fortement recommandé de faire une copie de votre carte de séjour et de la conserver en lieu sûr.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
