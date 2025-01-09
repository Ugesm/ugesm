import { Book } from '@/types/book';

export const books: Book[] = [
  {
    id: '1',
    title: 'Échos de la Diaspora',
    author: {
      name: 'Mamadou Seck',
      university: 'Université Mohammed V de Rabat',
      image: '/images/authors/mamadou.jpg'
    },
    publishDate: '2024-01-10',
    description: 'Un recueil de poèmes explorant l\'expérience des étudiants sénégalais au Maroc, leurs espoirs, leurs défis et leurs réussites.',
    coverImage: '/images/books/echos-diaspora.jpg',
    category: 'poesie',
    tags: ['Poésie', 'Diaspora', 'Culture', 'Immigration'],
    language: 'français',
    pageCount: 120,
    isbn: '978-2-123456-78-9'
  },
  {
    id: '2',
    title: 'Guide de l\'Étudiant Sénégalais au Maroc',
    author: {
      name: 'Aissatou Diop',
      university: 'Université Hassan II de Casablanca',
      image: '/images/authors/aissatou.jpg'
    },
    publishDate: '2023-12-15',
    description: 'Un guide pratique pour les étudiants sénégalais qui souhaitent poursuivre leurs études au Maroc. Conseils, astuces et informations essentielles.',
    coverImage: '/images/books/guide-etudiant.jpg',
    category: 'academique',
    tags: ['Guide', 'Études', 'Vie pratique', 'Integration'],
    language: 'français',
    pageCount: 200,
    isbn: '978-2-234567-89-0'
  },
  {
    id: '3',
    title: 'Recherches en Énergies Renouvelables',
    author: {
      name: 'Ibrahima Fall',
      university: 'IRESEN',
      image: '/images/authors/ibrahima.jpg'
    },
    publishDate: '2024-01-05',
    description: 'Une compilation de recherches sur les énergies renouvelables menées par des étudiants sénégalais au Maroc.',
    coverImage: '/images/books/recherches-energie.jpg',
    category: 'recherche',
    tags: ['Recherche', 'Énergie', 'Développement durable'],
    language: 'français',
    pageCount: 300,
    isbn: '978-2-345678-90-1'
  }
];
