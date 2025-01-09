'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      console.log('Envoi de la requête avec email:', email);
      
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
        cache: 'no-store',
      });

      console.log('Statut de la réponse:', response.status);
      
      let data;
      try {
        data = await response.json();
        console.log('Données reçues:', data);
      } catch (jsonError) {
        console.error('Erreur lors du parsing JSON:', jsonError);
        throw new Error('Erreur lors de la lecture de la réponse');
      }

      if (response.ok) {
        setStatus('success');
        setMessage(data.message || 'Merci pour votre inscription ! Vous recevrez bientôt nos actualités.');
        setEmail('');
      } else {
        console.error('Erreur serveur:', data);
        setStatus('error');
        setMessage(data.error || 'Une erreur est survenue. Veuillez réessayer plus tard.');
      }
    } catch (error) {
      console.error('Erreur lors de la requête:', error);
      setStatus('error');
      setMessage('Une erreur de connexion est survenue. Veuillez réessayer.');
    } finally {
      if (status === 'loading') {
        setStatus('idle');
      }
    }
  };

  return (
    <div className="bg-green-600 py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">S'inscrire à la newsletter</h2>
            <p className="text-sm md:text-base text-gray-100">
              Recevez en avant-première les dernières nouveautés de l'UGESM
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex w-full md:w-auto mt-4 md:mt-0">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 md:w-64 lg:w-80 px-4 md:px-6 py-2 md:py-3 text-sm md:text-base rounded-l-full text-gray-900 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={status === 'loading'}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className={`px-4 md:px-8 py-2 md:py-3 bg-gray-900 text-white text-sm md:text-base rounded-r-full hover:bg-gray-800 transition-colors duration-300 ${
                status === 'loading' ? 'opacity-75 cursor-not-allowed' : ''
              }`}
            >
              {status === 'loading' ? 'Inscription...' : "S'inscrire"}
            </button>
          </form>
        </div>
        {message && (
          <div className="mt-4 text-center">
            <div
              className={`inline-block px-4 py-2 rounded-full ${
                status === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}
            >
              {message}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
