import Image from 'next/image';
import Footer from '@/components/shared/Footer';

export default function BourseSenegalPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-400 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-white text-center">
              Bourse du Sénégal
            </h1>
            <p className="mt-4 text-xl text-white text-center">
              Guide complet pour l'obtention et le renouvellement de la bourse sénégalaise
            </p>
            {/* Bouton de vérification du dossier */}
            <div className="mt-8 flex justify-center">
              <a
                href="https://www.sgee-sn.org/votre-dossier/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-green-600 bg-white hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
                Vérifier l'état de votre dossier
              </a>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Compte Bancaire Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Étape préliminaire : Ouverture de compte bancaire
            </h2>
            <div className="prose prose-green">
              <p className="text-gray-600">
                La première étape consiste à ouvrir un compte bancaire au Maroc. Vous avez deux options :
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
                <li>Compte courant</li>
                <li>Compte en dirham convertible (recommandé pour les nouveaux arrivants sans carte de séjour)</li>
              </ul>
              <p className="text-gray-600 mt-4">
                <strong>Note importante :</strong> Sans carte de séjour, il est recommandé d'ouvrir un compte en dirham convertible ou compte devise, en utilisant votre passeport comme document d'identité.
              </p>
            </div>
          </div>

          {/* Documents Requis - Première Demande */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Documents requis pour la première demande
            </h2>
            
            {/* Bouton de téléchargement - Fiche de renseignement */}
            <div className="mb-6 p-4 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Fiche de renseignement à remplir
              </h3>
              <p className="text-blue-700 mb-4">
                Téléchargez et remplissez la fiche de renseignement pour votre première demande de bourse.
              </p>
              <a
                href="/documents/fiche-renseignement-nouveau.pdf"
                download
                className="inline-flex items-center px-4 py-2 border border-blue-600 text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 shadow-sm hover:shadow-md"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Télécharger la fiche de renseignement
              </a>
            </div>

            <ul className="space-y-3">
              {[
                "Fiche de renseignement pour les nouveaux bacheliers",
                "Photocopie légalisée de l'attestation d'inscription",
                "Photocopie légalisée de l'attestation de bourse",
                "Photocopie légalisée du passeport",
                "Photocopie légalisée de la carte d'identité",
                "Deux photos d'identité",
                "Relevé d'identité bancaire (RIB)",
                "Attestation provisoire du bac ou diplôme de bac"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Documents Requis - Renouvellement */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Documents requis pour le renouvellement
            </h2>
            
            {/* Bouton de téléchargement - Fiche de renouvellement */}
            <div className="mb-6 p-4 bg-green-50 rounded-lg">
              <h3 className="text-lg font-semibold text-green-900 mb-2">
                Fiche de renouvellement à remplir
              </h3>
              <p className="text-green-700 mb-4">
                Téléchargez et remplissez la fiche de renouvellement pour continuer à bénéficier de votre bourse.
              </p>
              <a
                href="/documents/fiche-renouvellement.pdf"
                download
                className="inline-flex items-center px-4 py-2 border border-green-600 text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors duration-300 shadow-sm hover:shadow-md"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Télécharger la fiche de renouvellement
              </a>
            </div>

            <div className="prose prose-green">
              <p className="text-gray-600 mb-4">
                À partir de la deuxième année, les documents suivants sont nécessaires :
              </p>
              <ul className="space-y-3">
                {[
                  "Attestation d'inscription",
                  "Relevé des notes de l'année précédente",
                  "Photocopie du passeport",
                  "Photocopie de la carte de séjour",
                  "Fiche de renouvellement (à télécharger ici ou sur le site du SGEE)"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                      Important : La fiche de renouvellement doit être signée et certifiée par votre établissement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Informations d'envoi */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Envoi du dossier
            </h2>
            <div className="prose prose-green">
              <p className="text-gray-600 mb-4">
                Envoyez votre dossier complet par la poste à l'adresse suivante :
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-900">SGEE (Service de Gestion des Étudiants Sénégalais à l'étranger)</p>
                <p className="text-gray-600">32 Rue de la tour</p>
                <p className="text-gray-600">75116 Paris</p>
                <div className="mt-4 space-y-2">
                  <p className="text-gray-600"><strong>Téléphone :</strong> 0147044056</p>
                  <p className="text-gray-600"><strong>Fax :</strong> 0147041021</p>
                  <p className="text-gray-600"><strong>SVI :</strong> 0171250061</p>
                  <p className="text-gray-600"><strong>Email :</strong> sgee@sgee.org</p>
                </div>
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
                      Attention : Il est impératif de respecter les délais fixés pour l'envoi de votre dossier.
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
