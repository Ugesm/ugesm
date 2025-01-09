import React from 'react';
import Link from 'next/link';

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Guide du Nouvel Étudiant
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Tout ce que vous devez savoir pour bien démarrer vos études à Marrakech
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Section Documentation */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold text-[#f1af40] mb-4">
              Bourses AMCI
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li>• Photocopie passeport</li>
              <li>• Photocopie Attestation d'inscription universitaire</li>
              <li>• Photocopie Relevés de notes</li>
              <li>• Photocopie Carte de séjour</li>
            </ul>
          </div>

          {/* Section Logement */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold text-[#f1af40] mb-4">
              Logement
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li>• Options de résidences universitaires</li>
              <li>• Budget moyen 600 DH/Mois</li>
              <li>• Conseils pour la colocation</li>
            </ul>
          </div>

          {/* Section Vie Étudiante */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold text-[#f1af40] mb-4">
              Bourses Senegal
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li>• Remplir le fiche de renseignement pour les nouveaux bacheliers</li>
              <li>• photocopie légalisée de votre attestation d’inscription</li>
              <li>• photocopie légalisée de votre attestation de bourse</li>
              <li>• photocopie légalisée de votre passeport</li>
              <li>• deux photos d’identité</li>
              <li>• relevé d’identité bancaire ( RIB)</li>
              <li>• attestation provisoire du bac ou diplôme de bac</li>
            </ul>
          </div>

          {/* Section Démarches Administratives */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold text-[#f1af40] mb-4">
            LA CARTE DE SÉJOUR
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li>• la photocopie légalisé du passeport ( date d’entrée)</li>
              <li>• un extrait de casier judiciaire venant du Sénégal (moins de 3mois)</li>
              <li>• les formulaires à remplir sur place une fois au commissariat</li>
              <li>• certificat médical</li>
              <li>• certificat de résidence ou contrat de bail</li>
              <li>• des photos d’identité ( 8 photos )</li>
              <li>• attestation de bourse</li>
              <li>• attestation d’inscription</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl text-gray-700 mb-4">Voici un document plus détaillé :</p>
          <a
            href="/docs/guide.pdf"
            className="inline-flex items-center px-6 py-3 bg-[#f1af40] text-white rounded-lg hover:bg-opacity-90 transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
            </svg>
            Télécharger le Guide Complet (PDF)
          </a>
        </div>

        <div className="mt-12 bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-[#f1af40] mb-4">
            Contacts Utiles
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">UGESM Marrakech</h3>
              <p className="text-gray-600">Email: ugesmmarrakech@gmail.com</p>
              <p className="text-gray-600">Téléphone: +212 0765536008</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Chargee Academique et Social </h3>
              <p className="text-gray-600">THIOUNE Gora</p>
              <p className="text-gray-600">+212 613-888902</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link 
            href="/"
            className="inline-block bg-[#f1af40] text-white px-8 py-3 rounded-full 
                     text-lg font-medium hover:bg-opacity-90 transition-all"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
