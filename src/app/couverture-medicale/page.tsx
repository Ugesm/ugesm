import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Couverture Médicale | UGESM",
  description: "Informations sur la couverture médicale AMCI pour les étudiants sénégalais au Maroc.",
};

export default function CouvertureMedicale() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Couverture Médicale AMCI
          </h1>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section 1: Fonctionnement Antérieur */}
          <section className="bg-white rounded-lg shadow-md p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Ancien Système de Prise en Charge
            </h2>
            <div className="prose prose-green max-w-none">
              <p className="text-gray-600 mb-4">
                Auparavant, l'AMCI fonctionnait avec un système de <strong>prise en charge directe</strong> pour les examens médicaux.
              </p>
              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">Processus précédent :</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-600">
                <li>Se rendre à l'hôpital pour obtenir un devis des examens nécessaires</li>
                <li>Soumettre ce devis à l'AMCI pour approbation</li>
                <li>Obtenir l'autorisation de prise en charge sous <strong>2 à 3 jours ouvrés</strong></li>
                <li>Réaliser les examens <strong>sans avance de frais</strong> (sauf pour la consultation initiale)</li>
              </ol>
            </div>
          </section>

          {/* Section 2: Système Actuel */}
          <section className="bg-white rounded-lg shadow-md p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Système Actuel
            </h2>
            <div className="prose prose-green max-w-none">
              <p className="text-gray-600 mb-4">
                Désormais, l'AMCI fonctionne sur la base d'un <strong>remboursement après paiement</strong>.
              </p>
              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">Nouvelle procédure :</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-600">
                <li>Paiement des examens médicaux par l'assuré</li>
                <li>Soumission des factures à l'AMCI</li>
                <li>Traitement administratif et remboursement ultérieur</li>
              </ol>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
                <div className="text-yellow-700">
                  <p className="font-bold mb-2">Important :</p>
                  <ul className="space-y-2">
                    <li>Le remboursement <strong>peut ne pas couvrir la totalité des frais</strong> dans certains cas</li>
                    <li>Le processus de remboursement <strong>peut prendre un certain temps</strong>, en fonction des procédures administratives</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Documents requis pour le remboursement :</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Ordonnance médicale originale</li>
                <li>Paquets de médicaments utilisés (comme preuve)</li>
                <li>Factures originales</li>
                <li>Immatriculation et numéro de téléphone de l'étudiant</li>
                <li>Nature de la maladie indiquée sur l'ordonnance</li>
              </ul>
            </div>
          </section>

          {/* Section 3: Cas Chirurgicaux */}
          <section className="bg-white rounded-lg shadow-md p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Cas d'Intervention Chirurgicale
            </h2>
            <div className="prose prose-green max-w-none">
              <p className="text-gray-600 mb-4">
                L'AMCI maintient la <strong>prise en charge directe</strong> pour les cas nécessitant une intervention chirurgicale.
              </p>
              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">Procédure pour les cas chirurgicaux :</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-600">
                <li>Soumission des devis et notes médicales</li>
                <li>Approbation sous <strong>48 heures</strong></li>
                <li>Prise en charge directe des frais d'opération</li>
              </ol>
            </div>
          </section>

          {/* Section 4: Recommandations */}
          <section className="bg-white rounded-lg shadow-md p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Recommandations aux Assurés
            </h2>
            <div className="prose prose-green max-w-none">
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li><strong>Planifier les dépenses médicales</strong> en tenant compte des délais de remboursement</li>
                <li><strong>Vérifier la couverture exacte</strong> des frais avant de réaliser tout examen</li>
                <li><strong>Conserver soigneusement</strong> tous les justificatifs (factures, ordonnances, etc.)</li>
                <li><strong>Préparer à l'avance</strong> tous les documents nécessaires pour faciliter le processus</li>
              </ul>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-6">
                <p className="text-green-700">
                  <strong>Conseil :</strong> En cas de doute sur la procédure à suivre, n'hésitez pas à <strong>contacter directement l'AMCI</strong> ou votre représentant UGESM local.
                </p>
              </div>
            </div>
          </section>

          {/* Bouton de retour */}
          <div className="text-center pt-8">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
