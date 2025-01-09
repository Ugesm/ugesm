'use client'

import { useState } from 'react'
import MainLayout from '@/components/layouts/MainLayout'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/shared/Footer'

export default function BourseAMCIPage() {
  const [matricule, setMatricule] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleRedirectToCesam = () => {
    window.open('https://cesamcentrale.org/code-de-bourse/', '_blank')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#1a472a] mb-4">
              Bourse AMCI
            </h1>
            <p className="mt-2 text-xl text-gray-600 max-w-3xl mx-auto">
              Guide complet pour l'obtention et le renouvellement de la bourse de l'Agence Marocaine de Coopération Internationale
            </p>
          </div>

          <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
            {/* Procédure à l'AMCI */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-[#2e7d32] to-[#388e3c] px-6 py-4">
                <h2 className="text-2xl font-semibold text-white">Procédure à l'AMCI</h2>
              </div>
              <div className="p-6">
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#4caf50] mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Vous serez accompagné par le chargé académique ou un membre du bureau</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#4caf50] mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Remplir la fiche de renseignement avec attention (éviter les erreurs)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#4caf50] mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Prévoir les originaux ET photocopies de tous les documents</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Paiement de la Bourse */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-[#2e7d32] to-[#388e3c] px-6 py-4">
                <h2 className="text-2xl font-semibold text-white">Paiement de la Bourse</h2>
              </div>
              <div className="p-6">
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#4caf50] mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="font-medium">Premier versement :</span>
                      <ul className="ml-6 mt-2 space-y-2">
                        <li>1050 DH pour septembre (450 DH retenus pour l'assurance obligatoire)</li>
                        <li>Liste des codes partagée 7-10 jours après l'arrivée</li>
                        <li>Récupération uniquement dans les agences Banque Populaire</li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Documents requis */}
          <div className="mt-8 bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-[#2e7d32] to-[#388e3c] px-6 py-4">
              <h2 className="text-2xl font-semibold text-white">Documents Requis</h2>
            </div>
            <div className="p-6">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-medium text-[#1a472a] mb-4">Première Année</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-[#4caf50] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Attestation d'inscription
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-[#4caf50] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Photocopie du passeport
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-[#4caf50] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Numéro de matricule
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-[#1a472a] mb-4">Renouvellement (à partir de la 2ème année)</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-[#4caf50] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Attestation d'inscription (copie conforme)
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-[#4caf50] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Relevé de notes de l'année précédente (copie conforme)
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-[#4caf50] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Passeport (copie conforme)
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-[#4caf50] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Carte de séjour (copie conforme)
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-[#4caf50] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Fiche de renouvellement (à télécharger sur le site AMCI)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Section Récupération Code Bourse */}
          <div className="mt-8 bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-[#2e7d32] to-[#388e3c] px-6 py-4">
              <h2 className="text-2xl font-semibold text-white">Récupération du Code Bourse</h2>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-[#1a472a]">Comment récupérer votre code bourse ?</h3>
                  <ol className="list-decimal list-inside space-y-3 text-gray-700">
                    <li>Cliquez sur le bouton "Récupérer mon code bourse" ci-dessous</li>
                    <li>Vous serez redirigé vers le site CESAM</li>
                    <li>Entrez votre numéro de matricule dans le champ prévu</li>
                    <li>Votre code bourse s'affichera immédiatement</li>
                  </ol>
                </div>
                
                <div className="bg-[#e8f5e9] border border-[#c8e6c9] p-4 rounded-lg">
                  <p className="text-sm text-gray-700">⚠️ Le code change tous les deux mois. Conservez-le en lieu sûr.</p>
                </div>

                <div className="text-center pt-4">
                  <a
                    href="https://cesamcentrale.org/code-de-bourse/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-xl text-white bg-gradient-to-r from-[#2e7d32] to-[#388e3c] hover:from-[#1b5e20] hover:to-[#2e7d32] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    Récupérer mon code bourse
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bouton de contact */}
          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 text-base font-medium rounded-xl text-white bg-gradient-to-r from-[#2e7d32] to-[#388e3c] hover:from-[#1b5e20] hover:to-[#2e7d32] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Besoin d'aide ? Contactez-nous
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
