'use client';

import { useState } from 'react';
import { sections } from '@/data/sections';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

export default function ContactPage() {
  const [selectedSection, setSelectedSection] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    section: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique d'envoi du formulaire
    console.log('Form submitted:', formData);
    // Réinitialiser le formulaire
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      section: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (name === 'section') {
      setSelectedSection(value);
    }
  };

  const selectedSectionData = sections.find(s => s.id === selectedSection);

  return (
    <main className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/contact-hero.png"
            alt="Contact UGESM"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-xl md:text-2xl font-light">
            Nous sommes là pour répondre à vos questions et vous accompagner
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>

              <div>
                <label htmlFor="section" className="block text-sm font-medium text-gray-700">
                  Section
                </label>
                <select
                  id="section"
                  name="section"
                  value={formData.section}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                >
                  <option value="">Sélectionnez une section</option>
                  {sections.map((section) => (
                    <option key={section.id} value={section.id}>
                      {section.city}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Envoyer le message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Informations de contact</h2>
            
            {selectedSectionData ? (
              <div className="space-y-8">
                <h3 className="text-xl font-semibold text-gray-900">Section {selectedSectionData.city}</h3>
                
                {selectedSectionData.address && (
                  <div className="flex items-start space-x-4">
                    <FaMapMarkerAlt className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Adresse</h4>
                      <p className="text-gray-600">{selectedSectionData.address}</p>
                    </div>
                  </div>
                )}

                {selectedSectionData.email && (
                  <div className="flex items-start space-x-4">
                    <FaEnvelope className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <a href={`mailto:${selectedSectionData.email}`} className="text-green-600 hover:underline">
                        {selectedSectionData.email}
                      </a>
                    </div>
                  </div>
                )}

                {selectedSectionData.phone && (
                  <div className="flex items-start space-x-4">
                    <FaPhone className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Téléphone</h4>
                      <a href={`tel:${selectedSectionData.phone}`} className="text-green-600 hover:underline">
                        {selectedSectionData.phone}
                      </a>
                    </div>
                  </div>
                )}

                {selectedSectionData.socialMedia && (
                  <div className="pt-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Réseaux sociaux</h4>
                    <div className="flex space-x-4">
                      {selectedSectionData.socialMedia.facebook && (
                        <a
                          href={selectedSectionData.socialMedia.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-green-600"
                        >
                          <FaFacebook className="w-6 h-6" />
                        </a>
                      )}
                      {selectedSectionData.socialMedia.instagram && (
                        <a
                          href={selectedSectionData.socialMedia.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-green-600"
                        >
                          <FaInstagram className="w-6 h-6" />
                        </a>
                      )}
                      {selectedSectionData.socialMedia.twitter && (
                        <a
                          href={selectedSectionData.socialMedia.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-green-600"
                        >
                          <FaTwitter className="w-6 h-6" />
                        </a>
                      )}
                      {selectedSectionData.socialMedia.linkedin && (
                        <a
                          href={selectedSectionData.socialMedia.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-green-600"
                        >
                          <FaLinkedin className="w-6 h-6" />
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-gray-600">
                <p>Sélectionnez une section pour voir ses informations de contact.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
