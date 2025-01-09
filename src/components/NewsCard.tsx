import { Post } from '@/types/post';
import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

interface NewsCardProps {
  post: Post;
}

export default function NewsCard({ post }: NewsCardProps) {
  const formattedDate = format(new Date(post.date), 'dd MMMM yyyy', { locale: fr });
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      {post.image && (
        <div className="relative h-48">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">
            {post.category}
          </span>
          <span className="text-sm text-gray-500">
            {formattedDate}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {post.title}
        </h3>
        <p className="text-gray-600 mb-4">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {post.author.image ? (
              <Image
                src={post.author.image}
                alt={post.author.name}
                width={32}
                height={32}
                className="rounded-full"
              />
            ) : (
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-semibold">
                  {post.author.name.charAt(0)}
                </span>
              </div>
            )}
            <span className="ml-2 text-sm text-gray-600">{post.author.name}</span>
          </div>
          <Link
            href={`/actualites/${post.id}`}
            className="text-green-600 hover:text-green-700 font-medium"
          >
            Lire la suite
          </Link>
        </div>
      </div>
    </div>
  );
}
