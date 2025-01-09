import { publications } from '@/data/publications';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PublicationPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return publications.map((publication) => ({
    id: publication.id,
  }));
}

export default function PublicationPage({ params }: PublicationPageProps) {
  const publication = publications.find((p) => p.id === params.id);

  if (!publication) {
    notFound();
  }

  // Fonction pour extraire l'ID de la vidéo YouTube
  const getYouTubeVideoId = (url: string) => {
    try {
      const urlObj = new URL(url);
      if (urlObj.hostname === 'youtu.be') {
        return urlObj.pathname.slice(1).split('?')[0];
      }
      if (urlObj.hostname === 'www.youtube.com' || urlObj.hostname === 'youtube.com') {
        return urlObj.searchParams.get('v');
      }
    } catch (e) {
      console.error('Erreur lors de l\'extraction de l\'ID YouTube:', e);
    }
    return null;
  };

  const videoId = publication.videoUrl ? getYouTubeVideoId(publication.videoUrl) : null;

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-8">
          <div className="relative h-96 rounded-xl overflow-hidden mb-8">
            {publication.videoUrl ? (
              <a
                href={publication.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative w-full h-full group"
              >
                <Image
                  src={publication.image}
                  alt={publication.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center group-hover:bg-black/70 transition-colors">
                  <div className="flex flex-col items-center">
                    <svg 
                      className="w-20 h-20 text-green-600 group-hover:text-green-500 transition-colors" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                    </svg>
                    <span className="text-white font-semibold mt-4">Regarder sur YouTube</span>
                  </div>
                </div>
              </a>
            ) : (
              <>
                <Image
                  src={publication.image}
                  alt={publication.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
              </>
            )}
            <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg">
              <div className="text-2xl font-bold">{publication.date.day}</div>
              <div className="text-sm">{publication.date.month}</div>
              <div className="text-sm">{publication.date.year}</div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="flex items-center mb-6">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={publication.author.image}
                  alt={publication.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="ml-4">
                <p className="text-lg font-medium text-gray-900">{publication.author.name}</p>
                <p className="text-gray-500">{publication.author.university}</p>
              </div>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {publication.title}
            </h1>

            <div className="flex items-center text-gray-500 mb-8">
              <span className="capitalize bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                {publication.category}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {publication.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block px-3 py-1 text-sm text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-3xl mx-auto">
          <p className="text-gray-600 whitespace-pre-line leading-relaxed">
            {publication.content}
          </p>

          {/* PDF Download Button */}
          {publication.pdfUrl && (
            <div className="mt-8">
              <a
                href={publication.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Télécharger le PDF
              </a>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="max-w-3xl mx-auto mt-12 pt-8 border-t border-gray-200">
          <div className="flex justify-between">
            <Link
              href="/publications"
              className="inline-flex items-center text-green-600 hover:text-green-500 transition-colors"
            >
              <svg className="mr-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Retour aux publications
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
