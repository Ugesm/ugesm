'use client';

import { notFound } from "next/navigation";
import Image from "next/image";
import { posts } from "@/data/posts";
import Link from "next/link";
import { motion } from "framer-motion";

interface PostPageProps {
  params: {
    id: string;
  };
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function PostPage({ params }: PostPageProps) {
  const post = posts.find((p) => p.id === params.id);

  if (!post) {
    notFound();
  }

  return (
    <motion.main 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-24"
    >
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative h-[400px] mb-8"
      >
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center gap-4 mb-4"
              >
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-green-600 text-white text-sm px-3 py-1 rounded"
                >
                  {post.date}
                </motion.div>
                <div className="text-white/80">
                  {post.category}
                </div>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl font-bold text-white mb-6"
              >
                {post.title}
              </motion.h1>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex items-center text-white"
              >
                <Image
                  src={post.author.image || '/images/default-avatar.jpg'}
                  alt={post.author.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="ml-2">{post.author.name}</span>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Contenu principal */}
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.8, delay: 0.8 }}
            className="prose prose-lg max-w-none mb-12"
          >
            <div className="whitespace-pre-wrap text-gray-700">
              {post.content}
            </div>
          </motion.div>

          {/* Galerie photos */}
          {post.gallery && post.gallery.length > 0 && (
            <motion.div 
              variants={container}
              initial="hidden"
              animate="show"
              className="mb-12"
            >
              <motion.h2 
                variants={fadeIn}
                className="text-2xl font-bold text-gray-900 mb-6"
              >
                Galerie photos
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {post.gallery.map((image, index) => (
                  <motion.div 
                    key={index}
                    variants={fadeIn}
                    whileHover={{ scale: 1.05 }}
                    className="relative h-64 cursor-pointer overflow-hidden rounded-lg"
                  >
                    <Image
                      src={image}
                      alt={`Photo ${index + 1} - ${post.title}`}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Documents */}
          {post.documents && post.documents.length > 0 && (
            <motion.div 
              variants={container}
              initial="hidden"
              animate="show"
              className="mb-12"
            >
              <motion.h2 
                variants={fadeIn}
                className="text-2xl font-bold text-gray-900 mb-6"
              >
                Documents
              </motion.h2>
              <div className="grid gap-4">
                {post.documents.map((doc, index) => (
                  <motion.a
                    key={index}
                    variants={fadeIn}
                    whileHover={{ scale: 1.02 }}
                    href={doc.url}
                    className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="w-6 h-6 text-gray-500 mr-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-gray-900 font-medium">
                      {doc.title}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}

          {/* Vidéos */}
          {post.videos && post.videos.length > 0 && (
            <motion.div 
              variants={container}
              initial="hidden"
              animate="show"
              className="mb-12"
            >
              <motion.h2 
                variants={fadeIn}
                className="text-2xl font-bold text-gray-900 mb-6"
              >
                Vidéos
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {post.videos.map((video, index) => (
                  <motion.a
                    key={index}
                    variants={fadeIn}
                    whileHover={{ scale: 1.05 }}
                    href={video.url}
                    className="group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="relative h-48 mb-2 overflow-hidden rounded-lg">
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                        <svg
                          className="w-12 h-12 text-white transform transition-transform duration-300 group-hover:scale-110"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                    </div>
                    <p className="text-gray-900 font-medium group-hover:text-green-600 transition-colors">
                      {video.title}
                    </p>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}

          {/* Retour aux actualités */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center"
          >
            <Link
              href="/actualites"
              className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Retour aux actualités
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.main>
  );
}
