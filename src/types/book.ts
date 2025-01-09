export interface Book {
  id: string;
  title: string;
  author: {
    name: string;
    university: string;
    image?: string;
  };
  publishDate: string;
  description: string;
  coverImage: string;
  pdfUrl?: string;
  category: 'roman' | 'poesie' | 'essai' | 'academique' | 'recherche';
  tags: string[];
  language: 'français' | 'anglais' | 'arabe' | 'wolof';
  pageCount: number;
  isbn?: string;
}
